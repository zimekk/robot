"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[152],{8273:(n,e,t)=>{t.d(e,{z:()=>v,H:()=>z});var r=t(2784),o=t(2406),i=t(6062),a=t.n(i),l=t(4036),c=t.n(l),s=t(6793),d=t.n(s),f=t(7892),u=t.n(f),p=t(1173),b=t.n(p),h=t(2464),m=t.n(h),g=t(7275),j={};j.styleTagTransform=m(),j.setAttributes=u(),j.insert=d().bind(null,"head"),j.domAPI=c(),j.insertStyleElement=b(),a()(g.Z,j),g.Z&&g.Z.locals&&g.Z.locals;var y=(0,o.create)({}),z=function(n,e){return y.diff(n,e)};function v(n){var e=n.left,t=n.right,i=z(e,t);return i?r.createElement("div",{className:"jsondiffpatch-unchanged-hidden",dangerouslySetInnerHTML:{__html:o.formatters.html.format(i,e)}}):null}},6152:(n,e,t)=>{t.r(e),t.d(e,{default:()=>h});var r=t(2784),o=t(357),i=t(8273),a=t(2059),l=["data"];function c(n){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c(n)}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function d(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i,a,l=[],c=!0,s=!1;try{if(i=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(n){s=!0,o=n}finally{try{if(!c&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(n,e)||function(n,e){if(n){if("string"==typeof n)return f(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function u(n,e,t){return(e=function(n){var e=function(n,e){if("object"!==c(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===c(e)?e:String(e)}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var p=(0,o.k)((function(){return fetch("".concat("","euro?limit=1000")).then((function(n){return n.json()})).then((function(n){return n.result}))})),b=function(n){return fetch("".concat("","euro/delete?id=").concat(n))};function h(){var n=p.read(),e=(0,r.useMemo)((function(){return n.reduce((function(n,e){return Object.assign(n,u({},e.item,(n[e.item]||[]).concat(e)))}),{})}),[n]),t=d((0,r.useState)((function(){return[]})),2),o=t[0],c=t[1],f=(0,r.useCallback)((function(n){var e,t=n.target;return e=Number(t.value),c((function(n){return t.checked?n.concat(e):n.filter((function(n){return n!==e}))}))}),[]);return console.log({result:n,grouped:e,selected:o}),r.createElement("section",null,r.createElement("h2",null,"euro"),r.createElement("div",null,r.createElement("button",{onClick:function(){return c(Object.values(e).flatMap((function(n){return n.reduce((function(n,e,t,r){return t<r.length-1&&void 0===(0,i.H)(a.Mx.parse(r[t+1].data),a.Mx.parse(e.data))?n.concat(e.id):n}),[])})))}},"select duplicates"),r.createElement("button",{disabled:0===o.length,onClick:function(){return o.reduce((function(n,e){return n.then((function(){return b(e)}))}),Promise.resolve())}},"delete selected (".concat(o.length,")"))),r.createElement("ol",null,Object.entries(e).map((function(n){var e=d(n,2),t=e[0],c=e[1];return r.createElement("li",{key:t},"[",t,"]",r.createElement("ul",null,c.map((function(n,e){return r.createElement("li",{key:n.id},r.createElement("label",null,r.createElement("input",{type:"checkbox",value:n.id,checked:o.includes(n.id),onChange:f}),"[",n.id,"]"),r.createElement("button",{onClick:function(){return b(n.id)}},"delete"),r.createElement("pre",null,JSON.stringify(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){u(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({data:{name:(t=n).data.name}},function(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}(t,l)),null,2)),e<c.length-1&&r.createElement(i.z,{left:a.Mx.parse(c[e+1].data),right:a.Mx.parse(n.data)}));var t}))))}))))}},2059:(n,e,t)=>{t.d(e,{Mx:()=>l,V_:()=>c});var r=t(195),o=r.z.object({code:r.z.string(),deliveryDate:r.z.string().nullable()}),i=r.z.object({name:r.z.string(),baseAttributes:r.z.array(r.z.object({name:r.z.string(),attributes:r.z.array(r.z.object({name:r.z.string(),value:r.z.array(r.z.object({name:r.z.string(),definitionId:r.z.number().nullable(),url:r.z.null()})),definitionId:r.z.number().nullable()}))})),prices:r.z.object({mainPrice:r.z.number(),promotionalPrice:r.z.object({price:r.z.number(),fromDatetime:r.z.string(),toDatetime:r.z.string()}).nullable(),voucherDiscountedPrice:r.z.number().nullable(),lowestPrice:r.z.object({price:r.z.number().nullable(),show:r.z.boolean()})}),images:r.z.array(r.z.object({url:r.z.string(),type:r.z.string()})),productGroupName:r.z.string(),productType:r.z.string(),deliveryAvailability:r.z.object({shopDeliveryAvailability:o.nullable(),homeDeliveryAvailability:o.nullable(),commonDeliveryAvailability:o.nullable(),reserveAndCollectAvailable:r.z.boolean()}),labels:r.z.array(r.z.object({name:r.z.string(),color:r.z.string().nullable(),backgroundColor:r.z.string().nullable()})),brand:r.z.string(),brandLogo:r.z.null(),variantBasicData:r.z.object({variantGroups:r.z.array(r.z.object({variantGroupName:r.z.string(),variants:r.z.array(r.z.object({variantValue:r.z.string(),currentProduct:r.z.boolean(),colorCodes:r.z.string().array().nullable()}))}))}),outletDetails:r.z.object({deliveryAvailability:r.z.object({shopDeliveryAvailability:o,homeDeliveryAvailability:o,commonDeliveryAvailability:r.z.null(),reserveAndCollectAvailable:r.z.boolean()}),outletCategories:r.z.array(r.z.object({categoryName:r.z.string(),categoryDescription:r.z.string(),categoryId:r.z.number(),price:r.z.number(),instalment:r.z.object({code:r.z.string(),instalmentPrice:r.z.number(),numberOfInstalments:r.z.number(),loanInterest:r.z.number(),label:r.z.string(),hasPromotionDetails:r.z.boolean(),shortPromotionDescription:r.z.null(),rrso:r.z.number(),usingDiscountedPrice:r.z.boolean()}).nullable()}))}).nullable(),opinionsSummary:r.z.object({averageGrade:r.z.number(),opinionsNumber:r.z.number()}),splitPayment:r.z.boolean(),productName:r.z.string(),energyLabel:r.z.object({energyClass:r.z.object({value:r.z.string(),type:r.z.string(),scale:r.z.string()}),oldEnergyClassLabel:r.z.string(),energyInformationCardUrl:r.z.string(),definitionId:r.z.number().nullable()}).nullable(),productAdvertisingPlacements:r.z.array(r.z.unknown()),voucherDetails:r.z.object({voucherName:r.z.string().nullable(),voucherCode:r.z.string(),automatic:r.z.boolean(),beginTime:r.z.string(),endTime:r.z.string(),usageLimit:r.z.null(),description:r.z.string()}).nullable(),deliveryPriceMessage:r.z.string().nullable(),instalment:r.z.object({code:r.z.string(),instalmentPrice:r.z.number(),numberOfInstalments:r.z.number(),loanInterest:r.z.number(),label:r.z.string(),hasPromotionDetails:r.z.boolean(),shortPromotionDescription:r.z.string().nullable(),rrso:r.z.number(),usingDiscountedPrice:r.z.boolean()}).nullable(),identifiers:r.z.object({plu:r.z.string(),productLinkName:r.z.string(),productGroupLinkName:r.z.string(),huCode:r.z.null()}),presentationBox:r.z.object({backgroundColor:r.z.string(),promotionBackgroundColor:r.z.string(),promotionTextColor:r.z.string(),infoTextColor:r.z.string(),voucherCodeTextColor:r.z.string(),dateTextColor:r.z.string(),gaugeBackgroundColor:r.z.string(),gaugeBorderColor:r.z.string(),discountedPriceColor:r.z.string(),priceColor:r.z.string(),boxBorderColor:r.z.string(),tabTextColor:r.z.string()}).nullable(),productLinks:r.z.array(r.z.unknown()),callCenterPhoneNumber:r.z.string(),paymentTypeDescriptions:r.z.array(r.z.unknown()),videos:r.z.array(r.z.unknown()),relatedPromotion:r.z.null()}),a=r.z.object({productsCount:r.z.number(),results:i.strict().array(),suggestion:r.z.null().optional()}),l=i.omit({deliveryAvailability:!0,deliveryPriceMessage:!0,instalment:!0,opinionsSummary:!0,outletDetails:!0}),c=r.z.object({json:a})},7275:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(9601),o=t.n(r),i=t(2609),a=t.n(i)()(o());a.push([n.id,'.jsondiffpatch-delta {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  display: inline-block;\n}\n.jsondiffpatch-delta pre {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\nul.jsondiffpatch-delta {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-delta ul {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-added .jsondiffpatch-property-name,\n.jsondiffpatch-added .jsondiffpatch-value pre,\n.jsondiffpatch-modified .jsondiffpatch-right-value pre,\n.jsondiffpatch-textdiff-added {\n  background: #bbffbb;\n}\n.jsondiffpatch-deleted .jsondiffpatch-property-name,\n.jsondiffpatch-deleted pre,\n.jsondiffpatch-modified .jsondiffpatch-left-value pre,\n.jsondiffpatch-textdiff-deleted {\n  background: #ffbbbb;\n  text-decoration: line-through;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination {\n  color: gray;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination > .jsondiffpatch-value {\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  overflow-y: hidden;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-showing\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  display: block;\n}\n.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-visible\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n  display: none;\n}\n.jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-property-name {\n  display: inline-block;\n  padding-right: 5px;\n  vertical-align: top;\n}\n.jsondiffpatch-property-name:after {\n  content: ": ";\n}\n.jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n  content: ": [";\n}\n.jsondiffpatch-child-node-type-array:after {\n  content: "],";\n}\ndiv.jsondiffpatch-child-node-type-array:before {\n  content: "[";\n}\ndiv.jsondiffpatch-child-node-type-array:after {\n  content: "]";\n}\n.jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n  content: ": {";\n}\n.jsondiffpatch-child-node-type-object:after {\n  content: "},";\n}\ndiv.jsondiffpatch-child-node-type-object:before {\n  content: "{";\n}\ndiv.jsondiffpatch-child-node-type-object:after {\n  content: "}";\n}\n.jsondiffpatch-value pre:after {\n  content: ",";\n}\nli:last-child > .jsondiffpatch-value pre:after,\n.jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n  content: "";\n}\n.jsondiffpatch-modified .jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-modified .jsondiffpatch-right-value {\n  margin-left: 5px;\n}\n.jsondiffpatch-moved .jsondiffpatch-value {\n  display: none;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination {\n  display: inline-block;\n  background: #ffffbb;\n  color: #888;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n  content: " => ";\n}\nul.jsondiffpatch-textdiff {\n  padding: 0;\n}\n.jsondiffpatch-textdiff-location {\n  color: #bbb;\n  display: inline-block;\n  min-width: 60px;\n}\n.jsondiffpatch-textdiff-line {\n  display: inline-block;\n}\n.jsondiffpatch-textdiff-line-number:after {\n  content: ",";\n}\n.jsondiffpatch-error {\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n',""]);const l=a}}]);