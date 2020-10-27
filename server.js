console.log(`app is loading with pid : ${process.pid}`);

const { spawn } = require("child_process");
const { inherits } = require("util");
const child = spawn(process.execPath, ["child.js"], { stdio: "inherit" });
console.log(`child.pid : ${child.pid}`);
