// function ArrayMinJumps(arr) {
//   const end = arr.length - 1;
//   let maxReach = 0;
//   let steps = 0;
//   let currentReach = 0;

//   for (let i = 0; i < end; i++) {
//     maxReach = Math.max(maxReach, i + arr[i]);

//     if (i === currentReach) {
//       currentReach = maxReach;
//       steps++;
//     }

//     // If we reach the end, break the loop
//     if (currentReach >= end) {
//       break;
//     }
//   }

//   return steps;
// }

// // Example usage:
// const arr = [1, 3, 6, 8, 2, 7, 1, 2, 1, 2, 6, 1, 2, 1, 2]
// const result = ArrayMinJumps(arr);
// console.log(result); // Output: 3

//----------------------------------------------------------------------------------//

// array rotation 

// function Arrayrotion(arr){
//   let statrt = arr[0];
//   let newarr = [];
//   for(let i =statrt ; i < arr.length ; i++ ){
//     newarr.push(arr[i]);
//   }
//   for(let i=0 ; i < statrt ; i++){
//     newarr.push(arr[i]);
//   }
//    return newarr.join("");
// }
//   console.log(Arrayrotion( [3,2,1,6] ));

//-------------------------------------------------------------------------------------//

// function BracketCombinations(num) {
//   if (num === 0) {
//     return 1; // For zero pairs of parentheses, there's only one valid combination (empty string).
//   }

//   const dp = new Array(num + 1).fill(0);
//   dp[0] = 1; // Base case

//   for (let i = 1; i <= num; i++) {
//     for (let j = 0; j < i; j++) {
//       dp[i] += dp[j] * dp[i - j - 1];
//     }
//   }

//   return dp[num];
// }

// // Example usage:
// const result = BracketCombinations(3);
// console.log(result); // Output: 5
 //------------------------------------------------------------//

 // closest enemy

//  function makemove(arr){
//   let count = 0 ;
//   for(let i=0 ; i <arr.length ; i++){
//     count++;
//     if(arr[i]===2){
//       break;
//     }if(arr[i]==arr.length-1 && arr[i] !== 2){
//       count =0 ;
//     }
//   }
//    return count;
//  }

//  function closeenemy(arr){
//     let startind = arr.indexOf(1);
//     let leftarr = [];
//     let rigth = [] ;

//     for(let i =startind-1 ; i>=0 ; i-- ){
//         leftarr.push(arr[i]);
//     }
//     for(let i=startind+1 ; i < arr.length-1 ; i++){
//       rigth.push(arr[i]);
//     }
//     let leftenemy = makemove(leftarr);
//     let rightenemy = makemove(rigth);

//     return (leftenemy>rightenemy) ? leftenemy : rightenemy ;

//  }

//  console.log(closeenemy([1, 0, 0, 0, 2, 2, 2]))

//--------------------------------------------------------------------------------------------//

// function distictcount(arr){
//   count = 0 ;
//   for(let i=0 ; i <arr.length ; i++){
//     let isbackward =  false ;
//     for(let b=0 ; b < i ; b++){
//       if(arr[i]===arr[b]){
//         isbackward=true;
//         break;  
//       }
//     }
//     if(isbackward){
//       continue;
//     }
//     for(let j=i+1 ; j<arr.length ; j++){
//       if(arr[j]=== arr[i]){
//         count++;
//       }
//     }
//   }
//   return count;
// }

// console.log(distictcount([0,1,2,2,3,4,5,5,5]))
//---------------------------------------------------------------------------------------------//

