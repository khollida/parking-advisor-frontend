import Ember from 'ember';

export function roundDecimal(num) {
  if(num === "" && typeof num === "string"){ return ''; }
  if (isNaN(num)) { return ''; }

  return parseFloat(num).toFixed(2);
}

export default Ember.Helper.helper(roundDecimal);
