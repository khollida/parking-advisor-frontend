import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    switchView(){
      this.get('onSwitch')();
    }
  }
});
