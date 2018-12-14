import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this.initCanvas()
  },
  initCanvas() {
    const canvas = this.element.querySelector('canvas')
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 100);
  }
});