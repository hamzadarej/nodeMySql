const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

// create connection
const database = mysql.createConnection({
  host: process.env.HOST,
  user: "root",
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
/*app.get("/createDb", (req, res) => {
    let sql = "create database nodeMyQql";
    database.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
      res.send("dateBase created");
    });
  });*/

module.exports = database;
