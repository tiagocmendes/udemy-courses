const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/moviesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);

Movie.insertMany([
  {
    title: "Harry Potter e a Pedro Filosofal",
    year: 1999,
    score: 9.9,
    rating: "Incredible",
  },
  {
    title: "Harry Potter e a Câmara dos Segredos",
    year: 1999,
    score: 9.9,
    rating: "Incredible",
  },
  {
    title: "Harry Potter e o Prisioneiro de Azkaban",
    year: 1999,
    score: 9.9,
    rating: "Incredible",
  },
]).then((data) => {
  console.log(data);
});
