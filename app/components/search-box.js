import Ember from 'ember';

export default Ember.TextField.extend({
	classNames: ['searchBox'],
	attributeBindings: ['placeholder', 'type', 'value'],
	placeholder: "Search..",
	type: "text"
});
