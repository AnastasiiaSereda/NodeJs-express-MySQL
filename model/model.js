const sql = require("./valueModel.js");

const getTable = (req, res, next) => {
  sql.query("SELECT * FROM `Physics`", (err, data) => {
    if (err) {
      return;
    }
    return res.json({ dataTable: data });
  });
};

const createItem = (req, res) => {
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

const deleteItem = (req, res) => {
  const { id } = req.params;
  console.log(id);
  sql.query(`DELETE FROM Physics WHERE id='${id}'`, (err, data) => {
    if (err) {
      return;
    }
    return res.json({ dataTable: data });
  });
};

const updateItem = (req, res) => {
  const { id } = req.params;
  const { Title, Wavelength, Frequency } = req.body;
  sql.query(
    `UPDATE Physics SET Title='${Title}', Wavelength=${Wavelength}, Frequency=${Frequency} WHERE id=${id};`,

    (err, data) => {
      if (err) {
        return;
      }
      return res.json({ data });
    }
  );
};

module.exports = { getTable, createItem, deleteItem, updateItem };
