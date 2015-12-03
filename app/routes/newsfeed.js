import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  model: function() {
    /* Load pages of the Product Model, starting from page 1, in groups of 5. */
    return this.infinityModel("mPost", { perPage: 5, startingPage: 1 });
  }
});