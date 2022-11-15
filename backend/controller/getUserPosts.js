const { request, response } = require("express");
const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;

//Register fuction 
const userPosts = (req, response) => {


  //sipho
  

 

 
    pool.query('SELECT * FROM posts ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })





  }

  






module.exports = {
    userPosts,

  }  