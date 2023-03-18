const mysql = require("mysql2");

// Taken from MySQL page

const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "sdfsql",
    database: "employees_db",
  },
  console.log("Connected!")
);

module.exports = connection;
