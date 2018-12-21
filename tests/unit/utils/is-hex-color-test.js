import isHexColor from 'practical-fractals/utils/is-hex-color';
import { module, test } from 'qunit';

module('Unit | Utility | is-hex-color', function(hooks) {

  test('Standard hex value', function(assert) {
    let result = isHexColor('ff0000');
    assert.ok(result);
  });
  test('Standard hex value with leading zeroes', function(assert) {
    let result = isHexColor('0000ff');
    assert.ok(result);
  });
  test('Hex value with hash', function(assert) {
    let result = isHexColor('#0000ff');
    assert.ok(result);
  });
  test('Not a hex string', function(assert) {
    let result = isHexColor('puppies');
    assert.ok(!result);
  });
  test('Not a string', function(assert) {
    let result = isHexColor(1);
    assert.ok(!result);
  });
});
