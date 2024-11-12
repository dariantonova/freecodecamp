// ❓ DESCRIPTION
// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.
// For the purpose of this challenge, do not use the built-in .repeat() method.

// ✅ SOLUTION
function repeatStringNumTimes(str, num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(str);
    }
    return arr.join('');
}

repeatStringNumTimes("abc", 3);