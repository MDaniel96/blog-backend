const mysqlConnection = require('../config');


module.exports.createCategory = (req, res, next) => {
    mysqlConnection.query('INSERT INTO Category (categoryName) VALUES (?)',
     [[req.body.categoryName]], (err, rows, fields) => {
        if (!err) 
            res.status(200).send('InsertedId: ' + rows.insertId);
        else {
            console.log(err);
            res.status(500).send(err);
        }
    }) 
};

module.exports.updateCategory = (req, res, next) => {
    mysqlConnection.query('UPDATE Category SET categoryName = ? WHERE CategoryID = ?',
     [req.body.categoryName, req.params.id], (err, rows, fields) => {
        if (rows.affectedRows == 0) 
            return res.status(404).send('Category not found!');
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
        if (rows.affectedRows == 0) 
            return res.status(404).send('Category not found!');
        if (!err) 
            res.status(200).send('Delete successful!');
        else {
            console.log(err);
            res.status(500).send(err);
        }
    }) 
};

module.exports.addNewLabel = (req, res, next) => {
    mysqlConnection.query('INSERT INTO Label (labelName) VALUES (?)',
     [[req.body.labelName]], (err, rows, fields) => {
        if (!err) {
            req.newId = rows.insertId;
            next();
        }
        else {
            console.log(err);
            return res.status(500).send(err);
        } 
    })
}; 

module.exports.addNewLabelToCategory = (req, res, next) => {
    mysqlConnection.query('INSERT INTO CategoriesLabels VALUES (?)',
     [[req.params.id, req.newId]], (err, rows, fields) => {
        if (!err) 
            res.status(200).send('Insert successful, inserted LabelId: ' + req.newId);
        else {
            console.log(err);
            res.status(500).send(err);
        }
    })  
}; 
