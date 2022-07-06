require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoute = require('./routes/product');
const saleRoute = require('./routes/sale');
const stripeRoute = require('./routes/stripe');
const Stripe = require('stripe');

const app = express();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB Connection Successful'))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());
app.use('/api/product', productRoute);
app.use('/api/sale', saleRoute);
app.use('/api/stripe', stripeRoute);

app.listen(process.env.PORT || 5001, () => {
  console.log(
    `Server is running. Listening to port ${process.env.PORT || 5001}`
  );
});
