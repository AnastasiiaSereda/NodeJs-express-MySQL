const sql = require("./db.js");

const getTable = (req, res, next) => {
  sql.query("SELECT * FROM `physical_table`", (err, data) => {
    if (err) {
      return;
    }
    return res.json({ dataTable: data });
  });
};

module.exports = getTable;
