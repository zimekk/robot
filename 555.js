"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[555],{8512:(n,e,t)=>{t.d(e,{o:()=>O,U:()=>k});var r=t(1855),i=t(5975),o=t(3957),a=t.n(o),c=t(1794),f=t.n(c),l=t(8866),d=t.n(l),u=t(621),s=t.n(u),p=t(3897),h=t.n(p),m=t(5462),b=t.n(m),j=t(3903),y={};y.styleTagTransform=b(),y.setAttributes=s(),y.insert=d().bind(null,"head"),y.domAPI=f(),y.insertStyleElement=h(),a()(j.A,y),j.A&&j.A.locals&&j.A.locals;var g=t(6290),v=(0,i.vt)({}),k=function(n,e){return v.diff(n,e)};function O(n){var e=n.left,t=n.right,i=k(e,t),o=i&&g.format(i,e);return o?r.createElement("div",{className:"jsondiffpatch-unchanged-hidden",dangerouslySetInnerHTML:{__html:o}}):null}},2555:(n,e,t)=>{t.r(e),t.d(e,{default:()=>S});var r=t(1855),i=t(7113),o=t(8512),a=t(2862),c=t(9103),f=["pb","pb+","on","on+","lpg","lpg+"],l=c.z.object({url:c.z.string(),station_id:c.z.number(),x:c.z.number(),y:c.z.number(),network_id:c.z.number(),network_name:c.z.string(),map_img:c.z.string()}).extend({address:c.z.string(),map_img:c.z.string().optional(),petrol_list:c.z.object({type:c.z.enum(f),price:c.z.coerce.number()}).array()}).extend({}),d=c.z.object({html:c.z.string()}).transform((function(n){var e,t,r=n.html;return e=(0,a.parse)(r),c.z.object({address:c.z.string(),petrol_list:c.z.object({type:c.z.enum(f),price:c.z.coerce.number()}).array()}).parse({address:null===(t=e.querySelector("div.right-side > a:first-child"))||void 0===t?void 0:t.text,petrol_list:e.querySelectorAll("ul.petrol-list > li").map((function(n){return{type:n.childNodes[0].text,price:n.childNodes[1].text}}))})}));function u(n){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},u(n)}c.z.object({json:d});var s=["data"];function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function h(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){m(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function m(n,e,t){var r;return r=function(n,e){if("object"!=u(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(e),(e="symbol"==u(r)?r:r+"")in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function b(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o,a,c=[],f=!0,l=!1;try{if(o=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;f=!1}else for(;!(f=(r=o.call(t)).done)&&(c.push(r.value),c.length!==e);f=!0);}catch(n){l=!0,i=n}finally{try{if(!f&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(l)throw i}}return c}}(n,e)||j(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(n,e){if(n){if("string"==typeof n)return y(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(n,e):void 0}}function y(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var g,v=[100].concat((g=Array(5),function(n){if(Array.isArray(n))return y(n)}(g)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(g)||j(g)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(n,e){return 1e3*(e+1)}))),k=(0,i.$)((function(n){return fetch("".concat("","fuels?limit=").concat(n)).then((function(n){return n.json()})).then((function(n){return n.result}))})),O=function(n){return fetch("".concat("","fuels/delete?id=").concat(n))};function w(n){var e,t=n.item,i=b((0,r.useState)((function(){return!1})),2),o=i[0],a=i[1];return r.createElement("pre",{onClick:(0,r.useCallback)((function(){return a(!0)}),[])},JSON.stringify(o?t:h({data:(e=t).data},function(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}(e,s)),null,2))}function S(){var n=b((0,r.useState)((function(){return{limit:v[1]}})),2),e=n[0],t=n[1],i=k.read(e.limit),a=(0,r.useMemo)((function(){return i.reduce((function(n,e){return Object.assign(n,m({},e.item,(n[e.item]||[]).concat(e)))}),{})}),[i]),c=b((0,r.useState)((function(){return[]})),2),f=c[0],d=c[1],u=(0,r.useCallback)((function(n){var e,t=n.target;return e=Number(t.value),d((function(n){return t.checked?n.concat(e):n.filter((function(n){return n!==e}))}))}),[]);return console.log(h(h({},e),{},{result:i})),r.createElement("section",null,r.createElement("h2",null,"Fuels"),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"limit"),r.createElement("select",{value:String(e.limit),onChange:(0,r.useCallback)((function(n){var e=n.target;return t((function(n){return h(h({},n),{},{limit:Number(e.value)})}))}),[])},v.map((function(n){return r.createElement("option",{key:n,value:String(n)},n)})))),r.createElement("button",{onClick:function(){return d(Object.values(a).flatMap((function(n){return n.reduce((function(n,e,t,r){return t<r.length-1&&void 0===(0,o.U)(l.parse(r[t+1].data),l.parse(e.data))?n.concat(e.id):n}),[])})))}},"select duplicates"),r.createElement("button",{disabled:0===f.length,onClick:function(){return f.reduce((function(n,e){return n.then((function(){return O(e)}))}),Promise.resolve())}},"delete selected (".concat(f.length,")"))),r.createElement("ol",null,Object.entries(a).map((function(n){var e=b(n,2),t=e[0],i=e[1];return r.createElement("li",{key:t},"[",t,"]",r.createElement("ul",null,i.map((function(n,e){return r.createElement("li",{key:n.id},r.createElement("label",null,r.createElement("input",{type:"checkbox",value:n.id,checked:f.includes(n.id),onChange:u}),"[",n.id,"]"),r.createElement("button",{onClick:function(){return O(n.id)}},"delete"),r.createElement(w,{item:n}),e<i.length-1&&r.createElement(o.o,{left:l.parse(i[e+1].data),right:l.parse(n.data)}))}))))}))))}},3903:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(1157),i=t.n(r),o=t(8614),a=t.n(o)()(i());a.push([n.id,'.jsondiffpatch-delta {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  display: inline-block;\n}\n.jsondiffpatch-delta pre {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\nul.jsondiffpatch-delta {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-delta ul {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-added .jsondiffpatch-property-name,\n.jsondiffpatch-added .jsondiffpatch-value pre,\n.jsondiffpatch-modified .jsondiffpatch-right-value pre,\n.jsondiffpatch-textdiff-added {\n  background: #bbffbb;\n}\n.jsondiffpatch-deleted .jsondiffpatch-property-name,\n.jsondiffpatch-deleted pre,\n.jsondiffpatch-modified .jsondiffpatch-left-value pre,\n.jsondiffpatch-textdiff-deleted {\n  background: #ffbbbb;\n  text-decoration: line-through;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination {\n  color: gray;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination > .jsondiffpatch-value {\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  overflow-y: hidden;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-showing\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  display: block;\n}\n.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-visible\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n  display: none;\n}\n.jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-property-name {\n  display: inline-block;\n  padding-right: 5px;\n  vertical-align: top;\n}\n.jsondiffpatch-property-name:after {\n  content: ": ";\n}\n.jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n  content: ": [";\n}\n.jsondiffpatch-child-node-type-array:after {\n  content: "],";\n}\ndiv.jsondiffpatch-child-node-type-array:before {\n  content: "[";\n}\ndiv.jsondiffpatch-child-node-type-array:after {\n  content: "]";\n}\n.jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n  content: ": {";\n}\n.jsondiffpatch-child-node-type-object:after {\n  content: "},";\n}\ndiv.jsondiffpatch-child-node-type-object:before {\n  content: "{";\n}\ndiv.jsondiffpatch-child-node-type-object:after {\n  content: "}";\n}\n.jsondiffpatch-value pre:after {\n  content: ",";\n}\nli:last-child > .jsondiffpatch-value pre:after,\n.jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n  content: "";\n}\n.jsondiffpatch-modified .jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-modified .jsondiffpatch-right-value {\n  margin-left: 5px;\n}\n.jsondiffpatch-moved .jsondiffpatch-value {\n  display: none;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination {\n  display: inline-block;\n  background: #ffffbb;\n  color: #888;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n  content: " => ";\n}\nul.jsondiffpatch-textdiff {\n  padding: 0;\n}\n.jsondiffpatch-textdiff-location {\n  color: #bbb;\n  display: inline-block;\n  min-width: 60px;\n}\n.jsondiffpatch-textdiff-line {\n  display: inline-block;\n}\n.jsondiffpatch-textdiff-line-number:after {\n  content: ",";\n}\n.jsondiffpatch-error {\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n',""]);const c=a}}]);