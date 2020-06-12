# Ch. 10 JS 

## Ch.10 JS notes
In Javascript there is one global **execution context** and each function creates a new execution content. **Global contenxt** is code that is in the script but not the function, while function context is the code inside the function. 

**Variable scope**: global scope is when variables are declared globally, thus can be accessed whenever. JS processes one line at a time and when it needs data from another function, it stacks the new function on top of the current one. 

There are two phases of activity: prepare and execute, which ties in with **hoisting**. The prep phase takes all the variables and functions and hoists them to the top of the execution content, or prepares them. 

There is a type on page 456, they use "would" twice.

Functions in JS have **lexical scope** which means they are linked to the object they are defined in. JS has seven types of built-in error objects: Error, SyntaxError, ReferenceError, TypeError, RangeError, URIError, EvalError. 

Debugging is about deducation! Sometimes talking the code out loud will help, check your variables, break down parts of the code, and use console log.

There are a few other console log methods: `console.info()`, `console.warn()`, `console.error()`, these help by adding color to the logs. `console.group('')`..ended by `console.groupEnd()` lets you write a set of data within these tags. `console.table()` displays a table, `console.assert()` can test if a condition is met and writes console only if it is false, it also checks if it is a numeric value. 

With set breakpoints (using `debugger`), the debugger lets you step through the code line by line. Normally debugger *steps over* functions but you can tell it to *step into* the function to see what's going on. You can also indicate if a condition has been met. 

Another method is the try, catch, and finally method. First you specify a code you think might cause an exception, second if there is an exception then catch steps in with alternative code, and lastly finally code will run either way. If you know an error will occurs, create your own errors using `throw new Error(' ')`