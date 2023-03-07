const express = require("express");
const router = express.Router();

const campgroundController = require("../controllers/campground.controller");
const reviewController = require("../controllers/reviews.controller");
const { validateCampground, validateReview } = require("../middleware/joi.middleware");

router
  .route("/campgrounds")
  .get(campgroundController.getCampgrounds)
  .post(validateCampground, campgroundController.postCampground);
router.route("/campgrounds/new").get(campgroundController.getNewCampgroundForm);
router
  .route("/campground/:id")
  .get(campgroundController.getCampground)
  .patch(campgroundController.editCampground)
  .delete(campgroundController.deleteCampground);
router.route("/campground/:id/edit").get(campgroundController.getEditCampground);

router.route("/campground/:id/reviews").post(validateReview, reviewController.postReview);

module.exports = router;
