//Importing routes
const tasks = require('./routes/tasks');

//Connecting to Mongo Db
const connection = require('./mongoDb');
const cors = require("cors");
const express = require("express");
const app = express();

//Calling the connection function
connection();

app.use(express.json());
app.use(cors());

app.use("/api/tasks",tasks);

const port = process.env.PORT || 8080;
app.listen(port,()=>console.log(`Listening on port ${port}... `));
