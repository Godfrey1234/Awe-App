
const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;

//Register fuction 
const deletePosts = (req, res) => {

  
    
    const id =parseInt(req.params.id);

    let status = "deleted"

  
        pool.query('UPDATE posts SET status = $1 WHERE id = $2',[status, id],(error, results) => {
              
            if (error) {
                throw error
              }
              else{
                res.status(200).send('post has been deleted')
              }
             
            })



}
        
     








module.exports = {
    deletePosts
  }  