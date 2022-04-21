# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```

## Routes 

AUTH

Register 
route = '/auth/register'. 
body = {firstName, lastName, email, password(at least one uppercase, one lowercase, one number, in a range of 8 to 20)}

