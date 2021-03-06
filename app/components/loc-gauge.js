import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement: function(){
    Ember.$(function() {
    Ember.$(".dialnorm").knob({
      'readOnly': true,
      'max': 200,
      'fgColor': '#1abc9c',
      // 'fgColor': 'rgba(236, 240, 241,1.0)',
      'inputColor': '#ecf0f1',
      'bgColor': 'rgba(220,220,220,0.2)'
    });
    });
  }
});
