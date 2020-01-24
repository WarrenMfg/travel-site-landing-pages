const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./router.js');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api/about', routes);


app.use(express.static('client'));
app.listen(process.env.PORT || 313, console.log('Listening on port 0313'));