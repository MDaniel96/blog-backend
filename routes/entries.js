const createEntry = require('../middlewares/entry').createEntry;
const updateEntry = require('../middlewares/entry').updateEntry;
const deleteEntry = require('../middlewares/entry').deleteEntry;
const addCategoryToEntry = require('../middlewares/entry').addCategoryToEntry;
const checkEntryCategoryPairs = require('../middlewares/entry').checkEntryCategoryPairs;
const removeCategoryFromEntry = require('../middlewares/entry').removeCategoryFromEntry;


module.exports = app => {

    app.post('/entry',
        createEntry
    );
        
    app.put('/entry/:id',
        updateEntry
    );

    app.delete('/entry/:id',
        deleteEntry
    );

    app.post('/entry/:entryId/add/:categoryId',
        checkEntryCategoryPairs,
        addCategoryToEntry
    );

    app.delete('/entry/:entryId/remove/:categoryId',
        removeCategoryFromEntry
    );

};