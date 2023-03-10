const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/reviews.controller");
const { validateReview } = require("../middleware/joi.middleware");

router.route("/campground/:id/reviews").post(validateReview, reviewController.postReview);
router.route("/campground/:id/reviews/:reviewId").delete(reviewController.deleteReview);

module.exports = router;
