//const savedNotes = require("../public/assets/js/index")
const db = require("../db/db.json");

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        res.send(db)
    });

    
}