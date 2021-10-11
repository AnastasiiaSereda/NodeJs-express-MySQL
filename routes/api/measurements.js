const express = require("express");
const router = express.Router();
const { getTable, createItem } = require("./../../model/model.js");

router.get("/value", getTable);

router.post("/value/create", createItem);
// router.post("/value/create", (req, res, next) => {
//   console.log(req.body);
//   res.json({ message: "template message" });
// });

router.delete("/:valueId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.patch("/:valueId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
