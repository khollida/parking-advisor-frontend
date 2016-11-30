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
      defaultFontColor: 'rgba(236, 240, 241,1.0)',
      zoomEnabled: false,
      labels: this.get('model.labels'),
      datasets: [{
        label: 'Months',
        data: this.get('model.series'),
        backgroundColor: 'rgba(220,220,220,0.2)',
        borderColor: 'rgba(236, 240, 241,1.0)'
      }],
    };
  }),
  options: {
    responsive: true,
    tooltips: {
      mode: 'single',
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "rgba(236, 240, 241,1.0)", // this here
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "rgba(236, 240, 241,1.0)", // this here
        }
      }],
    }
  },

  monthlyCountChart: Ember.computed('model', function() {
    return {
      defaultFontColor: 'rgba(236, 240, 241,1.0)',
      zoomEnabled: false,
      labels: ['01','02','03','04','05','06','07','08','09','10','11','12'],
      datasets: [{
        label: 'Months',
        data: this.get('model.countMonthly'),
        backgroundColor: 'rgba(220,220,220,0.2)',
        borderColor: 'rgba(236, 240, 241,1.0)'
      }],
    };
  })

});
