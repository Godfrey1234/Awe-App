
const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;

//Register fuction 
const numPosts = (req, res) => {

    const email = req.body.email

    pool.query('SELECT COUNT(*) from posts where email = $1',[email],(error, results)=> {
       

       if(error){
        throw error

       }else {
    
        res.status(200).send(results.rows)
        
       }

        

 });

  


}


module.exports = {
    numPosts
  }  