
const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;

//Register fuction 
const getpost_one = (req, res) => {


 

  const email = req.params.email;
  let status = "Active"

  pool.query('SELECT * from posts where email = $1 AND status = $2',[email,status],(error, results)=> {
     

     if(error){
      throw error

     }else {
  
      res.status(200).send(results.rows)
      
     }
  })




}


module.exports = {
    getpost_one
  }  