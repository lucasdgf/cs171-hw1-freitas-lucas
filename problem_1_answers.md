1. Analyze an HTML Data <table>
---

**Lucas Freitas** - *CS171: Homework 1*

  1. By using the <code>colspan="3"</code> attribute on the <code>&lt;th&gt;</code> node we make the first row of the table, which consists of only one column, align its left border to the left border of the first row of the table and its right border to the right border of the third. Since there are only 3 columns on the table, the first row occupies the entire width of the table.

  2. **CSS Attributes**
  	* <code>main-content th { padding: 3px; }</code>: adds 3px of padding around each <code>&lt;th&gt;</code> element in the table, which makes the data look less cramped.
  	* <code>body { line-height: 1.22em; }</code>: changes the height of body lines, making text look shorter.
  	* <code>* { margin: 0; }</code>: overrides previous margin attributes and gives 0 margin to every element in the HTML file.
  	* <code>th { font-weight: bold; }</code>: makes the text of all <code>&lt;th&gt;</code> tags bold.
  	* <code>td, th { display: table-cell; vertical-align: inherit; }</code>: formats the text in <code>&lt;td&gt;</code> and <code>&lt;th&gt;</code> tags to display them as columns and rows of the table.
  	* <code>.main-content table { border-collapse: collapse; }</code>: collapses table borders into a single border.
  	* <code>table { font-size: inherit; }</code> sets the font-size of text from the table to be the same as the table's parent.

  	**HTML Attributes**
  	* <code>th[Attributes Style] { text-align: -webkit-center; }</code>: centers the text in every <code>&lt;th&gt;</code> tag.
  	* <code></code>