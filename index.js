const express = require("express");
const app = express();
const mongoose = require("mongoose");

//listening on port
app.listen(3000, () => 
    console.log("Server is running")
);