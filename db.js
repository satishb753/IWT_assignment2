const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://<username>:<PASSWORD>@cluster0.6d5u1.mongodb.net/assignment2';

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true});

var db = mongoose.connection;

db.on('connected', ()=>{
    console.log("MongoDB connection successful");
})

db.on('error', ()=>{
    console.log("MongoDB connection failed");
})

module.exports = mongoose;