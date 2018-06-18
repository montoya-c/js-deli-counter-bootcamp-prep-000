var katzDeliLine=[];

var otherDeli=[];

function takeANumber(katzDeliLine){
    var number = 1
    number ++
    katzDeliLine.push(number);
    return `You are number ${number}.`;
}

console.log(takeANumber(katzDeliLine))




function nowServing (line){
  if (line.length >0){
    var name = line[0];
    line.shift()
    return `Currently serving ${name}.`
  }
    else { return 'There is nobody waiting to be served!'}
}


function currentLine (line){
  var array =[];
  if (line.length>0){
    for (var i=0; i<line.length; i++){
      array.push(`${i+1}. ${line[i]}`);
    }
  return `The line is currently: ${array.join(', ')}`;   
  }else{
  return 'The line is currently empty.';
  }
}