import Controller from '@ember/controller';

export default Controller.extend({
  color: {
    belongsColor: '#000000',
    failColor1:   '#3333FF',
    failColor2:   '#111188',
    failColor3:   '#000066',
    failColor4:   '#000044',
    failColor5:   '#000022',
    failColor6:   '#000011'
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
    x: 2.75,
    y: 1,
    zoom: 450
  },
  precision: {
    blockSize: 3,
    permissiveness: 50
  }
});
