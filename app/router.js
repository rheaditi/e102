import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/searchtest'} );

  this.route('posts', { path: '/feed' }, function(){
  	this.route('post', { path : '/:post_id'});
  });

  this.route('m-posts', { path: '/'}, function() {
  	this.route('index', { path: '/' });
  	this.route('create', { path: '/create' });
  });

  this.route('404', { path: '/*wildcard' });
});

export default Router;
