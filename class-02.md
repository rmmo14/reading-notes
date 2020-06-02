HTML Ch.2 Notes

It went over some older tags like bolding and italics, but some new tags that I encountered are the superscript and subscripts. 

```<sup>``` turns into a superscript while ```<sub>``` turns it into a subscript, which are helpful for mathematics too. 

 

The single tags ```<br />``` and ```<hr />``` are line breakers and horizontal rule respectively. 

 

**Empty elements** are elements that do not have any words between an opening and closing tag. 

 

There are some elements that don't add new information but rather to place emphasis on certain words for a screen reader or search engine.  For example:

- ```<strong``` puts emphasis on the word between the tags and on computers makes it bold

- ```<em>``` indicates emphasis that subtly changes the meaning of a sentence, on computers these become italicized

- ```<blockquote>``` is used for larger quotes that take up a paragraph and they tend to be indented.

-```<q>``` is used for shorter quotes and computers tend to place quotes around them.

- both the quote tags may use the cite attribute to indicate where the quote is from. 

-```<abbr>``` is used to abbreviate, the actual term is followed by title = which is after the abbr

-```<cite>``` is used to reference a piece of work like a book, film, or a paper

-```<dfn>``` is used to introduce a new term for the first time. 

-```<address>``` is used to contain contact details, whether an address, phone number, email, etc. 

-```<ins>``` is used to insert a phrase into a document which is underlined

-```<del>``` is used to show that a phrase was deleted, normally striked through 

-```<s>``` is used to indicate something that is no longer relevant or true

Ch 10 HTML

A reminder on how to link follow the formula of ```<link href ="" type="" rel="">``` where href specifies the path to the CSS file, type speficies the type of document being linked, and rel specifies the relationship between the HTML page and the file linked.

 

There are quite a few selectors

Selector|Meaning|Example

----------|------------|-----------

universal selector|Applies to all elements in the document|```*``` or ```{}```

 

Benefits of using external style sheets is that you can share the same style sheet rather than having to type the code over and over. 
Ch.2 JS
They review what a variable is and how to declare and assign them a value. It also reminds us on how to escape from certain codes to use for writing which is done by using a backslash. It then begins to talk about arrays.

Arrays are used when you are working with a list or a set of values that are related. They are helpful when you don't know how many items a list will contain. The values in an array do not need to be the same data type, and the process of creating an array is called an **array literal**. One method is like so: 

```var colors = ['white', 'blac', 'green']```

The second method is using an **array constructor** which is as so: 

```var colors = new Array('white', 'black', 'green')```

To get one of these elements (calling it) you can use either 

```colors[0]``` or ```colors.item(2)``` respectively...note that the arrays start at 0 rather than 1. 

Each array has a property called length that holds the number of items in the array. 

They then go into arithmetic operators which are typical math operators, one new one is the modulus (%) which divides the two values and returns the remainder. Just know that the computer follows PEMDAS, as it should!

Ch 4 JS

It begins to go over some comparison operators and logical operators. It then goes into for loops, if else statements, while, and do while loops which are review from code 102 so please check those notes. 

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

Logical operators are processed left to right. They short-circuit as soon as they have a result and re