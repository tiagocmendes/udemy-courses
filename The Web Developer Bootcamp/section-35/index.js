const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  {
    id: uuid(),
    username: "Tiago",
    text: "lol that is so funny!",
  },
  {
    id: uuid(),
    username: "James Bond",
    text: "I'm the real double-oh-seven",
  },
  {
    id: uuid(),
    username: "Mario123",
    text: "Whatttt",
  },
  {
    id: uuid(),
    username: "onlysayswoof",
    text: "miauuuu",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, text: comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((comment) => comment.id == id);
  res.render("comments/show", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((comment) => comment.id == id);
  comment.text = req.body.text;
  res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((comment) => comment.id == id);
  res.render("comments/edit", { comment });
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
