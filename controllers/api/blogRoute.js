const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    // if (!newBlog) {
    //   res.status(404).json("something went wrong");
    //   return;
    // }
    res.status(200).json("success");
  } catch (err) {
    res.status(500).json(err);
  }
  // res.json(`You have reached the blog post route`);
});

router.put("/:id", (req, res) => {
  res.json(`You have reached the blog edit route`);
});

router.delete("/:id", (req, res) => {
  res.json(`You have reached the blog delete route`);
});

module.exports = router;
