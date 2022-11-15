const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
    cloud_name: 'dp94yvsaw',
    api_key: '217762934235786',
    api_secret: 'HKRBihfL9I2GKywg5WuYsAebod8',
});


exports.upload=(file,folder)=>{

   return new Promise(resolve=>{

     cloudinary.uploader.upload(file,(results)=>{
        resolve({
            url:results.url,
            id:results.public_id

        })
     },{
        resource_type:"auto",
        folder:folder

      })

   })

}