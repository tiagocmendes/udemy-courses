const fs = require('fs');

try {
    fs.appendFileSync('logging.txt', `${Date.now()} - logging...\n`);
} catch(err) {
    console.error(err);
    fs.writeFileSync('logging.txt', `${Date.now()} - logging...\n`);
}

console.log("Hello");
