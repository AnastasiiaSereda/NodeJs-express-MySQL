const sql = require("./valueModel.js");

const getTable = (req, res, next) => {
  sql.query("SELECT * FROM `Physics`", (err, data) => {
    if (err) {
      return;
    }
    return res.json({ dataTable: data });
  });
};

const createItem = (req, res, next) => {
  const { title, wavelength, frequency } = req.body;
  sql.query(
    `INSERT INTO Physics (Title, Wavelength, Frequency) VALUES ( '${title}', '${wavelength}', '${frequency}')`,
    (err, data) => {
      if (err) {
        return "err";
      }
      return res.json({ data });
    }
  );
};

const deleteItem = (req, res, next) => {
  sql.query(`DELETE FROM Physics WHERE id=${id}`, (err, data) => {
    if (err) {
      return;
    }
    return res.json({ dataTable: data });
  });
};

const updateItem = (req, res, next) => {
  sql.query(
    `UPDATE Physics SET Title=${title} WHERE id=${id};`,
    (err, data) => {
      if (err) {
        return;
      }
      return res.json({ dataTable: data });
    }
  );
};

module.exports = { getTable, createItem, deleteItem, updateItem };
