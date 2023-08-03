const router = require("express").Router();

router.post("/", (req, res) => {
  res.json(`You have reached the comment post route`);
});

router.put("/:id", (req, res) => {
  res.json(`You have reached the comment edit route`);
});

router.delete("/:id", (req, res) => {
  res.json(`You have reached the comment delete route`);
});

module.exports = router;
