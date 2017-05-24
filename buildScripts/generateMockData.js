/* This script generates mock data fro local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

 /* eslint-disable no-console */

 //import jsf from 'json-schema-faker';
 import {schema} from './mockDataSchema';
 import { mockServer} from 'graphql-tools';
 import casual from 'casual-browserify';
 import fs from 'fs';
 import chalk from 'chalk';


 // Mock functions are defined per type and return an
 // object with some or all of the fields of that type.
 // If a field on the object is a function, that function
 // will be used to resolve the field if the query requests it.
 const myMockServer = mockServer(schema, {
     User: () => ({
         id: () => casual.integer(0,120),
         firstName: casual.name,
         lastName: casual.name,
         email: casual.email
     })
 });

 myMockServer.query(`
 query getUser{
    user(id: 6) {
        id
        firstName
        lastName
        email
    }
 }`).then(function (res) {
     const json = JSON.stringify(res);

     fs.writeFile("./src/api/db.json", json, function (err) {
         if (err) {
             return console.log(chalk.red(err));
         } else {
             console.log(chalk.green("Mock data generated"));
         }
     });
 });