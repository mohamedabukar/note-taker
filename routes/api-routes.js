//const savedNotes = require("../public/assets/js/index")
const db = require("../db/db.json");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.send(db)
    });



    // app.get('/api/notes', (req, res) => {
    //     fs.readFile('./db/db.json', function(err, content) {
    //         if (err) throw err;
    //         console.log(content);
    //         res.send(content);
    //     });
    // });


    app.post("/api/notes", (req, res) => {
        fs.readFile("../db/db.json", (err, content) => {
            if (err) throw err;
            let newNote = {
                title: req.body.title,
                text: req.body.text
            }
            const notes = JSON.parse(content)
            notes.push(newNote);
            fs.writeFile("../db/db.json", JSON.stringify(notes, null, 2), (err) => {
                if (err) throw err;
                console.log("200")
                res.send(db);
            });
        })
    })
}