
var question1 = "Does my family call me Maria?";
var response1 = prompt(question1);
response1 = response1.toLowerCase();
console.log(question1);
console.log("User responded " + response1);
if(response1 === "n" || response1 === "no") {
  console.log("That is correct");
  alert("Good job! You got it right!")
} else {
  console.log("That is incorrect");
  alert("Good try, but you got it wrong.")
}



// var question2 = "Is my favorite animal one that I have never seen?";
// var response2 = prompt(question2);

// var question3 = "Do I think bugs are cute?";
// var response3 = prompt(question3);

// var question4 = "Do I like watching sports?";
// var response4 = prompt(question4);

// var question5 = "Do I like participating in sports?";
// var response5 = prompt(question5);