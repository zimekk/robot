"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[867],{299:(n,e,t)=>{t.d(e,{o:()=>S,U:()=>z});var r=t(2155),a=t(5975),i=t(1337),o=t.n(i),c=t(334),f=t.n(c),l=t(2166),d=t.n(l),s=t(2185),u=t.n(s),p=t(4517),h=t.n(p),m=t(6658),b=t.n(m),j=t(6464),g={};g.styleTagTransform=b(),g.setAttributes=u(),g.insert=d().bind(null,"head"),g.domAPI=f(),g.insertStyleElement=h(),o()(j.A,g),j.A&&j.A.locals&&j.A.locals;var y=t(6290),v=(0,a.vt)({}),z=function(n,e){return v.diff(n,e)};function S(n){var e=n.left,t=n.right,a=z(e,t),i=a&&y.format(a,e);return i?r.createElement("div",{className:"jsondiffpatch-unchanged-hidden",dangerouslySetInnerHTML:{__html:i}}):null}},867:(n,e,t)=>{t.r(e),t.d(e,{default:()=>v});var r=t(2155),a=t(525),i=t(299),o=t(8532);function c(n){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c(n)}var f=["data"];function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e,t){return(e=function(n){var e=function(n){if("object"!=c(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,"string");if("object"!=c(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==c(e)?e:e+""}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,a,i,o,c=[],f=!0,l=!1;try{if(i=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;f=!1}else for(;!(f=(r=i.call(t)).done)&&(c.push(r.value),c.length!==e);f=!0);}catch(n){l=!0,a=n}finally{try{if(!f&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw a}}return c}}(n,e)||p(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(n,e){if(n){if("string"==typeof n)return h(n,e);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(n,e):void 0}}function h(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}var m,b=[100].concat((m=Array(5),function(n){if(Array.isArray(n))return h(n)}(m)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(m)||p(m)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(n,e){return 1e3*(e+1)}))),j=(0,a.$)((function(n){return fetch("".concat("","props?limit=").concat(n)).then((function(n){return n.json()})).then((function(n){return n.result}))})),g=function(n){return fetch("".concat("","props/delete?id=").concat(n))};function y(n){var e,t,a,i=n.item,o=u((0,r.useState)((function(){return!1})),2),c=o[0],l=o[1];return r.createElement("pre",{onClick:(0,r.useCallback)((function(){return l(!0)}),[])},JSON.stringify(c?i:(t=(e=i).data,a=function(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.includes(r))continue;t[r]=n[r]}return t}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.includes(t)||{}.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}(e,f),d({data:t},a)),null,2))}function v(){var n=u((0,r.useState)((function(){return{limit:b[1]}})),2),e=n[0],t=n[1],a=j.read(e.limit),c=(0,r.useMemo)((function(){return a.reduce((function(n,e){return Object.assign(n,s({},e.item,(n[e.item]||[]).concat(e)))}),{})}),[a]),f=u((0,r.useState)((function(){return[]})),2),l=f[0],p=f[1],h=(0,r.useCallback)((function(n){var e,t=n.target;return e=Number(t.value),p((function(n){return t.checked?n.concat(e):n.filter((function(n){return n!==e}))}))}),[]);return console.log(d(d({},e),{},{result:a})),r.createElement("section",null,r.createElement("h2",null,"Props"),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"limit"),r.createElement("select",{value:String(e.limit),onChange:(0,r.useCallback)((function(n){var e=n.target;return t((function(n){return d(d({},n),{},{limit:Number(e.value)})}))}),[])},b.map((function(n){return r.createElement("option",{key:n,value:String(n)},n)})))),r.createElement("button",{onClick:function(){return p(Object.values(c).flatMap((function(n){return n.reduce((function(n,e,t,r){return t<r.length-1&&void 0===(0,i.U)(o.VW.parse(r[t+1].data),o.VW.parse(e.data))?n.concat(e.id):n}),[])})))}},"select duplicates"),r.createElement("button",{disabled:0===l.length,onClick:function(){return l.reduce((function(n,e){return n.then((function(){return g(e)}))}),Promise.resolve())}},"delete selected (".concat(l.length,")"))),r.createElement("ol",null,Object.entries(c).map((function(n){var e=u(n,2),t=e[0],a=e[1];return r.createElement("li",{key:t},"[",t,"]",r.createElement("ul",null,a.map((function(n,e){return r.createElement("li",{key:n.id},r.createElement("label",null,r.createElement("input",{type:"checkbox",value:n.id,checked:l.includes(n.id),onChange:h}),"[",n.id,"]"),r.createElement("button",{onClick:function(){return g(n.id)}},"delete"),r.createElement(y,{item:n}),e<a.length-1&&r.createElement(i.o,{left:o.VW.parse(a[e+1].data),right:o.VW.parse(n.data)}))}))))}))))}},8532:(n,e,t)=>{t.d(e,{Sj:()=>f,VW:()=>c});var r=t(4180),a=r.z.object({value:r.z.number(),currency:r.z.enum(["EUR","PLN","USD"]),__typename:r.z.literal("Money")}),i=r.z.object({id:r.z.number(),slug:r.z.string(),title:r.z.string(),agency:r.z.object({id:r.z.number(),name:r.z.string(),slug:r.z.string(),type:r.z.string(),imageUrl:r.z.string().nullable(),__typename:r.z.string(),highlightedAds:r.z.boolean(),brandingVisible:r.z.boolean()}).nullable(),estate:r.z.string(),images:r.z.object({large:r.z.string(),medium:r.z.string(),__typename:r.z.string()}).array(),location:r.z.object({address:r.z.object({city:r.z.object({name:r.z.string(),__typename:r.z.string()}),street:r.z.object({name:r.z.string(),number:r.z.string(),__typename:r.z.literal("Street")}).nullable(),province:r.z.object({name:r.z.string(),__typename:r.z.string()}),__typename:r.z.string()}),__typename:r.z.string(),mapDetails:r.z.object({radius:r.z.number(),__typename:r.z.string()}),reverseGeocoding:r.z.object({locations:r.z.object({fullName:r.z.string(),__typename:r.z.string()}).array(),__typename:r.z.string()}).nullable().optional()}),totalPrice:a.nullable(),locationLabel:r.z.object({value:r.z.string(),locale:r.z.string(),__typename:r.z.string()}).optional(),pricePerSquareMeter:a.nullable()}),o=r.z.object({props:r.z.object({pageProps:r.z.object({featureFlags:r.z.any().transform((function(){return null})),translations:r.z.any().transform((function(){return null})),tracking:r.z.any().transform((function(){return null})),ad:r.z.object({id:r.z.number(),slug:r.z.string()}).passthrough().optional(),data:r.z.object({searchAds:r.z.object({items:i.passthrough().array()})})})}).passthrough()}).passthrough(),c=i.extend({location:i.shape.location.omit({reverseGeocoding:!0})}),f=r.z.object({json:o})},6464:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(8986),a=t.n(r),i=t(3603),o=t.n(i)()(a());o.push([n.id,'.jsondiffpatch-delta {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  display: inline-block;\n}\n.jsondiffpatch-delta pre {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\nul.jsondiffpatch-delta {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-delta ul {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-added .jsondiffpatch-property-name,\n.jsondiffpatch-added .jsondiffpatch-value pre,\n.jsondiffpatch-modified .jsondiffpatch-right-value pre,\n.jsondiffpatch-textdiff-added {\n  background: #bbffbb;\n}\n.jsondiffpatch-deleted .jsondiffpatch-property-name,\n.jsondiffpatch-deleted pre,\n.jsondiffpatch-modified .jsondiffpatch-left-value pre,\n.jsondiffpatch-textdiff-deleted {\n  background: #ffbbbb;\n  text-decoration: line-through;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination {\n  color: gray;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination > .jsondiffpatch-value {\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  overflow-y: hidden;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-showing\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  display: block;\n}\n.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-visible\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n  display: none;\n}\n.jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-property-name {\n  display: inline-block;\n  padding-right: 5px;\n  vertical-align: top;\n}\n.jsondiffpatch-property-name:after {\n  content: ": ";\n}\n.jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n  content: ": [";\n}\n.jsondiffpatch-child-node-type-array:after {\n  content: "],";\n}\ndiv.jsondiffpatch-child-node-type-array:before {\n  content: "[";\n}\ndiv.jsondiffpatch-child-node-type-array:after {\n  content: "]";\n}\n.jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n  content: ": {";\n}\n.jsondiffpatch-child-node-type-object:after {\n  content: "},";\n}\ndiv.jsondiffpatch-child-node-type-object:before {\n  content: "{";\n}\ndiv.jsondiffpatch-child-node-type-object:after {\n  content: "}";\n}\n.jsondiffpatch-value pre:after {\n  content: ",";\n}\nli:last-child > .jsondiffpatch-value pre:after,\n.jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n  content: "";\n}\n.jsondiffpatch-modified .jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-modified .jsondiffpatch-right-value {\n  margin-left: 5px;\n}\n.jsondiffpatch-moved .jsondiffpatch-value {\n  display: none;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination {\n  display: inline-block;\n  background: #ffffbb;\n  color: #888;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n  content: " => ";\n}\nul.jsondiffpatch-textdiff {\n  padding: 0;\n}\n.jsondiffpatch-textdiff-location {\n  color: #bbb;\n  display: inline-block;\n  min-width: 60px;\n}\n.jsondiffpatch-textdiff-line {\n  display: inline-block;\n}\n.jsondiffpatch-textdiff-line-number:after {\n  content: ",";\n}\n.jsondiffpatch-error {\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n',""]);const c=o}}]);