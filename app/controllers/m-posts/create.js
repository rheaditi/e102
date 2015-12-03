import Ember from 'ember';

export default Ember.Controller.extend({
	//finally what to save to server; this doesn't need to be "watched" or "observed"
	//by ember
	postToSave: {},
	errorFromServer: '',
	//form input items (ember embeds get set functions for these, therefore
	//keeping them separate from postToSave object)
	//creator : this is a username (for now)
	creator: 'rheaditi',
	//question: the question being asked; like a 'title'
	question: 'What do you think?',
	//description (optional): explanation to post  
	description: 'Of this embedded content :P',
	//url: the url field to embedded_content - provided by user
	url: '',

	//embedded_content: json format of embedded content as provided by embedly
	embedded_content: {},

	//has_embedded, truthy/falsy value depending on whether data was embedded or not
	has_embedded: false,

	//trips to display loaders etc
	isLoaded: false,
	isLoading: false,
	isSaving: false,
	isSaved: false,
	hasThumbnail: Ember.computed('embedded_content', function () {
		var e = this.get('embedded_content');
		// console.log('i came here. e.type is ' + e.type);
		if( e.type === 'photo' || (e.type === 'x' && e.thumbnail_url) ){
			return true;
		}
		else{
			return false;
		}
	}),
	//Embedly stuff: API Key
	key: '041a06144b934ae5800557263be96f9a',
	actions: {
		embedFetch : function () {
			var controller = this;
			var u = controller.get('url');
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
				// console.log(response);
				controller.set('embedded_content', response);
				controller.set('isLoaded', true);
				controller.set('isLoading', false);
			},function(error){
				console.log(error);
			});

		}.observes('url'),
		saveToServer: function () {
			console.log('trying to save');			
			var controller = this;
			var emb = controller.get('embedded_content');
			var localToSave = {
				creator: controller.get('creator'),
				question: controller.get('question'),
				desc: controller.get('description'),
				embedded_content: {
					provider_url: emb.provider_url,
					description: emb.description,
					title: emb.title,
					url: emb.url,
					thumbnail_width: emb.thumbnail_width,
					thumbnail_url: emb.thumbnail_url,
					version: emb.version,
					provider_name: emb.provider_name,
					type: emb.type,
					thumbnail_height: emb.thumbnail_height,
					html: emb.html,
					author_name: emb.author_name,
					height: emb.height,
					width: emb.width
				}
			};
			controller.set('postToSave', localToSave);
			console.log(localToSave);
			var req = new Ember.RSVP.Promise(

				function (resolve, reject){

					Ember.$.ajax(
						{
							method: 'POST',
							url: 'https://poc-inquizit-api.herokuapp.com/api1/posts',
							data: localToSave
						}
					).done(function(response){
						resolve(response);
					}).fail(function(reason){
						reject(reason);
					});

				}

			);

			controller.set('isSaving', true);
			req.then(function(response){
				console.log(response);
				controller.set('isSaved', true);
				controller.set('isSaving', false);
			},function(error){
				controller.set('errorFromServer', error);
				console.log(error);
			});
		}
	}
});

// var embedPostSchema = new Schema ({
// 	//cause inquiries have a question =P
// 	question: {type: String, required: true},
// 	creator: {type:String, required: true},
// 	description: {type:String, required: true},
// 	embedded_content: {
// 		provider_url : {type: String},
// 		description: {type: String},
// 		title: {type: String},
// 		url: {type: String},
// 		thumbnail_width: {type: Number},
// 		thumbnail_url: {type: String},
// 		version: {type: String},
// 		provider_name: {type: String},
// 		type: {type: String},
// 		thumbnail_height: {type: Number},
// 		html: {type: String},
// 		author_name: {type: String},
// 		height: {type: Number},
// 		width: {type: Number},
// 		version: {type: Number},

// 	},
// 	created_at : {type : Date}
// });