const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema(
  {
    productId: { type: String },
    quantity: { type: Number, default: 1 },
    insured: { type: String, required: true },
    address: { type: Object },
    premium: { type: Number, required: true },
    effectiveDate: { type: Date },
    duration: { type: Number },
    status: { type: String, default: 'Pending' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Sale', SaleSchema);
