**Intro**

This page is meant to serve as a splash page for a few different things.

First, a quick introduction to who I am, share my CV, and offer some writing samples. Maybe eventually I'll create a markdown blog, but I'm not sure I'm that committed to that sort of pursuit.

Second, a page for my dog documentation, because some of my friends enjoy them.

One question I couldn't resolve was how to somehow constrain the one portrait picture of the dog, Coco, on my fosters page, when basically every other photo is more of a landscape layout. I just accepted this a a minor layout flaw. Don and I discussed but I've just prioritized other aspects of polish, so I just set the overall max-width of the modalImg class to find a happy balance between enlarged landscape shots without being so large that the portrait shot is gaudy.

Finally, eventually I hope to integrate my music project into this domain, but right now it's still over on WordPress and my vision for that is well beyond what I can pull off myself.


**Which 3+ features you have included from the below lists to meet the requirements**

As for CSS, first, I worked on the burger menu for mobile viewing. Second, I've also used flexbox and grid to aid with formatting for various screen sizes.

I looked into accessibility issues and I tried to add alt tags, but when I sent my page through the w3 validator it said I can't use alt tags in divs and well, I just don't have the gusto at this point after some insane weekends of work. There were some other issues like li being inside of divs when they're supposed to be in different containers, etc. etc. The contrast I believe is adequate. I shifted some sizes to accommodate for the 44px minimum size, but I'm sure I have a long ways to go on accessibility.

As far as Javascript, I've inserted a random image loader for the main/bio page (index.html) so one of nine pictures of me will load randomly. I've also integrated the option to enlarge ween photos as well on each of the dog pages with a modal going from being hidden to visible and a function grabbing the appropriate image and inserting it over top. That was exhausting.

Many thanks to Don, Shannon, and Andrei for some help on some of these things. While the logic of Javascript makes sense to me because of some Python tinkering last fall/winter, the syntax just throws me. The burger menu was also painful and, while adequate, I'm disappointed I couldn't figure out a transform that would work. I may still tinker with that before the deadline.
