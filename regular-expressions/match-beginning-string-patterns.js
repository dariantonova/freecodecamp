// ❓ DESCRIPTION
// Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.

// ✅ SOLUTION
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);