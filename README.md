Welcome to flight Service 

## Project Setup
- clone the project on your local
- Execute the npm install on the same path as of your root directory of the downloaded project 
- Create a .env file in the root directory and add the following environment variables
   - PORT - 3000;
- Inside the src/config folder create a new file 'config.json' and then add the following piece of json.


  "development": {
    "username": "root",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },

  - once you have added your db config as listed above , go to src folder from your terminal and execute 
     'npx sequelize db:create'
     and then execute

     'npx sequelize db: migrate'

  ## DB Design
   - Airplane Table
   - Flight
   - Airport
   - City

- A flights belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but airport belong to one city.
- One airport can have many flights, but a flight belong to one airport.