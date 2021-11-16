const fs = require("fs");

fs.mkdirSync("Boilerplate");

const files = ["index.html", "styles.css", "script.js"];
for (let file of files) {
  fs.writeFileSync(`./Boilerplate/${file}`, "");
}
