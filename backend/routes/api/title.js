let router = require('express').Router();
let mongoose = require('mongoose');
let Item = mongoose.model('title');

// return a list of tags
router.get('/', function(req, res, next) {
  Item.find().distinct('tagList').then(function(tags){
    return res.json({tags: tags});
  }).catch(next);
});

module.exports = router;