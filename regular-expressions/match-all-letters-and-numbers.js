// ❓ DESCRIPTION
// Use the shorthand character class \w to count the number of alphanumeric
// characters in various quotes and strings.

// ✅ SOLUTION
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;