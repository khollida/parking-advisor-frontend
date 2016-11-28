import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model: function() {
    return RSVP.hash({
        labels: ['01','02','03','04','05','06','07','08','09','10','11','12'],
        series: Ember.$.getJSON('http://192.168.10.155:3000/parking/chart/monthly/data')
    });
  }
});
