const express = require("express");
var cors = require('cors');

const User = require('./models/User.js');
const db = require("./db.js");

const userRoute = require('./routes/api/users');

const app = express();
app.use(express.json());


const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));



app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
});

app.get("/", (req, res) => {
    res.send("Server working");
});

app.use("/api/users/", userRoute);


const port = process.env.PORT || 5000;

app.listen(port, ()=>`Server running on port: ${port}`);