const program = require("./program.js");
const { generate } = require("./generate.js");
program.parse();

const day = program.args[0];

generate(day);
