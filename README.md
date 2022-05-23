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

## Seeders

### Admin Users
 firstName | lastName | email           | password    | roleId | image |
---------- | -------- |--------------   |----------   |--------|-------|
 Alina    | Murillo   | alina@mail.com | A.alina123 |   1    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
 Patricio    | Zapata   | patricio@mail.com | A.patricio123 |   1    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
 Santiago    | Puertas   | santiago@mail.com | A.santi123 |   1    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
 Arnau    | Montes   | arnau@mail.com | A.arnau123 |   1    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
 Brenda    | Saez   | brenda@mail.com | A.brenda123 |   1    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
 Silvia    | Lopez   | silviaLopez@mail.com | A.silvia123 |   1    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
 Anton    | Travis   | anton@mail.com | A.anton123 |   1    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
 John    | Lemon   | johnLemon@mail.com | A.john123 |   1    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
 Ted    | Buck   | ted@mail.com | A.ted123 |   1    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
 Courtney    | Clark   |courtney@mail.com | A.courtney123 |   1    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png

### Standard Users
 firstName | lastName | email           | password    | roleId | image |
---------- | -------- |--------------   |----------   |--------|-------|
 Wilton    | Ashley   | wilton@mail.com | A.wilton123 |   2    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
 Carlo    | Suarez   | carlo@mail.com | A.carlo123 |   2    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
  Edwin    | Barton   | edwin@mail.com | A.edwin123 |   2    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
  Selena    | Blair   | selena@mail.com | A.selena123 |   2    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
  Connie    | Jefferson   | connie@mail.com | A.connie123 |   2    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
  Silvia    | Pardo   | silvia@mail.com | A.silvia123 |   2    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
  Noemi    | Galloway   | noemi@mail.com | A.noemi123 |   2    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
  John    | Pruitt   | john@mail.com | A.john123 |   2    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
  Federico    | Velez   | federico@mail.com | A.federico123 |   2    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png
  Lisa    | French   | lisa@mail.com | A.lisa123 |   2    |https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png



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

npx jest --detectOpenHandles ./test/users.test.js