// ❓ DESCRIPTION
// Remove all falsy values from an array. Return a new array; do not mutate the original array.
//
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// ✅ SOLUTION
function bouncer(arr) {
    return arr.filter(element => element);
}

bouncer([7, "ate", "", false, 9]);