"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[87],{432:(n,e,t)=>{t.d(e,{o:()=>_,U:()=>z});var o=t(2155),a=t(5975),r=t(4500),i=t.n(r),l=t(4845),c=t.n(l),d=t(8751),f=t.n(d),u=t(1788),s=t.n(u),p=t(9464),h=t.n(p),b=t(4133),m=t.n(b),j=t(1706),y={};y.styleTagTransform=m(),y.setAttributes=s(),y.insert=f().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=h(),i()(j.A,y),j.A&&j.A.locals&&j.A.locals;var g=t(6290),v=(0,a.vt)({}),z=function(n,e){return v.diff(n,e)};function _(n){var e=n.left,t=n.right,a=z(e,t),r=a&&g.format(a,e);return r?o.createElement("div",{className:"jsondiffpatch-unchanged-hidden",dangerouslySetInnerHTML:{__html:r}}):null}},9087:(n,e,t)=>{t.r(e),t.d(e,{default:()=>v});var o=t(2155),a=t(525),r=t(432),i=t(401);function l(n){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},l(n)}var c=["data"];function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){u(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e,t){return(e=function(n){var e=function(n,e){if("object"!=l(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,"string");if("object"!=l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==l(e)?e:e+""}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var o,a,r,i,l=[],c=!0,d=!1;try{if(r=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;c=!1}else for(;!(c=(o=r.call(t)).done)&&(l.push(o.value),l.length!==e);c=!0);}catch(n){d=!0,a=n}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(d)throw a}}return l}}(n,e)||p(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(n,e){if(n){if("string"==typeof n)return h(n,e);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(n,e):void 0}}function h(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=Array(e);t<e;t++)o[t]=n[t];return o}var b,m=[100].concat((b=Array(5),function(n){if(Array.isArray(n))return h(n)}(b)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(b)||p(b)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(n,e){return 1e3*(e+1)}))),j=(0,a.$)((function(n){return fetch("".concat("","expert?limit=").concat(n)).then((function(n){return n.json()})).then((function(n){return n.result}))})),y=function(n){return fetch("".concat("","expert/delete?id=").concat(n))};function g(n){var e,t,a,r=n.item,i=s((0,o.useState)((function(){return!1})),2),l=i[0],d=i[1];return o.createElement("pre",{onClick:(0,o.useCallback)((function(){return d(!0)}),[])},JSON.stringify(l?r:(t=(e=r).data,a=function(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t={};for(var o in n)if({}.hasOwnProperty.call(n,o)){if(e.includes(o))continue;t[o]=n[o]}return t}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.includes(t)||{}.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}(e,c),f({data:t},a)),null,2))}function v(){var n=s((0,o.useState)((function(){return{limit:m[1]}})),2),e=n[0],t=n[1],a=j.read(e.limit),l=(0,o.useMemo)((function(){return a.reduce((function(n,e){return Object.assign(n,u({},e.item,(n[e.item]||[]).concat(e)))}),{})}),[a]),c=s((0,o.useState)((function(){return[]})),2),d=c[0],p=c[1],h=(0,o.useCallback)((function(n){var e,t=n.target;return e=Number(t.value),p((function(n){return t.checked?n.concat(e):n.filter((function(n){return n!==e}))}))}),[]);return console.log(f(f({},e),{},{result:a})),o.createElement("section",null,o.createElement("h2",null,"Expert"),o.createElement("div",null,o.createElement("label",null,o.createElement("span",null,"limit"),o.createElement("select",{value:String(e.limit),onChange:(0,o.useCallback)((function(n){var e=n.target;return t((function(n){return f(f({},n),{},{limit:Number(e.value)})}))}),[])},m.map((function(n){return o.createElement("option",{key:n,value:String(n)},n)})))),o.createElement("button",{onClick:function(){return p(Object.values(l).flatMap((function(n){return n.reduce((function(n,e,t,o){return t<o.length-1&&void 0===(0,r.U)(i.VW.parse(o[t+1].data),i.VW.parse(e.data))?n.concat(e.id):n}),[])})))}},"select duplicates"),o.createElement("button",{disabled:0===d.length,onClick:function(){return d.reduce((function(n,e){return n.then((function(){return y(e)}))}),Promise.resolve())}},"delete selected (".concat(d.length,")"))),o.createElement("ol",null,Object.entries(l).map((function(n){var e=s(n,2),t=e[0],a=e[1];return o.createElement("li",{key:t},"[",t,"]",o.createElement("ul",null,a.map((function(n,e){return o.createElement("li",{key:n.id},o.createElement("label",null,o.createElement("input",{type:"checkbox",value:n.id,checked:d.includes(n.id),onChange:h}),"[",n.id,"]"),o.createElement("button",{onClick:function(){return y(n.id)}},"delete"),o.createElement(g,{item:n}),e<a.length-1&&o.createElement(r.o,{left:i.VW.parse(a[e+1].data),right:i.VW.parse(n.data)}))}))))}))))}},401:(n,e,t)=>{t.d(e,{IO:()=>a,Sj:()=>l,VW:()=>r});var o=t(4180),a=o.z.object({id:o.z.number(),link:o.z.string(),name:o.z.string(),product_id:o.z.number(),product_parent_id:o.z.number(),add_to_cart:o.z.boolean(),price_gross:o.z.number(),price_net:o.z.number(),discount:o.z.object({date_time_start:o.z.null(),date_time_end:o.z.null(),old_price:o.z.object({amount:o.z.null(),currency:o.z.string()}),value:o.z.object({amount:o.z.null(),currency:o.z.string()})}),gallery:o.z.string().array()}).passthrough(),r=a.extend({}),i=o.z.object({data:o.z.object({byId:o.z.object({id:o.z.number(),name:o.z.string(),product_id:o.z.number(),product_parent_id:o.z.number(),add_to_cart:o.z.boolean(),price_gross:o.z.number(),price_net:o.z.number(),discount:o.z.object({date_time_start:o.z.null(),date_time_end:o.z.null(),old_price:o.z.object({amount:o.z.null(),currency:o.z.string()}),value:o.z.object({amount:o.z.null(),currency:o.z.string()})}),_embedded:o.z.object({promoPrice:o.z.any(),hotDeals:o.z.object({elements:o.z.array(o.z.unknown())})}),promo_price_gross:o.z.null(),promo_price_net:o.z.null(),club_price:o.z.null(),link:o.z.string(),gallery:o.z.array(o.z.string()),availability:o.z.object({id:o.z.number(),name:o.z.string(),display_name:o.z.string(),description:o.z.string().nullable(),description_details:o.z.string().nullable(),color_hash:o.z.null(),icon:o.z.null(),weight:o.z.number(),is_default:o.z.boolean(),type:o.z.string()}),type:o.z.string(),service_type:o.z.null(),internal_code:o.z.null(),stock_shop:o.z.number(),stock_shipment:o.z.number(),flags:o.z.object({preorder_product:o.z.boolean().optional(),preorder_installments:o.z.boolean().optional(),additional_new:o.z.boolean().optional(),product_new:o.z.boolean().optional(),Iphone_15:o.z.boolean().optional(),exclusive_product:o.z.boolean().optional(),receive_in_hour:o.z.boolean().optional(),has_leasing_link:o.z.boolean().optional(),product_promoted:o.z.boolean(),inpost_parcel_available:o.z.boolean().optional(),variant_opinions:o.z.boolean(),has_pko_leasing:o.z.boolean().optional(),apple_promotion_available:o.z.boolean(),present_packaging_small_size_for_smartphones:o.z.boolean()}).passthrough(),should_be_disabled:o.z.boolean(),is_product_set:o.z.boolean(),inpost:o.z.object({available:o.z.boolean()}),available_in_store:o.z.boolean(),is_szs_available:o.z.boolean(),other_prices:o.z.array(o.z.unknown()),published_date:o.z.null(),add_to_cart_link:o.z.null(),energy_class:o.z.array(o.z.unknown()),active_variant_count:o.z.number()}).array()})}),l=o.z.object({json:i})},1706:(n,e,t)=>{t.d(e,{A:()=>l});var o=t(3703),a=t.n(o),r=t(5416),i=t.n(r)()(a());i.push([n.id,'.jsondiffpatch-delta {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  display: inline-block;\n}\n.jsondiffpatch-delta pre {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\nul.jsondiffpatch-delta {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-delta ul {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-added .jsondiffpatch-property-name,\n.jsondiffpatch-added .jsondiffpatch-value pre,\n.jsondiffpatch-modified .jsondiffpatch-right-value pre,\n.jsondiffpatch-textdiff-added {\n  background: #bbffbb;\n}\n.jsondiffpatch-deleted .jsondiffpatch-property-name,\n.jsondiffpatch-deleted pre,\n.jsondiffpatch-modified .jsondiffpatch-left-value pre,\n.jsondiffpatch-textdiff-deleted {\n  background: #ffbbbb;\n  text-decoration: line-through;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination {\n  color: gray;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination > .jsondiffpatch-value {\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  overflow-y: hidden;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-showing\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  display: block;\n}\n.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-visible\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n  display: none;\n}\n.jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-property-name {\n  display: inline-block;\n  padding-right: 5px;\n  vertical-align: top;\n}\n.jsondiffpatch-property-name:after {\n  content: ": ";\n}\n.jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n  content: ": [";\n}\n.jsondiffpatch-child-node-type-array:after {\n  content: "],";\n}\ndiv.jsondiffpatch-child-node-type-array:before {\n  content: "[";\n}\ndiv.jsondiffpatch-child-node-type-array:after {\n  content: "]";\n}\n.jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n  content: ": {";\n}\n.jsondiffpatch-child-node-type-object:after {\n  content: "},";\n}\ndiv.jsondiffpatch-child-node-type-object:before {\n  content: "{";\n}\ndiv.jsondiffpatch-child-node-type-object:after {\n  content: "}";\n}\n.jsondiffpatch-value pre:after {\n  content: ",";\n}\nli:last-child > .jsondiffpatch-value pre:after,\n.jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n  content: "";\n}\n.jsondiffpatch-modified .jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-modified .jsondiffpatch-right-value {\n  margin-left: 5px;\n}\n.jsondiffpatch-moved .jsondiffpatch-value {\n  display: none;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination {\n  display: inline-block;\n  background: #ffffbb;\n  color: #888;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n  content: " => ";\n}\nul.jsondiffpatch-textdiff {\n  padding: 0;\n}\n.jsondiffpatch-textdiff-location {\n  color: #bbb;\n  display: inline-block;\n  min-width: 60px;\n}\n.jsondiffpatch-textdiff-line {\n  display: inline-block;\n}\n.jsondiffpatch-textdiff-line-number:after {\n  content: ",";\n}\n.jsondiffpatch-error {\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n',""]);const l=i}}]);