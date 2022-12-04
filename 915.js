/*! For license information please see 915.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[915],{2915:(t,e,r)=>{r.r(e),r.d(e,{default:()=>Z});var n=r(2784),o=r(9957),a=r(357),i=r(195),l=i.z.object({id:i.z.number(),vin17:i.z.string(),type:i.z.string(),isNew:i.z.boolean(),modelCode:i.z.string(),title:i.z.string(),brand:i.z.object({id:i.z.number(),label:i.z.string()}),series:i.z.object({id:i.z.number(),label:i.z.string()}),bodyType:i.z.object({id:i.z.number(),label:i.z.string()}),seriesCode:i.z.string(),productionYear:i.z.number(),mileage:i.z.number().optional(),fuel:i.z.object({id:i.z.number(),label:i.z.string()}),consumptionFuel:i.z.number().optional(),emission:i.z.number().optional(),emissionStandard:i.z.object({id:i.z.number(),label:i.z.string()}),powerKW:i.z.number(),powerHP:i.z.number(),capacity:i.z.number().optional(),transmission:i.z.object({id:i.z.number(),label:i.z.string()}),color:i.z.object({labelEN:i.z.string().optional(),code:i.z.string(),id:i.z.number(),label:i.z.string()}).strict(),images:i.z.number(),imagesLastChanged:i.z.string().optional(),panoramas:i.z.number(),panoramasLastChanged:i.z.string().optional(),exterior360:i.z.boolean(),interior360:i.z.boolean(),warranty:i.z.number(),usedBrand:i.z.boolean(),reservable:i.z.boolean(),reservationStatus:i.z.string().optional(),vatReclaimable:i.z.boolean(),leasable:i.z.boolean(),leaseProduct:i.z.object({type:i.z.string(),label:i.z.string(),downPaymentLimits:i.z.object({min:i.z.number(),max:i.z.number(),step:i.z.number(),default:i.z.number()}),termLimits:i.z.object({min:i.z.number(),max:i.z.number(),step:i.z.number(),default:i.z.number()}),totalAgeLimit:i.z.number(),residualValueFactorLimits:i.z.array(i.z.object({term:i.z.number(),min:i.z.number(),max:i.z.number()})),residualValueStep:i.z.number(),residualValueDefault:i.z.string(),interestRates:i.z.array(i.z.object({term:i.z.number(),value:i.z.number()}))}).optional(),comfortLeaseProduct:i.z.object({type:i.z.string(),label:i.z.string(),calculationMode:i.z.string(),downPaymentLimits:i.z.object({min:i.z.number(),max:i.z.number(),step:i.z.number(),default:i.z.number()}).strict(),termLimits:i.z.object({min:i.z.number(),max:i.z.number(),step:i.z.number(),default:i.z.number()}).strict(),totalAgeLimit:i.z.number(),annualMileageLimits:i.z.object({min:i.z.number(),max:i.z.number(),step:i.z.number(),default:i.z.number()}).strict(),interestRates:i.z.array(i.z.object({term:i.z.number(),value:i.z.number()})),tarRvMod:i.z.object({id:i.z.number(),tmdate:i.z.string(),accessoryLimit:i.z.number(),rvValue:i.z.number(),brvValue:i.z.number(),rvValueUsed:i.z.number(),brvValueUsed:i.z.number(),carSegmentId:i.z.string()}).strict(),tarRvDev:i.z.object({term:i.z.number(),totalMileage:i.z.number(),rvDev:i.z.number(),rvDevUsed:i.z.number()}).strict()}).strict().optional(),newPrice:i.z.number(),optionsPrice:i.z.number(),accessoriesPrice:i.z.number(),transactionalPrice:i.z.number(),dealer:i.z.object({id:i.z.number(),bunoBMW:i.z.string().optional(),bunoMINI:i.z.string().optional(),bunoMOTORCYCLE:i.z.string().optional(),owner:i.z.string(),ownerName:i.z.string(),name:i.z.string(),legalName:i.z.string(),street:i.z.string(),zip:i.z.string(),city:i.z.string(),lat:i.z.number(),lng:i.z.number()}).strict(),created:i.z.string(),age:i.z.number(),isYUC:i.z.boolean(),reserved:i.z.boolean(),extended:i.z.object({brand:i.z.string(),buno:i.z.string()})}).extend({modelCode:i.z.string().optional(),series:i.z.object({id:i.z.number(),label:i.z.string()}).optional(),seriesCode:i.z.string().optional()}).extend({consumptionElectric:i.z.number().optional(),emissionMeasurementStandard:i.z.string().optional(),electricRange:i.z.number().optional()}).extend({reservationFee:i.z.number().optional(),transactionalPriceUpdated:i.z.string().optional()}).extend({age:i.z.number().optional(),accessoriesPrice:i.z.number().optional(),isYUC:i.z.boolean().optional(),newPrice:i.z.number().optional(),optionsPrice:i.z.number().optional(),registration:i.z.string().optional()}).extend({video:i.z.string().optional()}).strict(),u=i.z.object({$list:l.array(),$count:i.z.object({$total:i.z.number(),genericEquipment:i.z.record(i.z.number())})}),c=i.z.object({meta:i.z.object({currency:i.z.string(),division:i.z.string(),end_date:i.z.string(),end_value:i.z.number(),id:i.z.number(),limit:i.z.number(),name:i.z.string(),next:i.z.string(),offset:i.z.number(),only_full:i.z.boolean(),previous:i.z.null(),roi:i.z.number(),start_date:i.z.string(),start_value:i.z.number(),synthetic_value_to:i.z.null(),total_count:i.z.number()}),objects:i.z.array(i.z.object({date:i.z.string(),roi:i.z.number(),unit:i.z.string(),value:i.z.number()}))}),s=r(42);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===p(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=i.z.object({list:i.z.object({name:i.z.string(),desc:i.z.string(),href:i.z.string(),code:i.z.string().optional()}).array()}),y=i.z.object({id:i.z.number(),name:i.z.string(),url:i.z.string(),photo:i.z.string(),rate:i.z.number(),rate_count:i.z.number(),price:i.z.number(),previous_price:i.z.number(),filter_values:i.z.array(i.z.string()),popularity:i.z.number(),mark:i.z.string()}),g=i.z.object({data:i.z.object({filters:i.z.object({id:i.z.number(),name:i.z.string(),position:i.z.number(),type:i.z.enum(["availability","custom","price","producer"]),values:i.z.object({count:i.z.number(),id:i.z.number(),name:i.z.string(),position:i.z.number()}).array(),view:i.z.enum(["select","range"])}).array(),general:i.z.object({date_start:i.z.string(),date_start_utc:i.z.string(),date_stop:i.z.string(),date_stop_utc:i.z.string(),enabled:i.z.boolean(),id:i.z.number(),name:i.z.string(),url:i.z.string()}),products:y.array(),seo:i.z.object({description:i.z.string(),keywords:i.z.string(),robots:i.z.string(),title:i.z.string()}).or(i.z.array(i.z.object({_trap:i.z.string()})))}),message:i.z.enum(["success"])}),h=i.z.object({code:i.z.string(),units:i.z.number(),buy:i.z.string(),sell:i.z.string(),spread:i.z.string(),date:i.z.string(),time:i.z.string()}),v=i.z.object({date:i.z.string(),rates:i.z.record(h.array()),range:i.z.object({minRateDate:i.z.string(),maxRateDate:i.z.string()})}),w=i.z.object({Url:i.z.string(),ThumbnailUrl:i.z.string(),UrlTemplate:i.z.string().nullable()}),j=i.z.object({Id:i.z.string(),Price:i.z.number(),OldPrice:i.z.number(),PromotionGainText:i.z.string(),PromotionGainTextLines:i.z.string().array(),PromotionGainValue:i.z.number(),PromotionTotalCount:i.z.number(),SaleCount:i.z.number(),MaxBuyCount:i.z.number(),PromotionName:i.z.string(),PromotionEnd:i.z.string(),PromotionPhoto:w,Product:i.z.object({AvailabilityStatus:i.z.enum(["Available","Unavailable"]),IsEsd:i.z.boolean(),Name:i.z.string(),MainPhoto:w,Price:i.z.number(),ProducerCode:i.z.string(),Producer:i.z.object({Id:i.z.string(),Name:i.z.string()}),ProductDescription:i.z.string(),WebUrl:i.z.string()})}),O=i.z.object({Message:i.z.string()}),E=i.z.union([O,j]),k=i.z.object({props:i.z.object({pageProps:i.z.object({featureFlags:i.z.any().transform((function(){return null})),translations:i.z.any().transform((function(){return null})),tracking:i.z.any().transform((function(){return null})),ad:i.z.object({id:i.z.number(),slug:i.z.string()}).passthrough().optional(),data:i.z.object({searchAds:i.z.object({items:i.z.object({id:i.z.number(),slug:i.z.string()}).array()})}).optional()})}).passthrough()}).passthrough();const x=function(t){var e,r=t.html;return{json:k.parse(JSON.parse((null===(e=(0,s.parse)(r).querySelector("script#__NEXT_DATA__"))||void 0===e?void 0:e.text)||"{}"))}};function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==P(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===P(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var L="AUTOS",A="FUNDS",T="PROMO",N="PROMO_ITEM",$="HOTSHOT",D="HOTSHOT_ALTO",R="OTODOM",I="OTODOM_OFFER",M="RATES",U=i.z.object({data:i.z.object({url:i.z.string()}),returnvalue:i.z.object({json:i.z.any()})}),F=(i.z.preprocess(i.z.object({id:i.z.string(),data:i.z.object({url:i.z.string()}).passthrough(),returnvalue:i.z.object({html:i.z.any(),json:i.z.any()})}).transform((function(t){var e,r;return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({type:null===(e=Object.entries((r={},_(r,L,new RegExp("mini.com.pl/nowe/|bmw.pl/nowe/|bmw.pl/uzywane/")),_(r,A,new RegExp("tfi/fund/")),_(r,$,new RegExp("x-kom.pl/goracy_strzal")),_(r,D,new RegExp("al.to/goracy_strzal")),_(r,T,new RegExp("x-kom.pl/promocje")),_(r,N,new RegExp("promocje.x-kom.pl/")),_(r,R,new RegExp("otodom.pl/pl/oferty/")),_(r,I,new RegExp("otodom.pl/pl/oferta/")),_(r,M,new RegExp("pl/rest/rates/")),r)).find((function(e){var r,n,o=(n=2,function(t){if(Array.isArray(t))return t}(r=e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(r,n)||function(t,e){if(t){if("string"==typeof t)return S(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(t,e):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return o[0],o[1].test(t.data.url)})))||void 0===e?void 0:e.shift()},t)})).parse,i.z.discriminatedUnion("type",[U.extend({type:i.z.literal(L),data:i.z.object({url:i.z.string()}).extend({body:i.z.object({$match:i.z.object({}).passthrough(),$skip:i.z.number(),$limit:i.z.number()})})}),U.extend({type:i.z.literal(A)}),i.z.object({type:i.z.literal(T),data:i.z.object({url:i.z.string()}),returnvalue:i.z.object({html:i.z.string()}).transform((function(t){var e=t.html;return{json:d.parse({list:(0,s.parse)(e).querySelectorAll("h3 + p").map((function(t){return t.parentNode.parentNode})).map((function(t){var e;return{name:t.querySelector("h3").text,desc:t.querySelector("p").text.replace(/\s+\n/,"\n"),href:null===(e=t.querySelector("a[href]"))||void 0===e?void 0:e.getAttribute("href")}})).map((function(t){return z(z({},t),(n=t.desc.match(/Twój kod rabatowy: (.+)/)||[],(e=n,r=2,o=function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,r)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],(a=o[1])?{code:a}:{}));var e,r,n,o,a})).slice(0,50)})}}))}).extend({}).passthrough(),U.extend({type:i.z.literal(N),data:i.z.object({url:i.z.string()}).extend({code:i.z.string().optional(),desc:i.z.string(),href:i.z.string(),name:i.z.string()})}),U.extend({type:i.z.literal($)}),U.extend({type:i.z.literal(D)}),i.z.object({type:i.z.literal(R),data:i.z.object({url:i.z.string()}),returnvalue:i.z.object({html:i.z.string()}).transform(x)}),i.z.object({type:i.z.literal(I),data:i.z.object({url:i.z.string()}),returnvalue:i.z.object({html:i.z.string()}).transform(x)}),U.extend({type:i.z.literal(M)})])).transform((function(t){return console.log(t),t})),i.z.discriminatedUnion("type",[i.z.object({type:i.z.literal(L),returnvalue:i.z.object({json:u})}),i.z.object({type:i.z.literal(A),returnvalue:i.z.object({json:c})}),i.z.object({type:i.z.literal($),returnvalue:i.z.object({json:E})}),i.z.object({type:i.z.literal(D),returnvalue:i.z.object({json:E})}),i.z.object({type:i.z.literal(T),returnvalue:i.z.object({json:d})}),i.z.object({type:i.z.literal(N),returnvalue:i.z.object({json:g})}).extend({data:i.z.object({code:i.z.string().optional(),desc:i.z.string(),href:i.z.string(),name:i.z.string()})}),i.z.object({type:i.z.literal(R),returnvalue:i.z.object({json:k})}),i.z.object({type:i.z.literal(I),returnvalue:i.z.object({json:k})}),i.z.object({type:i.z.literal(M),returnvalue:i.z.object({json:v})})]).array());function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function V(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?V(Object(r),!0).forEach((function(e){H(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function H(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==G(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===G(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(t,e)||J(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(t,e){if(t){if("string"==typeof t)return B(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(t,e):void 0}}function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function W(){W=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function c(t,e,r,o){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),l=new k(o||[]);return n(i,"_invoke",{value:w(t,r,l)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var p={};function m(){}function b(){}function z(){}var f={};u(f,a,(function(){return this}));var d=Object.getPrototypeOf,y=d&&d(d(x([])));y&&y!==e&&r.call(y,a)&&(f=y);var g=z.prototype=m.prototype=Object.create(f);function h(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function v(t,e){function o(n,a,i,l){var u=s(t[n],t,a);if("throw"!==u.type){var c=u.arg,p=c.value;return p&&"object"==G(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,i,l)}),(function(t){o("throw",t,i,l)})):e.resolve(p).then((function(t){c.value=t,i(c)}),(function(t){return o("throw",t,i,l)}))}l(u.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function w(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=j(i,r);if(l){if(l===p)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function x(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return b.prototype=z,n(g,"constructor",{value:z,configurable:!0}),n(z,"constructor",{value:b,configurable:!0}),b.displayName=u(z,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,z):(t.__proto__=z,u(t,l,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},h(v.prototype),u(v.prototype,i,(function(){return this})),t.AsyncIterator=v,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new v(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},h(g),u(g,l,"Generator"),u(g,a,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=x,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function K(t,e,r,n,o,a,i){try{var l=t[a](i),u=l.value}catch(t){return void r(t)}l.done?e(u):Promise.resolve(u).then(n,o)}var X=(0,a.k)(function(){var t,e=(t=W().mark((function t(e){var r;return W().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/data.json?".concat(e));case 2:return r=t.sent,t.next=5,r.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){K(a,n,o,i,l,"next",t)}function l(t){K(a,n,o,i,l,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}()),Q=function(t,e){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:e?JSON.stringify(e):null})};function Z(t){var e,r=t.version,a=void 0===r?1:r,l=X.read(a),u=Y((0,n.useState)((function(){return{start:0,limit:10,data:!1,returnvalue:!0}})),2),c=u[0],s=u[1],p=Y((0,n.useState)([]),2),m=p[0],b=p[1];return n.createElement("section",null,n.createElement("h2",null,"Hello"),n.createElement("pre",null,JSON.stringify(l,null,2)),n.createElement("fieldset",null,n.createElement("legend",null,"process"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://najlepszeoferty.mini.com.pl/nowe/api/v1/ems/mini-new-pl_PL/search",body:{$match:{transactionalPrice:{$min:0,$max:179e4}},$skip:0,$limit:100}},opts:{delay:(0,o.seconds)(5)}})}),[])},"mini.com.pl/nowe"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://najlepszeoferty.bmw.pl/nowe/api/v1/ems/bmw-new-pl_PL/search",body:{$match:{transactionalPrice:{$min:0,$max:179e4}},$skip:0,$limit:100}},opts:{delay:(0,o.seconds)(5)}})}),[])},"bmw.pl/nowe"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/search",body:{$match:{transactionalPrice:{$min:0,$max:179e4}},$skip:0,$limit:100}},opts:{delay:(0,o.seconds)(5)}})}),[])},"bmw.pl/uzywane"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://www.pkotfi.pl/_ajax/rest/v2/tfi/fund/2/values/?format=json&division=daily"},opts:{delay:(0,o.seconds)(5)}})}),[])},"tfi/fund/2"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://www.rbinternational.com.pl/rest/rates/?type=kursywalut&range=all"},opts:{delay:(0,o.seconds)(5)}})}),[])},"rest/rates"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dzialka/warszawa?limit=72&page=1"},opts:{delay:(0,o.seconds)(5)}})}),[])},"dzialka/warszawa"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dom/warszawa?limit=72&page=1"},opts:{delay:(0,o.seconds)(5)}})}),[])},"dom/warszawa"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dom/komorow_5600?limit=72&page=1"},opts:{delay:(0,o.seconds)(5)}})}),[])},"dom/komorow_5600"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dom/michalowice_62659?limit=72&page=1"},opts:{delay:(0,o.seconds)(5)}})}),[])},"dom/michalowice_62659"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://www.x-kom.pl/promocje"},opts:{delay:(0,o.seconds)(5)}})}),[])},"x-kom.pl/promocje"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://www.x-kom.pl/goracy_strzal"},opts:{delay:(0,o.seconds)(5)}})}),[])},"x-kom.pl/goracy_strzal"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://www.al.to/goracy_strzal"},opts:{delay:(0,o.seconds)(5)}})}),[])},"al.to/goracy_strzal")),n.createElement("fieldset",null,n.createElement("legend",null,"delayed"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dzialka/warszawa?limit=72&page=1"},opts:{repeat:{cron:"30 * * * *"}}})}),[])},"dzialka/warszawa"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dom/warszawa?limit=72&page=1"},opts:{repeat:{cron:"0 * * * *"}}})}),[])},"dom/warszawa"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://www.x-kom.pl/promocje"},opts:{repeat:{cron:"1 8,20 * * *"}}})}),[])},"x-kom.pl/promocje"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://www.x-kom.pl/goracy_strzal"},opts:{repeat:{cron:"1 10,22 * * *"}}})}),[])},"x-kom.pl/goracy_strzal"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("process",{data:{url:"https://www.al.to/goracy_strzal"},opts:{repeat:{cron:"1 9,21 * * *"}}})}),[])},"al.to/goracy_strzal"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("cleanup")}),[])},"cleanupRepeatable")),n.createElement("fieldset",null,n.createElement("legend",null,"entries"),n.createElement("label",null,n.createElement("span",null,"start"),n.createElement("select",{value:c.start,onChange:(0,n.useCallback)((function(t){var e=t.target;return s((function(t){return q(q({},t),{},{start:Number(e.value)})}))}),[])},(e=Array(10),function(t){if(Array.isArray(t))return B(t)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||J(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t,e){return e*c.limit})).map((function(t){return n.createElement("option",{key:t,value:t},t)})))),n.createElement("label",null,n.createElement("span",null,"limit"),n.createElement("select",{value:c.limit,onChange:(0,n.useCallback)((function(t){var e=t.target;return s((function(t){return q(q({},t),{},{start:0,limit:Number(e.value)})}))}),[])},[5,10,50,100,500].map((function(t){return n.createElement("option",{key:t,value:t},t)})))),n.createElement("button",{onClick:(0,n.useCallback)((function(){return Q("entries",c).then((function(t){return t.json()})).then(c.data?i.z.any({}).array().parseAsync:F.parseAsync).then(b)}),[c])},"entries"),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:c.data,onChange:(0,n.useCallback)((function(t){var e=t.target;return s((function(t){return q(q({},t),{},{data:e.checked})}))}),[])}),n.createElement("span",null,"data")),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:c.returnvalue,onChange:(0,n.useCallback)((function(t){var e=t.target;return s((function(t){return q(q({},t),{},{returnvalue:e.checked})}))}),[])}),n.createElement("span",null,"returnvalue")),n.createElement("pre",null,JSON.stringify(m,null,2))))}}}]);