var express = require('express');
const Smoothie = require('../models/smoothie');

//telecharge express-validatoir pour test, (desactiver le validator front)
const {
    check,
    validationResult
} = require('express-validator'); 

var router = express.Router();

/* GET users listing. */
router.get('/list', async (req, res, next) => {
    try {
        const smoothies = await Smoothie.find({});
        console.log(smoothies);
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

router.post('/add', [
        check('title').not().isEmpty().withMessage("Le nom ne peut être vide"),
    ], async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        res.status(400).send({
            errors: errors.array()
        });
        return;
    }
    let newSmoothie = new Smoothie();
    console.log(req.body)
    newSmoothie.title = req.body.title;
    newSmoothie.features = req.body.features;
    newSmoothie.ingredients = req.body.ingredients;
    newSmoothie.advice = req.body.advice;
    newSmoothie.description = req.body.description;
    newSmoothie.steps = req.body.steps;
    newSmoothie.photo = req.body.photo;

    try {
        const smoothie = await newSmoothie.save(); //enregistre en bdd
        res.send(smoothie);// affichera dans le form avec le new id
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = router;
