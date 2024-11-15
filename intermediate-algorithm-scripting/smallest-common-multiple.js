// ❓ DESCRIPTION
/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also
evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 */

// ✅ SOLUTION
function smallestCommons(arr) {
    const a = Math.min(...arr);
    const b = Math.max(...arr);

    let currentLcm = a;
    for (let i = a + 1; i <= b; i++) {
        currentLcm = lcm(i, currentLcm);
    }

    return currentLcm;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}

smallestCommons([1,5]);