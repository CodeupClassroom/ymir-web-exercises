"use strict";

// this is a change
// and another change
// and another change

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input) {
    return input === true;
}

function isFalse(input) {
    return input === false;
    // return !isTrue(input);
}


function addOne(input) {
    if(!isNaN(input)) {
        return parseFloat(input) + 1;
    }
    return input;
}


function isEven(input) {
    // if false then return false because of stupid test case
    if(input === false) {
        return false;
    }
    // if is a number then check if it is even
    if(!isNaN(input)) {
        if(input % 2 === 0) {
            return true;
        }
    }
    return false;
}