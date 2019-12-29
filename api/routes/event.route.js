const express = require('express')
const eventRoutes = express.Router()
const eventModel = require('../models/reginaitevents.model')

//get all events
eventRoutes.route('/').get( (req,res) => {
    eventModel.find({}).exec((err, events) => {
        if (err) {
            console.log(err);
        } else {
            res.json(events);
        }
    })
})

//edit event by id
eventRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    eventModel.find({'name': id}, (err, events) => {
        res.json(events);
    })
  });

// create event
eventRoutes.route('/create').post( (req,res) => {
    let newEvent = req.body
    
    eventModel.create(newEvent, (err,small) => {
        if (err) res.status(400).send("unable to save data")
        else res.status(200).json([{'result': 'ok'}])
    })
})

//delete event by id
eventRoutes.route('/delete/:id').get(function (req, res) {
    let id = req.params.id;
    eventModel.deleteOne({'name': id}, (err) => {
        if (err) res.status(400).send("unable to save data")
        else res.status(200).json([{'result': 'ok'}])
    })
});

//update event by id
eventRoutes.route('/update/:id').post( (req, res) => {
    let currentEvent = req.body
    let id = req.params.id
    let newEvent = {
        'name': currentEvent.name,
        'organizer': currentEvent.organizer,
        'orgURL': currentEvent.orgURL,
        'startdate': currentEvent.startdate,
        'enddate': currentEvent.enddate,
        'location': currentEvent.location,
        'description': currentEvent.description,
        'img': currentEvent.img
    }

    eventModel.updateOne({'name': id}, {$set: newEvent}, (err,small) => {
        if (err) res.status(400).send("unable to save data")
        else res.status(200).json([{'result': 'ok'}])
    });
});

module.exports = eventRoutes