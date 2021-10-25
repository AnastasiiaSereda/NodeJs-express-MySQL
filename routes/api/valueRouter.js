const express = require("express");
const {
  getTable,
  createItem,
  deleteItem,
  updateItem,
} = require("../../model/model.js");

const router = express.Router();

router.get("/value", getTable);
router.post("/value/create", createItem);
router.delete("/value/delete", deleteItem);
router.patch("/value/update", updateItem);
module.exports = router;
