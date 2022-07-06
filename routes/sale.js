const router = require('express').Router();
const Sale = require('../models/Sale');

router.get('/', async (req, res) => {
  try {
    const sales = await Sale.find();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/add', async (req, res) => {
  const newSale = new Sale({
    policyCode: req.body.policyCode,
    title: req.body.title,
    description: req.body.description,
    sumInsured: req.body.sumInsured,
    premium: req.body.premium,
  });

  try {
    const sale = await newSale.save();
    res.status(201).json(sale);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
