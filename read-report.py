import json
import subprocess

def read_report(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
    
    report = json.loads(content)
    return report

outputAll = []

for i in range(3):
    subprocess.run(["lighthouse", "http://localhost:3000", "--output", "json", "--output-path", "./report.json", "--config-path", "./config/lighthouse-slow-3g.js"], check=True)
    report = read_report('report.json')
    result = report["categories"]["performance"]["auditRefs"]

    attempt_metrics = []
    for item in result:
        if item.get('group') == 'metrics':
            attempt_metrics.append(item)

    outputAll.append(attempt_metrics)

with open('output.json', 'w') as f:
    json.dump(outputAll, f, indent=4)
