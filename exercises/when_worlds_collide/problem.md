{cyan}──────────────────────────────────────────────────────────────────────{/cyan}

What an ominous title, isn't it? "When Worlds Collide..." I promise you, this isn't too scary. It's not like JavaScript and Silverlight are colliding, which would be very scary.

{cyan}──────────────────────────────────────────────────────────────────────{/cyan}

Let's imagine a situation. You have your groundbreaking code. Others may not say it's groundbreaking, but you wrote it, so it is. You're pretty proud of it, too, and you should be! You write great code. In this code, after one second, it outputs a message. This is queued by `setTimeout`, since you know you should be using those fancy Web Application APIs. However, you also have a network request. The request is to an old, slow, ASP.NET powered web page. It takes about two seconds for it to complete, since it's very cludgy. You used a synchronous API to request this web page, though. So, what happens to your message meant to be displayed after one second? Does it still display after one second, as intended, or does it take longer? In what order does it show up? 

This situation doesn't have to be hypothetical, as I've conjured more code into your current directory, as `03-worlds-collide.js`. The only difference is in our case, I'm using the `sleep` function from before to simulate the network request.

When you are ready, run `{appname} verify 03-worlds-collide.js`

