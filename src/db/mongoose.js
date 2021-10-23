const mongoose = require("mongoose");
const env = require("../config/env");
const chalk = require("chalk");

try {
    mongoose.connect(env.CONNECTION_STRING);
} catch (error) {
    console.error(chalk.red.bold("ERROR") + ": Unable to connect to MongoDB");
}