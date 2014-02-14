4. Rank Colors and Bar Chart
---

**Lucas Freitas** - *CS171: Homework 1*

1. <code>d3.selectAll("tbody tr")[0].length-1</code> is the number of rows on the table, not including the header row.

2. The return values are as follows:
	* <code>color(0)</code>: #ff4500 (red)
	* <code>color(10)</code>: #f25e26 (orange)
	* <code>color(150)</code>: #42ffff (blue)

3. The original <code>domain()</code> would be appropriate to color cells based on rank, while changing the array such that it has the minimum and maximum rate values would let us color cells based on rate. That is especially useful when the distribution of rates is not uniform across states, since that way the color would be based on the absolute rate for each state instead of the relative rank among them.



