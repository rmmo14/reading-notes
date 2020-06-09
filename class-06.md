# Article and Ch. 3, Ch. 5 of JS

## Article Notes
**Problem Domain** will be difficult! It is like solivng a jigsaw puzzle with no picture to reference. It is best to not assume you know the solution to every problem. It costs more to do the work again than to get it right the first time. 

## Ch. 3 pg 100-105

An **object** groups together a set of variables and functions to create a model of a something you could recognize from the real world. 

In an object: variables become known as *properties*, functions become known as *methods*. **Properties** tell us about the object, and **methods** represent tasks that are associated with the object. They both have a name and a value. In an object it is called a key. The value of a method is always a function. 

### Literal Notation
It is the way to create objects. Each key of an object is separated by a comma except the last value. 

* The `this ` keyword indicates that it is using the associate property of *this* object (the object it is within).

### Access an Object with Dot Notation
You can also access properties using square brackets. The "dot" is referred as the member operator. The property or method on its right is a member of the object on its left. ex: `var hotelName = hotel.name;` is the same as `var hotelName = hotel['name'];`
## Ch. 5 Notes
"**DOM** stands for **Document Object Model** which specifies how browsers should create a model of an HTML page and how JS can access and update the contens of a web page while it is in the browser window." 

A DOM tree consists of four main types of nodes:
1. Document node: can think of it as the skeleton of an HTML document html>head>body>ul>li etc.
1. Element node: the HTML elements describe the structure of an HTML page.
1. Attribute node: the opening tags of HTML elements that carry attributes.
1. Text node: once you access an element, you can then reach its text. 

### Step 1: Access the elements
1. Select an individual element node. There are three ways: `getElementById()`, `querySelector()`, and traversing from one element to the other within DOM tree.
1. Select multiple elements. There are three ways: `getElementsByClassName()`, `getElementsByTagName()`, and `querySelectorAll()`.
1. Traversing between element nodes. You can move from one element node to a related element node in the following ways: `parentNode`, `previousSibling/nextSibling`, or `firstChild/lastChild`. 

### Step 2: Work with those elements
1. Access/Update text nodes. First, select the element, use the firstChild property, then use the text node's only property to get the text from the element. 
1. Work with HTML content. `innerHTML` allows access to child elements and text content, `textContent` access the text content, and other methods to create new nodes. 
1. Access or update attribute values. 

**DOM queries** are methods that find elements in the DOM tree. **Caching** is when you store the location of a repetative element in a variable, thus saving the browser time looking through the DOM tree to find it. A **NodeList** is a collection of element nodes, each given an index number like an array though they are considered **collections** but should still use brackets to reference an individual item. 

To select an element from a NodeList use the `item()` method or array syntax. 

*In order to use `.nodeValue` you must be on a text node!

Steps to add content to page: create element, give it content, and add it to the dom. 