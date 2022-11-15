
const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;

//Register fuction 
const login = (req, res) => {

    const {email,password} = req.body; 
  
    console.log(email)
    console.log(password)
  
    if(email && password){
  
      //checking if user already has an account
     pool.query('select * from aweusers where email = $1 And password = $2' ,[email,password],(error, results)=> {
       
       if (results.rowCount > 0) {
   
         res.send(results.rows)
       
       }else{
   
        res.send('invalid login details')
       }
       });
   
     }else{
   
       res.send('enter username and password')
     }
    
  
  
  }


  module.exports = {
    login
  }  