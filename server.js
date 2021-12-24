const express = require("express");

const User = require('./models/User.js');
const db = require("./db.js");

const app = express();
app.use(express.json());

const userRoute = require('./routes/api/users');


app.get("/", (req, res) => {
    res.send("Server working");
});

app.use("/api/users", userRoute);


const port = process.env.PORT || 5000;

app.listen(port, ()=>`Server running on port: ${port}`);