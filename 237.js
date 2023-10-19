"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[237],{8273:(n,e,t)=>{t.d(e,{z:()=>v,H:()=>j});var r=t(2784),o=t(2406),a=t(6062),i=t.n(a),l=t(4036),c=t.n(l),u=t(6793),s=t.n(u),d=t(7892),p=t.n(d),f=t(1173),b=t.n(f),m=t(2464),z=t.n(m),g=t(7275),h={};h.styleTagTransform=z(),h.setAttributes=p(),h.insert=s().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=b(),i()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;var y=(0,o.create)({}),j=function(n,e){return y.diff(n,e)};function v(n){var e=n.left,t=n.right,a=j(e,t);return a?r.createElement("div",{className:"jsondiffpatch-unchanged-hidden",dangerouslySetInnerHTML:{__html:o.formatters.html.format(a,e)}}):null}},7965:(n,e,t)=>{t.d(e,{JO:()=>r.JO,V_:()=>r.V_});var r=t(2059)},2059:(n,e,t)=>{t.d(e,{JO:()=>c,Mx:()=>u,V_:()=>s});var r=t(195),o=r.z.object({code:r.z.string(),deliveryDate:r.z.string().nullable()}),a=r.z.object({code:r.z.string(),instalmentPrice:r.z.number(),numberOfInstalments:r.z.number(),loanInterest:r.z.number(),label:r.z.string().nullable(),hasPromotionDetails:r.z.boolean(),shortPromotionDescription:r.z.string().nullable(),rrso:r.z.number(),usingDiscountedPrice:r.z.boolean()}),i=r.z.object({name:r.z.string(),baseAttributes:r.z.array(r.z.object({name:r.z.string(),attributes:r.z.array(r.z.object({name:r.z.string(),value:r.z.array(r.z.object({name:r.z.string(),definitionId:r.z.number().nullable(),url:r.z.null()})),definitionId:r.z.number().nullable()}))})),prices:r.z.object({mainPrice:r.z.number(),promotionalPrice:r.z.object({price:r.z.number(),fromDatetime:r.z.string(),toDatetime:r.z.string()}).nullable(),voucherDiscountedPrice:r.z.number().nullable(),lowestPrice:r.z.object({price:r.z.number().nullable(),show:r.z.boolean()})}),images:r.z.object({url:r.z.string(),type:r.z.enum(["BIG_PHOTO","CARD_PHOTO","CMS_PHOTO","DETAILS_PHOTO","ICON_PHOTO","ORIGINAL_PHOTO","PHOTO","SUITE_PHOTO"])}).array(),productGroupName:r.z.string(),productType:r.z.string(),deliveryAvailability:r.z.object({shopDeliveryAvailability:o.nullable(),homeDeliveryAvailability:o.nullable(),commonDeliveryAvailability:o.nullable(),reserveAndCollectAvailable:r.z.boolean()}),labels:r.z.array(r.z.object({name:r.z.string().nullable(),color:r.z.string().nullable(),backgroundColor:r.z.string().nullable()})),brand:r.z.string(),brandLogo:r.z.null(),variantBasicData:r.z.object({variantGroups:r.z.array(r.z.object({variantGroupName:r.z.string(),variants:r.z.array(r.z.object({variantValue:r.z.string(),currentProduct:r.z.boolean(),colorCodes:r.z.string().array().nullable()}))}))}),outletDetails:r.z.object({deliveryAvailability:r.z.object({shopDeliveryAvailability:o,homeDeliveryAvailability:o,commonDeliveryAvailability:r.z.null(),reserveAndCollectAvailable:r.z.boolean()}),outletCategories:r.z.array(r.z.object({categoryName:r.z.string(),categoryDescription:r.z.string(),categoryId:r.z.number(),price:r.z.number(),instalment:a.nullable()}))}).nullable(),opinionsSummary:r.z.object({averageGrade:r.z.number(),opinionsNumber:r.z.number()}),splitPayment:r.z.boolean(),productName:r.z.string(),energyLabel:r.z.object({energyClass:r.z.object({value:r.z.string(),type:r.z.string(),scale:r.z.string().nullable()}),oldEnergyClassLabel:r.z.string(),energyInformationCardUrl:r.z.string(),definitionId:r.z.number().nullable()}).nullable(),productAdvertisingPlacements:r.z.array(r.z.unknown()),voucherDetails:r.z.object({voucherName:r.z.string().nullable(),voucherCode:r.z.string(),automatic:r.z.boolean(),beginTime:r.z.string(),endTime:r.z.string(),usageLimit:r.z.object({remainingUsageLimit:r.z.number(),totalUsageLimit:r.z.number()}).nullable(),description:r.z.string()}).nullable(),deliveryPriceMessage:r.z.string().nullable(),instalment:a.nullable(),identifiers:r.z.object({plu:r.z.string(),productLinkName:r.z.string(),productGroupLinkName:r.z.string(),huCode:r.z.null()}),presentationBox:r.z.object({backgroundColor:r.z.string().nullable(),promotionBackgroundColor:r.z.string().nullable(),promotionTextColor:r.z.string().nullable(),infoTextColor:r.z.string().nullable(),voucherCodeTextColor:r.z.string().nullable(),dateTextColor:r.z.string().nullable(),gaugeBackgroundColor:r.z.string().nullable(),gaugeBorderColor:r.z.string().nullable(),discountedPriceColor:r.z.string().nullable(),priceColor:r.z.string().nullable(),boxBorderColor:r.z.string().nullable(),tabTextColor:r.z.string().nullable()}).nullable(),productLinks:r.z.array(r.z.unknown()),callCenterPhoneNumber:r.z.string(),paymentTypeDescriptions:r.z.array(r.z.unknown()),videos:r.z.array(r.z.unknown()),relatedPromotion:r.z.null(),holidayStatus:r.z.null().optional()}),l=r.z.object({productsCount:r.z.number(),results:i.strict().array(),suggestion:r.z.null().optional()}),c=i,u=c.pick({brand:!0,prices:!0,productGroupName:!0,productName:!0}),s=r.z.object({json:l})},419:(n,e,t)=>{t.d(e,{JO:()=>r.JO,V_:()=>r.V_});var r=t(5395)},5395:(n,e,t)=>{t.d(e,{JO:()=>o,Mx:()=>a,V_:()=>l});var r=t(195),o=r.z.object({id:r.z.number(),link:r.z.string(),name:r.z.string(),product_id:r.z.number(),product_parent_id:r.z.number(),add_to_cart:r.z.boolean(),price_gross:r.z.number(),price_net:r.z.number(),discount:r.z.object({date_time_start:r.z.null(),date_time_end:r.z.null(),old_price:r.z.object({amount:r.z.null(),currency:r.z.string()}),value:r.z.object({amount:r.z.null(),currency:r.z.string()})}),gallery:r.z.string().array()}).passthrough(),a=o.extend({}),i=r.z.object({data:r.z.object({byId:r.z.object({id:r.z.number(),name:r.z.string(),product_id:r.z.number(),product_parent_id:r.z.number(),add_to_cart:r.z.boolean(),price_gross:r.z.number(),price_net:r.z.number(),discount:r.z.object({date_time_start:r.z.null(),date_time_end:r.z.null(),old_price:r.z.object({amount:r.z.null(),currency:r.z.string()}),value:r.z.object({amount:r.z.null(),currency:r.z.string()})}),_embedded:r.z.object({promoPrice:r.z.any(),hotDeals:r.z.object({elements:r.z.array(r.z.unknown())})}),promo_price_gross:r.z.null(),promo_price_net:r.z.null(),club_price:r.z.null(),link:r.z.string(),gallery:r.z.array(r.z.string()),availability:r.z.object({id:r.z.number(),name:r.z.string(),display_name:r.z.string(),description:r.z.string().nullable(),description_details:r.z.string().nullable(),color_hash:r.z.null(),icon:r.z.null(),weight:r.z.number(),is_default:r.z.boolean(),type:r.z.string()}),type:r.z.string(),service_type:r.z.null(),internal_code:r.z.null(),stock_shop:r.z.number(),stock_shipment:r.z.number(),flags:r.z.object({preorder_product:r.z.boolean().optional(),preorder_installments:r.z.boolean().optional(),additional_new:r.z.boolean().optional(),product_new:r.z.boolean().optional(),Iphone_15:r.z.boolean().optional(),exclusive_product:r.z.boolean().optional(),receive_in_hour:r.z.boolean().optional(),has_leasing_link:r.z.boolean().optional(),product_promoted:r.z.boolean(),inpost_parcel_available:r.z.boolean().optional(),variant_opinions:r.z.boolean(),has_pko_leasing:r.z.boolean().optional(),apple_promotion_available:r.z.boolean(),present_packaging_small_size_for_smartphones:r.z.boolean()}).passthrough(),should_be_disabled:r.z.boolean(),is_product_set:r.z.boolean(),inpost:r.z.object({available:r.z.boolean()}),available_in_store:r.z.boolean(),is_szs_available:r.z.boolean(),other_prices:r.z.array(r.z.unknown()),published_date:r.z.null(),add_to_cart_link:r.z.null(),energy_class:r.z.array(r.z.unknown()),active_variant_count:r.z.number()}).array()})}),l=r.z.object({json:i})},3237:(n,e,t)=>{t.r(e),t.d(e,{default:()=>x});var r=t(2784),o=t(357),a=t(8273),i=t(195),l=t(7965),c=t(419),u=t(8065);function s(n){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},s(n)}var d=["type","data"];function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){var r,o,a;r=n,o=e,a=t[e],(o=function(n){var e=function(n,e){if("object"!==s(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===s(e)?e:String(e)}(o))in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var b=i.z.object({id:i.z.string(),item:i.z.string(),data:i.z.unknown(),created:i.z.coerce.date(),updated:i.z.coerce.date().nullable()}),m=i.z.discriminatedUnion("type",[b.extend({type:i.z.literal("euro"),data:l.JO.transform((function(n){var e=n.identifiers.plu,t=n.brand,r=n.name,o=n.images,a=n.prices,i=a.mainPrice,l=a.promotionalPrice;return Object.assign({id:e,url:new URL("/p/".concat(e),"https://www.euro.com.pl").toString(),brand:t,name:r,images:o.filter((function(n){var e=n.type;return["CMS_PHOTO"].includes(e)})).map((function(n){return n.url}))},l?{price:l.price,oldPrice:i}:{price:i})}))}),b.extend({type:i.z.literal("expert"),data:c.JO.transform((function(n){var e,t=n.id,r=n.link,o=n.name,a=n.gallery,i=n.price_gross;return e="https://www.mediaexpert.pl",{id:String(t),url:new URL(r,e).toString(),brand:"",name:o,images:a.map((function(n){return new URL("https://prod-api.mediaexpert.pl/api/images/gallery_290_300/thumbnails/".concat(n),e).toString()})),price:i/100}}))}),b.extend({type:i.z.literal("xkom"),data:u.JO.transform((function(n){var e,t=n.id,r=n.producer.name,o=n.name,a=n.mark,i=n.photo.url,l=void 0===i?"":i,c=n.price,u=n.oldPrice;return e=null!=l&&l.match(".al.to/")?"https://www.al.to":"https://www.x-kom.pl",{id:t,url:new URL("/p/".concat(t),e).toString(),brand:r,name:o,mark:a,images:[l].filter(Boolean),price:c,oldPrice:u}}))})]).transform((function(n){var e=n.type,t=n.data,r=function(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}(n,d);return f({type:t.url.match(".al.to/")?"alto":e,data:f(f({},t),{},{images:t.images.slice(0,3)})},r)})).array(),z=i.z.object({id:i.z.string(),url:i.z.string(),brand:i.z.string(),name:i.z.string(),images:i.z.string().array(),oldPrice:i.z.number().optional(),price:i.z.number()}).pick({name:!0,oldPrice:!0,price:!0});function g(n){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},g(n)}function h(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function y(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?h(Object(t),!0).forEach((function(e){j(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function j(n,e,t){return(e=function(n){var e=function(n,e){if("object"!==g(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===g(e)?e:String(e)}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function v(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=a.call(t)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(n){u=!0,o=n}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(n,e)||_(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(n,e){if(n){if("string"==typeof n)return O(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?O(n,e):void 0}}function O(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var w,P=[100].concat((w=Array(5),function(n){if(Array.isArray(n))return O(n)}(w)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(w)||_(w)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(n,e){return 1e3*(e+1)}))),k=(0,o.k)((function(n){return fetch("".concat("","prods?limit=").concat(n,"&parse=").concat(0)).then((function(n){return n.json()})).then((function(n){var e=n.result;return m.parseAsync(e)}))})),S=function(n){return fetch("".concat("","prods/delete?id=").concat(n))};function x(){var n=v((0,r.useState)((function(){return{limit:P[0]}})),2),e=n[0],t=n[1],o=k.read(e.limit),i=(0,r.useMemo)((function(){return o.reduce((function(n,e){return Object.assign(n,j({},e.item,(n[e.item]||[]).concat(e)))}),{})}),[o]),l=v((0,r.useState)((function(){return[]})),2),c=l[0],u=l[1],s=(0,r.useCallback)((function(n){var e,t=n.target;return e=t.value,u((function(n){return t.checked?n.concat(e):n.filter((function(n){return n!==e}))}))}),[]);return console.log(y(y({},e),{},{result:o,selected:c})),r.createElement("section",null,r.createElement("h2",null,"Prods"),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"limit"),r.createElement("select",{value:String(e.limit),onChange:(0,r.useCallback)((function(n){var e=n.target;return t((function(n){return y(y({},n),{},{limit:Number(e.value)})}))}),[])},P.map((function(n){return r.createElement("option",{key:n,value:String(n)},n)})))),r.createElement("button",{onClick:function(){return u(Object.values(i).flatMap((function(n){return n.reduce((function(n,e,t,r){return t<r.length-1&&void 0===(0,a.H)(z.parse(r[t+1].data),z.parse(e.data))?n.concat(e.id):n}),[])})))}},"select duplicates"),r.createElement("button",{disabled:0===c.length,onClick:function(){return c.reduce((function(n,e){return n.then((function(){return S(e)}))}),Promise.resolve())}},"delete selected (".concat(c.length,")"))),r.createElement("ol",null,Object.entries(i).map((function(n){var e=v(n,2),t=e[0],o=e[1];return r.createElement("li",{key:t},"[",t,"]",r.createElement("ul",null,o.map((function(n,e){return r.createElement("li",{key:n.id},r.createElement("label",null,r.createElement("input",{type:"checkbox",value:n.id,checked:c.includes(n.id),onChange:s}),"[",n.id,"]"),r.createElement("button",{onClick:function(){return S(n.id)}},"delete"),r.createElement("pre",null,JSON.stringify(n,null,2)),e<o.length-1&&r.createElement(a.z,{left:z.parse(o[e+1].data),right:z.parse(n.data)}))}))))}))))}},8065:(n,e,t)=>{t.d(e,{JO:()=>r.JO,V_:()=>r.V_});var r=t(5910)},5910:(n,e,t)=>{t.d(e,{JO:()=>l,Mx:()=>c,V_:()=>s});var r=t(195),o=r.z.object({currentPage:r.z.number(),itemsPerPageActive:r.z.number(),itemsPerPage:r.z.number().array(),totalPages:r.z.number(),pageSize:r.z.number(),sort:r.z.object({rule:r.z.string(),sort:r.z.string()})}),a=r.z.object({url:r.z.string().optional(),thumbnailUrl:r.z.string().optional(),urlTemplate:r.z.string().optional()}),i=r.z.object({featureSummary:r.z.string().array().optional(),featureSummaryStructured:r.z.object({shortName:r.z.string(),description:r.z.string().nullable(),valueSeparator:r.z.string(),valueGroups:r.z.object({shortName:r.z.string(),description:r.z.string().nullable()}).array()}).array().optional(),availabilityStatus:r.z.enum(["Available","Unavailable"]).optional(),producerCode:r.z.string().optional(),freeInstallment:r.z.boolean().optional(),installmentMinimum:r.z.number().optional(),alternativeGroupId:r.z.string().optional(),alternativeProducts:r.z.unknown().array().optional(),mark:r.z.string().optional(),oldPrice:r.z.number().optional(),priceInfo:r.z.object({price:r.z.number(),oldPrice:r.z.number().nullable(),isPriceVisible:r.z.boolean()}),producer:r.z.object({id:r.z.string(),name:r.z.string()}),isEsd:r.z.boolean(),esdType:r.z.string(),productLink:r.z.string(),photo:a,rating:r.z.number().optional(),ratingCount:r.z.number().optional(),commentsCount:r.z.number().optional(),freeShipping:r.z.boolean().optional(),id:r.z.string(),name:r.z.string(),price:r.z.number(),promotionInfo:r.z.object({code:r.z.null(),discountedPrice:r.z.number(),promotionEndDate:r.z.string(),customerLimit:r.z.number(),promotionStartDate:r.z.string()}).optional(),category:r.z.object({id:r.z.string(),parentGroupId:r.z.string().optional()}),questionsAndAnswers:r.z.boolean(),isFetching:r.z.boolean()}),l=i,c=l.pick({availabilityStatus:!0,name:!0,oldPrice:!0,price:!0,priceInfo:!0}),u=r.z.object({app:r.z.object({listing:r.z.object({paginationState:o}),products:r.z.record(i.strict())})}),s=r.z.object({json:u})},7275:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(9601),o=t.n(r),a=t(2609),i=t.n(a)()(o());i.push([n.id,'.jsondiffpatch-delta {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  display: inline-block;\n}\n.jsondiffpatch-delta pre {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\nul.jsondiffpatch-delta {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-delta ul {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-added .jsondiffpatch-property-name,\n.jsondiffpatch-added .jsondiffpatch-value pre,\n.jsondiffpatch-modified .jsondiffpatch-right-value pre,\n.jsondiffpatch-textdiff-added {\n  background: #bbffbb;\n}\n.jsondiffpatch-deleted .jsondiffpatch-property-name,\n.jsondiffpatch-deleted pre,\n.jsondiffpatch-modified .jsondiffpatch-left-value pre,\n.jsondiffpatch-textdiff-deleted {\n  background: #ffbbbb;\n  text-decoration: line-through;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination {\n  color: gray;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination > .jsondiffpatch-value {\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  overflow-y: hidden;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-showing\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  display: block;\n}\n.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-visible\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n  display: none;\n}\n.jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-property-name {\n  display: inline-block;\n  padding-right: 5px;\n  vertical-align: top;\n}\n.jsondiffpatch-property-name:after {\n  content: ": ";\n}\n.jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n  content: ": [";\n}\n.jsondiffpatch-child-node-type-array:after {\n  content: "],";\n}\ndiv.jsondiffpatch-child-node-type-array:before {\n  content: "[";\n}\ndiv.jsondiffpatch-child-node-type-array:after {\n  content: "]";\n}\n.jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n  content: ": {";\n}\n.jsondiffpatch-child-node-type-object:after {\n  content: "},";\n}\ndiv.jsondiffpatch-child-node-type-object:before {\n  content: "{";\n}\ndiv.jsondiffpatch-child-node-type-object:after {\n  content: "}";\n}\n.jsondiffpatch-value pre:after {\n  content: ",";\n}\nli:last-child > .jsondiffpatch-value pre:after,\n.jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n  content: "";\n}\n.jsondiffpatch-modified .jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-modified .jsondiffpatch-right-value {\n  margin-left: 5px;\n}\n.jsondiffpatch-moved .jsondiffpatch-value {\n  display: none;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination {\n  display: inline-block;\n  background: #ffffbb;\n  color: #888;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n  content: " => ";\n}\nul.jsondiffpatch-textdiff {\n  padding: 0;\n}\n.jsondiffpatch-textdiff-location {\n  color: #bbb;\n  display: inline-block;\n  min-width: 60px;\n}\n.jsondiffpatch-textdiff-line {\n  display: inline-block;\n}\n.jsondiffpatch-textdiff-line-number:after {\n  content: ",";\n}\n.jsondiffpatch-error {\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n',""]);const l=i}}]);