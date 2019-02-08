const createCategory = require('../middlewares/category').createCategory;
const updateCategory = require('../middlewares/category').updateCategory;
const deleteCategory = require('../middlewares/category').deleteCategory;
const addNewLabelToCategory = require('../middlewares/category').addNewLabelToCategory;
const addNewLabel = require('../middlewares/category').addNewLabel;


module.exports = app => {

    app.post('/category',
        createCategory
    );
        
    app.put('/category/:id',
        updateCategory  
    );

    app.delete('/category/:id',
        deleteCategory
    );

    app.post('/category/addLabel/:id',
        addNewLabel,
        addNewLabelToCategory
    ); 

};