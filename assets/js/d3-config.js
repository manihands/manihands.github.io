// import * as d3 from "d3";

const margin = {top: 20, right: 10, bottom: 20, left: 10};
const width = 1000 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;
const g = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
