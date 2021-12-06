const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const methodOverride = require("method-override");

dotenv.config();

const Product = require("./models/product");

const mongodbServer = process.env.MONGODB_SERVER;
mongoose
  .connect(`${mongodbServer}/farmStand`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`INFO: Connected to MongoDB on ${mongodbServer}`))
  .catch((err) => console.log(err));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const categories = ["fruit", "vegetable", "dairy"];

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

app.get("/products/new", async (req, res) => {
  res.render("products/new");
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/details", { product });
});

app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product, categories });
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
  });
  res.redirect(`/products/${product._id}`);
});

app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.redirect(`/products/${product._id}`);
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

  
const port = process.env.PORT;
app.listen(port, () => console.log(`INFO: Listening on port ${port}`));
