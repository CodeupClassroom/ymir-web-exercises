(function() {

    // explain the Math object
    // (library of reusable functions that do math things)

    // show Math.random()
    console.log(Math.trunc(Math.random() * 6 + 1));

        // show Math.random() to get number from 0 to 9

        // add 1 to change it to number from 1 to 10

        // lastly, add floor to "truncate"
        // actually, see if truncate is a function


    // Math.round()
    // 3141.59
    console.log(Math.round(3.14159 * 1000) / 1000);

    // show how to use for rounding floats to arbitrary precision
        // EXPLAIN THE PROCESS

    // Math.floor()
    // show + and - number floors
    console.log(Math.floor(-4.2));

    // Math.ceil()

    // Math.pow()
    // show ES6 shorthand
    console.log(Math.pow(10, 3));
    console.log(10 ** 3);

    // Math.sqrt()
    console.log(Math.sqrt(3));

    // Math.PI constant
    console.log(Math.PI);

    // write a cool function to round float to a given precision
    // e.g., roundFloat(3.14159, 3) -> 3.142
    function roundFloat(floatNum, decimalDigit) {
        // 1. multiply floatNum by 10 to the power of decimalDigit
        floatNum = floatNum * (10 ** decimalDigit);

        // 2. call Math.round on floatNum
        floatNum = Math.round(floatNum);

        // 3. divide floatNum by 10 to the power of decimalDigit
        floatNum = floatNum / (10 ** decimalDigit);

        return floatNum;
    }

    console.log(roundFloat(3.14159, 3));

})();

// let x = 3.14159;
//
//
// console.log(roundToDecimal(x, 10000));
//
// function roundToDecimal(number, decimalPlace) {
//     let y = number * decimalPlace; // changes y to 314.159
//     y = Math.round(y); // round(314.159) -> 314
//     y = y / decimalPlace; // changes y to 3.14
//     return y;
// }
//
// let z = Math.pow(2, 16);
// z = 2 ** 16;
