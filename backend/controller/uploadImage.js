
//api for posts

const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;







const image = (req, res) => {
 
 
  const {email,caption,image} = req.body; 
  console.log(email)
  console.log(caption)
  console.log(image)

  


    pool.query('INSERT INTO posts (email,caption,image) VALUES ($1,$2,$3)',[email,caption,image],(error, results) => 
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
