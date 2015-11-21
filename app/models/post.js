import DS from 'ember-data';

export default DS.Model.extend({
  //title: DS.attr('string'),
  description: DS.attr('string'),
  creator: DS.attr('string'),
  created_at: DS.attr('string')
});

// {"_id":"5650329582ee3eac029d62d5","created_at":"2015-11-20T16:16:56.196Z","creator":"Abinav Seelan","description":"This is post 72"}