Nice! Functionally, that was equivalent to the first example, but we used `setTimeout` so that the event loop was never blocked. Whenever you have to delay something, asynchronous APIs are the way to do it.

Now, you might be thinking, "Well, if asynchronous APIs run in another thread, can't I use a synchronous API, and still have my async methods run when I want them to?" Well... no, young wizard. This is where the beast of the event loop bites. Our next chapter shall explain why. Run `going-loopy` to continue.
