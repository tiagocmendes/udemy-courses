const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/product");

dotenv.config();

const mongodbServer = process.env.MONGODB_SERVER;
mongoose
  .connect(`${mongodbServer}/farmStand`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`INFO: Connected to MongoDB on ${mongodbServer}`))
  .catch((err) => console.log(err));

const seedProducts = [
  {
    name: "Laranja",
    price: 1,
    category: "fruit",
  },
  {
    name: "Couve",
    price: 0.67,
    category: "vegetable",
  },
  {
    name: "Uvas",
    price: 2.45,
    category: "fruit",
  },
  {
    name: "Tomates",
    price: 1.01,
    category: "fruit",
  },
];

Product.insertMany(seedProducts)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
