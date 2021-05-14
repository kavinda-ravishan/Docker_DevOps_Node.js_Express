const express = require("express");
const postController = require("../controllers/postController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// localhost:3000/posts : and get req and post req
router
  .route("/")
  .get(protect, postController.getAllPosts)
  .post(protect, postController.creatPost);

router
  .route("/:id")
  .get(protect, postController.getOnePost)
  .patch(protect, postController.updatePost)
  .delete(protect, postController.deletePost);

module.exports = router;
