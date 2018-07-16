//1. benjamin 2. steven
let numberServed = 0;
function currentLine(line) {
  if(!line.length) {
    return "The line is currently empty.";
  }
  var numbersAndNames = [];
  
  for (let i = 0; i < line.length; i++) {
    numbersAndNames.push(`${i+1}. ${line[i]}`);
  }
  return `The line is currently: ${numbersAndNames.join(", ")}`;
}

function nowServing(line){
  if(!line.length) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`;
}

function takeANumber() {
  numberServed++;
}