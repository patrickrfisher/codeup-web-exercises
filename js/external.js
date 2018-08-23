"use strict";

// take in five numbers and return it from highest to lowest also using the parseFloat() to make sure you can use decimals



// var sort = function(a,b,c,d,e){
//     var highest = [parseFloat(a),parseFloat(b),parseFloat(c),parseFloat(d),parseFloat(e)];
//         highest = highest.sort( function(a,b){
//                 return b-a});
//     return highest;
//             };
// console.log(sort(1,2,3,4,5));




// write a function to check two given numbers and return true if one of the numbers is 80 or it their sum is 80; if not return false

// function eighty(a,b){
//     if((a===80)||(b===80)){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(eighty(40,20));


// write a function  that takes in a string,
//     returns a string with "py" in front
// if already starts with "py" return original string
// var pyadder = function (str, test){
//     test = test.toLowerCase();
//     str = str.toLowerCase();
//     if (str.substring(0,2)===test){
//         return str;
//     }
//
//         else {
//         str=test+str;
//         return str;
//     }
//
// };
//
//
// console.log(pyadder('Romania', "super"));


// takes in single input
//if not a string, return false
//if is a string, return true
//if contains vowels [a,e,i,o,u](no y) return true
//else return false

// objects arrays and strings basic jvs and git for the assesment tomorrow

// ------------------------------------
// push ups 8/23

// fact data that uniquely identifies a person
//
// let name = [
//     {
//         name: "Daniel Fryar",
//         hairColor: "brown",
//         eyeColor: "brown",
//         birthDay: {
//             month: 8,
//             day: 21,
//         }
//     },
//     {
//         name: "Patrick Fisher",
//         hairColor: "brownish",
//         eyeColor: "brownish",
//         birthDay: {
//             month: 2,
//             day: 25,
//         }
//     },
//     {
//         name: "fisherp",
//         hairColor: "blonde",
//         eyeColor: "blonde",
//         birthDay: {
//             month: 8,
//             day: 21,
//         }
//     },
// ];
// name.forEach(function(name,index){
//     console.log("name #"+(index +1));
//     console.log("haircolor"+name.name);
//     console.log("eyecolor"+name.eyeColor);
//     console.log("birthday"+name.birthDay.month+""+name.birthDay.day);
// });
//
// me.juggle=function(){
//     console.log("hey look at me juggle!");
// }
//
//
//
// var students =[];
// students.push(me);
// students.push(cole);
// students[0].juggle()

//make three students
//add info to yourself that makes you more unique
//add a method or two onto the function
//
// pushups daniel version
//-------
var superman ={
    name:"Superman",
    secretIdentity:{
        name:"Clark Kent",
        occupation:"reporter for the dailey planet"
    },
    hairColor:"black",
    eyeColor:"blue(with lazers and x-ray)",
    superPower: function(){
        console.log("Hey look at me I am juggeling");
        },
    sleep.function(){

    }
};

var wonderwoman = {}




//daniels version
var superman = {
    name : “Superman”,
secretIdentity: {
    name: “Clark Kent”,
    occupation: “reporter for Daily Planet”
},
hairColor: “black”,
eyeColor: “blue(with lazers and x-ray)“,
superPower: function() {
    console.log(“Hey look at me I’m juggling”);
},
sleep: function() {

}
};

var wonderwoman = {
    name: “Wonder Woman”,
secretIdentity: {
    name: “Diana Prince”,
    occupation: “museum curator”,
},
hairColor: “black”,
eyeColor: “blue, I assume”,
superPower: function() {
    console.log(“She can fly, and she also has an invisible jet, so is she flying it or is it flying her??“);
},
};

var superTeam = [];
superTeam.push(superman);
superTeam.push(wonderwoman);
superTeam.forEach(function(member){
    member.superPower();
});



// each degree is about sixty miles

