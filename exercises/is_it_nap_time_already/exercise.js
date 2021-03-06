const path = require('path')
const boilerplate = require('workshopper-boilerplate')
const run = require('../../lib/run')
const bruggieMessage = require('../../lib/bruggie-message')

var exercise = require('workshopper-exercise')()
exercise = boilerplate(exercise)
exercise = run(exercise)
exercise = bruggieMessage(exercise)

exercise.addBoilerplate(path.join(__dirname, './01-nap-time.js'))

module.exports = exercise
