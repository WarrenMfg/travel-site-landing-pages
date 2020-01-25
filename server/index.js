const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router.js');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api/about', router);
app.use('/:id', express.static(__dirname + '/../public'));

app.listen(process.env.PORT || 313, console.log('Listening on port 313'));