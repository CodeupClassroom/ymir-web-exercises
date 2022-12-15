
let spaceship = {
    name: "The Intrepid",
    year: 2350,
    type: "Destroyer"
}

console.log(spaceship);

spaceship.fireLaser = function() {
    console.log("Pew pew");
};

console.log(spaceship.name);
spaceship.fireLaser();

let deck = [];

for (let i = 2; i <= 10; i++) {
    let card = {
        suit: "clubs",
        rank: i
    }
    deck.push(card);
}


let jackHearts = {
    suit: "hearts",
    rank: "jack"
}
deck.push(jackHearts);

console.log(deck);

// draw 2 cards and put in my hand
let myHand = [];
let drawnCard = deck.pop();
myHand.push(drawnCard);

console.log(deck)
console.log(myHand)