const spawn = require('child_process').spawn
const print = require('workshopper/print-text')

module.exports = function (exercise) {
  exercise.addProcessor(function (mode, cb) {
    print.text(this.name, this.dir, 'txt', '\n{yellow}Running the mystical codes...{/yellow}\n')
    var child = spawn(process.execPath, this.args.slice(0, 1))
    child.stdout.pipe(process.stdout)
    child.on('close', function () {
      print.text(this.name, this.dir, 'txt', '\n{yellow}Mystical code complete!{/yellow}')
      setTimeout(cb, 1000) // make sure user sees final output, even if briefly so they scroll up
    })
  })

  return exercise
}
