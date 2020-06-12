## Ch. 15 HTML

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