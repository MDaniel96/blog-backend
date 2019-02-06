const createCategory = require('../middlewares/category').createCategory;
const updateCategory = require('../middlewares/category').updateCategory;
const deleteCategory = require('../middlewares/category').deleteCategory;


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

};