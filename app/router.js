import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('newsfeed', { path: '/' } );
  this.route('createPost' , { path: '/create' });


  this.route('m-posts', { path: '/mposts'}, function() {
    this.route('index', { path: '/mposts/index' });
    this.route('create', { path: '/mposts/create' });
  });

  this.route('index', { path: '/index'} );

  this.route('posts', { path: '/feed' }, function(){
  	this.route('post', { path : '/:post_id'});
  });



  this.route('404', { path: '/*wildcard' });
  this.route('temp-typeahead');
});

export default Router;
