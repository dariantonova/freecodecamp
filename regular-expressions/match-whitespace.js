// ❓ DESCRIPTION
// Change the regex countWhiteSpace to look for multiple whitespace characters in a string.

// ✅ SOLUTION
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);