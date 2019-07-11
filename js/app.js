"use strict";
alert("Welcome. Please answer these 5 trivia questions about me! Type 'yes' or 'no' to answer. (Y or N also work)");
var name = prompt("What is your name?");
var score = 0;
// //
// //QUESTION1
var question1 = "Does my family call me Maria?";
var response1 = prompt(question1).toLowerCase();
console.log(question1);
console.log("User responded " + response1);
if(response1 === "n" || response1 === "no") {
  console.log("That is correct");
  score +=1;
  alert("Good job! You got it right!");
} else {
  console.log("That is incorrect");
  alert("Good try, but you got it wrong.");
}
//
//QUESTION2
var question2 = "Is my favorite animal one that I have never seen?";
var response2 = prompt(question2).toLowerCase();
console.log(question2);
console.log("User responded " + response2);
if(response2 === "y" || response2 === "yes") {
  console.log("That is correct");
  score +=1;
  alert("Good job! You got it right!");
} else {
  console.log("That is incorrect");
  alert("Good try, but you got it wrong.");
}
//
//QUESTION3
var question3 = "Do I think bugs are cute?";
var response3 = prompt(question3).toLowerCase();
console.log(question3);
console.log("User responded " + response3);
if(response3 === "n" || response3 === "no") {
  console.log("That is correct");
  score +=1;
  alert("Good job! You got it right!");
} else {
  console.log("That is incorrect");
  alert("Good try, but you got it wrong.");
}
//
//QUESTION4
var question4 = "Do I like watching sports?";
var response4 = prompt(question4).toLowerCase();
console.log(question4);
console.log("User responded " + response4);
if(response4 === "n" || response4 === "no") {
  console.log("That is correct");
  score +=1;
  alert("Good job! You got it right!");
} else {
  console.log("That is incorrect");
  alert("Good try, but you got it wrong.");
}
//
//QUESTION 5
var question5 = "Do I like participating in sports?";
var response5 = prompt(question5).toLowerCase();
console.log(question5);
console.log("User responded " + response5);
if(response5 === "y" || response5 === "yes") {
  console.log("That is correct");
  score +=1;
  alert("Good job! You got it right!");
} else {
  console.log("That is incorrect");
  alert("Good try, but you got it wrong.");
}
//
//Question 6
var question6 = "At what age did I first do a handstand?";
var answer6 = 25;
console.log(question6);
for(var i=0; i<4; i++) {
  var response6 = parseInt(prompt(question6));
  console.log("User responded " + response6);
  if (response6 === answer6) {
    console.log("That is correct");
    alert("Good job! You got it right!");
    score +=1;
    break;
  } else if(i===3 && response6 < answer6) {
    alert("Too low. Next question.");
    console.log("That is incorrect");
  } else if (1===3 && response6 > answer6) {
    alert("Too high. Next question.");
    console.log("That is incorrect");
  } else if (response6 > answer6) {
    alert("Too high. Try again.");
    console.log("That is incorrect");
  } else if(response6 < answer6) {
    alert("Too low. Try again.");
    console.log("That is incorrect");
  } else {
    alert("Please enter a number.");
    console.log("Not a number");
  }
}
//
// //Question 7
var favAnimals = ["platypus", "turtle", "otter"];
var isTrue = false;
var question7 = "Guess 1 of my 3 favorite animals. (Type in singular)";
console.log(question7);
for(var i=0;i<6;i++) {
  var response7 = prompt(question7).toLowerCase();
  console.log("User responded " + response7);
  for(var j=0; j<favAnimals.length; j++) {
    if( response7 === favAnimals[j]) {
      isTrue = true;
      break;
    }
  }
  if(isTrue) {
    console.log("That is correct");
    alert("Good job! You got it right!");
    score +=1;
    break;
  } else if (i === 5) {
    alert("That is incorrect.");
    console.log("That is incorrect");
  } else {
    alert("You got it wrong. Try again.");
    console.log("That is incorrect");
  }
}
//
//END OF QUESTIONS
//SCORE
console.log("User scored " + score + " out of 7");
alert("Thanks for playing " + name + ". You scored " + score + " out of 7.")
