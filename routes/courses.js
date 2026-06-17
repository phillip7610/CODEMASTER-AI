const express = require('express');
const router = express.Router();

// Get available languages
router.get('/languages', (req, res) => {
  res.json({ message: 'Get available languages - to be implemented' });
});

// Get levels for language
router.get('/:language/levels', (req, res) => {
  res.json({ message: 'Get levels for language - to be implemented' });
});

// Get lessons
router.get('/:language/:level/lessons', (req, res) => {
  res.json({ message: 'Get lessons - to be implemented' });
});

// Get lesson details
router.get('/lesson/:lessonId', (req, res) => {
  res.json({ message: 'Get lesson details - to be implemented' });
});

module.exports = router;
