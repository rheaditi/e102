import DS from 'ember-data';
var attr = DS.attr;
export default DS.Model.extend({
  question: attr('String'),
  creator: attr('String'),
  description: attr('String'),
  embedded_content: attr(),
  creator_at : attr('date')
});
