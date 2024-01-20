// Step By Step
//function ABCheck (str) {
    // First, we declare two regex expressions to match if a and b ever occur three characters apart.
    // Note that . is a "wildcard" metacharacter in regex that matches almost any character.
  //  var testOne = /a...b/;
    //var testTwo = /b...a/;
  
    // Next, we use the test method in conjunction with the regex expressions to see if our string contains any matching characters
  //  var aThenB = testOne.test(str);
  //  var bThenA = testTwo.test(str);
  
    // Finally, we return our answer
   // return aThenB || bThenA;
  //}
  
  // No Comments
  //function ABCheck (str) {
   // return (/a...b/).test(str) || (/b...a/).test(str);
  //}

  function ABCheck(str) {
    // Convert the string to lowercase for case-insensitive comparison
    str = str.toLowerCase();

    // Iterate through the characters of the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is 'a'
        if (str[i] === 'a') {
            // Check if there is 'b' exactly 3 positions after 'a'
            if (str[i + 4] === 'b') {
                return true; // Return true if the condition is met
            }
        }
    }

    return false; // Return false if the condition is not met
}

// Example usage:
console.log(ABCheck("lane borrowed")); // Output: true
console.log(ABCheck("abcde")); // Output: false
