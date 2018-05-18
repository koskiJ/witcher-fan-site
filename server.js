//Install express server
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const con = mysql.createConnection({
    host: "mydb.tamk.fi",
    user: process.env.dbuser,
    password: process.env.dbpass,
    database: process.env.database
  });

con.connect(function(err) {
    if (err) throw err;
        console.log("Connected!");
    });

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));
app.use(cors());

app.get('/chars', function (req, res) {
    const sql = 'SELECT * FROM characters';
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
      });
});

app.get('/mons', function (req, res) {
    const sql = 'SELECT * FROM monsters';
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
      });
});

app.get('/*', function(req,res) {

    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);