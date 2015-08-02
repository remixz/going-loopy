const path = require('path')
const print = require('workshopper/print-text')

module.exports = function (exercise) {
  exercise.addCleanup(function () {
    print.text(this.name, this.dir, 'txt', '{yellow}Bruggie left you a message: {/yellow}\n')
    print.file(this.name, this.dir, path.join(this.dir, './message.md'))
  })

  return exercise
}
