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

- Functions: consist of a series of statements that have been grouped together.
- Objects: browsers come with built-in objects but we can also create our own. 

When you ask a funtion to perform a task it is known as **calling the function**. Pieces of information passed to a function are known as parameters. The **return value** is the answer you expect. 

**Function Declaration** creates a function that you can call later in your code, and you must give it a name aka *named functions*. 

**Immediately invoked Function Expressions (IIFE)** are functions that are not given a name, rather they are executred once as the interpreter comes across them. 

**Final parentheses** after the closing curly of the code block tell the interpreter to call the function right away. 

A **variable's scope** is where the variable can be used. If it is declared within a function only then it can only be used within the function (local variable). A global variable is when you create a variable outside of a function. 

## Article 6

**Pair programming** involves a Driver and a Navigator. The driver is the one who types and the only one who has hands on the keyboard. The navigator uses their words to guide the Driver, they thinkg about the big picture while scanning for bugs. They can use a screen to view the code but should not be inputting anything. 

Benefits of pair program are:
1. greater efficency: studies show that though this may take a bit more time, it does provide higher-quality code that doesn't require much debugging. 
1. Engaged collaboration: this helps both programmers to focus and is harder to procrastinate. 
1. learning from fellow students: every student has a different skill set so everyone can triage certain parts of code based on their expertise. 
1. social skills: since all coders have different coding styles, it is important to communicate to avoid errors. This creates interpersonal skills that tie in to the job world. 
1. job interview readiness: prepares you for interviews where you have to pair program with a current eomployee. 
1. work environmnet readiness: this is also how companies train their new employees