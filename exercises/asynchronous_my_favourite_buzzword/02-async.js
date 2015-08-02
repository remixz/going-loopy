/**
  Here we have a recreation of our first example, but using asynchronous APIs.
 */

// As with our first example, this function is immediately called, as the
// event loop is free, and it is the first function in the call stack.
console.log('Treading slowly...')

// Now, we call `setTimeout`, a Web Application API. It queues the function passed to it
// to run after the delay specified, in milliseconds. `setTimeout` returns immediately, so
// it does not block the event loop, which means that any functions after it would run
// as soon as possible.
setTimeout(function () {
  console.log('Whew, that was slow.')
}, 3000)

// Alright, give this a go with the workshopper. I'll wait. And maybe sing, too.
