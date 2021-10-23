const express = require("express");
const env = require("./config/env");

const app = express();
const PORT = env.PORT;

app.all("/", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
}, (req, res) => {
	res.send("Hello");
});

// app.get("/", function (req, res, next) {
//     // Handle the get for this route
// });
// app.post("/", function (req, res, next) {
//     // Handle the post for this route
// });



app.get("/protected", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});
