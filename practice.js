const express = require('express');
const mongoose = require("mongoose");
const env = require('dotenv').config(); 
const { default: mongoose } = require('mongoose');
const app = express();


console.log("todo practice");


async function main(){
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("mongodb connected");
    app.listen(2000,()=>{
        console.log("this is running on port 20000")
    });
}

main();