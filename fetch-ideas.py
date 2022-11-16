# This code sample uses the 'requests' library:
# http://docs.python-requests.org
import requests
import os
import random
from dotenv import load_dotenv

load_dotenv()

key = os.getenv('API_KEY')
token = os.getenv('TOKEN')
url = os.getenv('URL')

headers = {
   "Accept": "application/json"
}

query = {
   'key': key,
   'token': token
}

response = requests.request(
   "GET",
   url,
   headers=headers,
   params=query
)

randomSample = random.sample(response.json(), 10)

def getName(card):
  return card['name']

formattedSample = list(map(getName, randomSample))

print(formattedSample)
