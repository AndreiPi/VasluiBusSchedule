import json

with open('../data/settings.json') as json_file:
    data = json.load(json_file)

DATA_PATH = data['locatia_datelor']