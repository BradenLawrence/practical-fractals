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
    const sizeCounter = Number(this.precision.blockSize);
    const permissivenessCounter = Number(this.precision.permissiveness)
    const panX = this.position.x;
    const panY = this.position.y;
    const zoom = this.position.zoom;
    for(let x=0; x<canvas.width; x+=sizeCounter){
      for(let y=0; y<canvas.height; y+=sizeCounter){
        const doesBelong = this.formula.mandelbrot.check(x/zoom-panX,y/zoom-panY, permissivenessCounter)
        if(doesBelong){
          ctx.fillStyle = this.color.belongsColor;
        } else {
          ctx.fillStyle = this.color.failColor1;
        }
        ctx.fillRect(x,y,sizeCounter,sizeCounter)
      }
    }
  },
  actions: {
    sizeUpdate(value) {
      this.initCanvas();
      return value;
    },
    permissivenessUpdate(value) {
      this.initCanvas();
      return value;
    }
  }
});