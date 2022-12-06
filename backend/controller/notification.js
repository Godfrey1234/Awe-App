const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;

//post notification
const notification = (req, res) => {


    const id = req.params.id
    let c = 0;
    const {fullname,surname,email,email_post_owner,image} = req.body; 
    let message = "";

    console.log(email_post_owner)

    message = fullname +" "+surname +" has liked your photo"


    if(email && id){


  
  
      //checking if user already has an account
     pool.query('select * from notification where email = $1 And post_id = $2' ,[email,id],(error, results)=> {
       
       if (results.rowCount > 0) {
   
        res.send('already liked the post')
       
       }else{
   
        pool.query('INSERT INTO notification (post_id,fullname,surname,message,email,email_post_owner,image) VALUES ($1,$2,$3,$4,$5,$6,$7)',[id,fullname,surname,message,email,email_post_owner,image],(error, results) => 
              {
          
                  if (error) 
                    {
                      res.send(`sytem error `);
                    }
                  else{
                  
                   
                    res.send('notification sent');

                     
                    
                  }  
                 
                      
              });
       }
       });
   
     }else{
   
       res.send('not getting user logged in user email or post id')
     }
   



}



//get notifiaction
const getnotification = (req, res) => {


    const email = req.params.email

   
    pool.query('SELECT * FROM notification where email_post_owner  = $1 ORDER BY id DESC', [email],(error, results) => {
        
        if (error) {
          throw error
        }else{


            res.status(200).json(results.rows)
        }
        
      })
  
   
   
   
    }








module.exports = {
    notification,
    getnotification
  }  