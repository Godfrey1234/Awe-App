const Pool = require('pg').Pool
//multer is for images

const sharp = require('sharp')
const multer = require('multer')


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


//Register fuction 
const login = (req, res) => {

  const {email,password} = req.body; 

  console.log(email)
  console.log(password)

  if(email && password){

    //checking if user already has an account
   pool.query('select * from aweusers where email = $1 And password = $2' ,[email,password],(error, results)=> {
     
     if (results.rowCount > 0) {
 
       res.send('sucess')
     
     }else{
 
      res.send('invalid login details')
     }
     });
 
   }else{
 
     res.send('enter username and password')
   }
  


}

//getting user details


//Register fuction 
const userDetails = (req, res) => {

  const {email} = req.body;

  if(email){

  //get all user details
   pool.query('select * from aweusers where email = $1' ,[email],(error, results)=> {
     
     if (results.rowCount > 0) {
 
       res.send(results)
     
     }else{
 
      res.send('user doesnt exist')
     }
     });
 
   }else{
 
     res.send('did not get email')
   }
  
}



//for getting the image and destination
 const storage = multer.diskStorage({

    destination:(req, file, callBack)=>{
      callBack(null,'uploads')//path to save images
    },
    filename:(req,file,callBack)=>{
      callBack(null,`Awe_${file.originalname}`)
    }
  

  })

 var upload = multer({storage:storage})

 const image = (upload.single('file'),(req, res, next) => {

   const file = req.body.file
   const caption = req.body.caption
   const user = req.body.user
   
   console.log(file)
   console.log (caption)


   if(!file){
    res.send('please upload a file')
   }
   else{
    res.send(file)
   }


 


})


module.exports = {
 
  createUser,
  login,
  image,
  userDetails
 
  
}    
