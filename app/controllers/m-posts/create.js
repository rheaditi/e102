import Ember from 'ember';

export default Ember.Controller.extend({
	author: 'aditi',
	url: 'http://emberjs.com/',
	isLoaded: false,
	isLoading: false,
	key: '041a06144b934ae5800557263be96f9a',
	embed: {},
	request: '',
	actions: {
		embedCreate : function (author,u,k) {
			var controller = this;
			controller.set('isLoading', true);
			var req = new Ember.RSVP.Promise(
				function(resolve, reject) {
					// console.log('trying');

					Ember.$.ajax(
						{
							method: 'GET',
							url: 'http://api.embed.ly/1/oembed',
							data: {
								url: u,
								key: k
							}
						}
					)
					.done(function(response){ 
						// console.log('resolving'); 
						resolve(response); 
					})
					.fail(function(err){ 
						// console.log('rejected'); 
						reject(err); 
					});

 					
			});//end promise
			// console.log('here');

			req.then(function(response){
				console.log(response);
				controller.set('embed', response);
				controller.set('isLoaded', true);
				controller.set('isLoading', false);
			},function(error){
				console.log(error);
			});

		}
	}
});