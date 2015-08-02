{cyan}──────────────────────────────────────────────────────────────────────{/cyan}

Oh, young wizard, you have much to learn! I am so excited to teach you all of these concepts, as teaching is the true magic of JavaScript. Well, maybe `Stream`s are too... or `Generator`s, those are sure neat... ah, I'm getting ahead of myself. Onwards!

{cyan}──────────────────────────────────────────────────────────────────────{/cyan}

The big thing you need to know about JavaScript is that it's a single-threaded language. That's Professional Wizard™ talk for all of your code runs one thing at a time. Well, that's the Mostly Right™ definition, but the simplest way to visualize it. Essentially, your JS engine will parse the code, and put each function into what's called the "call stack." Then, your JS engine will go through the call stack in order, and run each. The event loop is what dictates the moving forward of the call stack. Once it has completed running one function, it moves onto the next. Keep in mind that because it is single threaded, it can't move onto the next function until the previous function has completely finished, or returned. So, if you have a function that takes, let's say, 3 seconds to return, it can't run the next function in the call stack for 3 seconds. These functions are known as synchronous functions.

Let's see all of this for ourselves. In your current directory, I have a conjured a file named `01-nap-time.js`. Open it with your favourite text editor, and read through it, as I have put my great words of wisdom in the comments for you. 

When you are ready, run `{appname} verify 01-nap-time.js`

