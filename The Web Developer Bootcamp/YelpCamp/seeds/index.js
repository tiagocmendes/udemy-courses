const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Campground = require("../models/campground");

const cities = require("./cities");
const { descriptors, places } = require("./seedHelpers");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_SERVER + "/yelp-camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB!"))
  .catch((err) => console.log("Error: ", err.message));

randomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const seedDB = async () => {
  await Campground.deleteMany({});
  let campgrounds = [];
  for (let i = 0; i < 100; i++) {
    const descriptor = randomElement(descriptors);
    const place = randomElement(places);
    const campground = new Campground({
      author: "61b7e4bfa570ffa540cbfe8c",
      title: `${descriptor} ${place}`,
      price: Math.floor(Math.random() * (999 - 0.5 + 1) + 0.5),
      description: descriptor,
      location: randomElement(cities).city,
      image: `https://source.unsplash.com/collection/483251`,
    });
    campgrounds.push(campground);
  }
  await Campground.insertMany(campgrounds);
};

seedDB();
