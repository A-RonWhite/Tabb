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
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, hyperLink, tag } = req.body;

    try {
      const newLink = new Link({
        name,
        hyperLink,
        tag,
        user: req.user.id,
      });

      const link = await newLink.save();

      res.json(link);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

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
