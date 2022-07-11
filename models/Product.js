const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    policyCode: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    sumInsured: { type: Number, required: true },
    sumInsuredRemark: { type: String },
    currency: { type: String, default: 'usd' },
    premium: { type: Number, required: true },
    fixedPremium: { type: Boolean, default: true },
    category: { type: String, required: true },
    unit: { type: String },
    remark: { type: String },
    covers: { type: Array },
    image: { type: String },
    intro: { type: String },
    creator: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
