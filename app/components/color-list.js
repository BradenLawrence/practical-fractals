import Component from '@ember/component';
import isHexColor from '../utils/is-hex-color'

export default Component.extend({
  formColor0: '',
  formColor1: '',
  formColor2: '',
  formColor3: '',
  formColor4: '',
  formColor5: '',
  didInsertElement() {
    this.set('formColor0', this.color.failColor1)
    this.set('formColor1', this.color.failColor2)
    this.set('formColor2', this.color.failColor3)
    this.set('formColor3', this.color.failColor4)
    this.set('formColor4', this.color.failColor5)
    this.set('formColor5', this.color.failColor6)
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
