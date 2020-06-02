var myAge;

myAge = prompt('How old is Rene?');
var myGuessAge = parseint(myAge); //this turns a string into a number 

if (myGuessAge > 20 && myGuessAge< 40){
  var correctAge = alert('You are around there!');
} else if (myGuessAge < 20){
  var correctAge = alert('mmmm, waaa!');
} else if(myGuessAge > 40){
  var correctAge = alert('Bet!');
} else {
  var correctAge = alert('Try again!');
}
}

var reneIsTeacher = confirm ('is Rene a teacher?');
// this means if(reneIsTeacher === true) can use if(true === true) or if(true)
if (reneIsTeacher){
  alert('Yep');
} else {
  alert('No');
} 
