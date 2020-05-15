function drawBmi() {
d3.csv("weights.csv", d => {
	  return {
	  	date: d3.utcParse("%Y-%m-%d")(d.date),
	  	weight: d.weight,
	  	height: d.height,
	  	bmi: d.weight / (d.height * d.height)
	  };
	 }).then( d => {
	 console.log(d)
	//geometry
	height = 300
	width = 300
	margin={top:20,bottom:20,left:20,right:20}

	x = d3.scaleUtc()
	    .domain(d3.extent(d, d => d.date))
	    .range([margin.left, width - margin.right])

	xAxis = g => g
	    .attr("transform", `translate(0,${height - margin.bottom})`)
	    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))

	y = d3.scaleLinear()
	    .domain([18, 30]).nice()
	    .range([height - margin.bottom, margin.top])

	yAxis = g => g
	    .attr("transform", `translate(${margin.left},0)`)
	    .call(d3.axisLeft(y))
	    .call(g => g.select(".domain").remove())
	    .call(g => g.select(".tick:last-of-type text").clone()
	        .attr("x", 3)
	        .attr("text-anchor", "start")
	        .attr("font-weight", "bold")
	        .text("BMI"))

	line = d3.line()
	    .x(d => x(d.date))
	    .y(d => y(d.bmi))

	healthy = d3.line()
	    .x(d => x(d.date))
	    .y(d => y(25.0))

	  var svg = d3.selectAll("svg.bmi")

	  svg.append("g")
	      .call(xAxis);

	  svg.append("g")
	      .call(yAxis);

	svg.append("path")
	      .datum(d)
	      .attr("fill", "none")
	      .attr("stroke", "steelblue")
	      .attr("stroke-width", 1.5)
	      .attr("stroke-linejoin", "round")
	      .attr("stroke-linecap", "round")
	      .attr("d", line);

	 svg.append("path")
	      .datum(d)
	      .attr("fill", "none")
	      .attr("stroke", "green")
	      .attr("stroke-width", 1.5)
	      .attr("stroke-dasharray", "3,3")
	      .attr("stroke-linecap", "round")
	      .attr("d", healthy);
})


}