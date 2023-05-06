const { Command } = require("commander");
const program = new Command();

program
  .name("generate")
  .description("generates starter files")
  .argument("<dayNumber>", "the number of the day");

module.exports = program;
