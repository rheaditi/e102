import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	shouldReloadAll: function() { return true; },
	host: 'https://poc-inquizit-api.herokuapp.com',
	namespace: 'api2'
});
