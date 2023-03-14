import requests
import json

BASE = "http://127.0.0.1:5000/"


response = requests.put(
    BASE + "song/4", headers={'Content-type': 'application/json'}, data=json.dumps({"title": "Alan", "composer": "Johnson", "key": "B Major", "lyrics": "Plz work"}))
print(response.json())


# requests.put(
#     BASE + "song/5", headers={'Content-type': 'application/json'}, data=json.dumps({"title": "Blan", "composer": "Johnson", "key": "B Major", "lyrics": "Plz work"}))

# requests.put(
#     BASE + "song/6", headers={'Content-type': 'application/json'}, data=json.dumps({"title": "Clan", "composer": "Johnson", "key": "B Major", "lyrics": "Plz work"}))
