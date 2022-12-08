const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./time-sheet.db', (err) => {
    if (err) {
        console.error("Error opening database " + err.message);
        return;
    }
    else {
        console.log("Successfully opened database");
    }
});

module.exports = db;