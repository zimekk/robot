"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[223],{532:(n,t,e)=>{e.d(t,{o:()=>S,U:()=>z});var o=e(1855),r=e(5975),i=e(3957),a=e.n(i),c=e(1794),l=e.n(c),f=e(8866),d=e.n(f),u=e(621),s=e.n(u),p=e(3897),h=e.n(p),m=e(5462),b=e.n(m),j=e(2582),g={};g.styleTagTransform=b(),g.setAttributes=s(),g.insert=d().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=h(),a()(j.A,g),j.A&&j.A.locals&&j.A.locals;var y=e(6290),v=(0,r.vt)({}),z=function(n,t){return v.diff(n,t)};function S(n){var t=n.left,e=n.right,r=z(t,e),i=r&&y.format(r,t);return i?o.createElement("div",{className:"jsondiffpatch-unchanged-hidden",dangerouslySetInnerHTML:{__html:i}}):null}},6223:(n,t,e)=>{e.r(t),e.d(t,{default:()=>y});var o=e(1855),r=e(7113),i=e(532),a=e(4113);function c(n){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c(n)}var l=["data"];function f(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function d(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?f(Object(e),!0).forEach((function(t){u(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function u(n,t,e){var o;return o=function(n,t){if("object"!=c(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var o=e.call(n,"string");if("object"!=c(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(t),(t="symbol"==c(o)?o:o+"")in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function s(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var o,r,i,a,c=[],l=!0,f=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;l=!1}else for(;!(l=(o=i.call(e)).done)&&(c.push(o.value),c.length!==t);l=!0);}catch(n){f=!0,r=n}finally{try{if(!l&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw r}}return c}}(n,t)||p(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(n,t){if(n){if("string"==typeof n)return h(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?h(n,t):void 0}}function h(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}var m,b=[100].concat((m=Array(5),function(n){if(Array.isArray(n))return h(n)}(m)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(m)||p(m)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(n,t){return 1e3*(t+1)}))),j=(0,r.$)((function(n){return fetch("".concat("","products?limit=").concat(n)).then((function(n){return n.json()})).then((function(n){return n.result}))})),g=function(n){return fetch("".concat("","products/delete?id=").concat(n))};function y(){var n=s((0,o.useState)((function(){return{limit:b[0]}})),2),t=n[0],e=n[1],r=j.read(t.limit),c=(0,o.useMemo)((function(){return r.reduce((function(n,t){return Object.assign(n,u({},t.item,(n[t.item]||[]).concat(t)))}),{})}),[r]),f=s((0,o.useState)((function(){return[]})),2),p=f[0],h=f[1],m=(0,o.useCallback)((function(n){var t,e=n.target;return t=Number(e.value),h((function(n){return e.checked?n.concat(t):n.filter((function(n){return n!==t}))}))}),[]);return console.log(d(d({},t),{},{result:r,selected:p})),o.createElement("section",null,o.createElement("h2",null,"Products"),o.createElement("div",null,o.createElement("label",null,o.createElement("span",null,"limit"),o.createElement("select",{value:String(t.limit),onChange:(0,o.useCallback)((function(n){var t=n.target;return e((function(n){return d(d({},n),{},{limit:Number(t.value)})}))}),[])},b.map((function(n){return o.createElement("option",{key:n,value:String(n)},n)})))),o.createElement("button",{onClick:function(){return h(Object.values(c).flatMap((function(n){return n.reduce((function(n,t,e,o){return e<o.length-1&&void 0===(0,i.U)(a.VW.parse(o[e+1].data),a.VW.parse(t.data))?n.concat(t.id):n}),[])})))}},"select duplicates"),o.createElement("button",{onClick:function(){return h(r.filter((function(n){return!n.data.featureSummary})).map((function(n){return n.id})))}},"select incomplete"),o.createElement("button",{disabled:0===p.length,onClick:function(){return p.reduce((function(n,t){return n.then((function(){return g(t)}))}),Promise.resolve())}},"delete selected (".concat(p.length,")"))),o.createElement("ol",null,Object.entries(c).map((function(n){var t=s(n,2),e=t[0],r=t[1];return o.createElement("li",{key:e},"[",e,"]",o.createElement("ul",null,r.map((function(n,t){return o.createElement("li",{key:n.id},o.createElement("label",null,o.createElement("input",{type:"checkbox",value:n.id,checked:p.includes(n.id),onChange:m}),"[",n.id,"]"),o.createElement("button",{onClick:function(){return g(n.id)}},"delete"),o.createElement("pre",null,JSON.stringify(d({data:{name:(e=n).data.name}},function(n,t){if(null==n)return{};var e,o,r=function(n,t){if(null==n)return{};var e,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}(e,l)),null,2)),t<r.length-1&&o.createElement(i.o,{left:a.VW.parse(r[t+1].data),right:a.VW.parse(n.data)}));var e}))))}))))}},4113:(n,t,e)=>{e.d(t,{IO:()=>c,Sj:()=>d,VW:()=>l});var o=e(9103),r=o.z.object({currentPage:o.z.number(),itemsPerPageActive:o.z.number(),itemsPerPage:o.z.number().array(),totalPages:o.z.number(),pageSize:o.z.number(),sort:o.z.object({rule:o.z.string(),sort:o.z.string()})}),i=o.z.object({url:o.z.string().optional(),thumbnailUrl:o.z.string().optional(),urlTemplate:o.z.string().optional()}),a=o.z.object({featureSummary:o.z.string().array().optional(),featureSummaryStructured:o.z.object({shortName:o.z.string(),description:o.z.string().nullable(),valueSeparator:o.z.string(),valueGroups:o.z.object({shortName:o.z.string(),description:o.z.string().nullable()}).array()}).array().optional(),availabilityStatus:o.z.enum(["Available","Unavailable"]).optional(),producerCode:o.z.string().optional(),freeInstallment:o.z.boolean().optional(),installmentMinimum:o.z.number().optional(),alternativeGroupId:o.z.string().optional(),alternativeProducts:o.z.unknown().array().optional(),mark:o.z.string().optional(),oldPrice:o.z.number().optional(),priceInfo:o.z.object({price:o.z.number(),oldPrice:o.z.number().nullable(),isPriceVisible:o.z.boolean()}),producer:o.z.object({id:o.z.string(),name:o.z.string()}),isEsd:o.z.boolean(),esdType:o.z.string(),isGiftCard:o.z.boolean().optional(),productLink:o.z.string(),photo:i,rating:o.z.number().optional(),ratingCount:o.z.number().optional(),commentsCount:o.z.number().optional(),freeShipping:o.z.boolean().optional(),id:o.z.string(),name:o.z.string(),price:o.z.number(),promotionInfo:o.z.object({code:o.z.null(),discountedPrice:o.z.number(),promotionEndDate:o.z.string(),customerLimit:o.z.number(),promotionStartDate:o.z.string()}).optional(),category:o.z.object({id:o.z.string(),parentGroupId:o.z.string().optional()}),questionsAndAnswers:o.z.boolean().optional(),promotionGainValue:o.z.unknown().nullable().optional(),isFetching:o.z.boolean()}),c=a,l=c.pick({availabilityStatus:!0,name:!0,oldPrice:!0,price:!0,priceInfo:!0,promotionInfo:!0}),f=o.z.object({app:o.z.object({listing:o.z.object({paginationState:r}),products:o.z.record(a.strict())})}),d=o.z.object({json:f})},2582:(n,t,e)=>{e.d(t,{A:()=>c});var o=e(5732),r=e.n(o),i=e(2109),a=e.n(i)()(r());a.push([n.id,'.jsondiffpatch-delta {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  display: inline-block;\n}\n.jsondiffpatch-delta pre {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\nul.jsondiffpatch-delta {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-delta ul {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-added .jsondiffpatch-property-name,\n.jsondiffpatch-added .jsondiffpatch-value pre,\n.jsondiffpatch-modified .jsondiffpatch-right-value pre,\n.jsondiffpatch-textdiff-added {\n  background: #bbffbb;\n}\n.jsondiffpatch-deleted .jsondiffpatch-property-name,\n.jsondiffpatch-deleted pre,\n.jsondiffpatch-modified .jsondiffpatch-left-value pre,\n.jsondiffpatch-textdiff-deleted {\n  background: #ffbbbb;\n  text-decoration: line-through;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination {\n  color: gray;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination > .jsondiffpatch-value {\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  overflow-y: hidden;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-showing\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  display: block;\n}\n.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-visible\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n  display: none;\n}\n.jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-property-name {\n  display: inline-block;\n  padding-right: 5px;\n  vertical-align: top;\n}\n.jsondiffpatch-property-name:after {\n  content: ": ";\n}\n.jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n  content: ": [";\n}\n.jsondiffpatch-child-node-type-array:after {\n  content: "],";\n}\ndiv.jsondiffpatch-child-node-type-array:before {\n  content: "[";\n}\ndiv.jsondiffpatch-child-node-type-array:after {\n  content: "]";\n}\n.jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n  content: ": {";\n}\n.jsondiffpatch-child-node-type-object:after {\n  content: "},";\n}\ndiv.jsondiffpatch-child-node-type-object:before {\n  content: "{";\n}\ndiv.jsondiffpatch-child-node-type-object:after {\n  content: "}";\n}\n.jsondiffpatch-value pre:after {\n  content: ",";\n}\nli:last-child > .jsondiffpatch-value pre:after,\n.jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n  content: "";\n}\n.jsondiffpatch-modified .jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-modified .jsondiffpatch-right-value {\n  margin-left: 5px;\n}\n.jsondiffpatch-moved .jsondiffpatch-value {\n  display: none;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination {\n  display: inline-block;\n  background: #ffffbb;\n  color: #888;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n  content: " => ";\n}\nul.jsondiffpatch-textdiff {\n  padding: 0;\n}\n.jsondiffpatch-textdiff-location {\n  color: #bbb;\n  display: inline-block;\n  min-width: 60px;\n}\n.jsondiffpatch-textdiff-line {\n  display: inline-block;\n}\n.jsondiffpatch-textdiff-line-number:after {\n  content: ",";\n}\n.jsondiffpatch-error {\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n',""]);const c=a}}]);