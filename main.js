// Your code here!
const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')

const userInput1= getInput(0);
const userInput2= getInput(1);

if(userInput1 === undefined && userInput2 === undefined){
  return 'You need to enter a color'
}else if(userInput1 !== undefined && userInput2 === undefined){
  let x = colorDeconstructor
console.log(x(userInput1))
}else if(userInput1 === undefined && userInput2 === undefined){
  console.log(x(userInput1 + userInput2))
}




//console.log('You need to enter a color')
// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}
