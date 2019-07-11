"use strict";
// alert("Welcome. Please answer these 5 trivia questions about me! Type 'yes' or 'no' to answer. (Y or N also work)");
// var name = prompt("What is your name?");
var score = 0;
// //
var questions = [
  "Does my family call me Maria?",
  "Is my favorite animal one that I have never seen?",
  "Do I think bugs are cute?",
  "Do I like watching sports?",
  "Do I like participating in sports?"
];
var answers = ["no","yes","no","no","yes"];
function quiz(question, answer) {
  var response = prompt(question).toLowerCase();
  console.log(question);
  console.log("User responded " + response);
  if(response === answer || response === answer.charAt(0)) {
    console.log("That is correct");
    score +=1;
    alert("Good job! You got it right!");
  } else {
    console.log("That is incorrect");
    alert("Good try, but you got it wrong.");
  }
}
for(var i = 0; i < questions.length; i++) {
  quiz(questions[i], answers[i]);
}

// //Question 6
// var question6 = "At what age did I first do a handstand?";
// var answer6 = 25;
// console.log(question6);
// for(var i=0; i<4; i++) {
//   var response6 = parseInt(prompt(question6));
//   console.log("User responded " + response6);
//   if (response6 === answer6) {
//     console.log("That is correct");
//     alert("Good job! You got it right!");
//     score +=1;
//     break;
//   } else if(i===3 && response6 < answer6) {
//     alert("Too low. Next question.");
//     console.log("That is incorrect");
//   } else if (1===3 && response6 > answer6) {
//     alert("Too high. Next question.");
//     console.log("That is incorrect");
//   } else if (response6 > answer6) {
//     alert("Too high. Try again.");
//     console.log("That is incorrect");
//   } else if(response6 < answer6) {
//     alert("Too low. Try again.");
//     console.log("That is incorrect");
//   } else {
//     alert("Please enter a number.");
//     console.log("Not a number");
//   }
// }
// //
// // //Question 7
// var favAnimals = ["platypus", "turtle", "otter"];
// var isTrue = false;
// var question7 = "Guess 1 of my 3 favorite animals. (Type in singular)";
// console.log(question7);
// for(var i=0;i<6;i++) {
//   var response7 = prompt(question7).toLowerCase();
//   console.log("User responded " + response7);
//   for(var j=0; j<favAnimals.length; j++) {
//     if( response7 === favAnimals[j]) {
//       isTrue = true;
//       break;
//     }
//   }
//   if(isTrue) {
//     console.log("That is correct");
//     alert("Good job! You got it right!");
//     score +=1;
//     break;
//   } else if (i === 5) {
//     alert("That is incorrect.");
//     console.log("That is incorrect");
//   } else {
//     alert("You got it wrong. Try again.");
//     console.log("That is incorrect");
//   }
// }
// //
// //END OF QUESTIONS
// //SCORE
// console.log("User scored " + score + " out of 7");
// alert("Thanks for playing " + name + ". You scored " + score + " out of 7.")
