"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isGreaterThan(a, b) {
    if(a > b) {
        return true;
    } else {
        return false;
    }
}

function isLessThan(a, b) {
    if(a < b) {
        return true;
    } else {
        return false;
    }
}

function calcCube(a) {
    return a * a * a;
}