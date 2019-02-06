const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "adamyoungoc",
    database: "EntryDB"
  });

mysqlConnection.connect(function(err) {
    if (!err) 
        console.log("Connected!");
    else
        console.log("DB connection failed!" + JSON.stringify(err, undefined, 2));
});

app.use(express.static('static'));
app.use(bodyparser.json());

require('./routes/entries')(app);
require('./routes/categories')(app);

app.listen(port, () => console.log('Listening on port 3000.') );