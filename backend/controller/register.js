const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;


//Register fuction 
const createUser = (req, res) => {
    
    const {surname,email,fullname,password,confirm} = req.body; 
   
     console.log(email)
     console.log(surname)
     console.log(fullname)
    
    
  
    if(password == confirm){
  
     //checking if user already has an account
    pool.query('select * from aweusers where email = $1' ,[email],(error, results)=> {
      
      if (results.rowCount > 0) {
  
        res.send('user has already been registered')
      
      }else{
  
        pool.query('INSERT INTO aweusers (surname,email,fullname,password) VALUES ($1,$2,$3,$4) RETURNING email',[surname,email,fullname,password],(error, results) => 
        {
    
            if (error) 
              {
                res.send(`sytem error `);
              }
            else{
            
                res.send('successfully registered')
              
            }  
           
                
        });
      }
      });
  
    }else{
  
      res.send('password dont match')
    }
    
  };

  module.exports = {
 
    createUser
   
    
  }    
  
