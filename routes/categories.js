const createCategory = require('../middlewares/category').createCategory;
const updateCategory = require('../middlewares/category').updateCategory;
const deleteCategory = require('../middlewares/category').deleteCategory;
const checkIfCategoryExists = require('../middlewares/category').checkIfCategoryExists;


module.exports = app => {

    app.post('/category',
        createCategory
    );
        
    app.put('/category/:id',
        checkIfCategoryExists,
        updateCategory  
    );

    app.delete('/category/:id',
        checkIfCategoryExists,
        deleteCategory
    );

};