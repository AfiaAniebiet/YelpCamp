const Review = require("../models/review.model");
const Campground = require("../models/campground.model");

const postReview = async (req, res, next) => {
  const campground = await Campground.findById(req.params.id);
  const review = new Review(req.body.review);
  campground.reviews.push(review);
  await review.save();
  await campground.save();
  res.redirect(`/api/v1/campground/${campground._id}`);
};

module.exports = {
  postReview,
};
