import Ember from 'ember';

export default Ember.Controller.extend({
	//finally what to save to server; this doesn't need to be "watched" or "observed"
	//by ember
	postToSave: {},

	//form input items (ember embeds get set functions for these, therefore
	//keeping them separate from postToSave object)
	//creator : this is a username (for now)
	creator: 'rheaditi',
	//creation datetime; set automatically to "now"
	creation_datetime: '',
	//question: the question being asked; like a 'title'
	question: 'What do you think?',
	//description (optional): explanation to post  
	description: 'Of this embedded content :P',
	//url: the url field to embedded_content - provided by user
	url: 'https://vimeo.com/22439234',

	//embedded_content: json format of embedded content as provided by embedly
	embedded_content: {},

	//has_embedded, truthy/falsy value depending on whether data was embedded or not
	has_embedded: false,

	//trips to display loaders etc
	isLoaded: false,
	isLoading: false,

	//Embedly stuff: API Key
	key: '041a06144b934ae5800557263be96f9a',
	actions: {
		embedFetch : function (u) {
			var controller = this;
			controller.set('isLoading', true);
			var ckey = controller.get('key');
			var req = new Ember.RSVP.Promise(
				function(resolve, reject) {
					// console.log('trying');

					Ember.$.ajax(
						{
							method: 'GET',
							url: 'http://api.embed.ly/1/oembed',
							data: {
								//required query params
								key: ckey, //api key
								maxwidth: 500, //max width of embed
								luxe: 1, //for non-autoplay
								chars: 150, //description truncated to
								//finally, url
								url: u
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