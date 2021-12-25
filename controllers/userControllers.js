
const database = require("../dbService");

const allControllers = {};

//add ome user
allControllers.addOneUser = async (req, res) => {
  let user = { first_name: "Hamza", last_name: "Darej", age: "28",address:"germany" };
  let sql = "INSERT INTO users SET ?";
  database.query(sql, user, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.send("first user added successfully");
  });
};
//add user two
allControllers.addSecondUser = async (req, res) => {
  let user = { first_name: "Emna", last_name: "Darej", age: "23" ,address: "french"};
  let sql = "INSERT INTO users SET ?";
  database.query(sql, user, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.send("second user added successfully");
  });
};
// get one user by Id
allControllers.getOneById = async (req, res) => {
    let sql = `SELECT id, first_name, last_name, age ,address FROM users WHERE id=${req.params.id}`;
    database.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
      res.send(result);
    });
  };
  //getAllUsers 
  allControllers.getAllUsers = async (req, res) => {
    let sql = `SELECT id, first_name, last_name, age FROM users WHERE 1`;
    database.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
      res.send(result);
    });
  };
  //updateOneUser
  allControllers.updateOneUser = async (req, res) => {
    let newAddress = "Tunisia";
    let sql = `UPDATE users SET address='${newAddress}' WHERE id=${req.params.id}`;
    database.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
      res.send("user has been updated");
    });
  };
  //delete user
  allControllers.deleteOneUser = async (req, res) => {
    let sql = `DELETE FROM users  WHERE id=${req.params.id}`;
    database.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
      res.send("user has been deleted");
    });
  };



module.exports = allControllers;
