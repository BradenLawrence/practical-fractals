import Component from '@ember/component';

export default Component.extend({
  screenWidth:  document.documentElement.clientWidth,
  screenHeight:  document.documentElement.clientHeight,
  didInsertElement() {
    this.send('initCanvas');
  },
  actions: {
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
          if(doesBelong === -1){
            ctx.fillStyle = this.color.belongsColor;
          } else if(doesBelong > (this.precision.permissiveness * .66)){
            ctx.fillStyle = this.color.failColor1;
          } else if(doesBelong > (this.precision.permissiveness * .33)){
            ctx.fillStyle = this.color.failColor2;
          } else {
            ctx.fillStyle = this.color.failColor3;
          }
          ctx.fillRect(x,y,sizeCounter,sizeCounter)
        }
      }
    }  
  }
});