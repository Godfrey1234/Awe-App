const Pool = require('pg').Pool



//code for database connection
const pool = new Pool({
    user: 'postgres',  //Database username
    host: 'localhost', 
    database: 'awe',
    password: 'Letsdoit!',
    port: 5432,
  })


//Register fuction 
const createUser = (req, res) => {
    
  const {contact,email,fullname,username,password,confirm} = req.body; 
  
   if(password != confirm ){
    
     res.send('password dont match')

   }else{
    
    pool.query('INSERT INTO aweusers (contact,email,fullname,username,password) VALUES ($1,$2,$3,$4,$5) RETURNING email',[contact,email,fullname,username,password],(error, results) => 
    {

        if (error) 
          {
            res.send(`sytem error `);
          }
        if(contact){
          res.status(201).send(`User added with :${results.rows[0].email}` );
        }  
        else{
          res.send('missing name or email')
        }
            


    });

  
  }
};


//Register fuction 
const login = (req, res) => {

  const {email,password} = req.body; 
   
   
  pool.query('select * from aweusers where email = $1 AND password = $2',[email,password], function(error, results) {
    
    if (!eresults) {

      res.send('777')
    
    }else{
      res.send(results)
    }
    });


}



module.exports = {
 
  createUser,
  login
  
}    
