/**
  Be cautious, young wizard. Here be dragons. Or, in this case, an implementation
  of a sleep function. As tempting as it may be, never use it in your production
  code. You will soon find out why.
 */

/**
  This is the node module `thread-sleep`. http://npm.im/thread-sleep
  It takes one parameter, a number. This number represents the number of
  milliseconds it will pause the thread for. I have used this function to
  represent a slow function, such as reading a large file, or requesting
  a slow web page. It is a synchronous function. Remember that!
 */
var sleep = require('thread-sleep')

// This function below will execute as soon as the process starts, as the event loop is free,
// and it is the first in the call stack.
console.log('Treading slowly...')

// Then, the `sleep` function is ran, as it is the second function in the call stack.
// The event loop can't run any function in the call stack that is after the `sleep` function
// until the `sleep` function has returned.
sleep(3000)

// Once the sleep function has returned, the event loop runs the next function in the call stack,
// which is the function below.
console.log('Whew, that was slow.')

// What simple code that was! Run this file with the workshopper, and I shall tell you more.
