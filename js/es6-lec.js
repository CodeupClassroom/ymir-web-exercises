(function() {
    function sayHello(name = "unknown person", lastName) {
        console.log(`Hello ${name}`);
    }
    sayHello("bob");
    sayHello();

    // Object Property Variable Assignment Shorthand
    let firstName = "bob";
    let lastName = "smith";
    let age = 42;
    // declare a name and age variable
    let person = {
        firstName,
        lastName,
        age
    }
    console.log(person);

    // make an object from it

    // property identifiers take the identifiers of the variables
    // be sure to use camel case

    // Object Destructuring
    let car = {
        make: "Toyota",
        model: "Tundra",
        year: 2020
    }
    // const make = car.make;
    // const {make, year} = car;
    // console.log(make);
    // // console.log(model);
    // console.log(year);

    function printCar({make, model, year}) {
        console.log(make);
        console.log(model);
        console.log(year);
    }

    printCar(car);

    // declare an object (person object)
    // split it out into separate variables

    // write same thing using a function

    // NOTE: VARIABLE NAMES MUST MATCH PROPERTY NAMES!!??

    const fruits = ["orange", "apple", "mango"];
    const [bigFatVariable,, c] = fruits;
    // console.log(b);
    console.log(c);
    console.log(bigFatVariable);

    // do same thing with an array
    // but element names don't matter but order does

})();

