"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[989],{4211:(n,e,t)=>{t.d(e,{o:()=>O,U:()=>k});var o=t(1855),r=t(5975),i=t(3957),a=t.n(i),f=t(1794),c=t.n(f),d=t(8866),l=t.n(d),u=t(621),s=t.n(u),p=t(3897),h=t.n(p),m=t(5462),j=t.n(m),b=t(3903),y={};y.styleTagTransform=j(),y.setAttributes=s(),y.insert=l().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=h(),a()(b.A,y),b.A&&b.A.locals&&b.A.locals;var v=t(6290),g=(0,r.vt)({}),k=function(n,e){return g.diff(n,e)};function O(n){var e=n.left,t=n.right,r=k(e,t),i=r&&v.format(r,e);return i?o.createElement("div",{className:"jsondiffpatch-unchanged-hidden",dangerouslySetInnerHTML:{__html:i}}):null}},8370:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var o=t(1855),r=t(7113),i=t(4211),a=t(9335);function f(n){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},f(n)}var c=["data"];function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){u(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e,t){var o;return o=function(n,e){if("object"!=f(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,"string");if("object"!=f(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(e),(e="symbol"==f(o)?o:o+"")in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var o,r,i,a,f=[],c=!0,d=!1;try{if(i=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;c=!1}else for(;!(c=(o=i.call(t)).done)&&(f.push(o.value),f.length!==e);c=!0);}catch(n){d=!0,r=n}finally{try{if(!c&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(d)throw r}}return f}}(n,e)||p(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(n,e){if(n){if("string"==typeof n)return h(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(n,e):void 0}}function h(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}var m,j=[100].concat((m=Array(5),function(n){if(Array.isArray(n))return h(n)}(m)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(m)||p(m)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(n,e){return 1e3*(e+1)}))),b=(0,r.$)((function(n){return fetch("".concat("","rynek?limit=").concat(n)).then((function(n){return n.json()})).then((function(n){return n.result}))})),y=function(n){return fetch("".concat("","rynek/delete?id=").concat(n))};function v(n){var e,t=n.item,r=s((0,o.useState)((function(){return!1})),2),i=r[0],a=r[1];return o.createElement("pre",{onClick:(0,o.useCallback)((function(){return a(!0)}),[])},JSON.stringify(i?t:l({data:{name:(e=t).data.name}},function(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t={};for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){if(e.indexOf(o)>=0)continue;t[o]=n[o]}return t}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}(e,c)),null,2))}function g(){var n=s((0,o.useState)((function(){return{limit:j[1]}})),2),e=n[0],t=n[1],r=b.read(e.limit),f=(0,o.useMemo)((function(){return r.reduce((function(n,e){return Object.assign(n,u({},e.item,(n[e.item]||[]).concat(e)))}),{})}),[r]),c=s((0,o.useState)((function(){return[]})),2),d=c[0],p=c[1],h=(0,o.useCallback)((function(n){var e,t=n.target;return e=Number(t.value),p((function(n){return t.checked?n.concat(e):n.filter((function(n){return n!==e}))}))}),[]);return console.log(l(l({},e),{},{result:r})),o.createElement("section",null,o.createElement("h2",null,"Rynek"),o.createElement("div",null,o.createElement("label",null,o.createElement("span",null,"limit"),o.createElement("select",{value:String(e.limit),onChange:(0,o.useCallback)((function(n){var e=n.target;return t((function(n){return l(l({},n),{},{limit:Number(e.value)})}))}),[])},j.map((function(n){return o.createElement("option",{key:n,value:String(n)},n)})))),o.createElement("button",{onClick:function(){return p(Object.values(f).flatMap((function(n){return n.reduce((function(n,e,t,o){return t<o.length-1&&void 0===(0,i.U)(a.VW.parse(o[t+1].data),a.VW.parse(e.data))?n.concat(e.id):n}),[])})))}},"select duplicates"),o.createElement("button",{disabled:0===d.length,onClick:function(){return d.reduce((function(n,e){return n.then((function(){return y(e)}))}),Promise.resolve())}},"delete selected (".concat(d.length,")"))),o.createElement("ol",null,Object.entries(f).map((function(n){var e=s(n,2),t=e[0],r=e[1];return o.createElement("li",{key:t},"[",t,"]",o.createElement("ul",null,r.map((function(n,e){return o.createElement("li",{key:n.id},o.createElement("label",null,o.createElement("input",{type:"checkbox",value:n.id,checked:d.includes(n.id),onChange:h}),"[",n.id,"]"),o.createElement("button",{onClick:function(){return y(n.id)}},"delete"),o.createElement(v,{item:n}),e<r.length-1&&o.createElement(i.o,{left:a.VW.parse(r[e+1].data),right:a.VW.parse(n.data)}))}))))}))))}},3903:(n,e,t)=>{t.d(e,{A:()=>f});var o=t(1157),r=t.n(o),i=t(8614),a=t.n(i)()(r());a.push([n.id,'.jsondiffpatch-delta {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  display: inline-block;\n}\n.jsondiffpatch-delta pre {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\nul.jsondiffpatch-delta {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-delta ul {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-added .jsondiffpatch-property-name,\n.jsondiffpatch-added .jsondiffpatch-value pre,\n.jsondiffpatch-modified .jsondiffpatch-right-value pre,\n.jsondiffpatch-textdiff-added {\n  background: #bbffbb;\n}\n.jsondiffpatch-deleted .jsondiffpatch-property-name,\n.jsondiffpatch-deleted pre,\n.jsondiffpatch-modified .jsondiffpatch-left-value pre,\n.jsondiffpatch-textdiff-deleted {\n  background: #ffbbbb;\n  text-decoration: line-through;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination {\n  color: gray;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination > .jsondiffpatch-value {\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  overflow-y: hidden;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-showing\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  display: block;\n}\n.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-visible\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n  display: none;\n}\n.jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-property-name {\n  display: inline-block;\n  padding-right: 5px;\n  vertical-align: top;\n}\n.jsondiffpatch-property-name:after {\n  content: ": ";\n}\n.jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n  content: ": [";\n}\n.jsondiffpatch-child-node-type-array:after {\n  content: "],";\n}\ndiv.jsondiffpatch-child-node-type-array:before {\n  content: "[";\n}\ndiv.jsondiffpatch-child-node-type-array:after {\n  content: "]";\n}\n.jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n  content: ": {";\n}\n.jsondiffpatch-child-node-type-object:after {\n  content: "},";\n}\ndiv.jsondiffpatch-child-node-type-object:before {\n  content: "{";\n}\ndiv.jsondiffpatch-child-node-type-object:after {\n  content: "}";\n}\n.jsondiffpatch-value pre:after {\n  content: ",";\n}\nli:last-child > .jsondiffpatch-value pre:after,\n.jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n  content: "";\n}\n.jsondiffpatch-modified .jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-modified .jsondiffpatch-right-value {\n  margin-left: 5px;\n}\n.jsondiffpatch-moved .jsondiffpatch-value {\n  display: none;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination {\n  display: inline-block;\n  background: #ffffbb;\n  color: #888;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n  content: " => ";\n}\nul.jsondiffpatch-textdiff {\n  padding: 0;\n}\n.jsondiffpatch-textdiff-location {\n  color: #bbb;\n  display: inline-block;\n  min-width: 60px;\n}\n.jsondiffpatch-textdiff-line {\n  display: inline-block;\n}\n.jsondiffpatch-textdiff-line-number:after {\n  content: ",";\n}\n.jsondiffpatch-error {\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n',""]);const f=a}}]);