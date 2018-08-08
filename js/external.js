alert("Welcome to my Website!");
var userInput = prompt("What is your favorite color?");
alert("Wow my favorite color is also " + userInput);
console.log('color choice: '+ userInput);
console.log("Hello from external JavaScript")

alert("This is going to be the movie libary");


var firstmovie=prompt("Which movie have you chosen?");
var firstime=Number(prompt("How many days "));

var secondmovie=prompt("If you rented more then one would you name it?");
var secondtime=Number(prompt("How many days "));

var thirdmovie=(prompt("If you rented more then two will you name it?"));
var thirdtime=Number(prompt("How many days "));

var total=(firstime+secondtime+thirdtime)*3;


alert("The total amount due is $ " + total+".00! \n You have rented:\n 1. " + firstmovie+"\n 2. "+secondmovie+"\n 3. "+thirdmovie);




alert("Here you have the pay system that will ask for your hourly wage and the hours worked per employer and then give you your weekly salary")


var googlepayent=parseFloat(prompt("Enter hourly payment for Google(usually is $400.00)"));
var googletime=parseFloat(prompt("How many hours did you worked"));

var amazonpayment=parseFloat(prompt("Enter hourly payment for Amazon(usually is $380.00"));
var amazontime=parseFloat(prompt("How many hours did you worked"));

var facebookpayment=parseFloat(prompt("Enter hourly payment for Facebook(usually is $350.00)"));
var facebooktime=parseFloat(prompt("How many hours did you worked"));


var weeklysalary=(googletime*googlepayent)+(facebooktime*facebookpayment)+(amazonpayment*amazontime);


alert("Your weekly pay check is: "+ weeklysalary);



alert("Can you be enrolled?");

var  isClassFull=(prompt("Is the class full?")=="yes");

var  schedduleconflict=(prompt("Does the schedule conflict with your school schedule?")=="yes");

var canbeenrolled= !isClassFull && !schedduleconflict;


alert("Can you be enrolled? " + canbeenrolled);






// Complete exercise 3 from the previous lesson, but write your code
//     in the external.js file instead of in the console.
//     When the exercise asks you to use a number, instead use a prompt
//     to ask the user for that number.
//     Use an alert to show the results of each problem.