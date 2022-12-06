const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;

//Register fuction 
const like = (req, res) => {


    const id =parseInt(req.params.id);
    const {likee_id} = req.body; 
    let like_status = "Active"
    let deactive = "deactive"




    if(id && likee_id){
  
      //checking if user already has an account
     pool.query('select * from likes where likee_id = $1 And post_id = $2 AND like_status = $3' ,[likee_id,id,like_status],(error, results)=> {
      
      if (results.rowCount > 0) {
   
        res.send('already liked the post')


        
       
       }else{


        pool.query('INSERT INTO likes (post_id,likee_id,like_status ) VALUES ($1,$2,$3)',[id,likee_id,like_status],(error, results) => 
              {
          
                  if (error) 
                    {
                      res.send(`sytem error `);
                    }
                  else{

                    pool.query('UPDATE posts SET likes = likes + 1 WHERE id = $1',[id],(error, results) => {
              
                      if (error) {
                          throw error
                        }
                        else{
                          res.status(200).send(results.rows)
                        }
                       
                      })
                  
                  
                  }  
                  
                 
                      
      });



       }
      
      
      
      })

   
    
       
    }

    



}

const unlike = (req, res) => {


  const id =parseInt(req.params.id);
  let like_status= "deactive";

  pool.query('UPDATE posts SET likes = likes - 1  WHERE id = $1',[id],(error, results) => {
            
      if (error) {
          throw error
        }
        else{
          pool.query('UPDATE likes SET like_status = $1  WHERE post_id = $2',[like_status,id],(error, results) => {
            
            if (error) {
                throw error
              }
              else{
                res.status(200).send(results.rows)
                
              }
             
            })
         
        }
       
      })



}


const getlike = (req, res) => {


 
  
  const id = parseInt(req.params.id)
  let like_status= "Active";
  console.log(like_status)

      
  pool.query('select * from likes where likee_id = $1 AND like_status =$2',[id,like_status],(error, results)=> {
       
    if (error) {

     throw error
    
    }else{
    
      res.send(results.rows)

        }
        });
    
  



}



module.exports = {
    like,
    unlike,
    getlike
  }  