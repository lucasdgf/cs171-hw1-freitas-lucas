1. Analyze an HTML Data <code>&lt;table&gt;</code>
---

**Lucas Freitas** - *CS171: Homework 1*

  1. By using the <code>colspan="3"</code> attribute on the <code>&lt;th&gt;</code> node we make the first row of the table, which consists of only one column, align its left border to the left border of the first row of the table and its right border to the right border of the third. Since there are only 3 columns on the table, the first row occupies the entire width of the table.

  2. **CSS Attributes**
  	* <code>main-content th { padding: 3px; }</code>: adds 3px of padding around each <code>&lt;th&gt;</code> element in the table, which makes the data look less cramped.
  	* <code>* { margin: 0; }</code>: overrides previous margin attributes and gives 0 margin to every element in the HTML file.
  	
  	**HTML Attributes**
  	* <code>th align: center; }</code>: centers the text in every <code>&lt;th&gt;</code> tag. The CSS equivalent for the attribute would be <code>th { text-align: center; }</code>

  3. The HTML source contains all the HTML code that generated the webpage and gives users access to stylesheets and scripts included in the source code. Although the HTML source code can be very useful to give programmers a broad look at the website's backbone, checking on specific items from the webpage can be rather tedious in the HTML source code, since HTML files tend to be long, and finding the code related to a specific item can be just as hard as finding a needle in a haystack. When using the DOM inspector, on the other hand, programmers can choose to analyze items individually and look at all the CSS and HTML style tags associated to the item at the click of a button. 