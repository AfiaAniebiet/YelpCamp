const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("../seeds/cities");

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
    });
    await camp.save();
  }
};
module.exports = seedDB;
