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


## Migraciones
- Crear el esqueleto para un modelo
```bash
npx sequelize-cli migration:generate --name create-model
```

Y luego crear dentro la estrucura correspondiente.

- Llenar con datos
```bash
npx sequelize-cli seed:generate --name create-data-model
```
y dentro del esqueleto que crea llenar con datos de pruebas.
