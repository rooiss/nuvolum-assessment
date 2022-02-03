# Building a responsive slider

Retrieve your data using an HTTP request from this API:
https://fakestoreapi.com/products?limit=5

Also, speed is important to us. Once complete run your project through Google's Page Insights tool. The goal is to get close to if not exactly a 100 "perfect" score on both mobile and desktop

https://pagespeed.web.dev/

Pay close attention to how you organize your code. We want to see how you document your logic with comments.
Send us the GitHub repo so we can review your code and see it in action.

\*It's best to send us a URL of your published app.

## Architectural decisions

-

## Added Packages

- The only package I ended up using was clsx for dynamic classes so that I could render things conditionally.

## Issues

- tried a viewport provider but the resizing of the screen was only initiated when actually resizing the screen and not recognizing the window that it was currently in
  - left the logic in there and commented it out, I would like to explore more with this method of conditionally rendering for responsive websites for educational purposes later on
