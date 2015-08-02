const bruggieMessage = require('../../lib/bruggie-message')

var exercise = require('workshopper-exercise')()
exercise = bruggieMessage(exercise)

module.exports = exercise
