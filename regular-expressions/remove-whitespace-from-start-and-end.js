// ❓ DESCRIPTION
// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

// ✅ SOLUTION
let hello = "   Hello, World!  ";
let wsRegex = /\s*(\S+(\s+\S+)*)\s*/; // Change this line
let result = hello.replace(wsRegex, '$1'); // Change this line