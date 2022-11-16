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

//declare endopoints
app.post('/register',register.createUser)
app.post('/login',login.login)
app.get('/userDetails/:id',userDetails.getDetails)
app.post('/image',uploadImg.image)
app.get('/getUserPosts',getUserposts.userPosts)















