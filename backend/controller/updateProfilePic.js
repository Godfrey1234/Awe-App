const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;

//Register fuction 
const profilePicture= (req, res) => {



    const {profilepic,id,email} = req.body



    if(profilepic)
    {

        pool.query('UPDATE aweusers SET profilepic = $1 WHERE id = $2',[profilepic, id],(error, results) => {
              
          
           if (error) {
                throw error
              }else{

                pool.query('UPDATE posts SET profilepic = $1 WHERE email = $2',[profilepic, email],(error, results) => {

                  if (error) {
                    throw error
                  }
                  else{
                    res.status(200).send('profile picture successfully updated')

                  }


                })


              }
             

            })
          }
          else{
            res.status(200).send('upload image')

          }



}


module.exports = {
    profilePicture
  }  