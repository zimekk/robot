"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[112],{4211:(n,e,t)=>{t.d(e,{o:()=>O,U:()=>v});var r=t(1855),o=t(5975),a=t(3957),i=t.n(a),l=t(1794),c=t.n(l),d=t(8866),s=t.n(d),u=t(621),f=t.n(u),p=t(3897),b=t.n(p),h=t(5462),m=t.n(h),g=t(3903),y={};y.styleTagTransform=m(),y.setAttributes=f(),y.insert=s().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=b(),i()(g.A,y),g.A&&g.A.locals&&g.A.locals;var j=t(6290),z=(0,o.vt)({}),v=function(n,e){return z.diff(n,e)};function O(n){var e=n.left,t=n.right,o=v(e,t),a=o&&j.format(o,e);return a?r.createElement("div",{className:"jsondiffpatch-unchanged-hidden",dangerouslySetInnerHTML:{__html:a}}):null}},8112:(n,e,t)=>{t.r(e),t.d(e,{default:()=>h});var r=t(1855),o=t(7113),a=t(4211),i=t(7697),l=["data"];function c(n){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c(n)}function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a,i,l=[],c=!0,d=!1;try{if(a=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=a.call(t)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(n){d=!0,o=n}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(d)throw o}}return l}}(n,e)||function(n,e){if(n){if("string"==typeof n)return u(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function f(n,e,t){var r;return r=function(n,e){if("object"!=c(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,"string");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(e),(e="symbol"==c(r)?r:r+"")in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var p=(0,o.$)((function(){return fetch("".concat("","euro?limit=1000")).then((function(n){return n.json()})).then((function(n){return n.result}))})),b=function(n){return fetch("".concat("","euro/delete?id=").concat(n))};function h(){var n=p.read(),e=(0,r.useMemo)((function(){return n.reduce((function(n,e){return Object.assign(n,f({},e.item,(n[e.item]||[]).concat(e)))}),{})}),[n]),t=s((0,r.useState)((function(){return[]})),2),o=t[0],c=t[1],u=(0,r.useCallback)((function(n){var e,t=n.target;return e=Number(t.value),c((function(n){return t.checked?n.concat(e):n.filter((function(n){return n!==e}))}))}),[]);return console.log({result:n,grouped:e,selected:o}),r.createElement("section",null,r.createElement("h2",null,"euro"),r.createElement("div",null,r.createElement("button",{onClick:function(){return c(Object.values(e).flatMap((function(n){return n.reduce((function(n,e,t,r){return t<r.length-1&&void 0===(0,a.U)(i.VW.parse(r[t+1].data),i.VW.parse(e.data))?n.concat(e.id):n}),[])})))}},"select duplicates"),r.createElement("button",{disabled:0===o.length,onClick:function(){return o.reduce((function(n,e){return n.then((function(){return b(e)}))}),Promise.resolve())}},"delete selected (".concat(o.length,")"))),r.createElement("ol",null,Object.entries(e).map((function(n){var e=s(n,2),t=e[0],c=e[1];return r.createElement("li",{key:t},"[",t,"]",r.createElement("ul",null,c.map((function(n,e){return r.createElement("li",{key:n.id},r.createElement("label",null,r.createElement("input",{type:"checkbox",value:n.id,checked:o.includes(n.id),onChange:u}),"[",n.id,"]"),r.createElement("button",{onClick:function(){return b(n.id)}},"delete"),r.createElement("pre",null,JSON.stringify(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){f(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({data:{name:(t=n).data.name}},function(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}(t,l)),null,2)),e<c.length-1&&r.createElement(a.o,{left:i.VW.parse(c[e+1].data),right:i.VW.parse(n.data)}));var t}))))}))))}},7697:(n,e,t)=>{t.d(e,{IO:()=>c,Sj:()=>s,VW:()=>d});var r=t(9862),o=r.z.object({code:r.z.string(),deliveryDate:r.z.string().nullable()}),a=r.z.object({code:r.z.string(),instalmentPrice:r.z.number(),numberOfInstalments:r.z.number(),loanInterest:r.z.number().nullable(),label:r.z.string().nullable(),hasPromotionDetails:r.z.boolean(),shortPromotionDescription:r.z.string().nullable(),rrso:r.z.number(),usingDiscountedPrice:r.z.boolean()}),i=r.z.object({name:r.z.string(),baseAttributes:r.z.array(r.z.object({name:r.z.string(),attributes:r.z.array(r.z.object({name:r.z.string(),value:r.z.array(r.z.object({name:r.z.string(),definitionId:r.z.number().nullable(),url:r.z.null()})),definitionId:r.z.number().nullable()}))})),prices:r.z.object({mainPrice:r.z.number(),promotionalPrice:r.z.object({price:r.z.number(),fromDatetime:r.z.string(),toDatetime:r.z.string()}).nullable(),voucherDiscountedPrice:r.z.number().nullable(),lowestPrice:r.z.object({price:r.z.number().nullable(),show:r.z.boolean()})}),images:r.z.object({url:r.z.string(),type:r.z.enum(["BIG_PHOTO","CARD_PHOTO","CMS_PHOTO","DETAILS_PHOTO","ICON_PHOTO","ORIGINAL_PHOTO","PHOTO","SUITE_PHOTO"])}).array(),productGroupName:r.z.string(),productType:r.z.string(),promotionStickers:r.z.unknown().array().optional(),deliveryAvailability:r.z.object({shopDeliveryAvailability:o.nullable(),homeDeliveryAvailability:o.nullable(),commonDeliveryAvailability:o.nullable(),reserveAndCollectAvailable:r.z.boolean()}),labels:r.z.array(r.z.object({name:r.z.string().nullable(),color:r.z.string().nullable(),backgroundColor:r.z.string().nullable()})),brand:r.z.string(),brandLogo:r.z.null(),variantBasicData:r.z.object({variantGroups:r.z.array(r.z.object({variantGroupName:r.z.string(),variants:r.z.array(r.z.object({variantValue:r.z.string(),currentProduct:r.z.boolean(),colorCodes:r.z.string().array().nullable()}))}))}),outletDetails:r.z.object({deliveryAvailability:r.z.object({shopDeliveryAvailability:o,homeDeliveryAvailability:o,commonDeliveryAvailability:r.z.null(),reserveAndCollectAvailable:r.z.boolean()}),outletCategories:r.z.array(r.z.object({categoryName:r.z.string(),categoryDescription:r.z.string(),categoryId:r.z.number(),price:r.z.number(),instalment:a.nullable()}))}).nullable(),opinionsSummary:r.z.object({averageGrade:r.z.number(),opinionsNumber:r.z.number()}),splitPayment:r.z.boolean(),productName:r.z.string(),energyLabel:r.z.object({energyClass:r.z.object({value:r.z.string(),type:r.z.string(),scale:r.z.string().nullable()}),oldEnergyClassLabel:r.z.string().nullable(),energyInformationCardUrl:r.z.string().nullable(),definitionId:r.z.number().nullable()}).nullable(),productAdvertisingPlacements:r.z.array(r.z.unknown()),voucherDetails:r.z.object({voucherName:r.z.string().nullable(),voucherCode:r.z.string(),automatic:r.z.boolean(),beginTime:r.z.string(),endTime:r.z.string(),usageLimit:r.z.object({remainingUsageLimit:r.z.number(),totalUsageLimit:r.z.number()}).nullable(),description:r.z.string()}).nullable(),deliveryPriceMessage:r.z.string().nullable(),freeDeliveryDate:r.z.string().optional(),instalment:a.nullable(),identifiers:r.z.object({plu:r.z.string(),productLinkName:r.z.string(),productGroupLinkName:r.z.string(),huCode:r.z.null()}),presentationBox:r.z.object({backgroundColor:r.z.string().nullable(),promotionBackgroundColor:r.z.string().nullable(),promotionTextColor:r.z.string().nullable(),infoTextColor:r.z.string().nullable(),voucherCodeTextColor:r.z.string().nullable(),dateTextColor:r.z.string().nullable(),gaugeBackgroundColor:r.z.string().nullable(),gaugeBorderColor:r.z.string().nullable(),discountedPriceColor:r.z.string().nullable(),priceColor:r.z.string().nullable(),boxBorderColor:r.z.string().nullable(),tabTextColor:r.z.string().nullable()}).nullable(),productLinks:r.z.array(r.z.unknown()),callCenterPhoneNumber:r.z.string(),paymentTypeDescriptions:r.z.array(r.z.unknown()),videos:r.z.array(r.z.unknown()),relatedPromotion:r.z.null(),holidayStatus:r.z.object({name:r.z.string(),descriptions:r.z.unknown().array()}).nullable().optional(),eanCodes:r.z.string().array().optional(),symkar:r.z.string().optional(),scores:r.z.unknown().optional(),stockDetails:r.z.unknown().optional()}),l=r.z.object({productsCount:r.z.number(),results:i.strict().array(),suggestion:r.z.null().optional()}),c=i,d=c.pick({brand:!0,prices:!0,productGroupName:!0,productName:!0}),s=r.z.object({json:l})},3903:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(1157),o=t.n(r),a=t(8614),i=t.n(a)()(o());i.push([n.id,'.jsondiffpatch-delta {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  display: inline-block;\n}\n.jsondiffpatch-delta pre {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\nul.jsondiffpatch-delta {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-delta ul {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-added .jsondiffpatch-property-name,\n.jsondiffpatch-added .jsondiffpatch-value pre,\n.jsondiffpatch-modified .jsondiffpatch-right-value pre,\n.jsondiffpatch-textdiff-added {\n  background: #bbffbb;\n}\n.jsondiffpatch-deleted .jsondiffpatch-property-name,\n.jsondiffpatch-deleted pre,\n.jsondiffpatch-modified .jsondiffpatch-left-value pre,\n.jsondiffpatch-textdiff-deleted {\n  background: #ffbbbb;\n  text-decoration: line-through;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination {\n  color: gray;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination > .jsondiffpatch-value {\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  overflow-y: hidden;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-showing\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  display: block;\n}\n.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-visible\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n  display: none;\n}\n.jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-property-name {\n  display: inline-block;\n  padding-right: 5px;\n  vertical-align: top;\n}\n.jsondiffpatch-property-name:after {\n  content: ": ";\n}\n.jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n  content: ": [";\n}\n.jsondiffpatch-child-node-type-array:after {\n  content: "],";\n}\ndiv.jsondiffpatch-child-node-type-array:before {\n  content: "[";\n}\ndiv.jsondiffpatch-child-node-type-array:after {\n  content: "]";\n}\n.jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n  content: ": {";\n}\n.jsondiffpatch-child-node-type-object:after {\n  content: "},";\n}\ndiv.jsondiffpatch-child-node-type-object:before {\n  content: "{";\n}\ndiv.jsondiffpatch-child-node-type-object:after {\n  content: "}";\n}\n.jsondiffpatch-value pre:after {\n  content: ",";\n}\nli:last-child > .jsondiffpatch-value pre:after,\n.jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n  content: "";\n}\n.jsondiffpatch-modified .jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-modified .jsondiffpatch-right-value {\n  margin-left: 5px;\n}\n.jsondiffpatch-moved .jsondiffpatch-value {\n  display: none;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination {\n  display: inline-block;\n  background: #ffffbb;\n  color: #888;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n  content: " => ";\n}\nul.jsondiffpatch-textdiff {\n  padding: 0;\n}\n.jsondiffpatch-textdiff-location {\n  color: #bbb;\n  display: inline-block;\n  min-width: 60px;\n}\n.jsondiffpatch-textdiff-line {\n  display: inline-block;\n}\n.jsondiffpatch-textdiff-line-number:after {\n  content: ",";\n}\n.jsondiffpatch-error {\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n',""]);const l=i}}]);