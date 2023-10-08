# NodeApp

Website and API application.

## Install

Install dependencies:

```sh
$ npm install
```

Review database connection on /lib/connectMongoose.js (see "Start a MongoDB Server in MacOS or Linux")

Load initial data:

```sh
# this command deletes all the data in the database and create default data
$ npm run init-db
```

## Start

In production:

```sh
npm start
```

In development:

```sh
npm run dev
```

## Start a MongoDB Server in MacOS or Linux

From the folder of the server:

```sh
./bin/mongod --dbpath ./data
```

## Start Object Document Mapper Mongoose in MacOS or Linux

From your folder:

```sh
$ ./bin/mongosh
```


## API Endpoints

### GET api/anuncios

without filter
http://localhost:3000/api/anuncios

filterByName
http://localhost:3000/api/anuncios?name=Taladro

filterBybuySell
http://localhost:3000/api/anuncios?buySell=busqueda
http://localhost:3000/api/anuncios?buySell=venta

filterBytag
http://localhost:3000/api/anuncios?tags=motor

filterByprice
http://localhost:3000/api/anuncios?price=50

skip
http://localhost:3000/api/anuncios?skip=2

limit
http://localhost:3000/api/anuncios?skip=0&limit=1

fields
http://localhost:3000/api/anuncios?fields=tags%20-_id

## POST api/anuncios/

Post body with X-www-form-urlencoded format

## DELETE /api/agentes/

Delete by _id

---------------