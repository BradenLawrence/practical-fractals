export default function isHexColor(input) {
  if(typeof input !== 'string'){
    return false;
  }
  if(input.charAt(0) === '#'){
    input = input.slice(1);
  }
  let hex = parseInt(input,16);
  let hexString = hex.toString(16);
  for(let i=hexString.length; i<6; i++){
    hexString = '0' + hexString;
  }
  return (hexString === input.toLowerCase())
}
