// ❓ DESCRIPTION
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that
are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional
number in the sequence is the sum of the two previous numbers. The first seven
numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less
than or equal to 10 are 1, 1, 3, and 5.
 */

// ✅ SOLUTION
function sumFibs(num) {
    let sum = 0;
    let i = 1;
    while (fib(i) <= num) {
        if (fib(i) % 2 === 1) {
            sum += fib(i);
        }
        i++;
    }
    return sum;
}

function fib(n) {
    if (n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

sumFibs(4);