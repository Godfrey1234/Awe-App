
const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;



//getting user details



const getDetails = (req, res) => {

    const id =parseInt(req.params.id);
  
    
    //get all user details
     pool.query('select * from aweusers where id = $1' ,[id],(error, results)=> {
       
       if (results.rowCount > 0) {
   
        console.log(results.rows);
        res.status(200).json(results.rows);
       
       }else{
   
        res.send('user doesnt exist')
       }
       });
   
   
    
  }
  




module.exports = {
 

    
    getDetails
   
    
  }    
  