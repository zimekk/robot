"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[992],{8852:(n,e,t)=>{t.d(e,{o:()=>k,U:()=>O});var o=t(1855),i=t(5975),a=t(4500),r=t.n(a),c=t(4845),f=t.n(c),d=t(8751),l=t.n(d),s=t(1788),u=t.n(s),p=t(9464),h=t.n(p),j=t(4133),m=t.n(j),b=t(1706),y={};y.styleTagTransform=m(),y.setAttributes=u(),y.insert=l().bind(null,"head"),y.domAPI=f(),y.insertStyleElement=h(),r()(b.A,y),b.A&&b.A.locals&&b.A.locals;var g=t(6290),v=(0,i.vt)({}),O=function(n,e){return v.diff(n,e)};function k(n){var e=n.left,t=n.right,i=O(e,t),a=i&&g.format(i,e);return a?o.createElement("div",{className:"jsondiffpatch-unchanged-hidden",dangerouslySetInnerHTML:{__html:a}}):null}},6992:(n,e,t)=>{t.r(e),t.d(e,{default:()=>j});var o=t(2155),i=t(525),a=t(8852),r=t(6275),c=["data"];function f(n){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},f(n)}function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function l(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var o,i,a,r,c=[],f=!0,d=!1;try{if(a=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;f=!1}else for(;!(f=(o=a.call(t)).done)&&(c.push(o.value),c.length!==e);f=!0);}catch(n){d=!0,i=n}finally{try{if(!f&&null!=t.return&&(r=t.return(),Object(r)!==r))return}finally{if(d)throw i}}return c}}(n,e)||function(n,e){if(n){if("string"==typeof n)return s(n,e);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=Array(e);t<e;t++)o[t]=n[t];return o}function u(n,e,t){return(e=function(n){var e=function(n){if("object"!=f(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,"string");if("object"!=f(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==f(e)?e:e+""}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var p=(0,i.$)((function(){return fetch("".concat("","stock?limit=100")).then((function(n){return n.json()})).then((function(n){return n.result}))})),h=function(n){return fetch("".concat("","stock/delete?id=").concat(n))};function j(){var n=p.read(),e=(0,o.useMemo)((function(){return n.reduce((function(n,e){return Object.assign(n,u({},e.item,(n[e.item]||[]).concat(e)))}),{})}),[n]),t=l((0,o.useState)((function(){return[]})),2),i=t[0],f=t[1],s=(0,o.useCallback)((function(n){var e,t=n.target;return e=Number(t.value),f((function(n){return t.checked?n.concat(e):n.filter((function(n){return n!==e}))}))}),[]);return console.log({result:n,grouped:e,selected:i}),o.createElement("section",null,o.createElement("h2",null,"Stock"),o.createElement("div",null,o.createElement("button",{onClick:function(){return f(Object.values(e).flatMap((function(n){return n.reduce((function(n,e,t,o){return t<o.length-1&&void 0===(0,a.U)(r.VW.parse(o[t+1].data),r.VW.parse(e.data))?n.concat(e.id):n}),[])})))}},"select duplicates"),o.createElement("button",{disabled:0===i.length,onClick:function(){return i.reduce((function(n,e){return n.then((function(){return h(e)}))}),Promise.resolve())}},"delete selected (".concat(i.length,")"))),o.createElement("ol",null,Object.entries(e).map((function(n){var e=l(n,2),t=e[0],f=e[1];return o.createElement("li",{key:t},"[",t,"]",o.createElement("ul",null,f.map((function(n,e){return o.createElement("li",{key:n.id},o.createElement("label",null,o.createElement("input",{type:"checkbox",value:n.id,checked:i.includes(n.id),onChange:s}),"[",n.id,"]"),o.createElement("button",{onClick:function(){return h(n.id)}},"delete"),o.createElement("pre",null,JSON.stringify(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){u(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({data:{documentId:(l=(t=n).data).documentId,price:l.price,salesProcess:l.salesProcess,vehicleSpecification:{modelAndOption:{model:l.vehicleSpecification.modelAndOption.model}}}},function(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t={};for(var o in n)if({}.hasOwnProperty.call(n,o)){if(e.includes(o))continue;t[o]=n[o]}return t}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.includes(t)||{}.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}(t,c)),null,2)),e<f.length-1&&o.createElement(a.o,{left:r.VW.parse(f[e+1].data),right:r.VW.parse(n.data)}));var t,l}))))}))))}},1706:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(3703),i=t.n(o),a=t(5416),r=t.n(a)()(i());r.push([n.id,'.jsondiffpatch-delta {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  display: inline-block;\n}\n.jsondiffpatch-delta pre {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\nul.jsondiffpatch-delta {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-delta ul {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-added .jsondiffpatch-property-name,\n.jsondiffpatch-added .jsondiffpatch-value pre,\n.jsondiffpatch-modified .jsondiffpatch-right-value pre,\n.jsondiffpatch-textdiff-added {\n  background: #bbffbb;\n}\n.jsondiffpatch-deleted .jsondiffpatch-property-name,\n.jsondiffpatch-deleted pre,\n.jsondiffpatch-modified .jsondiffpatch-left-value pre,\n.jsondiffpatch-textdiff-deleted {\n  background: #ffbbbb;\n  text-decoration: line-through;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination {\n  color: gray;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination > .jsondiffpatch-value {\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  overflow-y: hidden;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-showing\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  display: block;\n}\n.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-visible\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n  display: none;\n}\n.jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-property-name {\n  display: inline-block;\n  padding-right: 5px;\n  vertical-align: top;\n}\n.jsondiffpatch-property-name:after {\n  content: ": ";\n}\n.jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n  content: ": [";\n}\n.jsondiffpatch-child-node-type-array:after {\n  content: "],";\n}\ndiv.jsondiffpatch-child-node-type-array:before {\n  content: "[";\n}\ndiv.jsondiffpatch-child-node-type-array:after {\n  content: "]";\n}\n.jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n  content: ": {";\n}\n.jsondiffpatch-child-node-type-object:after {\n  content: "},";\n}\ndiv.jsondiffpatch-child-node-type-object:before {\n  content: "{";\n}\ndiv.jsondiffpatch-child-node-type-object:after {\n  content: "}";\n}\n.jsondiffpatch-value pre:after {\n  content: ",";\n}\nli:last-child > .jsondiffpatch-value pre:after,\n.jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n  content: "";\n}\n.jsondiffpatch-modified .jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-modified .jsondiffpatch-right-value {\n  margin-left: 5px;\n}\n.jsondiffpatch-moved .jsondiffpatch-value {\n  display: none;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination {\n  display: inline-block;\n  background: #ffffbb;\n  color: #888;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n  content: " => ";\n}\nul.jsondiffpatch-textdiff {\n  padding: 0;\n}\n.jsondiffpatch-textdiff-location {\n  color: #bbb;\n  display: inline-block;\n  min-width: 60px;\n}\n.jsondiffpatch-textdiff-line {\n  display: inline-block;\n}\n.jsondiffpatch-textdiff-line-number:after {\n  content: ",";\n}\n.jsondiffpatch-error {\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n',""]);const c=r}}]);