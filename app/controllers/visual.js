import Ember from 'ember';

export default Ember.Controller.extend({

  firstchart: Ember.computed('model', function() {
    return {
      zoomEnabled: false,
      labels: this.get('model.labels'),
      datasets: [{
        label: 'Months',
        data: this.get('model.series')
      }]
    };
  })
});
