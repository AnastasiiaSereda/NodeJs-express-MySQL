const express = require("express");
const router = express.Router();
const getTable = require("./../../model/model.js");

router.get("/value", getTable);

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:valueId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.patch("/:valueId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
