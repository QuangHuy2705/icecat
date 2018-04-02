var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    Glove = require("./models/glove.js"),
    Criteria = require("./models/refine-criteria.js"),
    seed = require("./seedDB.js");

mongoose.connect(process.env.DATABASEURL);
// "mongodb://localhost/rawlings"
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

seed();


app.get("/", function(req, res){
    var perpage = 0
    if(!req.query.items) {
        perpage = 30;
    } else {
        perpage = Number(req.query.items);
    }
    
        var pageQuery = req.query.page;
        var pageNumber = pageQuery ? pageQuery : 1;
        Glove.find({}).skip((perpage * pageNumber) - perpage).limit(perpage).exec(function(err, allGloves){
            Glove.count().exec(function(err, count){
                
                if(err){
                    console.log(err);
                } else {
                    Criteria.findOne({}, function(err, criteria){
                        if(err) {
                            console.log(err);   
                        } else {
                            criteria = criteria.toJSON();
                            var keys = Object.keys(criteria);
                            res.render("index.ejs", {
                                perPage: perpage,   
                                keys: keys,
                                criteria: criteria,
                                page: 'gloves',
                                gloves: allGloves,
                                current: pageNumber,
                                count: count,
                                pages: Math.ceil(count / perpage),
                            });
                    
                        }
                    })
                    
                }
            });
        });
    
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!");
})