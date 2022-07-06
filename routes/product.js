const router = require('express').Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Add product
router.post('/add', async (req, res) => {
  const newProduct = new Product({
    policyCode: req.body.policyCode,
    title: req.body.title,
    description: req.body.description,
    sumInsured: req.body.sumInsured,
    premium: req.body.premium,
  });

  try {
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
