"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[283],{4211:(n,e,t)=>{t.d(e,{o:()=>k,U:()=>O});var r=t(1855),o=t(5975),i=t(3957),a=t.n(i),c=t(1794),f=t.n(c),l=t(8866),d=t.n(l),u=t(621),s=t.n(u),p=t(3897),h=t.n(p),m=t(5462),b=t.n(m),j=t(3903),y={};y.styleTagTransform=b(),y.setAttributes=s(),y.insert=d().bind(null,"head"),y.domAPI=f(),y.insertStyleElement=h(),a()(j.A,y),j.A&&j.A.locals&&j.A.locals;var g=t(6290),v=(0,o.vt)({}),O=function(n,e){return v.diff(n,e)};function k(n){var e=n.left,t=n.right,o=O(e,t),i=o&&g.format(o,e);return i?r.createElement("div",{className:"jsondiffpatch-unchanged-hidden",dangerouslySetInnerHTML:{__html:i}}):null}},7283:(n,e,t)=>{t.r(e),t.d(e,{default:()=>x});var r=t(1855),o=t(7113),i=t(4211),a=t(2862),c=t(4180),f=["pb","pb+","on","on+","lpg","lpg+"],l=c.z.object({url:c.z.string(),station_id:c.z.number(),x:c.z.number(),y:c.z.number(),network_id:c.z.number(),network_name:c.z.string(),map_img:c.z.string()}).extend({address:c.z.string(),map_img:c.z.string().optional(),petrol_list:c.z.object({type:c.z.enum(f),price:c.z.coerce.number()}).array()}).extend({}),d=c.z.object({address:c.z.string().default(""),petrol_list:c.z.object({type:c.z.enum(f),price:c.z.coerce.number()}).array()}),u=c.z.object({html:c.z.string()}).transform((function(n){var e,t,r=n.html;return e=(0,a.parse)(r),d.parse({address:null===(t=e.querySelector("div.right-side > a:first-child"))||void 0===t?void 0:t.text,petrol_list:e.querySelectorAll("ul.petrol-list > li").map((function(n){return{type:n.childNodes[0].text,price:n.childNodes[1].text}}))})}));function s(n){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},s(n)}c.z.object({json:d.or(u)});var p=["data"];function h(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?h(Object(t),!0).forEach((function(e){b(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function b(n,e,t){var r;return r=function(n,e){if("object"!=s(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(e),(e="symbol"==s(r)?r:r+"")in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function j(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i,a,c=[],f=!0,l=!1;try{if(i=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;f=!1}else for(;!(f=(r=i.call(t)).done)&&(c.push(r.value),c.length!==e);f=!0);}catch(n){l=!0,o=n}finally{try{if(!f&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(n,e)||y(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(n,e){if(n){if("string"==typeof n)return g(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(n,e):void 0}}function g(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var v,O=[100].concat((v=Array(5),function(n){if(Array.isArray(n))return g(n)}(v)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(v)||y(v)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(n,e){return 1e3*(e+1)}))),k=(0,o.$)((function(n){return fetch("".concat("","fuels?limit=").concat(n)).then((function(n){return n.json()})).then((function(n){return n.result}))})),w=function(n){return fetch("".concat("","fuels/delete?id=").concat(n))};function S(n){var e,t=n.item,o=j((0,r.useState)((function(){return!1})),2),i=o[0],a=o[1];return r.createElement("pre",{onClick:(0,r.useCallback)((function(){return a(!0)}),[])},JSON.stringify(i?t:m({data:(e=t).data},function(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}(e,p)),null,2))}function x(){var n=j((0,r.useState)((function(){return{limit:O[1]}})),2),e=n[0],t=n[1],o=k.read(e.limit),a=(0,r.useMemo)((function(){return o.reduce((function(n,e){return Object.assign(n,b({},e.item,(n[e.item]||[]).concat(e)))}),{})}),[o]),c=j((0,r.useState)((function(){return[]})),2),f=c[0],d=c[1],u=(0,r.useCallback)((function(n){var e,t=n.target;return e=Number(t.value),d((function(n){return t.checked?n.concat(e):n.filter((function(n){return n!==e}))}))}),[]);return console.log(m(m({},e),{},{result:o})),r.createElement("section",null,r.createElement("h2",null,"Fuels"),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"limit"),r.createElement("select",{value:String(e.limit),onChange:(0,r.useCallback)((function(n){var e=n.target;return t((function(n){return m(m({},n),{},{limit:Number(e.value)})}))}),[])},O.map((function(n){return r.createElement("option",{key:n,value:String(n)},n)})))),r.createElement("button",{onClick:function(){return d(Object.values(a).flatMap((function(n){return n.reduce((function(n,e,t,r){return t<r.length-1&&void 0===(0,i.U)(l.parse(r[t+1].data),l.parse(e.data))?n.concat(e.id):n}),[])})))}},"select duplicates"),r.createElement("button",{disabled:0===f.length,onClick:function(){return f.reduce((function(n,e){return n.then((function(){return w(e)}))}),Promise.resolve())}},"delete selected (".concat(f.length,")"))),r.createElement("ol",null,Object.entries(a).map((function(n){var e=j(n,2),t=e[0],o=e[1];return r.createElement("li",{key:t},"[",t,"]",r.createElement("ul",null,o.map((function(n,e){return r.createElement("li",{key:n.id},r.createElement("label",null,r.createElement("input",{type:"checkbox",value:n.id,checked:f.includes(n.id),onChange:u}),"[",n.id,"]"),r.createElement("button",{onClick:function(){return w(n.id)}},"delete"),r.createElement(S,{item:n}),e<o.length-1&&r.createElement(i.o,{left:l.parse(o[e+1].data),right:l.parse(n.data)}))}))))}))))}},3903:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(1157),o=t.n(r),i=t(8614),a=t.n(i)()(o());a.push([n.id,'.jsondiffpatch-delta {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  display: inline-block;\n}\n.jsondiffpatch-delta pre {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\nul.jsondiffpatch-delta {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-delta ul {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-added .jsondiffpatch-property-name,\n.jsondiffpatch-added .jsondiffpatch-value pre,\n.jsondiffpatch-modified .jsondiffpatch-right-value pre,\n.jsondiffpatch-textdiff-added {\n  background: #bbffbb;\n}\n.jsondiffpatch-deleted .jsondiffpatch-property-name,\n.jsondiffpatch-deleted pre,\n.jsondiffpatch-modified .jsondiffpatch-left-value pre,\n.jsondiffpatch-textdiff-deleted {\n  background: #ffbbbb;\n  text-decoration: line-through;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination {\n  color: gray;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination > .jsondiffpatch-value {\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  overflow-y: hidden;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-showing\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  display: block;\n}\n.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-visible\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n  display: none;\n}\n.jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-property-name {\n  display: inline-block;\n  padding-right: 5px;\n  vertical-align: top;\n}\n.jsondiffpatch-property-name:after {\n  content: ": ";\n}\n.jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n  content: ": [";\n}\n.jsondiffpatch-child-node-type-array:after {\n  content: "],";\n}\ndiv.jsondiffpatch-child-node-type-array:before {\n  content: "[";\n}\ndiv.jsondiffpatch-child-node-type-array:after {\n  content: "]";\n}\n.jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n  content: ": {";\n}\n.jsondiffpatch-child-node-type-object:after {\n  content: "},";\n}\ndiv.jsondiffpatch-child-node-type-object:before {\n  content: "{";\n}\ndiv.jsondiffpatch-child-node-type-object:after {\n  content: "}";\n}\n.jsondiffpatch-value pre:after {\n  content: ",";\n}\nli:last-child > .jsondiffpatch-value pre:after,\n.jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n  content: "";\n}\n.jsondiffpatch-modified .jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-modified .jsondiffpatch-right-value {\n  margin-left: 5px;\n}\n.jsondiffpatch-moved .jsondiffpatch-value {\n  display: none;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination {\n  display: inline-block;\n  background: #ffffbb;\n  color: #888;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n  content: " => ";\n}\nul.jsondiffpatch-textdiff {\n  padding: 0;\n}\n.jsondiffpatch-textdiff-location {\n  color: #bbb;\n  display: inline-block;\n  min-width: 60px;\n}\n.jsondiffpatch-textdiff-line {\n  display: inline-block;\n}\n.jsondiffpatch-textdiff-line-number:after {\n  content: ",";\n}\n.jsondiffpatch-error {\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n',""]);const c=a}}]);