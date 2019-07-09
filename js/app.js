"use strict";
alert("Welcome. Please answer these 5 trivia questions about me! Type 'yes' or 'no' to answer. (Y or N also work)");
// 
//QUESTION1
var question1 = "Does my family call me Maria?";
var response1 = prompt(question1);
response1 = response1.toLowerCase();
console.log(question1);
console.log("User responded " + response1);
if(response1 === "n" || response1 === "no") {
  console.log("That is correct");
  alert("Good job! You got it right!");
} else {
  console.log("That is incorrect");
  alert("Good try, but you got it wrong.");
}
// 
//QUESTION2
var question2 = "Is my favorite animal one that I have never seen?";
var response2 = prompt(question2);
console.log(question2);
console.log("User responded " + response2);
if(response2 === "y" || response2 === "yes") {
  console.log("That is correct");
  alert("Good job! You got it right!");
} else {
  console.log("That is incorrect");
  alert("Good try, but you got it wrong.");
}
// 
//QUESTION3
var question3 = "Do I think bugs are cute?";
var response3 = prompt(question3);
console.log(question3);
console.log("User responded " + response3);
if(response3 === "n" || response3 === "no") {
  console.log("That is correct");
  alert("Good job! You got it right!");
} else {
  console.log("That is incorrect");
  alert("Good try, but you got it wrong.");
}
// 
//QUESTION4
var question4 = "Do I like watching sports?";
var response4 = prompt(question4);
console.log(question4);
console.log("User responded " + response4);
if(response4 === "n" || response4 === "no") {
  console.log("That is correct");
  alert("Good job! You got it right!");
} else {
  console.log("That is incorrect");
  alert("Good try, but you got it wrong.");
}
// 
//QUESTION 5
var question5 = "Do I like participating in sports?";
var response5 = prompt(question5);
console.log(question5);
console.log("User responded " + response5);
if(response5 === "y" || response5 === "yes") {
  console.log("That is correct");
  alert("Good job! You got it right!");
} else {
  console.log("That is incorrect");
  alert("Good try, but you got it wrong.");
}