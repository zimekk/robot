"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[64],{4211:(n,t,e)=>{e.d(t,{o:()=>O,U:()=>z});var r=e(1855),o=e(5975),i=e(3957),a=e.n(i),c=e(1794),f=e.n(c),l=e(8866),d=e.n(l),s=e(621),u=e.n(s),p=e(3897),h=e.n(p),m=e(5462),b=e.n(m),j=e(3903),y={};y.styleTagTransform=b(),y.setAttributes=u(),y.insert=d().bind(null,"head"),y.domAPI=f(),y.insertStyleElement=h(),a()(j.A,y),j.A&&j.A.locals&&j.A.locals;var g=e(6290),v=(0,o.vt)({}),z=function(n,t){return v.diff(n,t)};function O(n){var t=n.left,e=n.right,o=z(t,e),i=o&&g.format(o,t);return i?r.createElement("div",{className:"jsondiffpatch-unchanged-hidden",dangerouslySetInnerHTML:{__html:i}}):null}},6064:(n,t,e)=>{e.r(t),e.d(t,{default:()=>v});var r=e(1855),o=e(7113),i=e(4211);function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var c="",f=(0,o.$)((function(){return fetch("".concat(c,"rossm/assets?limit=5")).then((function(n){return n.json()})).then((function(n){return n.result}))}));function l(n){var t,e,o=n.item,i=(t=(0,r.useState)(""),e=2,function(n){if(Array.isArray(n))return n}(t)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i,a,c=[],f=!0,l=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;f=!1}else for(;!(f=(r=i.call(e)).done)&&(c.push(r.value),c.length!==t);f=!0);}catch(n){l=!0,o=n}finally{try{if(!f&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(n,t){if(n){if("string"==typeof n)return a(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(n,t):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[0],f=i[1];return(0,r.useEffect)((function(){Promise.resolve(new Blob([new Uint8Array(o.blob.data)],{type:o.type})).then((function(n){return URL.createObjectURL(n)})).then(f)}),[o]),""===c?null:r.createElement("img",{src:c})}function d(){var n=f.read(),t=(0,r.useMemo)((function(){return n}),[n]);return console.log({result:n,list:t}),r.createElement("section",null,r.createElement("h3",null,"Assets"),r.createElement("ol",null,t.map((function(n){return r.createElement("li",{key:n.id},"[",r.createElement("a",{href:"".concat(c,"rossm/assets/").concat(n.id,"/").concat(n.item.split("/").pop())},n.item),"]",r.createElement(l,{item:n}),r.createElement("button",{onClick:(0,r.useCallback)((function(){return fetch("".concat(c,"rossm/asset/delete?id=").concat(n.id))}),[])},"delete"))}))))}var s=e(7444),u=["data"];function p(n){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},p(n)}function h(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function m(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i,a,c=[],f=!0,l=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;f=!1}else for(;!(f=(r=i.call(e)).done)&&(c.push(r.value),c.length!==t);f=!0);}catch(n){l=!0,o=n}finally{try{if(!f&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(n,t)||function(n,t){if(n){if("string"==typeof n)return b(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?b(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function j(n,t,e){var r;return r=function(n,t){if("object"!=p(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(t),(t="symbol"==p(r)?r:r+"")in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var y=(0,o.$)((function(){return fetch("".concat(c,"rossm?limit=1000")).then((function(n){return n.json()})).then((function(n){return n.result}))})),g=function(n){return fetch("".concat(c,"rossm/delete?id=").concat(n))};function v(){var n=y.read(),t=(0,r.useMemo)((function(){return n.reduce((function(n,t){return Object.assign(n,j({},t.item,(n[t.item]||[]).concat(t)))}),{})}),[n]),e=m((0,r.useState)((function(){return[]})),2),o=e[0],a=e[1],c=(0,r.useCallback)((function(n){var t,e=n.target;return t=Number(e.value),a((function(n){return e.checked?n.concat(t):n.filter((function(n){return n!==t}))}))}),[]);return console.log({result:n,grouped:t,selected:o}),r.createElement("section",null,r.createElement("h2",null,"Rossm"),r.createElement(d,null),r.createElement("div",null,r.createElement("button",{onClick:function(){return a(Object.values(t).flatMap((function(n){return n.reduce((function(n,t,e,r){return e<r.length-1&&void 0===(0,i.U)(s.VW.parse(r[e+1].data),s.VW.parse(t.data))?n.concat(t.id):n}),[])})))}},"select duplicates"),r.createElement("button",{disabled:0===o.length,onClick:function(){return o.reduce((function(n,t){return n.then((function(){return g(t)}))}),Promise.resolve())}},"delete selected (".concat(o.length,")"))),r.createElement("ol",null,Object.entries(t).map((function(n){var t=m(n,2),e=t[0],a=t[1];return r.createElement("li",{key:e},"[",e,"]",r.createElement("ul",null,a.map((function(n,t){return r.createElement("li",{key:n.id},r.createElement("label",null,r.createElement("input",{type:"checkbox",value:n.id,checked:o.includes(n.id),onChange:c}),"[",n.id,"]"),r.createElement("button",{onClick:function(){return g(n.id)}},"delete"),r.createElement("pre",null,JSON.stringify(function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?h(Object(e),!0).forEach((function(t){j(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}({data:{name:(f=(e=n).data).name,price:f.price}},function(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(t.indexOf(r)>=0)continue;e[r]=n[r]}return e}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}(e,u)),null,2)),t<a.length-1&&r.createElement(i.o,{left:s.VW.parse(a[t+1].data),right:s.VW.parse(n.data)}));var e,f}))))}))))}},7444:(n,t,e)=>{e.d(t,{Sj:()=>a,VW:()=>i});var r=e(4433),o=r.z.object({attributes:r.z.unknown().array().optional(),badges:r.z.unknown().array().optional(),brand:r.z.string(),brandId:r.z.number(),caption:r.z.string(),unit:r.z.string(),averageRating:r.z.number(),totalReviews:r.z.number(),id:r.z.number(),rossnetId:r.z.number(),eanNumber:r.z.string().array(),navigateUrl:r.z.string(),price:r.z.number(),pricePerUnit:r.z.string(),vat:r.z.number(),dimensional:r.z.number(),pictures:r.z.object({id:r.z.number(),mini:r.z.string(),medium:r.z.string(),small:r.z.string(),large:r.z.string(),type:r.z.number(),alt:r.z.string(),side:r.z.string()}).array(),promotion:r.z.object({type:r.z.string(),redirectUrl:r.z.string()}).optional(),promotionFrom:r.z.string().optional(),promotionTo:r.z.string().optional(),hasRichContent:r.z.boolean(),availability:r.z.string(),category:r.z.string(),cmpDescription:r.z.string().optional(),cmpType:r.z.string().optional()}).passthrough(),i=o.strip().omit({navigateUrl:!0,pictures:!0}),a=r.z.object({json:r.z.object({data:r.z.object({items:o.array()})}).transform((function(n){return n.data.items}))})},3903:(n,t,e)=>{e.d(t,{A:()=>c});var r=e(1157),o=e.n(r),i=e(8614),a=e.n(i)()(o());a.push([n.id,'.jsondiffpatch-delta {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  display: inline-block;\n}\n.jsondiffpatch-delta pre {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\nul.jsondiffpatch-delta {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-delta ul {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-added .jsondiffpatch-property-name,\n.jsondiffpatch-added .jsondiffpatch-value pre,\n.jsondiffpatch-modified .jsondiffpatch-right-value pre,\n.jsondiffpatch-textdiff-added {\n  background: #bbffbb;\n}\n.jsondiffpatch-deleted .jsondiffpatch-property-name,\n.jsondiffpatch-deleted pre,\n.jsondiffpatch-modified .jsondiffpatch-left-value pre,\n.jsondiffpatch-textdiff-deleted {\n  background: #ffbbbb;\n  text-decoration: line-through;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination {\n  color: gray;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination > .jsondiffpatch-value {\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  overflow-y: hidden;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-showing\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  display: block;\n}\n.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-visible\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n  display: none;\n}\n.jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-property-name {\n  display: inline-block;\n  padding-right: 5px;\n  vertical-align: top;\n}\n.jsondiffpatch-property-name:after {\n  content: ": ";\n}\n.jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n  content: ": [";\n}\n.jsondiffpatch-child-node-type-array:after {\n  content: "],";\n}\ndiv.jsondiffpatch-child-node-type-array:before {\n  content: "[";\n}\ndiv.jsondiffpatch-child-node-type-array:after {\n  content: "]";\n}\n.jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n  content: ": {";\n}\n.jsondiffpatch-child-node-type-object:after {\n  content: "},";\n}\ndiv.jsondiffpatch-child-node-type-object:before {\n  content: "{";\n}\ndiv.jsondiffpatch-child-node-type-object:after {\n  content: "}";\n}\n.jsondiffpatch-value pre:after {\n  content: ",";\n}\nli:last-child > .jsondiffpatch-value pre:after,\n.jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n  content: "";\n}\n.jsondiffpatch-modified .jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-modified .jsondiffpatch-right-value {\n  margin-left: 5px;\n}\n.jsondiffpatch-moved .jsondiffpatch-value {\n  display: none;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination {\n  display: inline-block;\n  background: #ffffbb;\n  color: #888;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n  content: " => ";\n}\nul.jsondiffpatch-textdiff {\n  padding: 0;\n}\n.jsondiffpatch-textdiff-location {\n  color: #bbb;\n  display: inline-block;\n  min-width: 60px;\n}\n.jsondiffpatch-textdiff-line {\n  display: inline-block;\n}\n.jsondiffpatch-textdiff-line-number:after {\n  content: ",";\n}\n.jsondiffpatch-error {\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n',""]);const c=a}}]);