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
//         console.log(newstr);
//         console.log(binary)
//      }
//      return parseInt(newstr , 2); 
// }

// console.log(BinaryReversal("213"));

//---------------------------------------------------------------------------------------//
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


// Have the function PalindromeTwo(str) take the str parameter  
//   being passed and return the string true if the parameter is
//   a palindrome, (the string is the same forward as it is     
//   backward) otherwise return the string false. The parameter 
//   entered may have punctuation and symbols but they should not
//   affect whether the string is in fact a palindrome.         
//   For example: "Anne, I vote more cars race Rome-to-Vienna"    
//   should return true

// function PalindromeTwo(str){

// }

// const ans = PalindromeTwo("Noel - sees Leon");
// console.log(ans);

//-----------------------------------------------------------------------------------------//

// Problem Statement                                            
//    Have the function DashInsertII(str) insert dashes ('-')     
//    between each two odd numbers and insert asterisks ('*')     
//    between each two even numbers in str.                       
//                                                                
//    For example: if str is 4546793 the output should be         
//    454*67-9-3. Don't count zero as an odd or even number. 


// function DashInsertII(number) {
//     let string = String(number);
//     let dashInsertTwo = new String("");
//     for(let i=0; i<string.length; i++){
//         if(i!==string.length-1) {
//             if(Number(string[i])%2!==0 && Number(string[i+1])%2!==0 && Number(string[i])>0 && Number(string[i+1])>0) dashInsertTwo += string[i] + "-";
//             else if(Number(string[i])%2===0 && Number(string[i+1])%2===0 && Number(string[i])>0 && Number(string[i+1])>0) dashInsertTwo += string[i] + "*";
//             else dashInsertTwo += string[i];

//         }
//         else if(i===string.length-1) dashInsertTwo += string[i];
//     }
//     return dashInsertTwo;
// }

// // KEEP THIS FUNCTION CALL HERE
// console.log(DashInsertII(DashInsertII(4546793)));

//------------------------------------------------------------------------------------------//

// function StringReduction(string) { 
//     let stringReduction = new String("");
//     let stringReplacements = {
//         "ab": "c",
//         "ac": "b",
//         "bc": "a",
//         "ca": "b",
//         "cb": "a"
//     };
//     let flag = false;
//     for(let i=0; i<string.length; i++){
//         if(i !== string.length-1){
//             if((string[i] + string[i+1]) in stringReplacements){
//                 flag = true;
//                 stringReduction += stringReplacements[string[i] + string[i+1]];
//                 i++;
//             }
//             else stringReduction += string[i];
//         }
//         else stringReduction += string[i];
//     }
//     if(flag === true) return StringReduction(stringReduction);
//     else return stringReduction.length;
// }

// // KEEP THIS FUNCTION CALL HERE
// console.log(StringReduction("abcabc"));

//-----------------------------------------------------------------------//

// Have the function FizzBuzz(num) take the num parameter being *
//  * passed and return all the numbers from 1 to num separated by *
//  * spaces but replace every number that is divisible by 3       *
//  * with the word "Fizz", replace every number that is divisible *
//  * by 5 with the word "Buzz", & every number that is divisible  *
//  * by both 3 and 5 with the word "FizzBuzz".                    *
//  * For example: if num is 16, the code should return the string *
//  * 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 *
//  * The input will be within the range 1 - 50.     

// function FizzBuzz(num){
//     let str = new String("");
//     for(let i = 1 ; i <= num ; i++){
//        if(i%3 === 0 && i%5 === 0) str += "FizzBuzz";
//        else if(i%3 === 0) str += "Fizz";
//        else if(i%5 === 0) str += "Buzz";
//        else str = i + " ";
//     }
//     return str.trim();
// }

// console.log(FizzBuzz(3));

//-------------------------------------------------------------------------//

// Have the function StringScramble(str1,str2) take both        * 
//  * parameters being passed and return the string true if a      *
//  * portion of str1 characters can be rearranged to match str2,  *
//  * otherwise return the string false.                           *
//  * For example: if str1 is "rkqodlw" and str2 is "world" the    *
//  * output should return true. Punctuation and symbols will not  *
//  * be entered with the parameters.   

// function StringScramble(str1,str2){
//     let arr1 = str1.split ("");
//     let arr2 = str2.split("");
//     for(let i=0 ; i <arr1.length ; i++){
//       for (let j =0 ; j < arr2.length ; j++){
//         if(arr1[i] === arr2[j]){
//              arr1.splice(i ,1);
//              arr2.splice(j,1);
//              i--;
//              break;
//         }
//       }
//     }
//     if(arr2.length === 0) return true;
//     else return false;
// }
// console.log(StringScramble("cdoer" , "coder"));

//---------------------------------------------------------------------------//

// number search
// function numbersearch(str){
//       let total = 0 ;
//     let lettercount = '';
//     for(let i = 0 ; i < str.length ; i++){
//         let char = str.charAt(i)
//         if(!isNaN(char) && char !== " "){
//             total += parseInt(char);
//         }
//         if(/[a-zA-Z]/.test(char)){
//             lettercount++;
//         }
//     }
//     let avg = Math.round(total / lettercount);
//     return avg;
// }
// const ans = numbersearch("Hello6 9World 2, Nic8e D7ay!");
// console.log(ans);

//------------------------------------------------------------------------------//

// take the str parameter being passed and return the string true if the parameter is a palindrome, 
// (the string is the same forward as it is backward) otherwise return the string false. 
// The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome.
// For example: "Anne, I vote more cars race Rome-to-Vienna" should return true. */

//  function PalindromeTwo(str) { 
//     let re = /[a-zA-Z]/;
//     let arr = [];
//     for(let i = 0 ; i < str.length; i++){
//         if(str.charAt(i).match(re)){
//             arr.push(str.charAt(i).toLowerCase());
//         }
//     }
//     let hold =arr.join();
//     arr = arr.reverse().join();
//     if(hold == arr){
//         return true ;
//     }else{
//         return false;
//     }
//  }

//  const ans = PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna");
//  console.log(ans);

// -----------------------------------------------------------------------------------------//

// simple mode function

// function simplemode(arr){
//     var mode = 0 ;
//     var count2 =0 ;
//     for(let i = 0 ; i < arr.length ; i++){
//         count = 0 ;
//         for (let j = 0 ; j < arr.length ; j++){
//             if(arr[i] == arr[j] && i !== j ){
//                 count++;
//             }
//             if(count> count2){
//                 mode = arr[i];
//                 count2 = count;
//                 count = 0 ;
//             }
//         }

//         }
//         if(count2 == 0){
//             return -1;
//     }
//     return mode;
// }

// const ans = simplemode([10, 4, 5, 2, 4]);
// console.log(ans);

//-------------------------------------------------------------------------------------------//

// function swp 2

// function swap2(str){
//       let re =  /[a-z]/;
//       let re2 = /[A-Z]/;
//       let re3 = /[0-9]/;
//       let arr = [];
//       for(let i =0; i <str.length ; i++){
//         if(str.charAt(i).match(re)){
//             arr.push(str.charAt(i).toUpperCase());
//         }else if(str.charAt(i).match(re2)){
//             arr.push(str.charAt(i).toLowerCase());
//         }else{
//             arr.push(str[i]);
//         }
//       }
//       for(let i=0 ; i<str.length ; i++){
//         if(str.charAt(i).match(re3)){
//             for(let j=i+1;j<arr.length ; j++){
//                 if(arr[j]== " "){
//                     break ;
//                 }else if(arr[j].match(re3)){
//                     let hold = arr[i];
//                     arr[i] = arr[j];
//                     arr[j] = hold;
//                 }
//             }
//         }
//       }
//       return arr.join("");
// }

// console.log(swap2("6Hello4 -8World, 7 yes3" ))

//-----------------------------------------------------------------------------------------//

//letter count 

// function LetterCountI(str) {
//     let arr = str.split(" ");
//     arr = arr.sort((a, b) => b.length - a.length);
//     for (let i = 0; i < arr.length; i++) {
//         let nwarr = [];

//         for (let j = 0; j < arr[i].length; j++) {
//             if (nwarr.indexOf(arr[i][j]) === -1) {
//                 nwarr.push(arr[i][j]);
//             } else {
//                 return arr[i];
//             }
//         }
//     }

//     return -1;
// }

// const ans = LetterCountI("no word");
// console.log(ans);


//------------------------------------------------------------------------------//

// counstruct the binary treee

// function binarytree(strArr) {
//     let parents = {};
//     let children = {};

//     for (let i = 0; i < strArr.length; i++) {
//         let pair = strArr[i].replace(/[()]/g, "").split(",");
//         let child = pair[0]
//         let parent = pair[1]
//         if (parents[parent]) {
//             parents[parent].push(child);
//         } else {
//             parents[parent] = [child];
//         }
//         if (parents[parent].length > 2) {
//             return false;
//         }
//         if (children[child]) {
//             return false;
//         } else {
//             children[child] = [parent];
//         }
//     }
//     return true;
// }

// console.log(binarytree(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]))
/////////////////////////////////////////////////////////////////////////////

// function permutation(people) {
//     let result = [];
//     if (people.length === 0) return [];
//     if (people.length === 1) return [people];
//     for (let i = 0; i < people.length; i++) {
//         const currentPeople = people[i];
//         const remainPeople = people.slice(0, i).concat(people.slice(i + 1));
//         const permutateRemain = permutation(remainPeople);
//         for (let j = 0; j < permutateRemain.length; j++) {
//             let res = [currentPeople].concat(permutateRemain[j]);
//             result.push(res);
//         }
//     }
//     return result;
// }
// function checkRelation(relation, conditions) {

//     for (let i = 0; i < conditions.length; i++) {
//         let [person1, condition, person2] = conditions[i].split('');
//         if (condition === '<')
//             [person1, person2] = [person2, person1];
//         let ind1 = relation.indexOf(person1);
//         let ind2 = relation.indexOf(person2);
//         if (ind1 <= ind2) return false;
//     }
//     return true;
// }
// function lineOrdering(strArr) {
//     // let people = Array.from(new Set(strArr.join(',').match(/[A-Z]+/g)));
//     let people = [];
//     strArr.map(element => {
//         let [personA, condition, personB] = element.split('');
//         people.push(personA, personB);
//     });
//     people = [...new Set(people)];
//     let permutationPeople = permutation([...people]);
//     let truePair = [];
//     permutationPeople.forEach(element => {
//         const isValid = checkRelation(element, strArr)
//         if (isValid) truePair.push(element);
//     });
//     return truePair.length;
// }
//   console.log(lineOrdering(["J>B", "B<S", "D>J"]));
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
//         for (var val of temp_set) {f(primecounter < num){
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
//     if (left > index) {urrentnumber
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

//---------------------------------------------------------------------------------------//

//prime movers                                     

// function isprime(number){
//     if(number <= 1){
//         return  false;
//     }
//     for(let i = 2 ; i <= Math.sqrt(number);i++){
//         if(number % i ===0){
//             return false;
//         }
//     }
//     return true;
// }

// function primemover(num){
//   let primecounter = 0 ;
//   let currentnumber = 2;
//   while (primecounter < num){
//     if(isprime(currentnumber)){
//         primecounter++;
//     }if(primecounter<num){
//         currentnumber++;
//     }
//   }  
//   return currentnumber;
//   } 
//   console.log(primemover(100));

//---------------------------------------------------------------------------------------//

// Have the function ArithGeo(arr) take the array of numbers    *
//  * stored in arr and return the string "Arithmetic" if the      *
//  * sequence follows an arithmetic pattern or return "Geometric" *
//  * if it follows a geometric pattern. If the sequence doesn't   *
//  * follow either pattern return -1. An arithmetic sequence is   *
//  * one where the difference between each of the numbers is      *
//  * consistent, where as in a geometric sequence, each term after*
//  * the first is multiplied by some constant or common ratio.    *
//  * Arithmetic example: [2, 4, 6, 8] and                         *
//  * Geometric example: [2, 6, 18, 54]. Negative numbers may be   *
//  * entered as parameters, 0 will not be entered, and no array   *
//  * will contain all the same elements.  

// function ArithGeo(arr){
//    let arith = arr[1]-arr[0];
//    let geo = arr[1]/arr[2];
//    for (let i = 0; i<= arr.length ; i++){
//       if(arr[i+1]-arr[i]=== arith){
//          return "arithmetic";
//       }if(arr[i+1]/arr[i]=== geo){
//          return "geometric";
//       }else{
//          return -1;
//       }
//    }
// }
// console.log(ArithGeo([5,10,15]))

//------------------------------------------------------------//

// Have the function AdditivePersistence(num) take the num      *
//  * parameter being passed which will always be a positive       *
//  * integer and return its additive persistence which is the     *
//  * number of times you must add the digits in num until you     *
//  * reach a single digit. For example: if num is 2718 then your  *
//  * program should return 2                                      *
//  * because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.  *

// function AdditivePersistence(num){
//    num = String(num);
//    if(num.length ===1){
//       return 0;
//    }
//    let count = 0 ;
//    while(num.length !== 1){
//       let sum = 0 ;
//       for(let i=0 ; i<num.length ; i++){
//          sum+=Number(num[i]);
//       } 
//       count ++;
//       sum =  String(sum)
//       if(sum.length === 1){
//          return count;
//       }
//       num = sum ;
//    }
// }

// console.log(AdditivePersistence(19))

function MissingDigit(str) {
   // Split the equation into three parts: operand1, operand2, result
   const parts = str.split(" ");
 
   // Check which part contains 'x'
   let xIndex;
   if (parts[0].includes("x")) {
     xIndex = 0;
   } else if (parts[2].includes("x")) {
     xIndex = 2;
   } else {
     xIndex = 4;
   }
 
   // Evaluate the equation with x replaced by 0, 1, ..., 9
   for (let digit = 0; digit < 10; digit++) {
     parts[xIndex] = digit.toString();
     const evaluatedResult = calculate(parts);
 
     // Check if the evaluated result matches the expected result
     if (evaluatedResult === parseInt(parts[4])) {
       return digit;
     }
   }
 }
 
 // Helper function to perform safe evaluation
 function calculate(parts) {
   const [operand1, operator, operand2] = parts;
 
   switch (operator) {
     case "+":
       return parseInt(operand1) + parseInt(operand2);
     case "-":
       return parseInt(operand1) - parseInt(operand2);
     case "*":
       return parseInt(operand1) * parseInt(operand2);
     case "/":
       return parseInt(operand1) / parseInt(operand2);
     default:
       throw new Error("Invalid operator");
   }
 }
 
 // Example usage:
 const result = MissingDigit("3x + 12 = 46");
 console.log(result);
 
 