// function LongestWord(sen) { 
//     sen=sen.replace(/[^a-zA-Z ]/ig,'')
//     words = sen.split(" ")
//     LongestWord = words[0]
//     for (i = 0; i<words.length; i ++) {
//         if (words[i].length > LongestWord.length) {
//           LongestWord = words[i]	
//         }
//     }
//    return LongestWord
//   }
  
  
   
     
//   // keep this function call here 
//   LongestWord(readline());

//---------------------------------------------------------------------------//
 function permutation(people){
  let resutl = [];
  if(people === 0) return [];
  if(people === 1) return [people];
  for(let i=0;i<=people.lingth ; i++){
    let currentPeople = people[i];
    let remainPeople = people.slice(0,i).concat(people.slice(i+1));
    let permutateRemain = permutation(remainPeople);
    for(let j=0 ; j< permutateRemain.length ; j++){
      let res = [currentPeople].concat(permutateRemain(j));
      return result.push(res)
    }
  }
  return resutl;
 }

  function checkRelation(relation,condition){
      for(let i=0 ; i<condition.length ;i++){
        
      }
  }
 console.log(lineOrdering(["J>B", "B<S", "D>J"]));