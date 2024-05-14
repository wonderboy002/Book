const mongoose = require("mongoose");
const placeSchema = new mongoose.Schema(
  {
    owner : {
       type : mongoose.Schema.Types.ObjectId,
       ref : 'User'  
    },
    title: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    perks: {
      type: String,
    },
    checkIn: {
      type: Number,
      required: true,
    },
    checkOut: {
      type: Number,
      required: true,
    },
    maxGuests: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const Place = new mongoose.Model("Place", placeSchema);
module.exports = { Place };
