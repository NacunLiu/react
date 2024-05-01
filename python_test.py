import requests
resp = requests.get("https://dev.acucloud.accuenergy/com", headers={"Content-Type":"application/json"})
print(resp)