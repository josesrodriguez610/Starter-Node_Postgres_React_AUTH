## NODE REACT BOILERPLATE

### Configuration

#### Option 1:

- install dependencies for main directory :
  `npm install`

- install dependencies for server:
  `cd server && npm install`

-install dependencies for client:
`cd client && npm install`

#### Option 2:

or run:

`bash dependencies.sh`

Create a .env file in server folder and add Environment Variables

##### Environment variable

`PORT`
`NODE_ENV`

##### Database environment variables

`DATABASE_USERNAME`
`DATABASE_PASSWORD`
`DATABASE_NAME`
`DATABASE_HOST`
`DATABASE_DIALECT`

Run:

#### Development

###### Server Only

`cd server && npm run dev`

###### Client Only

`cd client && npm start`

### RUN FULL APP

For development run `npm run dev` in your main directory

##### Environment variable

`cd server`

`NODE_ENV=development`

#### Production

For production `run npm prod` in your main directory

##### Environment variable

`cd server`

`NODE_ENV=production`

### Postgres Database

#### Create a Database

To create a database run

`cd server && sequelize db:create database_name`
