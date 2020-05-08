function drawStar() {
	var radialLineGenerator = d3.radialLine();

	var r1 = 150;
	var r2 = 60;

	var radialpoints = [
	[0, r1],
	[Math.PI * 0.2, r2],
	[Math.PI * 0.4, r1],
	[Math.PI * 0.6, r2],
	[Math.PI * 0.8, r1],
	[Math.PI * 1, r2],
	[Math.PI * 1.2, r1],
	[Math.PI * 1.4, r2],
	[Math.PI * 1.6, r1],
	[Math.PI * 1.8, r2],
	[Math.PI * 2, r1]
	];

	var radialData = radialLineGenerator(radialpoints);
	var svg = d3.selectAll("svg.star")
	var radial = svg.selectAll("path.radial").attr("d", radialData);

d3.selectAll("svg.star").select("g")
     .append("path")
    .attr("id", "wavy") //Unique id of the path
     .attr("d", radialData)
    .style("fill", "none")
    .style("stroke", "#AAAAAA");


d3.selectAll("svg.star").select("g").append("text")
     .append("textPath") //append a textPath to the text element
    .attr("xlink:href", "#wavy") //place the ID of the path here
    .style("text-anchor","start") //place the text halfway on the arc
    .text("sleep");

d3.selectAll("svg.star").select("g").append("text")
     .append("textPath") //append a textPath to the text element
    .attr("xlink:href", "#wavy") //place the ID of the path here
    .style("text-anchor","start") //place the text halfway on the arc
    .attr("startOffset", "18%")
    .text("eat");

d3.selectAll("svg.star").select("g").append("text")
     .append("textPath") //append a textPath to the text element
    .attr("xlink:href", "#wavy") //place the ID of the path here
    .style("text-anchor","start") //place the text halfway on the arc
    .attr("startOffset", "36%")
    .text("move");

d3.selectAll("svg.star").select("g").append("text")
     .append("textPath") //append a textPath to the text element
    .attr("xlink:href", "#wavy") //place the ID of the path here
    .style("text-anchor","start") //place the text halfway on the arc
    .attr("startOffset", "61%")
    .text("engage");

d3.selectAll("svg.star").select("g").append("text")
     .append("textPath") //append a textPath to the text element
    .attr("xlink:href", "#wavy") //place the ID of the path here
    .style("text-anchor","start") //place the text halfway on the arc
    .attr("startOffset", "80%")
    .text("cogitate");
}