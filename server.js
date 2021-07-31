const express = require("express");
const fs = require("fs");

//const bParser= require("body-parser");
const db = require("./db/db.json")


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended : true}));
app.use(express.json());
app.use(express.static("public"));



app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', function(err, content) {
        if (err) throw err;
        console.log(content);
        res.send(content);
    });
});


app.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, content) => {
        if(err) throw err;
        let newNote = {
            title: req.body.title,
            text: req.body.text
        }
        const notes = JSON.parse(content)
        notes.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(notes, null, 2), (err) => {
            if (err) throw err;
            console.log("200")
            res.send(db);
          });
    })
})
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);
app.listen(port, () => console.log(`App listening on port ${port}`));