const mongoose = require("mongoose");
const { Schema } = mongoose;

const Pet = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    family: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
    },
    available: {
      type: Boolean,
      required: true,
    },
    user: Object,
    adopter: Object,
  },
  { timestamps: true }
);

module.exports = mongoose.model("pets", Pet);
