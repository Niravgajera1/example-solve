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
//         if(starArr[0][i] !== starArr[1][i]){
//             count ++;
//         }
//     }
//     return count;
// }
// const ans = HammingDistance(["nirav","nirav"]);
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
//         result += parseInt(strArr[0][i]) | parseInt( strArr[1][i]).toString();

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

//----------------------------------------------------------------------------------//

// Have the function NextPalindrome(num) take the num parameter being passed and return
// the next largest palindromic number. The input can be any positive integer. For example:
// if num is 24, then your program should return 33 because that is the next largest number that is
// a palindrome.


// function NextPalindrome(num){
//     num++
//     while(!isplindrome(num)){
//         num++;
//     }
//     return num;
// }

// function isplindrome(num){
//     let numstr = num.toString();
//     return numstr === numstr.split('').reverse().join('');

// }

// console.log(NextPalindrome(180))

//--------------------------------------------------------------------------------------//

// Have the function LargestPair(num) take the num parameter being passed and determine
// the largest double digit number within the whole number. For example: if num is 4759472 then
// your program should return 94 because that is the largest double digit number. The input will
// always contain at least two positive digits.

// function LargestPair(num){
//     let strarr = num.toString();
//     let maxpair = 0;
//     for(let i= 0 ; i < strarr.length - 1 ; i++){
//         const currentpair = parseInt(strarr.substr(i,2));
//         maxpair = Math.max(currentpair , maxpair);
//     }

//     return maxpair
// }
// console.log(LargestPair(453857))

//=-----------------------------------------------------------------------------------------//

// Have the function NonrepeatingCharacter(str) take the str parameter being passed,
// which will contain only alphabetic characters and spaces, and return the first non-repeating
// character. For example: if str is "agettkgaeee" then your program should return k. The string
// will always contain at least one character and there will always be at least one non-repeating
// character.

// function NonrepeatingCharacter(str) {
//     let len = str.length;
//     let countObj = {}
//     for (let i = 0; i < len; i++) {
//         if (countObj[str[i]]) {
//             countObj[str[i]]++;

//         }
//         else {
//             countObj[str[i]] = 1;
//         }
//     }
//     for (let j = 0; j < len; j++) {
//         if (countObj[str[j]] === 1) 
//         return str[j];
//     }
// }
// console.log(NonrepeatingCharacter("agettkgaeee"))


//------------------------------------------------------------------------------------//


// Have the function LongestIncreasingSequence(arr) take the array of positive integers
// stored in arr and return the length of the longest increasing subsequence (LIS). A LIS is a
// subset of the original list where the numbers are in sorted order, from lowest to highest, and
// are in increasing order. The sequence does not need to be contiguous or unique, and there can
// be several different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a possible LIS is [3,
// 5, 6], and another is [1, 6]. For this input, your program should return 3 because that is the
// length of the longest increasing subsequence.

// function LongestIncreasingSequence(arr){
// }

//------------------------------------------------------------------------------------------//

// Have the function TwoSum(arr) take the array of integers stored in arr, and determine if any
// two numbers (excluding the first element) in the array can sum up to the first element in the
// array. For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to
// the number 7: [5, 2] and [-4, 11]. Your program should return all pairs, with the numbers
// separated by a comma, in the order the first number appears in the array. Pairs should be
// separated by a space. So for the example above, your program would return: 5,2 -4,11
// If there are no two numbers that sum to the first element in the array, return -1

// function Twosum(arr){
//     let target = arr[0];
//     let visitedn  = {};
//     let pair = [];
//     for ( let i = 1 ; i <arr.length ; i++){
//         let complete = target - arr[i];
//         if(visitedn[complete] !== undefined){
//             pair.push(`${complete},${arr[i]}`);
//         }else{
//             visitedn[arr[i]] = true;
//         }
//     }
//     if(pair.length >0){
//         return pair.join(' ');
//     }else{
//         return -1;
//     }
// }

// console.log(Twosum([17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7]))

//-------------------------------------------------------------------------------//

// Have the function BitwiseTwo(strArr) take the array of strings stored in strArr, which will
// only contain two strings of equal length that represent binary numbers, and return a final binary
// string that performed the bitwise AND operation on both strings. A bitwise AND operation
// places a 1 in the new string where there is a 1 in both locations in the binary strings, otherwise
// it places a 0 in that spot. For example: if strArr is ["10111", "01101"] then your program
// should return the string "00101"

// function BitwiseTwo(strArr){
//     let result = '';
//     let arr1 = strArr[0];
//     let arr2 = strArr[1];
//     for(let i =0 ; i < arr1.length ; i++){
//         if((arr1[i]===1) && arr2[i] === 1){
//             result += '1';
//             continue;
//         }else{
//             result += '0'
//             continue;
//         }
//     }
//     return result;
// }

// console.log(BitwiseTwo(["100", "000"]))

//-----------------------------------------------------------------------------------------//

// Have the function PowerSetCount(arr) take the array of integers stored in arr, and return
// the length of the power set (the number of all possible sets) that can be generated. For
// example: if arr is [1, 2, 3], then the following sets form the power set:
// []
// [1]
// [2]
// [3]
// [1, 2]
// [1, 3]
// [2, 3]
// [1, 2, 3]
// You can see above all possible sets, along with the empty set, are generated. Therefore, for this
// input, your program should return 8.

// function PowerSetCount(arr){
//     return Math.pow(2,arr.length);
// }
// console.log(PowerSetCount([2,4,6,8,]));
//----------------------------------------------------------------------------------------/

// Have the function ProductDigits(num) take the num parameter being passed which will be a
// positive integer, and determine the least amount of digits you need to multiply to produce it. For
// example: if num is 24 then you can multiply 8 by 3 which produces 24, so your program should
// return 2 because there is a total of only 2 digits that are needed. Another example: if num is 90,
// you can multiply 10 * 9, so in this case your program should output 3 because you cannot reach
// 90 without using a total of 3 digits in your multiplication.

// function ProductDigits(num) {
//     let minDigits = Infinity;

//     for (let i = 1; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         const factor1 = i;
//         const factor2 = num / i;
//         const currentDigits = Math.max(factor1.toString().length, factor2.toString().length);
//         minDigits = Math.min(minDigits, currentDigits);
//       }
//     }

//     return minDigits;
//   }

//   // Example usage
//   console.log(ProductDigits(24)); // Output: 2
//   console.log(ProductDigits(90)); // Output: 3

//---------------------------------------------------------------------------------------//

// Have the function PalindromeCreator(str) take the str parameter being passed and
// determine if it is possible to create a palindromic string of minimum length 3 characters by
// removing 1 or 2 characters. For example: if str is "abjchba" then you can remove the
// characters jc to produce "abhba" which is a palindrome. For this example your program should
// return the two characters that were removed with no delimiter and in the order they appear in
// the string, so jc. If 1 or 2 characters cannot be removed to produce a palindrome, then return
// the string not possible. If the input string is already a palindrome, your program should return
// the string palindrome.

// function PalindromeCreator(str){

//     function ispalindrome(s){
//         return s === s.split('').reverse().join('');
//     }
//        if(ispalindrome(str)){
//         return "Palindrom"
//     }
//     for(let i= 0 ; i <str.length ; i++){
//         for (let j = i + 1 ; j < str.length ; j++){
//             const final = str.slice(0 , i) + str.slice(i+1 , j ) + str.slice(j + 1);
// 
//             if(ispalindrome(final)){
//                 return str[i] + str[j];
//             }
//         }
//     }
//     for(let i=0 ; i < str.length -1 ; i++){
//         const final = str.slice(0 , i) + str.slice(i + 2);
//         if(ispalindrome(final)){
//             return str[i] + str[i + 1];
//         }
//     }
//     return "not possible"
//  }
//     const ans = PalindromeCreator("abjchba");
//     console.log(ans); 
// Output: "jc"
// //   console.log(PalindromeCreator("racecar")); // Output: "palindrome"
// //   console.log(PalindromeCreator("abcd")); // Output: "not possible"

//----------------------------------------------------------------------------------------//

// Have the function ThreeSum(arr) take the array of integers stored in arr, and determine if
// any three distinct numbers (excluding the first element) in the array can sum up to the first
// element in the array. For example: if arr is [8, 2, 1, 4, 10, 5, -1, -1] then there are actually three
// sets of triplets that sum to the number 8: [2, 1, 5], [4, 5, -1] and [10, -1, -1]. Your program should
// return the string true if 3 distinct elements sum to the first element, otherwise your program
// should return the string false. The input array will always contain at least 4 elements.

// function ThreeSum(arr) {
//     let len = arr.length;
//     let target = arr[0];
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             for (let k = i + 2; k < len; k++) {
//                 if (target === arr[i] + arr[j] + arr[k]);
//                 return true;
//             }
//         }
//         return false;
//     }
// }
// console.log(ThreeSum([10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2]));

//---------------------------------------------------------------------------------------//

// function ArrayJumping(arr) {
//     var ht = {};
//     var max_index = arr.indexOf(Math.max(...arr));
//     var L = arr.length;
//     for (var i = 0; i < L; i++) {
//         ht[i] = [left(L, i, arr[i]), right(L, i, arr[i])];
//     }
//     if (ht[max_index].includes(max_index)) {
//         return 1;
//     }
//     var travel_set = new Set(ht[max_index]);
//     for (var step = 2; step <= L; step++) {
//         var temp_set = new Set(travel_set);
//         for (var val of temp_set) {
//             travel_set.add(ht[val][0]);
//             travel_set.add(ht[val][1]);
//         }
//         if (travel_set.has(max_index)) {
//             return step;
//         }
//     }
//     return -1;
// }

// function left(length, index, number) {
//     var left = number % length;
//     if (left > index) {
//         left = length + index - left;
//     } else {
//         left = index - left;
//     }
//     return left;
// }

// function right(length, index, number) {
//     var right = number % length;
//     if (right > length - index - 1) {
//         right = right + index - length;
//     } else {
//         right = right + index;
//     }
//     return right;
// }

//-----------------------------------------------------------------------//

// function SwitchSort(arr) {
//     let swap = 0;
//     let visited = new Array(arr.length).fill(false);
//     for (let i = 0; i < arr.length; i++) {
//       let j = i;
//       let counter = 0;
//       while (!visited[j]) {
//         visited[j] = true;
//         j = arr[j] - 1;
//         counter = counter + 1;
//       }
//       if (counter !== 0) {
//         swap = swap + (counter - 1);
//       }
//     }
//     return swap;
//   }
  
  


