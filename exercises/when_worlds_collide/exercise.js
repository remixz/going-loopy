const path = require('path')
const boilerplate = require('workshopper-boilerplate')
const run = require('../../lib/run')
const bruggieMessage = require('../../lib/bruggie-message')

var exercise = require('workshopper-exercise')()
exercise = boilerplate(exercise)
exercise = run(exercise)
exercise = bruggieMessage(exercise)

exercise.addBoilerplate(path.join(__dirname, './03-worlds-collide.js'))

module.exports = exercise
