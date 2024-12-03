const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String, // You need to specify the type
    unique: true, // Apply unique constraint correctly
    required: true, // Optional: ensure the username is required
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'manager', 'user'],
    required: true, // Corrected typo from 'require' to 'required'
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model("User", userSchema);
