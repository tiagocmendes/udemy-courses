const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => res.render("home"));

app.get("/random", (req, res) => {
  const rand = Math.floor(Math.random() * 100);

  res.render("random", { rand, title: "Random Number" });
});

app.get("/pokemons", (req, res) => {
  const pokemons = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];
  res.render("pokemons", {
    pokemons,
    
    title: "Pokemons",
    favoritePokemon: pokemons[1],
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
