
//api for uploading an image
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require('dotenv');
const multer = require('multer')
const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;



dotenv.config({
});

cloudinary.config({
    cloud_name: 'dp94yvsaw',
    api_key: '217762934235786',
    api_secret: 'HKRBihfL9I2GKywg5WuYsAebod8',
});


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "DEV",
    },
  });


const upload = multer({ storage: storage });




const image =(upload.single("picture"),(req, res) => {
 
  if(req.file.path){

    console.log(req.file.path)
    email = req.body.email
    caption = req.body.caption
    image=JSON.stringify(req.file.path)
    console.log(image)
    console.log(email)
    console.log(caption)

    pool.query('INSERT INTO posts (email,caption,image) VALUES ($1,$2,$3)',[email,caption,req.file.path],(error, results) => 
        {
    
            if (error) 
              {
                res.send(`sytem error `);
              }
            else{
            
                res.send('successfully registered')
               
              
            }  
          
    })


     
  
  }else{
      res.send('upload')
  }
   

  
 });



module.exports = {

  image

}    
