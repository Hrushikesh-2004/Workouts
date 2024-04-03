// require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express')
const workoutRoutes = require('./Routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json())

// app.use((req, res, next) => {
//   console.log(req.path, req.method)
//   next()
// })

// routes
app.use('/api/workouts', workoutRoutes)

// listen for requests

mongoose.connect("mongodb+srv://mightguy72000:Mightguy%40123@cluster0.p7ukxu5.mongodb.net/") 
.then( () => {
    console.log("Connected to the database succesfully")
    app.listen(5000, () => {
      console.log('listening on port')
    })
})
.catch((error) =>{
    console.log("Error while connecting to the database", error);
})