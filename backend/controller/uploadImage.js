
//api for posts

const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;







const image = (req, res) => {
 
 
  const {email,caption,image,fullname,surname,profilepic} = req.body; 
  console.log(email)
  console.log(caption)
  console.log(image)
  console.log(fullname)
  console.log(surname)
  console.log(profilepic)
  let status ="Active"
  


    pool.query('INSERT INTO posts (email,caption,image,fullname,surname,profilepic,status) VALUES ($1,$2,$3,$4,$5,$6,$7)',[email,caption,image,fullname,surname,profilepic,status],(error, results) => 
        {
    
            if (error) 
              {
                res.send(`sytem error `);
              }
            else{
            
                res.send('successfully registered')
               
              
            }  
          
    })


     
  
 


}


module.exports = {

  image

}    
