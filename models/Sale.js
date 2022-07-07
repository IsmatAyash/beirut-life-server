const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema(
  {
    policyCode: { type: String },
    policyNumber: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    insured: { type: String, required: true },
    address: { type: String },
    telephone: { type: String },
    email: { type: String },
    dateOfBirth: { type: Date },
    nationality: { type: String },
    sumInsured: { type: Number },
    premium: { type: Number, required: true },
    currency: { type: String },
    effectiveDate: { type: Date },
    duration: { type: Number },
    beneficiary: { type: String },
    policyRider: { type: String },
    exclusion: { type: String },
    expiryDate: { type: String },
    status: { type: String, default: 'Pending' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Sale', SaleSchema);
