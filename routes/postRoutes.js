const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

// localhost:3000/posts : and get req and post req
router
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.creatPost);

router
  .route("/:id")
  .get(postController.getOnePost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;
