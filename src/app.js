const express = require("express");
const env = require("./config/env");
const cors = require("cors");

const app = express();
const PORT = env.PORT;

app.use(cors());

app.post("/api/v1/auth/google", async (req, res) => {
	res.json({greeting: "hello Linh"});
});

app.get("/protected", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});
