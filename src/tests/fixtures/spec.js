/**
 * Commonmark spec test cases
 * 0.28 (2017-08-01)
 * https://spec.commonmark.org/0.28/spec.json
 */
export default [
  {
    "markdown": "\tfoo\tbaz\t\tbim\n",
    "html": "<pre><code>foo\tbaz\t\tbim\n</code></pre>\n",
    "example": 1,
    "start_line": 352,
    "end_line": 357,
    "section": "Tabs"
  },
  {
    "markdown": "  \tfoo\tbaz\t\tbim\n",
    "html": "<pre><code>foo\tbaz\t\tbim\n</code></pre>\n",
    "example": 2,
    "start_line": 359,
    "end_line": 364,
    "section": "Tabs"
  },
  {
    "markdown": "    a\ta\n    ὐ\ta\n",
    "html": "<pre><code>a\ta\nὐ\ta\n</code></pre>\n",
    "example": 3,
    "start_line": 366,
    "end_line": 373,
    "section": "Tabs"
  },
  {
    "markdown": "  - foo\n\n\tbar\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
    "example": 4,
    "start_line": 379,
    "end_line": 390,
    "section": "Tabs"
  },
  {
    "markdown": "- foo\n\n\t\tbar\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n<pre><code>  bar\n</code></pre>\n</li>\n</ul>\n",
    "example": 5,
    "start_line": 392,
    "end_line": 404,
    "section": "Tabs"
  },
  {
    "markdown": ">\t\tfoo\n",
    "html": "<blockquote>\n<pre><code>  foo\n</code></pre>\n</blockquote>\n",
    "example": 6,
    "start_line": 415,
    "end_line": 422,
    "section": "Tabs"
  },
  {
    "markdown": "-\t\tfoo\n",
    "html": "<ul>\n<li>\n<pre><code>  foo\n</code></pre>\n</li>\n</ul>\n",
    "example": 7,
    "start_line": 424,
    "end_line": 433,
    "section": "Tabs"
  },
  {
    "markdown": "    foo\n\tbar\n",
    "html": "<pre><code>foo\nbar\n</code></pre>\n",
    "example": 8,
    "start_line": 436,
    "end_line": 443,
    "section": "Tabs"
  },
  {
    "markdown": " - foo\n   - bar\n\t - baz\n",
    "html": "<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>baz</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n",
    "example": 9,
    "start_line": 445,
    "end_line": 461,
    "section": "Tabs"
  },
  {
    "markdown": "#\tFoo\n",
    "html": "<h1>Foo</h1>\n",
    "example": 10,
    "start_line": 463,
    "end_line": 467,
    "section": "Tabs"
  },
  {
    "markdown": "*\t*\t*\t\n",
    "html": "<hr />\n",
    "example": 11,
    "start_line": 469,
    "end_line": 473,
    "section": "Tabs"
  },
  {
    "markdown": "- `one\n- two`\n",
    "html": "<ul>\n<li>`one</li>\n<li>two`</li>\n</ul>\n",
    "example": 12,
    "start_line": 496,
    "end_line": 504,
    "section": "Precedence"
  },
  {
    "markdown": "***\n---\n___\n",
    "html": "<hr />\n<hr />\n<hr />\n",
    "example": 13,
    "start_line": 535,
    "end_line": 543,
    "section": "Thematic breaks"
  },
  {
    "markdown": "+++\n",
    "html": "<p>+++</p>\n",
    "example": 14,
    "start_line": 548,
    "end_line": 552,
    "section": "Thematic breaks"
  },
  {
    "markdown": "===\n",
    "html": "<p>===</p>\n",
    "example": 15,
    "start_line": 555,
    "end_line": 559,
    "section": "Thematic breaks"
  },
  {
    "markdown": "--\n**\n__\n",
    "html": "<p>--\n**\n__</p>\n",
    "example": 16,
    "start_line": 564,
    "end_line": 572,
    "section": "Thematic breaks"
  },
  {
    "markdown": " ***\n  ***\n   ***\n",
    "html": "<hr />\n<hr />\n<hr />\n",
    "example": 17,
    "start_line": 577,
    "end_line": 585,
    "section": "Thematic breaks"
  },
  {
    "markdown": "    ***\n",
    "html": "<pre><code>***\n</code></pre>\n",
    "example": 18,
    "start_line": 590,
    "end_line": 595,
    "section": "Thematic breaks"
  },
  {
    "markdown": "Foo\n    ***\n",
    "html": "<p>Foo\n***</p>\n",
    "example": 19,
    "start_line": 598,
    "end_line": 604,
    "section": "Thematic breaks"
  },
  {
    "markdown": "_____________________________________\n",
    "html": "<hr />\n",
    "example": 20,
    "start_line": 609,
    "end_line": 613,
    "section": "Thematic breaks"
  },
  {
    "markdown": " - - -\n",
    "html": "<hr />\n",
    "example": 21,
    "start_line": 618,
    "end_line": 622,
    "section": "Thematic breaks"
  },
  {
    "markdown": " **  * ** * ** * **\n",
    "html": "<hr />\n",
    "example": 22,
    "start_line": 625,
    "end_line": 629,
    "section": "Thematic breaks"
  },
  {
    "markdown": "-     -      -      -\n",
    "html": "<hr />\n",
    "example": 23,
    "start_line": 632,
    "end_line": 636,
    "section": "Thematic breaks"
  },
  {
    "markdown": "- - - -    \n",
    "html": "<hr />\n",
    "example": 24,
    "start_line": 641,
    "end_line": 645,
    "section": "Thematic breaks"
  },
  {
    "markdown": "_ _ _ _ a\n\na------\n\n---a---\n",
    "html": "<p>_ _ _ _ a</p>\n<p>a------</p>\n<p>---a---</p>\n",
    "example": 25,
    "start_line": 650,
    "end_line": 660,
    "section": "Thematic breaks"
  },
  {
    "markdown": " *-*\n",
    "html": "<p><em>-</em></p>\n",
    "example": 26,
    "start_line": 666,
    "end_line": 670,
    "section": "Thematic breaks"
  },
  {
    "markdown": "- foo\n***\n- bar\n",
    "html": "<ul>\n<li>foo</li>\n</ul>\n<hr />\n<ul>\n<li>bar</li>\n</ul>\n",
    "example": 27,
    "start_line": 675,
    "end_line": 687,
    "section": "Thematic breaks"
  },
  {
    "markdown": "Foo\n***\nbar\n",
    "html": "<p>Foo</p>\n<hr />\n<p>bar</p>\n",
    "example": 28,
    "start_line": 692,
    "end_line": 700,
    "section": "Thematic breaks"
  },
  {
    "markdown": "Foo\n---\nbar\n",
    "html": "<h2>Foo</h2>\n<p>bar</p>\n",
    "example": 29,
    "start_line": 709,
    "end_line": 716,
    "section": "Thematic breaks"
  },
  {
    "markdown": "* Foo\n* * *\n* Bar\n",
    "html": "<ul>\n<li>Foo</li>\n</ul>\n<hr />\n<ul>\n<li>Bar</li>\n</ul>\n",
    "example": 30,
    "start_line": 722,
    "end_line": 734,
    "section": "Thematic breaks"
  },
  {
    "markdown": "- Foo\n- * * *\n",
    "html": "<ul>\n<li>Foo</li>\n<li>\n<hr />\n</li>\n</ul>\n",
    "example": 31,
    "start_line": 739,
    "end_line": 749,
    "section": "Thematic breaks"
  },
  {
    "markdown": "# foo\n## foo\n### foo\n#### foo\n##### foo\n###### foo\n",
    "html": "<h1>foo</h1>\n<h2>foo</h2>\n<h3>foo</h3>\n<h4>foo</h4>\n<h5>foo</h5>\n<h6>foo</h6>\n",
    "example": 32,
    "start_line": 768,
    "end_line": 782,
    "section": "ATX headings"
  },
  {
    "markdown": "####### foo\n",
    "html": "<p>####### foo</p>\n",
    "example": 33,
    "start_line": 787,
    "end_line": 791,
    "section": "ATX headings"
  },
  {
    "markdown": "#5 bolt\n\n#hashtag\n",
    "html": "<p>#5 bolt</p>\n<p>#hashtag</p>\n",
    "example": 34,
    "start_line": 802,
    "end_line": 809,
    "section": "ATX headings"
  },
  {
    "markdown": "\\## foo\n",
    "html": "<p>## foo</p>\n",
    "example": 35,
    "start_line": 814,
    "end_line": 818,
    "section": "ATX headings"
  },
  {
    "markdown": "# foo *bar* \\*baz\\*\n",
    "html": "<h1>foo <em>bar</em> *baz*</h1>\n",
    "example": 36,
    "start_line": 823,
    "end_line": 827,
    "section": "ATX headings"
  },
  {
    "markdown": "#                  foo                     \n",
    "html": "<h1>foo</h1>\n",
    "example": 37,
    "start_line": 832,
    "end_line": 836,
    "section": "ATX headings"
  },
  {
    "markdown": " ### foo\n  ## foo\n   # foo\n",
    "html": "<h3>foo</h3>\n<h2>foo</h2>\n<h1>foo</h1>\n",
    "example": 38,
    "start_line": 841,
    "end_line": 849,
    "section": "ATX headings"
  },
  {
    "markdown": "    # foo\n",
    "html": "<pre><code># foo\n</code></pre>\n",
    "example": 39,
    "start_line": 854,
    "end_line": 859,
    "section": "ATX headings"
  },
  {
    "markdown": "foo\n    # bar\n",
    "html": "<p>foo\n# bar</p>\n",
    "example": 40,
    "start_line": 862,
    "end_line": 868,
    "section": "ATX headings"
  },
  {
    "markdown": "## foo ##\n  ###   bar    ###\n",
    "html": "<h2>foo</h2>\n<h3>bar</h3>\n",
    "example": 41,
    "start_line": 873,
    "end_line": 879,
    "section": "ATX headings"
  },
  {
    "markdown": "# foo ##################################\n##### foo ##\n",
    "html": "<h1>foo</h1>\n<h5>foo</h5>\n",
    "example": 42,
    "start_line": 884,
    "end_line": 890,
    "section": "ATX headings"
  },
  {
    "markdown": "### foo ###     \n",
    "html": "<h3>foo</h3>\n",
    "example": 43,
    "start_line": 895,
    "end_line": 899,
    "section": "ATX headings"
  },
  {
    "markdown": "### foo ### b\n",
    "html": "<h3>foo ### b</h3>\n",
    "example": 44,
    "start_line": 906,
    "end_line": 910,
    "section": "ATX headings"
  },
  {
    "markdown": "# foo#\n",
    "html": "<h1>foo#</h1>\n",
    "example": 45,
    "start_line": 915,
    "end_line": 919,
    "section": "ATX headings"
  },
  {
    "markdown": "### foo \\###\n## foo #\\##\n# foo \\#\n",
    "html": "<h3>foo ###</h3>\n<h2>foo ###</h2>\n<h1>foo #</h1>\n",
    "example": 46,
    "start_line": 925,
    "end_line": 933,
    "section": "ATX headings"
  },
  {
    "markdown": "****\n## foo\n****\n",
    "html": "<hr />\n<h2>foo</h2>\n<hr />\n",
    "example": 47,
    "start_line": 939,
    "end_line": 947,
    "section": "ATX headings"
  },
  {
    "markdown": "Foo bar\n# baz\nBar foo\n",
    "html": "<p>Foo bar</p>\n<h1>baz</h1>\n<p>Bar foo</p>\n",
    "example": 48,
    "start_line": 950,
    "end_line": 958,
    "section": "ATX headings"
  },
  {
    "markdown": "## \n#\n### ###\n",
    "html": "<h2></h2>\n<h1></h1>\n<h3></h3>\n",
    "example": 49,
    "start_line": 963,
    "end_line": 971,
    "section": "ATX headings"
  },
  {
    "markdown": "Foo *bar*\n=========\n\nFoo *bar*\n---------\n",
    "html": "<h1>Foo <em>bar</em></h1>\n<h2>Foo <em>bar</em></h2>\n",
    "example": 50,
    "start_line": 1006,
    "end_line": 1015,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo *bar\nbaz*\n====\n",
    "html": "<h1>Foo <em>bar\nbaz</em></h1>\n",
    "example": 51,
    "start_line": 1020,
    "end_line": 1027,
    "section": "Setext headings"
  },
  {
    "markdown": "  Foo *bar\nbaz*\t\n====\n",
    "html": "<h1>Foo <em>bar\nbaz</em></h1>\n",
    "example": 52,
    "start_line": 1034,
    "end_line": 1041,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\n-------------------------\n\nFoo\n=\n",
    "html": "<h2>Foo</h2>\n<h1>Foo</h1>\n",
    "example": 53,
    "start_line": 1046,
    "end_line": 1055,
    "section": "Setext headings"
  },
  {
    "markdown": "   Foo\n---\n\n  Foo\n-----\n\n  Foo\n  ===\n",
    "html": "<h2>Foo</h2>\n<h2>Foo</h2>\n<h1>Foo</h1>\n",
    "example": 54,
    "start_line": 1061,
    "end_line": 1074,
    "section": "Setext headings"
  },
  {
    "markdown": "    Foo\n    ---\n\n    Foo\n---\n",
    "html": "<pre><code>Foo\n---\n\nFoo\n</code></pre>\n<hr />\n",
    "example": 55,
    "start_line": 1079,
    "end_line": 1092,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\n   ----      \n",
    "html": "<h2>Foo</h2>\n",
    "example": 56,
    "start_line": 1098,
    "end_line": 1103,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\n    ---\n",
    "html": "<p>Foo\n---</p>\n",
    "example": 57,
    "start_line": 1108,
    "end_line": 1114,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\n= =\n\nFoo\n--- -\n",
    "html": "<p>Foo\n= =</p>\n<p>Foo</p>\n<hr />\n",
    "example": 58,
    "start_line": 1119,
    "end_line": 1130,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo  \n-----\n",
    "html": "<h2>Foo</h2>\n",
    "example": 59,
    "start_line": 1135,
    "end_line": 1140,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\\\n----\n",
    "html": "<h2>Foo\\</h2>\n",
    "example": 60,
    "start_line": 1145,
    "end_line": 1150,
    "section": "Setext headings"
  },
  {
    "markdown": "`Foo\n----\n`\n\n<a title=\"a lot\n---\nof dashes\"/>\n",
    "html": "<h2>`Foo</h2>\n<p>`</p>\n<h2>&lt;a title=&quot;a lot</h2>\n<p>of dashes&quot;/&gt;</p>\n",
    "example": 61,
    "start_line": 1156,
    "end_line": 1169,
    "section": "Setext headings"
  },
  {
    "markdown": "> Foo\n---\n",
    "html": "<blockquote>\n<p>Foo</p>\n</blockquote>\n<hr />\n",
    "example": 62,
    "start_line": 1175,
    "end_line": 1183,
    "section": "Setext headings"
  },
  {
    "markdown": "> foo\nbar\n===\n",
    "html": "<blockquote>\n<p>foo\nbar\n===</p>\n</blockquote>\n",
    "example": 63,
    "start_line": 1186,
    "end_line": 1196,
    "section": "Setext headings"
  },
  {
    "markdown": "- Foo\n---\n",
    "html": "<ul>\n<li>Foo</li>\n</ul>\n<hr />\n",
    "example": 64,
    "start_line": 1199,
    "end_line": 1207,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\nBar\n---\n",
    "html": "<h2>Foo\nBar</h2>\n",
    "example": 65,
    "start_line": 1214,
    "end_line": 1221,
    "section": "Setext headings"
  },
  {
    "markdown": "---\nFoo\n---\nBar\n---\nBaz\n",
    "html": "<hr />\n<h2>Foo</h2>\n<h2>Bar</h2>\n<p>Baz</p>\n",
    "example": 66,
    "start_line": 1227,
    "end_line": 1239,
    "section": "Setext headings"
  },
  {
    "markdown": "\n====\n",
    "html": "<p>====</p>\n",
    "example": 67,
    "start_line": 1244,
    "end_line": 1249,
    "section": "Setext headings"
  },
  {
    "markdown": "---\n---\n",
    "html": "<hr />\n<hr />\n",
    "example": 68,
    "start_line": 1256,
    "end_line": 1262,
    "section": "Setext headings"
  },
  {
    "markdown": "- foo\n-----\n",
    "html": "<ul>\n<li>foo</li>\n</ul>\n<hr />\n",
    "example": 69,
    "start_line": 1265,
    "end_line": 1273,
    "section": "Setext headings"
  },
  {
    "markdown": "    foo\n---\n",
    "html": "<pre><code>foo\n</code></pre>\n<hr />\n",
    "example": 70,
    "start_line": 1276,
    "end_line": 1283,
    "section": "Setext headings"
  },
  {
    "markdown": "> foo\n-----\n",
    "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n<hr />\n",
    "example": 71,
    "start_line": 1286,
    "end_line": 1294,
    "section": "Setext headings"
  },
  {
    "markdown": "\\> foo\n------\n",
    "html": "<h2>&gt; foo</h2>\n",
    "example": 72,
    "start_line": 1300,
    "end_line": 1305,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\n\nbar\n---\nbaz\n",
    "html": "<p>Foo</p>\n<h2>bar</h2>\n<p>baz</p>\n",
    "example": 73,
    "start_line": 1331,
    "end_line": 1341,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\nbar\n\n---\n\nbaz\n",
    "html": "<p>Foo\nbar</p>\n<hr />\n<p>baz</p>\n",
    "example": 74,
    "start_line": 1347,
    "end_line": 1359,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\nbar\n* * *\nbaz\n",
    "html": "<p>Foo\nbar</p>\n<hr />\n<p>baz</p>\n",
    "example": 75,
    "start_line": 1365,
    "end_line": 1375,
    "section": "Setext headings"
  },
  {
    "markdown": "Foo\nbar\n\\---\nbaz\n",
    "html": "<p>Foo\nbar\n---\nbaz</p>\n",
    "example": 76,
    "start_line": 1380,
    "end_line": 1390,
    "section": "Setext headings"
  },
  {
    "markdown": "    a simple\n      indented code block\n",
    "html": "<pre><code>a simple\n  indented code block\n</code></pre>\n",
    "example": 77,
    "start_line": 1408,
    "end_line": 1415,
    "section": "Indented code blocks"
  },
  {
    "markdown": "  - foo\n\n    bar\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
    "example": 78,
    "start_line": 1422,
    "end_line": 1433,
    "section": "Indented code blocks"
  },
  {
    "markdown": "1.  foo\n\n    - bar\n",
    "html": "<ol>\n<li>\n<p>foo</p>\n<ul>\n<li>bar</li>\n</ul>\n</li>\n</ol>\n",
    "example": 79,
    "start_line": 1436,
    "end_line": 1449,
    "section": "Indented code blocks"
  },
  {
    "markdown": "    <a/>\n    *hi*\n\n    - one\n",
    "html": "<pre><code>&lt;a/&gt;\n*hi*\n\n- one\n</code></pre>\n",
    "example": 80,
    "start_line": 1456,
    "end_line": 1467,
    "section": "Indented code blocks"
  },
  {
    "markdown": "    chunk1\n\n    chunk2\n  \n \n \n    chunk3\n",
    "html": "<pre><code>chunk1\n\nchunk2\n\n\n\nchunk3\n</code></pre>\n",
    "example": 81,
    "start_line": 1472,
    "end_line": 1489,
    "section": "Indented code blocks"
  },
  {
    "markdown": "    chunk1\n      \n      chunk2\n",
    "html": "<pre><code>chunk1\n  \n  chunk2\n</code></pre>\n",
    "example": 82,
    "start_line": 1495,
    "end_line": 1504,
    "section": "Indented code blocks"
  },
  {
    "markdown": "Foo\n    bar\n\n",
    "html": "<p>Foo\nbar</p>\n",
    "example": 83,
    "start_line": 1510,
    "end_line": 1517,
    "section": "Indented code blocks"
  },
  {
    "markdown": "    foo\nbar\n",
    "html": "<pre><code>foo\n</code></pre>\n<p>bar</p>\n",
    "example": 84,
    "start_line": 1524,
    "end_line": 1531,
    "section": "Indented code blocks"
  },
  {
    "markdown": "# Heading\n    foo\nHeading\n------\n    foo\n----\n",
    "html": "<h1>Heading</h1>\n<pre><code>foo\n</code></pre>\n<h2>Heading</h2>\n<pre><code>foo\n</code></pre>\n<hr />\n",
    "example": 85,
    "start_line": 1537,
    "end_line": 1552,
    "section": "Indented code blocks"
  },
  {
    "markdown": "        foo\n    bar\n",
    "html": "<pre><code>    foo\nbar\n</code></pre>\n",
    "example": 86,
    "start_line": 1557,
    "end_line": 1564,
    "section": "Indented code blocks"
  },
  {
    "markdown": "\n    \n    foo\n    \n\n",
    "html": "<pre><code>foo\n</code></pre>\n",
    "example": 87,
    "start_line": 1570,
    "end_line": 1579,
    "section": "Indented code blocks"
  },
  {
    "markdown": "    foo  \n",
    "html": "<pre><code>foo  \n</code></pre>\n",
    "example": 88,
    "start_line": 1584,
    "end_line": 1589,
    "section": "Indented code blocks"
  },
  {
    "markdown": "```\n<\n >\n```\n",
    "html": "<pre><code>&lt;\n &gt;\n</code></pre>\n",
    "example": 89,
    "start_line": 1639,
    "end_line": 1648,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "~~~\n<\n >\n~~~\n",
    "html": "<pre><code>&lt;\n &gt;\n</code></pre>\n",
    "example": 90,
    "start_line": 1653,
    "end_line": 1662,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "``\nfoo\n``\n",
    "html": "<p><code>foo</code></p>\n",
    "example": 91,
    "start_line": 1666,
    "end_line": 1672,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "```\naaa\n~~~\n```\n",
    "html": "<pre><code>aaa\n~~~\n</code></pre>\n",
    "example": 92,
    "start_line": 1677,
    "end_line": 1686,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "~~~\naaa\n```\n~~~\n",
    "html": "<pre><code>aaa\n```\n</code></pre>\n",
    "example": 93,
    "start_line": 1689,
    "end_line": 1698,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "````\naaa\n```\n``````\n",
    "html": "<pre><code>aaa\n```\n</code></pre>\n",
    "example": 94,
    "start_line": 1703,
    "end_line": 1712,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "~~~~\naaa\n~~~\n~~~~\n",
    "html": "<pre><code>aaa\n~~~\n</code></pre>\n",
    "example": 95,
    "start_line": 1715,
    "end_line": 1724,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "```\n",
    "html": "<pre><code></code></pre>\n",
    "example": 96,
    "start_line": 1730,
    "end_line": 1734,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "`````\n\n```\naaa\n",
    "html": "<pre><code>\n```\naaa\n</code></pre>\n",
    "example": 97,
    "start_line": 1737,
    "end_line": 1747,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "> ```\n> aaa\n\nbbb\n",
    "html": "<blockquote>\n<pre><code>aaa\n</code></pre>\n</blockquote>\n<p>bbb</p>\n",
    "example": 98,
    "start_line": 1750,
    "end_line": 1761,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "```\n\n  \n```\n",
    "html": "<pre><code>\n  \n</code></pre>\n",
    "example": 99,
    "start_line": 1766,
    "end_line": 1775,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "```\n```\n",
    "html": "<pre><code></code></pre>\n",
    "example": 100,
    "start_line": 1780,
    "end_line": 1785,
    "section": "Fenced code blocks"
  },
  {
    "markdown": " ```\n aaa\naaa\n```\n",
    "html": "<pre><code>aaa\naaa\n</code></pre>\n",
    "example": 101,
    "start_line": 1792,
    "end_line": 1801,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "  ```\naaa\n  aaa\naaa\n  ```\n",
    "html": "<pre><code>aaa\naaa\naaa\n</code></pre>\n",
    "example": 102,
    "start_line": 1804,
    "end_line": 1815,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "   ```\n   aaa\n    aaa\n  aaa\n   ```\n",
    "html": "<pre><code>aaa\n aaa\naaa\n</code></pre>\n",
    "example": 103,
    "start_line": 1818,
    "end_line": 1829,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "    ```\n    aaa\n    ```\n",
    "html": "<pre><code>```\naaa\n```\n</code></pre>\n",
    "example": 104,
    "start_line": 1834,
    "end_line": 1843,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "```\naaa\n  ```\n",
    "html": "<pre><code>aaa\n</code></pre>\n",
    "example": 105,
    "start_line": 1849,
    "end_line": 1856,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "   ```\naaa\n  ```\n",
    "html": "<pre><code>aaa\n</code></pre>\n",
    "example": 106,
    "start_line": 1859,
    "end_line": 1866,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "```\naaa\n    ```\n",
    "html": "<pre><code>aaa\n    ```\n</code></pre>\n",
    "example": 107,
    "start_line": 1871,
    "end_line": 1879,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "``` ```\naaa\n",
    "html": "<p><code> </code>\naaa</p>\n",
    "example": 108,
    "start_line": 1885,
    "end_line": 1891,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "~~~~~~\naaa\n~~~ ~~\n",
    "html": "<pre><code>aaa\n~~~ ~~\n</code></pre>\n",
    "example": 109,
    "start_line": 1894,
    "end_line": 1902,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "foo\n```\nbar\n```\nbaz\n",
    "html": "<p>foo</p>\n<pre><code>bar\n</code></pre>\n<p>baz</p>\n",
    "example": 110,
    "start_line": 1908,
    "end_line": 1919,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "foo\n---\n~~~\nbar\n~~~\n# baz\n",
    "html": "<h2>foo</h2>\n<pre><code>bar\n</code></pre>\n<h1>baz</h1>\n",
    "example": 111,
    "start_line": 1925,
    "end_line": 1937,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "```ruby\ndef foo(x)\n  return 3\nend\n```\n",
    "html": "<pre><code class=\"language-ruby\">def foo(x)\n  return 3\nend\n</code></pre>\n",
    "example": 112,
    "start_line": 1947,
    "end_line": 1958,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "~~~~    ruby startline=3 $%@#$\ndef foo(x)\n  return 3\nend\n~~~~~~~\n",
    "html": "<pre><code class=\"language-ruby\">def foo(x)\n  return 3\nend\n</code></pre>\n",
    "example": 113,
    "start_line": 1961,
    "end_line": 1972,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "````;\n````\n",
    "html": "<pre><code class=\"language-;\"></code></pre>\n",
    "example": 114,
    "start_line": 1975,
    "end_line": 1980,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "``` aa ```\nfoo\n",
    "html": "<p><code>aa</code>\nfoo</p>\n",
    "example": 115,
    "start_line": 1985,
    "end_line": 1991,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "~~~ aa ``` ~~~\nfoo\n~~~\n",
    "html": "<pre><code class=\"language-aa\">foo\n</code></pre>\n",
    "example": 116,
    "start_line": 1996,
    "end_line": 2003,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "```\n``` aaa\n```\n",
    "html": "<pre><code>``` aaa\n</code></pre>\n",
    "example": 117,
    "start_line": 2008,
    "end_line": 2015,
    "section": "Fenced code blocks"
  },
  {
    "markdown": "<table><tr><td>\n<pre>\n**Hello**,\n\n_world_.\n</pre>\n</td></tr></table>\n",
    "html": "<table><tr><td>\n<pre>\n**Hello**,\n<p><em>world</em>.\n</pre></p>\n</td></tr></table>\n",
    "example": 118,
    "start_line": 2087,
    "end_line": 2102,
    "section": "HTML blocks"
  },
  {
    "markdown": "<table>\n  <tr>\n    <td>\n           hi\n    </td>\n  </tr>\n</table>\n\nokay.\n",
    "html": "<table>\n  <tr>\n    <td>\n           hi\n    </td>\n  </tr>\n</table>\n<p>okay.</p>\n",
    "example": 119,
    "start_line": 2116,
    "end_line": 2135,
    "section": "HTML blocks"
  },
  {
    "markdown": " <div>\n  *hello*\n         <foo><a>\n",
    "html": " <div>\n  *hello*\n         <foo><a>\n",
    "example": 120,
    "start_line": 2138,
    "end_line": 2146,
    "section": "HTML blocks"
  },
  {
    "markdown": "</div>\n*foo*\n",
    "html": "</div>\n*foo*\n",
    "example": 121,
    "start_line": 2151,
    "end_line": 2157,
    "section": "HTML blocks"
  },
  {
    "markdown": "<DIV CLASS=\"foo\">\n\n*Markdown*\n\n</DIV>\n",
    "html": "<DIV CLASS=\"foo\">\n<p><em>Markdown</em></p>\n</DIV>\n",
    "example": 122,
    "start_line": 2162,
    "end_line": 2172,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div id=\"foo\"\n  class=\"bar\">\n</div>\n",
    "html": "<div id=\"foo\"\n  class=\"bar\">\n</div>\n",
    "example": 123,
    "start_line": 2178,
    "end_line": 2186,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div id=\"foo\" class=\"bar\n  baz\">\n</div>\n",
    "html": "<div id=\"foo\" class=\"bar\n  baz\">\n</div>\n",
    "example": 124,
    "start_line": 2189,
    "end_line": 2197,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div>\n*foo*\n\n*bar*\n",
    "html": "<div>\n*foo*\n<p><em>bar</em></p>\n",
    "example": 125,
    "start_line": 2201,
    "end_line": 2210,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div id=\"foo\"\n*hi*\n",
    "html": "<div id=\"foo\"\n*hi*\n",
    "example": 126,
    "start_line": 2217,
    "end_line": 2223,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div class\nfoo\n",
    "html": "<div class\nfoo\n",
    "example": 127,
    "start_line": 2226,
    "end_line": 2232,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div *???-&&&-<---\n*foo*\n",
    "html": "<div *???-&&&-<---\n*foo*\n",
    "example": 128,
    "start_line": 2238,
    "end_line": 2244,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div><a href=\"bar\">*foo*</a></div>\n",
    "html": "<div><a href=\"bar\">*foo*</a></div>\n",
    "example": 129,
    "start_line": 2250,
    "end_line": 2254,
    "section": "HTML blocks"
  },
  {
    "markdown": "<table><tr><td>\nfoo\n</td></tr></table>\n",
    "html": "<table><tr><td>\nfoo\n</td></tr></table>\n",
    "example": 130,
    "start_line": 2257,
    "end_line": 2265,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div></div>\n``` c\nint x = 33;\n```\n",
    "html": "<div></div>\n``` c\nint x = 33;\n```\n",
    "example": 131,
    "start_line": 2274,
    "end_line": 2284,
    "section": "HTML blocks"
  },
  {
    "markdown": "<a href=\"foo\">\n*bar*\n</a>\n",
    "html": "<a href=\"foo\">\n*bar*\n</a>\n",
    "example": 132,
    "start_line": 2291,
    "end_line": 2299,
    "section": "HTML blocks"
  },
  {
    "markdown": "<Warning>\n*bar*\n</Warning>\n",
    "html": "<Warning>\n*bar*\n</Warning>\n",
    "example": 133,
    "start_line": 2304,
    "end_line": 2312,
    "section": "HTML blocks"
  },
  {
    "markdown": "<i class=\"foo\">\n*bar*\n</i>\n",
    "html": "<i class=\"foo\">\n*bar*\n</i>\n",
    "example": 134,
    "start_line": 2315,
    "end_line": 2323,
    "section": "HTML blocks"
  },
  {
    "markdown": "</ins>\n*bar*\n",
    "html": "</ins>\n*bar*\n",
    "example": 135,
    "start_line": 2326,
    "end_line": 2332,
    "section": "HTML blocks"
  },
  {
    "markdown": "<del>\n*foo*\n</del>\n",
    "html": "<del>\n*foo*\n</del>\n",
    "example": 136,
    "start_line": 2341,
    "end_line": 2349,
    "section": "HTML blocks"
  },
  {
    "markdown": "<del>\n\n*foo*\n\n</del>\n",
    "html": "<del>\n<p><em>foo</em></p>\n</del>\n",
    "example": 137,
    "start_line": 2356,
    "end_line": 2366,
    "section": "HTML blocks"
  },
  {
    "markdown": "<del>*foo*</del>\n",
    "html": "<p><del><em>foo</em></del></p>\n",
    "example": 138,
    "start_line": 2374,
    "end_line": 2378,
    "section": "HTML blocks"
  },
  {
    "markdown": "<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\nokay\n",
    "html": "<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\n<p>okay</p>\n",
    "example": 139,
    "start_line": 2390,
    "end_line": 2406,
    "section": "HTML blocks"
  },
  {
    "markdown": "<script type=\"text/javascript\">\n// JavaScript example\n\ndocument.getElementById(\"demo\").innerHTML = \"Hello JavaScript!\";\n</script>\nokay\n",
    "html": "<script type=\"text/javascript\">\n// JavaScript example\n\ndocument.getElementById(\"demo\").innerHTML = \"Hello JavaScript!\";\n</script>\n<p>okay</p>\n",
    "example": 140,
    "start_line": 2411,
    "end_line": 2425,
    "section": "HTML blocks"
  },
  {
    "markdown": "<style\n  type=\"text/css\">\nh1 {color:red;}\n\np {color:blue;}\n</style>\nokay\n",
    "html": "<style\n  type=\"text/css\">\nh1 {color:red;}\n\np {color:blue;}\n</style>\n<p>okay</p>\n",
    "example": 141,
    "start_line": 2430,
    "end_line": 2446,
    "section": "HTML blocks"
  },
  {
    "markdown": "<style\n  type=\"text/css\">\n\nfoo\n",
    "html": "<style\n  type=\"text/css\">\n\nfoo\n",
    "example": 142,
    "start_line": 2453,
    "end_line": 2463,
    "section": "HTML blocks"
  },
  {
    "markdown": "> <div>\n> foo\n\nbar\n",
    "html": "<blockquote>\n<div>\nfoo\n</blockquote>\n<p>bar</p>\n",
    "example": 143,
    "start_line": 2466,
    "end_line": 2477,
    "section": "HTML blocks"
  },
  {
    "markdown": "- <div>\n- foo\n",
    "html": "<ul>\n<li>\n<div>\n</li>\n<li>foo</li>\n</ul>\n",
    "example": 144,
    "start_line": 2480,
    "end_line": 2490,
    "section": "HTML blocks"
  },
  {
    "markdown": "<style>p{color:red;}</style>\n*foo*\n",
    "html": "<style>p{color:red;}</style>\n<p><em>foo</em></p>\n",
    "example": 145,
    "start_line": 2495,
    "end_line": 2501,
    "section": "HTML blocks"
  },
  {
    "markdown": "<!-- foo -->*bar*\n*baz*\n",
    "html": "<!-- foo -->*bar*\n<p><em>baz</em></p>\n",
    "example": 146,
    "start_line": 2504,
    "end_line": 2510,
    "section": "HTML blocks"
  },
  {
    "markdown": "<script>\nfoo\n</script>1. *bar*\n",
    "html": "<script>\nfoo\n</script>1. *bar*\n",
    "example": 147,
    "start_line": 2516,
    "end_line": 2524,
    "section": "HTML blocks"
  },
  {
    "markdown": "<!-- Foo\n\nbar\n   baz -->\nokay\n",
    "html": "<!-- Foo\n\nbar\n   baz -->\n<p>okay</p>\n",
    "example": 148,
    "start_line": 2529,
    "end_line": 2541,
    "section": "HTML blocks"
  },
  {
    "markdown": "<?php\n\n  echo '>';\n\n?>\nokay\n",
    "html": "<?php\n\n  echo '>';\n\n?>\n<p>okay</p>\n",
    "example": 149,
    "start_line": 2547,
    "end_line": 2561,
    "section": "HTML blocks"
  },
  {
    "markdown": "<!DOCTYPE html>\n",
    "html": "<!DOCTYPE html>\n",
    "example": 150,
    "start_line": 2566,
    "end_line": 2570,
    "section": "HTML blocks"
  },
  {
    "markdown": "<![CDATA[\nfunction matchwo(a,b)\n{\n  if (a < b && a < 0) then {\n    return 1;\n\n  } else {\n\n    return 0;\n  }\n}\n]]>\nokay\n",
    "html": "<![CDATA[\nfunction matchwo(a,b)\n{\n  if (a < b && a < 0) then {\n    return 1;\n\n  } else {\n\n    return 0;\n  }\n}\n]]>\n<p>okay</p>\n",
    "example": 151,
    "start_line": 2575,
    "end_line": 2603,
    "section": "HTML blocks"
  },
  {
    "markdown": "  <!-- foo -->\n\n    <!-- foo -->\n",
    "html": "  <!-- foo -->\n<pre><code>&lt;!-- foo --&gt;\n</code></pre>\n",
    "example": 152,
    "start_line": 2608,
    "end_line": 2616,
    "section": "HTML blocks"
  },
  {
    "markdown": "  <div>\n\n    <div>\n",
    "html": "  <div>\n<pre><code>&lt;div&gt;\n</code></pre>\n",
    "example": 153,
    "start_line": 2619,
    "end_line": 2627,
    "section": "HTML blocks"
  },
  {
    "markdown": "Foo\n<div>\nbar\n</div>\n",
    "html": "<p>Foo</p>\n<div>\nbar\n</div>\n",
    "example": 154,
    "start_line": 2633,
    "end_line": 2643,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div>\nbar\n</div>\n*foo*\n",
    "html": "<div>\nbar\n</div>\n*foo*\n",
    "example": 155,
    "start_line": 2650,
    "end_line": 2660,
    "section": "HTML blocks"
  },
  {
    "markdown": "Foo\n<a href=\"bar\">\nbaz\n",
    "html": "<p>Foo\n<a href=\"bar\">\nbaz</p>\n",
    "example": 156,
    "start_line": 2665,
    "end_line": 2673,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div>\n\n*Emphasized* text.\n\n</div>\n",
    "html": "<div>\n<p><em>Emphasized</em> text.</p>\n</div>\n",
    "example": 157,
    "start_line": 2706,
    "end_line": 2716,
    "section": "HTML blocks"
  },
  {
    "markdown": "<div>\n*Emphasized* text.\n</div>\n",
    "html": "<div>\n*Emphasized* text.\n</div>\n",
    "example": 158,
    "start_line": 2719,
    "end_line": 2727,
    "section": "HTML blocks"
  },
  {
    "markdown": "<table>\n\n<tr>\n\n<td>\nHi\n</td>\n\n</tr>\n\n</table>\n",
    "html": "<table>\n<tr>\n<td>\nHi\n</td>\n</tr>\n</table>\n",
    "example": 159,
    "start_line": 2741,
    "end_line": 2761,
    "section": "HTML blocks"
  },
  {
    "markdown": "<table>\n\n  <tr>\n\n    <td>\n      Hi\n    </td>\n\n  </tr>\n\n</table>\n",
    "html": "<table>\n  <tr>\n<pre><code>&lt;td&gt;\n  Hi\n&lt;/td&gt;\n</code></pre>\n  </tr>\n</table>\n",
    "example": 160,
    "start_line": 2768,
    "end_line": 2789,
    "section": "HTML blocks"
  },
  {
    "markdown": "[foo]: /url \"title\"\n\n[foo]\n",
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "example": 161,
    "start_line": 2816,
    "end_line": 2822,
    "section": "Link reference definitions"
  },
  {
    "markdown": "   [foo]: \n      /url  \n           'the title'  \n\n[foo]\n",
    "html": "<p><a href=\"/url\" title=\"the title\">foo</a></p>\n",
    "example": 162,
    "start_line": 2825,
    "end_line": 2833,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[Foo*bar\\]]:my_(url) 'title (with parens)'\n\n[Foo*bar\\]]\n",
    "html": "<p><a href=\"my_(url)\" title=\"title (with parens)\">Foo*bar]</a></p>\n",
    "example": 163,
    "start_line": 2836,
    "end_line": 2842,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[Foo bar]:\n<my url>\n'title'\n\n[Foo bar]\n",
    "html": "<p><a href=\"my%20url\" title=\"title\">Foo bar</a></p>\n",
    "example": 164,
    "start_line": 2845,
    "end_line": 2853,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url '\ntitle\nline1\nline2\n'\n\n[foo]\n",
    "html": "<p><a href=\"/url\" title=\"\ntitle\nline1\nline2\n\">foo</a></p>\n",
    "example": 165,
    "start_line": 2858,
    "end_line": 2872,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url 'title\n\nwith blank line'\n\n[foo]\n",
    "html": "<p>[foo]: /url 'title</p>\n<p>with blank line'</p>\n<p>[foo]</p>\n",
    "example": 166,
    "start_line": 2877,
    "end_line": 2887,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]:\n/url\n\n[foo]\n",
    "html": "<p><a href=\"/url\">foo</a></p>\n",
    "example": 167,
    "start_line": 2892,
    "end_line": 2899,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]:\n\n[foo]\n",
    "html": "<p>[foo]:</p>\n<p>[foo]</p>\n",
    "example": 168,
    "start_line": 2904,
    "end_line": 2911,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: <>\n\n[foo]\n",
    "html": "<p><a href=\"\">foo</a></p>\n",
    "example": 169,
    "start_line": 2916,
    "end_line": 2922,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: <bar>(baz)\n\n[foo]\n",
    "html": "<p>[foo]: <bar>(baz)</p>\n<p>[foo]</p>\n",
    "example": 170,
    "start_line": 2927,
    "end_line": 2934,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url\\bar\\*baz \"foo\\\"bar\\baz\"\n\n[foo]\n",
    "html": "<p><a href=\"/url%5Cbar*baz\" title=\"foo&quot;bar\\baz\">foo</a></p>\n",
    "example": 171,
    "start_line": 2940,
    "end_line": 2946,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]\n\n[foo]: url\n",
    "html": "<p><a href=\"url\">foo</a></p>\n",
    "example": 172,
    "start_line": 2951,
    "end_line": 2957,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]\n\n[foo]: first\n[foo]: second\n",
    "html": "<p><a href=\"first\">foo</a></p>\n",
    "example": 173,
    "start_line": 2963,
    "end_line": 2970,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[FOO]: /url\n\n[Foo]\n",
    "html": "<p><a href=\"/url\">Foo</a></p>\n",
    "example": 174,
    "start_line": 2976,
    "end_line": 2982,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[ΑΓΩ]: /φου\n\n[αγω]\n",
    "html": "<p><a href=\"/%CF%86%CE%BF%CF%85\">αγω</a></p>\n",
    "example": 175,
    "start_line": 2985,
    "end_line": 2991,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url\n",
    "html": "",
    "example": 176,
    "start_line": 2997,
    "end_line": 3000,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[\nfoo\n]: /url\nbar\n",
    "html": "<p>bar</p>\n",
    "example": 177,
    "start_line": 3005,
    "end_line": 3012,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url \"title\" ok\n",
    "html": "<p>[foo]: /url &quot;title&quot; ok</p>\n",
    "example": 178,
    "start_line": 3018,
    "end_line": 3022,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url\n\"title\" ok\n",
    "html": "<p>&quot;title&quot; ok</p>\n",
    "example": 179,
    "start_line": 3027,
    "end_line": 3032,
    "section": "Link reference definitions"
  },
  {
    "markdown": "    [foo]: /url \"title\"\n\n[foo]\n",
    "html": "<pre><code>[foo]: /url &quot;title&quot;\n</code></pre>\n<p>[foo]</p>\n",
    "example": 180,
    "start_line": 3038,
    "end_line": 3046,
    "section": "Link reference definitions"
  },
  {
    "markdown": "```\n[foo]: /url\n```\n\n[foo]\n",
    "html": "<pre><code>[foo]: /url\n</code></pre>\n<p>[foo]</p>\n",
    "example": 181,
    "start_line": 3052,
    "end_line": 3062,
    "section": "Link reference definitions"
  },
  {
    "markdown": "Foo\n[bar]: /baz\n\n[bar]\n",
    "html": "<p>Foo\n[bar]: /baz</p>\n<p>[bar]</p>\n",
    "example": 182,
    "start_line": 3067,
    "end_line": 3076,
    "section": "Link reference definitions"
  },
  {
    "markdown": "# [Foo]\n[foo]: /url\n> bar\n",
    "html": "<h1><a href=\"/url\">Foo</a></h1>\n<blockquote>\n<p>bar</p>\n</blockquote>\n",
    "example": 183,
    "start_line": 3082,
    "end_line": 3091,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url\nbar\n===\n[foo]\n",
    "html": "<h1>bar</h1>\n<p><a href=\"/url\">foo</a></p>\n",
    "example": 184,
    "start_line": 3093,
    "end_line": 3101,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url\n===\n[foo]\n",
    "html": "<p>===\n<a href=\"/url\">foo</a></p>\n",
    "example": 185,
    "start_line": 3103,
    "end_line": 3110,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /foo-url \"foo\"\n[bar]: /bar-url\n  \"bar\"\n[baz]: /baz-url\n\n[foo],\n[bar],\n[baz]\n",
    "html": "<p><a href=\"/foo-url\" title=\"foo\">foo</a>,\n<a href=\"/bar-url\" title=\"bar\">bar</a>,\n<a href=\"/baz-url\">baz</a></p>\n",
    "example": 186,
    "start_line": 3116,
    "end_line": 3129,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]\n\n> [foo]: /url\n",
    "html": "<p><a href=\"/url\">foo</a></p>\n<blockquote>\n</blockquote>\n",
    "example": 187,
    "start_line": 3137,
    "end_line": 3145,
    "section": "Link reference definitions"
  },
  {
    "markdown": "[foo]: /url\n",
    "html": "",
    "example": 188,
    "start_line": 3154,
    "end_line": 3157,
    "section": "Link reference definitions"
  },
  {
    "markdown": "aaa\n\nbbb\n",
    "html": "<p>aaa</p>\n<p>bbb</p>\n",
    "example": 189,
    "start_line": 3171,
    "end_line": 3178,
    "section": "Paragraphs"
  },
  {
    "markdown": "aaa\nbbb\n\nccc\nddd\n",
    "html": "<p>aaa\nbbb</p>\n<p>ccc\nddd</p>\n",
    "example": 190,
    "start_line": 3183,
    "end_line": 3194,
    "section": "Paragraphs"
  },
  {
    "markdown": "aaa\n\n\nbbb\n",
    "html": "<p>aaa</p>\n<p>bbb</p>\n",
    "example": 191,
    "start_line": 3199,
    "end_line": 3207,
    "section": "Paragraphs"
  },
  {
    "markdown": "  aaa\n bbb\n",
    "html": "<p>aaa\nbbb</p>\n",
    "example": 192,
    "start_line": 3212,
    "end_line": 3218,
    "section": "Paragraphs"
  },
  {
    "markdown": "aaa\n             bbb\n                                       ccc\n",
    "html": "<p>aaa\nbbb\nccc</p>\n",
    "example": 193,
    "start_line": 3224,
    "end_line": 3232,
    "section": "Paragraphs"
  },
  {
    "markdown": "   aaa\nbbb\n",
    "html": "<p>aaa\nbbb</p>\n",
    "example": 194,
    "start_line": 3238,
    "end_line": 3244,
    "section": "Paragraphs"
  },
  {
    "markdown": "    aaa\nbbb\n",
    "html": "<pre><code>aaa\n</code></pre>\n<p>bbb</p>\n",
    "example": 195,
    "start_line": 3247,
    "end_line": 3254,
    "section": "Paragraphs"
  },
  {
    "markdown": "aaa     \nbbb     \n",
    "html": "<p>aaa<br />\nbbb</p>\n",
    "example": 196,
    "start_line": 3261,
    "end_line": 3267,
    "section": "Paragraphs"
  },
  {
    "markdown": "  \n\naaa\n  \n\n# aaa\n\n  \n",
    "html": "<p>aaa</p>\n<h1>aaa</h1>\n",
    "example": 197,
    "start_line": 3278,
    "end_line": 3290,
    "section": "Blank lines"
  },
  {
    "markdown": "> # Foo\n> bar\n> baz\n",
    "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "example": 198,
    "start_line": 3344,
    "end_line": 3354,
    "section": "Block quotes"
  },
  {
    "markdown": "># Foo\n>bar\n> baz\n",
    "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "example": 199,
    "start_line": 3359,
    "end_line": 3369,
    "section": "Block quotes"
  },
  {
    "markdown": "   > # Foo\n   > bar\n > baz\n",
    "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "example": 200,
    "start_line": 3374,
    "end_line": 3384,
    "section": "Block quotes"
  },
  {
    "markdown": "    > # Foo\n    > bar\n    > baz\n",
    "html": "<pre><code>&gt; # Foo\n&gt; bar\n&gt; baz\n</code></pre>\n",
    "example": 201,
    "start_line": 3389,
    "end_line": 3398,
    "section": "Block quotes"
  },
  {
    "markdown": "> # Foo\n> bar\nbaz\n",
    "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "example": 202,
    "start_line": 3404,
    "end_line": 3414,
    "section": "Block quotes"
  },
  {
    "markdown": "> bar\nbaz\n> foo\n",
    "html": "<blockquote>\n<p>bar\nbaz\nfoo</p>\n</blockquote>\n",
    "example": 203,
    "start_line": 3420,
    "end_line": 3430,
    "section": "Block quotes"
  },
  {
    "markdown": "> foo\n---\n",
    "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n<hr />\n",
    "example": 204,
    "start_line": 3444,
    "end_line": 3452,
    "section": "Block quotes"
  },
  {
    "markdown": "> - foo\n- bar\n",
    "html": "<blockquote>\n<ul>\n<li>foo</li>\n</ul>\n</blockquote>\n<ul>\n<li>bar</li>\n</ul>\n",
    "example": 205,
    "start_line": 3464,
    "end_line": 3476,
    "section": "Block quotes"
  },
  {
    "markdown": ">     foo\n    bar\n",
    "html": "<blockquote>\n<pre><code>foo\n</code></pre>\n</blockquote>\n<pre><code>bar\n</code></pre>\n",
    "example": 206,
    "start_line": 3482,
    "end_line": 3492,
    "section": "Block quotes"
  },
  {
    "markdown": "> ```\nfoo\n```\n",
    "html": "<blockquote>\n<pre><code></code></pre>\n</blockquote>\n<p>foo</p>\n<pre><code></code></pre>\n",
    "example": 207,
    "start_line": 3495,
    "end_line": 3505,
    "section": "Block quotes"
  },
  {
    "markdown": "> foo\n    - bar\n",
    "html": "<blockquote>\n<p>foo\n- bar</p>\n</blockquote>\n",
    "example": 208,
    "start_line": 3511,
    "end_line": 3519,
    "section": "Block quotes"
  },
  {
    "markdown": ">\n",
    "html": "<blockquote>\n</blockquote>\n",
    "example": 209,
    "start_line": 3535,
    "end_line": 3540,
    "section": "Block quotes"
  },
  {
    "markdown": ">\n>  \n> \n",
    "html": "<blockquote>\n</blockquote>\n",
    "example": 210,
    "start_line": 3543,
    "end_line": 3550,
    "section": "Block quotes"
  },
  {
    "markdown": ">\n> foo\n>  \n",
    "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n",
    "example": 211,
    "start_line": 3555,
    "end_line": 3563,
    "section": "Block quotes"
  },
  {
    "markdown": "> foo\n\n> bar\n",
    "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n<blockquote>\n<p>bar</p>\n</blockquote>\n",
    "example": 212,
    "start_line": 3568,
    "end_line": 3579,
    "section": "Block quotes"
  },
  {
    "markdown": "> foo\n> bar\n",
    "html": "<blockquote>\n<p>foo\nbar</p>\n</blockquote>\n",
    "example": 213,
    "start_line": 3590,
    "end_line": 3598,
    "section": "Block quotes"
  },
  {
    "markdown": "> foo\n>\n> bar\n",
    "html": "<blockquote>\n<p>foo</p>\n<p>bar</p>\n</blockquote>\n",
    "example": 214,
    "start_line": 3603,
    "end_line": 3612,
    "section": "Block quotes"
  },
  {
    "markdown": "foo\n> bar\n",
    "html": "<p>foo</p>\n<blockquote>\n<p>bar</p>\n</blockquote>\n",
    "example": 215,
    "start_line": 3617,
    "end_line": 3625,
    "section": "Block quotes"
  },
  {
    "markdown": "> aaa\n***\n> bbb\n",
    "html": "<blockquote>\n<p>aaa</p>\n</blockquote>\n<hr />\n<blockquote>\n<p>bbb</p>\n</blockquote>\n",
    "example": 216,
    "start_line": 3631,
    "end_line": 3643,
    "section": "Block quotes"
  },
  {
    "markdown": "> bar\nbaz\n",
    "html": "<blockquote>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "example": 217,
    "start_line": 3649,
    "end_line": 3657,
    "section": "Block quotes"
  },
  {
    "markdown": "> bar\n\nbaz\n",
    "html": "<blockquote>\n<p>bar</p>\n</blockquote>\n<p>baz</p>\n",
    "example": 218,
    "start_line": 3660,
    "end_line": 3669,
    "section": "Block quotes"
  },
  {
    "markdown": "> bar\n>\nbaz\n",
    "html": "<blockquote>\n<p>bar</p>\n</blockquote>\n<p>baz</p>\n",
    "example": 219,
    "start_line": 3672,
    "end_line": 3681,
    "section": "Block quotes"
  },
  {
    "markdown": "> > > foo\nbar\n",
    "html": "<blockquote>\n<blockquote>\n<blockquote>\n<p>foo\nbar</p>\n</blockquote>\n</blockquote>\n</blockquote>\n",
    "example": 220,
    "start_line": 3688,
    "end_line": 3700,
    "section": "Block quotes"
  },
  {
    "markdown": ">>> foo\n> bar\n>>baz\n",
    "html": "<blockquote>\n<blockquote>\n<blockquote>\n<p>foo\nbar\nbaz</p>\n</blockquote>\n</blockquote>\n</blockquote>\n",
    "example": 221,
    "start_line": 3703,
    "end_line": 3717,
    "section": "Block quotes"
  },
  {
    "markdown": ">     code\n\n>    not code\n",
    "html": "<blockquote>\n<pre><code>code\n</code></pre>\n</blockquote>\n<blockquote>\n<p>not code</p>\n</blockquote>\n",
    "example": 222,
    "start_line": 3725,
    "end_line": 3737,
    "section": "Block quotes"
  },
  {
    "markdown": "A paragraph\nwith two lines.\n\n    indented code\n\n> A block quote.\n",
    "html": "<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n",
    "example": 223,
    "start_line": 3779,
    "end_line": 3794,
    "section": "List items"
  },
  {
    "markdown": "1.  A paragraph\n    with two lines.\n\n        indented code\n\n    > A block quote.\n",
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "example": 224,
    "start_line": 3801,
    "end_line": 3820,
    "section": "List items"
  },
  {
    "markdown": "- one\n\n two\n",
    "html": "<ul>\n<li>one</li>\n</ul>\n<p>two</p>\n",
    "example": 225,
    "start_line": 3834,
    "end_line": 3843,
    "section": "List items"
  },
  {
    "markdown": "- one\n\n  two\n",
    "html": "<ul>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ul>\n",
    "example": 226,
    "start_line": 3846,
    "end_line": 3857,
    "section": "List items"
  },
  {
    "markdown": " -    one\n\n     two\n",
    "html": "<ul>\n<li>one</li>\n</ul>\n<pre><code> two\n</code></pre>\n",
    "example": 227,
    "start_line": 3860,
    "end_line": 3870,
    "section": "List items"
  },
  {
    "markdown": " -    one\n\n      two\n",
    "html": "<ul>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ul>\n",
    "example": 228,
    "start_line": 3873,
    "end_line": 3884,
    "section": "List items"
  },
  {
    "markdown": "   > > 1.  one\n>>\n>>     two\n",
    "html": "<blockquote>\n<blockquote>\n<ol>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ol>\n</blockquote>\n</blockquote>\n",
    "example": 229,
    "start_line": 3895,
    "end_line": 3910,
    "section": "List items"
  },
  {
    "markdown": ">>- one\n>>\n  >  > two\n",
    "html": "<blockquote>\n<blockquote>\n<ul>\n<li>one</li>\n</ul>\n<p>two</p>\n</blockquote>\n</blockquote>\n",
    "example": 230,
    "start_line": 3922,
    "end_line": 3935,
    "section": "List items"
  },
  {
    "markdown": "-one\n\n2.two\n",
    "html": "<p>-one</p>\n<p>2.two</p>\n",
    "example": 231,
    "start_line": 3941,
    "end_line": 3948,
    "section": "List items"
  },
  {
    "markdown": "- foo\n\n\n  bar\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
    "example": 232,
    "start_line": 3954,
    "end_line": 3966,
    "section": "List items"
  },
  {
    "markdown": "1.  foo\n\n    ```\n    bar\n    ```\n\n    baz\n\n    > bam\n",
    "html": "<ol>\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n<p>baz</p>\n<blockquote>\n<p>bam</p>\n</blockquote>\n</li>\n</ol>\n",
    "example": 233,
    "start_line": 3971,
    "end_line": 3993,
    "section": "List items"
  },
  {
    "markdown": "- Foo\n\n      bar\n\n\n      baz\n",
    "html": "<ul>\n<li>\n<p>Foo</p>\n<pre><code>bar\n\n\nbaz\n</code></pre>\n</li>\n</ul>\n",
    "example": 234,
    "start_line": 3999,
    "end_line": 4017,
    "section": "List items"
  },
  {
    "markdown": "123456789. ok\n",
    "html": "<ol start=\"123456789\">\n<li>ok</li>\n</ol>\n",
    "example": 235,
    "start_line": 4021,
    "end_line": 4027,
    "section": "List items"
  },
  {
    "markdown": "1234567890. not ok\n",
    "html": "<p>1234567890. not ok</p>\n",
    "example": 236,
    "start_line": 4030,
    "end_line": 4034,
    "section": "List items"
  },
  {
    "markdown": "0. ok\n",
    "html": "<ol start=\"0\">\n<li>ok</li>\n</ol>\n",
    "example": 237,
    "start_line": 4039,
    "end_line": 4045,
    "section": "List items"
  },
  {
    "markdown": "003. ok\n",
    "html": "<ol start=\"3\">\n<li>ok</li>\n</ol>\n",
    "example": 238,
    "start_line": 4048,
    "end_line": 4054,
    "section": "List items"
  },
  {
    "markdown": "-1. not ok\n",
    "html": "<p>-1. not ok</p>\n",
    "example": 239,
    "start_line": 4059,
    "end_line": 4063,
    "section": "List items"
  },
  {
    "markdown": "- foo\n\n      bar\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n</li>\n</ul>\n",
    "example": 240,
    "start_line": 4082,
    "end_line": 4094,
    "section": "List items"
  },
  {
    "markdown": "  10.  foo\n\n           bar\n",
    "html": "<ol start=\"10\">\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n</li>\n</ol>\n",
    "example": 241,
    "start_line": 4099,
    "end_line": 4111,
    "section": "List items"
  },
  {
    "markdown": "    indented code\n\nparagraph\n\n    more code\n",
    "html": "<pre><code>indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n",
    "example": 242,
    "start_line": 4118,
    "end_line": 4130,
    "section": "List items"
  },
  {
    "markdown": "1.     indented code\n\n   paragraph\n\n       more code\n",
    "html": "<ol>\n<li>\n<pre><code>indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n</li>\n</ol>\n",
    "example": 243,
    "start_line": 4133,
    "end_line": 4149,
    "section": "List items"
  },
  {
    "markdown": "1.      indented code\n\n   paragraph\n\n       more code\n",
    "html": "<ol>\n<li>\n<pre><code> indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n</li>\n</ol>\n",
    "example": 244,
    "start_line": 4155,
    "end_line": 4171,
    "section": "List items"
  },
  {
    "markdown": "   foo\n\nbar\n",
    "html": "<p>foo</p>\n<p>bar</p>\n",
    "example": 245,
    "start_line": 4182,
    "end_line": 4189,
    "section": "List items"
  },
  {
    "markdown": "-    foo\n\n  bar\n",
    "html": "<ul>\n<li>foo</li>\n</ul>\n<p>bar</p>\n",
    "example": 246,
    "start_line": 4192,
    "end_line": 4201,
    "section": "List items"
  },
  {
    "markdown": "-  foo\n\n   bar\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
    "example": 247,
    "start_line": 4209,
    "end_line": 4220,
    "section": "List items"
  },
  {
    "markdown": "-\n  foo\n-\n  ```\n  bar\n  ```\n-\n      baz\n",
    "html": "<ul>\n<li>foo</li>\n<li>\n<pre><code>bar\n</code></pre>\n</li>\n<li>\n<pre><code>baz\n</code></pre>\n</li>\n</ul>\n",
    "example": 248,
    "start_line": 4237,
    "end_line": 4258,
    "section": "List items"
  },
  {
    "markdown": "-   \n  foo\n",
    "html": "<ul>\n<li>foo</li>\n</ul>\n",
    "example": 249,
    "start_line": 4263,
    "end_line": 4270,
    "section": "List items"
  },
  {
    "markdown": "-\n\n  foo\n",
    "html": "<ul>\n<li></li>\n</ul>\n<p>foo</p>\n",
    "example": 250,
    "start_line": 4277,
    "end_line": 4286,
    "section": "List items"
  },
  {
    "markdown": "- foo\n-\n- bar\n",
    "html": "<ul>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ul>\n",
    "example": 251,
    "start_line": 4291,
    "end_line": 4301,
    "section": "List items"
  },
  {
    "markdown": "- foo\n-   \n- bar\n",
    "html": "<ul>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ul>\n",
    "example": 252,
    "start_line": 4306,
    "end_line": 4316,
    "section": "List items"
  },
  {
    "markdown": "1. foo\n2.\n3. bar\n",
    "html": "<ol>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ol>\n",
    "example": 253,
    "start_line": 4321,
    "end_line": 4331,
    "section": "List items"
  },
  {
    "markdown": "*\n",
    "html": "<ul>\n<li></li>\n</ul>\n",
    "example": 254,
    "start_line": 4336,
    "end_line": 4342,
    "section": "List items"
  },
  {
    "markdown": "foo\n*\n\nfoo\n1.\n",
    "html": "<p>foo\n*</p>\n<p>foo\n1.</p>\n",
    "example": 255,
    "start_line": 4346,
    "end_line": 4357,
    "section": "List items"
  },
  {
    "markdown": " 1.  A paragraph\n     with two lines.\n\n         indented code\n\n     > A block quote.\n",
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "example": 256,
    "start_line": 4368,
    "end_line": 4387,
    "section": "List items"
  },
  {
    "markdown": "  1.  A paragraph\n      with two lines.\n\n          indented code\n\n      > A block quote.\n",
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "example": 257,
    "start_line": 4392,
    "end_line": 4411,
    "section": "List items"
  },
  {
    "markdown": "   1.  A paragraph\n       with two lines.\n\n           indented code\n\n       > A block quote.\n",
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "example": 258,
    "start_line": 4416,
    "end_line": 4435,
    "section": "List items"
  },
  {
    "markdown": "    1.  A paragraph\n        with two lines.\n\n            indented code\n\n        > A block quote.\n",
    "html": "<pre><code>1.  A paragraph\n    with two lines.\n\n        indented code\n\n    &gt; A block quote.\n</code></pre>\n",
    "example": 259,
    "start_line": 4440,
    "end_line": 4455,
    "section": "List items"
  },
  {
    "markdown": "  1.  A paragraph\nwith two lines.\n\n          indented code\n\n      > A block quote.\n",
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "example": 260,
    "start_line": 4470,
    "end_line": 4489,
    "section": "List items"
  },
  {
    "markdown": "  1.  A paragraph\n    with two lines.\n",
    "html": "<ol>\n<li>A paragraph\nwith two lines.</li>\n</ol>\n",
    "example": 261,
    "start_line": 4494,
    "end_line": 4502,
    "section": "List items"
  },
  {
    "markdown": "> 1. > Blockquote\ncontinued here.\n",
    "html": "<blockquote>\n<ol>\n<li>\n<blockquote>\n<p>Blockquote\ncontinued here.</p>\n</blockquote>\n</li>\n</ol>\n</blockquote>\n",
    "example": 262,
    "start_line": 4507,
    "end_line": 4521,
    "section": "List items"
  },
  {
    "markdown": "> 1. > Blockquote\n> continued here.\n",
    "html": "<blockquote>\n<ol>\n<li>\n<blockquote>\n<p>Blockquote\ncontinued here.</p>\n</blockquote>\n</li>\n</ol>\n</blockquote>\n",
    "example": 263,
    "start_line": 4524,
    "end_line": 4538,
    "section": "List items"
  },
  {
    "markdown": "- foo\n  - bar\n    - baz\n      - boo\n",
    "html": "<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>baz\n<ul>\n<li>boo</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n",
    "example": 264,
    "start_line": 4552,
    "end_line": 4573,
    "section": "List items"
  },
  {
    "markdown": "- foo\n - bar\n  - baz\n   - boo\n",
    "html": "<ul>\n<li>foo</li>\n<li>bar</li>\n<li>baz</li>\n<li>boo</li>\n</ul>\n",
    "example": 265,
    "start_line": 4578,
    "end_line": 4590,
    "section": "List items"
  },
  {
    "markdown": "10) foo\n    - bar\n",
    "html": "<ol start=\"10\">\n<li>foo\n<ul>\n<li>bar</li>\n</ul>\n</li>\n</ol>\n",
    "example": 266,
    "start_line": 4595,
    "end_line": 4606,
    "section": "List items"
  },
  {
    "markdown": "10) foo\n   - bar\n",
    "html": "<ol start=\"10\">\n<li>foo</li>\n</ol>\n<ul>\n<li>bar</li>\n</ul>\n",
    "example": 267,
    "start_line": 4611,
    "end_line": 4621,
    "section": "List items"
  },
  {
    "markdown": "- - foo\n",
    "html": "<ul>\n<li>\n<ul>\n<li>foo</li>\n</ul>\n</li>\n</ul>\n",
    "example": 268,
    "start_line": 4626,
    "end_line": 4636,
    "section": "List items"
  },
  {
    "markdown": "1. - 2. foo\n",
    "html": "<ol>\n<li>\n<ul>\n<li>\n<ol start=\"2\">\n<li>foo</li>\n</ol>\n</li>\n</ul>\n</li>\n</ol>\n",
    "example": 269,
    "start_line": 4639,
    "end_line": 4653,
    "section": "List items"
  },
  {
    "markdown": "- # Foo\n- Bar\n  ---\n  baz\n",
    "html": "<ul>\n<li>\n<h1>Foo</h1>\n</li>\n<li>\n<h2>Bar</h2>\nbaz</li>\n</ul>\n",
    "example": 270,
    "start_line": 4658,
    "end_line": 4672,
    "section": "List items"
  },
  {
    "markdown": "- foo\n- bar\n+ baz\n",
    "html": "<ul>\n<li>foo</li>\n<li>bar</li>\n</ul>\n<ul>\n<li>baz</li>\n</ul>\n",
    "example": 271,
    "start_line": 4894,
    "end_line": 4906,
    "section": "Lists"
  },
  {
    "markdown": "1. foo\n2. bar\n3) baz\n",
    "html": "<ol>\n<li>foo</li>\n<li>bar</li>\n</ol>\n<ol start=\"3\">\n<li>baz</li>\n</ol>\n",
    "example": 272,
    "start_line": 4909,
    "end_line": 4921,
    "section": "Lists"
  },
  {
    "markdown": "Foo\n- bar\n- baz\n",
    "html": "<p>Foo</p>\n<ul>\n<li>bar</li>\n<li>baz</li>\n</ul>\n",
    "example": 273,
    "start_line": 4928,
    "end_line": 4938,
    "section": "Lists"
  },
  {
    "markdown": "The number of windows in my house is\n14.  The number of doors is 6.\n",
    "html": "<p>The number of windows in my house is\n14.  The number of doors is 6.</p>\n",
    "example": 274,
    "start_line": 5005,
    "end_line": 5011,
    "section": "Lists"
  },
  {
    "markdown": "The number of windows in my house is\n1.  The number of doors is 6.\n",
    "html": "<p>The number of windows in my house is</p>\n<ol>\n<li>The number of doors is 6.</li>\n</ol>\n",
    "example": 275,
    "start_line": 5015,
    "end_line": 5023,
    "section": "Lists"
  },
  {
    "markdown": "- foo\n\n- bar\n\n\n- baz\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n</li>\n<li>\n<p>bar</p>\n</li>\n<li>\n<p>baz</p>\n</li>\n</ul>\n",
    "example": 276,
    "start_line": 5029,
    "end_line": 5048,
    "section": "Lists"
  },
  {
    "markdown": "- foo\n  - bar\n    - baz\n\n\n      bim\n",
    "html": "<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>\n<p>baz</p>\n<p>bim</p>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n",
    "example": 277,
    "start_line": 5050,
    "end_line": 5072,
    "section": "Lists"
  },
  {
    "markdown": "- foo\n- bar\n\n<!-- -->\n\n- baz\n- bim\n",
    "html": "<ul>\n<li>foo</li>\n<li>bar</li>\n</ul>\n<!-- -->\n<ul>\n<li>baz</li>\n<li>bim</li>\n</ul>\n",
    "example": 278,
    "start_line": 5080,
    "end_line": 5098,
    "section": "Lists"
  },
  {
    "markdown": "-   foo\n\n    notcode\n\n-   foo\n\n<!-- -->\n\n    code\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>notcode</p>\n</li>\n<li>\n<p>foo</p>\n</li>\n</ul>\n<!-- -->\n<pre><code>code\n</code></pre>\n",
    "example": 279,
    "start_line": 5101,
    "end_line": 5124,
    "section": "Lists"
  },
  {
    "markdown": "- a\n - b\n  - c\n   - d\n  - e\n - f\n- g\n",
    "html": "<ul>\n<li>a</li>\n<li>b</li>\n<li>c</li>\n<li>d</li>\n<li>e</li>\n<li>f</li>\n<li>g</li>\n</ul>\n",
    "example": 280,
    "start_line": 5132,
    "end_line": 5150,
    "section": "Lists"
  },
  {
    "markdown": "1. a\n\n  2. b\n\n   3. c\n",
    "html": "<ol>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>c</p>\n</li>\n</ol>\n",
    "example": 281,
    "start_line": 5153,
    "end_line": 5171,
    "section": "Lists"
  },
  {
    "markdown": "- a\n - b\n  - c\n   - d\n    - e\n",
    "html": "<ul>\n<li>a</li>\n<li>b</li>\n<li>c</li>\n<li>d\n- e</li>\n</ul>\n",
    "example": 282,
    "start_line": 5177,
    "end_line": 5191,
    "section": "Lists"
  },
  {
    "markdown": "1. a\n\n  2. b\n\n    3. c\n",
    "html": "<ol>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n</ol>\n<pre><code>3. c\n</code></pre>\n",
    "example": 283,
    "start_line": 5197,
    "end_line": 5214,
    "section": "Lists"
  },
  {
    "markdown": "- a\n- b\n\n- c\n",
    "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>c</p>\n</li>\n</ul>\n",
    "example": 284,
    "start_line": 5220,
    "end_line": 5237,
    "section": "Lists"
  },
  {
    "markdown": "* a\n*\n\n* c\n",
    "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li></li>\n<li>\n<p>c</p>\n</li>\n</ul>\n",
    "example": 285,
    "start_line": 5242,
    "end_line": 5257,
    "section": "Lists"
  },
  {
    "markdown": "- a\n- b\n\n  c\n- d\n",
    "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n<p>c</p>\n</li>\n<li>\n<p>d</p>\n</li>\n</ul>\n",
    "example": 286,
    "start_line": 5264,
    "end_line": 5283,
    "section": "Lists"
  },
  {
    "markdown": "- a\n- b\n\n  [ref]: /url\n- d\n",
    "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>d</p>\n</li>\n</ul>\n",
    "example": 287,
    "start_line": 5286,
    "end_line": 5304,
    "section": "Lists"
  },
  {
    "markdown": "- a\n- ```\n  b\n\n\n  ```\n- c\n",
    "html": "<ul>\n<li>a</li>\n<li>\n<pre><code>b\n\n\n</code></pre>\n</li>\n<li>c</li>\n</ul>\n",
    "example": 288,
    "start_line": 5309,
    "end_line": 5328,
    "section": "Lists"
  },
  {
    "markdown": "- a\n  - b\n\n    c\n- d\n",
    "html": "<ul>\n<li>a\n<ul>\n<li>\n<p>b</p>\n<p>c</p>\n</li>\n</ul>\n</li>\n<li>d</li>\n</ul>\n",
    "example": 289,
    "start_line": 5335,
    "end_line": 5353,
    "section": "Lists"
  },
  {
    "markdown": "* a\n  > b\n  >\n* c\n",
    "html": "<ul>\n<li>a\n<blockquote>\n<p>b</p>\n</blockquote>\n</li>\n<li>c</li>\n</ul>\n",
    "example": 290,
    "start_line": 5359,
    "end_line": 5373,
    "section": "Lists"
  },
  {
    "markdown": "- a\n  > b\n  ```\n  c\n  ```\n- d\n",
    "html": "<ul>\n<li>a\n<blockquote>\n<p>b</p>\n</blockquote>\n<pre><code>c\n</code></pre>\n</li>\n<li>d</li>\n</ul>\n",
    "example": 291,
    "start_line": 5379,
    "end_line": 5397,
    "section": "Lists"
  },
  {
    "markdown": "- a\n",
    "html": "<ul>\n<li>a</li>\n</ul>\n",
    "example": 292,
    "start_line": 5402,
    "end_line": 5408,
    "section": "Lists"
  },
  {
    "markdown": "- a\n  - b\n",
    "html": "<ul>\n<li>a\n<ul>\n<li>b</li>\n</ul>\n</li>\n</ul>\n",
    "example": 293,
    "start_line": 5411,
    "end_line": 5422,
    "section": "Lists"
  },
  {
    "markdown": "1. ```\n   foo\n   ```\n\n   bar\n",
    "html": "<ol>\n<li>\n<pre><code>foo\n</code></pre>\n<p>bar</p>\n</li>\n</ol>\n",
    "example": 294,
    "start_line": 5428,
    "end_line": 5442,
    "section": "Lists"
  },
  {
    "markdown": "* foo\n  * bar\n\n  baz\n",
    "html": "<ul>\n<li>\n<p>foo</p>\n<ul>\n<li>bar</li>\n</ul>\n<p>baz</p>\n</li>\n</ul>\n",
    "example": 295,
    "start_line": 5447,
    "end_line": 5462,
    "section": "Lists"
  },
  {
    "markdown": "- a\n  - b\n  - c\n\n- d\n  - e\n  - f\n",
    "html": "<ul>\n<li>\n<p>a</p>\n<ul>\n<li>b</li>\n<li>c</li>\n</ul>\n</li>\n<li>\n<p>d</p>\n<ul>\n<li>e</li>\n<li>f</li>\n</ul>\n</li>\n</ul>\n",
    "example": 296,
    "start_line": 5465,
    "end_line": 5490,
    "section": "Lists"
  },
  {
    "markdown": "`hi`lo`\n",
    "html": "<p><code>hi</code>lo`</p>\n",
    "example": 297,
    "start_line": 5499,
    "end_line": 5503,
    "section": "Inlines"
  },
  {
    "markdown": "\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\-\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\\\\\]\\^\\_\\`\\{\\|\\}\\~\n",
    "html": "<p>!&quot;#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</p>\n",
    "example": 298,
    "start_line": 5513,
    "end_line": 5517,
    "section": "Backslash escapes"
  },
  {
    "markdown": "\\\t\\A\\a\\ \\3\\φ\\«\n",
    "html": "<p>\\\t\\A\\a\\ \\3\\φ\\«</p>\n",
    "example": 299,
    "start_line": 5523,
    "end_line": 5527,
    "section": "Backslash escapes"
  },
  {
    "markdown": "\\*not emphasized*\n\\<br/> not a tag\n\\[not a link](/foo)\n\\`not code`\n1\\. not a list\n\\* not a list\n\\# not a heading\n\\[foo]: /url \"not a reference\"\n\\&ouml; not a character entity\n",
    "html": "<p>*not emphasized*\n&lt;br/&gt; not a tag\n[not a link](/foo)\n`not code`\n1. not a list\n* not a list\n# not a heading\n[foo]: /url &quot;not a reference&quot;\n&amp;ouml; not a character entity</p>\n",
    "example": 300,
    "start_line": 5533,
    "end_line": 5553,
    "section": "Backslash escapes"
  },
  {
    "markdown": "\\\\*emphasis*\n",
    "html": "<p>\\<em>emphasis</em></p>\n",
    "example": 301,
    "start_line": 5558,
    "end_line": 5562,
    "section": "Backslash escapes"
  },
  {
    "markdown": "foo\\\nbar\n",
    "html": "<p>foo<br />\nbar</p>\n",
    "example": 302,
    "start_line": 5567,
    "end_line": 5573,
    "section": "Backslash escapes"
  },
  {
    "markdown": "`` \\[\\` ``\n",
    "html": "<p><code>\\[\\`</code></p>\n",
    "example": 303,
    "start_line": 5579,
    "end_line": 5583,
    "section": "Backslash escapes"
  },
  {
    "markdown": "    \\[\\]\n",
    "html": "<pre><code>\\[\\]\n</code></pre>\n",
    "example": 304,
    "start_line": 5586,
    "end_line": 5591,
    "section": "Backslash escapes"
  },
  {
    "markdown": "~~~\n\\[\\]\n~~~\n",
    "html": "<pre><code>\\[\\]\n</code></pre>\n",
    "example": 305,
    "start_line": 5594,
    "end_line": 5601,
    "section": "Backslash escapes"
  },
  {
    "markdown": "<http://example.com?find=\\*>\n",
    "html": "<p><a href=\"http://example.com?find=%5C*\">http://example.com?find=\\*</a></p>\n",
    "example": 306,
    "start_line": 5604,
    "end_line": 5608,
    "section": "Backslash escapes"
  },
  {
    "markdown": "<a href=\"/bar\\/)\">\n",
    "html": "<a href=\"/bar\\/)\">\n",
    "example": 307,
    "start_line": 5611,
    "end_line": 5615,
    "section": "Backslash escapes"
  },
  {
    "markdown": "[foo](/bar\\* \"ti\\*tle\")\n",
    "html": "<p><a href=\"/bar*\" title=\"ti*tle\">foo</a></p>\n",
    "example": 308,
    "start_line": 5621,
    "end_line": 5625,
    "section": "Backslash escapes"
  },
  {
    "markdown": "[foo]\n\n[foo]: /bar\\* \"ti\\*tle\"\n",
    "html": "<p><a href=\"/bar*\" title=\"ti*tle\">foo</a></p>\n",
    "example": 309,
    "start_line": 5628,
    "end_line": 5634,
    "section": "Backslash escapes"
  },
  {
    "markdown": "``` foo\\+bar\nfoo\n```\n",
    "html": "<pre><code class=\"language-foo+bar\">foo\n</code></pre>\n",
    "example": 310,
    "start_line": 5637,
    "end_line": 5644,
    "section": "Backslash escapes"
  },
  {
    "markdown": "&nbsp; &amp; &copy; &AElig; &Dcaron;\n&frac34; &HilbertSpace; &DifferentialD;\n&ClockwiseContourIntegral; &ngE;\n",
    "html": "<p>  &amp; © Æ Ď\n¾ ℋ ⅆ\n∲ ≧̸</p>\n",
    "example": 311,
    "start_line": 5674,
    "end_line": 5682,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "&#35; &#1234; &#992; &#0;\n",
    "html": "<p># Ӓ Ϡ �</p>\n",
    "example": 312,
    "start_line": 5693,
    "end_line": 5697,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "&#X22; &#XD06; &#xcab;\n",
    "html": "<p>&quot; ആ ಫ</p>\n",
    "example": 313,
    "start_line": 5706,
    "end_line": 5710,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "&nbsp &x; &#; &#x;\n&#987654321;\n&#abcdef0;\n&ThisIsNotDefined; &hi?;\n",
    "html": "<p>&amp;nbsp &amp;x; &amp;#; &amp;#x;\n&amp;#987654321;\n&amp;#abcdef0;\n&amp;ThisIsNotDefined; &amp;hi?;</p>\n",
    "example": 314,
    "start_line": 5715,
    "end_line": 5725,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "&copy\n",
    "html": "<p>&amp;copy</p>\n",
    "example": 315,
    "start_line": 5732,
    "end_line": 5736,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "&MadeUpEntity;\n",
    "html": "<p>&amp;MadeUpEntity;</p>\n",
    "example": 316,
    "start_line": 5742,
    "end_line": 5746,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "<a href=\"&ouml;&ouml;.html\">\n",
    "html": "<a href=\"&ouml;&ouml;.html\">\n",
    "example": 317,
    "start_line": 5753,
    "end_line": 5757,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "[foo](/f&ouml;&ouml; \"f&ouml;&ouml;\")\n",
    "html": "<p><a href=\"/f%C3%B6%C3%B6\" title=\"föö\">foo</a></p>\n",
    "example": 318,
    "start_line": 5760,
    "end_line": 5764,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "[foo]\n\n[foo]: /f&ouml;&ouml; \"f&ouml;&ouml;\"\n",
    "html": "<p><a href=\"/f%C3%B6%C3%B6\" title=\"föö\">foo</a></p>\n",
    "example": 319,
    "start_line": 5767,
    "end_line": 5773,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "``` f&ouml;&ouml;\nfoo\n```\n",
    "html": "<pre><code class=\"language-föö\">foo\n</code></pre>\n",
    "example": 320,
    "start_line": 5776,
    "end_line": 5783,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "`f&ouml;&ouml;`\n",
    "html": "<p><code>f&amp;ouml;&amp;ouml;</code></p>\n",
    "example": 321,
    "start_line": 5789,
    "end_line": 5793,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "    f&ouml;f&ouml;\n",
    "html": "<pre><code>f&amp;ouml;f&amp;ouml;\n</code></pre>\n",
    "example": 322,
    "start_line": 5796,
    "end_line": 5801,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "&#42;foo&#42;\n*foo*\n",
    "html": "<p>*foo*\n<em>foo</em></p>\n",
    "example": 323,
    "start_line": 5808,
    "end_line": 5814,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "&#42; foo\n\n* foo\n",
    "html": "<p>* foo</p>\n<ul>\n<li>foo</li>\n</ul>\n",
    "example": 324,
    "start_line": 5816,
    "end_line": 5825,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "foo&#10;&#10;bar\n",
    "html": "<p>foo\n\nbar</p>\n",
    "example": 325,
    "start_line": 5827,
    "end_line": 5833,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "&#9;foo\n",
    "html": "<p>\tfoo</p>\n",
    "example": 326,
    "start_line": 5835,
    "end_line": 5839,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "[a](url &quot;tit&quot;)\n",
    "html": "<p>[a](url &quot;tit&quot;)</p>\n",
    "example": 327,
    "start_line": 5842,
    "end_line": 5846,
    "section": "Entity and numeric character references"
  },
  {
    "markdown": "`foo`\n",
    "html": "<p><code>foo</code></p>\n",
    "example": 328,
    "start_line": 5870,
    "end_line": 5874,
    "section": "Code spans"
  },
  {
    "markdown": "`` foo ` bar ``\n",
    "html": "<p><code>foo ` bar</code></p>\n",
    "example": 329,
    "start_line": 5881,
    "end_line": 5885,
    "section": "Code spans"
  },
  {
    "markdown": "` `` `\n",
    "html": "<p><code>``</code></p>\n",
    "example": 330,
    "start_line": 5891,
    "end_line": 5895,
    "section": "Code spans"
  },
  {
    "markdown": "`  ``  `\n",
    "html": "<p><code> `` </code></p>\n",
    "example": 331,
    "start_line": 5899,
    "end_line": 5903,
    "section": "Code spans"
  },
  {
    "markdown": "` a`\n",
    "html": "<p><code> a</code></p>\n",
    "example": 332,
    "start_line": 5908,
    "end_line": 5912,
    "section": "Code spans"
  },
  {
    "markdown": "` b `\n",
    "html": "<p><code> b </code></p>\n",
    "example": 333,
    "start_line": 5917,
    "end_line": 5921,
    "section": "Code spans"
  },
  {
    "markdown": "` `\n`  `\n",
    "html": "<p><code> </code>\n<code>  </code></p>\n",
    "example": 334,
    "start_line": 5925,
    "end_line": 5931,
    "section": "Code spans"
  },
  {
    "markdown": "``\nfoo\nbar  \nbaz\n``\n",
    "html": "<p><code>foo bar   baz</code></p>\n",
    "example": 335,
    "start_line": 5936,
    "end_line": 5944,
    "section": "Code spans"
  },
  {
    "markdown": "``\nfoo \n``\n",
    "html": "<p><code>foo </code></p>\n",
    "example": 336,
    "start_line": 5946,
    "end_line": 5952,
    "section": "Code spans"
  },
  {
    "markdown": "`foo   bar \nbaz`\n",
    "html": "<p><code>foo   bar  baz</code></p>\n",
    "example": 337,
    "start_line": 5957,
    "end_line": 5962,
    "section": "Code spans"
  },
  {
    "markdown": "`foo\\`bar`\n",
    "html": "<p><code>foo\\</code>bar`</p>\n",
    "example": 338,
    "start_line": 5974,
    "end_line": 5978,
    "section": "Code spans"
  },
  {
    "markdown": "``foo`bar``\n",
    "html": "<p><code>foo`bar</code></p>\n",
    "example": 339,
    "start_line": 5985,
    "end_line": 5989,
    "section": "Code spans"
  },
  {
    "markdown": "` foo `` bar `\n",
    "html": "<p><code>foo `` bar</code></p>\n",
    "example": 340,
    "start_line": 5991,
    "end_line": 5995,
    "section": "Code spans"
  },
  {
    "markdown": "*foo`*`\n",
    "html": "<p>*foo<code>*</code></p>\n",
    "example": 341,
    "start_line": 6003,
    "end_line": 6007,
    "section": "Code spans"
  },
  {
    "markdown": "[not a `link](/foo`)\n",
    "html": "<p>[not a <code>link](/foo</code>)</p>\n",
    "example": 342,
    "start_line": 6012,
    "end_line": 6016,
    "section": "Code spans"
  },
  {
    "markdown": "`<a href=\"`\">`\n",
    "html": "<p><code>&lt;a href=&quot;</code>&quot;&gt;`</p>\n",
    "example": 343,
    "start_line": 6022,
    "end_line": 6026,
    "section": "Code spans"
  },
  {
    "markdown": "<a href=\"`\">`\n",
    "html": "<p><a href=\"`\">`</p>\n",
    "example": 344,
    "start_line": 6031,
    "end_line": 6035,
    "section": "Code spans"
  },
  {
    "markdown": "`<http://foo.bar.`baz>`\n",
    "html": "<p><code>&lt;http://foo.bar.</code>baz&gt;`</p>\n",
    "example": 345,
    "start_line": 6040,
    "end_line": 6044,
    "section": "Code spans"
  },
  {
    "markdown": "<http://foo.bar.`baz>`\n",
    "html": "<p><a href=\"http://foo.bar.%60baz\">http://foo.bar.`baz</a>`</p>\n",
    "example": 346,
    "start_line": 6049,
    "end_line": 6053,
    "section": "Code spans"
  },
  {
    "markdown": "```foo``\n",
    "html": "<p>```foo``</p>\n",
    "example": 347,
    "start_line": 6059,
    "end_line": 6063,
    "section": "Code spans"
  },
  {
    "markdown": "`foo\n",
    "html": "<p>`foo</p>\n",
    "example": 348,
    "start_line": 6066,
    "end_line": 6070,
    "section": "Code spans"
  },
  {
    "markdown": "`foo``bar``\n",
    "html": "<p>`foo<code>bar</code></p>\n",
    "example": 349,
    "start_line": 6075,
    "end_line": 6079,
    "section": "Code spans"
  },
  {
    "markdown": "*foo bar*\n",
    "html": "<p><em>foo bar</em></p>\n",
    "example": 350,
    "start_line": 6292,
    "end_line": 6296,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "a * foo bar*\n",
    "html": "<p>a * foo bar*</p>\n",
    "example": 351,
    "start_line": 6302,
    "end_line": 6306,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "a*\"foo\"*\n",
    "html": "<p>a*&quot;foo&quot;*</p>\n",
    "example": 352,
    "start_line": 6313,
    "end_line": 6317,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "* a *\n",
    "html": "<p>* a *</p>\n",
    "example": 353,
    "start_line": 6322,
    "end_line": 6326,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo*bar*\n",
    "html": "<p>foo<em>bar</em></p>\n",
    "example": 354,
    "start_line": 6331,
    "end_line": 6335,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "5*6*78\n",
    "html": "<p>5<em>6</em>78</p>\n",
    "example": 355,
    "start_line": 6338,
    "end_line": 6342,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo bar_\n",
    "html": "<p><em>foo bar</em></p>\n",
    "example": 356,
    "start_line": 6347,
    "end_line": 6351,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_ foo bar_\n",
    "html": "<p>_ foo bar_</p>\n",
    "example": 357,
    "start_line": 6357,
    "end_line": 6361,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "a_\"foo\"_\n",
    "html": "<p>a_&quot;foo&quot;_</p>\n",
    "example": 358,
    "start_line": 6367,
    "end_line": 6371,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo_bar_\n",
    "html": "<p>foo_bar_</p>\n",
    "example": 359,
    "start_line": 6376,
    "end_line": 6380,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "5_6_78\n",
    "html": "<p>5_6_78</p>\n",
    "example": 360,
    "start_line": 6383,
    "end_line": 6387,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "пристаням_стремятся_\n",
    "html": "<p>пристаням_стремятся_</p>\n",
    "example": 361,
    "start_line": 6390,
    "end_line": 6394,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "aa_\"bb\"_cc\n",
    "html": "<p>aa_&quot;bb&quot;_cc</p>\n",
    "example": 362,
    "start_line": 6400,
    "end_line": 6404,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo-_(bar)_\n",
    "html": "<p>foo-<em>(bar)</em></p>\n",
    "example": 363,
    "start_line": 6411,
    "end_line": 6415,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo*\n",
    "html": "<p>_foo*</p>\n",
    "example": 364,
    "start_line": 6423,
    "end_line": 6427,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo bar *\n",
    "html": "<p>*foo bar *</p>\n",
    "example": 365,
    "start_line": 6433,
    "end_line": 6437,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo bar\n*\n",
    "html": "<p>*foo bar\n*</p>\n",
    "example": 366,
    "start_line": 6442,
    "end_line": 6448,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*(*foo)\n",
    "html": "<p>*(*foo)</p>\n",
    "example": 367,
    "start_line": 6455,
    "end_line": 6459,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*(*foo*)*\n",
    "html": "<p><em>(<em>foo</em>)</em></p>\n",
    "example": 368,
    "start_line": 6465,
    "end_line": 6469,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo*bar\n",
    "html": "<p><em>foo</em>bar</p>\n",
    "example": 369,
    "start_line": 6474,
    "end_line": 6478,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo bar _\n",
    "html": "<p>_foo bar _</p>\n",
    "example": 370,
    "start_line": 6487,
    "end_line": 6491,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_(_foo)\n",
    "html": "<p>_(_foo)</p>\n",
    "example": 371,
    "start_line": 6497,
    "end_line": 6501,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_(_foo_)_\n",
    "html": "<p><em>(<em>foo</em>)</em></p>\n",
    "example": 372,
    "start_line": 6506,
    "end_line": 6510,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo_bar\n",
    "html": "<p>_foo_bar</p>\n",
    "example": 373,
    "start_line": 6515,
    "end_line": 6519,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_пристаням_стремятся\n",
    "html": "<p>_пристаням_стремятся</p>\n",
    "example": 374,
    "start_line": 6522,
    "end_line": 6526,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo_bar_baz_\n",
    "html": "<p><em>foo_bar_baz</em></p>\n",
    "example": 375,
    "start_line": 6529,
    "end_line": 6533,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_(bar)_.\n",
    "html": "<p><em>(bar)</em>.</p>\n",
    "example": 376,
    "start_line": 6540,
    "end_line": 6544,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo bar**\n",
    "html": "<p><strong>foo bar</strong></p>\n",
    "example": 377,
    "start_line": 6549,
    "end_line": 6553,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "** foo bar**\n",
    "html": "<p>** foo bar**</p>\n",
    "example": 378,
    "start_line": 6559,
    "end_line": 6563,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "a**\"foo\"**\n",
    "html": "<p>a**&quot;foo&quot;**</p>\n",
    "example": 379,
    "start_line": 6570,
    "end_line": 6574,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo**bar**\n",
    "html": "<p>foo<strong>bar</strong></p>\n",
    "example": 380,
    "start_line": 6579,
    "end_line": 6583,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo bar__\n",
    "html": "<p><strong>foo bar</strong></p>\n",
    "example": 381,
    "start_line": 6588,
    "end_line": 6592,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__ foo bar__\n",
    "html": "<p>__ foo bar__</p>\n",
    "example": 382,
    "start_line": 6598,
    "end_line": 6602,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__\nfoo bar__\n",
    "html": "<p>__\nfoo bar__</p>\n",
    "example": 383,
    "start_line": 6606,
    "end_line": 6612,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "a__\"foo\"__\n",
    "html": "<p>a__&quot;foo&quot;__</p>\n",
    "example": 384,
    "start_line": 6618,
    "end_line": 6622,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo__bar__\n",
    "html": "<p>foo__bar__</p>\n",
    "example": 385,
    "start_line": 6627,
    "end_line": 6631,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "5__6__78\n",
    "html": "<p>5__6__78</p>\n",
    "example": 386,
    "start_line": 6634,
    "end_line": 6638,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "пристаням__стремятся__\n",
    "html": "<p>пристаням__стремятся__</p>\n",
    "example": 387,
    "start_line": 6641,
    "end_line": 6645,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo, __bar__, baz__\n",
    "html": "<p><strong>foo, <strong>bar</strong>, baz</strong></p>\n",
    "example": 388,
    "start_line": 6648,
    "end_line": 6652,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo-__(bar)__\n",
    "html": "<p>foo-<strong>(bar)</strong></p>\n",
    "example": 389,
    "start_line": 6659,
    "end_line": 6663,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo bar **\n",
    "html": "<p>**foo bar **</p>\n",
    "example": 390,
    "start_line": 6672,
    "end_line": 6676,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**(**foo)\n",
    "html": "<p>**(**foo)</p>\n",
    "example": 391,
    "start_line": 6685,
    "end_line": 6689,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*(**foo**)*\n",
    "html": "<p><em>(<strong>foo</strong>)</em></p>\n",
    "example": 392,
    "start_line": 6695,
    "end_line": 6699,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**Gomphocarpus (*Gomphocarpus physocarpus*, syn.\n*Asclepias physocarpa*)**\n",
    "html": "<p><strong>Gomphocarpus (<em>Gomphocarpus physocarpus</em>, syn.\n<em>Asclepias physocarpa</em>)</strong></p>\n",
    "example": 393,
    "start_line": 6702,
    "end_line": 6708,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo \"*bar*\" foo**\n",
    "html": "<p><strong>foo &quot;<em>bar</em>&quot; foo</strong></p>\n",
    "example": 394,
    "start_line": 6711,
    "end_line": 6715,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo**bar\n",
    "html": "<p><strong>foo</strong>bar</p>\n",
    "example": 395,
    "start_line": 6720,
    "end_line": 6724,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo bar __\n",
    "html": "<p>__foo bar __</p>\n",
    "example": 396,
    "start_line": 6732,
    "end_line": 6736,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__(__foo)\n",
    "html": "<p>__(__foo)</p>\n",
    "example": 397,
    "start_line": 6742,
    "end_line": 6746,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_(__foo__)_\n",
    "html": "<p><em>(<strong>foo</strong>)</em></p>\n",
    "example": 398,
    "start_line": 6752,
    "end_line": 6756,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo__bar\n",
    "html": "<p>__foo__bar</p>\n",
    "example": 399,
    "start_line": 6761,
    "end_line": 6765,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__пристаням__стремятся\n",
    "html": "<p>__пристаням__стремятся</p>\n",
    "example": 400,
    "start_line": 6768,
    "end_line": 6772,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo__bar__baz__\n",
    "html": "<p><strong>foo__bar__baz</strong></p>\n",
    "example": 401,
    "start_line": 6775,
    "end_line": 6779,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__(bar)__.\n",
    "html": "<p><strong>(bar)</strong>.</p>\n",
    "example": 402,
    "start_line": 6786,
    "end_line": 6790,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo [bar](/url)*\n",
    "html": "<p><em>foo <a href=\"/url\">bar</a></em></p>\n",
    "example": 403,
    "start_line": 6798,
    "end_line": 6802,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo\nbar*\n",
    "html": "<p><em>foo\nbar</em></p>\n",
    "example": 404,
    "start_line": 6805,
    "end_line": 6811,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo __bar__ baz_\n",
    "html": "<p><em>foo <strong>bar</strong> baz</em></p>\n",
    "example": 405,
    "start_line": 6817,
    "end_line": 6821,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo _bar_ baz_\n",
    "html": "<p><em>foo <em>bar</em> baz</em></p>\n",
    "example": 406,
    "start_line": 6824,
    "end_line": 6828,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo_ bar_\n",
    "html": "<p><em><em>foo</em> bar</em></p>\n",
    "example": 407,
    "start_line": 6831,
    "end_line": 6835,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo *bar**\n",
    "html": "<p><em>foo <em>bar</em></em></p>\n",
    "example": 408,
    "start_line": 6838,
    "end_line": 6842,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo **bar** baz*\n",
    "html": "<p><em>foo <strong>bar</strong> baz</em></p>\n",
    "example": 409,
    "start_line": 6845,
    "end_line": 6849,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo**bar**baz*\n",
    "html": "<p><em>foo<strong>bar</strong>baz</em></p>\n",
    "example": 410,
    "start_line": 6851,
    "end_line": 6855,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo**bar*\n",
    "html": "<p><em>foo**bar</em></p>\n",
    "example": 411,
    "start_line": 6875,
    "end_line": 6879,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "***foo** bar*\n",
    "html": "<p><em><strong>foo</strong> bar</em></p>\n",
    "example": 412,
    "start_line": 6888,
    "end_line": 6892,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo **bar***\n",
    "html": "<p><em>foo <strong>bar</strong></em></p>\n",
    "example": 413,
    "start_line": 6895,
    "end_line": 6899,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo**bar***\n",
    "html": "<p><em>foo<strong>bar</strong></em></p>\n",
    "example": 414,
    "start_line": 6902,
    "end_line": 6906,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo***bar***baz\n",
    "html": "<p>foo<em><strong>bar</strong></em>baz</p>\n",
    "example": 415,
    "start_line": 6913,
    "end_line": 6917,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo******bar*********baz\n",
    "html": "<p>foo<strong><strong><strong>bar</strong></strong></strong>***baz</p>\n",
    "example": 416,
    "start_line": 6919,
    "end_line": 6923,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo **bar *baz* bim** bop*\n",
    "html": "<p><em>foo <strong>bar <em>baz</em> bim</strong> bop</em></p>\n",
    "example": 417,
    "start_line": 6928,
    "end_line": 6932,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo [*bar*](/url)*\n",
    "html": "<p><em>foo <a href=\"/url\"><em>bar</em></a></em></p>\n",
    "example": 418,
    "start_line": 6935,
    "end_line": 6939,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "** is not an empty emphasis\n",
    "html": "<p>** is not an empty emphasis</p>\n",
    "example": 419,
    "start_line": 6944,
    "end_line": 6948,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**** is not an empty strong emphasis\n",
    "html": "<p>**** is not an empty strong emphasis</p>\n",
    "example": 420,
    "start_line": 6951,
    "end_line": 6955,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo [bar](/url)**\n",
    "html": "<p><strong>foo <a href=\"/url\">bar</a></strong></p>\n",
    "example": 421,
    "start_line": 6964,
    "end_line": 6968,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo\nbar**\n",
    "html": "<p><strong>foo\nbar</strong></p>\n",
    "example": 422,
    "start_line": 6971,
    "end_line": 6977,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo _bar_ baz__\n",
    "html": "<p><strong>foo <em>bar</em> baz</strong></p>\n",
    "example": 423,
    "start_line": 6983,
    "end_line": 6987,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo __bar__ baz__\n",
    "html": "<p><strong>foo <strong>bar</strong> baz</strong></p>\n",
    "example": 424,
    "start_line": 6990,
    "end_line": 6994,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "____foo__ bar__\n",
    "html": "<p><strong><strong>foo</strong> bar</strong></p>\n",
    "example": 425,
    "start_line": 6997,
    "end_line": 7001,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo **bar****\n",
    "html": "<p><strong>foo <strong>bar</strong></strong></p>\n",
    "example": 426,
    "start_line": 7004,
    "end_line": 7008,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo *bar* baz**\n",
    "html": "<p><strong>foo <em>bar</em> baz</strong></p>\n",
    "example": 427,
    "start_line": 7011,
    "end_line": 7015,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo*bar*baz**\n",
    "html": "<p><strong>foo<em>bar</em>baz</strong></p>\n",
    "example": 428,
    "start_line": 7018,
    "end_line": 7022,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "***foo* bar**\n",
    "html": "<p><strong><em>foo</em> bar</strong></p>\n",
    "example": 429,
    "start_line": 7025,
    "end_line": 7029,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo *bar***\n",
    "html": "<p><strong>foo <em>bar</em></strong></p>\n",
    "example": 430,
    "start_line": 7032,
    "end_line": 7036,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo *bar **baz**\nbim* bop**\n",
    "html": "<p><strong>foo <em>bar <strong>baz</strong>\nbim</em> bop</strong></p>\n",
    "example": 431,
    "start_line": 7041,
    "end_line": 7047,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo [*bar*](/url)**\n",
    "html": "<p><strong>foo <a href=\"/url\"><em>bar</em></a></strong></p>\n",
    "example": 432,
    "start_line": 7050,
    "end_line": 7054,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__ is not an empty emphasis\n",
    "html": "<p>__ is not an empty emphasis</p>\n",
    "example": 433,
    "start_line": 7059,
    "end_line": 7063,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "____ is not an empty strong emphasis\n",
    "html": "<p>____ is not an empty strong emphasis</p>\n",
    "example": 434,
    "start_line": 7066,
    "end_line": 7070,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo ***\n",
    "html": "<p>foo ***</p>\n",
    "example": 435,
    "start_line": 7076,
    "end_line": 7080,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo *\\**\n",
    "html": "<p>foo <em>*</em></p>\n",
    "example": 436,
    "start_line": 7083,
    "end_line": 7087,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo *_*\n",
    "html": "<p>foo <em>_</em></p>\n",
    "example": 437,
    "start_line": 7090,
    "end_line": 7094,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo *****\n",
    "html": "<p>foo *****</p>\n",
    "example": 438,
    "start_line": 7097,
    "end_line": 7101,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo **\\***\n",
    "html": "<p>foo <strong>*</strong></p>\n",
    "example": 439,
    "start_line": 7104,
    "end_line": 7108,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo **_**\n",
    "html": "<p>foo <strong>_</strong></p>\n",
    "example": 440,
    "start_line": 7111,
    "end_line": 7115,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo*\n",
    "html": "<p>*<em>foo</em></p>\n",
    "example": 441,
    "start_line": 7122,
    "end_line": 7126,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo**\n",
    "html": "<p><em>foo</em>*</p>\n",
    "example": 442,
    "start_line": 7129,
    "end_line": 7133,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "***foo**\n",
    "html": "<p>*<strong>foo</strong></p>\n",
    "example": 443,
    "start_line": 7136,
    "end_line": 7140,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "****foo*\n",
    "html": "<p>***<em>foo</em></p>\n",
    "example": 444,
    "start_line": 7143,
    "end_line": 7147,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo***\n",
    "html": "<p><strong>foo</strong>*</p>\n",
    "example": 445,
    "start_line": 7150,
    "end_line": 7154,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo****\n",
    "html": "<p><em>foo</em>***</p>\n",
    "example": 446,
    "start_line": 7157,
    "end_line": 7161,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo ___\n",
    "html": "<p>foo ___</p>\n",
    "example": 447,
    "start_line": 7167,
    "end_line": 7171,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo _\\__\n",
    "html": "<p>foo <em>_</em></p>\n",
    "example": 448,
    "start_line": 7174,
    "end_line": 7178,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo _*_\n",
    "html": "<p>foo <em>*</em></p>\n",
    "example": 449,
    "start_line": 7181,
    "end_line": 7185,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo _____\n",
    "html": "<p>foo _____</p>\n",
    "example": 450,
    "start_line": 7188,
    "end_line": 7192,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo __\\___\n",
    "html": "<p>foo <strong>_</strong></p>\n",
    "example": 451,
    "start_line": 7195,
    "end_line": 7199,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "foo __*__\n",
    "html": "<p>foo <strong>*</strong></p>\n",
    "example": 452,
    "start_line": 7202,
    "end_line": 7206,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo_\n",
    "html": "<p>_<em>foo</em></p>\n",
    "example": 453,
    "start_line": 7209,
    "end_line": 7213,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo__\n",
    "html": "<p><em>foo</em>_</p>\n",
    "example": 454,
    "start_line": 7220,
    "end_line": 7224,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "___foo__\n",
    "html": "<p>_<strong>foo</strong></p>\n",
    "example": 455,
    "start_line": 7227,
    "end_line": 7231,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "____foo_\n",
    "html": "<p>___<em>foo</em></p>\n",
    "example": 456,
    "start_line": 7234,
    "end_line": 7238,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo___\n",
    "html": "<p><strong>foo</strong>_</p>\n",
    "example": 457,
    "start_line": 7241,
    "end_line": 7245,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo____\n",
    "html": "<p><em>foo</em>___</p>\n",
    "example": 458,
    "start_line": 7248,
    "end_line": 7252,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo**\n",
    "html": "<p><strong>foo</strong></p>\n",
    "example": 459,
    "start_line": 7258,
    "end_line": 7262,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*_foo_*\n",
    "html": "<p><em><em>foo</em></em></p>\n",
    "example": 460,
    "start_line": 7265,
    "end_line": 7269,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__foo__\n",
    "html": "<p><strong>foo</strong></p>\n",
    "example": 461,
    "start_line": 7272,
    "end_line": 7276,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_*foo*_\n",
    "html": "<p><em><em>foo</em></em></p>\n",
    "example": 462,
    "start_line": 7279,
    "end_line": 7283,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "****foo****\n",
    "html": "<p><strong><strong>foo</strong></strong></p>\n",
    "example": 463,
    "start_line": 7289,
    "end_line": 7293,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "____foo____\n",
    "html": "<p><strong><strong>foo</strong></strong></p>\n",
    "example": 464,
    "start_line": 7296,
    "end_line": 7300,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "******foo******\n",
    "html": "<p><strong><strong><strong>foo</strong></strong></strong></p>\n",
    "example": 465,
    "start_line": 7307,
    "end_line": 7311,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "***foo***\n",
    "html": "<p><em><strong>foo</strong></em></p>\n",
    "example": 466,
    "start_line": 7316,
    "end_line": 7320,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_____foo_____\n",
    "html": "<p><em><strong><strong>foo</strong></strong></em></p>\n",
    "example": 467,
    "start_line": 7323,
    "end_line": 7327,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo _bar* baz_\n",
    "html": "<p><em>foo _bar</em> baz_</p>\n",
    "example": 468,
    "start_line": 7332,
    "end_line": 7336,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo __bar *baz bim__ bam*\n",
    "html": "<p><em>foo <strong>bar *baz bim</strong> bam</em></p>\n",
    "example": 469,
    "start_line": 7339,
    "end_line": 7343,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**foo **bar baz**\n",
    "html": "<p>**foo <strong>bar baz</strong></p>\n",
    "example": 470,
    "start_line": 7348,
    "end_line": 7352,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*foo *bar baz*\n",
    "html": "<p>*foo <em>bar baz</em></p>\n",
    "example": 471,
    "start_line": 7355,
    "end_line": 7359,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*[bar*](/url)\n",
    "html": "<p>*<a href=\"/url\">bar*</a></p>\n",
    "example": 472,
    "start_line": 7364,
    "end_line": 7368,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_foo [bar_](/url)\n",
    "html": "<p>_foo <a href=\"/url\">bar_</a></p>\n",
    "example": 473,
    "start_line": 7371,
    "end_line": 7375,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*<img src=\"foo\" title=\"*\"/>\n",
    "html": "<p>*<img src=\"foo\" title=\"*\"/></p>\n",
    "example": 474,
    "start_line": 7378,
    "end_line": 7382,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**<a href=\"**\">\n",
    "html": "<p>**<a href=\"**\"></p>\n",
    "example": 475,
    "start_line": 7385,
    "end_line": 7389,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__<a href=\"__\">\n",
    "html": "<p>__<a href=\"__\"></p>\n",
    "example": 476,
    "start_line": 7392,
    "end_line": 7396,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "*a `*`*\n",
    "html": "<p><em>a <code>*</code></em></p>\n",
    "example": 477,
    "start_line": 7399,
    "end_line": 7403,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "_a `_`_\n",
    "html": "<p><em>a <code>_</code></em></p>\n",
    "example": 478,
    "start_line": 7406,
    "end_line": 7410,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "**a<http://foo.bar/?q=**>\n",
    "html": "<p>**a<a href=\"http://foo.bar/?q=**\">http://foo.bar/?q=**</a></p>\n",
    "example": 479,
    "start_line": 7413,
    "end_line": 7417,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "__a<http://foo.bar/?q=__>\n",
    "html": "<p>__a<a href=\"http://foo.bar/?q=__\">http://foo.bar/?q=__</a></p>\n",
    "example": 480,
    "start_line": 7420,
    "end_line": 7424,
    "section": "Emphasis and strong emphasis"
  },
  {
    "markdown": "[link](/uri \"title\")\n",
    "html": "<p><a href=\"/uri\" title=\"title\">link</a></p>\n",
    "example": 481,
    "start_line": 7503,
    "end_line": 7507,
    "section": "Links"
  },
  {
    "markdown": "[link](/uri)\n",
    "html": "<p><a href=\"/uri\">link</a></p>\n",
    "example": 482,
    "start_line": 7512,
    "end_line": 7516,
    "section": "Links"
  },
  {
    "markdown": "[link]()\n",
    "html": "<p><a href=\"\">link</a></p>\n",
    "example": 483,
    "start_line": 7521,
    "end_line": 7525,
    "section": "Links"
  },
  {
    "markdown": "[link](<>)\n",
    "html": "<p><a href=\"\">link</a></p>\n",
    "example": 484,
    "start_line": 7528,
    "end_line": 7532,
    "section": "Links"
  },
  {
    "markdown": "[link](/my uri)\n",
    "html": "<p>[link](/my uri)</p>\n",
    "example": 485,
    "start_line": 7537,
    "end_line": 7541,
    "section": "Links"
  },
  {
    "markdown": "[link](</my uri>)\n",
    "html": "<p><a href=\"/my%20uri\">link</a></p>\n",
    "example": 486,
    "start_line": 7543,
    "end_line": 7547,
    "section": "Links"
  },
  {
    "markdown": "[link](foo\nbar)\n",
    "html": "<p>[link](foo\nbar)</p>\n",
    "example": 487,
    "start_line": 7552,
    "end_line": 7558,
    "section": "Links"
  },
  {
    "markdown": "[link](<foo\nbar>)\n",
    "html": "<p>[link](<foo\nbar>)</p>\n",
    "example": 488,
    "start_line": 7560,
    "end_line": 7566,
    "section": "Links"
  },
  {
    "markdown": "[a](<b)c>)\n",
    "html": "<p><a href=\"b)c\">a</a></p>\n",
    "example": 489,
    "start_line": 7571,
    "end_line": 7575,
    "section": "Links"
  },
  {
    "markdown": "[link](<foo\\>)\n",
    "html": "<p>[link](&lt;foo&gt;)</p>\n",
    "example": 490,
    "start_line": 7579,
    "end_line": 7583,
    "section": "Links"
  },
  {
    "markdown": "[a](<b)c\n[a](<b)c>\n[a](<b>c)\n",
    "html": "<p>[a](&lt;b)c\n[a](&lt;b)c&gt;\n[a](<b>c)</p>\n",
    "example": 491,
    "start_line": 7588,
    "end_line": 7596,
    "section": "Links"
  },
  {
    "markdown": "[link](\\(foo\\))\n",
    "html": "<p><a href=\"(foo)\">link</a></p>\n",
    "example": 492,
    "start_line": 7600,
    "end_line": 7604,
    "section": "Links"
  },
  {
    "markdown": "[link](foo(and(bar)))\n",
    "html": "<p><a href=\"foo(and(bar))\">link</a></p>\n",
    "example": 493,
    "start_line": 7609,
    "end_line": 7613,
    "section": "Links"
  },
  {
    "markdown": "[link](foo\\(and\\(bar\\))\n",
    "html": "<p><a href=\"foo(and(bar)\">link</a></p>\n",
    "example": 494,
    "start_line": 7618,
    "end_line": 7622,
    "section": "Links"
  },
  {
    "markdown": "[link](<foo(and(bar)>)\n",
    "html": "<p><a href=\"foo(and(bar)\">link</a></p>\n",
    "example": 495,
    "start_line": 7625,
    "end_line": 7629,
    "section": "Links"
  },
  {
    "markdown": "[link](foo\\)\\:)\n",
    "html": "<p><a href=\"foo):\">link</a></p>\n",
    "example": 496,
    "start_line": 7635,
    "end_line": 7639,
    "section": "Links"
  },
  {
    "markdown": "[link](#fragment)\n\n[link](http://example.com#fragment)\n\n[link](http://example.com?foo=3#frag)\n",
    "html": "<p><a href=\"#fragment\">link</a></p>\n<p><a href=\"http://example.com#fragment\">link</a></p>\n<p><a href=\"http://example.com?foo=3#frag\">link</a></p>\n",
    "example": 497,
    "start_line": 7644,
    "end_line": 7654,
    "section": "Links"
  },
  {
    "markdown": "[link](foo\\bar)\n",
    "html": "<p><a href=\"foo%5Cbar\">link</a></p>\n",
    "example": 498,
    "start_line": 7660,
    "end_line": 7664,
    "section": "Links"
  },
  {
    "markdown": "[link](foo%20b&auml;)\n",
    "html": "<p><a href=\"foo%20b%C3%A4\">link</a></p>\n",
    "example": 499,
    "start_line": 7676,
    "end_line": 7680,
    "section": "Links"
  },
  {
    "markdown": "[link](\"title\")\n",
    "html": "<p><a href=\"%22title%22\">link</a></p>\n",
    "example": 500,
    "start_line": 7687,
    "end_line": 7691,
    "section": "Links"
  },
  {
    "markdown": "[link](/url \"title\")\n[link](/url 'title')\n[link](/url (title))\n",
    "html": "<p><a href=\"/url\" title=\"title\">link</a>\n<a href=\"/url\" title=\"title\">link</a>\n<a href=\"/url\" title=\"title\">link</a></p>\n",
    "example": 501,
    "start_line": 7696,
    "end_line": 7704,
    "section": "Links"
  },
  {
    "markdown": "[link](/url \"title \\\"&quot;\")\n",
    "html": "<p><a href=\"/url\" title=\"title &quot;&quot;\">link</a></p>\n",
    "example": 502,
    "start_line": 7710,
    "end_line": 7714,
    "section": "Links"
  },
  {
    "markdown": "[link](/url \"title\")\n",
    "html": "<p><a href=\"/url%C2%A0%22title%22\">link</a></p>\n",
    "example": 503,
    "start_line": 7720,
    "end_line": 7724,
    "section": "Links"
  },
  {
    "markdown": "[link](/url \"title \"and\" title\")\n",
    "html": "<p>[link](/url &quot;title &quot;and&quot; title&quot;)</p>\n",
    "example": 504,
    "start_line": 7729,
    "end_line": 7733,
    "section": "Links"
  },
  {
    "markdown": "[link](/url 'title \"and\" title')\n",
    "html": "<p><a href=\"/url\" title=\"title &quot;and&quot; title\">link</a></p>\n",
    "example": 505,
    "start_line": 7738,
    "end_line": 7742,
    "section": "Links"
  },
  {
    "markdown": "[link](   /uri\n  \"title\"  )\n",
    "html": "<p><a href=\"/uri\" title=\"title\">link</a></p>\n",
    "example": 506,
    "start_line": 7762,
    "end_line": 7767,
    "section": "Links"
  },
  {
    "markdown": "[link] (/uri)\n",
    "html": "<p>[link] (/uri)</p>\n",
    "example": 507,
    "start_line": 7773,
    "end_line": 7777,
    "section": "Links"
  },
  {
    "markdown": "[link [foo [bar]]](/uri)\n",
    "html": "<p><a href=\"/uri\">link [foo [bar]]</a></p>\n",
    "example": 508,
    "start_line": 7783,
    "end_line": 7787,
    "section": "Links"
  },
  {
    "markdown": "[link] bar](/uri)\n",
    "html": "<p>[link] bar](/uri)</p>\n",
    "example": 509,
    "start_line": 7790,
    "end_line": 7794,
    "section": "Links"
  },
  {
    "markdown": "[link [bar](/uri)\n",
    "html": "<p>[link <a href=\"/uri\">bar</a></p>\n",
    "example": 510,
    "start_line": 7797,
    "end_line": 7801,
    "section": "Links"
  },
  {
    "markdown": "[link \\[bar](/uri)\n",
    "html": "<p><a href=\"/uri\">link [bar</a></p>\n",
    "example": 511,
    "start_line": 7804,
    "end_line": 7808,
    "section": "Links"
  },
  {
    "markdown": "[link *foo **bar** `#`*](/uri)\n",
    "html": "<p><a href=\"/uri\">link <em>foo <strong>bar</strong> <code>#</code></em></a></p>\n",
    "example": 512,
    "start_line": 7813,
    "end_line": 7817,
    "section": "Links"
  },
  {
    "markdown": "[![moon](moon.jpg)](/uri)\n",
    "html": "<p><a href=\"/uri\"><img src=\"moon.jpg\" alt=\"moon\" /></a></p>\n",
    "example": 513,
    "start_line": 7820,
    "end_line": 7824,
    "section": "Links"
  },
  {
    "markdown": "[foo [bar](/uri)](/uri)\n",
    "html": "<p>[foo <a href=\"/uri\">bar</a>](/uri)</p>\n",
    "example": 514,
    "start_line": 7829,
    "end_line": 7833,
    "section": "Links"
  },
  {
    "markdown": "[foo *[bar [baz](/uri)](/uri)*](/uri)\n",
    "html": "<p>[foo <em>[bar <a href=\"/uri\">baz</a>](/uri)</em>](/uri)</p>\n",
    "example": 515,
    "start_line": 7836,
    "end_line": 7840,
    "section": "Links"
  },
  {
    "markdown": "![[[foo](uri1)](uri2)](uri3)\n",
    "html": "<p><img src=\"uri3\" alt=\"[foo](uri2)\" /></p>\n",
    "example": 516,
    "start_line": 7843,
    "end_line": 7847,
    "section": "Links"
  },
  {
    "markdown": "*[foo*](/uri)\n",
    "html": "<p>*<a href=\"/uri\">foo*</a></p>\n",
    "example": 517,
    "start_line": 7853,
    "end_line": 7857,
    "section": "Links"
  },
  {
    "markdown": "[foo *bar](baz*)\n",
    "html": "<p><a href=\"baz*\">foo *bar</a></p>\n",
    "example": 518,
    "start_line": 7860,
    "end_line": 7864,
    "section": "Links"
  },
  {
    "markdown": "*foo [bar* baz]\n",
    "html": "<p><em>foo [bar</em> baz]</p>\n",
    "example": 519,
    "start_line": 7870,
    "end_line": 7874,
    "section": "Links"
  },
  {
    "markdown": "[foo <bar attr=\"](baz)\">\n",
    "html": "<p>[foo <bar attr=\"](baz)\"></p>\n",
    "example": 520,
    "start_line": 7880,
    "end_line": 7884,
    "section": "Links"
  },
  {
    "markdown": "[foo`](/uri)`\n",
    "html": "<p>[foo<code>](/uri)</code></p>\n",
    "example": 521,
    "start_line": 7887,
    "end_line": 7891,
    "section": "Links"
  },
  {
    "markdown": "[foo<http://example.com/?search=](uri)>\n",
    "html": "<p>[foo<a href=\"http://example.com/?search=%5D(uri)\">http://example.com/?search=](uri)</a></p>\n",
    "example": 522,
    "start_line": 7894,
    "end_line": 7898,
    "section": "Links"
  },
  {
    "markdown": "[foo][bar]\n\n[bar]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "example": 523,
    "start_line": 7932,
    "end_line": 7938,
    "section": "Links"
  },
  {
    "markdown": "[link [foo [bar]]][ref]\n\n[ref]: /uri\n",
    "html": "<p><a href=\"/uri\">link [foo [bar]]</a></p>\n",
    "example": 524,
    "start_line": 7947,
    "end_line": 7953,
    "section": "Links"
  },
  {
    "markdown": "[link \\[bar][ref]\n\n[ref]: /uri\n",
    "html": "<p><a href=\"/uri\">link [bar</a></p>\n",
    "example": 525,
    "start_line": 7956,
    "end_line": 7962,
    "section": "Links"
  },
  {
    "markdown": "[link *foo **bar** `#`*][ref]\n\n[ref]: /uri\n",
    "html": "<p><a href=\"/uri\">link <em>foo <strong>bar</strong> <code>#</code></em></a></p>\n",
    "example": 526,
    "start_line": 7967,
    "end_line": 7973,
    "section": "Links"
  },
  {
    "markdown": "[![moon](moon.jpg)][ref]\n\n[ref]: /uri\n",
    "html": "<p><a href=\"/uri\"><img src=\"moon.jpg\" alt=\"moon\" /></a></p>\n",
    "example": 527,
    "start_line": 7976,
    "end_line": 7982,
    "section": "Links"
  },
  {
    "markdown": "[foo [bar](/uri)][ref]\n\n[ref]: /uri\n",
    "html": "<p>[foo <a href=\"/uri\">bar</a>]<a href=\"/uri\">ref</a></p>\n",
    "example": 528,
    "start_line": 7987,
    "end_line": 7993,
    "section": "Links"
  },
  {
    "markdown": "[foo *bar [baz][ref]*][ref]\n\n[ref]: /uri\n",
    "html": "<p>[foo <em>bar <a href=\"/uri\">baz</a></em>]<a href=\"/uri\">ref</a></p>\n",
    "example": 529,
    "start_line": 7996,
    "end_line": 8002,
    "section": "Links"
  },
  {
    "markdown": "*[foo*][ref]\n\n[ref]: /uri\n",
    "html": "<p>*<a href=\"/uri\">foo*</a></p>\n",
    "example": 530,
    "start_line": 8011,
    "end_line": 8017,
    "section": "Links"
  },
  {
    "markdown": "[foo *bar][ref]\n\n[ref]: /uri\n",
    "html": "<p><a href=\"/uri\">foo *bar</a></p>\n",
    "example": 531,
    "start_line": 8020,
    "end_line": 8026,
    "section": "Links"
  },
  {
    "markdown": "[foo <bar attr=\"][ref]\">\n\n[ref]: /uri\n",
    "html": "<p>[foo <bar attr=\"][ref]\"></p>\n",
    "example": 532,
    "start_line": 8032,
    "end_line": 8038,
    "section": "Links"
  },
  {
    "markdown": "[foo`][ref]`\n\n[ref]: /uri\n",
    "html": "<p>[foo<code>][ref]</code></p>\n",
    "example": 533,
    "start_line": 8041,
    "end_line": 8047,
    "section": "Links"
  },
  {
    "markdown": "[foo<http://example.com/?search=][ref]>\n\n[ref]: /uri\n",
    "html": "<p>[foo<a href=\"http://example.com/?search=%5D%5Bref%5D\">http://example.com/?search=][ref]</a></p>\n",
    "example": 534,
    "start_line": 8050,
    "end_line": 8056,
    "section": "Links"
  },
  {
    "markdown": "[foo][BaR]\n\n[bar]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "example": 535,
    "start_line": 8061,
    "end_line": 8067,
    "section": "Links"
  },
  {
    "markdown": "[Толпой][Толпой] is a Russian word.\n\n[ТОЛПОЙ]: /url\n",
    "html": "<p><a href=\"/url\">Толпой</a> is a Russian word.</p>\n",
    "example": 536,
    "start_line": 8072,
    "end_line": 8078,
    "section": "Links"
  },
  {
    "markdown": "[Foo\n  bar]: /url\n\n[Baz][Foo bar]\n",
    "html": "<p><a href=\"/url\">Baz</a></p>\n",
    "example": 537,
    "start_line": 8084,
    "end_line": 8091,
    "section": "Links"
  },
  {
    "markdown": "[foo] [bar]\n\n[bar]: /url \"title\"\n",
    "html": "<p>[foo] <a href=\"/url\" title=\"title\">bar</a></p>\n",
    "example": 538,
    "start_line": 8097,
    "end_line": 8103,
    "section": "Links"
  },
  {
    "markdown": "[foo]\n[bar]\n\n[bar]: /url \"title\"\n",
    "html": "<p>[foo]\n<a href=\"/url\" title=\"title\">bar</a></p>\n",
    "example": 539,
    "start_line": 8106,
    "end_line": 8114,
    "section": "Links"
  },
  {
    "markdown": "[foo]: /url1\n\n[foo]: /url2\n\n[bar][foo]\n",
    "html": "<p><a href=\"/url1\">bar</a></p>\n",
    "example": 540,
    "start_line": 8147,
    "end_line": 8155,
    "section": "Links"
  },
  {
    "markdown": "[bar][foo\\!]\n\n[foo!]: /url\n",
    "html": "<p>[bar][foo!]</p>\n",
    "example": 541,
    "start_line": 8162,
    "end_line": 8168,
    "section": "Links"
  },
  {
    "markdown": "[foo][ref[]\n\n[ref[]: /uri\n",
    "html": "<p>[foo][ref[]</p>\n<p>[ref[]: /uri</p>\n",
    "example": 542,
    "start_line": 8174,
    "end_line": 8181,
    "section": "Links"
  },
  {
    "markdown": "[foo][ref[bar]]\n\n[ref[bar]]: /uri\n",
    "html": "<p>[foo][ref[bar]]</p>\n<p>[ref[bar]]: /uri</p>\n",
    "example": 543,
    "start_line": 8184,
    "end_line": 8191,
    "section": "Links"
  },
  {
    "markdown": "[[[foo]]]\n\n[[[foo]]]: /url\n",
    "html": "<p>[[[foo]]]</p>\n<p>[[[foo]]]: /url</p>\n",
    "example": 544,
    "start_line": 8194,
    "end_line": 8201,
    "section": "Links"
  },
  {
    "markdown": "[foo][ref\\[]\n\n[ref\\[]: /uri\n",
    "html": "<p><a href=\"/uri\">foo</a></p>\n",
    "example": 545,
    "start_line": 8204,
    "end_line": 8210,
    "section": "Links"
  },
  {
    "markdown": "[bar\\\\]: /uri\n\n[bar\\\\]\n",
    "html": "<p><a href=\"/uri\">bar\\</a></p>\n",
    "example": 546,
    "start_line": 8215,
    "end_line": 8221,
    "section": "Links"
  },
  {
    "markdown": "[]\n\n[]: /uri\n",
    "html": "<p>[]</p>\n<p>[]: /uri</p>\n",
    "example": 547,
    "start_line": 8226,
    "end_line": 8233,
    "section": "Links"
  },
  {
    "markdown": "[\n ]\n\n[\n ]: /uri\n",
    "html": "<p>[\n]</p>\n<p>[\n]: /uri</p>\n",
    "example": 548,
    "start_line": 8236,
    "end_line": 8247,
    "section": "Links"
  },
  {
    "markdown": "[foo][]\n\n[foo]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "example": 549,
    "start_line": 8259,
    "end_line": 8265,
    "section": "Links"
  },
  {
    "markdown": "[*foo* bar][]\n\n[*foo* bar]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\"><em>foo</em> bar</a></p>\n",
    "example": 550,
    "start_line": 8268,
    "end_line": 8274,
    "section": "Links"
  },
  {
    "markdown": "[Foo][]\n\n[foo]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\">Foo</a></p>\n",
    "example": 551,
    "start_line": 8279,
    "end_line": 8285,
    "section": "Links"
  },
  {
    "markdown": "[foo] \n[]\n\n[foo]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\">foo</a>\n[]</p>\n",
    "example": 552,
    "start_line": 8292,
    "end_line": 8300,
    "section": "Links"
  },
  {
    "markdown": "[foo]\n\n[foo]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "example": 553,
    "start_line": 8312,
    "end_line": 8318,
    "section": "Links"
  },
  {
    "markdown": "[*foo* bar]\n\n[*foo* bar]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\"><em>foo</em> bar</a></p>\n",
    "example": 554,
    "start_line": 8321,
    "end_line": 8327,
    "section": "Links"
  },
  {
    "markdown": "[[*foo* bar]]\n\n[*foo* bar]: /url \"title\"\n",
    "html": "<p>[<a href=\"/url\" title=\"title\"><em>foo</em> bar</a>]</p>\n",
    "example": 555,
    "start_line": 8330,
    "end_line": 8336,
    "section": "Links"
  },
  {
    "markdown": "[[bar [foo]\n\n[foo]: /url\n",
    "html": "<p>[[bar <a href=\"/url\">foo</a></p>\n",
    "example": 556,
    "start_line": 8339,
    "end_line": 8345,
    "section": "Links"
  },
  {
    "markdown": "[Foo]\n\n[foo]: /url \"title\"\n",
    "html": "<p><a href=\"/url\" title=\"title\">Foo</a></p>\n",
    "example": 557,
    "start_line": 8350,
    "end_line": 8356,
    "section": "Links"
  },
  {
    "markdown": "[foo] bar\n\n[foo]: /url\n",
    "html": "<p><a href=\"/url\">foo</a> bar</p>\n",
    "example": 558,
    "start_line": 8361,
    "end_line": 8367,
    "section": "Links"
  },
  {
    "markdown": "\\[foo]\n\n[foo]: /url \"title\"\n",
    "html": "<p>[foo]</p>\n",
    "example": 559,
    "start_line": 8373,
    "end_line": 8379,
    "section": "Links"
  },
  {
    "markdown": "[foo*]: /url\n\n*[foo*]\n",
    "html": "<p>*<a href=\"/url\">foo*</a></p>\n",
    "example": 560,
    "start_line": 8385,
    "end_line": 8391,
    "section": "Links"
  },
  {
    "markdown": "[foo][bar]\n\n[foo]: /url1\n[bar]: /url2\n",
    "html": "<p><a href=\"/url2\">foo</a></p>\n",
    "example": 561,
    "start_line": 8397,
    "end_line": 8404,
    "section": "Links"
  },
  {
    "markdown": "[foo][]\n\n[foo]: /url1\n",
    "html": "<p><a href=\"/url1\">foo</a></p>\n",
    "example": 562,
    "start_line": 8406,
    "end_line": 8412,
    "section": "Links"
  },
  {
    "markdown": "[foo]()\n\n[foo]: /url1\n",
    "html": "<p><a href=\"\">foo</a></p>\n",
    "example": 563,
    "start_line": 8416,
    "end_line": 8422,
    "section": "Links"
  },
  {
    "markdown": "[foo](not a link)\n\n[foo]: /url1\n",
    "html": "<p><a href=\"/url1\">foo</a>(not a link)</p>\n",
    "example": 564,
    "start_line": 8424,
    "end_line": 8430,
    "section": "Links"
  },
  {
    "markdown": "[foo][bar][baz]\n\n[baz]: /url\n",
    "html": "<p>[foo]<a href=\"/url\">bar</a></p>\n",
    "example": 565,
    "start_line": 8435,
    "end_line": 8441,
    "section": "Links"
  },
  {
    "markdown": "[foo][bar][baz]\n\n[baz]: /url1\n[bar]: /url2\n",
    "html": "<p><a href=\"/url2\">foo</a><a href=\"/url1\">baz</a></p>\n",
    "example": 566,
    "start_line": 8447,
    "end_line": 8454,
    "section": "Links"
  },
  {
    "markdown": "[foo][bar][baz]\n\n[baz]: /url1\n[foo]: /url2\n",
    "html": "<p>[foo]<a href=\"/url1\">bar</a></p>\n",
    "example": 567,
    "start_line": 8460,
    "end_line": 8467,
    "section": "Links"
  },
  {
    "markdown": "![foo](/url \"title\")\n",
    "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" /></p>\n",
    "example": 568,
    "start_line": 8483,
    "end_line": 8487,
    "section": "Images"
  },
  {
    "markdown": "![foo *bar*]\n\n[foo *bar*]: train.jpg \"train & tracks\"\n",
    "html": "<p><img src=\"train.jpg\" alt=\"foo bar\" title=\"train &amp; tracks\" /></p>\n",
    "example": 569,
    "start_line": 8490,
    "end_line": 8496,
    "section": "Images"
  },
  {
    "markdown": "![foo ![bar](/url)](/url2)\n",
    "html": "<p><img src=\"/url2\" alt=\"foo bar\" /></p>\n",
    "example": 570,
    "start_line": 8499,
    "end_line": 8503,
    "section": "Images"
  },
  {
    "markdown": "![foo [bar](/url)](/url2)\n",
    "html": "<p><img src=\"/url2\" alt=\"foo bar\" /></p>\n",
    "example": 571,
    "start_line": 8506,
    "end_line": 8510,
    "section": "Images"
  },
  {
    "markdown": "![foo *bar*][]\n\n[foo *bar*]: train.jpg \"train & tracks\"\n",
    "html": "<p><img src=\"train.jpg\" alt=\"foo bar\" title=\"train &amp; tracks\" /></p>\n",
    "example": 572,
    "start_line": 8520,
    "end_line": 8526,
    "section": "Images"
  },
  {
    "markdown": "![foo *bar*][foobar]\n\n[FOOBAR]: train.jpg \"train & tracks\"\n",
    "html": "<p><img src=\"train.jpg\" alt=\"foo bar\" title=\"train &amp; tracks\" /></p>\n",
    "example": 573,
    "start_line": 8529,
    "end_line": 8535,
    "section": "Images"
  },
  {
    "markdown": "![foo](train.jpg)\n",
    "html": "<p><img src=\"train.jpg\" alt=\"foo\" /></p>\n",
    "example": 574,
    "start_line": 8538,
    "end_line": 8542,
    "section": "Images"
  },
  {
    "markdown": "My ![foo bar](/path/to/train.jpg  \"title\"   )\n",
    "html": "<p>My <img src=\"/path/to/train.jpg\" alt=\"foo bar\" title=\"title\" /></p>\n",
    "example": 575,
    "start_line": 8545,
    "end_line": 8549,
    "section": "Images"
  },
  {
    "markdown": "![foo](<url>)\n",
    "html": "<p><img src=\"url\" alt=\"foo\" /></p>\n",
    "example": 576,
    "start_line": 8552,
    "end_line": 8556,
    "section": "Images"
  },
  {
    "markdown": "![](/url)\n",
    "html": "<p><img src=\"/url\" alt=\"\" /></p>\n",
    "example": 577,
    "start_line": 8559,
    "end_line": 8563,
    "section": "Images"
  },
  {
    "markdown": "![foo][bar]\n\n[bar]: /url\n",
    "html": "<p><img src=\"/url\" alt=\"foo\" /></p>\n",
    "example": 578,
    "start_line": 8568,
    "end_line": 8574,
    "section": "Images"
  },
  {
    "markdown": "![foo][bar]\n\n[BAR]: /url\n",
    "html": "<p><img src=\"/url\" alt=\"foo\" /></p>\n",
    "example": 579,
    "start_line": 8577,
    "end_line": 8583,
    "section": "Images"
  },
  {
    "markdown": "![foo][]\n\n[foo]: /url \"title\"\n",
    "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" /></p>\n",
    "example": 580,
    "start_line": 8588,
    "end_line": 8594,
    "section": "Images"
  },
  {
    "markdown": "![*foo* bar][]\n\n[*foo* bar]: /url \"title\"\n",
    "html": "<p><img src=\"/url\" alt=\"foo bar\" title=\"title\" /></p>\n",
    "example": 581,
    "start_line": 8597,
    "end_line": 8603,
    "section": "Images"
  },
  {
    "markdown": "![Foo][]\n\n[foo]: /url \"title\"\n",
    "html": "<p><img src=\"/url\" alt=\"Foo\" title=\"title\" /></p>\n",
    "example": 582,
    "start_line": 8608,
    "end_line": 8614,
    "section": "Images"
  },
  {
    "markdown": "![foo] \n[]\n\n[foo]: /url \"title\"\n",
    "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" />\n[]</p>\n",
    "example": 583,
    "start_line": 8620,
    "end_line": 8628,
    "section": "Images"
  },
  {
    "markdown": "![foo]\n\n[foo]: /url \"title\"\n",
    "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" /></p>\n",
    "example": 584,
    "start_line": 8633,
    "end_line": 8639,
    "section": "Images"
  },
  {
    "markdown": "![*foo* bar]\n\n[*foo* bar]: /url \"title\"\n",
    "html": "<p><img src=\"/url\" alt=\"foo bar\" title=\"title\" /></p>\n",
    "example": 585,
    "start_line": 8642,
    "end_line": 8648,
    "section": "Images"
  },
  {
    "markdown": "![[foo]]\n\n[[foo]]: /url \"title\"\n",
    "html": "<p>![[foo]]</p>\n<p>[[foo]]: /url &quot;title&quot;</p>\n",
    "example": 586,
    "start_line": 8653,
    "end_line": 8660,
    "section": "Images"
  },
  {
    "markdown": "![Foo]\n\n[foo]: /url \"title\"\n",
    "html": "<p><img src=\"/url\" alt=\"Foo\" title=\"title\" /></p>\n",
    "example": 587,
    "start_line": 8665,
    "end_line": 8671,
    "section": "Images"
  },
  {
    "markdown": "!\\[foo]\n\n[foo]: /url \"title\"\n",
    "html": "<p>![foo]</p>\n",
    "example": 588,
    "start_line": 8677,
    "end_line": 8683,
    "section": "Images"
  },
  {
    "markdown": "\\![foo]\n\n[foo]: /url \"title\"\n",
    "html": "<p>!<a href=\"/url\" title=\"title\">foo</a></p>\n",
    "example": 589,
    "start_line": 8689,
    "end_line": 8695,
    "section": "Images"
  },
  {
    "markdown": "<http://foo.bar.baz>\n",
    "html": "<p><a href=\"http://foo.bar.baz\">http://foo.bar.baz</a></p>\n",
    "example": 590,
    "start_line": 8722,
    "end_line": 8726,
    "section": "Autolinks"
  },
  {
    "markdown": "<http://foo.bar.baz/test?q=hello&id=22&boolean>\n",
    "html": "<p><a href=\"http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean\">http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean</a></p>\n",
    "example": 591,
    "start_line": 8729,
    "end_line": 8733,
    "section": "Autolinks"
  },
  {
    "markdown": "<irc://foo.bar:2233/baz>\n",
    "html": "<p><a href=\"irc://foo.bar:2233/baz\">irc://foo.bar:2233/baz</a></p>\n",
    "example": 592,
    "start_line": 8736,
    "end_line": 8740,
    "section": "Autolinks"
  },
  {
    "markdown": "<MAILTO:FOO@BAR.BAZ>\n",
    "html": "<p><a href=\"MAILTO:FOO@BAR.BAZ\">MAILTO:FOO@BAR.BAZ</a></p>\n",
    "example": 593,
    "start_line": 8745,
    "end_line": 8749,
    "section": "Autolinks"
  },
  {
    "markdown": "<a+b+c:d>\n",
    "html": "<p><a href=\"a+b+c:d\">a+b+c:d</a></p>\n",
    "example": 594,
    "start_line": 8757,
    "end_line": 8761,
    "section": "Autolinks"
  },
  {
    "markdown": "<made-up-scheme://foo,bar>\n",
    "html": "<p><a href=\"made-up-scheme://foo,bar\">made-up-scheme://foo,bar</a></p>\n",
    "example": 595,
    "start_line": 8764,
    "end_line": 8768,
    "section": "Autolinks"
  },
  {
    "markdown": "<http://../>\n",
    "html": "<p><a href=\"http://../\">http://../</a></p>\n",
    "example": 596,
    "start_line": 8771,
    "end_line": 8775,
    "section": "Autolinks"
  },
  {
    "markdown": "<localhost:5001/foo>\n",
    "html": "<p><a href=\"localhost:5001/foo\">localhost:5001/foo</a></p>\n",
    "example": 597,
    "start_line": 8778,
    "end_line": 8782,
    "section": "Autolinks"
  },
  {
    "markdown": "<http://foo.bar/baz bim>\n",
    "html": "<p>&lt;http://foo.bar/baz bim&gt;</p>\n",
    "example": 598,
    "start_line": 8787,
    "end_line": 8791,
    "section": "Autolinks"
  },
  {
    "markdown": "<http://example.com/\\[\\>\n",
    "html": "<p><a href=\"http://example.com/%5C%5B%5C\">http://example.com/\\[\\</a></p>\n",
    "example": 599,
    "start_line": 8796,
    "end_line": 8800,
    "section": "Autolinks"
  },
  {
    "markdown": "<foo@bar.example.com>\n",
    "html": "<p><a href=\"mailto:foo@bar.example.com\">foo@bar.example.com</a></p>\n",
    "example": 600,
    "start_line": 8818,
    "end_line": 8822,
    "section": "Autolinks"
  },
  {
    "markdown": "<foo+special@Bar.baz-bar0.com>\n",
    "html": "<p><a href=\"mailto:foo+special@Bar.baz-bar0.com\">foo+special@Bar.baz-bar0.com</a></p>\n",
    "example": 601,
    "start_line": 8825,
    "end_line": 8829,
    "section": "Autolinks"
  },
  {
    "markdown": "<foo\\+@bar.example.com>\n",
    "html": "<p>&lt;foo+@bar.example.com&gt;</p>\n",
    "example": 602,
    "start_line": 8834,
    "end_line": 8838,
    "section": "Autolinks"
  },
  {
    "markdown": "<>\n",
    "html": "<p>&lt;&gt;</p>\n",
    "example": 603,
    "start_line": 8843,
    "end_line": 8847,
    "section": "Autolinks"
  },
  {
    "markdown": "< http://foo.bar >\n",
    "html": "<p>&lt; http://foo.bar &gt;</p>\n",
    "example": 604,
    "start_line": 8850,
    "end_line": 8854,
    "section": "Autolinks"
  },
  {
    "markdown": "<m:abc>\n",
    "html": "<p>&lt;m:abc&gt;</p>\n",
    "example": 605,
    "start_line": 8857,
    "end_line": 8861,
    "section": "Autolinks"
  },
  {
    "markdown": "<foo.bar.baz>\n",
    "html": "<p>&lt;foo.bar.baz&gt;</p>\n",
    "example": 606,
    "start_line": 8864,
    "end_line": 8868,
    "section": "Autolinks"
  },
  {
    "markdown": "http://example.com\n",
    "html": "<p>http://example.com</p>\n",
    "example": 607,
    "start_line": 8871,
    "end_line": 8875,
    "section": "Autolinks"
  },
  {
    "markdown": "foo@bar.example.com\n",
    "html": "<p>foo@bar.example.com</p>\n",
    "example": 608,
    "start_line": 8878,
    "end_line": 8882,
    "section": "Autolinks"
  },
  {
    "markdown": "<a><bab><c2c>\n",
    "html": "<p><a><bab><c2c></p>\n",
    "example": 609,
    "start_line": 8960,
    "end_line": 8964,
    "section": "Raw HTML"
  },
  {
    "markdown": "<a/><b2/>\n",
    "html": "<p><a/><b2/></p>\n",
    "example": 610,
    "start_line": 8969,
    "end_line": 8973,
    "section": "Raw HTML"
  },
  {
    "markdown": "<a  /><b2\ndata=\"foo\" >\n",
    "html": "<p><a  /><b2\ndata=\"foo\" ></p>\n",
    "example": 611,
    "start_line": 8978,
    "end_line": 8984,
    "section": "Raw HTML"
  },
  {
    "markdown": "<a foo=\"bar\" bam = 'baz <em>\"</em>'\n_boolean zoop:33=zoop:33 />\n",
    "html": "<p><a foo=\"bar\" bam = 'baz <em>\"</em>'\n_boolean zoop:33=zoop:33 /></p>\n",
    "example": 612,
    "start_line": 8989,
    "end_line": 8995,
    "section": "Raw HTML"
  },
  {
    "markdown": "Foo <responsive-image src=\"foo.jpg\" />\n",
    "html": "<p>Foo <responsive-image src=\"foo.jpg\" /></p>\n",
    "example": 613,
    "start_line": 9000,
    "end_line": 9004,
    "section": "Raw HTML"
  },
  {
    "markdown": "<33> <__>\n",
    "html": "<p>&lt;33&gt; &lt;__&gt;</p>\n",
    "example": 614,
    "start_line": 9009,
    "end_line": 9013,
    "section": "Raw HTML"
  },
  {
    "markdown": "<a h*#ref=\"hi\">\n",
    "html": "<p>&lt;a h*#ref=&quot;hi&quot;&gt;</p>\n",
    "example": 615,
    "start_line": 9018,
    "end_line": 9022,
    "section": "Raw HTML"
  },
  {
    "markdown": "<a href=\"hi'> <a href=hi'>\n",
    "html": "<p>&lt;a href=&quot;hi'&gt; &lt;a href=hi'&gt;</p>\n",
    "example": 616,
    "start_line": 9027,
    "end_line": 9031,
    "section": "Raw HTML"
  },
  {
    "markdown": "< a><\nfoo><bar/ >\n<foo bar=baz\nbim!bop />\n",
    "html": "<p>&lt; a&gt;&lt;\nfoo&gt;&lt;bar/ &gt;\n&lt;foo bar=baz\nbim!bop /&gt;</p>\n",
    "example": 617,
    "start_line": 9036,
    "end_line": 9046,
    "section": "Raw HTML"
  },
  {
    "markdown": "<a href='bar'title=title>\n",
    "html": "<p>&lt;a href='bar'title=title&gt;</p>\n",
    "example": 618,
    "start_line": 9051,
    "end_line": 9055,
    "section": "Raw HTML"
  },
  {
    "markdown": "</a></foo >\n",
    "html": "<p></a></foo ></p>\n",
    "example": 619,
    "start_line": 9060,
    "end_line": 9064,
    "section": "Raw HTML"
  },
  {
    "markdown": "</a href=\"foo\">\n",
    "html": "<p>&lt;/a href=&quot;foo&quot;&gt;</p>\n",
    "example": 620,
    "start_line": 9069,
    "end_line": 9073,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo <!-- this is a\ncomment - with hyphen -->\n",
    "html": "<p>foo <!-- this is a\ncomment - with hyphen --></p>\n",
    "example": 621,
    "start_line": 9078,
    "end_line": 9084,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo <!-- not a comment -- two hyphens -->\n",
    "html": "<p>foo &lt;!-- not a comment -- two hyphens --&gt;</p>\n",
    "example": 622,
    "start_line": 9087,
    "end_line": 9091,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo <!--> foo -->\n\nfoo <!-- foo--->\n",
    "html": "<p>foo &lt;!--&gt; foo --&gt;</p>\n<p>foo &lt;!-- foo---&gt;</p>\n",
    "example": 623,
    "start_line": 9096,
    "end_line": 9103,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo <?php echo $a; ?>\n",
    "html": "<p>foo <?php echo $a; ?></p>\n",
    "example": 624,
    "start_line": 9108,
    "end_line": 9112,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo <!ELEMENT br EMPTY>\n",
    "html": "<p>foo <!ELEMENT br EMPTY></p>\n",
    "example": 625,
    "start_line": 9117,
    "end_line": 9121,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo <![CDATA[>&<]]>\n",
    "html": "<p>foo <![CDATA[>&<]]></p>\n",
    "example": 626,
    "start_line": 9126,
    "end_line": 9130,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo <a href=\"&ouml;\">\n",
    "html": "<p>foo <a href=\"&ouml;\"></p>\n",
    "example": 627,
    "start_line": 9136,
    "end_line": 9140,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo <a href=\"\\*\">\n",
    "html": "<p>foo <a href=\"\\*\"></p>\n",
    "example": 628,
    "start_line": 9145,
    "end_line": 9149,
    "section": "Raw HTML"
  },
  {
    "markdown": "<a href=\"\\\"\">\n",
    "html": "<p>&lt;a href=&quot;&quot;&quot;&gt;</p>\n",
    "example": 629,
    "start_line": 9152,
    "end_line": 9156,
    "section": "Raw HTML"
  },
  {
    "markdown": "foo  \nbaz\n",
    "html": "<p>foo<br />\nbaz</p>\n",
    "example": 630,
    "start_line": 9166,
    "end_line": 9172,
    "section": "Hard line breaks"
  },
  {
    "markdown": "foo\\\nbaz\n",
    "html": "<p>foo<br />\nbaz</p>\n",
    "example": 631,
    "start_line": 9178,
    "end_line": 9184,
    "section": "Hard line breaks"
  },
  {
    "markdown": "foo       \nbaz\n",
    "html": "<p>foo<br />\nbaz</p>\n",
    "example": 632,
    "start_line": 9189,
    "end_line": 9195,
    "section": "Hard line breaks"
  },
  {
    "markdown": "foo  \n     bar\n",
    "html": "<p>foo<br />\nbar</p>\n",
    "example": 633,
    "start_line": 9200,
    "end_line": 9206,
    "section": "Hard line breaks"
  },
  {
    "markdown": "foo\\\n     bar\n",
    "html": "<p>foo<br />\nbar</p>\n",
    "example": 634,
    "start_line": 9209,
    "end_line": 9215,
    "section": "Hard line breaks"
  },
  {
    "markdown": "*foo  \nbar*\n",
    "html": "<p><em>foo<br />\nbar</em></p>\n",
    "example": 635,
    "start_line": 9221,
    "end_line": 9227,
    "section": "Hard line breaks"
  },
  {
    "markdown": "*foo\\\nbar*\n",
    "html": "<p><em>foo<br />\nbar</em></p>\n",
    "example": 636,
    "start_line": 9230,
    "end_line": 9236,
    "section": "Hard line breaks"
  },
  {
    "markdown": "`code \nspan`\n",
    "html": "<p><code>code  span</code></p>\n",
    "example": 637,
    "start_line": 9241,
    "end_line": 9246,
    "section": "Hard line breaks"
  },
  {
    "markdown": "`code\\\nspan`\n",
    "html": "<p><code>code\\ span</code></p>\n",
    "example": 638,
    "start_line": 9249,
    "end_line": 9254,
    "section": "Hard line breaks"
  },
  {
    "markdown": "<a href=\"foo  \nbar\">\n",
    "html": "<p><a href=\"foo  \nbar\"></p>\n",
    "example": 639,
    "start_line": 9259,
    "end_line": 9265,
    "section": "Hard line breaks"
  },
  {
    "markdown": "<a href=\"foo\\\nbar\">\n",
    "html": "<p><a href=\"foo\\\nbar\"></p>\n",
    "example": 640,
    "start_line": 9268,
    "end_line": 9274,
    "section": "Hard line breaks"
  },
  {
    "markdown": "foo\\\n",
    "html": "<p>foo\\</p>\n",
    "example": 641,
    "start_line": 9281,
    "end_line": 9285,
    "section": "Hard line breaks"
  },
  {
    "markdown": "foo  \n",
    "html": "<p>foo</p>\n",
    "example": 642,
    "start_line": 9288,
    "end_line": 9292,
    "section": "Hard line breaks"
  },
  {
    "markdown": "### foo\\\n",
    "html": "<h3>foo\\</h3>\n",
    "example": 643,
    "start_line": 9295,
    "end_line": 9299,
    "section": "Hard line breaks"
  },
  {
    "markdown": "### foo  \n",
    "html": "<h3>foo</h3>\n",
    "example": 644,
    "start_line": 9302,
    "end_line": 9306,
    "section": "Hard line breaks"
  },
  {
    "markdown": "foo\nbaz\n",
    "html": "<p>foo\nbaz</p>\n",
    "example": 645,
    "start_line": 9317,
    "end_line": 9323,
    "section": "Soft line breaks"
  },
  {
    "markdown": "foo \n baz\n",
    "html": "<p>foo\nbaz</p>\n",
    "example": 646,
    "start_line": 9329,
    "end_line": 9335,
    "section": "Soft line breaks"
  },
  {
    "markdown": "hello $.;'there\n",
    "html": "<p>hello $.;'there</p>\n",
    "example": 647,
    "start_line": 9349,
    "end_line": 9353,
    "section": "Textual content"
  },
  {
    "markdown": "Foo χρῆν\n",
    "html": "<p>Foo χρῆν</p>\n",
    "example": 648,
    "start_line": 9356,
    "end_line": 9360,
    "section": "Textual content"
  },
  {
    "markdown": "Multiple     spaces\n",
    "html": "<p>Multiple     spaces</p>\n",
    "example": 649,
    "start_line": 9365,
    "end_line": 9369,
    "section": "Textual content"
  }
]
