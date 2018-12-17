import Component from '@ember/component';

const isHexColor = (input) => {
  if(input.charAt(0) === '#' && input.length === 7){
    return true;
  } else {
    return false;
  }
}

export default Component.extend({
  actions: {
    onColorChange(value){
      if(isHexColor(value)){
        this.get('updateHandler')(value);
      }
      return value;
    }
  }
});
