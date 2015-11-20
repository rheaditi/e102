import Ember from 'ember';

export default Ember.Controller.extend({
	searchTerm: null,
	searchResults: function () {
		return ['one', 'two', 'three'];
	}.observes('searchTerm')
});
