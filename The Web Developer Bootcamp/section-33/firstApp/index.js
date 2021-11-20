const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/cats", (req, res) => {
  res.send("meow");
});

app.get("/dogs", (req, res) => {
  res.send("woof");
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`Welcome to the ${subreddit} subreddit with id ${postId}`);
});

app.get("/query", (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.send("Please provide a query string");
  }
  res.send(`You asked for ${q}`);
});

app.get("*", (req, res) => {
  res.send("I DON'T KNOW THAT PATH!");
});

app.listen(port, () => console.log(`firstApp listening on port ${port}!`));
