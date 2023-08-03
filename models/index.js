const User = require("./User");
const Comment = require("./Comment");
const Blog = require("./Blog");

// Blog has a user
Blog.belongsTo(User);
User.hasMany(Blog);

Comment.belongsTo(User);
User.hasMany(Comment);

Blog.hasMany(Comment);
Comment.belongsTo(Blog);

module.exports = { User, Comment, Blog };
