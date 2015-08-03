{cyan}──────────────────────────────────────────────────────────────────────{/cyan}

Could this be it? The light at the end of our tunnel? Why, young and wise wizard, it is! It turns out the event loop was not {red}The Monster at the End of This Workshopper{/red}, but instead a delightful piece of JavaScript that makes its heart boom. Let's recap what we learned.

{cyan}──────────────────────────────────────────────────────────────────────{/cyan}

* JavaScript, at its core, has an event loop and a call stack, among other things. 
* When the event loop runs, it grabs the first item in the call stack for the JavaScript engine to run.
* The JavaScript engine is single-threaded, so it cannot move onto the next item until the current has finished.
* To overcome this, things such as browsers and Node implement Web Application APIs, which run in separate threads.
* When a Web Application API finishes, it adds whatever function given to it (whether it be a callback, a promise, an event, etc.) to the front of the call stack.
* Even if a function is added to the front of the call stack, it cannot interrupt the current running function, and must wait for the current running function to finish.

Let's call this quest finished! In the book! DONEZO! Run `{appname} verify .` to complete this quest.
