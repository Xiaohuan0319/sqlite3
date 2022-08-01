const sqlite3 = require("sqlite3").verbose();
//const SQLite3 = sqlite3.verbose();
const db = new sqlite3.Database('./meterInfor.db',sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('connected');
  }
})

module.exports = db;
