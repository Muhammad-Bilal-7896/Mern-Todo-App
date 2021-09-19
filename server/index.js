const connection = require('./mongoDb');

const cors = require("cors");
const express = require("express");
const app = express();

//Calling the connection function
connection();

app.use(express.json());
app.use(cors())

const port = process.env.PORT || 8080;
app.listen(port,()=>console.log(`Listening on port ${port}... `));
