"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[256],{8273:(n,t,e)=>{e.d(t,{z:()=>z,H:()=>v});var r=e(2784),o=e(2406),i=e(6062),a=e.n(i),c=e(4036),l=e.n(c),f=e(6793),d=e.n(f),u=e(7892),s=e.n(u),p=e(1173),h=e.n(p),m=e(2464),b=e.n(m),j=e(7275),g={};g.styleTagTransform=b(),g.setAttributes=s(),g.insert=d().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=h(),a()(j.Z,g),j.Z&&j.Z.locals&&j.Z.locals;var y=(0,o.create)({}),v=function(n,t){return y.diff(n,t)};function z(n){var t=n.left,e=n.right,i=v(t,e);return i?r.createElement("div",{className:"jsondiffpatch-unchanged-hidden",dangerouslySetInnerHTML:{__html:o.formatters.html.format(i,t)}}):null}},2256:(n,t,e)=>{e.r(t),e.d(t,{default:()=>y});var r=e(2784),o=e(357),i=e(8273),a=e(5910);function c(n){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c(n)}var l=["data"];function f(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function d(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?f(Object(e),!0).forEach((function(t){u(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function u(n,t,e){return(t=function(n){var t=function(n,t){if("object"!==c(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===c(t)?t:String(t)}(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function s(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i,a,c=[],l=!0,f=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;l=!1}else for(;!(l=(r=i.call(e)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(n){f=!0,o=n}finally{try{if(!l&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw o}}return c}}(n,t)||p(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(n,t){if(n){if("string"==typeof n)return h(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?h(n,t):void 0}}function h(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var m,b=[100].concat((m=Array(5),function(n){if(Array.isArray(n))return h(n)}(m)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(m)||p(m)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(n,t){return 1e3*(t+1)}))),j=(0,o.k)((function(n){return fetch("".concat("","products?limit=").concat(n)).then((function(n){return n.json()})).then((function(n){return n.result}))})),g=function(n){return fetch("".concat("","products/delete?id=").concat(n))};function y(){var n=s((0,r.useState)((function(){return{limit:b[0]}})),2),t=n[0],e=n[1],o=j.read(t.limit),c=(0,r.useMemo)((function(){return o.reduce((function(n,t){return Object.assign(n,u({},t.item,(n[t.item]||[]).concat(t)))}),{})}),[o]),f=s((0,r.useState)((function(){return[]})),2),p=f[0],h=f[1],m=(0,r.useCallback)((function(n){var t,e=n.target;return t=Number(e.value),h((function(n){return e.checked?n.concat(t):n.filter((function(n){return n!==t}))}))}),[]);return console.log(d(d({},t),{},{result:o,selected:p})),r.createElement("section",null,r.createElement("h2",null,"Products"),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"limit"),r.createElement("select",{value:String(t.limit),onChange:(0,r.useCallback)((function(n){var t=n.target;return e((function(n){return d(d({},n),{},{limit:Number(t.value)})}))}),[])},b.map((function(n){return r.createElement("option",{key:n,value:String(n)},n)})))),r.createElement("button",{onClick:function(){return h(Object.values(c).flatMap((function(n){return n.reduce((function(n,t,e,r){return e<r.length-1&&void 0===(0,i.H)(a.Mx.parse(r[e+1].data),a.Mx.parse(t.data))?n.concat(t.id):n}),[])})))}},"select duplicates"),r.createElement("button",{onClick:function(){return h(o.filter((function(n){return!n.data.featureSummary})).map((function(n){return n.id})))}},"select incomplete"),r.createElement("button",{disabled:0===p.length,onClick:function(){return p.reduce((function(n,t){return n.then((function(){return g(t)}))}),Promise.resolve())}},"delete selected (".concat(p.length,")"))),r.createElement("ol",null,Object.entries(c).map((function(n){var t=s(n,2),e=t[0],o=t[1];return r.createElement("li",{key:e},"[",e,"]",r.createElement("ul",null,o.map((function(n,t){return r.createElement("li",{key:n.id},r.createElement("label",null,r.createElement("input",{type:"checkbox",value:n.id,checked:p.includes(n.id),onChange:m}),"[",n.id,"]"),r.createElement("button",{onClick:function(){return g(n.id)}},"delete"),r.createElement("pre",null,JSON.stringify(d({data:{name:(e=n).data.name}},function(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}(e,l)),null,2)),t<o.length-1&&r.createElement(i.z,{left:a.Mx.parse(o[t+1].data),right:a.Mx.parse(n.data)}));var e}))))}))))}},5910:(n,t,e)=>{e.d(t,{JO:()=>c,Mx:()=>l,V_:()=>d});var r=e(195),o=r.z.object({currentPage:r.z.number(),itemsPerPageActive:r.z.number(),itemsPerPage:r.z.number().array(),totalPages:r.z.number(),pageSize:r.z.number(),sort:r.z.object({rule:r.z.string(),sort:r.z.string()})}),i=r.z.object({url:r.z.string().optional(),thumbnailUrl:r.z.string().optional(),urlTemplate:r.z.string().optional()}),a=r.z.object({featureSummary:r.z.string().array().optional(),featureSummaryStructured:r.z.object({shortName:r.z.string(),description:r.z.string().nullable(),valueSeparator:r.z.string(),valueGroups:r.z.object({shortName:r.z.string(),description:r.z.string().nullable()}).array()}).array().optional(),availabilityStatus:r.z.enum(["Available","Unavailable"]).optional(),producerCode:r.z.string().optional(),freeInstallment:r.z.boolean().optional(),installmentMinimum:r.z.number().optional(),alternativeGroupId:r.z.string().optional(),alternativeProducts:r.z.unknown().array().optional(),mark:r.z.string().optional(),oldPrice:r.z.number().optional(),priceInfo:r.z.object({price:r.z.number(),oldPrice:r.z.number().nullable(),isPriceVisible:r.z.boolean()}),producer:r.z.object({id:r.z.string(),name:r.z.string()}),isEsd:r.z.boolean(),esdType:r.z.string(),productLink:r.z.string(),photo:i,rating:r.z.number().optional(),ratingCount:r.z.number().optional(),commentsCount:r.z.number().optional(),freeShipping:r.z.boolean().optional(),id:r.z.string(),name:r.z.string(),price:r.z.number(),promotionInfo:r.z.object({code:r.z.null(),discountedPrice:r.z.number(),promotionEndDate:r.z.string(),customerLimit:r.z.number(),promotionStartDate:r.z.string()}).optional(),category:r.z.object({id:r.z.string(),parentGroupId:r.z.string().optional()}),questionsAndAnswers:r.z.boolean(),isFetching:r.z.boolean()}),c=a,l=c.pick({availabilityStatus:!0,name:!0,oldPrice:!0,price:!0,priceInfo:!0}),f=r.z.object({app:r.z.object({listing:r.z.object({paginationState:o}),products:r.z.record(a.strict())})}),d=r.z.object({json:f})},7275:(n,t,e)=>{e.d(t,{Z:()=>c});var r=e(9601),o=e.n(r),i=e(2609),a=e.n(i)()(o());a.push([n.id,'.jsondiffpatch-delta {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  display: inline-block;\n}\n.jsondiffpatch-delta pre {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\nul.jsondiffpatch-delta {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-delta ul {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-added .jsondiffpatch-property-name,\n.jsondiffpatch-added .jsondiffpatch-value pre,\n.jsondiffpatch-modified .jsondiffpatch-right-value pre,\n.jsondiffpatch-textdiff-added {\n  background: #bbffbb;\n}\n.jsondiffpatch-deleted .jsondiffpatch-property-name,\n.jsondiffpatch-deleted pre,\n.jsondiffpatch-modified .jsondiffpatch-left-value pre,\n.jsondiffpatch-textdiff-deleted {\n  background: #ffbbbb;\n  text-decoration: line-through;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination {\n  color: gray;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination > .jsondiffpatch-value {\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  overflow-y: hidden;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-showing\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  display: block;\n}\n.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-visible\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n  display: none;\n}\n.jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-property-name {\n  display: inline-block;\n  padding-right: 5px;\n  vertical-align: top;\n}\n.jsondiffpatch-property-name:after {\n  content: ": ";\n}\n.jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n  content: ": [";\n}\n.jsondiffpatch-child-node-type-array:after {\n  content: "],";\n}\ndiv.jsondiffpatch-child-node-type-array:before {\n  content: "[";\n}\ndiv.jsondiffpatch-child-node-type-array:after {\n  content: "]";\n}\n.jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n  content: ": {";\n}\n.jsondiffpatch-child-node-type-object:after {\n  content: "},";\n}\ndiv.jsondiffpatch-child-node-type-object:before {\n  content: "{";\n}\ndiv.jsondiffpatch-child-node-type-object:after {\n  content: "}";\n}\n.jsondiffpatch-value pre:after {\n  content: ",";\n}\nli:last-child > .jsondiffpatch-value pre:after,\n.jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n  content: "";\n}\n.jsondiffpatch-modified .jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-modified .jsondiffpatch-right-value {\n  margin-left: 5px;\n}\n.jsondiffpatch-moved .jsondiffpatch-value {\n  display: none;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination {\n  display: inline-block;\n  background: #ffffbb;\n  color: #888;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n  content: " => ";\n}\nul.jsondiffpatch-textdiff {\n  padding: 0;\n}\n.jsondiffpatch-textdiff-location {\n  color: #bbb;\n  display: inline-block;\n  min-width: 60px;\n}\n.jsondiffpatch-textdiff-line {\n  display: inline-block;\n}\n.jsondiffpatch-textdiff-line-number:after {\n  content: ",";\n}\n.jsondiffpatch-error {\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n',""]);const c=a}}]);