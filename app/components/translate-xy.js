import Component from '@ember/component';

export default Component.extend({
  actions: {
    onXChange(value) {
      this.position.x += value;
      this.get('updateHandler')(value);
    },
    onYChange(value) {
      this.position.y += value;
      this.get('updateHandler')(value);
    }
  }
});
