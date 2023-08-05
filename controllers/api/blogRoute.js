const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_name: req.session.userName,
      owner_id: req.session.user_id,
    });
    newBlog.createdAt = newBlog.createdAt.toLocaleString();
    newBlog.user_name = req.session.userName;
    // newBlog.owner_id = req.session.user_id;

    if (!newBlog) {
      res.status(404).json("something went wrong");
      return;
    }

    res.status(200).json("success");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const newBlog = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.render("dashboard");
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deleteBlog = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.render("dashboard");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
