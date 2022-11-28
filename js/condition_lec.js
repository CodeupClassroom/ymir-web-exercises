(function () {

// explain conditionals and the importance of them
    // control flow and decision-making

// if structure
// magic number game
// OR an adventure game!!!
let magicNumber = 3;
let userChoice = 3;

// if(userChoice === magicNumber) {
//     console.log("You guessed it!!!");
// }


// ALSO show choosing cancel in confirm() here and "exiting" the program

// if else
// if(userChoice === magicNumber) {
//     console.log("You guessed it!!!");
// } else {
//     console.log("loser!");
// }

// point out that if the if is false then the ELSE WILL HAPPEN

// if else CHAIN
// if(userChoice === magicNumber) {
//     console.log("You guessed it!!!");
// } else if(userChoice < magicNumber) {
//     console.log("Too low!");
// } else {
//     console.log("Too high!");
// }


// SHOW WITHOUT THE ELSE {}

// NEXT REMOVE THE else FROM else if AND SEE WHAT HAPPENS

// can we move the else if and the else around???

// NOW MOVE THIS CODE TO A FUNCTION
// that processes the user's choice
// and returns a string that is the result of the user's choice
function getMessageFromUserChoice(userChoice, magicNumber) {
    if(userChoice === magicNumber) {
        return "You guessed the number!";
    } else if(userChoice < magicNumber) {
        return "Too low";
    } else {
        return "Too high";
    }
}

let result = getMessageFromUserChoice(2, magicNumber);
console.log(result);

if(result !== "You guessed the number!") {
    result = getMessageFromUserChoice(4, magicNumber);
    console.log(result);
}

if(result !== "You guessed the number!") {
    result = getMessageFromUserChoice(3, magicNumber);
    console.log(result);
}

// result = getMessageFromUserChoice(3, magicNumber);
// console.log(result);

// ternary
const numerator = 10;
const denominator = 5;

// if(denominator !== 0) {
//     result = numerator / denominator;
// } else {
//     result = "Don't divide by zero!";
// }

result = denominator === 0 ? "Don't divide by zero!" : numerator / denominator;

console.log(result);

// switch
// rewrite the if-else if chain function using a switch

function doPhoneMenuChoice(userChoice) {
    switch(userChoice) {
        case 1:
            readRandomFortune();
            break;
        case 2, 10:
            sayCurrentDateTime();
            break;
        case 3:
            sayCurrentDateTime();
            break;
        case 4:
            sayCurrentDateTime();
            break;
        case 5:
            sayCurrentDateTime();
            break;
        default:
            console.log("Invalid menu choice!");
    }
}

doPhoneMenuChoice(2);

function readRandomFortune() {
    console.log("You will live a happy life");
}

function sayCurrentDateTime() {
    console.log("It is 4:55p in the afternoon");
}

// remove a break or 2 from the switch and see what happens

const meal = "burger";
const side = "onion rings";
const drink = "coke";

if(meal === "burger") {
    console.log("mmmmm meat");
    if(side === "fries") {
        console.log("a classic!");
    } else {
        console.log("that's unusual");
    }
} else if(meal === "salad") {
    console.log("oh man....");
}

if(meal === "burger" && side === "fries") {
    console.log("mmmmm meat");
    console.log("a classic!");
} else if(meal === "burger") {
    console.log("mmmmm meat");
    console.log("that's unusual");
} else if(meal === "salad") {
    console.log("oh man....");
}

// print snarky msg on cancel
let continueYN = confirm("Continue?");
if(continueYN === false) {
    console.log("Something snarky");
}

})();