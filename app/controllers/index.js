import Ember from 'ember';

export default Ember.Controller.extend({

    location: '',
    actions: {
      searchSpaces() {
        // alert(`Saving of the following email address is in progress: ${this.get('location')}`);
        this.transitionToRoute('location', this.get('location'));
        this.set('location', '');

      }
    }


});
