const mongoose = require("mongoose");

function main() {
  mongoose.connect(process.env.DATABASE_URL);
  console.log("conectou ao mondo");
}

main().catch((err) => console.log(err));

module.exports = { mongoose };
