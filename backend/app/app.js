const express = require('express');
const app = express();
const bodyParser = require("body-parser");



app.use(bodyParser.json());



app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();    
});

app.get(``, (req, res) => { 

    res.json({info:'Node.js,Express, and Postgres API'})
 });



// Listen to the specified port, otherwise 3000
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server Running: http://localhost:${PORT}`);
});


//declare path for our controllers
const uploadImg = require('../controller/uploadimage')
const login = require('../controller/login')
const register = require('../controller/register')
const userDetails = require('../controller/userDetails')
const getUserposts = require('../controller/getUserPosts')
const countPosts = require('../controller/countPosts')
const countFollowers = require('../controller/countFollowers')
const countFollowing = require('../controller/countFollowing')
const updateProfilePic = require('../controller/updateProfilePic')
const Follow = require('../controller/Follow')
const notification = require('../controller/notification')

const updatePassword = require('../controller/updatePassword')
const deletePosts = require('../controller/deletePosts')
const getAllUsers = require('../controller/getAllUsers')
const getpost_one = require('../controller/getpost_one')
const like = require('../controller/like')



//declare endopoints
app.post('/register',register.createUser)
app.post('/login',login.login)
app.get('/userDetails/:id',userDetails.getDetails)
app.post('/image',uploadImg.image)
app.get('/getUserPosts/',getUserposts.userPosts)
app.get('/countPosts/:email',countPosts.numPosts)
app.get('/countFollowing/:id',countFollowing.numFollowing)
app.get('/countFollowers/:id',countFollowers.numFollowers)
app.put('/updateProfilePic/',updateProfilePic.profilePicture)


app.post('/Follow',Follow.follow)
app.get('/Follow/:id',Follow.getfollow)
app.put('/Follow/:id',Follow.addfriend)
app.get('/Friends/:id',Follow.getFriends)
app.get('/CountFriends/:id',Follow.CountFriends)

app.post('/notification/:id',notification.notification)
app.get('/notification/:email',notification.getnotification)
app.put('/updatePassword/:id',updatePassword.updatePass)
app.delete('/deletePosts/:id',deletePosts.deletePosts)
app.get('/getAllUsers',getAllUsers.getAllUsers)
app.get('/getposts_one/:email',getpost_one.getpost_one)
app.put('/like/:id',like.like)
app.put('/unlike/:id',like.unlike)
app.get('/like/:id',like.getlike)







