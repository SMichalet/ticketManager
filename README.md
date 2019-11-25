# Ticket manager API 

## Setup

1. `npm install`
2. `npm start`
3. Server is running by default on `http://localhost:5000`

## Requirements 

Npm and node should be install to run the application. 
* npm version >= `6.12.0`
* node version >= `v12.13.0`

To install node follow the installation guide https://nodejs.org/en/download/

## Tests

To execute acceptance tests : 

1. `npm run test`

## General Information

This API allows to manage ticket (title, description) by exporting 2 endpoints: 
* creating ticket 
* listing ticket

As a sample, it uses in-memory database to store tickets. 

You can find the API explorer on your browser on `http://localhost:5000/explorer/` after launching the application.
