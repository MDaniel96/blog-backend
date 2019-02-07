const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('static'));
app.use(bodyparser.json());

require('./routes/entries')(app);
require('./routes/categories')(app);

app.listen(port, () => console.log('Listening on port 3000.') ); 

module.exports = app;
