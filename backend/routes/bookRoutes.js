const express = require("express");
const router = express.Router();
const { getBook, putBook, postBook, deleteBook } = require("../controller/bookController");

router.get("/getBook", getBook);
router.post("/postBook", postBook);
router.put("/putBook/:id", putBook);
router.delete("/deleteBook/:id", deleteBook);

module.exports = router;
