import Controller from '@ember/controller';

export default Controller.extend({
  color: {
    belongsColor: '000000',
    failColor1:   '0000FF'
  },
  formula: {
    mandelbrot: {
      check(x,y,permissiveness){
        let real = x;
        let imaginary = y;
        for(let i=0; i<permissiveness; i++){
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
    }
  },
  position: {
    x: 3,
    y: 1.5,
    zoom: 300
  },
  precision: {
    blockSize: 5,
    permissiveness: 50
  }
});
