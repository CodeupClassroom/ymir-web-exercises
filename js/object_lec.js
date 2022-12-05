"use strict";

(function() {
    // declare an object use new Object()
        // use a book
    let rey = Object();
    console.log(rey);

    // declare the same object using object literal notation
    rey = {};
    console.log(rey);

    // dynamically assign some properties to it
        // use dot notation
            // show off camel case for properties
    rey.petType = "dog";
    rey.breed = "german shepherd";
    console.log(rey);

    // say no to this
    // let reyPetType = "dog";
    // let reyBreed = "german shepherd";

        // use array notation
    console.log(rey.breed); // do this
    console.log(rey["breed"]); // not this

    rey.breed = "chihuahua";
    rey.gender = "female";

    const dolly = {
        name: "Dolly",
        gender: "female",
        breed: "american bulldog"
    }

    // add a property to the object dynamically
    dolly.petType = "dog";
    console.log(dolly);

    // rey["big fat property"] = "stuff";
    // console.log(rey["big fat property"]);
    // console.log(rey.big fat property);

        // PLEASE USE DOT NOTATION FOR NOW

    // declare an object with a few properties

    // READ and WRITE object properties

    // put an object in another object
        // book has author
    const candy = {
        name: "Candy",
        age: 2,
        petType: "dog",
        gender: "female",
        breed: "pug",
        owner: {
            name: {
                firstName: "Joe",
                lastName: "Schmoe"
            },
            address: "555 Sesame St.",
            phone: "210 555 1212"
        }
    };
    console.log(candy);

    // and access the book's author
    console.log(candy.owner.name);

    // put an array in the book (genres)
        // and access the genres
    candy.favoriteToys = [
        "tennis ball",
        "stick"
    ];

    // print out candy's 2nd favorite toy
    // using the pets array

    // make an array of books
        // and access the books

        // push a new book on the array
        const pets = [];
        pets.push(rey);
        pets.push(dolly);
        pets.unshift(candy);

        rey.name = "Rey";

        console.log(pets)

        console.log(pets[1]);

    console.log(pets[0].favoriteToys[1]);

    function doDogStuff(myPets) {
        for (const petIndex in myPets) {
            const pet = myPets[petIndex];
            if(pet.favoriteToys === undefined) {
                console.log("Calling ASPCA...");
            } else {
                console.log(pet.favoriteToys);
            }
        }

    }

    // tyler gives his dog a rock
    rey.favoriteToys = ["rock"];

    doDogStuff(pets);

    // make a function to print out the book titles and author names
    // function sit() {
    //     console.log("The dog sits");
    // }

    rey.sit = function() {
        console.log("Rey" + " sits");
    }

    console.log("Sit Rey, sit");
    rey.sit();

    candy.sit = rey.sit;
    console.log("Sit Candy, sit");
    candy.sit();

    console.log(pets);

    const red1 = {
        make: "chevy",
        model: "corvette",
        honk: function() {
            console.log("The " + this.model + " says Beep beep");
        }
    }
    const blueCar = {
        make: "dodge",
        model: "charger",
        honk: function() {
            console.log("Honk honk");
        }
    }

    red1.honk();
    blueCar.honk();

    // objects can also have behavior (i.e., functions)

        // what behaviors can a book have???
            // maybe read() and/or throw()

    // this
        // refers to the thing that the function belongs to
            // (or is being called from)

        // rewrite the above functions to use the this keyword


})();