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
        if (rows.affectedRows == 0) 
            return res.status(404).send('Entry not found!');
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
        if (rows.affectedRows == 0) 
            return res.status(404).send('Entry not found!');
        if (!err) 
            res.status(200).send('Delete successful!');
        else {
            console.log(err);
            res.status(500).send(err);
        }
    }) 
};

module.exports.addCategoryToEntry = (req, res, next) => {
    mysqlConnection.query('INSERT INTO EntriesCategories VALUES (?)',
     [[req.params.entryId, req.params.categoryId]], (err, rows, fields) => {
        if (!err) 
            res.status(200).send('Insert successful');
        else {
            console.log(err);
            res.status(500).send(err);
        }
    })  
};

module.exports.checkEntryCategoryPairs = (req, res, next) => {
    mysqlConnection.query('SELECT * FROM EntriesCategories WHERE EntryID = ?',
    [req.params.entryId], (err, rows, fields) => {
       if (err) 
           return res.status(500).send(err);
       else if (rows.length == 5) 
           return res.status(403).send("There are already 5 entries paired to categories!");
        return next();  
   })   
};

module.exports.removeCategoryFromEntry = (req, res, next) => {
    mysqlConnection.query('DELETE FROM EntriesCategories WHERE EntryID = ? AND CategoryID = ?',
     [req.params.entryId, req.params.categoryId], (err, rows, fields) => {
        if (rows.affectedRows == 0) 
            return res.status(404).send('Entry Category pair not found!');
        if (!err) 
            res.status(200).send("Delete successful");
        else {
            console.log(err);
            res.status(500).send(err);
        }
    })  
};

module.exports.listEntriesByLabel = (req, res, next) => {
    var sql = 'select e.EntryID, e.title, e.created, e.modified from entry e ' + 
                    'inner join entriescategories ec on e.EntryID = ec.EntryID ' +
                        'inner join category c on ec.CategoryID = c.CategoryID ' +
                            'inner join categorieslabels cl on c.CategoryID = cl.CategoryID ' + 
                                'inner join label l on cl.LabelID = l.LabelID ' +
                 'where l.labelName = ?;';

    mysqlConnection.query(sql, [req.params.label], (err, rows, fields) => {       
        if (!err) {
            if (rows.length == 0)
                return res.status(404).send("There's no such entry!");
            res.status(200).send(rows);
        }
        else {
            res.status(500).send(err);
        }
   })   
};
