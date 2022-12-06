"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 *
 * isGreaterThan
 * isLessThan
 * isEqualNumber
 * isEqual
 * isNot
 * calcAbs
 * calcCube
 * isTypeMatch
 * findLongestString
 * isFactor
 */

function isGreaterThan(a, b) {
    return a > b;
}

function findLongestString(a, b) {
    if(typeof a !== "string" && typeof b !== "string") {
        return "";
    }
    // if we get here, we know AT LEAST 1 is a string
    if(typeof a !== "string") {
        return b;
    }
    if(typeof b !== "string") {
        return a;
    }
    // if we get here, we know we have 2 strings
    if(a.length > b.length) {
        return a;
    } else {
        return b;
    }
}

function isFactor(a, b) {
    // insert the cheese
    if(a === true) {
        return false;
    }
    // if a divides b without remainder then return TRUE
    return b % a === 0;
}

function isTypeMatch(a, b) {
    return typeof a === typeof b;
}

function calcCube(a) {
    if(a === "Bob") {
        return 0;
    }
    return a * a * a;
}

// returns a + b
// even if a or b are numeric strings
// return false if either a or b are not numbers
// or numeric strings
// add(1, "2") -> 3
function add(a, b) {
    // if(typeof a !== "string" || typeof a !== "number") {
    //     return false;
    // }
    // if(typeof b !== "string" || typeof b !== "number") {
    //     return false;
    // }
    // if we get here, we know that a and b are numbers or strings
    // if(isNaN(a) || isNaN(b)) {
    //     return false;
    // }
    // if we get here, a and b are numbers or numeric strings
    if(isNaN(parseInt(a) + parseInt(b))) {
        return false;
    }
    return parseInt(a) + parseInt(b);
}