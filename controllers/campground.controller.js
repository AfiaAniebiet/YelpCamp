const Campground = require("../models/campground.model");
const { StatusCodes } = require("http-status-codes");

// Get all campgrounds
const getCampgrounds = async (req, res, next) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", {
    campgrounds,
  });
  //res.status(StatusCodes.OK).json({ campgrounds });
};

const getCampground = async (req, res, next) => {
  const campground = await Campground.findById(req.params.id);
  res.render("campgrounds/show", {
    campground,
  });
};

const getNewCampgroundForm = async (req, res, next) => {
  res.render("campgrounds/new");
};

const postCampground = async (req, res, next) => {
  res.send(req.body);
};

const editCampground = async (req, res, next) => {
  res.send("Edit Campground");
};

module.exports = {
  getCampgrounds,
  getCampground,
  postCampground,
  getNewCampgroundForm,
  editCampground,
};
