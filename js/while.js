"use strict";

// let whileNum = 2;
//
// // do {
// //     console.log(whileNum);
// //     whileNum = whileNum*2;
// // } while(whileNum <= 65536);
//

let theNum=2;
do{
    console.log(theNum);
    theNum=theNum*2;
}while(theNum<=65536);
//great job done on friday! aug 31!
//this is how you get random numbers from 50-100
// // This is how you get a random number between 50 and 100
// let allCones = Math.floor(Math.random() * 50) + 50;
// do{
//     let sellCones = Math.floor(Math.random() * 5) + 1;
//     console.log(sellCones);
//     switch(sellCones <= allCones){
//         case true:
//             console.log("Cool I sold"+ sellCones+"!");
//             allCones = allCones-sellCones;
//             break;
//         default:
//             console.log("I can't sell you" + sellCones + "because I have only" + allCones + "left.");
//             break;
//     }
// }while(allCones > 0);
// console.log("I sold all my cones, time to restock!");
//
// let allCones2 = Math.floor(Math.random()*50)+50;
// do{
//     let sellCones2 =Math.floor(Math.random()*5)+1;
//     switch(sellCones2 <= allCones2){
//         case true:
//             console.log("cool I sold"+sellCones2+"!");
//             allCones2 = allCones2-sellCones2;
//             break;
//         default:
//             console.log("I cant sell you"+ sellCones2+"because I have only"+allCones2+"left!");
//             break;
//     }
// }while(allCones2 >0);
// console.log("I sold all the cones for today");

// var allCones = Math.floor(Math.random() * 50) + 50;
// do {
//     console.log("I must sell " + allCones + ".");
//     var soldToEach = Math.floor(Math.random() * 5) + 1;
//     if (soldToEach < allCones) {
//         console.log(soldToEach + " Cones sold!")
//         allCones = allCones - soldToEach;
//     } else if (allCones === soldToEach){
//         console.log("I SOLD THEM ALL!")
//         break;
//     } else {
//         console.log("I can't sell " + soldToEach +" Cones! I only have " + allCones + " Left!");
//
//     }
// } while(allCones >= 0);
// cones with if, else if, else

let allCones = Math.floor(Math.random()*50)+50;
    do{
        console.log("I have this many cones to start off with and sell "+ allCones+"!");
        let soldToEach= Math.floor(Math.random()*5)+1;
        if (soldToEach<allCones){
            console.log(soldToEach+"cones sold!");
            allCones=allCones-soldToEach;
        } else if (allCones===soldToEach){
            console.log("all cones have been sold");
            break;
        }else {
            console.log("cant sell you"+soldToEach+"cones I only have "+allCones+"!");
        }
    }while(allCones>=0);

// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
//
// //
// do{
//     var sellCones = Math.floor(Math.random() * 5) + 1;
//     switch(sellCones <= allCones) {
//         case true:
//             console.log("Yay I sold " + sellCones + "!");
//             allCones = allCones - sellCones;
//             break;
//         default:
//             console.log("I can't sell you " + sellCones + " because I have only " + allCones + " left.");
//             break;
//     }
// } while(allCones > 0);
//
// console.log("I sold all of my cones, time to go!");


