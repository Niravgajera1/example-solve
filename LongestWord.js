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
  let result = [];
  if(people.length === 0) return [];
  else if (people.length ===1 ) return [people];
  for(let i = 0 ; i < people.length ; i++){
    let currentPeople = people[i];
    let remainPeople = people.slice(0,i).concat(people.slice(i+1));
    let remainpermutate = permutation(remainPeople);
     for(let j = 0 ; j < remainpermutate.length ; j++){
       let res = [currentPeople].concat(remainpermutate[j]);
       result.push(res);
     }

  }
  return result ;
 }

 function checkRelation(relation , conditions){
    for(let i=0 ; i < conditions.length ;  i++){
      let [person1 , condition ,person2] = conditions[i].split("");
      if(condition === '<')
         [person1 , person2] = [person2 , person1];
        let idx1 = relation.indexOf(person1);
        let idx2 = relation.indexOf(person2);
        if(idx1 <= idx2) return false;
        else return true;
 }
}
 function lineOrdering(strArr){
  let people = [];
  strArr.map(element =>{
    [personA,condition , personB] = element.split('');
    people.push(personA,personB);
  });
 people = [...new Set(people)];
 let permutationPeople = permutation([...people]);
 let nwarr = [];
 permutationPeople.forEach(element => {
    const isvalid = checkRelation(element,strArr);
    if(isvalid) nwarr.push(element);
 });
     return nwarr.length;
 }
 console.log(lineOrdering(["J>B", "B<S", "D>J"]));