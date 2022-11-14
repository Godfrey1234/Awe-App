
const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;

const multer = require('multer')









//for getting the image and destination
 const storage = multer.diskStorage({

    destination:(req, file, callBack)=>{
      callBack(null,'uploads')//path to save images
    },
    filename:(req,file,callBack)=>{
      callBack(null,`Awe_${file.originalname}`)
    }
  

  })

 var upload = multer({storage:storage})

 const image = (upload.single('file'),(req, res, next) => {

   const file = req.body.file
   const caption = req.body.caption
   const user = req.body.user
   
   console.log(file)
   console.log (caption)


   if(!file){
    res.send('please upload a file')
   }
   else{
    res.send(file)
   }


 


})


module.exports = {
 

  image
 
  
}    
