// ❓ DESCRIPTION
// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// ✅ SOLUTION
function titleCase(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

titleCase("I'm a little tea pot");