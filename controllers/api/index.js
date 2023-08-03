const router = require("express").Router();
const blogRoute = require("./blogRoute");
const userRoute = require("./userRoute");
const commentRoute = require("./commentRoute");

router.use("/user", userRoute);
router.use("/blog/:id/comment", commentRoute);
router.use("/blog", blogRoute);

module.exports = router;
