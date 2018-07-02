
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine){
  var print = "The line is currently: ";
  if (katzDeliLine.length === 0)
  {
    return "The line is currently empty.";
  }
  else{
    for(let i=0; i<katzDeliLine.length; i++)
    {
      print = print + (i+1) + ". " + katzDeliLine[i];
      if (i<katzDeliLine.length-1)
      {
      print = print + ", ";
      }
    }
  return print;
  }
}