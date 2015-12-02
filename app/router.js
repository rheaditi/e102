import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');

  this.route('posts', { path: '/feed' }, function(){
  	this.route('post', { path : '/:post_id'});
  });

  this.route('m-posts', { path: '/news'}, function() {
  	this.route('index', { path: '/' });
  	this.route('create', { path: '/create' });
  });

  this.route('404', { path: '/*wildcard' });
});

export default Router;
