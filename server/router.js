const express = require('express');
const router = express.Router();
const connection = require('../database/db.js');


router.route('/:id')
  .get((req, res) => {
    let param = req.params.id;
    connection.query('SELECT * FROM about WHERE id=(?)', [param], (err, data) => {
      if (err) {
        console.log('error at server/router.js GET/:id', err);
      } else {
        res.send({data});
      }
    });
  });


// TO DISPLAY SEEDED DATA IN POSTMAN
router.route('/display-seed')
  .get((req, res) => {
    connection.query('SELECT * FROM about', (err, data) => {
      if (err) {
        console.log('error at server/router.js /display-seed', err);
      } else {
        res.send({data});
      }
    });
  });

module.exports = router;
