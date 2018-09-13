"use strict";
// function isPrime(int n) {
//     for(let i=2;i<=100;i--){
//         if(i%input&&i%1)
//         {console.log("it is prime")}
//         else{
//             return input
//         }
//
//
//     }
// }

// console.log(isPrime);
// const isPrime=num=>{
//  if(num == 1)return false;
//  if(num == 2) return true;
//  for(let i=2;i<num;i++){
//      if(num%i==0)
//          return false;
//  }
// return true};
// console.log(isPrime(7));


// const getFib=n=>{
//     let fibs=[1,1];
//     for(let i=1;i<n;i++){
//         fibs.push(fibs[i]+fibs[i-1])
//     }return fibs
// };
// console.log(getFib(99));



// const recFib=n=>{
//     if(n===0)return 0;
//     else if (n==1) return 1;
//     else return recFib (n-1)+recFib(n-2)
// };
// console.log(recFib(99));
const getFib=n=>{
    letfib=[]
    if(n===0) fibs.push(0)
    else if(n==1)fibs.push(1)
    else fibs.push(getfibs[n-1]+getFibs[n-2])
    return fibs;
};