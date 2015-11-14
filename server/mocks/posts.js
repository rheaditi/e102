module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();
  var postsData = {
      'posts': [
      {
        id: 1,
        title: 'Bananas',
        author: 'BananaMan',
        date: '23 September 2015',
        content: 'Why did the chicken cross the road?'
      },
      {
        id: 2,
        title: 'Apples',
        author: 'Mac',
        date: '15 November 2015',
        content: 'How do you know Lady Gaga is dead?'
      },
      {
        id: 3,
        title: 'Whats up',
        author: 'SomeGuy',
        date: '01 January 2016',
        content: 'The age old question and its underwhelming answers?'
      }
      ]
    };

  postsRouter.get('/', function(req, res) {
    res.send(postsData);
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send(postsData.posts[req.params.id-1]);
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
