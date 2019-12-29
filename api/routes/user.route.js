const express = require('express')
const userRoutes = express.Router()
const userModel = require('../models/users.model')

//get username
userRoutes.route('/read/:username').get(function (req, res) {
    userModel.find({username: req.params.username}).exec((err, users) => {
        res.json(users)
    })
});

//check username and pw
userRoutes.route('/read/:username/:password').get(function (req, res) {
    userModel.find({username: req.params.username, password: req.params.password}).exec((err, users) => {
        if (users.length==0) {
            res.status(400).send("unable to find data")
        }
        else res.status(200).json([{'result': 'ok'}])
    })
});

//check if the email exists
userRoutes.route('/reademail/:email').get(function (req, res) {
    userModel.find({email: req.params.email}).exec((err, emails) => {
        res.json(emails)
    })
});

// create user
userRoutes.route('/create').post( (req,res) => {
    let newUser = req.body
    
    userModel.create(newUser, (err,small) => {
        if (err) {
            res.status(400).send("unable to save data")
        }
        else res.status(200).json([{'result': 'ok'}])
    })
})

module.exports = userRoutes