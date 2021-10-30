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
router.delete("/value/delete/:id", deleteItem);
router.patch("/value/update/:id", updateItem);
module.exports = router;
