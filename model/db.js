const mysql = require("mysql");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "physical_table",
});

module.exports = connection;
