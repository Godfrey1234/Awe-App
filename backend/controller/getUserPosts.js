const { request, response } = require("express");
const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;

//Register fuction 
const userPosts = (req, response) => {

  //sipho 
  
  let status = "Active"
  
    pool.query('SELECT * FROM posts where status = $1 ORDER BY id DESC', [status],(error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })

  }

module.exports = {
    userPosts,

  }  