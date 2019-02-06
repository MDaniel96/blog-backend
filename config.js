
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
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

module.exports = mysqlConnection;