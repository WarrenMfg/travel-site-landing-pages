const express = require('express');
const router = express.Router();

router.route('/:id')
  .get((req, res) => {
    console.log(req.params);
    res.send({message: 'received'});
  });

module.exports = router;