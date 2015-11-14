import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return [{
			'id':1,
			'title': 'Why did the chicken cross the road?',
			'date': '15 September 2015',
			'author': 'Chicken',
			'content': 'Srsly?'
		},
		{
			'id':2,
			'title': 'Why did the chicken cross the road?',
			'date': '15 September 2015',
			'author': 'Chicken',
			'content': 'Srsly?'
		},
		{
			'id':3,
			'title': 'Why did the chicken cross the road?',
			'date': '15 September 2015',
			'author': 'Chicken',
			'content': 'Srsly?'
		}
		];
	}
});
