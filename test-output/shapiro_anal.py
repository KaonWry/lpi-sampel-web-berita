import json
from scipy import stats
from pathlib import Path

def load_json(file_path):
    with open(file_path, 'r') as f:
        data = json.load(f)
    return data

def extract_fcp_values(data):
    fcp_values = []
    for item in data:
        if isinstance(item, dict):
            for value in item.values():
                if isinstance(value, dict) and 'fcp' in value:
                    fcp_values.append(value['fcp'])
    return fcp_values

def calculate_shapiro(data):
    res = stats.shapiro(data)
    return res.statistic, res.pvalue

json_file = Path(__file__).with_name('react').joinpath('output-3g.json')
data = load_json(json_file)
fcp_values = extract_fcp_values(data)

print(f'Jumlah FCP: {len(fcp_values)}')
for value in fcp_values:
    print(f'FCP: {value}')

shapiro_statistic, shapiro_pvalue = calculate_shapiro(fcp_values)
print(f'Shapiro Statistic: {shapiro_statistic:.8f}')
print(f'Shapiro P-value: {shapiro_pvalue:.8f}')
