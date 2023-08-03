const router = require("express").Router();

router.post("/login", (req, res) => {
  res.json(`You have reached the login route`);
});

router.post("/signup", (req, res) => {
  res.json(`You have reached the signup route`);
});

router.post("/logout", (req, res) => {
  res.json(`You have reached the logout route`);
});

module.exports = router;
