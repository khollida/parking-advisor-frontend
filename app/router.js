import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('location', { path: '/location/:location_id' });
  this.route('visual');
});

export default Router;
