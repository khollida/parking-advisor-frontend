import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model: function(params) {
    return RSVP.hash({
      citations: Ember.$.getJSON('http://192.168.10.155:3000/parking/location/' + params.location_id + '/total'),
      geo: Ember.$.getJSON('http://192.168.10.155:3000/geolocation/' + params.location_id),
      labels: ['01','02','03','04','05','06','07','08','09','10','11','12'],
      series: Ember.$.getJSON('http://192.168.10.155:3000/parking/chart/monthly/data')
    });
    // return Ember.$.getJSON('http://192.168.10.155:3000/parking/location/' + params.location_id);
  }
});
