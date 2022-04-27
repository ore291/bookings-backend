const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");



const reviewSchema = new mongoose.Schema(
    {
      itemId: { type:  mongoose.SchemaTypes.ObjectId, ref: "Item" },
      userId: { type:  mongoose.SchemaTypes.ObjectId, ref: "User" },
      rating: { type: Number, required: true, min: 1, max: 5 },
      review: String,
    },
    { timestamps: true }
  );

// add plugin that converts mongoose to json
reviewSchema.plugin(toJSON);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;