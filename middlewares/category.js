const mysqlConnection = require('../config');


module.exports.createCategory = (req, res, next) => {
    mysqlConnection.query('INSERT INTO Category (categoryName, labelList) VALUES (?)',
     [[req.body.categoryName, req.body.labelList]], (err, rows, fields) => {
        if (!err) 
            res.status(200).send('InsertedId: ' + rows.insertId);
        else {
            console.log(err);
            res.status(500).send(err);
        }
    }) 
};

module.exports.updateCategory = (req, res, next) => {
    mysqlConnection.query('UPDATE Category SET categoryName = ?, labelList = ? WHERE CategoryID = ?',
     [req.body.categoryName, req.body.labelList, req.params.id], (err, rows, fields) => {
        if (!err) 
            res.status(200).send('Update successful!');
        else {
            console.log(err);
            res.status(500).send(err);
        }
    }) 
};

module.exports.deleteCategory = (req, res, next) => {
    mysqlConnection.query('DELETE FROM Category WHERE CategoryID = ?', [req.params.id], (err, rows, fields) => {
        if (!err) 
            res.status(200).send('Delete successful!');
        else {
            console.log(err);
            res.status(500).send(err);
        }
    }) 
};

module.exports.checkIfCategoryExists = (req, res, next) => {
    mysqlConnection.query('SELECT * FROM Category WHERE CategoryID = ?',
    [req.params.id], (err, rows, fields) => {
       if (err) 
           return res.status(500).send(err);
       else if (rows.length == 0) 
           return res.status(404).send("Category not found!");
        return next();  
   })   
};