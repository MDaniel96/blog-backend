const createEntry = require('../middlewares/entry').createEntry;
const updateEntry = require('../middlewares/entry').updateEntry;
const deleteEntry = require('../middlewares/entry').deleteEntry;
const checkIfEntryExists = require('../middlewares/entry').checkIfEntryExists;


module.exports = app => {

    app.post('/entry',
        createEntry
    );
        
    app.put('/entry/:id',
        checkIfEntryExists,
        updateEntry
    );

    app.delete('/entry/:id',
        checkIfEntryExists,
        deleteEntry
    );

};