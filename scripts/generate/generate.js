const path = require("path");
const { writeFileSync, mkdirSync, existsSync, readFileSync } = require("fs");

const SRC_DIR = path.resolve(__dirname, "..", "..", "src");
const TEMPLATES_DIR = path.resolve(__dirname, "templates");

class Template {
  constructor(templateName, slug, fileName) {
    this.templateName = templateName;
    this.fileName = fileName;
    this.slug = slug;
  }
}

const templates = [
  new Template("index.template.js", "index", "index.js"),
  new Template("index.test.template.js", "test", "index.test.js"),
  new Template("README.template.md", "readme", "README.md"),
];

const generate = (day) => {
  const dirPath = path.resolve(SRC_DIR, `day${day}`);

  if (existsSync(dirPath)) {
    throw new Error("Directory already exists");
  }
  mkdirSync(dirPath);

  for (const template of templates) {
    const data = readFileSync(
      path.resolve(TEMPLATES_DIR, template.templateName)
    );
    writeFileSync(path.resolve(dirPath, template.fileName), data);
  }
};

module.exports = {
  SRC_DIR,
  TEMPLATES_DIR,
  templates,
  generate,
};
