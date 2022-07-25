const mongoose = require("mongoose");

async function main() {
  mongoose.connect(process.env.MONGOURI);
  console.log("mongodb conected!");
}

main().catch((err) => console.log(err));

module.exports = mongoose;
