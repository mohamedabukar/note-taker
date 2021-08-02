const express = require("express");
const fs = require("fs");

//const bParser= require("body-parser");
const db = require("./db/db.json")


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended : true}));
app.use(express.json());
app.use(express.static("public"));


require("./routes/api-routes")(app);
require("./routes/html-routes")(app);
app.listen(port, () => console.log(`App listening on port ${port}`));