import Ember from 'ember';

export default Ember.Controller.extend({
  simpleview: true,
  actions: {
    launchVisual() {
      this.set('simpleview', false);
    },

    launchSimple() {
      this.set('simpleview', true);
    }
  },
  firstchart: Ember.computed('model', function() {
    return {
      zoomEnabled: false,
      labels: this.get('model.labels'),
      datasets: [{
        label: 'Months',
        data: this.get('model.series'),
        backgroundColor: 'rgba(26, 188, 156, 1)',
        borderColor: 'rgba(52, 73, 94, 1)'
      }]
    };
  })
});
