#KWLightbox
KWLightbox is a lightbox jQuery plugin. What is a lightbox you say?
A lightbox is when you click an image from a list of images and it gains focus
inside the current tab/window and doesn't load it in a new one.

The image is already loaded in the background, and then it fast and easy pops up!

##Getting started
To get started using KWLightbox, there are a few simple steps to follow.
Just follow this article and you'll be using KWLightbox in no-time!

###Install the plugin
To install the plugin download the file `jquery.kwlightbox.js` and
put it in your JavaScript script directory. Load the script from
your page like so:
`<script src='js/jquery.kwlightbox.js'></script>`

*Replace js/ with your own script-path.*

Set the following in your CSS-file:
```
#overlay { 
    position: fixed; 
    top: 0; 
    left: 0; 
    height: 100%; 
    width: 100%; 
    background: #000;
}

#lightbox { position: fixed; }
```

###Using it
To use the plugin you also need to call it. To call it, put this
into your main JavaScript-file. In it's most basic form:
```
$(document).ready(function() {
    // Other code...
     $(this).kwLightbox();
    // Other code...
});
```

Also you must give your `<img>`-tag the class `lightbox`.

KWLightbox supports three options: `lightbox`, `overlay` and `keyCode`.
These are used to change some of the plugins behaviour.

`lightbox` - Set this to change the name of the class and id used by the plugin for the images.

`overlay` - Set this to change the name of the id used by the overlay.

`keyCode` - Set this to change the key for closing the image.

`scrollbar` - Set this to change the scrollbar behaviour when the image is showing.

**Defaults**
`lightbox: 'lightbox'`, `overlay: 'overlay'`, `keyCode: 27`, `scrollbar: 'hidden'`.

**Example 1 - To change the key for closing the image**
```
$(this).kwLightbox({
    'keyCode': 13
});
```
This will use *ENTER* instead of *ESCAPE*, the standard JavaScript keycodes are supported.

**Example 2 - To change the class names of the lightbox and the overlay**
```
$(this).kwLightbox({
    'lightbox': 'imgbox',
    'overlay': 'imgbackground'
});
``` 
This will change the class name for lightbox to imgbox, and the overlay class name to imgbackground.
Now you will have to specify `#lightbox, .lightbox and #overlay` in your CSS.

**Example 3 - To change the scrollbar behaviour**
```
$(this).kwLightbox({
    'scrollbar': 'scroll'
});
```

**Example 4 - To change all available values**
```
$(this).kwLightbox({
    'lightbox': 'imgbox',
    'overlay': 'imgbackground',
    'keyCode': 13,
    'scrollbar': 'scroll'
});
```

###Recommended CSS
Set this in your CSS file to give it a basic lightbox appearance.

```
#overlay { 
    position: fixed; 
    top: 0; 
    left: 0; 
    height: 100%; 
    width: 100%; 
    background: #000;
}

#lightbox { position: fixed; }
```
*If you specified another class/id, their name should replace the ones listed above.*

**Example**
```
#imgbackground { /* Style */ }
#imgbox { /* Style */ }
```