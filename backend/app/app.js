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


// declaring endpoint routes
// method   path    the function
// app.get('/users',db.getUsers)
// app.get('/users/:id',db.getUserById)
// app.post('/users',db.createUser)
// app.put('/users/:id',db.updateUser)
// app.delete('/users',db.deleteUser)