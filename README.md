# Infinite Slide Carousel
UI Assignment for TNC

## Initial plan
1. Create carousel with 4 images
2. Add styles for fixed width to check the transition
3. Create cyclic nodes for last to first transition
4. Add callback function after every transiotion end
5. Add CSS and JS code for making UI responsive

---

## Project Details
1. view.html - This file includes the view seen on the browser with all the elements.
    > The "container" div is a wrapper for entire carousel.
    >
    > The "images" div is responsible for creating the carousel.
    >
    > The "image" div is a wrapper for the "img" tag.


2. style.css - This file has all the styles added to the UI elements.
    > It includes styles for classes.
    >
    > Using the "media" query, the UI is kept responsive and is handled for three devices, Mobile, Tablet and PC.


3. script.js - This file holds the functionality to the UI elements.
    > The necessary elements are accessed using the "document" object.
    >
    > The first and last nodes are retrieved and appended to the list of images.
    >
    > The function "startSliding" is responsible for incrementing the image index after every 3 seconds.
    >
    > Event listener is added after every transition ends so that when the image index reaches on the last node, its reset to 1.
    >
    > Event is added to retrieve the new width of the image after window resize to stop overflow.