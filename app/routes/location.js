import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('http://192.168.10.155:3000/parking/location/' + params.location_id);
  }
});
