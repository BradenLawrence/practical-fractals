import Component from '@ember/component';
import isHexColor from '../utils/is-hex-color'

export default Component.extend({
  formColor: '',
  actions: {
    onColorChange(value){
      let previousValidColor = this.color.failColor1
      if(isHexColor(value)){
        this.color.failColor1 = value;
        this.updateHandler(value);
      } else {
        this.set('formColor', previousValidColor);
      }
    }
  }
});
