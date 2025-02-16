const express = require('express');
const router  = express.Router();
const Post = require('../models/post.js')
/* GET home page. */
router.get('/', (req, res, next) => {
  Post.find()
  .then(posts => {
    res.render('index', {
      title: 'Express - Generated with IronGenerator',
      user: req.user,
      posts : posts
    });
  })
  .catch(err => next(err))
});

module.exports = router;
