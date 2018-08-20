//todo create a function to loop multiply 7,
// in this function it will need to use a loop
// and maybe a conditional
//
//
//     function multiply(x,y) {
//     var product = x;
//         for (var i =1; i<y;i++){
//                 product = product +=x;
//                 }
//             return product;
//     }
//
//
//     function exponentiate(x,y) {
//     var product = 1;
//     for (var i =0; i<y;i++){
//         product = product *=x;
//     }
//     return product;
// }
//
// var calculatePi = function(){
//     var pi;
//
//     pi = Math.PI;
//         return pi;
// }
// console.log(calculatePi());
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="utf-8">
//     <title>Defuse the BOM</title>
// </head>
// <body>
//
// <h2 id="message">This BOM will self destruct in <span id="timer">5</span> seconds...</h2>
// <button id="defuser">Defuse the BOM</button>
//
// <script>
// (function() {
//     "use strict";
//     var interval = 1000;
//     var detonationTimer = 5;
//     // TODO: This function needs to be called once every second
//     var intervalId = setInterval(
//         function updateTimer() {
//             if (detonationTimer === 0) {
//                 alert('EXTERMINATE!');
//                 document.body.innerHTML = '';
//             } else if (detonationTimer > 0) {
//                 document.getElementById('timer').innerHTML = detonationTimer;
//             }
//             detonationTimer--;
//         }, interval);
//     // TODO: When this function runs, it needs to
//     // cancel the interval/timeout for updateTimer()
//     function defuseTheBOM() {
//         clearInterval(intervalId);
//     }
//     // Don't modify anything below this line!
//     //
//     // This causes the defuseTheBOM() function to be called
//     // when the "defuser" button is clicked.
//     // We will learn about events in the DOM lessons
//     var defuser = document.getElementById('defuser');
//     defuser.addEventListener('click', defuseTheBOM);
// })();
// </script>
// </body>
</html>