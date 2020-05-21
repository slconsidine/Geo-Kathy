const router = require("express").Router();
const postsController = require("../../controllers/postsControllers");

// Matches with "/api/posts"
router.route("/")
  .get(postsController.findAll)
  .post(postsController.create);

// Matches with "/api/posts/:location"
router.route("/:location")
  .get(postsController.findByLocation)


module.exports = router;