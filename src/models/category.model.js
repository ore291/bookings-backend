const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const categorySchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    parent: {
      type: String,
      default: "root",
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
categorySchema.plugin(toJSON);


const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
