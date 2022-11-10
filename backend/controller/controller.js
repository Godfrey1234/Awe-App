const Pool = require('pg').Pool



//code for database connection
const pool = new Pool({
    user: 'admin',  //Database username
    host: 'localhost', 
    database: 'awe',
    password: 'admin12345',
    port: 5432,
  })


//Register fuction 
const createUser = (req, res) => {
    
  const {contact,email,fullname,password,confirm} = req.body; 
   console.log(contact)
   console.log(email)
  
  

  if(password == confirm){

   //checking if user already has an account
  pool.query('select * from aweusers where email = $1' ,[email],(error, results)=> {
    
    if (results.rowCount > 0) {

      res.send('user has already been registered')
    
    }else{

      pool.query('INSERT INTO aweusers (contact,email,fullname,password) VALUES ($1,$2,$3,$4) RETURNING email',[contact,email,fullname,password],(error, results) => 
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


//Register fuction 
const login = (req, res) => {

  const {email,password} = req.body; 


  if(email && password){

    //checking if user already has an account
   pool.query('select * from aweusers where email = $1 And password = $2' ,[email,password],(error, results)=> {
     
     if (results.rowCount > 0) {
 
       res.send(results)
     
     }else{
 
      res.send('invalid login details')
     }
     });
 
   }else{
 
     res.send('enter username and password')
   }
  


}



module.exports = {
 
  createUser,
  login
  
}    
