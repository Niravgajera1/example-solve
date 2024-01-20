//Have the function ChangingSequence(arr) take the array of numbers stored in arr and
//return the index at which the numbers stop increasing and begin decreasing or stop decreasing
//and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should
//return 3 because 6 is the last point in the array where the numbers were increasing and the next
//number begins a decreasing sequence. The array will contain at least 3 numbers and it may
//contains only a single sequence, increasing or decreasing. If there is only a single sequence in
//the array, then your program should return -1. Indexing should begin with 0.

// function ChangingSequence(arr){
//  var type = arr[0] - arr[1] > 0 ? "des" : "asc" ;
//  for(let i= 0 ; i<arr.length-1; i++){
//  let typ = arr[i] - arr[i+1] > 0 ? "des" : "asc" ;
//  if(typ == type){
//     continue;
//  }else{
//     return i;
//  }
//  }
//  return -1;
// }
// const ans = ChangingSequence([-4, -2, 9, 10]);
// console.log(ans);


// --------------------------------------------------------------------------------------------------------- //


// Have the function OverlappingRanges(arr) take the array of numbers stored in arr which
// will contain 5 positive integers, the first two representing a range of numbers (a to b), the next 2
// also representing another range of integers (c to d), and a final 5th element (x) which will also
// be a positive integer, and return the string true if both sets of ranges overlap by at least x
// numbers. For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true.
// The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5,
// 6. The last element in the array is 3, and there are 3 numbers that overlap between both ranges:
// 4, 5, and 6. If both ranges do not overlap by at least x numbers, then your program should return
// the string false


// function OverlappingRanges(arr) {
//     var target = arr.pop();
//     var MaxLowerBound = Math.max(arr[0], arr[2]);
//     var MinUpperBound = Math.min(arr[1], arr[3]);
//     var range = MinUpperBound - MaxLowerBound + 1;
//     return range >= target ? 'true' : 'false';
// }

//-------------------------------------------------------------------------------------------------------//


// Have the function Superincreasing(arr) take the array of numbers stored in arr and
// determine if the array forms a superincreasing sequence where each element in the array is
// greater than the sum of all previous elements. The array will only consist of positive integers.
// For example: if arr is [1, 3, 6, 13, 54] then your program should return the string "true" because
// it forms a superincreasing sequence. If a superincreasing sequence isn't formed, then your
// program should return the string "false"


// function Superincreasing(arr){
//     sum = 0 ;
//     for(let i =0 ; i < arr.length ; i++){
//         if(arr[i]>sum){
//             sum += arr[i];
//             continue;
//         }
//         return false;
//     }
//     return true;
// }
// const ans = Superincreasing([1,2,3,4]);
// console.log(ans);

// --------------------------------------------------------------------------------------------------//

// Have the function HammingDistance(strArr) take the array of strings stored in strArr,
// which will only contain two strings of equal length and return the Hamming distance betweenthem. 
// The Hamming distance is the number of positions where the corresponding characters
// are different. For example: if strArr is ["coder", "codec"] then your program should return 1.
// The string will always be of equal length and will only contain lowercase characters from the
// alphabet and numbers.

// function HammingDistance(starArr){
//     let count =0;
//     for(let i =0 ; i<starArr[0].length ; i++){
//         if(starArr[0][i] !== starArr[1][0]){
//             count ++;
//         }
//     }
//     return count;
// }
// const ans = HammingDistance(["nirav", "nirav"]);
// console.log(ans);

//-----------------------------------------------------------------//

// Have the function BitwiseOne(strArr) take the array of strings stored in strArr, which will
// only contain two strings of equal length that represent binary numbers, and return a final binary
// string that performed the bitwise OR operation on both strings. A bitwise OR operation places a
// 0 in the new string where there are zeroes in both binary strings, otherwise it places a 1 in that
// spot. For example: if strArr is ["1001", "0100"] then your program should return the string
// "1101"

// function BitwiseOne(strArr){
//     let result = "";
//     for (let i = 0 ; i < strArr[0].length ; i++){
//         result += parseInt(strArr[0][i]) |parseInt( strArr[1][i]).toString();
       
//     }
//     return result;
// }

// const ans = BitwiseOne(["00011", "01010"]);
// console.log(ans);

//--------------------------------------------------------------------//

// Have the function OtherProducts(arr) take the array of numbers stored in arr and return a
// new list of the products of all the other numbers in the array for each element. 
//For example:if arr is [1, 2, 3, 4, 5] then the new array, where each location in the new array is the product of
// all other elements, is [120, 60, 40, 30, 24]. The following calculations were performed to get this
// answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. You should generate this new
// array and then return the numbers as a string joined by a hyphen: 120-60-40-30-24. The array
// will contain at most 10 elements and at least 1 element of only positive integers.

// function OtherProducts(arr){
//     let result = [];
//     for(let i=0 ; i < arr.length ; i++){
//         let product = 1;
//     for(let j=0 ; j< arr.length ; j++){
//         if( i !== j){
//             product *= arr[j];
//         }
//     }
//      result.push(product);
//     }
//     return result.join("_");
// }
// const ans = OtherProducts([1,4,3]);
// console.log(ans);

//-------------------------------------------------------------------------------------//

// Have the function ArrayMatching(strArr) read the array of strings stored in strArr which
// will contain only two elements, both of which will represent an array of positive integers. For
// example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in the input represent two
// integer arrays, and your goal for this challenge is to add the elements in corresponding
// locations from both arrays. For the example input, your program should do the following
// additions: [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. Your program should
// finally return this resulting array in a string format with each element separated by a hyphen: 6-
// 4-13-17.If the two arrays do not have the same amount of elements, then simply append the remaining
// elements onto the new array (example shown below). Both arrays will be in the format: [e1, e2,
// e3, ...] where at least one element will exist in each array.

// function ArrayMatching(strArr){
//     let arr1 = strArr[0].match(/\d+/g).map(Number);
//     let arr2 = strArr[1].match(/\d+/g).map(Number);
//     let length  = Math.max(arr1.length , arr2.length);
//     const result = [];
//     for(let i=0 ; i< length ; i++){
//         let sum = (arr1[i] || 0) +(arr2[i] || 0 ) 
       
//          result.push(sum);
//     }
//     return result.join('-')
// }

// console.log(ArrayMatching(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]));

//---------------------------------------------------------------------------------------//

// Have the function BinaryReversal(str) take the str parameter being passed, which will be
// a positive integer, take its binary representation (padded to the nearest N * 8 bits), reverse that
// string of bits, and then finally return the new reversed string in decimal form. For example:
// if str is "47" then the binary version of this integer is 101111 but we pad it to be 00101111.
// Your program should reverse this binary string which then becomes: 11110100 and then finally
// return the decimal version of this string, which is 244.

// function BinaryReversal(str){
//     let binary = parseInt(str).toString(2);
//     let size =  Math.ceil(binary.length/8) * 8 ;
//     let newstr = "";
//     while(binary.length<size){
//         binary = '0' + binary;
//     }
//      for(let i = 0 ; i <binary.length ; i++){
//         newstr = binary[i] + newstr ; 
        
//      }
//      return parseInt(newstr , 2); 
// }

// console.log(BinaryReversal("213"));

//---------------------------------------------------------------------------------------//


// hello word add featue one for git problem 

// hello word add featue one for git 

