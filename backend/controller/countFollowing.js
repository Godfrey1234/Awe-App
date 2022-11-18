const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;

//Register fuction 
const numFollowing = (req, res) => {

    const id =parseInt(req.params.id);

    pool.query('SELECT following from aweusers where id = $1',[id],(error, results)=> {
       

       if(error){
        throw error

       }else {
    
        res.status(200).send(results)
        
       }
    })




}


module.exports = {
    numFollowing
  }  