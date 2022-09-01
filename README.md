This repo contains the backend code for [callypso](https://github.com/MohammedAK1991/callypso)

## Getting Started

### These instruction will help you setup a local development instance of the app.

Install dependencies
```bash
cd client/
npm i
# or
yarn install
```

We used Firebase for authentication and database, so you will need to start a free account at this [link](https://console.firebase.google.com/u/1/) first

Setup prerequisites

For an example how to fill .secret folder see .secret.example

Follow this [link](https://clemfournier.medium.com/how-to-get-my-firebase-service-account-key-file-f0ec97a21620) for a quick tutorial on how to get the serviceAccountKey.json file needed to initialize firebase in your app

Run the development server:

```bash
npm run start-dev
# or
yarn start-dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

In any case the backend has been hosted by heroku at this [link](https://callypso.herokuapp.com/)


#### Things i would improve
- Test all the API endpoints with mocha and chai
- Compose the project in docker

