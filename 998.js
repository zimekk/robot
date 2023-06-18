"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[998],{8273:(n,t,e)=>{e.d(t,{z:()=>k,H:()=>v});var i=e(2784),o=e(2406),a=e(6062),f=e.n(a),d=e(4036),r=e.n(d),c=e(6793),l=e.n(c),s=e(7892),p=e.n(s),h=e(1173),u=e.n(h),j=e(2464),m=e.n(j),y=e(7275),b={};b.styleTagTransform=m(),b.setAttributes=p(),b.insert=l().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=u(),f()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals;var g=(0,o.create)({}),v=function(n,t){return g.diff(n,t)};function k(n){var t=n.left,e=n.right,a=v(t,e);return a?i.createElement("div",{className:"jsondiffpatch-unchanged-hidden",dangerouslySetInnerHTML:{__html:o.formatters.html.format(a,t)}}):null}},998:(n,t,e)=>{e.r(t),e.d(t,{default:()=>s});var i=e(2784),o=e(357),a=e(8273),f=e(9858);function d(n){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d(n)}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}var c="",l=(0,o.k)((function(){return fetch("".concat(c,"stock?limit=500")).then((function(n){return n.json()})).then((function(n){return n.result}))}));function s(){var n=l.read(),t=(0,i.useMemo)((function(){return n.reduce((function(n,t){return Object.assign(n,(e={},i=t.item,o=(n[t.item]||[]).concat(t),(i=function(n){var t=function(n,t){if("object"!==d(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var i=e.call(n,"string");if("object"!==d(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===d(t)?t:String(t)}(i))in e?Object.defineProperty(e,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[i]=o,e));var e,i,o}),{})}),[n]);return console.log({result:n,grouped:t}),i.createElement("section",null,i.createElement("h2",null,"Stock"),i.createElement("ol",null,Object.entries(t).map((function(n){var t,e,o=(e=2,function(n){if(Array.isArray(n))return n}(t=n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var i,o,a,f,d=[],r=!0,c=!1;try{if(a=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;r=!1}else for(;!(r=(i=a.call(e)).done)&&(d.push(i.value),d.length!==t);r=!0);}catch(n){c=!0,o=n}finally{try{if(!r&&null!=e.return&&(f=e.return(),Object(f)!==f))return}finally{if(c)throw o}}return d}}(t,e)||function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=o[0],l=o[1];return i.createElement("li",{key:d},"[",d,"]",i.createElement("ul",null,l.map((function(n,t){return i.createElement("li",{key:n.id},"[",n.id,"]",i.createElement("button",{onClick:(0,i.useCallback)((function(){return fetch("".concat(c,"stock/delete?id=").concat(n.id))}),[])},"delete"),i.createElement("pre",null,JSON.stringify(f.Mx.parse(n.data),null,2)),t<l.length-1&&i.createElement(a.z,{left:f.Mx.parse(l[t+1].data),right:f.Mx.parse(n.data)}))}))))}))))}},7275:(n,t,e)=>{e.d(t,{Z:()=>d});var i=e(9601),o=e.n(i),a=e(2609),f=e.n(a)()(o());f.push([n.id,'.jsondiffpatch-delta {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  display: inline-block;\n}\n.jsondiffpatch-delta pre {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\nul.jsondiffpatch-delta {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-delta ul {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-added .jsondiffpatch-property-name,\n.jsondiffpatch-added .jsondiffpatch-value pre,\n.jsondiffpatch-modified .jsondiffpatch-right-value pre,\n.jsondiffpatch-textdiff-added {\n  background: #bbffbb;\n}\n.jsondiffpatch-deleted .jsondiffpatch-property-name,\n.jsondiffpatch-deleted pre,\n.jsondiffpatch-modified .jsondiffpatch-left-value pre,\n.jsondiffpatch-textdiff-deleted {\n  background: #ffbbbb;\n  text-decoration: line-through;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination {\n  color: gray;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination > .jsondiffpatch-value {\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  overflow-y: hidden;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-showing\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  display: block;\n}\n.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-visible\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n  display: none;\n}\n.jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-property-name {\n  display: inline-block;\n  padding-right: 5px;\n  vertical-align: top;\n}\n.jsondiffpatch-property-name:after {\n  content: ": ";\n}\n.jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n  content: ": [";\n}\n.jsondiffpatch-child-node-type-array:after {\n  content: "],";\n}\ndiv.jsondiffpatch-child-node-type-array:before {\n  content: "[";\n}\ndiv.jsondiffpatch-child-node-type-array:after {\n  content: "]";\n}\n.jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n  content: ": {";\n}\n.jsondiffpatch-child-node-type-object:after {\n  content: "},";\n}\ndiv.jsondiffpatch-child-node-type-object:before {\n  content: "{";\n}\ndiv.jsondiffpatch-child-node-type-object:after {\n  content: "}";\n}\n.jsondiffpatch-value pre:after {\n  content: ",";\n}\nli:last-child > .jsondiffpatch-value pre:after,\n.jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n  content: "";\n}\n.jsondiffpatch-modified .jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-modified .jsondiffpatch-right-value {\n  margin-left: 5px;\n}\n.jsondiffpatch-moved .jsondiffpatch-value {\n  display: none;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination {\n  display: inline-block;\n  background: #ffffbb;\n  color: #888;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n  content: " => ";\n}\nul.jsondiffpatch-textdiff {\n  padding: 0;\n}\n.jsondiffpatch-textdiff-location {\n  color: #bbb;\n  display: inline-block;\n  min-width: 60px;\n}\n.jsondiffpatch-textdiff-line {\n  display: inline-block;\n}\n.jsondiffpatch-textdiff-line-number:after {\n  content: ",";\n}\n.jsondiffpatch-error {\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n',""]);const d=f}}]);