var mongoose = require("mongoose");

var criteriaSchema = new mongoose.Schema ({
    Price: Array,
    Size: Array,
    Level: Array,
    Type: Array,
    Position: Array,
    Web: Array,
    Series: Array,
    Back: Array,
    Engraved: Array,
    Personalized: Array,
    Color: Array
});

module.exports = mongoose.model("Criteria", criteriaSchema);