const Campground = require("../models/campground.model");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../utils/CustomError");

// Get all campgrounds
const getCampgrounds = async (req, res, next) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", {
    campgrounds,
  });
  //res.status(StatusCodes.OK).json({ campgrounds });
};

const getCampground = async (req, res, next) => {
  const { id: campgroundId } = req.params;
  const campground = await Campground.findById({ _id: campgroundId });
  //const campground = await Campground.findById(req.params.id);
  res.render("campgrounds/show", {
    campground,
  });
};

const getNewCampgroundForm = async (req, res, next) => {
  res.render("campgrounds/new");
};

const postCampground = async (req, res, next) => {
  const campground = await Campground.create(req.body.campground);
  //const campground = new Campground(req.body.campground);
  // await campground.save();
  res.redirect(`/api/v1/campground/${campground._id}`);
};

const getEditCampground = async (req, res, next) => {
  const campground = await Campground.findById(req.params.id);
  res.render("campgrounds/edit", {
    campground,
  });
};

const editCampground = async (req, res, next) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
  res.redirect(`/api/v1/campground/${campground._id}`);
};

const deleteCampground = async (req, res, next) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndDelete(id);
  res.redirect(`/api/v1/campgrounds`);
};

module.exports = {
  getCampgrounds,
  getCampground,
  postCampground,
  getNewCampgroundForm,
  editCampground,
  getEditCampground,
  deleteCampground,
};
