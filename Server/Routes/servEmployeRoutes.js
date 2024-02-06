const express = require('express');
const router = express.Router();
const ServEmployer = require('../models/servEmploye');

router.get('/servEmployers', async (req, res) => {
    try {
        const servEmployers = await ServEmployer.find();
        res.json(servEmployers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;