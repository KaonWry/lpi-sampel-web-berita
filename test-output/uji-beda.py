import json
from scipy import stats
from pathlib import Path

def load_data(file_path):
    with open(file_path, 'r') as f:
        data = json.load(f)
    return data

def extract_metric(data, metric_name):
    values = []
    for item in data:
        if isinstance(item, dict):
            for val_obj in item.values():
                if isinstance(val_obj, dict) and metric_name in val_obj:
                    values.append(val_obj[metric_name])
    return values

def main():
    frameworks = ['laravel', 'nextjs', 'nuxtjs', 'react', 'vue']
    networks = ['3g', 'slow-3g', 'slow-4g']
    metrics = ['fcp', 'lcp', 'speed_index', 'tbt']

    data_store = {}
    base_path = Path(__file__).parent

    # Load all data
    for fw in frameworks:
        data_store[fw] = {}
        for nw in networks:
            file_path = base_path / fw / f'output-{nw}.json'
            if file_path.exists():
                raw_data = load_data(file_path)
                data_store[fw][nw] = {m: extract_metric(raw_data, m) for m in metrics}
            else:
                print(f"Warning: {file_path} not found")

    print("=== Kruskal-Wallis H-Test (Comparing all frameworks) ===")
    for nw in networks:
        print(f"\nNetwork Condition: {nw}")
        print(f"{'Metric':<15} | {'H-Statistic':<12} | {'p-value':<12}")
        print("-" * 45)
        for m in metrics:
            groups = []
            for fw in frameworks:
                if nw in data_store[fw] and m in data_store[fw][nw]:
                    groups.append(data_store[fw][nw][m])
            
            if len(groups) < 2:
                print(f"{m:<15} | Not enough data")
                continue
                
            try:
                stat, p = stats.kruskal(*groups)
                print(f"{m:<15} | {stat:>12.4f} | {p:.8e}")
            except ValueError as e:
                print(f"{m:<15} | Error: {str(e)}")

    print("\n" + "="*60)
    print("=== Mann-Whitney U Test (Post-hoc / Specific Comparisons) ===")
    pairs = [('react', 'nextjs'), ('vue', 'nuxtjs')]
    for f1, f2 in pairs:
        print(f"\nComparison: {f1} vs {f2}")
        for nw in networks:
            print(f"  Network: {nw}")
            print(f"    {'Metric':<13} | {'U-Statistic':<12} | {'p-value':<12}")
            print(f"    {'-' * 43}")
            for m in metrics:
                if nw in data_store[f1] and nw in data_store[f2]:
                    g1 = data_store[f1][nw][m]
                    g2 = data_store[f2][nw][m]
                    
                    if not g1 or not g2:
                        print(f"    {m:<13} | No data")
                        continue
                        
                    try:
                        stat, p = stats.mannwhitneyu(g1, g2, alternative='two-sided')
                        print(f"    {m:<13} | {stat:>12.4f} | {p:.8e}")
                    except ValueError as e:
                        print(f"    {m:<13} | Error: {str(e)}")

if __name__ == "__main__":
    main()
