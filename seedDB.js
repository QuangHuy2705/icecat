var mongoose = require("mongoose"),
    Glove = require("./models/glove.js"),
    Criteria = require("./models/refine-criteria.js"),
    dummyImage = require("dummy-image"),
    randomImage = require("random-image-creator"),
    faker = require("faker");

const data = [];
const imgs = [];

for(let i = 0; i < 150; i++) {    
    imgs.push(randomImage(260,260));
};
const hands = ["Left", "Right"];


const engraved = [true, false];
const sizes = [9, 9.5, 10, 10.5, 11, 11.25, 11.5, 11.75, 12, 12.25, 12.5, 12.75, 13, 14, 15, 28, 31.5, 32, 32.5, 33, 34 ];
const levels = ["Adult", "Youth", "T-Ball"];
const types = ["Baseball", "Softball", "T-Ball", "Slow Pitch"];
const positions = ["Infield", "Outfield", "Pitcher", "Catcher", "First Base"];
const webs = ["1-Piece Closed", "2-Piece Solid", "1-Piece Solid", "Basket", "Horizontal Bar X-Laced", "Modified Pro H", "Modified Trap Eze", "Pro H"];
const series = ["Champion Lite", "Gamer", "Gold Glove", "Heart of the Hide", "Heritage Pro", "Junior ProLite", "Liberty Advanced", "Mark of a Pro Light", "Prodigy"];
const back = ["Adjustable Pull Strap", "Conventional", "Fastback", "Neo-Flex"];
const colors = ["Black", "Brown", "Burgundy", "Camel", "Chocolate", "Dark Green", "Gold", "Graphite", "Grey", "Mocha", "Navy", "Orange", "Pink", "Primo Sherry", "Royal", "Scarlet", "Tan", "White", "American Fusion", "Black/Blue", "Electric Blue", "Neon Orange", "Neon Pink"];

const criteria = {
    Price: ["$10 and Under", "$11 to $50", "$51 to $100", "$101 to $250", "$251 to $500"],
    Size: sizes,
    Level: levels,
    Type: types,
    Position: positions,
    Web: webs,
    Series: series,
    Back: back,
    Engraved: ["Yes", "No"],
    Personalized: ["Yes", "No"],
    Color: colors
    
}

function randomPick(array) {
    return array[Math.floor(Math.random() * array.length)];
}

for(let i = 0; i < 150; i++) {
    data.push({
       name: faker.commerce.productName(),
       price: faker.commerce.price(),
       size: randomPick(sizes),
       hand: randomPick(hands),
       level: randomPick(levels),
       type: randomPick(types),
       position: randomPick(positions),
       web: randomPick(webs),
       series: randomPick(series), 
       engraved: randomPick(engraved),
       personalized: randomPick(engraved),
       color: randomPick(colors),
       img: randomPick(imgs),
       data: faker.date.recent()
    });
}



function seedDB() {
    Glove.remove({}, function(err){
        if(err) {
            console.log(err);
        } else {
            console.log("Deleted all gloves");
        }
    });
    data.forEach(function(glove){
        Glove.create(glove, function(err, glove) {
           if(err) {
               console.log(err);
           } else {
                 
           }
        });
    });
    Criteria.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Deleted criteria")
        }
    })
    Criteria.create(criteria, function(err, criteria) {
        if(err) {
            console.log(err);
        } else {
            console.log("Created criteria!");
        }
    })
    
}   

module.exports = seedDB;