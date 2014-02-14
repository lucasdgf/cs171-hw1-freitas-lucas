5. Interactive Horizontal Bar Chart
---

**Lucas Freitas** - *CS171: Homework 1*

1. The graph is missing many things that currently make it virtually unusable:
	* A title to let users know what the data is representing.
	* Captions for each of the bars to let users know what each of them is referring to.
	* Values for each of the bars or a general scale so that users know the actual value of each of the data points represented.

2. The <code>g</code> nested elements have the following roles:
	* Outtermost <code>g</code>: contains the entire graph, including its title.
	* Middle <code>g</code>: only contains the entire graph.
	* Innermost <code>g</code>: represents each bar individually.

3. Adding <code>text</code> before or after the <code>rect</code> has no consequences on the graph, since SVG requires explicitly adding text nodes in order to add text to the SVG group.