const mongoose = require("mongoose");
const { toJSON, paginate } = require('./plugins');

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      max: 40,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type:  mongoose.SchemaTypes.ObjectId,
      ref: "Category",
      required: true,
    },
    rating: { type: Number, min: 1, max: 5 },

    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },

    city: { type: String, required: true, trim: true },
    rented: Boolean,
    images: Array,
    daily_price: {
      type: Number,
      required: true,
    },
    weekly_price: Number,
    monthly_price: Number,
    value: { type: Number, required: true },
    quantity: { type: Number, required: true },
    min_rental_days: Number,
    zipcode: String,
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
itemSchema.plugin(toJSON);
itemSchema.plugin(paginate);




const Item = mongoose.model("Item", itemSchema);



module.exports = Item;
