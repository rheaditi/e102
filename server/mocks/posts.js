module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': [
      {
        id: 1,
        title: 'Bananas',
        author: 'BananaMan',
        date: '15 Sept 2005'
      },
      {
        id: 2,
        title: 'Apples',
        author: 'Mac',
        date: '15 Sept 2005'
      },
      {
        id: 3,
        title: 'Whats up',
        author: 'SomeGuy',
        date: '23 Sept 2005'
      }
      ]
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
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
