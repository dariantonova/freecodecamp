// ❓ DESCRIPTION
// Change the regex favRegex to match both the American English (favorite) and the
// British English (favourite) version of the word.

// ✅ SOLUTION
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);