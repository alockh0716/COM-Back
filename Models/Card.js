const mongoose = require('mongoose');

// Define the Card Schema
const CardSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, index: true },
  type: { type: String, required: true, index: true },
  gauge_cost: { type: Number, index: true },  // Index for filtering by cost
  attack: Number,
  defense: Number,
  effect: { type: String, required: true },
  flavor_text: String,
  subtypes: [{ type: String, index: true }],  // Index for searching multi-typed cards
  set: { type: String, index: true },  // Index for tracking expansions
}, { timestamps: true });

// Create Indexes
CardSchema.index({ name: 1 });  // Speeds up search by name
CardSchema.index({ type: 1 });  // Allows filtering by type
CardSchema.index({ gauge_cost: 1 });  // Optimizes cost-based queries
CardSchema.index({ set: 1 });  // Helps retrieve cards by expansion

// Export the model
module.exports = mongoose.model('Card', CardSchema);
