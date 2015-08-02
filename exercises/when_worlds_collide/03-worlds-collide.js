/**
  This code is using the `sleep` function again, to show off what happens when there's an
  asynchronous function queued, but a synchronous function is running when it's put onto
  the call stack. It's mostly self-explanatory, so this shall be my only comment.
  Pretty terse, huh? I mean I could go on... but, hey, this is important, so let's get on
  with it! Besides, I'll be rambling a bit once you run this code.
 */

var sleep = require('thread-sleep')

setTimeout(function () {
  console.log('This should run first, after 1 second...')
}, 1000)

sleep(2000)
console.log('This should run second, after 2 seconds. Right?')
