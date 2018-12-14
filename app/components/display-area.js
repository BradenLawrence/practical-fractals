import Component from '@ember/component';

const mandelBrotChecker = (x,y) => {
  let real = x;
  let imaginary = y;
  for(let i=0; i<20; i++){
    let nextReal = real*real-imaginary*imaginary+x;
    let nextImaginary = 2*real*imaginary+y;
    real = nextReal;
    imaginary = nextImaginary;
  }
  if(real*imaginary<5){
    return true;
  } else {
    return false;
  }
}

export default Component.extend({
  screenWidth:  document.documentElement.clientWidth,
  screenHeight:  document.documentElement.clientHeight,
  didInsertElement() {
    this.initCanvas()
  },
  initCanvas() {
    const canvas = this.element.querySelector('canvas')
    const ctx = canvas.getContext('2d');
    const size = 2;
    const zoom = 200;
    const panX = 5;
    const panY = 2.2;
    for(let x=0; x<canvas.width; x+=size){
      for(let y=0; y<canvas.height; y+=size){
        const doesBelong = mandelBrotChecker(x/zoom-panX,y/zoom-panY)
        if(doesBelong){
          ctx.fillStyle = 'black';
        } else {
          ctx.fillStyle = 'blue';
        }
        ctx.fillRect(x,y,size,size)
      }
    }
  }
});