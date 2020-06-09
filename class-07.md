# Article, Ch. 6 HTML, and Ch. 3 JS

## Article Notes
**Domain Modeling** is the process of creating a conceptual model in code for a specific program. An **object-oriented** model in an entity that stores data in properties and encapsulates behaviors in methods. 

Use a **constructor function** to define the same proeprties between many objects. They are defined using a function expression. 

**Object-oriented programming** is as follows: 
- the `new` kewyword instantiates or creates an object
- the constructor function initializes properites inside that object using the `this` variable 
- the object is stored in a variable for later use

Example for random number generator:
`EpicFailVideo.prototype.generateRandom = function (min,max){
  return Math.floor(Math.Random()*(max - min + 1)) + min;
}`

It had great examples that will be helpful in working with lab 6. 

## Ch. 6 HTML Notes
- `<table>` is used to create a table, whose contents is written row by row (think of a ul).
- `<tr>` indicates the start of each row of a table, and is followed by one or more td element. 
- `<th>` is used like the td element except it represents teh heading for the row/column.
- `<td>` indicates teh cell of a table.
* all three have closing tags. 
- `colspan="#"` attribute lets you stretch out entries across more than one column.
- `rowspan = "#"` is used similarily as above.

## Ch. 3 JS (pg 106-144)
The `new` keyword and object constructor create a blank object to which you can add properties and methods. 

When you want several objects to represent similar things use object constructors. The name of a constructor function usually begins with a capital letter. 

The keyword `this` is used inside functions and objects. It always referes to one object, usually the object in which the function operates. 

`.toFixed(#)` will round the bumber stored in the variable to # decimal places. `.toPrecision(#)` uses the number in parentheses to indicate the total number of digits the number should have. 

**Math Objects**:
- `Mat.round()`: rounds to nearest int
- `Math.sqrt(n)`: returns square roots of positives
- `Math.ceil()`: rounds up to nearest int
- `Math.floor()`: rounds down to nearest int
- `Math.random()`: generates a number between [0,1)

