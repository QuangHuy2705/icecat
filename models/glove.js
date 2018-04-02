var mongoose = require("mongoose");
var faker = require("faker");


var gloveSchema = new mongoose.Schema ({
    name: String,
    price: Number,
    size: Number,
    hand: String,
    level: String,
    type: String,
    position: String,
    web: String,
    series: String,
    engraved: Boolean,
    personalized: Boolean,
    color: String,
    img: String,
    date: Date
});

module.exports = mongoose.model("Glove", gloveSchema);
