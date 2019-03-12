import Component from '@ember/component';

export default Component.extend({
  actions: {
    onPrecisionChange(value) {
      this.get('updateHandler')(value);
    }
  }
});
