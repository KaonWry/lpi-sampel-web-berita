import json
import subprocess
from pathlib import Path

def read_report(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
    
    report = json.loads(content)
    return report

test_configs = [
    {
        'config_name': 'Slow 3G',
        'config_path': './config/lighthouse-slow-3g.js',
        'output_path': '/output-slow-3g.json',
    },
    {
        'config_name': '3G',
        'config_path': './config/lighthouse-3g.js',
        'output_path': '/output-3g.json',
    },
    {
        'config_name': 'Slow 4G',
        'config_path': './config/lighthouse-slow-4g.js',
        'output_path': '/output-slow-4g.json',
    },
]


def lighthouse_test(test_count, page_adress, framework, config_path, output_path):
    output_all = []
    for i in range(test_count):
        print (f"Running test {i+1}/{test_count}...")
        subprocess.run(["lighthouse", page_adress, "--output", "json", "--output-path", "./report.json", "--config-path", config_path], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        report = read_report('report.json')
        result = report['audits']
        attempt_metrics = {i:{
            'fcp': result['first-contentful-paint']['numericValue'],
            'lcp': result['largest-contentful-paint']['numericValue'],
            'speed_index': result['speed-index']['numericValue'],
            'tbt': result['total-blocking-time']['numericValue'],
            'cls': result['cumulative-layout-shift']['numericValue'],
            'mfd': result['max-potential-fid']['numericValue']
        }}

        output_all.append(attempt_metrics)

    with open(f"./test-output/{framework}/{output_path}", 'w') as f:
        json.dump(output_all, f, indent=4)


page_adress = "http://127.0.0.1:8000"
framework = "laravel"
test_count = 20

Path(f"./test-output/{framework}").mkdir(parents=True, exist_ok=True)
for item in test_configs:
    print(f"Using config {item['config_name']}")
    lighthouse_test(test_count, page_adress, framework, item['config_path'], item['output_path'])
