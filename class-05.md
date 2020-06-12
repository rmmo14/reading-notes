# Ch 5, 11, 12 HTML

## Ch. 5 Notes
Remember that all images are subject to copyright and can get in trouble for using other peoples photos. In the case of several images, putting them on a simple consistent background helps them look better together. 

If the image added is just to make a page look attractive then in the alt tag of it leave the quotes blank. The `<figure>` tag allows you to add a caption to your image. You can also align things horizontally with key words 'left' and 'right' as well as vertically with 'top', 'middle', 'bottom'.

## Ch. 11 Notes
Recall the different ways to use colors: rgb, hex, rgba, hsl, hsla.

Text is harder to read when there is low contrast between background and foreground colors. If you want people to read a lot of your text then too much contrast can make it harder to read. You can reduce contrast by using darh gray text on a white background or off-white text on a dark background. 

The A section of rgba ranges from 0.0 to 1.0 and stands fro opacity. The A section of hsla stands for alpha and is also between 0 and 1.0 and it affects transperancy. 

HSL stands for hue (is an angle between 0 and 360), saturation(expressed as a percent), lightness (0%=white, 50% is normal, and 100% is black).

## Ch. 12 Notes
- Serif fonts have extra details at the ends of the strokes of the letters.
- Sans serif fonts have straight ends to letters.
- Monospace font has fixed-width.
- Cursive fonts are Cursive
- Fantasy fonts are usually decorative

In font there are 
1. Ascender: which is above the cap height
1. Cap height: is the top of flat letters
1. x-height: height of the letter x
1. baseline: the lint the letters sit on
1. Descender: are below the baseline

There may be times when a users device does not have the fonts you are using in your code so it is best practice to offer alternatives (3) separated by commas.

Setting font size in pixels is the best way to ensure that the type appears at the size you intended. Ems allow you to change the size of text relative to teh size of the text in the parent element. You can get more fonts using `@font-face`

**Font-weight** is  property that allows you to create bold text. They go along with two values: `normal` and `bold`.Inf **font-style** you can use: normal, italic, or oblique to make text look italic. Use **text-transform** to change text to uppercase, lowercase, or capitalize. **text-decoration** takes on the following: none, underline, overline, line-through, blink (maes it flash on and off). Using **line-height** (in ems) makes the vertical gap between lines of text larger. **letter-spacing** allows you to control the space between each letter while **word-spacing** controls the space between words. These last two are helpful when you have bolded text for easer readability. 

- **Leading**: a term typographers use for the vertical space between lines of text.
- **Kerning** a term typographers use for the space between each letter. 

**vertical-align** is most commonly used with inline elements like `<img>`, `<em>`, `<strong>` elements. The values it can take are: baseline, sub, supper, top, text-top, middle, bottom, text-bottom. It can also take a length (pixels or em) or a percentage of the line height. **text-indent** allows you to indent the first line of text by the specified pixels or ems. It can also take negative values and sitck out the text. **text-shadow** takes on three values: length of shadow to left or right, distance to top or bottom that the shadow should fall, amount of blur (optional), and fourth is the color of the drop shadow. 

Use `:first-size` and `:first-line` to specifiy different values for the first letter or first line of text inside an element. These are called **pseudo-elements**. The following **pseudo-classes** allow you to set different styes for links that have and have not been visited yet. The `:link` allows you set styles for links thave not yet been visited. And `:visited` allows you to set styels for links that have been clicked on. `:hover`, `:active`, and `:focus` allow you to change the apearance of elements when a user is interacting with them. Pseudo-classes are used in the following order:

1. :link
1. :visited
1. :hover
1. :focus
1. :active

There are a list of attribute selectors

selector | meaning | example
---------|----------|---------
existence | []: matches a specific attribute | `p[class]`: targets any `<p>` element with attr called class
equality | `=`: matches an attribute with a specific value | `p[class="dog"]`: targets any p elemnt with an attribute called class whose value is dog. 
space | `~=`: matches an atttribute whose value appears in a space-separate list of words | targets any p element with an attribute called class whose value is  list of space-separated words, which is dog. 
prefix | `^=`: matches an attribute whose value begins with a specific string | targets a p element with an attribute whose value begins with the letter "d"
substring | `*=` matches an attribute whose value contains a specific substring | targets any p element with an attribute whose value contains the letters "do"
suffix | `$=`: matches an attribute whose value ends with a specific string | targets any p element with an attribute whose value ends with the letter "g"