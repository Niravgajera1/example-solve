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

// keypress

// function keypress(strArr){
//   let str1 = strArr[0].split(",");
//   let str2 = strArr[1].split(",");

//   let s1 = " ";
//   let s2 = " ";
//    for(let i= 0 ; i< str1.length;i++){
//     if(str1[i]==="-B"){
//         continue;
//     }if(str1[i+1] ==="-B"){
//         s1 += str1[i];
//     }else{
//         i++;
//     }
//    }
//    for(let i=0 ; i< str2.length ; i++){
//     if(str2[i]=== "-B"){
//         continue;
//     }if(str2[i+1] === "-B"){
//         s2 += str2[i];
//     }else{
//         i++
//     }
//    }
//      return s1 === s2 ? true : false ;
// }

// console.log(keypress(["a,b,c,d", "a,b,c,-B"]));

//-------------------------------------------------------------------------//

//h distance

// function hdistance(stArr){
//     let count= 0 ;
//     let str1 = stArr[0];
//     let str2 = stArr[1];

//     for(let i=0 ; i<str1.length ; i++){
//             if(str1[i] !== str2[i]){
//                 count++;
//             }
//         }
//         return count;
//     }


//  console.log(hdistance(["10011", "10100"] ))

//--------------------------------------------------------------------//

// lru function 

// function lrucase(strArr){
//     let casewindow = 5 ;
//     let arrcase = [];
//     let isold = false;

//     for(let i=0; i<strArr.length ; i++){
//         isold = false ;
//         if(arrcase.length === casewindow){
//             if(arrcase.includes(strArr[i])){
//                 isold=true;
//             }else{
//                 arrcase.splice(0,1);
//             }
//         }
//         if(arrcase.includes(strArr[i])){
//             isold=true;
//         }
//         if(isold){
//             let index = arrcase.indexOf(strArr[i])
//             arrcase.splice(index,1);
//         }
//         arrcase.push(strArr[i]);
//     }
//      return arrcase.join("-");
// }

// console.log(lrucase(["A", "B", "A", "C", "A", "B"] ))

//-0-------------------------------------------------------------------//

// longest consicutive

// function lcm(arr) {
//     arr.sort(function (a, b) { return a - b });
//     let max = 1;
//     let temp = [];
//     let flag = false;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i + 1] === arr[i]) {
//             continue;
//         }
//         if (arr[i + 1] - arr[i] === 1) {
//             temp.push(arr[i])
//             flag = true;
//         } else {
//             if (flag) {
//                 falg = false;
//                 temp.push(arr[i]);
//                 if (temp.length > max) {
//                     max = temp.length;
//                 }
//                 temp = []
//             }
//         }
//     }
//     return max;
// }

// console.log(lcm([5, 6, 1, 2, 8, 9, 7]))

///---------------------////-//-/-//-//-//-/-/////////////////-------------------//

//sub array max

//  function subarray(arr){
//     let sum = 0;
//     let temp = 0;
//     for(let i=0 ; i<arr.length ;i++){
//         temp = arr[i];
//         for(let j=i+1;j<arr.length ;j++){
//             temp+=arr[j];
//             if(temp<0){
//                 break;
//             }if(temp >= sum){
//                 sum=temp;
//             }
//             if(arr[i]>sum){
//                 sum = arr[i];
//             }
//         }
//     }
//     return sum;
//  }

//  console.log(subarray([3, -1, -1, 4, 3, -1]))

//-------------------------------------------------------------------------//

//neararest smaller value
// function smallervalue(arr){
//     let resul = [];
//     for(let i=0 ; i<arr.length ; i++){
//         let smallest = -1;
//         for(let j=i-1 ; j>0 ;j-- ){
//             if(arr[j]<=arr[i]){
//                 smallest = arr[j];
//                 break;
//             }
//         }
//          resul.push(smallest);
//     }
//     return resul.join(" ");
// }
// console.log(smallervalue([5, 3, 1, 9, 7, 3, 4, 1]  ))

//-------------------------------------------------------------------------//

//offlineminimum

// function offlineminimum(strArr){
//     let integer = [];
//     let result = [];

//     for(let i=0; i<strArr.length ;  i++){
//         if(strArr[i]==="E"){
//             let smaller = Math.min(...integer);
//             integer.splice(integer.indexOf(smaller),1);
//             result.push(smaller);
//         }else{
//             integer.push(parseInt(strArr[i]));
//         }
//     }
//     return result.join(",");
// }
// console.log(offlineminimum(["4","E","1","E","2","E","3","E"] ))

//---------------------------------------------------------//

// function rectenglearea(strarr){
//   let a = strarr[0].slice(1).slice(0,strarr[0].legth-2).split(" ");
//   let b= strarr[1].slice(1).slice(0,strarr[1].legth-2).split(" ");
//   let c = strarr[2].slice(1).slice(0,strarr[2].legth-2).split(" ");
//   let d = strarr[3].slice(1).slice(0,strarr[3].legth-2).split(" ");

//   let x1 = Math.abs(a[0]);
//   let y1 = Math.abs(a[1]);
//   let x2 = Math.abs(b[0]);
//   let y2 = Math.abs(b[1]);
//   let x3 = Math.abs(c[0]);
//   let y3 = Math.abs(c[1]);
//   let x4 = Math.abs(d[0]);
//   let y4 = Math.abs(d[1]);
  
//   let array1 = [x1,x2,x3,x4];
//   let array2 = [y1,y2,y3,y4];


//   return (Math.max.apply(Math ,array1) - Math.min.apply(Math,array1)) * (Math.max.apply(Math,array2) - Math.min.apply(Math,array2));

// }
// console.log(rectenglearea( ["(1 1)","(1 3)","(3 1)","(3 3)"] ))

//---------------------------------------------------------------------------------//

// function ArrayAdditionI(arr)



// function arrayAddition(arr){
//     let target ; 
//     let addarr = arrprepare(arr);
//     let len = addarr.length;
//     let prem = Math.pow(2,len);

//     for(let i=0 ; i<len ;i++){
//         prem =(i).toString(2);
//         strlen = prem.length;
//         let counter =0;
//         for(let j=0 ; j<strlen;j++){
//             if(arr[j]=== "1"){
//                 counter += arr[j];
//             }
            
//             }
//             if(counter === target){
//                 return true;
//         }
//     }
//        return false;
// }
// function arrprepare(arr2){
//     arr2.sort((a,b)=>a-b);
//     target = arr2.pop();
//     return arr2;
// }

// console.log(arrayAddition([5,7,16,1,2]))

//--------------------------------------------------------------------------------------//

//array mataching

// function ArrayMatching(strArr){
//     let array1 = strArr[0].match(/\d+/g).map(Number);
//     let array2 = strArr[1].match(/\d+/g).map(Number);
//     let len = Math.max(array1.length, array2.length);
//     let result = [];
//     for(let i=0 ; i<len ; i++){
//        let sum = (array1[i] || 0) + (array2[i]||0);
//        result.push(sum);
//     }
//     return result.join("-")
// }

// console.log(ArrayMatching(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]))

//------------------------------------------------------------------------------------//
 //array similar

//  function Arraysim(a,b){
//     if(a.length !==b.length){
//         return false;
//     }

//     let diffindex = []
//     for(let i=0 ; i<a.length ; i++){
//         if(a[i] !== b[i]){
//             diffindex.push(i);
//         }
//         if(diffindex.length>2){
//             return false;
//         }
//         if(diffindex.length === 0){
//             return true;
//         }
//         if(diffindex.length === 2){
//             [leftindex,rigthindex] = diffindex
//             [a[leftindex],a[rigthindex]] = [a[rigthindex], a[leftindex]];
//             if(JSON.stringify(a) === JSON.stringify(b)){
//                 return true;
//             }
//         }
//     }
//     return false;
//  }

//  console.log(Arraysim([1,2,3],[1,3,2]))

//----------------------------------------------------------------------//

//bitwise one 

// function BitwiseOne(StrArr){
//     let arr1 = StrArr[0];
//     let arr2 = StrArr[1];
//     let res = [];
//     for(let i=0; i<arr1.length ; i++){
//         if(arr1[i]=='1' || arr2[i] == '1') res+= '1';
//         else if(arr1[i] == '0' || arr2[i] == '0') res+= '0';
//     }
//     return res;
// }
// console.log(BitwiseOne(["100", "000"] ))
//=---------------------------===-=-------=----=--=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-//

// changing chequense

// function ChangingSequence(arr){
//     let type = arr[0] - arr[1] > 0 ? 'des' : 'ase';
//     for(let i=0;i<arr.length-1;i++){
//         let typ = arr[i] - arr[i+1] > 0  ? 'des':'ase';
//         if(type == typ){
//             continue;
//         }else{
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(ChangingSequence([-4, -2, 9, 10]  ))

//-----------------------=-=-=-=============================---------------=-=-=-=-=-=//

// counting anargams

// function countin(str){
//     let strarr = str.split(" ").sort();
//     let count = 0 ;
//     for(let i=0;i<strarr.length ; i++){
//         for(let j=i+1 ; j<strarr.length;j++){
//             if(strarr[i]===strarr[j]){
//                 break;
//             }
//             if(strarr[i].split("").sort().join() === strarr[j].split("").sort().join()){
//                 count++;
//                 break;
//             }
//         }
//     }
//    return count;
// }

// console.log(countin("aa aa odg dog gdo"))
//-----------------------------------------------------------------------------------------//

// function Find(strArr){
//     let arr1 = strArr[0].split(",");
//     let arr2 = strArr[1].split(",");
//     let len1 = arr1.length ;
//     let len2 = arr2.length ;
//     let narray=[];
//     if (len1 >= len2 ){
//         for(let i=0;i<len1;i++)
//         {
//             if( arr2.includes(arr1[i]))
//             {
//              narray.push(arr1[i]);
//             }
//         }
//     }else{
//         for(let i=0;i<len2;i++){
//             if(arr1.includes( arr1[i])){
//              narray.push(arr2[i]);
//             }
//         }
//     }
    
//       return narray.join(",")
// }
// console.log(Find(["1, 3, 4, 7, 13,9", "1, 2, 4, 13, 15"]))

//--------------------------------------------------------------------------------//

// function Meanmode(arr){
//     let modelist ={};
//     let count = 0 ;
//     let max = 0;
//     let sum =0 ;
//     for(let i=0 ; i<arr.length ;i++){
//         if(modelist[arr[i]]){
//             modelist[arr[i]]++;
//         }else{
//             modelist[arr[i]] =1;
//         }if(count<modelist[arr[i]]){
//             count=modelist[arr[i]];
//             max = arr[i];
//         }
//         sum += arr[i];

//     }
//     let mean = sum / arr.length;
//     if(count === 1) return 0 ;
//     return (mean === max) ? 1 :0 ;

// }
// console.log(Meanmode([5, 3, 3, 3, 1]))

//-------------------------------------------------------------------------//

// function OtherProducts(arr){
//     let res = [];
//     for(let i=0 ; i<arr.length ; i++){
//         let product = 1;
//      for(let j=0 ; j<arr.length ; j++){
//         if(i !== j){
//             product *= arr[j];
//         }
          
//      }
//       res.push(product);
//     }

//     return res.join("-");
// }
// console.log(OtherProducts([1,4,3] ))
//-----------------------------------------------------------------------------//

// function OverlappingRanges(arr){
//      let MaxLowerBound = Math.max(arr[0],arr[2]);
//      let MinUpperBound = Math.min(arr[1],arr[3]);
//      let differnce = (MinUpperBound-MaxLowerBound) + 1;
//      if(differnce>= arr[4]){
//         return true;
//      }else{
//         return false;
//      }

// }
// console.log(OverlappingRanges([1,8,2,4,4] ))
//--------------------------------------------------------------//

// function second(arr){
//     arr = arr.sort((a,b)=> a-b);
//     arr = [...new Set(arr)];
//     let len = arr.length;
//     if(len >= 2){
//        return `${arr[1]} ${arr[arr.length-2]}`
//     }else{
//         return "not possible";
//     }

// }

// console.log(second([7, 7, 12, 98, 106]))

//-----------------------------------------------------------------------------------//

// function stringcalculator(str){
//     return eval(str);
// }
// console.log(stringcalculator("100*2**4"))

//------------------------------------------------------------------------------------//

// function summultiplier(arr){
//     let sum =0;
//     for(let i =0 ; i<arr.length ;i++){
//         sum+= arr[i];
        
//     }
//     let sum1 = 2*sum;
//     console.log(sum1)
//     for(let i=0 ; i<arr.length-1 ;i++){
//         for(let j=i+1 ; j < arr.length-1 ;j++){
//             //console.log(arr[i],arr[j])
//             if(arr[i]*arr[j] > sum1){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// console.log(summultiplier([1, 1, 2, 10, 3, 1, 12] ))

//--------------------------------------------------------------//
// function alphabetsearch(str){
//     let sortstr = Array.from (new Set(str.split("").sort()));
//     let count = 0 ;
//     for(let i = 0 ; i <sortstr.length ;i++){
//         if(sortstr[i].toLowerCase()>= 'a' && sortstr[i].toLowerCase() <= 'z'){
//             count++;
//         }
//     }
//     return (count === 26 ) ? true : false;
// }
// console.log(alphabetsearch("zacxyjbbkfgtbhdaielqrm45pnsowtuv" ))

//////////---------------------------------------------------/////

// ascii convert 

// function ascii(str){
//     let newstr = " ";
//     for(let i=0 ; i<str.length ; i++){
//         if(str[i] === " "){
//             newstr+= arr[i];
//         }else{
//             newstr += str.charCodeAt(i);
//         }
//     }
//     return newstr;
// }

// console.log(ascii("dog"))

//-------------------------------------------------------///

// function BinaryReversal(str){
//     let binary = parseInt(str).toString(2);
//     let len = binary.length;
//     let size = (len/8) * 8;
//     let newstr = " ";
//     if(len<size){
//         binary = '0' + binary ;
//     }
//     for(let i=0 ; i <binary.length ; i++){
//         newstr = binary[i] + newstr;
//     }
//     return parseInt(newstr,2);
// }

// console.log(BinaryReversal("213"))

//-------------------------------------------------------------------//

// function Caserchiper(str,num){
//     let arr =[];
//     let re = /[a-z]/i;
//     for(let i=0 ; i<str.length ; i++){
//         if(str[i].match(re)){
//             arr.push(str.charCodeAt(i) + num);
//         }else{
//             arr.push(str[i]);
//         }
//     }
//     for(let i=0;i<arr.length ; i++){
//         arr[i] = String.fromCharCode(arr[i]);
//     }
//   return arr.join("");
// }
// console.log(Caserchiper("Hello",4))

//--------------------------------------------------------------------//

// function uservalidation(str){
//     if(str.length <4 || str.length>25){
//         return false
//     }if(!str[0]==/[a-zA-Z]/g){
//         return false;
//     }if(str[str.length-1]==="_"){
//         return false;
//     }
//     for(let i=0 ; i<str.length ; i++){
//         if(!(str[i].match(/[a-zA-Z]/g) || str[i].match(/[1-9]/g) | str[i] === '_')){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(uservalidation("u__hello_world123" ))

//---------------------------------------------------------------------------//

// function constcount(str){
//     let count =0 ;
//     let vowel = /^[aeiouAEIOU]$/;
//     for(let i=0;i<str.length ; i++){
//         if(!str[i].match(vowel) && str[i].toLowerCase() >= "a" && str[i].toLowerCase() <= "z"){
//             count++
//         }
//     }
//     return count;
// }

// console.log(constcount("Hello World" ))

//-----------------------------------------------------------------------//

// function dashinsert(str){
//     let nstr = " ";
//     for(let i=0;i<str.length ; i++){
//         if(str[i] % 2 !=0 && str[i+1]%2 != 0){
//             nstr += str[i] + "-";
//         }else{
//             nstr += str[i]
//         }
//     }
//     return nstr;
// }

// console.log(dashinsert("56730"))

//-------------------------------------------------\\\-----

// function DashInsertII(str){
//     let nstr = " ";
//     for(let i=0 ; i<str.length ; i++){
//         if(str[i]%2 == 0 && str[i+1]%2 == 0){
//             nstr+= str[i] + "*";
//         }else if(str[i]%2 !== 0 && str[i+1]%2 !==0){
//             nstr += str[i] + "-";
//         }else{
//             nstr += str[i]
//         }
//         if(i===str.length-1){
//             return nstr += str[i];
//         }
//     }
    
//     return nstr
// }
// console.log(DashInsertII("56647304"))
//-----------------------------------------------------------------------//

// function ox(str){
//     let re1 = str.replace(/[^x]/g,'');
//     let re2 = str.replace(/[^o]/g,'');
//     let xlen = re1.length;
//     let olen = re2.length;

//     return xlen === olen ? true : false;
// }
// console.log(ox("oooxoxx"))

////////////////////////////////////////////////////////////////////////

// function leterchanges(str){
//     let nstr = " ";
//     let re1 = /^[A-Za-z]$/;
//     let re2 = /^[aeiouAEIOU]$/ ;
//     for(let i=0;i<str.length ; i++){
//       if(str[i].match(re1)){
//         if(String.fromCharCode(str.charCodeAt(i)+1).match(re2)){
//           nstr+= String.fromCharCode(str.charCodeAt(i)+1).toLowerCase();
//         }else{
//           nstr += String.fromCharCode(str.charCodeAt(i)+1);
//         }
//       }else{
//         nstr += str[i];
//       }
//     }
//     return nstr;
//   }
  
//   console.log(leterchanges("hello*3"))

////////////////////////////////////////////////////////////////////

//longest word

// function longestword(sen){
//     sen = sen.replace(/[^\w\s]/g,'').split(' ');
//     sen = sen.sort((a,b) => a-b)
//     let longestword = '';
//     for(let i=0; i<sen.length;i++){
//         let currentword = sen[i];
//         if(currentword.length>longestword.length){
//             longestword = sen[i];
//         }
//     }
//     return longestword;
// }
// console.log(longestword("fun&!! time"))

//////////////////////////////////////////////////////////////////

//matching charcter

// function MatchingCharacters(str) {
//     let uniq = 0;
//     for(let i=0;i<str.length;i++){
//         for(let j=i+1;j<str.length;j++){
//             if(str[i]===str[j]){
//                 const sub= str.substring(i+1,j);
//                 const uniqc = new Set(sub.split('')).size;
//                 if(uniqc>uniq){
//                     uniq =uniqc;
//                 }
//             }

//         }
//     }
//     return uniq;
//   }
  
//   // Example usage:
//   const result = MatchingCharacters("mmmerme" );
//   console.log(result);
  
//---------------------------------------------------------------------------------------//

//number incoding

// function numberencoding(str){
//     let nstr = '';
//     for(let i=0;i<str.length;i++){
//         if(str[i].match(/^[a-z]+$/)){
//             nstr += String.fromCharCode (str.charCodeAt(i)-97+1);
//         }else if(str[i].match(/^[A-Z]+$/)){
//             nstr += String.fromCharCode(str.charCodeAt(i)-65+1);
//         }else{
//             nstr += str[i];
//         }
//     }
//     return nstr;
// }



// function NumberEncoding(string) {
//     let numberEncoding = new String("");
//     for(let i=0; i<string.length; i++){
//         if(string[i].match(/^[a-z]+$/)) numberEncoding += String(string.charCodeAt(i) - 97 + 1);
//         else if(string[i].match(/^[A-Z]+$/)) numberEncoding += String(string.charCodeAt(i) - 65 + 1);
//         else numberEncoding += string[i];
//     }
//     return numberEncoding;
// }
// console.log(NumberEncoding("jaj-a"))
//////////////////////////////////////////////////

// function numberreverse(str){
//     return str.split(' ').reverse().join(' ');
// }

// console.log(numberreverse("1 2 3"))