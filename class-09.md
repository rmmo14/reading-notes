# Ch. 7, 14 HTML and Ch. 6 JS

## Ch. 7 HTML Notes
There are many different types of form controls. 
1. Adding Text
  - Text input: for single line of Text
  - Password input: single line text box but it masks the the characters
  - Text area: For longer areas of text
1. Making Choice
  - Radio buttons: used when a user must select one of a number of options
  - Checkboxes: user can select and unselect one or more oprtions
  - Drop-down boxes: user must pick one of a number of options from a list
1. Submitting Forms
  - Submit buttons: submit data from your form to another page
  - Image buttons: similar to submit buttons but they allow images
  - File upload: allows users to upload files to a site

Form controls live inside a `<form>` element. It should always carry the action attribute and will usually have a method and id attribute. 

Its syntax is `<form action = "LINK" method ="GET">`

`action` is the URL for the page on the server that will receive the information.

`method` forms can be sent using either get or post. With the get method it is ideal for short forms and when you are just retrieving data from the web server. With the post method the values are sent in HTTP headers. It is used if your form: allows users to upload a file, is very long, contains sensative information, adds information to or deletes information from a database.

`<input>` is used to create several different form controls. Its syntax is `<input type = "text" name = "username" size = "15" maxlength = "30"/>` (within a form tag). 

The `type` attribute has a value of text and creates a single-line text input. If the type attribute has "password" it creates a text box that acts just like single-line text input, they are hidden. 

The `name` attribute identifies the form control and is sent along with the informatino they enter to the server. 

`maxlength` attribute is used to limit the number of characters a user may enter into the text field. 

The `size` attribute should not be used on new forms, it is for older forms. 

`<textarea>` is used to create multi-line input, and it is not an empty element. Any text between this tag will appear in the text box when the page loads.

In radio buttons, the value of the name attribute should be the same for all of the radio buttons used to answer that question. The checked attribute should only be on one radio button. 

`<select>` is used to create a drop down list box. It contains two or more `<option>` elements. The words between these self-closing tags will be displayed to the user in the drop down box. `selected` attribute is used to indicate the option should be selected when the page loads. 

Use `<fieldset>` to group related form controls together, which is helpful for longer forms. The `<legend>` element comes directly after the opening fieldset tag and has a caption

## Ch. 14 HTML Notes
`list-style-property` allows you to control the sphape or style of a bullet point (CSS) like for lists. Some values you can use are: decimal, decimal-leading-zero, lower-alpha, upper-alpha, lower-roman, upper-roman.

`list-style-image` is used to specify an image to act as a bullet point (CSS).

If you have empty cells in your table then use `empty-cells` property to specify whether or not their borders should show. 

## Ch. 6 JS
**Event handling** involves the following steps: select element node, indicate which event on the select node will trigger the response, state teh code you want to run. 

Event listeners are a more recent approach to handling events. They allow one event to trigger multiple functions. You can only attach one function to each even handler in traditional dom even handler. 

The syntax to bind an event is as follows `element.onevent = functionName;` Since we dont want the code to run until the event is fired, the parenthesis is not needed. When using event handlers, the event name is preceded by the word "on". 

The syntax to bind an event to an element using an event listener is `element.addEventListener('event', functionName ,[ Boolean]);`

Since you can't have parentheses after the function names in event handlers or listeners then passing arguments works differently. You wrap a function in an anonymous function to pass arguments to a function that is called by an event handler or listener. 

**Event bubbling**: The event starts at the most specific node and flows outwards to the least specific one. **Event caputring**: The event starts at the least specific node and flows inwards to the most specific node. 

"The flow of events only really matters when your code has event handlers on an element and one of its ancestor or descendant elements"

When an event occurs, the event object tells you information about the event and the element it happened upon. 

