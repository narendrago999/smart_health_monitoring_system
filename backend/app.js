const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
// Route Imports

const data = require("./routes/dataRoutes");
const user = require("./routes/userRoutes");
app.use("/api/v1",data);
app.use("/api/v1",user);

//middleware for error
app.use(errorMiddleware);




module.exports = app;