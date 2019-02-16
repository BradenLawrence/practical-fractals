import Component from '@ember/component';

export default Component.extend({
  actions: {
    onZoomChange(value) {
      this.position.zoom += value;
      this.get('updateHandler')(value);
    }
  }
});
