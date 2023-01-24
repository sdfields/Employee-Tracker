const inquirer = require('inquirer');
const mysql = require('mysql2');




// Taken from MySQL page

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });