require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { routes } = require("./routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use(routes);

app.listen(4000, () => console.log("Server runninbg on port 4000"));
