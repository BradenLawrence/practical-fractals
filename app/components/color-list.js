import Component from '@ember/component';
import isHexColor from '../utils/is-hex-color'

export default Component.extend({
  formColor0: '',
  formColor1: '',
  formColor2: '',
  didInsertElement() {
    this.set('formColor0', this.color.failColor1)
    this.set('formColor1', this.color.failColor2)
    this.set('formColor2', this.color.failColor3)
  },
  actions: {
    onColorChange(value, index){
      if(isHexColor(value)){
        this.set(`color.failColor${index}`, value );
        this.updateHandler();
      } else {
        // this.set('form1Color', previousValidColor);
      }
    }
  }
});
