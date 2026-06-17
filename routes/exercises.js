const express = require('express');
const router = express.Router();

// Get exercises
router.get('/:language/:level', (req, res) => {
  res.json({ message: 'Get exercises - to be implemented' });
});

// Get exercise details
router.get('/:exerciseId', (req, res) => {
  res.json({ message: 'Get exercise details - to be implemented' });
});

// Submit exercise solution
router.post('/submit', (req, res) => {
  res.json({ message: 'Submit exercise solution - to be implemented' });
});

// Get hint
router.post('/get-hint', (req, res) => {
  res.json({ message: 'Get hint - to be implemented' });
});

module.exports = router;
