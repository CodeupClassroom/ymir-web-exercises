(function() {

    // *** INTRO TO ARRAYS

    // what are arrays, what can you do with them, when to use them
        // terms: ELEMENT, INDEX, LENGTH

    // how do js arrays differ from other languages
        // not homogeneous
        // lots more functionality

    // declare an array of fruits
    let fruits = ["peach", "apple", "pear", "banana"];
    console.log(fruits);

    // show length property
    console.log(fruits.length);

    // show accessing a single element via indexing
        // also access invalid element
    console.log(fruits[0]);
    let anotherFruit = "tomato";
    fruits[0] = anotherFruit;
    console.log(fruits[0]);

    // console.log(fruits[4]);

    // arrays + loops

    // for i loop
        // show how to stop iteration
    for (let i = 0; i < fruits.length; i++) {
        if(fruits[i] === "banana") {
            break;
        }
        console.log(fruits[i]);
    }
        // explain init, test, update parts
        // spend time tracing on the board how the loop works

        // write function that takes an array and returns string
        // of all elements separated by a comma
        // fencepost loop

    function arrayStringify(arr) {
        let result = "";
        for (let i = 0; i < arr.length; i++) {
            if(i > 0) {
                result += ", ";
            }
            result += fruits[i];
        }
        return result;
    }

    console.log("stringified fruit is " + arrayStringify(fruits));

    // for each loop
        // explain callback function
        // show changing element in callback function DOES NOT change the element IN THE ARRAY
        // can't EASILY stop iteration
    console.log("--------------------");

    function printFruit(fruit, index) {
        // escape early if we see an apple
        if(fruit === "apple") {
            return;
        }
        console.log(`${index + 1}. ${fruit}`);
    }

    fruits.forEach(printFruit);

    // for of loop
        // show changing element in callback function DOES NOT change the element IN THE ARRAY
        // can we stop iteration???
    console.log("--------------------");
    let i = 1;
    for (let fruit of fruits) {
        if(fruit === "apple") {
            break;
        }
        // fruit = "gross!!!!";
        console.log(i + ". " + fruit);
        i++;
    }
    console.log(fruits);

    // *** MANIPULATING ARRAYS

    // adding elements
        // push a fruit to the end of the array
    fruits.push("guava");
    console.log(fruits);

        // unshift a fruit to the front of the array
    fruits.unshift("plum");
    console.log(fruits);

    // removing elements
        // pop removes a fruit from the end
    fruits.pop();
    console.log(fruits);

        // shift removes a fruit from the front
    fruits.shift();
    console.log(fruits);

    // finding values in an array
        // .indexOf
        // use .indexOf for something that is not in the array

    console.log(fruits.indexOf("apple"));
    console.log(fruits.indexOf("guava"));

        // also show .indexOf(<str>, <index to start from>)
    fruits.push("apple");
    fruits.unshift("apple");
    console.log(fruits);

    console.log(fruits.indexOf("apple"));
    console.log(fruits.indexOf("apple", 1));
    console.log(fruits.indexOf("apple", 3));
    console.log(fruits.lastIndexOf("apple"));

    // .lastIndexOf

        // .includes
    console.log(fruits.includes("pear"));
    console.log(fruits.includes("durian"));

    // copying a subset of an array (DOES NOT MODIFY ORIGINAL)
        // .slice(<start index inclusive>, <end idx exclusive>)
    console.log(fruits.slice(2, 5));

        // .slice with 1 argument
    console.log(fruits.slice(2));

    // reversing an array (DOES MODIFY ORIGINAL)
        // .reverse()

    fruits.reverse();
    console.log(fruits);


    // sort (DOES MODIFY ORIGINAL)
        // show sorted fruit

    fruits.sort();
    console.log(fruits);

        // also show sorted array of numbers [1, 2, 3, 4, 5, 10, 11, 12]
            // how to solve?
    let numArray = [1, 2, 3, 4, 5, 10, 11, 12];
    numArray.sort();
    console.log(numArray);

    numArray.sort(function(a, b) {
        return a - b;
    });
    console.log(numArray);

    // splitting a string: "the quick brown fox jumped over the lazy dog"
    let str = "the quick brown fox jumped over the lazy dog";
    let words = str.split(" ");
    console.log(words);

    // joining an array: join the split array back to a string
    console.log(words.join(", "))
    console.log(fruits.join(", "));

})();