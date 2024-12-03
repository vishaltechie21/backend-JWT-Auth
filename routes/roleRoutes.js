const express = require('express');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Protected route for admin only
router.get('/admin-dashboard', protect, authorize(['admin']), (req, res) => {
  res.json({ message: 'Welcome to the Admin Dashboard' });
});

// Protected route for user and admin
router.get('/user-dashboard', protect, authorize(['user', 'admin']), (req, res) => {
  res.json({ message: 'Welcome to the User Dashboard' });
});

module.exports = router;
