const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/auth');

const Link = require('../models/Link');
const User = require('../models/User');

// @route   GET api/links
// @desc    Get all users links
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const links = await Link.find({ user: req.user.id }).sort({ date: -1 });
    res.json(links);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/links
// @desc    Add new link
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
router.put('/:id', auth, async (req, res) => {
  const { name, hyperLink, tag } = req.body;

  // Build link object
  const linkFields = {};
  if (name) linkFields.name = name;
  if (hyperLink) linkFields.hyperLink = hyperLink;
  if (tag) linkFields.tag = tag;

  try {
    let link = await Link.findById(req.params.id);

    if (!link) return res.status(404).json({ msg: 'Link not found' });

    // Make sure user owns link
    if (link.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not Authorized' });
    }

    link = await Link.findByIdAndUpdate(
      req.params.id,
      { $set: linkFields },
      { new: true }
    );

    res.json(link);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/links/:id
// @desc    Delete link
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const link = await Link.findById(req.params.id);

    if (!link) return res.status(404).json({ msg: 'Link not found' });

    // Make sure user owns link
    if (link.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not Authorized' });
    }

    await Link.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Link removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
