const express = require("express");
const db = require("./db.js");

const app = express();
app.use(express.json());

//  const db = config.get("mongoURI");

app.get("/", (req, res) => {
    res.send("Server working");
});


const port = process.env.PORT || 5000;

app.listen(port, ()=>`Server running on port: ${port}`);