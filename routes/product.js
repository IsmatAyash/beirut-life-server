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

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  const {
    title,
    description,
    covers,
    premium,
    sumInsured,
    sumInsuredRemark,
    fixedPremium,
  } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        premium,
        sumInsured,
        sumInsuredRemark,
        fixedPremium,
        covers,
      },
      { new: true }
    );
    res.status(200).json(product);
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
    sumInsuredRemark: req.body.sumInsuredRemark,
    premium: req.body.premium,
    currency: req.body.currency,
    fixedPremium: req.body.fixedPremium,
    category: req.body.category,
    unit: req.body.unit,
    remark: req.body.remark,
    covers: req.body.covers,
    image: req.body.image || '',
    intro: req.body.intro || '',
    creator: req.body.creator,
  });

  try {
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
