var width = 600;
var height = 50;

//SVG container
var svg = d3.select('#chart')
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")

//Reset the overall font size
var newFontSize = width * 62.5 / 800;
d3.select("html").style("font-size", newFontSize + "%");
//Format to display numbers
var formatPercent = d3.format("%");
//Needed for gradients
var defs = svg.append("defs");


var coloursRainbow = ['rgba(0, 255, 255, 0)',
'rgba(0, 255, 255, 1)',
'rgba(0, 191, 255, 1)',
'rgba(0, 127, 255, 1)',
'rgba(0, 63, 255, 1)',
'rgba(0, 0, 255, 1)',
'rgba(0, 0, 223, 1)',
'rgba(0, 0, 191, 1)',
'rgba(0, 0, 159, 1)',
'rgba(0, 0, 127, 1)',
'rgba(63, 0, 91, 1)',
'rgba(127, 0, 63, 1)',
'rgba(191, 0, 31, 1)',
'rgba(255, 0, 0, 1)'];


//Calculate the gradient
defs.append("linearGradient")
  .attr("id", "gradient-colors")
  .attr("x1", "0%").attr("y1", "0%")
  .attr("x2", "100%").attr("y2", "0%")
  .selectAll("stop")
  .data(coloursRainbow)
  .enter().append("stop")
  .attr("offset", function(d,i) { return i/(coloursRainbow.length-1); })
  .attr("stop-color", function(d) { return d; });

var legendWidth = width * 0.3,
  legendHeight = 10;

//Color Legend container
var legendsvg = svg.append("g")
  .attr("class", "legendWrapper")
  .attr("transform", "translate(" + (legendWidth/2+5) + "," + 0 + ")");

//Draw the Rectangle
legendsvg.append("rect")
  .attr("class", "legendRect")
  .attr("x", -legendWidth/2)
  .attr("y", 10)
  .attr("width", legendWidth)
  .attr("height", legendHeight)
  .style("fill", "none");

svg.select(".legendRect")
    .style("fill", "url(#gradient-colors)");
//Set scale for x-axis
var xScale = d3.scaleLinear()
   .range([0, legendWidth])
   .domain([0,100]);

//Define x-axis
var xAxis = d3.axisBottom()
    .ticks(5)  //Set rough # of ticks
    //.tickFormat(formatPercent)
    .scale(xScale);

//Set up X axis
legendsvg.append("g")
  .attr("class", "axis")  //Assign "axis" class
  .attr("transform", "translate(" + (-legendWidth/2) + "," + (10 + legendHeight) + ")")
  .call(xAxis);
