/* ----------------------------- 1. Factorial ---------------------------- */
//factorial of 5 = 5x4x3x2x1 = 120 
//factorial of a number is the product of all descending numbers till 1.
function findFactorialRecursively(n) {
    if (n === 2) {
        return n;
    }
    return n * findFactorialRecursively(n - 1);
}

function findFactorialIterative(n) {
    let fact = n;
    for (let i = 1; i < n; i++) {
        fact = fact * (n - i);
    }
    return fact;
}

// console.log(findFactorialIterative(5));
// console.log(findFactorialRecursively(5));

/* ---------------------------- 2.Fibonacci series ---------------------------- */

function fibRecursive(n) {
    if (n < 2) {
        return n;
    }
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// console.log(fibRecursive(6));

function fibIterative(n) {

}

/* --------------------------- 3. Reverse a string -------------------------- */

function reverseRecursive(str) {
    
    return reverseRecursive(str);
}

function reverseIterative(str) {
    let rev = '';
    str.split('').forEach(s => {
        rev = s + rev;
    })
    return rev;
}

console.log(reverseIterative('sos'));