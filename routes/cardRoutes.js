const express = require('express');
const Card = require('./models/Card.js');

const router = express.Router();

// Add a new card
router.post('/add', async (req, res) => {
  try {
    const newCard = new Card(req.body);
    await newCard.save();
    res.status(201).json({ message: "Card added successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all cards
router.get('/all', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
