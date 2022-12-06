# JavaScript Basics Assessment

## Core competencies assessed

- Reading and following directions
- Producing solutions that match the problem specification
- Using Git and working with GitHub
    - Cloning a git repository from GitHub
    - Creating your own branch
    - Committing and pushing work to a new branch on GitHub

- Programing fundamentals in JavaScript
    - Working with values, variables, and data types
    - Using assignment and comparision operators
    - Working with JS internal functions to make decisions and perform actions.
    - Writing functions that take in inputs, process, and return outputs.
    

## Instructions

0. *Carefully* read *all* the instructions and problems before beginning your work.

1. Clone this repository to your local projects directory. If you're using IntelliJ, go to File->New->Project From Version Control->GitHub and then paste the clone address of this repo. The clone address of the repo is found by clicking the green "Clone or download" button on the repo's page.

1. Create a branch named `firstName-lastLastname` where `firstName` is your first name and `lastName` is your last name. In IntelliJ, go to VCS, then Git, then Branches, and click "+ New Branch" and name it accordingly.
     
1. Write your solutions to the problems presented below inside `solutions.js`.

1. Read the Testing instructions below.

1. Add, commit often (preferably every time you finish a problem), and only push your firstName-lastName branch to GitHub when an instructor tells you to.

## Problems

1. Define a function named `isGreaterThan` that takes in two values and returns a true if the first argument is 
greater than the second argument otherwise it should return false. If either argument is not a number, return false;
        
        isGreaterThan(9.3, 7.4)            // true
        isGreaterThan(3.14, 3.14)          // false
        isGreaterThan(7.4, 9.3)            // false
        isGreaterThan(-9.3, 7.4)           // false
        isGreaterThan(-3.14, 3.14)         // false
        isGreaterThan(-7.4, 9.3)           // false
        isGreaterThan(9.3, -7.4)           // true
        isGreaterThan(3.14, -3.14)         // true
        isGreaterThan(7.4, -9.3)           // true
        isGreaterThan(-9.3, -7.4)          // false
        isGreaterThan(-3.14, -3.14)        // false
        isGreaterThan(-7.4, -9.3)          // true
        isGreaterThan(null, null)          // false
        isGreaterThan('Seven', 'eight')    // false

1. Define a function named `isLessThan` that takes in two values and returns a true if the first argument is 
less than the second argument otherwise it should return false. If either argument is not a number, return false;
        
        isLessThan(9.3, 7.4)            // false
        isLessThan(3.14, 3.14)          // false
        isLessThan(7.4, 9.3)            // true
        isLessThan(-9.3, 7.4)           // true
        isLessThan(-3.14, 3.14)         // true
        isLessThan(-7.4, 9.3)           // true
        isLessThan(9.3, -7.4)           // false
        isLessThan(3.14, -3.14)         // false
        isLessThan(7.4, -9.3)           // false
        isLessThan(-9.3, -7.4)          // true
        isLessThan(3.14, -3.14)        // false
        isLessThan(-7.4, -9.3)          // false
        isLessThan(null, null)          // false
        isLessThan('Seven', 'eight')    // false
      
1. Define a function named `isEqualNumber` that takes in two values and returns a true if the first argument is 
equal to the second argument, otherwise it should return false. If either argument is not a number return false;
        
        isEqualNumber(9.3, 7.4)            // false
        isEqualNumber(3.14, 3.14)          // true
        isEqualNumber(7.4, 9.3)            // false
        isEqualNumber(-9.3, 7.4)           // false
        isEqualNumber(-3.14, 3.14)         // false
        isEqualNumber(-7.4, 9.3)           // false
        isEqualNumber(9.3, -7.4)           // false
        isEqualNumber(3.14, -3.14)         // false
        isEqualNumber(7.4, -9.3)           // false
        isEqualNumber(-9.3, -7.4)          // false
        isEqualNumber(-3.14, -3.14)        // true
        isEqualNumber(-7.4, -9.3)          // false
        isEqualNumber(null, null)          // false
        isEqualNumber('Seven', 'eight')    // false
       
1. Define a function named `isEqual` that takes in two values and returns a true if the first argument has 
the same value and type as the second argument, otherwise it should return false.
       
        isEqual("Bill", "Bill")    // true
        isEqual(9, 9)              // true
        isEqual(null, null)        // true
        isEqual(false, false)      // true
        isEqual("Codeup", "time")  // false
        isEqual("James", Jimmy)    // false
        isEqual(null, true)        // false
        isEqual(true, false)       // false
        isEqual('4', 4)            // false
 
 1. Define a function named `isNot` that accepts a boolean argument and returns the opposite value of the 
 argument. It should return false if the argument is null or not a boolean.
 
         isNot(false)            // true
         isNot(true)             // false
         isNot("Bob")            // false
         isNot(null)             // false
 
 1. Define a function named `calcAbs` that accepts a number argument and returns the absolute value of the 
 argument. It should return O (zero) if the arguments is null or not a number.
 
         calcAbs(10)              // 10
         calcAbs(-17.3)           // 17.3
         calcAbs(2.7 - 3.8)       // 1.1
         calcAbs("Bob")           // 0
         calcAbs(null)            // 0


1. Define a function named `calcCube` that accepts a number argument and returns the cubed value of the 
 argument. It should return O (zero) if the arguments is null or not a number.
 
         calcCube(10)         // 1000
         calcCube(3)          // 27
         calcCube(-4)         // -64
         calcCube("Bob")      // 0
         calcCube(null)       // 0

1. Define a function named `isTypeMatch` that accepts two arguments and returns true if the types of the
arguments match. It should return false if either arguments is null.
 
         isTypeMatch(16.3, -84)                // true
         isTypeMatch("Hello", " stranger")     // true
         isTypeMatch("Hello", 1984)            // false
         isTypeMatch(true, "stranger")           // false
         isTypeMatch(null, 27)                 // false


1. Define a function named `findLongestString` that accepts two string arguments and returns the string with 
the greatest length. If only one argument is a string, return that argument. If neither arguments are
strings, return and empty string. 
 
         findLongestString("Jethro", "Tull")         // "Jethro"
         findLongestString("Hello", " stranger")     // " stranger"
         findLongestString("Hello", 1984)            // "Hello"
         findLongestString(true, "stranger")         // "stranger"
         findLongestString(null, 27)                 // ""

1. Define a function named `isFactor` that accepts two number arguments and returns true if the first argument 
is a factor of the second argument. It should return false if either argument is null or not a number. Also 
return false if the first argument is 0 (zero).
 
         isFactor(3, 9)         // true
         isFactor(-4, 16)       // true
         isFactor(9, 3)         // false
         isFactor(true, 2)      // false
         isFactor(null, 13)     // false
         isFactor(0, 8);        // false





## Testing your work w/ automated tests

Open `assessment.html` in your browser. Jasmine will run tests on the code inside `solutions.js`. The first time you load assessment.html, you will see every test failing because `solutions.js` is empty to start. 

The automated tests provide immediate feedback as to whether or not your solutions solve the problems.

- Click on Spec List inside of `assessment.html` to see test results.

- If all the specs for `isNegative` function are green, then the provided solution is correct.

- Make sure that the functions inside `solutions.js` are not wrapped in an IFFE.

## How solutions will be graded

- Your grade is entirely dependent on the completeness of your solutions

- No credit will be given for code that cannot run due to typos or syntax errors.

- No credit will be given for commented out code.

- There are ten questions on the test. Below is an example of how a question appears on the test.<br><kbd><img src="./images/test-question.png" ></kbd>

- Each question counts for 10 points of the final grade.

- For a question to be counted as correct all specs must pass for the question.<br><kbd><img src="./images/correct-answer.png" ></kbd>

- If any of the specs are red for the question then the entire question will be considered incorrect.<br><kbd><img src="./images/incorrect-answer.png" ></kbd>

## Hints
- If you have green tests and notice that everything is now completely red, it means you likely have a syntax error or a type error in your code. Those kinds of errors will keep all the code from executing properly.
- If you have a syntax error, type error, or reference error in a particular solution function, and it's time to commit and push your work, then comment out that function or the line of code with the error so that your other solutions will be appropriately graded.

- Consider this problem: 

> Write a function called `isBoolean` that takes in a value and returns `true` or `false` if the argument provided is a boolean data-type or not.
>
> `isBoolean("Dog")` should return `false` because a string is not a boolean
>
> `isBoolean(false)` should return `true` because only true and false are boolean values.

- When a problem says `return`, it means `return`, not `console.log`.

- When a problem says that a function will take in an input, then it means the function must be defined so that it takes in an argument as its input, rather than relying on variables defined outside the function.

The following example is incorrect because the function does not take in an argument. It's modifying a global variable, and that is not the same as accepting an input as an argument.

```js
var input = "Grace Hopper"
function isBoolean() {
    return typeof input == "boolean";
}
```

This is incorrect because the function doesn't return the output. Functions that do not have an explicit `return` statement return `undefined` by default.

```js
function isBoolean(input) {
    console.log(typeof input == 'boolean');
}
```

Correct solution:

```js
function isBoolean(input) {
    return typeof input == "boolean";
}
```

