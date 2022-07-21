require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./index.router");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use(routes);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));
