const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;

//Register fuction 
const getAllUsers = (req, res) => {

      //checking if user already has an account
      pool.query('select * from aweusers',(error, results)=> {
       
        if (results.rowCount > 0) {
    
          res.send(results.rows)
          
        
        }else{
    
         res.send('error')
        }
        });
    


}


module.exports = {
    getAllUsers
  }  