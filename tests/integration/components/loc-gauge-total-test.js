import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loc-gauge-total', 'Integration | Component | loc gauge total', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{loc-gauge-total}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#loc-gauge-total}}
      template block text
    {{/loc-gauge-total}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
