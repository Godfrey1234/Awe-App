const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;

//Register fuction 
const   updatePass = (req, res) => {



        const id = parseInt(req.params.id)
        const {password, confirm, oldpass } = req.body



        if(password==confirm)
        {

            pool.query(
                'UPDATE aweusers SET password = $1 WHERE id = $2 And password = $3',
                [password, id,oldpass],
                (error, results) => {
                  if (error) {
                    throw error
                  }
                  res.status(200).send('password updated: ${id}')
                })
              }
              else{
                res.status(200).send('pasword dont match')

              }


      }







module.exports = {
    updatePass
  }