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
    
  const {contact,email,fullname,username,password,confirm} = req.body; 
   console.log(contact)
   console.log(email)
  
  

  if(contact && email && fullname && username && password && confirm){

   //checking if user already has an account
  pool.query('select * from aweusers where email = $1' ,[email],(error, results)=> {
    
    if (results.rowCount > 0) {

      res.send('user has already been registered')
    
    }else{

      pool.query('INSERT INTO aweusers (contact,email,fullname,username,password) VALUES ($1,$2,$3,$4,$5) RETURNING email',[contact,email,fullname,username,password],(error, results) => 
      {
  
          if (error) 
            {
              res.send(`sytem error `);
            }
          else{
            
            res.send(results)
          }  
         
              
      });
    }
    });

  }else{

    res.send('fill all form fields')
  }
  
};


//Register fuction 
const login = (req, res) => {

  const {username,password} = req.body; 
   
   
  pool.query('select * from aweusers where username = $1 AND password = $2' ,[username,password],(error, results)=> {
    
    if (results.rowCount > 0) {
    
      res.send('success')
  
    }else{
      res.send('invalid login details')
    }
    });


}



module.exports = {
 
  createUser,
  login
  
}    
