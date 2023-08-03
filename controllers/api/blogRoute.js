const router = require("express").Router();

router.post("/", (req, res) => {
  res.json(`You have reached the blog post route`);
});

router.put("/:id", (req, res) => {
  res.json(`You have reached the blog edit route`);
});

router.delete("/:id", (req, res) => {
  res.json(`You have reached the blog delete route`);
});

module.exports = router;
