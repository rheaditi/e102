import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  html: DS.attr('string'),
  width: DS.attr('number'),
  height: DS.attr('number'),
  embedder: DS.belongsTo('mPost')
});
