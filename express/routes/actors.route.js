const express = require('express');
const router = express.Router();
const { findAllActors } = require('../services/actors.service.js');

// GET /actors
router.get('/', async (req, res) => {
    const actors = await findAllActors();
    res.json(actors);
});

module.exports = router;