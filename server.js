const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
app.get("*",(req,res) =>{
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

app.listen(port, () => console.log(`App listening on port ${port}`));