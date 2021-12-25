const mysql = require("mysql");
const dotenv = require("dotenv");
var express = require("express");
var router = express.Router();
dotenv.config();
// create connection
const database = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.User,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
// Connect
database.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql connected....✅");
});
// Create Db
router.get("/createUsersTable", (req, res) => {
    let sql = "CREATE TABLE users(id init AUTO_INCREMENT,first_name VARCHAR(255),last_name VARCHAR(255),age init,address VARCHAR(255))";
    database.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
      res.send("table created");
    });
  });

module.exports = database;
