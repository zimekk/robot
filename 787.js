"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[787],{7418:(n,t,e)=>{e.d(t,{o:()=>w,U:()=>z});var r=e(4344),i=e(5975),o=e(5388),a=e.n(o),c=e(1125),f=e.n(c),l=e(5687),d=e.n(l),s=e(8644),u=e.n(s),p=e(9552),h=e.n(p),m=e(3325),b=e.n(m),j=e(8425),y={};y.styleTagTransform=b(),y.setAttributes=u(),y.insert=d().bind(null,"head"),y.domAPI=f(),y.insertStyleElement=h(),a()(j.A,y),j.A&&j.A.locals&&j.A.locals;var g=e(6290),v=(0,i.vt)({}),z=function(n,t){return v.diff(n,t)};function w(n){var t=n.left,e=n.right,i=z(t,e),o=i&&g.format(i,t);return o?r.createElement("div",{className:"jsondiffpatch-unchanged-hidden",dangerouslySetInnerHTML:{__html:o}}):null}},3787:(n,t,e)=>{e.r(t),e.d(t,{default:()=>v});var r=e(4344),i=e(5364),o=e(7418);function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}var c="",f=(0,i.$)((function(){return fetch("".concat(c,"rossm/assets?limit=5")).then((function(n){return n.json()})).then((function(n){return n.result}))}));function l(n){var t,e,i=n.item,o=(t=(0,r.useState)(""),e=2,function(n){if(Array.isArray(n))return n}(t)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,i,o,a,c=[],f=!0,l=!1;try{if(o=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;f=!1}else for(;!(f=(r=o.call(e)).done)&&(c.push(r.value),c.length!==t);f=!0);}catch(n){l=!0,i=n}finally{try{if(!f&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw i}}return c}}(t,e)||function(n,t){if(n){if("string"==typeof n)return a(n,t);var e={}.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(n,t):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],f=o[1];return(0,r.useEffect)((function(){Promise.resolve(new Blob([new Uint8Array(i.blob.data)],{type:i.type})).then((function(n){return URL.createObjectURL(n)})).then(f)}),[i]),""===c?null:r.createElement("img",{src:c})}function d(){var n=f.read(),t=(0,r.useMemo)((function(){return n}),[n]);return console.log({result:n,list:t}),r.createElement("section",null,r.createElement("h3",null,"Assets"),r.createElement("ol",null,t.map((function(n){return r.createElement("li",{key:n.id},"[",r.createElement("a",{href:"".concat(c,"rossm/assets/").concat(n.id,"/").concat(n.item.split("/").pop())},n.item),"]",r.createElement(l,{item:n}),r.createElement("button",{onClick:(0,r.useCallback)((function(){return fetch("".concat(c,"rossm/asset/delete?id=").concat(n.id))}),[])},"delete"))}))))}var s=e(1549),u=["data"];function p(n){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},p(n)}function h(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function m(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,i,o,a,c=[],f=!0,l=!1;try{if(o=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;f=!1}else for(;!(f=(r=o.call(e)).done)&&(c.push(r.value),c.length!==t);f=!0);}catch(n){l=!0,i=n}finally{try{if(!f&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw i}}return c}}(n,t)||function(n,t){if(n){if("string"==typeof n)return b(n,t);var e={}.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?b(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}function j(n,t,e){return(t=function(n){var t=function(n){if("object"!=p(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,"string");if("object"!=p(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==p(t)?t:t+""}(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var y=(0,i.$)((function(){return fetch("".concat(c,"rossm?limit=1000")).then((function(n){return n.json()})).then((function(n){return n.result}))})),g=function(n){return fetch("".concat(c,"rossm/delete?id=").concat(n))};function v(){var n=y.read(),t=(0,r.useMemo)((function(){return n.reduce((function(n,t){return Object.assign(n,j({},t.item,(n[t.item]||[]).concat(t)))}),{})}),[n]),e=m((0,r.useState)((function(){return[]})),2),i=e[0],a=e[1],c=(0,r.useCallback)((function(n){var t,e=n.target;return t=Number(e.value),a((function(n){return e.checked?n.concat(t):n.filter((function(n){return n!==t}))}))}),[]);return console.log({result:n,grouped:t,selected:i}),r.createElement("section",null,r.createElement("h2",null,"Rossm"),r.createElement(d,null),r.createElement("div",null,r.createElement("button",{onClick:function(){return a(Object.values(t).flatMap((function(n){return n.reduce((function(n,t,e,r){return e<r.length-1&&void 0===(0,o.U)(s.VW.parse(r[e+1].data),s.VW.parse(t.data))?n.concat(t.id):n}),[])})))}},"select duplicates"),r.createElement("button",{disabled:0===i.length,onClick:function(){return i.reduce((function(n,t){return n.then((function(){return g(t)}))}),Promise.resolve())}},"delete selected (".concat(i.length,")"))),r.createElement("ol",null,Object.entries(t).map((function(n){var t=m(n,2),e=t[0],a=t[1];return r.createElement("li",{key:e},"[",e,"]",r.createElement("ul",null,a.map((function(n,t){return r.createElement("li",{key:n.id},r.createElement("label",null,r.createElement("input",{type:"checkbox",value:n.id,checked:i.includes(n.id),onChange:c}),"[",n.id,"]"),r.createElement("button",{onClick:function(){return g(n.id)}},"delete"),r.createElement("pre",null,JSON.stringify(function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?h(Object(e),!0).forEach((function(t){j(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}({data:{name:(f=(e=n).data).name,price:f.price}},function(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(t.includes(r))continue;e[r]=n[r]}return e}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.includes(e)||{}.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}(e,u)),null,2)),t<a.length-1&&r.createElement(o.o,{left:s.VW.parse(a[t+1].data),right:s.VW.parse(n.data)}));var e,f}))))}))))}},1549:(n,t,e)=>{e.d(t,{Sj:()=>a,VW:()=>o});var r=e(2218),i=r.z.object({attributes:r.z.unknown().array().optional(),badges:r.z.unknown().array().optional(),brand:r.z.string(),brandId:r.z.number(),caption:r.z.string(),unit:r.z.string(),averageRating:r.z.number(),totalReviews:r.z.number(),id:r.z.number(),rossnetId:r.z.number(),eanNumber:r.z.string().array(),navigateUrl:r.z.string(),price:r.z.number(),pricePerUnit:r.z.string(),vat:r.z.number(),dimensional:r.z.number(),pictures:r.z.object({id:r.z.number(),mini:r.z.string(),medium:r.z.string(),small:r.z.string(),large:r.z.string(),type:r.z.number(),alt:r.z.string(),side:r.z.string()}).array(),promotion:r.z.object({type:r.z.string(),redirectUrl:r.z.string()}).optional(),promotionFrom:r.z.string().optional(),promotionTo:r.z.string().optional(),hasRichContent:r.z.boolean(),availability:r.z.string(),category:r.z.string(),cmpDescription:r.z.string().optional(),cmpType:r.z.string().optional()}).passthrough(),o=i.strip().omit({navigateUrl:!0,pictures:!0}),a=r.z.object({json:r.z.object({data:r.z.object({items:i.array()})}).transform((function(n){return n.data.items}))})},8425:(n,t,e)=>{e.d(t,{A:()=>c});var r=e(3267),i=e.n(r),o=e(3484),a=e.n(o)()(i());a.push([n.id,'.jsondiffpatch-delta {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  display: inline-block;\n}\n.jsondiffpatch-delta pre {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\nul.jsondiffpatch-delta {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-delta ul {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-added .jsondiffpatch-property-name,\n.jsondiffpatch-added .jsondiffpatch-value pre,\n.jsondiffpatch-modified .jsondiffpatch-right-value pre,\n.jsondiffpatch-textdiff-added {\n  background: #bbffbb;\n}\n.jsondiffpatch-deleted .jsondiffpatch-property-name,\n.jsondiffpatch-deleted pre,\n.jsondiffpatch-modified .jsondiffpatch-left-value pre,\n.jsondiffpatch-textdiff-deleted {\n  background: #ffbbbb;\n  text-decoration: line-through;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination {\n  color: gray;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination > .jsondiffpatch-value {\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  overflow-y: hidden;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-showing\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  display: block;\n}\n.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-visible\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n  display: none;\n}\n.jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-property-name {\n  display: inline-block;\n  padding-right: 5px;\n  vertical-align: top;\n}\n.jsondiffpatch-property-name:after {\n  content: ": ";\n}\n.jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n  content: ": [";\n}\n.jsondiffpatch-child-node-type-array:after {\n  content: "],";\n}\ndiv.jsondiffpatch-child-node-type-array:before {\n  content: "[";\n}\ndiv.jsondiffpatch-child-node-type-array:after {\n  content: "]";\n}\n.jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n  content: ": {";\n}\n.jsondiffpatch-child-node-type-object:after {\n  content: "},";\n}\ndiv.jsondiffpatch-child-node-type-object:before {\n  content: "{";\n}\ndiv.jsondiffpatch-child-node-type-object:after {\n  content: "}";\n}\n.jsondiffpatch-value pre:after {\n  content: ",";\n}\nli:last-child > .jsondiffpatch-value pre:after,\n.jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n  content: "";\n}\n.jsondiffpatch-modified .jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-modified .jsondiffpatch-right-value {\n  margin-left: 5px;\n}\n.jsondiffpatch-moved .jsondiffpatch-value {\n  display: none;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination {\n  display: inline-block;\n  background: #ffffbb;\n  color: #888;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n  content: " => ";\n}\nul.jsondiffpatch-textdiff {\n  padding: 0;\n}\n.jsondiffpatch-textdiff-location {\n  color: #bbb;\n  display: inline-block;\n  min-width: 60px;\n}\n.jsondiffpatch-textdiff-line {\n  display: inline-block;\n}\n.jsondiffpatch-textdiff-line-number:after {\n  content: ",";\n}\n.jsondiffpatch-error {\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n',""]);const c=a}}]);