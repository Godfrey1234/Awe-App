const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;

//post notification
const notification = (req, res) => {


    const id = req.params.id
    const {fullname,surname,email} = req.body; 
    let message = "";

    message = fullname +" "+surname +" has liked your photo"

    pool.query('INSERT INTO notification (post_id,fullname,surname,message,email) VALUES ($1,$2,$3,$4,$5)',[id,fullname,surname,message,email],(error, results) => 
    {

        if (error) 
          {
            res.send(`sytem error `);
          }
        else{
        
            res.send('notification sent')
          
        }  
       
            
    });
    





}



//get notifiaction
const getnotification = (req, res) => {


    const email = req.params.email

   
    pool.query('SELECT * FROM notification where email = $1 ORDER BY id DESC', [email],(error, results) => {
        
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