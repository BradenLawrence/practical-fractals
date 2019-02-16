import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this.send('initCanvas');
  },
  actions: {
    initCanvas() {
      const canvas = this.element.querySelector('canvas')
      const ctx = canvas.getContext('2d');
      const sizeCounter = Number(this.precision.blockSize);
      const permissivenessCounter = Number(this.precision.permissiveness)
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      const panX = this.position.x;
      console.log(this.position.x)
      const panY = this.position.y;
      const zoom = this.position.zoom;
      ctx.canvas.width = canvasWidth;
      ctx.canvas.height = canvasHeight;
      for(let x=0; x<ctx.canvas.width; x+=sizeCounter){
        for(let y=0; y<ctx.canvas.height; y+=sizeCounter){
          const doesBelong = this.formula.mandelbrot.check(x/zoom-panX,y/zoom-panY, permissivenessCounter)
          if(doesBelong === -1){
            ctx.fillStyle = this.color.belongsColor;
          } else if(doesBelong > (this.precision.permissiveness * .66)){
            ctx.fillStyle = this.color.failColor1;
          } else if(doesBelong > (this.precision.permissiveness * .33)){
            ctx.fillStyle = this.color.failColor2;
          } else if(doesBelong > (this.precision.permissiveness * .11)){
            ctx.fillStyle = this.color.failColor3;
          } else if(doesBelong > (this.precision.permissiveness * .05)){
            ctx.fillStyle = this.color.failColor4;
          } else if(doesBelong > (this.precision.permissiveness * .025)){
            ctx.fillStyle = this.color.failColor5;
          } else {
            ctx.fillStyle = this.color.failColor6;
          }
          ctx.fillRect(x,y,sizeCounter,sizeCounter)
        }
      }
    }  
  }
});