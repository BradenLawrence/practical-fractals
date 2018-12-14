import Component from '@ember/component';

export default Component.extend({
  screenWidth:  document.documentElement.clientWidth,
  screenHeight:  document.documentElement.clientHeight,
  didInsertElement() {
    this.initCanvas()
  },
  initCanvas() {
    const canvas = this.element.querySelector('canvas')
    const ctx = canvas.getContext('2d');
    const size = 1;
    for(let x=0; x<canvas.width; x+=size){
      for(let y=0; y<canvas.height; y+=size){
        ctx.fillStyle = `rgb(${x/2},${y/2},100)`;
        ctx.fillRect(x,y,size,size)
      }
    }
    

  }
});