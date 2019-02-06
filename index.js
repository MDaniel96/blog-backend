const express = require('express');
const app = express();
const port = 3000;

const Entry = require('./models/entry');
const Category = require('./models/category');

app.use(express.static('static'));

require('./routes/entries')(app);
require('./routes/categories')(app);

app.listen(port, () => console.log('Listening on port 3000.') );