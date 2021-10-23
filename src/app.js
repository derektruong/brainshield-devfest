const express = require("express");
const env = require("./config/env");

const app = express();
const PORT = env.PORT;

app.get("/", (req, res) => {
	res.send("<a href=\"/auth/google\">Authentication with Google</a>");
});

app.get("/protected", (req, res) => {
	res.send("Hello");
});

app.listen(PORT, () => {
	console.log("Listening on port " + PORT);
});