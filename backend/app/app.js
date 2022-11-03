const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const db = require('../controller/controller')





app.get(``, (req, res) => { 

    res.json({info:'your backend is running on port 3000'})
 });


// Listen to the specified port, otherwise 3000
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server Running: http://localhost:${PORT}`);
});



app.post('/register',db.createUser)
app.post('/login',db.login)

