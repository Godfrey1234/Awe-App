const Pool = require('pg').Pool

//code for database connection
const pool = new Pool({
    user: 'admin',  //Database username
    host: 'localhost', 
    database: 'awe',
    password: 'admin12345',
    port: 5432,
  })

pool.connect((err,) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }else{
        console.log("Database connected");
    }
    // Do what you have to do with the pool client now
})

module.exports = pool;