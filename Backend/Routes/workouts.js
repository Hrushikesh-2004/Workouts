const express = require('express')
const workoutModel = require('../models/workoutModel')
const router = express.Router()

//importing all the controll methods
const {getWorkouts,  getWorkout,  createWorkout,  deleteWorkout,  updateWorkout} = require('../controller/workoutController')

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router