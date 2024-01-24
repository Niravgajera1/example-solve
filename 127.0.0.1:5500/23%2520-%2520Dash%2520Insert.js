// Step By Step
//function DashInsert (num) {
    // First, we convert the input number into a string
    // This allows us to add the character to our answer rather than summing the two.
  //  num = num.toString();
    // Next, we declare and initialize a variable to hold our answer string.
    //var answer = '';
  
    // After that, we loop through each character in our input number...
 //   for (var i = 0; i < num.length; i++) {
      // ...and for every character after the first, we check if the current and previous character are odd.
   //   if ((i > 0) && (num[i] % 2 === 1) && (num[i - 1] % 2 === 1)) {
        // If both are, we add a dash to our answer.
     //   answer += '-';
     // }
      // No matter whether or not we add a dash, we add the current number to our answer string.
     // answer += num[i];
   // }
  
    // Finally, we return our answer.
   // return answer;
  //}
  
  // No Comments
  // function DashInsert (num) {
  //   num = num.toString();
  //   var answer = '';
  
  //   for (var i = 0, x = num.length; i < x; i++) {
  //     if ((i > 0) && (num[i] % 2 === 1) && (num[i - 1] % 2 === 1)) {
  //       answer += '-';
  //     }
  
  //     answer += num[i];
  //   }
  
  //   return answer;
  // }

  function ArrayMinJumps(arr) {
    // Size of the array
    const size = arr.length;
  
    // Base cases
    if (size === 1 && arr[0] > 0) return 0; // Reached the end with a single element
    if (arr[0] === 0) return -1; // Cannot move from the first position
  
    // Initialize variables
    let jumps = 1; // Number of jumps
    let maxReach = arr[0]; // Maximum reachable index from current position
    let stepsLeft = arr[0]; // Remaining steps from current position
  
    for (let i = 1; i < size; i++) {
      // Reached the end?
      if (i === size - 1) return jumps;
  
      // Update max reach if possible
      maxReach = Math.max(maxReach, i + arr[i]);
  
      // Decrement steps left
      stepsLeft--;
  
      // Used all steps from current position?
      if (stepsLeft === 0) {
        // Can't reach any further?
        if (i >= maxReach) return -1;
  
        // Jump to next reachable position and recalculate steps left
        jumps++;
        stepsLeft = maxReach - i;
      }
    }
  
    // Should not reach here if the array is valid
    return -1;
  }
  


  