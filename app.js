
const express = require('express');
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

var mysql = require('mysql');

var con = mysql.createPool({
  host: "mysql-moussa.alwaysdata.net",
  user: "moussa",
  password: "hX@8pf4!skBP2qX",
  database: "moussa_node"
});


app.post('/api/etat', (req, res, next) => {
  con.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected!");
    console.log(req.body)

  var sql = "INSERT INTO node_red (action) VALUES ('allumer')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    
  });
  
  
  
  

});
 
});



  
  
  
  

 



app.post('/api/eteindre', (req, res, next) => {
  con.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected!");
    console.log(req.body)

  var sql = "INSERT INTO node_red (action) VALUES ('eteindre')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  

  



  
  
  });


 
});

app.get('/api/get', (req, res, next) => {
  con.getConnection(function(err) {
    if (err) throw err;
    con.query("SELECT action from node_red ORDER BY id DESC LIMIT 1", function (err, result, fields) {
      if (err) throw err;
     result= Object.values(result[0])
     console.log(result)
     res.json(result)
    
     
      
             
       
     
    });
  });
  });


module.exports = app;