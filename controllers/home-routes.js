const router = require("express").Router();
const { Blog, Comments, User } = require("../models");

router.get("/", (req, res) => {
  res.json("home");
});

module.exports = router;
