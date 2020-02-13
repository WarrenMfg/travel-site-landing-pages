const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router.js');
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());

// app.use('/bundle.js', express.static(__dirname + '/../public/bundle.js')); // for proxy server
app.get('/bundle.js', (req, res) => {
  const gzip = zlib.createGzip();
  const bundle = fs.createReadStream(path.resolve(__dirname, '../public/bundle.js'));
  bundle.pipe(gzip).pipe(res);
});
app.use('/api/about', router);
app.use('/:id', express.static(__dirname + '/../public'));

app.listen(process.env.PORT || 50001, console.log(`Listening on port ${process.env.PORT || 50001}`));

module.exports = app;