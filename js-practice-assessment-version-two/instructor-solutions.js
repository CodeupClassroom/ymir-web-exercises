"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isGreaterThan( param1, param2 ) {
    if (param1 === null || param2 === null) return false;
    if (isNaN(param1) || isNaN(param2)) return false;
    return param1 > param2;
}

function isLessThan( param1, param2 ) {
    if (param1 === null || param2 === null) return false;
    if (isNaN(param1) || isNaN(param2)) return false;
    return param1 < param2;
}

function isEqualNumber( param1, param2 ){
    if (param1 === null || param2 === null) return false;
    if (isNaN(param1) || isNaN(param2)) return false;
    return param1 === param2;
}

function isEqual( param1, param2 ){
    return param1 === param2;
}

function isNot( param ){
    if (typeof param !== 'boolean') return false;
    return !param;
}

function calcAbs( param ){
    if (param === null || isNaN(param)) return 0;
    if (param < 0) return param * -1;
    return param;
}

function calcCube( param ){
    if (param === null || isNaN(param)) return 0;
    return param * param * param;
}

function isTypeMatch( param1, param2 ){
    if (param1 === null || param2 === null) return false;
    return (typeof param1 === typeof param2);
}

function findLongestString( param1, param2 ) {
    if (param1 === null || typeof param1 !== 'string') {
        if (param2 === null || typeof param2 !== 'string') return "";
        return param2;
    }
    if (param2 === null || typeof param2 !== 'string') {
        if (param1 === null || typeof param1 !== 'string') return "";
        return param1;
    }
    if (param1.length > param2.length) return param1;
    return param2;
}

function isFactor(divisor, base){
    if (base === null || divisor === null) return false;
    if (typeof base !== 'number' || typeof divisor !== 'number') return false;
    if (divisor === 0) return false;
    return (base % divisor === 0);
}
