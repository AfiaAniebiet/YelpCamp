const express = require("express");
const router = express.Router();

const campgroundController = require("../controllers/campground.controller");

router.route("/campgrounds").get(campgroundController.getCampgrounds).post(campgroundController.postCampground);
router.route("/campgrounds/new").get(campgroundController.getNewCampgroundForm);
router.route("/campground/:id").get(campgroundController.getCampground);
router.route("/camground/:id/edit").patch(campgroundController.editCampground);

module.exports = router;
