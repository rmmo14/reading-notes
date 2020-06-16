# Article Notes

## Chart.js Article Notes
With the plugin chart.js we can draw graphs onto a page to use rather than a table for data. After installing, include in the html the script:
`<script src = 'Chart.min.js'></script>`

To create a canvas element in the HTML for chart.js usage add this:
`<canvas id = "x" width = "600" height = "400"></canvas>` where the height and width are variable. 

This is accompanied with the script to retrieve the context of the canvas 
`<script>
  var buyers = document.getElementById('x').getContext('2d');
  new Chart(x).Line(xData)
</script>`
Here xData needs to be an object with properties of labels and datasets.

To create a pie chart, use the same code as above except after line 12 use:
`new Chart(x).Pie(pieData, pieOptions);`
Here pieData needs to be an array of properties that represent the value and color of the pie sector. The pieOptions is an object with its appropriate properties.

To create a bar char, use the same code as above except after line 12 use:
`new Chart(x).Bar(barData);`
Here barData should be properites of labels and datasets. This time using rgba to specify colors that allow transparency. 

## Basic Usage Article Notes
The canvas element has two attributes, height and width, which both can be set using DOM properties. The default is 300x150 pixels. ManBearPig will not affect the actual drawing. Between the canvas tags you can input alternate content (img, text, etc) for older browsers. 

Canvas element has a method `getContext()` to obtain the rendering context and its drawing functions. 

## Drawing Shapes Article Notes
Canvas only supports rectangles and paths. Keep note that in reference to the webpage, the top left corner is the origin of a Cartesian plane. 

`____(x,y, width, height)`:

- fillRect - draws a filled rectangle
- strokeRect - draws a rect outline
- clearRect = clears the rect area, making it transparent

### To draw a path
1. `beginPath()` - creates a new path
1. Path methods to set different paths for objects
1. `closedPath()` - adds a straight line to the path, going to start of the current sub-path
1. `stroke()` - draws the shape by stroking its outline
1. `fill()` - draws a solid shape by filling the path's content area

`moveTo(x,y)` - moves the pen to coordinates (x,y)

To draw lines use `lineTo(x,y)` to draw from current position to (x,y)

### Plenty more methods to draw on article

## Styes/Shapes and Text Articles Notes
`fillStyle=color` sets stule of filling shapes while `strokeStyle=color` sets style fo shape outline. 

`globalAlpha = transparencyValue` applies the transparency value to all future shapes drwan, value between 0 and 1.

There are various line styles: lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset...getLineDash(), setLineDash(segments)

`lineCap` property takes on butt, round or square.

`lineJoin` property takes on round, bevel or miter.

For text you can use fillText and strokeText similar to above. You can style text by font, textAlign, textBaselin, and direction. 