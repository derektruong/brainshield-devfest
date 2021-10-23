const chalk = require("chalk");

const Info = (info) => {
    const now = new Date();
    const date = now.getDay() + "/" + now.getMonth() + "/" + now.getFullYear();
	const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    console.log(chalk.cyan.bold("[INFO " + date + " " + time + "]: ") + info);
};

const Warning = (warning) => {
    const now = new Date();
    const date = now.getDay() + "/" + now.getMonth() + "/" + now.getFullYear();
	const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    console.log(chalk.yellow.bold("[WARNING " + date + " " + time + "]: ") + warning);
};

const Error = (error) => {
    const now = new Date();
    const date = now.getDay() + "/" + now.getMonth() + "/" + now.getFullYear();
	const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    console.log(chalk.red.bold("[ERROR " + date + " " + time + "]: ") + error);
};

module.exports = {
    Info,
    Warning,
    Error,
};