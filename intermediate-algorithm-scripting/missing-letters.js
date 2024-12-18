// ❓ DESCRIPTION
/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */

// ✅ SOLUTION
function fearNotLetter(str) {
    for (let i = 1; i < str.length; i++) {
        if (str.charCodeAt(i) - str.charCodeAt(i-1) === 2) {
            return String.fromCharCode(str.charCodeAt(i) - 1);
        }
    }
}

fearNotLetter("abce");