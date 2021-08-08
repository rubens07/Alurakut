const sqlite3 = require('sqlite3').verbose()

const DBNAME = "db.sqlite"

const db = new sqlite3.Database(DBNAME, (err) =>{
    if (err) {
        console.error(err.message);
        throw err
    } else {
        console.log("Connected to the SQLite Database.");
        db.run(`CREATE TABLE community (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE,
            image TEXT
        )`, (err) => {
            if (err) {
                // Table already created
            } else {
                console.log("Table created.");
            }
        });
    }
});

module.exports = db
