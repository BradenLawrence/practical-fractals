export default function isHexColor(input) {
  if(input.charAt(0) === '#'){
    input = input.slice(1);
  }
  var a = parseInt(input,16);
  a = ('0' + a).slice(-6)
  console.log('Input: ', input)
  console.log('Hexified input: ', a)
  return (a.toString(16) == input.toLowerCase())
}
