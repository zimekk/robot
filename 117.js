"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[117],{1117:(n,e,t)=>{t.r(e),t.d(e,{default:()=>v});var r=t(4344),i=t(5364),o=t(4486),a=t(3016);function c(n){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c(n)}var f=["data"];function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){u(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e,t){return(e=function(n){var e=function(n){if("object"!=c(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,"string");if("object"!=c(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==c(e)?e:e+""}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o,a,c=[],f=!0,l=!1;try{if(o=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;f=!1}else for(;!(f=(r=o.call(t)).done)&&(c.push(r.value),c.length!==e);f=!0);}catch(n){l=!0,i=n}finally{try{if(!f&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(l)throw i}}return c}}(n,e)||p(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(n,e){if(n){if("string"==typeof n)return h(n,e);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(n,e):void 0}}function h(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}var m,b=[100].concat((m=Array(5),function(n){if(Array.isArray(n))return h(n)}(m)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(m)||p(m)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(n,e){return 1e3*(e+1)}))),y=(0,i.$)((function(n){return fetch("".concat("","gratka?limit=").concat(n)).then((function(n){return n.json()})).then((function(n){return n.result}))})),j=function(n){return fetch("".concat("","gratka/delete?id=").concat(n))};function g(n){var e,t,i,o=n.item,a=s((0,r.useState)((function(){return!1})),2),c=a[0],l=a[1];return r.createElement("pre",{onClick:(0,r.useCallback)((function(){return l(!0)}),[])},JSON.stringify(c?o:(t=(e=o).data,i=function(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(-1!==e.indexOf(r))continue;t[r]=n[r]}return t}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],-1===e.indexOf(t)&&{}.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}(e,f),d({data:t},i)),null,2))}function v(){var n=s((0,r.useState)((function(){return{limit:b[1]}})),2),e=n[0],t=n[1],i=y.read(e.limit),c=(0,r.useMemo)((function(){return i.reduce((function(n,e){return Object.assign(n,u({},e.item,(n[e.item]||[]).concat(e)))}),{})}),[i]),f=s((0,r.useState)((function(){return[]})),2),l=f[0],p=f[1],h=(0,r.useCallback)((function(n){var e,t=n.target;return e=Number(t.value),p((function(n){return t.checked?n.concat(e):n.filter((function(n){return n!==e}))}))}),[]);return console.log(d(d({},e),{},{result:i})),r.createElement("section",null,r.createElement("h2",null,"Gratka"),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"limit"),r.createElement("select",{value:String(e.limit),onChange:(0,r.useCallback)((function(n){var e=n.target;return t((function(n){return d(d({},n),{},{limit:Number(e.value)})}))}),[])},b.map((function(n){return r.createElement("option",{key:n,value:String(n)},n)})))),r.createElement("button",{onClick:function(){return p(Object.values(c).flatMap((function(n){return n.reduce((function(n,e,t,r){return t<r.length-1&&void 0===(0,o.U)(a.VW.parse(r[t+1].data),a.VW.parse(e.data))?n.concat(e.id):n}),[])})))}},"select duplicates"),r.createElement("button",{disabled:0===l.length,onClick:function(){return l.reduce((function(n,e){return n.then((function(){return j(e)}))}),Promise.resolve())}},"delete selected (".concat(l.length,")"))),r.createElement("ol",null,Object.entries(c).map((function(n){var e=s(n,2),t=e[0],i=e[1];return r.createElement("li",{key:t},"[",t,"]",r.createElement("ul",null,i.map((function(n,e){return r.createElement("li",{key:n.id},r.createElement("label",null,r.createElement("input",{type:"checkbox",value:n.id,checked:l.includes(n.id),onChange:h}),"[",n.id,"]"),r.createElement("button",{onClick:function(){return j(n.id)}},"delete"),r.createElement(g,{item:n}),e<i.length-1&&r.createElement(o.o,{left:a.VW.parse(i[e+1].data),right:a.VW.parse(n.data)}))}))))}))))}},1387:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(5921),i=t.n(r),o=t(330),a=t.n(o)()(i());a.push([n.id,'.jsondiffpatch-delta {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  display: inline-block;\n}\n.jsondiffpatch-delta pre {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\nul.jsondiffpatch-delta {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-delta ul {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-added .jsondiffpatch-property-name,\n.jsondiffpatch-added .jsondiffpatch-value pre,\n.jsondiffpatch-modified .jsondiffpatch-right-value pre,\n.jsondiffpatch-textdiff-added {\n  background: #bbffbb;\n}\n.jsondiffpatch-deleted .jsondiffpatch-property-name,\n.jsondiffpatch-deleted pre,\n.jsondiffpatch-modified .jsondiffpatch-left-value pre,\n.jsondiffpatch-textdiff-deleted {\n  background: #ffbbbb;\n  text-decoration: line-through;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination {\n  color: gray;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination > .jsondiffpatch-value {\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  overflow-y: hidden;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-showing\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  display: block;\n}\n.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-visible\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n  display: none;\n}\n.jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-property-name {\n  display: inline-block;\n  padding-right: 5px;\n  vertical-align: top;\n}\n.jsondiffpatch-property-name:after {\n  content: ": ";\n}\n.jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n  content: ": [";\n}\n.jsondiffpatch-child-node-type-array:after {\n  content: "],";\n}\ndiv.jsondiffpatch-child-node-type-array:before {\n  content: "[";\n}\ndiv.jsondiffpatch-child-node-type-array:after {\n  content: "]";\n}\n.jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n  content: ": {";\n}\n.jsondiffpatch-child-node-type-object:after {\n  content: "},";\n}\ndiv.jsondiffpatch-child-node-type-object:before {\n  content: "{";\n}\ndiv.jsondiffpatch-child-node-type-object:after {\n  content: "}";\n}\n.jsondiffpatch-value pre:after {\n  content: ",";\n}\nli:last-child > .jsondiffpatch-value pre:after,\n.jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n  content: "";\n}\n.jsondiffpatch-modified .jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-modified .jsondiffpatch-right-value {\n  margin-left: 5px;\n}\n.jsondiffpatch-moved .jsondiffpatch-value {\n  display: none;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination {\n  display: inline-block;\n  background: #ffffbb;\n  color: #888;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n  content: " => ";\n}\nul.jsondiffpatch-textdiff {\n  padding: 0;\n}\n.jsondiffpatch-textdiff-location {\n  color: #bbb;\n  display: inline-block;\n  min-width: 60px;\n}\n.jsondiffpatch-textdiff-line {\n  display: inline-block;\n}\n.jsondiffpatch-textdiff-line-number:after {\n  content: ",";\n}\n.jsondiffpatch-error {\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n',""]);const c=a},3016:(n,e,t)=>{t.d(e,{Sj:()=>s,VW:()=>d});var r=t(8703);function i(n){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(n)}var o=["itemOffered","name"];function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n,e,t){return(e=function(n){var e=function(n){if("object"!=i(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,"string");if("object"!=i(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==i(e)?e:e+""}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var f=r.z.object({"@type":r.z.literal("Offer"),itemOffered:r.z.object({"@type":r.z.literal("Place"),description:r.z.string(),name:r.z.string().optional(),image:r.z.string().optional(),address:r.z.object({"@type":r.z.literal("PostalAddress"),addressCountry:r.z.string(),addressLocality:r.z.string(),addressRegion:r.z.string()}),geo:r.z.object({"@type":r.z.literal("GeoCoordinates"),latitude:r.z.number(),longitude:r.z.number()}).optional()}),url:r.z.string(),name:r.z.string().optional(),availability:r.z.string(),priceCurrency:r.z.string(),price:r.z.coerce.number()}),l=r.z.object({"@context":r.z.string(),"@type":r.z.literal("Product"),url:r.z.string(),additionalType:r.z.literal("RealEstateListing"),name:r.z.string(),offers:r.z.object({"@type":r.z.literal("AggregateOffer"),priceCurrency:r.z.literal("PLN"),offerCount:r.z.number(),lowPrice:r.z.coerce.number(),highPrice:r.z.coerce.number(),businessFunction:r.z.string(),offers:f.transform((function(n){var e=n.itemOffered,t=n.name;return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){c(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({itemOffered:e,name:void 0===t?e.name:t},function(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(-1!==e.indexOf(r))continue;t[r]=n[r]}return t}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],-1===e.indexOf(t)&&{}.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}(n,o))})).array()})}),d=f.extend({id:r.z.string()}).extend({}),u=l,s=r.z.object({json:u})},4486:(n,e,t)=>{t.d(e,{o:()=>w,U:()=>O});var r=t(4344),i=t(5975),o=t(6230),a=t.n(o),c=t(9519),f=t.n(c),l=t(7397),d=t.n(l),u=t(9494),s=t.n(u),p=t(7250),h=t.n(p),m=t(1159),b=t.n(m),y=t(1387),j={};j.styleTagTransform=b(),j.setAttributes=s(),j.insert=d().bind(null,"head"),j.domAPI=f(),j.insertStyleElement=h(),a()(y.A,j),y.A&&y.A.locals&&y.A.locals;var g=t(6290),v=(0,i.vt)({}),O=function(n,e){return v.diff(n,e)};function w(n){var e=n.left,t=n.right,i=O(e,t),o=i&&g.format(i,e);return o?r.createElement("div",{className:"jsondiffpatch-unchanged-hidden",dangerouslySetInnerHTML:{__html:o}}):null}}}]);