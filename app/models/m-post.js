import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  author: DS.attr('string'),
  embed: DS.belongsTo('embed')
});
