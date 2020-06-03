# Ch.3 and Ch. 13 HTML

## Ch. 3
They start by going over ordered and unordered lists, along with individual list items. One new thing I came across was that you can nest lists!

Some new tags are:

```<dl>``` is a definition list which consists of terms and their definitions. Within this tag you have ```<dt>``` which contains the term while ```<dd>``` holds the definition.

## Ch. 13
By default a box is the same size as its content. The best way to specifize size of the box is with:
- pixels: more accurate control of size
- percentages: realtive to the size of the browser window
- ems: size is based on the size of the text within (good for mobile screens)

```min-width``` and `max-width` are useful when shrinking the page to fit the size of the user's screen. They specify the max and min size the page can stretch. This can be done with the height as well with `min-height` and `max-height`.

The `overflow` CSS property tells the browser what to do if the text in a box is larger than the box itself. 

`hidden` property hides any extra content that does not fit in the box.

`scroll` property **adds a scrollbar** to the box so that the user can scroll the missing content. 

Using padding, margin, and borders help give white/blank space around text too. 

`border-width` can be accompanied by `thin`, `medium`, and even with specific dimensons to name a few. 

Then it goes on to show how you can do `border` property with the width, style, and color together rather than individually. 

It goes into the `display` property accompanied by `inline`, `block`, `inline-block` and `none`.

`visibility` allows you to hide boxes from users but leaves a space where it should have been (A good way to add blank space between things). It is followed by `hidden` or `visible`.

`border-image` applies an image to the border of any box. It requires 3 pieces of info:
1. the URL of the image
1. where to slice the image
1. what to do with the straight edges i.e. `stretch`, `repeat`, or `round`. 

`box-shadow` is followed by   `horizontal offset`, `vertical offset`, `blur distance`, `spread of shadow`. Can also use `inset` to make an inner-shadow.

`border-radius` gives a rounded border. You can make more comlex shapes by specifying different distances for the horizontal and verrtical parts of the rounded corners. 

ex: `border-radius: 80px 50px` or target just one corner of it as `border-top-left-radiues: 80px 50px`


# Ch. 4 JS 
## Ch. 4 continued...
Some new ones in this chapter for me are switch statements. They are kind of like if else statements but only run the "if" part. This is the general setup:

```switch(level) {
case "One":
title = 'level 1';
break;

case "Two";
title = 'level 2';
break;```

The break code makes the code stop running once it goes to the case. 

**Falsy** values are treated as if they are false. Falsy values can be treated as the number 0. Note that ```NaN``` is considered falsy...think of it as infinity because NaN is not equivalent to itself. 

**Truthy** values are treated as if they are true. If it is not falsy then it can be treated as if it were true. Truthy values can be treated as the number 1.  

Logical operators are processed left to right. They short-circuit as soon as they have a result and return the value that stopped the processing. 