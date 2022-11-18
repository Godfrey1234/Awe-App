const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;


//Register fuction 
const createUser = (req, res) => {
    
    const {surname,email,fullname,password,confirm} = req.body; 
    let profilepic = "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
   
     console.log(email)
     console.log(surname)
     console.log(fullname)
    
    
  
    if(password == confirm){
  
     //checking if user already has an account
    pool.query('select * from aweusers where email = $1' ,[email],(error, results)=> {
      
      if (results.rowCount > 0) {
  
        res.send('user has already been registered')
      
      }else{
  
        pool.query('INSERT INTO aweusers (surname,email,fullname,password,profilepic) VALUES ($1,$2,$3,$4,$5) RETURNING email',[surname,email,fullname,password,profilepic],(error, results) => 
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
  
