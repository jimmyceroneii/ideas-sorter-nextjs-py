# ideas-sorter-nextjs-py
A small script and web app that grab a random sample of ideas from Trello and display them in NextJS. 

## Python
- I'm using Python here since I'm comfortable and it gets us moving the fastest. Plus making this as manual as possible early on means we can adapt quickly. 
- I'm hitting the Trello API with our endpoint (the endpoint and creds are in a local `.env` file) and returning a random list of ideas that are ready to be reviewed. 


## Typescript / React / NextJS
- I'm using NextJS here because many of our projects will want some amount of SSR for SEO. Using it here is similar enough to my typical React stack (basicaly identical at this point) so I can develop quickly while not painting us into a corner. 


## Process
1. Run `python3 fetch-ideas.py`
2. Copy & paste the output into the NextJS app
3. Run the next JS app (it auto deploys to Vercel)
