const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;

//Register fuction 
const like = (req, res) => {


    const id =parseInt(req.params.id);

    pool.query('UPDATE posts SET likes = likes + 1 WHERE id = $1',[id],(error, results) => {
              
        if (error) {
            throw error
          }
          else{
            res.status(200).send(results.rows)
          }
         
        })



}


module.exports = {
    like
  }  