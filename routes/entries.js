const createEntry = require('../middlewares/entry').createEntry;
const updateEntry = require('../middlewares/entry').updateEntry;
const deleteEntry = require('../middlewares/entry').deleteEntry;


module.exports = app => {

    app.post('/entry',
        createEntry
    );
        
    app.put('/entry',
        updateEntry
    );

    app.delete('/entry',
        deleteEntry
    );

};