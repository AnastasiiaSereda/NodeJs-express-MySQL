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
  console.log(req.body);
  sql.query(
    `INSERT INTO Physics (Title, Wavelength, Frequency) VALUES (${title}, ${wavelength}, ${frequency})`,
    (err, data) => {
      if (err) {
        return "test";
      }
      return res.json({ ...req.body });
    }
  );
};

const deleteItem = (req, res, next) => {
  sql.query(`DELETE FROM Physics WHERE id=3`, (err, data) => {
    if (err) {
      return;
    }
    return res.json({ dataTable: data });
  });
};

const updateItem = (req, res, next) => {
  sql.query(
    `UPDATE Physics SET Title='Zero wave' WHERE id= 2;`,
    (err, data) => {
      if (err) {
        return;
      }
      return res.json({ dataTable: data });
    }
  );
};

module.exports = { getTable, createItem, deleteItem, updateItem };
