import Component from '@ember/component';
import isHexColor from '../utils/is-hex-color'

export default Component.extend({
  form1Color: '',
  form2Color: '',
  form3Color: '',
  didInsertElement() {
    this.set('form1Color', this.color.failColor1)
    this.set('form2Color', this.color.failColor2)
    this.set('form3Color', this.color.failColor3)
  },
  actions: {
    onColorChange(value){
      let previousValidColor = this.color.failColor1
      if(isHexColor(value)){
        this.color.failColor1 = value;
        this.updateHandler(value);
      } else {
        this.set('form1Color', previousValidColor);
      }
    }
  }
});
