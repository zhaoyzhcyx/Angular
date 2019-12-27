const express = require('express')
const app = express()
const cors = require('cors')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const eventsModel = require('./models/reginaitevents.model')
const eventRoute = require('./routes/event.route')
const url = 'mongodb://localhost:27017/public'

require('dotenv').config()
var mongoDB = process.env.MONGO_CONNECT_URI
mongoose.Promise = global.Promise;
mongoose.connect(url,{useUnifiedTopology: true, useNewUrlParser: true}).then(
    () => {console.log('Mongo Database is connected')},
    err => {console.log('can not connect to the Mongo database')}
)

app.use(bodyparser.json())
app.use(cors());
app.use('/events', eventRoute)
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening the port ${port}`)
})