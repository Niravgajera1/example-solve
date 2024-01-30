//-----------------------------reverse String

/*
function revString(str) {
    // by using .reverse()
    return str.split("").reverse().join("");

    // by using for loop
    let revStr = "";

    for(let i=(str.length-1); i >= 0; i--){
        revStr += str[i];
    }

    return revStr;
}
*/

// console.log(revString("test"));

//------------------------------Palidrome Check

/*
function palidromeCheck(str){
    return str === str.split("").reverse().join("");
}
*/

// console.log(palidromeCheck("tet")); //true
// console.log(palidromeCheck("tes")); //false

// -----------------------FizzBuzz


// for (let i = 1; i <= 100; i++) {
//   switch (true) {
//     case (i%3 === 0 && i%5 ===0):
//         console.log("FizzBuzz")
//         break;
//     case (i%3 === 0):
//         console.log("Fizz")
//         break;
//     case (i%5 ===0):
//         console.log("Buzz")
//         break;

//     default:
//         console.log(i)
//         break;
tt//   }
// }


// -------------------------------Find Missing number from array

// let arr = [0,1,3,4,5]; // missing 2
// let arr2 = [0,1,2,3,4,6]; // missing 5

// function missing(arr) {
//     let start = arr[0];

//     for (let i = start; i < (arr.length-1); i++) {
//         if(start !== i){
//             missing = i;
//         }
//     }
//     return missing;
// }


//  console.log(missing(arr));
//console.log(missing(arr2));

//-----------------------Rotate an array by k steps

/*
function rota
console.log("Welcome to Programiz!");teArray(arr, steps) {
  for (let i = 1; i <= steps; i++) {
    let len = arr.length;
    // ading the Element
    arr.splice(0, 0, arr[len-1]);

    // after adding the element length of array increase by 1 so indx+1
    arr.splice((len), 1);
  }

  return arr;
}

*/

// console.log(rotateArray([1, 2, 3, 4, 5], 1));
// console.log(rotateArray([1, 2, 3, 4, 5], 2));
// console.log(rotateArray([1, 2, 3, 4, 5], 3));
// console.log(rotateArray([1, 2, 3, 4, 5], 4));
// console.log(rotateArray([1, 2, 3, 4, 5], 5));

// --------------------Hard Questions-------------------

//---------------------------------- implementing the promise class
/*
function leetPromise() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum > 0.5) {
        resolve(`Promise Resolved`);
      } else {
        reject(`Promise Rejected`);
      }
    }, 3000);
  });

  return promise1
    .then((res) => {
      console.log(res);
      return "Chained Success";
    })
    .then((chaionRes) => console.log(chaionRes))
    .catch((err) => console.log(err));
}
*/

// leetPromise();

//------------------- find max sum array sum

// function maxSubArraySum(arr) {
//   let current_sum = 0;
//   let max_sum = Number.NEGATIVE_INFINITY;

//   let startIdx = 0;
//   let endIdx = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > current_sum + arr[i]) {
//       // Start a new subarray
//       current_sum = arr[i];
//       startIdx = i;
//     } else {
//       // Extend the current subarray
//       current_sum = current_sum + arr[i];
//     }

//     if (current_sum > max_sum) {
//       // Update the maximum subarray sum and its indices
//       max_sum = current_sum;
//       endIdx = i;
//     }
//   }

//   let subArr = arr.slice(startIdx, endIdx + 1);
//   console.log("Maximum Subarray:", subArr);
//   console.log("Maximum Subarray Sum:", max_sum);
// }

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// maxSubArraySum(nums);

// Bracket Macther

// function bracketMatcher(str) {
//   const stack = [];

//   for(let i=0; i < str.length; i++){
//     if(str[i] == "("){
//       stack.push(str[i]);
//     }
//     else if(str[i] == ")"){
//       if(stack.length == 0){
//         return 0;
//       }
//       else{
//         stack.pop();
//       }
//     }
//   }

//   return stack.length == 0 ? 1 : 0;
// }

// console.log(bracketMatcher("((coder)(byte))"))
// console.log(bracketMatcher("(co(der))b(yte"))

// First Factorial

// function FirstFactorial(num) {
//   if(num == 0 || num == 1) return 1;

//   return num*FirstFactorial(num-1);
// }

// console.log(FirstFactorial(4))
// console.log(FirstFactorial(8))

// Run Length
// function runLength(str) {
//   let result = "";
//   let count = 1;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == str[i + 1]) {
//       count++;
//     } else {
//       result += count + str[i];
//       count = 1;
//     }
//   }
//   return result;
// }

// console.log(runLength("aabbcde"));
// console.log(runLength("wwwbbbw"));

// String Scramble

// function strScramble(str1,str2) {

//   for(let i=0; i<str2.length ; i++){
//     let char = str2[i];

//     let index = str1.indexOf(char);

//     if(index == -1){
//       return false;
//     }

//     str1 = str1.substring(0,index) + str1.substring(index+1);
//   }
//   return true;
// }

// console.log(strScramble("cdoer", "coder"));//true
// console.log(strScramble("h3llko", "hello"));//false
// console.log(strScramble("h311ko", "hello"));//false

//Array Addition

// function arrayAddition(arr) {

//   let target = arr.sort((a,b) => a-b).pop();

//   return isContains(arr,target);

//   function isContains(arr,target){
//     if(arr.length === 0){
//       return target === 0;
//     }

//     let head = arr[0];
//     let tail = arr.slice(1);

//     return isContains(tail,target-head) || isContains(tail,target);
//   }
// }

// console.log(arrayAddition([5,7,16,1,2]));
// console.log(arrayAddition([3,5,-1,8,12]));

// Number Search

// function numSearch(str) {

//   let total = 0;
//   let letterCount = 0;

//   for(let i=0 ; i<str.length; i++){
//     let char = str.charAt(i);

//     if(!isNaN(char) && char != " "){
//       total += parseInt(char)
//     }

//     if(/[a-zA-Z]/.test(char)){
//       letterCount++;
//     }
//   }
//     let avg = total / letterCount;

//     return Math.round(avg)
// }

// console.log(numSearch("H3ello9-9"));
// console.log(numSearch("One NUmber*1*"));

// Swap II

// function swapNum(str){
//   str = str.replace(/([a-z])|(A-Z)/g, function(match,p1,p2){
//     if(p1){
//       return p1.toUpperCase();
//     }
//     else{
//       return p2.toLowerCase();
//     }
//   });

//   str = str.replace(/\d+[a-zA-Z]+\d+/g, function(match){
//     let firstNum = match.match(/\d+/)[0];
//     let secondNum = match.match(/\d+$/)[0];
//     let letters = match.match(/[a-zA-Z]+/)[0];

//     return secondNum+letters+firstNum;
//   });

//   return str;
// }

// console.log(swapNum("heLLo -5LOL6"));

// function SimpleMode(arr) {
//   const count = {};

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] in count ? count[arr[i]]++ : (count[arr[i]] = 1);
//   }

//   let maxCount = 0;
//   let modes = [];

//   for(const num in count){
//     if(count[num] > maxCount){
//       maxCount = count[num];
//       modes - [num];
//     }
//     else if(count[num] === maxCount){
//       modes.push(num)
//     }
//   }

//   return (maxCount > 1) ? modes[0] : -1;
// }

// console.log(SimpleMode([5,5,2,2,1]));
// console.log(SimpleMode([3,4,1,6,10]));

// function countingMin(str){
//   const[startTime,endTime] = str.split("-");

//   const startMin = getMinutesFromTime(startTime)
//   const endMin = getMinutesFromTime(endTime)

//   const timeDiff = (endMin - startMin + 1440) % 1440;

//   return timeDiff;
// }

// function getMinutesFromTime(timeStr){
//   const[hourStr,minStr] = timeStr.slice(0,-2).split(":");

//   const hour = parseInt(hourStr)
//   const minutes = parseInt(minStr)

//   const isPm = timeStr.slice(-2) === "pm";
//   const totalMinutes = (hour*60 + minutes);

//   return isPm ? totalMinutes + 720 : totalMinutes;

// }

// console.log(countingMin("12:30pm-12:00am"));
// console.log(countingMin("1:23am-1:08am"));

// function LetterChange(str) {

//   let charArr = str.split("");

//   for(let i=0; i < charArr.length; i++){

//     if(charArr[i].match(/[a-z]/)){

//       if(charArr[i] == 'z'){
//         charArr[i] = 'A';
//         continue;
//       }

//       charArr[i] = String.fromCharCode(charArr[i].charCodeAt(0) + 1);

//       if(charArr[i].match(/[aeiou]/gi)){
//         charArr[i] = charArr[i].toUpperCase();
//       }
//     }
//   }

//   return charArr.join('');
// }

// console.log(LetterChange("hello*3*"));

// function letterCount(str) {
//   const words = str.split("");

//   for (let i = 0; i < words.length; i++) {
//     let count = 0;
//     const counts = {};

//     for (let j = 0; j < words[i].length; j++) {
//       (letters[i] in counts ) ? counts[letters[i]]++ : counts[letters[i]] = 1;

//     }

//   }

//   console.log(counts);
// }

// letterCount("Hello this is a string")

// Given an array of integers, implement a function to find the maximum product of any three integers.

// function maxProductOfThree(nums) {
//   nums.sort((a, b) => a - b);

//   const product1 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
//   const product2 = nums[0] * nums[1] * nums[nums.length - 1];

//   return Math.max(product1, product2);
// }

// const inputArray = [1, -2, 3, 4, -5];
// const result = maxProductOfThree(inputArray);
// console.log(result);

// Create a function that takes two strings as input and determines if one is an anagram of the other.
// function solveForX(equation) {
//   let xIndex = equation.indexOf("x");

//   let xprefix = equation[xIndex - 1];
//   let xpostflix = equation[xIndex + 1];

//   let subArr = equation.split(/\s+/);
//   let operator = subArr[1];
//   let num1 = subArr[0];
//   let num2 = subArr[2];
//   let ans = subArr[subArr.length - 1];

//   if (xprefix != null && xpostflix != null) {
//     let xVal = 0;

//     switch (operator != null) {
//       case operator == "+":
//         xVal = ans - num2;
//         break;
//       case operator == "-":
//         xVal = ans + num2;
//         break;
//       case operator == "*":
//         xVal = ans / num2;
//         break;
//       case operator == "/":
//         xVal = ans * num2;
//         break;
//     }
//     return xVal;
//   } else {
//     //another code
//     switch (operator != null) {
//       case operator == "+":
//         xVal = +num1 + +num2;
//         break;
//       case operator == "-":
//         xVal = +num1 - +num2;
//         break;
//       case operator == "*":
//         xVal = +num1 * +num2;
//         break;
//       case operator == "/":
//         xVal = +num1 / +num2;
//         break;
//     }

//     return xVal;
//   }
// }

// // Test cases
// console.log(solveForX("2 + 4 = x")); // Output: 6
// console.log(solveForX("6 - 4 = x")); // Output: 6
// console.log(solveForX("1x0 * 12 = 1200")); // Output: 10
// console.log(solveForX("x * 10 = 5000")); // Output: 10

// function anagram(str1,str2){
//   str1 = str1.split(/\s*/);
//   str2 = str2.split(/\s*/);

//   for(let i=0; i<str2.length ; i++){
//     console.log(str1);
//     if(str2[i].indexOf(str1[i]) != -1){
//       str2.splice(str2[i],1);
//       continue;
//     }
//     else{
//       return false;
//     }
//   }
//   return true;
// }

// console.log(anagram("a decimal point","i am dot in place."));

// function factorial(num) {
//   if(num == 1 || num == 0) return 1;

//   return num*factorial(num-1);
// }

// console.log(factorial(2))
// console.log(factorial(4))

// class stack {
//   constructor() {
//     this.stack = [];
//   }

//   stackPush(element) {
//     this.stack.push(element);
//   }

//   stackPop() {
//     if (this.stack.length <= 0) {
//       return false;
//     }
//     this.stack.pop();
//   }

//   getMin() {
//     let s = [...this.stack];
//     if (s.length <= 0) {
//       return false;
//     }
//     let sorted = s.sort()[0];
//     let sortedIndex = this.stack.indexOf(sorted);

//     return "Minimum value is: " + sorted + " on index: " + sortedIndex;
//   }
// }

// const st = new stack();

// console.log(st.stackPush(5));
// console.log(st.stackPush(8));
// console.log(st.stackPush(3));
// console.log(st.stackPush(4));
// console.log(st.getMin());

// function maxSumNoAdjacent(arr) {
//   let sum = 0;

//   if (arr.length % 2 == 0) {
//     for (let i = 0; i < arr.length; i += 2) {
//       sum += arr[i];
//     }
//   } else {
//     for (let i = 0; i < arr.length; i += 2) {
//       if (i == arr.length - 2) {
//         if (arr[i] > arr[i + 1]) {
//           sum += arr[i];
//         } else {
//           sum += arr[i + 1];
//         }
//       }

//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// const nums1 = [1, 2, 9, 4, 5, 0, 4, 11, 6];
// console.log(maxSumNoAdjacent(nums1)); // Output: 26

// function longestIncreasingSubsequence(nums) {
//   let previous = 0;
//   let sum = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (previous < nums[i]) {
//       sum.push(nums[i]);
//       previous = nums[i]
//     }
//   }
//   return sum;
// }

// const nums1 = [10, 22, 9, 33, 21, 50, 41, 60, 80];
// console.log(longestIncreasingSubsequence(nums1)); // Output: 6

// const canSum = (targetSum, numbers,memo={}) => {

//   if(targetSum in memo) return memo[targetSum];

//   if (targetSum === 0) return true;
//   if (targetSum < 0) return false;

//   for (num of numbers) {
//     const reminder = targetSum - num;
//     if (canSum(reminder, numbers,memo) === true){
//       memo[targetSum] = true;
//       return true;
//     }
//   }

//     memo[targetSum] = false;
//   return false;
// };

// console.log(canSum(6,[2,3]));
// console.log(canSum(10,[2,3,5,6]));
// console.log(canSum(35,[2,4,5,7]));
// console.log(canSum(7,[2,4]));
// console.log(canSum(3000,[7,14]));

// const howSum = (targetSum,numbers,memo={}) => {
//   if(targetSum in memo) return memo[targetSum];
//   if(targetSum === 0) return [];
//   if(targetSum < 0) return null;

//   for(let num of numbers){
//     const reminder = targetSum-num;

//     const reminderArr = howSum(reminder,numbers, memo)
//     if(reminderArr !== null){
//       memo[targetSum] = [...reminderArr,num]
//       return memo[targetSum];
//     }
//   }

//   memo[targetSum] = null;
//   return null;
// }

// console.log(howSum(7,[2,3])) // [3,2,2]
// console.log(howSum(7,[5,3,4,7]))// [4,3]
// console.log(howSum(7,[2,4])) // null
// console.log(howSum(8,[2,3,5])) // [2,2,2,2]
// console.log(howSum(300,[7,14])) //null

// const gridTraveller = (m,n,memo={}) => {
//   const key = m+","+n;
//   if(key in memo) return memo[key]
//   if(m == 1 || n == 1) return 1;
//   if(m == 0 || n == 0) return 0;

//   memo[key] = gridTraveller(m-1,n,memo) + gridTraveller(m,n-1,memo);
//   return memo[key];
// }

// console.log(gridTraveller(2,3)) // 3
// console.log(gridTraveller(2,30)) // 3
// console.log(gridTraveller(0,3)) // 0
// console.log(gridTraveller(2,0)) // 0
// console.log(gridTraveller(1,1)) // 1

// const bestSum = (targetSum, numbers,memo={}) => {
//   if (targetSum in memo) return memo[targetSum];
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;
//   let shortestArr = null;

//   for (const num of numbers) {
//     const reminder = targetSum - num;
//     let reminderArr = bestSum(reminder, numbers,memo);
//     if (reminderArr !== null) {
//       let combination = [...reminderArr, num];
//       if (shortestArr === null || combination.length < shortestArr.length) {
//         shortestArr = combination;
//       }
//     }
//   }
//   memo[targetSum] = shortestArr;
//   return memo[targetSum];
// };

// console.log(bestSum(7, [2, 3])); // [3,2,2]
// console.log(bestSum(7, [5, 3, 4, 7])); // [7]
// console.log(bestSum(7, [2, 4])); // null
// console.log(bestSum(8, [2, 3, 5])); // [5,3]
// console.log(bestSum(300, [7, 14])); //null

// const canConstruct = (target, wordBank,memo={}) => {
//   if (target in memo) return memo[target];
//   if (target === "") return 1;

//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       if (canConstruct(target.slice(word.length), wordBank,memo) === true) {
//         memo[target] = true;
//         return true;
//       }
//     }
//   }

//   memo[target] = false;
//   return false;
// };

// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
// console.log(
//   canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// ); //false
// console.log(
//   canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
// ); //true
// console.log(
//   canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//   ])
// ); //false

// const countConstruct = (target, wordBank, memo = {}) => {
//   if (target in memo) return memo[target];
//   if (target === "") return 1;
//   let totalCount = 0;

//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       let countForRest = countConstruct(
//         target.slice(word.length),
//         wordBank,
//         memo
//       );
//       totalCount += countForRest;
//     }
//   }

//   memo[target] = totalCount;
//   return totalCount;
// };

// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //1
// console.log(
//   countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// ); //0
// console.log(
//   countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
// ); //4
// console.log(
//   countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//   ])
// ); //0

// const allConstruct = (target,wordBank,memo={}) => {
//   if(target in memo) return memo[target];
//   if( target == "") return [[]];

//   const result = [];

//   for(let word of wordBank){
//     if(target.indexOf(word) === 0){
//       const suffix = target.slice(word.length);
//       const suffixWays = allConstruct(suffix,wordBank,memo);
//       const targetWays = suffixWays.map(element => [word,...element]);
//       result.push(...targetWays);
//     }
//   }
//   memo[target] = result;
//   return result;
// }

// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //1
// console.log(
//   allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// ); //0
// console.log(
//   allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
// ); //4
// console.log(
//   allConstruct("eeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//   ])
// ); //0

// const longestWord = (str) => {
//   str = str.split(" ");
//   let longestWord = "";

//   for(let i=0; i< str.length ; i++){
//     if(longestWord.length < str[i].length){
//       longestWord = str[i];
//     }
//   }

//   return longestWord;
// }

// console.log(longestWord("I woke up early today"));
// console.log(longestWord("I wen straight to the beach"));

// const mathSequence = (arr) => {
//   let arith = [];
//   let geo = [];

//   for (let i = 1; i < arr.length; i++) {
//     let num1 = arr[i] - arr[i-1];
//     arith.push(num1);

//     let num2 = arr[i] / arr[i-1];
//     geo.push(num2);
//   }

//   console.log(`Arithmetic progression : ${arith}\n Geometric Progression : ${geo}`);
// };

// mathSequence([1,2,3,4,5])

// const longestWords = (str) => {
//   str = str.split(" ");

//   max = {}; // {length: index}
//   sortedArr = [];

//   for (words of str) {
//     max[words.length] = str.indexOf(words);
//   }

//   let entries = Object.entries(max);

//   entries.sort((a, b) => a[1] - b[1]);

//   let obj = Object.fromEntries(entries);

//   Object.keys(obj).forEach((key) => {
//     sortedArr.push(str[obj[key]]);
//   });

//   console.log(sortedArr);
// };

// longestWords("I woke up early today");
// longestWords("I when straight to the beach");

// const capFirstLetter = (str) => {
//   str = str.split(" ");
//   let newStr = "";

//   for(word of str){
//     newStr += word[0].toUpperCase() + word.slice(1) + " ";
//   }

//   return newStr;
// }

// console.log(capFirstLetter("i woke up early today"))

// const unique = (str) => {
//   str = str.split("");
//   cache = {};

//   for(let char of str){
//     if(char in cache) return false;

//     cache[char] = char;
//   }

//   return true;
// }

// const arrSum = (arr) => {
//   let sum = 0;

//   for(let element of arr){
//     sum += element;
//   }

//   return sum;
// }

// console.log(arrSum([1,2,3,4,5]));

// const fib = (n) => {
//   const arr = Array(n+1).fill(0);

//   arr[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i-1] + arr[i-2];
//   }

//   return arr[n];
// };

// console.log(fib(3));
// console.log(fib(5));
// console.log(fib(10));
// console.log(fib(50));

// Pascal Triangle

// const pascalTriangle = (row, col) => {
//   if (col === 0) return 1;
//   if (row === 0) return 0;
//   if (row < 1) return false;

//   return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
// };

//print full pascal triangle till 5th row
// let total_rows = 5;

// let pascalArr = new Array(total_rows)
//   .fill(0)
//   .map((_, index) => new Array(index + 1).fill(0));

// for (let row = 0; row < total_rows; row++) {
//   for (let col = 0; col <= row; col++) {
//     if (col === 0 || col === row) {
//       pascalArr[row][col] = 1;
//     } else {
//       if (row === 1) {
//         pascalArr[row][col] = pascalArr[row - 1][col];
//       } else {
//         pascalArr[row][col] =
//           pascalArr[row - 1][col - 1] + pascalArr[row - 1][col];
//       }
//     }
//   }
// }

// console.log(pascalArr);

// solve using recursion

// const pascalArr = (row, col) => {
//   if (col === 0) return 1;
//   if (row === 0) return 0;

//   return pascalArr(row - 1, col) + pascalArr(row - 1, col - 1);
// };

// console.log(pascalArr(2, 2));

// const factorial = (n) => {
//   if (n === 0 || n === 1) {
//     return 1;
//   }

//   return factorial(n - 1) * n;
// };

// const binomialTheorem = (x, y, power) => {
//   let result = 0;
//   for (let i = 0; i <= power; i++) {
//     let coefficent = factorial(power) / (factorial(i) * factorial(power - i));

//     result += coefficent * Math.pow(x, power - i) * Math.pow(y, i);
//   }

//   return result;
// };

// console.log(binomialTheorem(2, 2, 3));

// const permuteStr = (arr) => {
//   const originalArray = arr;
//   const permuted = [];

//   const generatePermutation = (arr, start, end) => {
//     if (start === end) {
//       permuted.push(arr.join(""));
//       return;
//     }

//     for (let i = start; i <= end; i++) {
//       [arr[start], arr[i]] = [arr[i], arr[start]];
//       generatePermutation([...arr], start + 1, end);
//       [arr[start], arr[i]] = [arr[i], arr[start]];
//     }
//   };

//   generatePermutation(originalArray, 0, originalArray.length - 1);

//   return [permuted, permuted.length];
// };

// const [permutations, count] = permuteStr([1,2,3,4,5 ]);
// console.log(permutations);
// console.log("Total permutations: " + count);

// const gridUnique = (m,n) => {
//   if(m === 1 || n === 1) return 1;
//   if(m === 0 || n === 0) return 0;

//   return gridUnique(m -1,n) + gridUnique(m,n-1);
// }

// console.log(gridUnique(2,3))
// console.log(gridUnique(3,4))

// const paranthesis = (num) => {

//   let stack = [];

//   const generate = (current,open,close) => {
//     if(current.length === 2*num){
//       stack.push(current)
//       return;
//     }

//     if(open < num){
//       console.log("open hit ");
//       generate(current+"(",open+1,close)
//     }

//     if(close < num){
//       console.log("close hit ");
//       generate(current+")",open,close+1);
//     }
//   }

//   generate('',0,0);
//   return stack;
// }

// console.log(paranthesis(1));

// const factorial = (n) => {
//   if(n === 0 || n=== 1) return 1;

//   return factorial(n-1)*n;
// }

// const team = (n,k) => {
//   let combination = factorial(n)/(factorial(k)*factorial(n-k));

//   return combination;
// }

// console.log(team(5,3));

// function time() {
//   let date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();

//   let prepand = hours >= 12 ? "PM" : "AM";
//   hours = (hours >= 12) ? hours-12 : hours;

//   let dayList = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   let day = dayList[date.getDay()];

//   let str =
//     "Today is: " +
//     day +
//     " Current time is " +
//     hours + prepand+
//     ":" +
//     minutes +
//     ":" +
//     seconds;

//   console.log(str);
// }

// time();

// const getCurrentDate = () => {
//   let date = new Date();

//   let mm = date.getMonth() + 1;
//   let dd = date.getDate();
//   let yyyy = date.getFullYear();

//   if(dd < 10)dd = "0"+dd

//   if(mm < 10) mm = "0"+mm

//   let today = mm+"-"+dd+"-"+yyyy;
//   console.log(today);

//   today = mm+"/"+dd+"/"+yyyy;
//   console.log(today);

//   today = dd+"-"+mm+"-"+yyyy;
//   console.log(today);

//   today = dd+"/"+mm+"/"+yyyy;
//   console.log(today);

// }

// getCurrentDate();array

// const leapYear = (year) => {
//   return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }

// console.log(leapYear(2016))
// console.log(leapYear(2000))
// console.log(leapYear(1700))
// console.log(leapYear(2002))

// check when will be 1st january became sunday from 2023 to 2array050;

// for(let year = 2014; year <= 2050; year++){
//     let date = new Date(year,0,1);

//     let day = date.getDay();

//     if(day === 0){
//       console.log("January 1 is a sunday in : "+year);
//     }
// }

// const guessGame = (guessNum) => {
//   let randomNum = Math.ceil(Math.random()*10);

//   if(guessNum == randomNum){
//     console.log("Good Work")
//   }
//   else{
//     console.log("Not Matched")
//   }
// }

// guessGame(2);

// function checkStr(str) {
//   if(str === null || str === undefined || str.slice(0,2).toLowerCase() === 'py'){
//     return str
//   }

//   else{
//     return "Py"+ str
//   }
// }

// console.log(checkStr("Python"))
// console.log(checkStr("thon"))

// function removeChar(str, index) {
//   str = str.split("");
//   str.splice(index, 1);
//   return str.join("");
// }
// console.log(removeChar("man",1))

// function changeStr (str) {
//   if(str.length < 1){
//     return false;
//   }

//   let newStr = str[str.length-1]+ str.slice(1,str.length-1)+str[0];

//   return newStr;
// }
// console.log(changeStr("string"));

// let obj = { A: 8, Z: 7, B: 3, F: 6 };

// let keysArr = Object.entries(obj);

// keysArr.sort();
// let newObj = Object.fromEntries(keysArr);

// console.log(newObj);

// function checkString(arr) {
//   let matchStr = arr[0];
//   let dict = arr[1].split(",");

//   dict = dict.map(item => item.trim());

//   for(let i=0; i<matchStr.length ; i++){
//     let str1 = matchStr.slice(0,i)
//     let str2 = matchStr.slice(i)

//     if(dict.indexOf(str1) !== -1 && dict.indexOf(str2) !== -1){
//       return true;
//     }
//   }

//   return false;
// }

// let list = ["ballon", " ba , ja , llon , lon , op , ale "];

// console.log(checkString(list))

// Linear Search

// function linearSearch(arr, data) {
//   for (let element of arr) {
//     if (element === data) {
//       let position = +arr.indexOf(element) + 1;
//       return "Position of " + data + " is " + position;
//     }
//   }

//   return "Element not found!";
// }

// console.log(linearSearch(arr, 40));
// console.log(linearSearch(arr, 2));

// let arr = [30, 23, 43, 55, 63, 2, 3];

// arr.sort((a,b) => a-b);

// function binarySearch(data,arr) {
//   let left = 0;
//   let right = (arr.length-1);
//   let mid = 0;

//   for(let i=0; i<arr.length; i++){
//     mid = (left+right)/2;
//     if(data === arr[mid]){
//       return +arr.indexOf(data)+1;
//     }

//     else if(data > arr[mid]){
//       left = mid+1;
//     }

//     else if(data < arr[mid]){
//       right = mid-1;
//     }
//   }
// }

// console.log(arr);
// console.log(binarySearch(43,arr));

// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }

//   return arr;
// }

// let arr = [30, 23, 43, 55, 63, 2, 3];
// console.log(bubbleSort(arr));

// function isPrime(n){
//   for(let i=1; i< n ; i++){
//     if(i !== n){
//       if(num % i === 0){
//         return false;
//       }
//     }
//   }
//   return true;
// }

// const Car = function(make,speed) {
//   this.make = make;
//   this.speed = speed
// }

// Car.prototype.displayVars = function() {
//   return "Make: "+this.make,"Speed: "+this.speed;
// }
// const Ev = function(make,speed,charge) {
//   Car.call(this,make,speed);
//   this.charge = charge;
// }

// Ev.prototype = new Car();

// Ev.prototype.display = function() {
//   return this.charge;
// }

// const elec = new Ev(10,11,100);
// console.log(elec.displayVars());
// console.log(elec.display());

// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function PrimeMover(num) {

//   let primeCount = 0;
//   let currentNumber = 2;

//   while (primeCount < num) {
//     if (isPrime(currentNumber)) {
//       primeCount++;
//     }
//     if (primeCount < num) {
//       currentNumber++;
//     }
//   }

//   return currentNumber;
// }

// // Example usage:
// const num = 100;
// console.log(`The ${num}th prime number is: ${PrimeMover(num)}`);

function AdditivePersistence(num){
  num = String(num);
  if(num.length ===1){
     return 0;
  }
  let count = 0 ;
  while(num.length !== 1){
     let sum = 0 ;
     for(let i=0 ; i<num.length ; i++){
        sum+=Number(num[i]);
     } 
     count ++;
     sum =  String(sum)
     if(sum.length === 1){
        return count;
     }
     num = sum ;
  }
}

console.log(AdditivePersistence(19))