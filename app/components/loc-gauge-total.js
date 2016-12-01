import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement: function(){
    Ember.$(function() {
    Ember.$(".dial").knob({
      'readOnly': true,
      'max': 3000,
      'fgColor': '#1abc9c',
      // 'fgColor': 'rgba(236, 240, 241,1.0)',
      'inputColor': '#ecf0f1',
      'bgColor': 'rgba(220,220,220,0.2)'
    });
    });
  }
});
