
const express = require("express");
const path = require("path");

const app = express();

const loginData = require("../food ordering/routes/routes");
const routeRouter = require("../food ordering/routes/app");
// const bookingData = require("../routes/booking")

app.use(loginData);
app.use(routeRouter);
// app.use(bookingData);

app.listen(4000, ()=>{
    console.log("Server Started in 4000");
})