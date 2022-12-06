const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;


const follow = (req, res) => {

  const {friend_id,friend_name,friend_surname,user_id,user_fullname,user_surname} = req.body; 
  let message =  user_fullname +" " +user_surname + " "+ "have followed you"
  let status = "follow"

  pool.query('select * from friends where friend_id = $1 And user_id = $2' ,[friend_id,user_id],(error, results)=> {
      
    if (results.rowCount > 0) {
 
      res.send('already followed this user')
     
     }else{
   

  pool.query('INSERT INTO friends (friend_id,friend_name,friend_surname,user_id,message,status) VALUES ($1,$2,$3,$4,$5,$6)',[friend_id,friend_name,friend_surname,user_id,message,status],(error, results) => 
  {

      if (error) 
        {
          res.send(`sytem error `);
        }
      else{
      
         
       
           res.send('followed')
                
        
        
      }  
     
          
  });

}
})
   



}



const getfollow = (req, res) => {


  const email = req.params.id;
  let status = "Active"

  pool.query('SELECT * from friends where friend_id = $1',[email],(error, results)=> {
     

     if(error){
      throw error

     }else {
  
      res.status(200).send(results.rows)
      
     }
  })




}


const addfriend = (req, res) => {

  const id = req.params.id;
  let status = "friends"



  pool.query('UPDATE friends SET status = $1 WHERE friend_id = $2',[status,id],(error, results) => {
              
    if (error) {
        throw error
      }
      else{
        res.status(200).json('friends')
      }
     
    })


}



const getFriends = (req, res) => {


  const id = parseInt(req.params.id)
  let status = "friends"

  pool.query('SELECT * from friends where status = $1 AND user_id = $2',[status,id],(error, results)=> {
     

     if(error){
      throw error

     }else {
  
      res.status(200).send(results.rows)
      
     }
  })




}


const CountFriends = (req, res) => {


  const id = parseInt(req.params.id)
  let status = "friends"

  pool.query('SELECT COUNT(*) from friends where user_id = $1 AND status = $2',[id,status],(error, results)=> {
     

     if(error){
      throw error

     }else {
  
      res.status(200).send(results.rows)
      
     }
  })




}



module.exports = {
    follow,
    getfollow,
    addfriend,
    getFriends,
    CountFriends
  }  