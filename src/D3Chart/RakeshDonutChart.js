import React, { useEffect } from 'react';
import * as d3 from 'd3';

function DonutChart() {
  useEffect(() => {
    // D3.js code for creating the donut chart
    const data = [
      { label: 'Category A', value: 30 },
      { label: 'Category B', value: 50 },
      { label: 'Category C', value: 20 },
    ];

    

    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select('.rakesh-donut-chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.label))
      .range(['#ff5733', '#ffa832', '#33ff57']); // Define your colors

    const pie = d3.pie()
      .value(d => d.value);

    const path = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 70);

    const arc = svg.selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arc.append('path')
      .attr('d', path)
      .attr('fill', d => color(d.data.label));

    arc.append('text')
      .attr('transform', d => `translate(${path.centroid(d)})`)
      .attr('dy', '.35em')
      .text(d => d.data.label);
  }, []);

  return (
    <div className="rakesh-donut-chart"></div>
  );
}

export default DonutChart;