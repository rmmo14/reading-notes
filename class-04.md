# Ch. 4 and Ch. 15 HTML Notes

## Ch. 4
 
 In order to link pages on our page we use the ```<a>``` tag which is used as `<a href = "">Link</a>```.

 This linking method can be used for links on other sites as well as links within our own pages called **relative URL's**. 

 The discuss parent and grandparent folders which tend to be the **root** folder which are the top-level folders. 

 The main  homepage of a site written in HTML is called the index.html. We can link to different relative URL's making sure to specify it's path from the parent folders. 

 To make a link that starts up an email we have to use `<a href= "mailto:jo@doe.org">Email Jo</a>`.

 To open a link to a new window use `<a href ="LINK" target="_blank">Link Here</a>`.

 If we want to link to another section in our page as in "click to go to section" use id's to reference them. This method can be used when trying to link to a specific part of another page, just have to be sure to reference the parent folders. 

## Ch. 15

Block-level elements like `<h1> <p> <ul> <li>` start on a new line.

In-line elements like `<img> <b> <i>` flow in between surrounding text. 

A **containing** or **parent element** is when one block-level element sits inside another block-level element. 

The following *positioning schemes* allow you to control the layout of a page:
- Normal Flow: Every block-level element appears on a new line.
- Relative: Moves an element from the position it would be in normal flow, shifts it to the top, right, bottom, or left of where it would have been placed.
- Absolut: Positions the element in relation to its containing element. 

To indicate where a box should be positioned we can use `box offset` to tell the broweser how far from the top or bottom and left or right it should be placed. 
- Fixed: a form of absolute positioning that positions elements in relation to the browser window.
- Float: allows you to take that element out of normal flow and poistion it left or right of a containing box, which makes it into a block-level element. 

`z-index` property allows you to control which box appears on top. 

The `clear` property allows you to say that no element should touch the left or right hand sides of a box. 

The `float` proeprty comes in handy when you are making columns in your design. They incoroprate the `<div>` tag along with `width` `float` and `margin`.

Web designers try to create pages of around 960-1000 pixels wide. Fixed width layout designs do not change size as the user increases or decreases their browser, this uses pixels. 

**Liquid layout** designs stretch and contract as the user increases or decreases the window, this uses perentages. 

Designers use **grid structure** to help them position items on a page. The method relies on the 960 rule which can be set up with 960.gs

You can reference multiple style sheets on your html. Designers do this when they want each style sheet to do different things. 


# Ch. 3 and Article 6 JS Notes

## Ch. 3