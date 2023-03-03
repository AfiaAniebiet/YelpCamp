const express = require("express");
const router = express.Router();

const campgroundController = require("../controllers/campground.controller");
const { joiValidator } = require("../middleware/joi.middleware");

router.route("/campgrounds").get(campgroundController.getCampgrounds).post(campgroundController.postCampground);
router.route("/campgrounds/new").get(campgroundController.getNewCampgroundForm);
router
  .route("/campground/:id")
  .get(campgroundController.getCampground)
  .patch(campgroundController.editCampground)
  .delete(campgroundController.deleteCampground);
router.route("/campground/:id/edit").get(campgroundController.getEditCampground);

module.exports = router;
