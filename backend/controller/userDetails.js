
const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;



//getting user details



const getDetails = (req, res) => {

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
  




module.exports = {
 

    
    getDetails
   
    
  }    
  