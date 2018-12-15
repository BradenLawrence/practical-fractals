import Component from '@ember/component';

const mandelBrotChecker = (x,y, p) => {
  let real = x;
  let imaginary = y;
  for(let i=0; i<p; i++){
    let nextReal = real*real-imaginary*imaginary+x;
    let nextImaginary = 2*real*imaginary+y;
    real = nextReal;
    imaginary = nextImaginary;
  }
  if(real*imaginary<2){
    return true;
  } else {
    return false;
  }
}

export default Component.extend({
  screenWidth:  document.documentElement.clientWidth,
  screenHeight:  document.documentElement.clientHeight,
  size: 10,
  permissiveness: 100,
  didInsertElement() {
    this.initCanvas()
  },
  initCanvas() {
    const canvas = this.element.querySelector('canvas')
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const sizeCounter = Number(this.size);
    const permissivenessCounter = Number(this.permissiveness)
    const zoom = 300;
    const panX = 3;
    const panY = 1.5;
    for(let x=0; x<canvas.width; x+=sizeCounter){
      for(let y=0; y<canvas.height; y+=sizeCounter){
        const doesBelong = mandelBrotChecker(x/zoom-panX,y/zoom-panY, permissivenessCounter)
        if(doesBelong){
          ctx.fillStyle = 'black';
        } else {
          ctx.fillStyle = 'blue';
        }
        ctx.fillRect(x,y,sizeCounter,sizeCounter)
      }
    }
  },
  actions: {
    sliderUpdate(value) {
      this.initCanvas();
      return value;
    },
    permissivenessUpdate(value) {
      this.initCanvas();
      return value;
    }
  }
});