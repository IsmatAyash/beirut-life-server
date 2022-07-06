const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    policyCode: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    sumInsured: { type: Number, required: true },
    premium: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
