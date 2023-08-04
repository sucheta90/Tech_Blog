const router = require("express").Router();
const { User, Blog, Comment } = require("../models");
const checkAuth = require("../utils/auth");

//Show all blogs
router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
        },
      ],
    });
    const blogs = blogData.map((blog) => {
      return blog.get({ plain: true });
    });

    res.render("homepage", {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a specific blog and it's comments
router.get("/blog/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: [User, Comment],
          attributes: ["name", { exclude: ["password"] }],
        },
      ],
    });
    const blog = blogData.get({ plain: true });
    res.render("blog", { ...blog, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Using the middleware to check auth
router.get("/profile", checkAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { excludes: ["password"] },
      include: [{ model: Blog }],
    });
    const user = userData.get({ plain: true });
    res.render("profile", {
      ...user,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", checkAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { excludes: ["password"] },
      include: [{ model: Blog }],
    });
    const user = userData.get({ plain: true });
    res.render("dashboard", {
      ...user,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
  // If loggedIn: true? redirect user to the /profile route
  if (req.session.loggedIn) {
    res.redirect("/profile");
    return;
  }
  // else render the login page
  res.render("signup");
});

// If user choose to login
router.get("/login", (req, res) => {
  // If loggedIn: true? redirect user to the /profile route
  if (req.session.loggedIn) {
    res.redirect("/profile");
    return;
  }
  // else render the login page
  res.render("login");
});

module.exports = router;
