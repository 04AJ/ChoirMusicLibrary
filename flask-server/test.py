import requests
import json

BASE = "http://127.0.0.1:5000/"


# NOT WORKING :(
response = requests.put(
    BASE + "song/1", headers={'Content-type': 'application/json'}, data=json.dumps({"title": "Alan", "composer": "Johnson", "key": "B Major", "lyrics": "Plz work"}))
print(response.json())
requests.put(
    BASE + "song/2", headers={'Content-type': 'application/json'}, data=json.dumps({"title": "Blan", "composer": "Johnson", "key": "B Major", "lyrics": "Plz work"}))

requests.put(
    BASE + "song/3", headers={'Content-type': 'application/json'}, data=json.dumps({"title": "Clan", "composer": "Johnson", "key": "B Major", "lyrics": "Plz work"}))
input()

requests.delete(BASE + "song/3")
