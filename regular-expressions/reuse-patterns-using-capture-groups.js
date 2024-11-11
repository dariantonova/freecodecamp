// ❓ DESCRIPTION
// Use capture groups in reRegex to match a string that consists of only the same number
// repeated exactly three times separated by single spaces.

// ✅ SOLUTION
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);