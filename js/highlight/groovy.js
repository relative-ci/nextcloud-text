(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[72],{526:function(e,n,a){"use strict";function t(e){return e?"string"==typeof e?e:e.source:null}function r(e){return function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var r=n.map((function(e){return t(e)})).join("");return r}("(?=",e,")")}function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.variants=e,n}e.exports=function(e){var n=i([e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]})]),a={className:"regexp",begin:/~?\/[^\/\n]+\//,contains:[e.BACKSLASH_ESCAPE]},t=i([e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]),s=i([{begin:/"""/,end:/"""/},{begin:/'''/,end:/'''/},{begin:"\\$/",end:"/\\$",relevance:10},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE],{className:"string"});return{name:"Groovy",keywords:{built_in:"this super",literal:"true false null",keyword:"byte short char int long boolean float double void def as in assert trait abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"},contains:[e.SHEBANG({binary:"groovy",relevance:10}),n,s,a,t,{className:"class",beginKeywords:"class interface trait enum",end:/\{/,illegal:":",contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{className:"meta",begin:"@[A-Za-z]+",relevance:0},{className:"attr",begin:"[A-Za-z0-9_$]+[ \t]*:"},{begin:/\?/,end:/:/,relevance:0,contains:[n,s,a,t,"self"]},{className:"symbol",begin:"^[ \t]*"+r("[A-Za-z0-9_$]+:"),excludeBegin:!0,end:"[A-Za-z0-9_$]+:",relevance:0}],illegal:/#|<\//}}}}]);
//# sourceMappingURL=groovy.js.map?v=d5ae6b77d487e4e913f7