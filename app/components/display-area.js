import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this.initCanvas()
  },
  initCanvas() {
    const canvas = this.element.querySelector('canvas')
    const ctx = canvas.getContext('2d');
    const size = 10;
    // ctx.fillRect(10, 10, 150, 100);
    for(let x=0; x<canvas.width; x+=size){
      for(let y=0; y<canvas.height; y+=size){
        ctx.fillStyle = `rgb(${x},${y},100)`;
        ctx.fillRect(x,y,size,size)
      }
    }
    

  }
});