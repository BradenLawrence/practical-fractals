import Controller from '@ember/controller';

export default Controller.extend({
  color: {
    belongsColor: '#000000',
    failColor1:   '#3333FF',
    failColor2:   '#000088',
    failColor3:   '#000055'
  },
  formula: {
    mandelbrot: {
      check(x,y,permissiveness){
        let real = x;
        let imaginary = y;
        let i
        for(i=0; i<permissiveness; i++){
          let nextReal = real*real-imaginary*imaginary+x;
          let nextImaginary = 2*real*imaginary+y;
          real = nextReal;
          imaginary = nextImaginary;
          if(real*imaginary>2){
            return i;
          }
        }
        return -1;
      }
    }
  },
  position: {
    x: 3,
    y: 1.5,
    zoom: 300
  },
  precision: {
    blockSize: 3,
    permissiveness: 50
  }
});
