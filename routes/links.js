const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Link = require('../models/Link');

// @route   GET api/links
// @desc    Get all users links
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const links = await Link.find({ link: req.user.id }).sort({ date: -1 });
    res.json(links);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/links
// @desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add link');
});

// @route   PUT api/links/:id
// @desc    Update link
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update link');
});

// @route   DELETE api/links/:id
// @desc    Delete link
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete link');
});

module.exports = router;
