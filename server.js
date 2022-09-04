const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

mongoose.connect("mongodb://127.0.0.1:27017/social-network", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("debug", true);

app.listen(PORT, () => console.log(`App is listening on http://localhost:${PORT}`));
