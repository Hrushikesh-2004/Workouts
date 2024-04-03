// require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./Routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// listen for requests
app.listen(5000, () => {
  console.log('listening on port')
})