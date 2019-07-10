var express = require('express');
const Smoothie = require('../models/smoothie');

var router = express.Router();

/* GET users listing. */
router.get('/list', async (req, res, next) => {
    try {
        const smoothies = await Smoothie.find({});
        res.send(smoothies);
    }
    catch {
        console(err);
        res.status(400).send(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        //const smoothie = await Smoothie.findOne({_id : id});
        const smoothie = await Smoothie.findById(id);
        res.send(smoothie);
    }
    catch {
        console(err);
        res.status(400).send(err);
    }
});

module.exports = router;
