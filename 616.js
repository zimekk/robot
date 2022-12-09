/*! For license information please see 616.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[616],{3616:(t,e,r)=>{r.r(e),r.d(e,{default:()=>Q});var n=r(2784),o=r(357),a=r(195),i=a.z.object({id:a.z.number(),vin17:a.z.string(),type:a.z.string(),isNew:a.z.boolean(),modelCode:a.z.string(),title:a.z.string(),brand:a.z.object({id:a.z.number(),label:a.z.string()}),series:a.z.object({id:a.z.number(),label:a.z.string()}),bodyType:a.z.object({id:a.z.number(),label:a.z.string()}),seriesCode:a.z.string(),productionYear:a.z.number(),mileage:a.z.number().optional(),fuel:a.z.object({id:a.z.number(),label:a.z.string()}),consumptionFuel:a.z.number().optional(),emission:a.z.number().optional(),emissionStandard:a.z.object({id:a.z.number(),label:a.z.string()}),powerKW:a.z.number(),powerHP:a.z.number(),capacity:a.z.number().optional(),transmission:a.z.object({id:a.z.number(),label:a.z.string()}),color:a.z.object({labelEN:a.z.string().optional(),code:a.z.string(),id:a.z.number(),label:a.z.string()}).strict(),images:a.z.number(),imagesLastChanged:a.z.string().optional(),panoramas:a.z.number(),panoramasLastChanged:a.z.string().optional(),exterior360:a.z.boolean(),interior360:a.z.boolean(),warranty:a.z.number(),usedBrand:a.z.boolean(),reservable:a.z.boolean(),reservationStatus:a.z.string().optional(),vatReclaimable:a.z.boolean(),leasable:a.z.boolean(),leaseProduct:a.z.object({type:a.z.string(),label:a.z.string(),downPaymentLimits:a.z.object({min:a.z.number(),max:a.z.number(),step:a.z.number(),default:a.z.number()}),termLimits:a.z.object({min:a.z.number(),max:a.z.number(),step:a.z.number(),default:a.z.number()}),totalAgeLimit:a.z.number(),residualValueFactorLimits:a.z.array(a.z.object({term:a.z.number(),min:a.z.number(),max:a.z.number()})),residualValueStep:a.z.number(),residualValueDefault:a.z.string(),interestRates:a.z.array(a.z.object({term:a.z.number(),value:a.z.number()}))}).optional(),comfortLeaseProduct:a.z.object({type:a.z.string(),label:a.z.string(),calculationMode:a.z.string(),downPaymentLimits:a.z.object({min:a.z.number(),max:a.z.number(),step:a.z.number(),default:a.z.number()}).strict(),termLimits:a.z.object({min:a.z.number(),max:a.z.number(),step:a.z.number(),default:a.z.number()}).strict(),totalAgeLimit:a.z.number(),annualMileageLimits:a.z.object({min:a.z.number(),max:a.z.number(),step:a.z.number(),default:a.z.number()}).strict(),interestRates:a.z.array(a.z.object({term:a.z.number(),value:a.z.number()})),tarRvMod:a.z.object({id:a.z.number(),tmdate:a.z.string(),accessoryLimit:a.z.number(),rvValue:a.z.number(),brvValue:a.z.number(),rvValueUsed:a.z.number(),brvValueUsed:a.z.number(),carSegmentId:a.z.string()}).strict(),tarRvDev:a.z.object({term:a.z.number(),totalMileage:a.z.number(),rvDev:a.z.number(),rvDevUsed:a.z.number()}).strict()}).strict().optional(),newPrice:a.z.number(),optionsPrice:a.z.number(),accessoriesPrice:a.z.number(),transactionalPrice:a.z.number(),dealer:a.z.object({id:a.z.number(),bunoBMW:a.z.string().optional(),bunoMINI:a.z.string().optional(),bunoMOTORCYCLE:a.z.string().optional(),owner:a.z.string(),ownerName:a.z.string(),name:a.z.string(),legalName:a.z.string(),street:a.z.string(),zip:a.z.string(),city:a.z.string(),lat:a.z.number(),lng:a.z.number()}).strict(),created:a.z.string(),age:a.z.number(),isYUC:a.z.boolean(),reserved:a.z.boolean(),extended:a.z.object({brand:a.z.string(),buno:a.z.string()})}).extend({modelCode:a.z.string().optional(),series:a.z.object({id:a.z.number(),label:a.z.string()}).optional(),seriesCode:a.z.string().optional()}).extend({consumptionElectric:a.z.number().optional(),emissionMeasurementStandard:a.z.string().optional(),electricRange:a.z.number().optional()}).extend({reservationFee:a.z.number().optional(),transactionalPriceUpdated:a.z.string().optional()}).extend({age:a.z.number().optional(),accessoriesPrice:a.z.number().optional(),isYUC:a.z.boolean().optional(),newPrice:a.z.number().optional(),optionsPrice:a.z.number().optional(),registration:a.z.string().optional()}).extend({video:a.z.string().optional()}).strict(),l=a.z.object({$list:i.array(),$count:a.z.object({$total:a.z.number(),genericEquipment:a.z.record(a.z.number())})}),u=a.z.object({meta:a.z.object({currency:a.z.string(),division:a.z.string(),end_date:a.z.string(),end_value:a.z.number(),id:a.z.number(),limit:a.z.number(),name:a.z.string(),next:a.z.string(),offset:a.z.number(),only_full:a.z.boolean(),previous:a.z.null(),roi:a.z.number(),start_date:a.z.string(),start_value:a.z.number(),synthetic_value_to:a.z.null(),total_count:a.z.number()}),objects:a.z.array(a.z.object({date:a.z.string(),roi:a.z.number(),unit:a.z.string(),value:a.z.number()}))}),c=a.z.object({Url:a.z.string(),ThumbnailUrl:a.z.string(),UrlTemplate:a.z.string().nullable()}),s=a.z.object({Id:a.z.string(),Price:a.z.number(),OldPrice:a.z.number(),PromotionGainText:a.z.string(),PromotionGainTextLines:a.z.string().array(),PromotionGainValue:a.z.number(),PromotionTotalCount:a.z.number(),SaleCount:a.z.number(),MaxBuyCount:a.z.number(),PromotionName:a.z.string(),PromotionEnd:a.z.string(),PromotionPhoto:c,Product:a.z.object({AvailabilityStatus:a.z.enum(["Available","Unavailable"]),IsEsd:a.z.boolean(),Name:a.z.string(),MainPhoto:c,Price:a.z.number(),ProducerCode:a.z.string(),Producer:a.z.object({Id:a.z.string(),Name:a.z.string()}),ProductDescription:a.z.string(),WebUrl:a.z.string()})}),m=a.z.object({Message:a.z.string()}),p=a.z.union([m,s]),b=r(42);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?z(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===d(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=a.z.object({list:a.z.object({name:a.z.string(),desc:a.z.string(),href:a.z.string(),code:a.z.string().optional()}).array()}),v=a.z.object({id:a.z.number(),name:a.z.string(),url:a.z.string(),photo:a.z.string(),rate:a.z.number(),rate_count:a.z.number(),price:a.z.number(),previous_price:a.z.number(),filter_values:a.z.array(a.z.string()),popularity:a.z.number(),mark:a.z.string()}),w=a.z.object({data:a.z.object({filters:a.z.object({id:a.z.number(),name:a.z.string(),position:a.z.number(),type:a.z.enum(["availability","custom","price","producer"]),values:a.z.object({count:a.z.number(),id:a.z.number(),name:a.z.string(),position:a.z.number()}).array(),view:a.z.enum(["select","range"])}).array(),general:a.z.object({date_start:a.z.string(),date_start_utc:a.z.string(),date_stop:a.z.string(),date_stop_utc:a.z.string(),enabled:a.z.boolean(),id:a.z.number(),name:a.z.string(),url:a.z.string()}),products:v.array(),seo:a.z.object({description:a.z.string(),keywords:a.z.string(),robots:a.z.string(),title:a.z.string()}).or(a.z.array(a.z.object({_trap:a.z.string()})))}),message:a.z.enum(["success"])}),j=a.z.object({code:a.z.string(),units:a.z.number(),buy:a.z.string(),sell:a.z.string(),spread:a.z.string(),date:a.z.string(),time:a.z.string()}),O=a.z.object({date:a.z.string(),rates:a.z.record(j.array()),range:a.z.object({minRateDate:a.z.string(),maxRateDate:a.z.string()})}),E=a.z.object({station_id:a.z.number(),x:a.z.number(),y:a.z.number(),network_id:a.z.number(),network_name:a.z.string(),map_img:a.z.string()}).array(),k=a.z.object({html:a.z.string()}).transform((function(t){var e,r,n=t.html;return e=(0,b.parse)(n),a.z.object({address:a.z.string(),petrol_list:a.z.object({type:a.z.string(),price:a.z.string()}).array()}).parse({address:null===(r=e.querySelector("div.right-side > a:first-child"))||void 0===r?void 0:r.text,petrol_list:e.querySelectorAll("ul.petrol-list > li").map((function(t){return{type:t.childNodes[0].text,price:t.childNodes[1].text}}))})})),S=a.z.object({props:a.z.object({pageProps:a.z.object({featureFlags:a.z.any().transform((function(){return null})),translations:a.z.any().transform((function(){return null})),tracking:a.z.any().transform((function(){return null})),ad:a.z.object({id:a.z.number(),slug:a.z.string()}).passthrough().optional(),data:a.z.object({searchAds:a.z.object({items:a.z.object({id:a.z.number(),slug:a.z.string()}).array()})}).optional()})}).passthrough()}).passthrough();const x=function(t){var e,r=t.html;return{json:S.parse(JSON.parse((null===(e=(0,b.parse)(r).querySelector("script#__NEXT_DATA__"))||void 0===e?void 0:e.text)||"{}"))}};function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function C(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===_(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var A={AUTOS:"AUTOS",FUNDS:"FUNDS",PROMO:"PROMO",PROMO_ITEM:"PROMO_ITEM",HOTSHOT:"HOTSHOT",HOTSHOT_ALTO:"HOTSHOT_ALTO",OTODOM:"OTODOM",OTODOM_OFFER:"OTODOM_OFFER",RATES:"RATES",STATIONS:"STATIONS",STATION:"STATION"},L=a.z.object({id:a.z.string(),data:a.z.object({url:a.z.string()}),returnvalue:a.z.object({json:a.z.any()})}),N=(a.z.preprocess(a.z.object({id:a.z.string(),data:a.z.object({url:a.z.string()}).passthrough(),returnvalue:a.z.object({html:a.z.any(),json:a.z.any()})}).transform((function(t){var e,r;return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){C(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({type:null===(e=Object.entries((r={},C(r,A.AUTOS,new RegExp("mini.com.pl/nowe/|bmw.pl/nowe/|bmw.pl/uzywane/")),C(r,A.FUNDS,new RegExp("tfi/fund/")),C(r,A.HOTSHOT,new RegExp("x-kom.pl/goracy_strzal")),C(r,A.HOTSHOT_ALTO,new RegExp("al.to/goracy_strzal")),C(r,A.PROMO,new RegExp("x-kom.pl/promocje")),C(r,A.PROMO_ITEM,new RegExp("promocje.x-kom.pl/")),C(r,A.OTODOM,new RegExp("otodom.pl/pl/oferty/")),C(r,A.OTODOM_OFFER,new RegExp("otodom.pl/pl/oferta/")),C(r,A.RATES,new RegExp("pl/rest/rates/")),C(r,A.STATIONS,new RegExp(/stations-get-stations\?zoom=\d/)),C(r,A.STATION,new RegExp(/stations-get-station\?station_id=\d/)),r)).find((function(e){var r,n,o=(n=2,function(t){if(Array.isArray(t))return t}(r=e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(r,n)||function(t,e){if(t){if("string"==typeof t)return T(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(t,e):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return o[0],o[1].test(t.data.url)})))||void 0===e?void 0:e.shift()},t)})).parse,a.z.discriminatedUnion("type",[L.extend({type:a.z.literal(A.AUTOS),data:a.z.object({url:a.z.string()}).extend({body:a.z.object({$match:a.z.object({}).passthrough(),$skip:a.z.number(),$limit:a.z.number()})})}),L.extend({type:a.z.literal(A.FUNDS)}),a.z.object({id:a.z.string(),type:a.z.literal(A.PROMO),data:a.z.object({url:a.z.string()}),returnvalue:a.z.object({html:a.z.string()}).transform((function(t){var e=t.html;return{json:h.parse({list:(0,b.parse)(e).querySelectorAll("h3 + p").map((function(t){return t.parentNode.parentNode})).map((function(t){var e;return{name:t.querySelector("h3").text,desc:t.querySelector("p").text.replace(/\s+\n/,"\n"),href:null===(e=t.querySelector("a[href]"))||void 0===e?void 0:e.getAttribute("href")}})).map((function(t){return y(y({},t),(n=t.desc.match(/Twój kod rabatowy: (.+)/)||[],(e=n,r=2,o=function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,r)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],(a=o[1])?{code:a}:{}));var e,r,n,o,a})).slice(0,50)})}}))}).extend({}).passthrough(),L.extend({type:a.z.literal(A.PROMO_ITEM),data:a.z.object({url:a.z.string()}).extend({code:a.z.string().optional(),desc:a.z.string(),href:a.z.string(),name:a.z.string()})}),L.extend({type:a.z.literal(A.HOTSHOT)}),L.extend({type:a.z.literal(A.HOTSHOT_ALTO)}),a.z.object({id:a.z.string(),type:a.z.literal(A.OTODOM),data:a.z.object({url:a.z.string()}),returnvalue:a.z.object({html:a.z.string()}).transform(x)}),a.z.object({id:a.z.string(),type:a.z.literal(A.OTODOM_OFFER),data:a.z.object({url:a.z.string()}),returnvalue:a.z.object({html:a.z.string()}).transform(x)}),L.extend({type:a.z.literal(A.RATES)}),L.extend({type:a.z.literal(A.STATIONS)}),L.extend({type:a.z.literal(A.STATION),data:a.z.object({url:a.z.string()}).extend({x:a.z.number(),y:a.z.number(),station_id:a.z.number(),network_id:a.z.number(),network_name:a.z.string(),map_img:a.z.string()})})])).transform((function(t){return console.log(t),t})),a.z.object({id:a.z.string(),data:a.z.object({url:a.z.string()})})),R=a.z.discriminatedUnion("type",[N.extend({type:a.z.literal(A.AUTOS),returnvalue:a.z.object({json:l})}),N.extend({type:a.z.literal(A.FUNDS),returnvalue:a.z.object({json:u})}),N.extend({type:a.z.literal(A.HOTSHOT),returnvalue:a.z.object({json:p})}),N.extend({type:a.z.literal(A.HOTSHOT_ALTO),returnvalue:a.z.object({json:p})}),N.extend({type:a.z.literal(A.PROMO),returnvalue:a.z.object({json:h})}),N.extend({type:a.z.literal(A.PROMO_ITEM),returnvalue:a.z.object({json:w})}).extend({data:a.z.object({code:a.z.string().optional(),desc:a.z.string(),href:a.z.string(),name:a.z.string()})}),N.extend({type:a.z.literal(A.OTODOM),returnvalue:a.z.object({json:S})}),N.extend({type:a.z.literal(A.OTODOM_OFFER),returnvalue:a.z.object({json:S})}),N.extend({type:a.z.literal(A.RATES),returnvalue:a.z.object({json:O})}),N.extend({type:a.z.literal(A.STATIONS),returnvalue:a.z.object({json:E})}),N.extend({type:a.z.literal(A.STATION),returnvalue:a.z.object({json:k})}).extend({data:a.z.object({x:a.z.number(),y:a.z.number(),station_id:a.z.number(),network_id:a.z.number(),network_name:a.z.string(),map_img:a.z.string()})})]).array(),M=r(9957),D=function(t,e){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:e?JSON.stringify(e):null})};function I(){return n.createElement("fieldset",null,n.createElement("legend",null,"process"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.autocentrum.pl/ac-ajax/stations-get-stations?zoom=6"},opts:{delay:(0,M.seconds)(5)}})}),[])},"stations-get-stations"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.autocentrum.pl/ac-ajax/stations-get-station?station_id=71",station_id:71,x:50.09040739526325,y:19.95947331190109,network_id:34,network_name:"BP",map_img:"/ac-file/station-map-img/593aa6fc592c7ded238b4570/bp.png"},opts:{delay:(0,M.seconds)(5)}})}),[])},"stations-get-station"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://najlepszeoferty.mini.com.pl/nowe/api/v1/ems/mini-new-pl_PL/search",body:{$match:{transactionalPrice:{$min:0,$max:179e4}},$skip:0,$limit:100}},opts:{delay:(0,M.seconds)(5)}})}),[])},"mini.com.pl/nowe"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://najlepszeoferty.bmw.pl/nowe/api/v1/ems/bmw-new-pl_PL/search",body:{$match:{transactionalPrice:{$min:0,$max:179e4}},$skip:0,$limit:100}},opts:{delay:(0,M.seconds)(5)}})}),[])},"bmw.pl/nowe"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/search",body:{$match:{transactionalPrice:{$min:0,$max:179e4}},$skip:0,$limit:100}},opts:{delay:(0,M.seconds)(5)}})}),[])},"bmw.pl/uzywane"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.pkotfi.pl/_ajax/rest/v2/tfi/fund/2/values/?format=json&division=daily"},opts:{delay:(0,M.seconds)(5)}})}),[])},"tfi/fund/2"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.rbinternational.com.pl/rest/rates/?type=kursywalut&range=all"},opts:{delay:(0,M.seconds)(5)}})}),[])},"rest/rates"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dzialka/warszawa?limit=72&page=1"},opts:{delay:(0,M.seconds)(5)}})}),[])},"dzialka/warszawa"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dom/warszawa?limit=72&page=1"},opts:{delay:(0,M.seconds)(5)}})}),[])},"dom/warszawa"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dom/komorow_5600?limit=72&page=1"},opts:{delay:(0,M.seconds)(5)}})}),[])},"dom/komorow_5600"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dom/michalowice_62659?limit=72&page=1"},opts:{delay:(0,M.seconds)(5)}})}),[])},"dom/michalowice_62659"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.x-kom.pl/promocje"},opts:{delay:(0,M.seconds)(5)}})}),[])},"x-kom.pl/promocje"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.x-kom.pl/goracy_strzal"},opts:{delay:(0,M.seconds)(5)}})}),[])},"x-kom.pl/goracy_strzal"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.al.to/goracy_strzal"},opts:{delay:(0,M.seconds)(5)}})}),[])},"al.to/goracy_strzal"))}function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function $(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){H(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function H(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==U(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===U(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function G(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(t,e)||q(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(t,e){if(t){if("string"==typeof t)return V(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?V(t,e):void 0}}function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Y(){var t,e=G((0,n.useState)((function(){return{start:0,limit:10,type:"",data:!1,returnvalue:!0}})),2),r=e[0],o=e[1],i=G((0,n.useState)((function(){return{type:[""].concat(Object.values(A))}})),1)[0],l=G((0,n.useState)([]),2),u=l[0],c=l[1],s=G((0,n.useState)((function(){return[]})),2),m=s[0],p=s[1],b=(0,n.useCallback)((function(t){var e=t.target;return p((function(t){return e.checked?t.concat(e.value):t.filter((function(t){return t!==e.value}))}))}),[]);return n.createElement("fieldset",null,n.createElement("legend",null,"entries"),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"start"),n.createElement("select",{value:r.start,onChange:(0,n.useCallback)((function(t){var e=t.target;return o((function(t){return $($({},t),{},{start:Number(e.value)})}))}),[])},(t=Array(10),function(t){if(Array.isArray(t))return V(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||q(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t,e){return e*r.limit})).map((function(t){return n.createElement("option",{key:t,value:t},t)})))),n.createElement("label",null,n.createElement("span",null,"limit"),n.createElement("select",{value:r.limit,onChange:(0,n.useCallback)((function(t){var e=t.target;return o((function(t){return $($({},t),{},{start:0,limit:Number(e.value)})}))}),[])},[5,10,50,100,500].map((function(t){return n.createElement("option",{key:t,value:t},t)})))),n.createElement("label",null,n.createElement("span",null,"type"),n.createElement("select",{value:r.type,onChange:(0,n.useCallback)((function(t){var e=t.target;return o((function(t){return $($({},t),{},{type:e.value})}))}),[])},i.type.map((function(t){return n.createElement("option",{key:t,value:t},t)})))),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("entries",r).then((function(t){return t.json()})).then(r.data?a.z.any({}).array().parseAsync:R.parseAsync).then(c).then((function(){return p([])}))}),[r])},"entries"),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:r.data,onChange:(0,n.useCallback)((function(t){var e=t.target;return o((function(t){return $($({},t),{},{data:e.checked})}))}),[])}),n.createElement("span",null,"data")),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:r.returnvalue,onChange:(0,n.useCallback)((function(t){var e=t.target;return o((function(t){return $($({},t),{},{returnvalue:e.checked})}))}),[])}),n.createElement("span",null,"returnvalue"))),n.createElement("div",null,n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:u.length>0&&m.length===u.length,disabled:0===u.length,onChange:(0,n.useCallback)((function(t){var e=t.target;return p(e.checked?u.map((function(t){return t.id})):[])}),[u])})),n.createElement("span",null,"".concat(m.length," / ").concat(u.length))," ",n.createElement("button",{disabled:0===m.length,onClick:(0,n.useCallback)((function(){return D("entries/delete",{selected:m}).then((function(t){return t.json()})).then((function(){return c((function(t){return t.filter((function(t){var e=t.id;return!m.includes(e)}))}))})).then((function(){return p([])}))}),[m])},"delete")),u.map((function(t){return n.createElement("div",{key:t.id},n.createElement("div",null,n.createElement("label",null,n.createElement("input",{type:"checkbox",value:t.id,checked:m.includes(t.id),onChange:b}),n.createElement("span",null,t.id))," ","| ",n.createElement("a",{href:"entry/".concat(t.id)},"item")," |"," ",n.createElement("a",{href:"json/".concat(t.id)},"json")," |"," ",n.createElement("a",{href:"html/".concat(t.id)},"html")," |"," ",n.createElement("a",{href:"delete/".concat(t.id)},"delete")),n.createElement("pre",null,JSON.stringify(t,null,2)))})))}function B(){return n.createElement("fieldset",null,n.createElement("legend",null,"delayed"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.autocentrum.pl/ac-ajax/stations-get-stations?zoom=6"},opts:{repeat:{cron:"0 11,19 * * *"}}})}),[])},"stations-get-stations"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.rbinternational.com.pl/rest/rates/?type=kursywalut&range=all"},opts:{repeat:{cron:"15 8 * * *"}}})}),[])},"rest/rates"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dzialka/warszawa?limit=72&page=1"},opts:{repeat:{cron:"30 * * * *"}}})}),[])},"dzialka/warszawa"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dom/warszawa?limit=72&page=1"},opts:{repeat:{cron:"0 * * * *"}}})}),[])},"dom/warszawa"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.x-kom.pl/promocje"},opts:{repeat:{cron:"1 8,20 * * *"}}})}),[])},"x-kom.pl/promocje"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.x-kom.pl/goracy_strzal"},opts:{repeat:{cron:"1 10,22 * * *"}}})}),[])},"x-kom.pl/goracy_strzal"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.al.to/goracy_strzal"},opts:{repeat:{cron:"1 9,21 * * *"}}})}),[])},"al.to/goracy_strzal"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("cleanup")}),[])},"cleanupRepeatable"))}function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function W(){W=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function c(t,e,r,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),l=new k(o||[]);return n(i,"_invoke",{value:w(t,r,l)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var m={};function p(){}function b(){}function d(){}var f={};u(f,a,(function(){return this}));var z=Object.getPrototypeOf,y=z&&z(z(S([])));y&&y!==e&&r.call(y,a)&&(f=y);var g=d.prototype=p.prototype=Object.create(f);function h(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function v(t,e){function o(n,a,i,l){var u=s(t[n],t,a);if("throw"!==u.type){var c=u.arg,m=c.value;return m&&"object"==J(m)&&r.call(m,"__await")?e.resolve(m.__await).then((function(t){o("next",t,i,l)}),(function(t){o("throw",t,i,l)})):e.resolve(m).then((function(t){c.value=t,i(c)}),(function(t){return o("throw",t,i,l)}))}l(u.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function w(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=j(i,r);if(l){if(l===m)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return b.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:b,configurable:!0}),b.displayName=u(d,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,l,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},h(v.prototype),u(v.prototype,i,(function(){return this})),t.AsyncIterator=v,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new v(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},h(g),u(g,l,"Generator"),u(g,a,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}function K(t,e,r,n,o,a,i){try{var l=t[a](i),u=l.value}catch(t){return void r(t)}l.done?e(u):Promise.resolve(u).then(n,o)}var X=(0,o.k)(function(){var t,e=(t=W().mark((function t(e){var r;return W().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/data.json?".concat(e));case 2:return r=t.sent,t.next=5,r.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){K(a,n,o,i,l,"next",t)}function l(t){K(a,n,o,i,l,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}());function Q(t){var e=t.version,r=void 0===e?1:e,o=X.read(r);return n.createElement("section",null,n.createElement("h2",null,"Hello"),n.createElement("pre",null,JSON.stringify(o,null,2)),n.createElement(I,null),n.createElement(B,null),n.createElement(Y,null))}}}]);