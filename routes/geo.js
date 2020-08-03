const {Router} = require('express');
const Geo = require('../models/Geo');
const router = Router();

router.get('/', async (req,res) => {
    try {
        const data = await Geo.find({});
        console.log(data)
        return res.json(data);
    }
    catch (e) {
        res.status(500).json({message: 'error get'});
    }
});

router.get('/:id', async (req,res) => {
    try {
        const data = await Geo.findById(req.params.id);
        return res.json(data);
    }
    catch (e) {
        res.status(500).json({message: 'error get by Id'});
    }
});


router.post('/create', async (req, res) => {
    try {
        const geo = new Geo({
            lat: req.body.lat,
            lng: req.body.lng,
            description: req.body.description,
            date: req.body.date,
        });
        await geo.save();
    } catch (e) {
        res.status(500).json({message: 'error post'})
    }
});

router.put('/edit', async (req, res) => {
    try {
        console.log(req.body)
        await Geo.findOneAndUpdate(req.params.id, req.body, {useFindAndModify: false});
    } catch (e) {
        res.status(500).json({message: 'error edit'})
    }
});

router.delete('/:id', async (req, res) => {
    try {
        console.log(req.params);
        await Geo.findOneAndDelete(req.params.id);
    } catch (e) {
        res.status(500).json({message: 'error delete'})
    }
});


module.exports = router;