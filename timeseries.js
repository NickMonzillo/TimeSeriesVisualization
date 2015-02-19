  var svg = dimple.newSvg("body", 650, 400);
    d3.csv("http://127.0.0.1:8000/tsdata.csv", function (data) {
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(60, 30, 505, 305);
      var x = myChart.addCategoryAxis("x", "Year");
      x.addOrderRule("Date");
	  var line = myChart.addMeasureAxis("y", "Oil Price ($/barrel)");
	  var areas = myChart.addMeasureAxis("y", "Thousands of tons of Oil Equivalent Consumed");
	  var y1 = myChart.addSeries("Energy", dimple.plot.area,[x,areas]);
	  var y2 = myChart.addSeries("Energy", dimple.plot.line,[x,line]);
      myChart.addLegend(60, 10, 500, 20, "right");
      myChart.draw();
    });