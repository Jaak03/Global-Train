# Global-Train
PWA to sync training across timezones.

## Tech stack
- VueJS
- Webpack
- Vuetify
- MongoDB

## API
The API endpoints can be found in the api/ directory. This directory contains a lambda service with functions for:
   1. /user
      1. /login
      2. /register
      3. /:id
         1. /settings/change
         2. /workout
            1. /
            2. /start
            3. /stop

These endpoints are private and require an API key to access and use the endpoints. 

## Datastore
A mongodb database on Mongo Atlas is being used as a datastore to store the users, workouts and settings for the application. For a schema of the databases that are being used, see the monogoose models in `api/models/schemas`.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).