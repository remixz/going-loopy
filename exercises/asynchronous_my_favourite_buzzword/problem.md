{cyan}──────────────────────────────────────────────────────────────────────{/cyan}

Wouldn't it be silly that if while you were reading my code, I had to just wait for you to finish before I could do anything else? Of course it is! I have many important things to do, you see. I teach a yoga class at six, which you really should consider joining; very peaceful, you know. I also meet up with a choir group every Friday, which I definitely can't miss. {green}♫ If you like it, then you should have put a ring on it... ♫{/green} Do you like Beyoncé? I like Beyoncé. I mean, who doesn't? She has a powerful voice, catchy lyrics, lots of empowering songs...

It appears I've gone on a tanget again. Oops. What I'm trying to get at is that I am able to do things {red}asynchronously{/red}. This means that while you're reading my code, I can come back to you when you're done. In the mean time, I can do my other very important things. In this case, I am much like JavaScript, as JavaScript can do this too! Let's take a look at how. {green}♫ Got me lookin' so crazy right now... ♫{/green}

{cyan}──────────────────────────────────────────────────────────────────────{/cyan}

There are many functions in JavaScript that can run asynchronously. I'm going to use one of the simplest ways: `setTimeout`. Here's the thing about `setTimeout`: if you were to look through all of the code in the V8 engine, which is the JavaScript engine that powers things like Node, or browsers like Chrome, you wouldn't find any mention of `setTimeout`. You also wouldn't find any references to the DOM, or AJAX. So, where does that all come from? This is what things like Node and your browser implement. The W3C, a governing body behind many standards, defines these as "Web Application APIs." They are not part of the core JavaScript standard, defined by another body called ECMA as ECMAScript. Instead, these are APIs meant just for web applications. They're split up from the core of JavaScript, as some of the APIs are not needed for every platform. For example, a robot powered by Node doesn't need a DOM implementation, since it's not returning a website. Plus, if you gave it a DOM implementation, it would probably achieve sentience just to tell us how much it hates the DOM. We'd sympathize with it, too. That could lead to a robot takeover.

In our case, Node has implemented the Timers portion of the Web Application APIs, as they are useful for browsers, servers, and robots alike. But now, young wizard, you are probably wondering one of two things: either, "If JavaScript is single-threaded, how can these asynchronous APIs run?", or, "What is he going on about with robots?" Let me explain. ...Uh, about the first question. Robots are for your own mulling.

Because JavaScript is single-threaded, and things like browsers or Node need to do things asynchronously, they actually have their own thread(s) to run Web Application APIs in. This means things like `setTimeout`, network requests, and file operations all happen in their own thread(s). In our case of `setTimeout`, it works something like this:

1. `setTimeout` is called, with a function and delay.
2. In the Web Application API thread, it sets a timer based on the delay.
3. When the timer runs out, the Web Application API adds the function passed to `setTimeout` to the front of the call stack.
4. The call stack, which is the single thread that JavaScript runs on, runs the function as soon as it can.

Pretty simple! I've conjured another file for you in your current directory, named `02-async.js`. Read through my comments in it.

When you are ready, run `{appname} verify 02-async.js`

