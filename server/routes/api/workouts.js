const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Workouts
router.get('/', async (req, res) => {
    const workouts = await loadWorkoutsCollection();
    res.send(await workouts.find({}).toArray());
});

//Add Workout
router.post('/', async (req, res) => {
    const workouts = await loadWorkoutsCollection();
    await workouts.insertOne({
        naziv: req.body.naziv,
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

//Delete workout
router.delete('/:id', async (req, res)=> {
    const workouts = await loadWorkoutsCollection();
    await workouts.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
});

async function loadWorkoutsCollection(){
    const client = await mongodb.MongoClient.connect (
        'mongodb+srv://Miki:mikiMIKI@cluster0.exnxd.mongodb.net/<dbname>?retryWrites=true&w=majority', {
            useNewUrlParser: true
        }
    );
    return client.db('DWA').collection('workouts');
}

module.exports = router;