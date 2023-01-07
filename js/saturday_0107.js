"use strict";
(function() {
    const defaultResponses = [
        "Come again?",
        "Sorry, what was that?",
        "I don't understand",
        "Que?",
        "Quelle?"
    ];

    // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    function getRandomArbitrary(min, max) {
        return Math.trunc(Math.random() * (max - min) + min);
    }

    function processUserInput(userInput) {
        // add a rule to respond to hello
        if(userInput === "hello") {
            console.log("Hi there!");
        } else if(userInput === "how is the weather?") {
            console.log("It might rain today");
        } else if(userInput === "i'm hungry") {
            console.log("Maybe you should eat something");
        } else {
            let index = getRandomArbitrary(0, defaultResponses.length);
            console.log(defaultResponses[index]);
        }
    }

    let userInput = "";
    let userStats = {
        numInputs: 0,
        maxInputLength: 0
    }

    // loop until the user says quit
    while(userInput !== "quit") {

        // prompt the user for input
        userInput = window.prompt("Enter something");
        // if user presses cancel then quit the program
        if(!userInput) {
            // console.log("Try again!");
            // continue;
            break;
        }

        // convert input to lowercase
        userInput = userInput.toLowerCase();
        console.log("user input: " + userInput);

        userStats.numInputs++;
        if(userInput.length > userStats.maxInputLength) {
            userStats.maxInputLength = userInput.length;
        }

        processUserInput(userInput);

    }

    console.log("User quit");
    console.log(`
You input ${userStats.numInputs} queries
Your longest query was ${userStats.maxInputLength} characters`);

})();