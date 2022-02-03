# Building a responsive slider

## Added Packages

- The only package I ended up using was clsx for dynamic classes so that I could render things conditionally.

## Issues

- tried a viewport provider but the resizing of the screen was only initiated when actually resizing the screen and not recognizing the window that it was currently in.

  - I left the logic in there and commented it out. I would like to explore more with this method of conditionally rendering for responsive websites for educational purposes later on
  - Upon some reading was able to come to find a resource that could potentially work.
    - https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API

- I used the google page insight tool as instrucuted, and while I got a 97 on the desktop I was only able to achieve 77 for mobile.

  - Looking into the bottleneck, the issue was coming from the api request when obtaining the images.
  - I looked into the network tab when loading the page and realized that the 200kb files were taking the longest.
  - Did some research to see if there was any possible way to potentially either cache these images somewhere or look for alternate smaller picture files on the fakestore docs but came up short.
