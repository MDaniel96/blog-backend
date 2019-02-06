const mysqlConnection = require('../config');


module.exports.createEntry = (req, res, next) => {
    mysqlConnection.query('INSERT INTO Entry (Title, Content, Created, Modified) VALUES (?)',
     [[req.body.title, req.body.content, req.body.created, req.body.modified]], (err, rows, fields) => {
        if (!err) 
            res.status(200).send('InsertedId: ' + rows.insertId);
        else {
            console.log(err);
            res.status(500).send(err);
        }
    })      
};

module.exports.updateEntry = (req, res, next) => {
    mysqlConnection.query('UPDATE Entry SET title = ?, content = ?, created = ?, modified = ? WHERE EntryID = ?',
     [req.body.title, req.body.content, req.body.created, req.body.modified, req.params.id], (err, rows, fields) => {
        if (!err) 
            res.status(200).send('Update successful!');
        else {
            console.log(err);
            res.status(500).send(err);
        }
    }) 
};


module.exports.deleteEntry = (req, res, next) => {
    mysqlConnection.query('DELETE FROM Entry WHERE EntryID = ?', [req.params.id], (err, rows, fields) => {
        if (!err) 
            res.status(200).send('Delete successful!');
        else {
            console.log(err);
            res.status(500).send(err);
        }
    }) 
};
