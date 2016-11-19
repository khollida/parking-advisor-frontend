import Ember from 'ember';

export default Ember.Controller.extend({

    location: '',
    actions: {
      searchSpaces() {
        this.transitionToRoute('location', this.get('location'));
        this.set('location', '');

      }
    }


});
