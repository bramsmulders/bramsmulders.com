---
layout: post
title:  Finger-Friendly ALL the things
excerpt: We should design for touch, and this is why
date:   2013-02-26 19:10:14 +0100
categories: touch workflow
---
Since the release of the first iPhone the internet landscape has changed drastically. Companies acknowledged the importance of mobile presence, and in the years that followed mobile/touch ready websites began to become mainstream. Responsive and adaptive webdesign has gained its status quo, but we are at the verge of a new trend. A trend that will change our way of designing & building websites drastically.

##Touch has landed on the desktop
A whole new category of touch devices is flooding the market along with the release of Windows 8; Touchscreen laptops and tablet/keyboard combos. The new hybrid combinations create a new ergonomic environment, an environment wich will require a mindshift within webdesign.

Much alike tablets before them, these devices require UI conventions that are different from desktop layouts of similar screen size. The hybrids do not only require big touch targets to accomodate large/clumsy fingers, but they also need controls conveniently placed where hands come to rest. Designing for touch introduces elements of industrial design: physical comfort and ease are critical considerations.

Tried and tested desktop conventions have to change to make room for fingers and thumbs. And since we as designers have little to no information about the device used we cant serve separate interfaces for touch and non-touch gadgets. But we can't serve them plain desktop layouts, because the the top-of-screen navigation and menus of traditional desktop layouts are outright hostile to hybrid ergonomics.

##Every desktop should be designed for touch
(link: http://www.codinghorror.com/blog/2012/11/do-you-wanna-touch.html text:Jeff Atwood) put it nicely in his review of Microsoft’s Surface tablet:
>I’ve stopped thinking of touch as some exotic, add-in technology contained in specialized devices. I belatedly realized that I love to touch computers. And why not? We constantly point and gesture at everything in our lives, including our screens. It’s completely natural to want to interact with computers by touching them. That’s why the more unfortunate among us have displays covered in filthy fingerprints. ...
>
>After living with the Surface RT for a few days now, I’m convinced that this form factor is the replacement and way forward for the stagnant laptop. I can’t even remember the last time I was this excited about a computer. The more I use it, the more I think that touch plus keyboard is the future of all laptops.

There seems to be something irresistible about the touchscreen, even when more precise or efficient options are available. According to John Whalen’s ((link: http://brilliantexperience.com/ text:from brilliant experience)) research people who use hybrids tend to rest their arms alongside the keyboard with a loose grip on the bottom corners of the screen. As with any handheld touchscreen device, the way you hold the thing informs where primary controls should go.

###Rule of thumb
Designing for touch means designing for fingers, but to be more specific, you're designing for thumbs. Here's why:

- Phones: one hand means one thumb
- Tablets: Two thumbs on the edges
- Hybrids: Two thumbs on bottom edges

This means that you need to group primary controls and gestures for hybrid screens around the bottom corners & sides. This is one reason Windows 8 uses edge gestures to call system and app controls. A swipe from the right edge conjures the system charms, and a swipe from the bottom edge brings up a shelf of app tools.

This change in landscape requires a different view on the design: **input type and grip should drive the placement of controls, not screen size**.

###Responsive webdesign
It’s not yet in our industry’s DNA to consider physicality and environment in our layouts. That’s why many are still surprised at the idea that they can’t just use their legacy desktop layout on iPad, even though the screen size is the same. The layout looks good, sure, but that rarely means it’s also finger-friendly.

The rise of the hybrids means touch is no longer the sole province of phones and tablets. It’s arrived on desktops and laptops, too. Most desktop website layouts, however, are not optimized for touch. They lean on small, tiny, touch-unfriendly links, often accompanied with hover states. The latter can’t be triggered by touch at all.

In a perfect world we would tweak our CSS to accommodate a range of input types in the same way responsive design has given us the possibility to accommodate a range of screen sizes. Unfortunately, we don’t yet have media queries to specifically target touch devices, but that could change very soon.

Recent drafts of the CSS 4 module include a media query for pointers to target devices with 'fine' or 'coarse'. A mouse, trackpad, of any other precise input would be categorised as 'fine', while fingers would be 'coarse'.

    @media (pointer:coarse) {
        .m-button{
            font-size: 1.5rem;
        }
    }

This will get us only half-way, since we also have hybrids, wich will be classified as 'fine' & 'coarse'. In my opinion if a device supports touch we must always make the layout touch friendly, even if the user is using a trackpad or mouse. A new desktop design language is needed, one that replaces cursor-only interactions with conventions flexible enough to handle any of several potential input styles.

## New standards
Luke Wroblewski and Jason Weaver shared some useful suggestions for (link: http://www.lukew.com/ff/entry.asp?1649 text: responsive navigation across touchscreen devices), and it’s exactly the kind of exploration we need.

As we’ve seen over and over again in the last few years, the growing range of devices and platforms continues to make our work both more exciting and more challenging. The ideal of the web is a platform that can be accessed from any device, no matter what its input or output method.