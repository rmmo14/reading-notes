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