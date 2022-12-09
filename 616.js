/*! For license information please see 616.js.LICENSE.txt */
"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[616],{3616:(e,t,r)=>{r.r(t),r.d(t,{default:()=>te});var n=r(2784),o=r(357),a=r(195),i=a.z.object({id:a.z.number(),vin17:a.z.string(),type:a.z.string(),isNew:a.z.boolean(),modelCode:a.z.string(),title:a.z.string(),brand:a.z.object({id:a.z.number(),label:a.z.string()}),series:a.z.object({id:a.z.number(),label:a.z.string()}),bodyType:a.z.object({id:a.z.number(),label:a.z.string()}),seriesCode:a.z.string(),productionYear:a.z.number(),mileage:a.z.number().optional(),fuel:a.z.object({id:a.z.number(),label:a.z.string()}),consumptionFuel:a.z.number().optional(),emission:a.z.number().optional(),emissionStandard:a.z.object({id:a.z.number(),label:a.z.string()}),powerKW:a.z.number(),powerHP:a.z.number(),capacity:a.z.number().optional(),transmission:a.z.object({id:a.z.number(),label:a.z.string()}),color:a.z.object({labelEN:a.z.string().optional(),code:a.z.string(),id:a.z.number(),label:a.z.string()}).strict(),images:a.z.number(),imagesLastChanged:a.z.string().optional(),panoramas:a.z.number(),panoramasLastChanged:a.z.string().optional(),exterior360:a.z.boolean(),interior360:a.z.boolean(),warranty:a.z.number(),usedBrand:a.z.boolean(),reservable:a.z.boolean(),reservationStatus:a.z.string().optional(),vatReclaimable:a.z.boolean(),leasable:a.z.boolean(),leaseProduct:a.z.object({type:a.z.string(),label:a.z.string(),downPaymentLimits:a.z.object({min:a.z.number(),max:a.z.number(),step:a.z.number(),default:a.z.number()}),termLimits:a.z.object({min:a.z.number(),max:a.z.number(),step:a.z.number(),default:a.z.number()}),totalAgeLimit:a.z.number(),residualValueFactorLimits:a.z.array(a.z.object({term:a.z.number(),min:a.z.number(),max:a.z.number()})),residualValueStep:a.z.number(),residualValueDefault:a.z.string(),interestRates:a.z.array(a.z.object({term:a.z.number(),value:a.z.number()}))}).optional(),comfortLeaseProduct:a.z.object({type:a.z.string(),label:a.z.string(),calculationMode:a.z.string(),downPaymentLimits:a.z.object({min:a.z.number(),max:a.z.number(),step:a.z.number(),default:a.z.number()}).strict(),termLimits:a.z.object({min:a.z.number(),max:a.z.number(),step:a.z.number(),default:a.z.number()}).strict(),totalAgeLimit:a.z.number(),annualMileageLimits:a.z.object({min:a.z.number(),max:a.z.number(),step:a.z.number(),default:a.z.number()}).strict(),interestRates:a.z.array(a.z.object({term:a.z.number(),value:a.z.number()})),tarRvMod:a.z.object({id:a.z.number(),tmdate:a.z.string(),accessoryLimit:a.z.number(),rvValue:a.z.number(),brvValue:a.z.number(),rvValueUsed:a.z.number(),brvValueUsed:a.z.number(),carSegmentId:a.z.string()}).strict(),tarRvDev:a.z.object({term:a.z.number(),totalMileage:a.z.number(),rvDev:a.z.number(),rvDevUsed:a.z.number()}).strict()}).strict().optional(),newPrice:a.z.number(),optionsPrice:a.z.number(),accessoriesPrice:a.z.number(),transactionalPrice:a.z.number(),dealer:a.z.object({id:a.z.number(),bunoBMW:a.z.string().optional(),bunoMINI:a.z.string().optional(),bunoMOTORCYCLE:a.z.string().optional(),owner:a.z.string(),ownerName:a.z.string(),name:a.z.string(),legalName:a.z.string(),street:a.z.string(),zip:a.z.string(),city:a.z.string(),lat:a.z.number(),lng:a.z.number()}).strict(),created:a.z.string(),age:a.z.number(),isYUC:a.z.boolean(),reserved:a.z.boolean(),extended:a.z.object({brand:a.z.string(),buno:a.z.string()})}).extend({modelCode:a.z.string().optional(),series:a.z.object({id:a.z.number(),label:a.z.string()}).optional(),seriesCode:a.z.string().optional()}).extend({consumptionElectric:a.z.number().optional(),emissionMeasurementStandard:a.z.string().optional(),electricRange:a.z.number().optional()}).extend({reservationFee:a.z.number().optional(),transactionalPriceUpdated:a.z.string().optional()}).extend({age:a.z.number().optional(),accessoriesPrice:a.z.number().optional(),isYUC:a.z.boolean().optional(),newPrice:a.z.number().optional(),optionsPrice:a.z.number().optional(),registration:a.z.string().optional()}).extend({video:a.z.string().optional()}).strict(),l=a.z.object({$list:i.array(),$count:a.z.object({$total:a.z.number(),genericEquipment:a.z.record(a.z.number())})}),u=a.z.object({meta:a.z.object({currency:a.z.string(),division:a.z.string(),end_date:a.z.string(),end_value:a.z.number(),id:a.z.number(),limit:a.z.number(),name:a.z.string(),next:a.z.string(),offset:a.z.number(),only_full:a.z.boolean(),previous:a.z.null(),roi:a.z.number(),start_date:a.z.string(),start_value:a.z.number(),synthetic_value_to:a.z.null(),total_count:a.z.number()}),objects:a.z.array(a.z.object({date:a.z.string(),roi:a.z.number(),unit:a.z.string(),value:a.z.number()}))}),c=a.z.object({Url:a.z.string(),ThumbnailUrl:a.z.string(),UrlTemplate:a.z.string().nullable()}),s=a.z.object({Id:a.z.string(),Price:a.z.number(),OldPrice:a.z.number(),PromotionGainText:a.z.string(),PromotionGainTextLines:a.z.string().array(),PromotionGainValue:a.z.number(),PromotionTotalCount:a.z.number(),SaleCount:a.z.number(),MaxBuyCount:a.z.number(),PromotionName:a.z.string(),PromotionEnd:a.z.string(),PromotionPhoto:c,Product:a.z.object({AvailabilityStatus:a.z.enum(["Available","Unavailable"]),IsEsd:a.z.boolean(),Name:a.z.string(),MainPhoto:c,Price:a.z.number(),ProducerCode:a.z.string(),Producer:a.z.object({Id:a.z.string(),Name:a.z.string()}),ProductDescription:a.z.string(),WebUrl:a.z.string()})}),m=a.z.object({Message:a.z.string()}),p=a.z.union([m,s]),b=r(42);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===d(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=a.z.object({list:a.z.object({name:a.z.string(),desc:a.z.string(),href:a.z.string(),code:a.z.string().optional()}).array()}),v=a.z.object({id:a.z.number(),name:a.z.string(),url:a.z.string(),photo:a.z.string(),rate:a.z.number(),rate_count:a.z.number(),price:a.z.number(),previous_price:a.z.number(),filter_values:a.z.array(a.z.string()),popularity:a.z.number(),mark:a.z.string()}),w=a.z.object({data:a.z.object({filters:a.z.object({id:a.z.number(),name:a.z.string(),position:a.z.number(),type:a.z.enum(["availability","custom","price","producer"]),values:a.z.object({count:a.z.number(),id:a.z.number(),name:a.z.string(),position:a.z.number()}).array(),view:a.z.enum(["select","range"])}).array(),general:a.z.object({date_start:a.z.string(),date_start_utc:a.z.string(),date_stop:a.z.string(),date_stop_utc:a.z.string(),enabled:a.z.boolean(),id:a.z.number(),name:a.z.string(),url:a.z.string()}),products:v.array(),seo:a.z.object({description:a.z.string(),keywords:a.z.string(),robots:a.z.string(),title:a.z.string()}).or(a.z.array(a.z.object({_trap:a.z.string()})))}),message:a.z.enum(["success"])}),j=a.z.object({code:a.z.string(),units:a.z.number(),buy:a.z.string(),sell:a.z.string(),spread:a.z.string(),date:a.z.string(),time:a.z.string()}),O=a.z.object({date:a.z.string(),rates:a.z.record(j.array()),range:a.z.object({minRateDate:a.z.string(),maxRateDate:a.z.string()})}),E=a.z.object({station_id:a.z.number(),x:a.z.number(),y:a.z.number(),network_id:a.z.number(),network_name:a.z.string(),map_img:a.z.string()}).array(),k=a.z.object({html:a.z.string()}).transform((function(e){var t,r,n=e.html;return t=(0,b.parse)(n),a.z.object({address:a.z.string(),petrol_list:a.z.object({type:a.z.string(),price:a.z.string()}).array()}).parse({address:null===(r=t.querySelector("div.right-side > a:first-child"))||void 0===r?void 0:r.text,petrol_list:t.querySelectorAll("ul.petrol-list > li").map((function(e){return{type:e.childNodes[0].text,price:e.childNodes[1].text}}))})})),S=a.z.object({props:a.z.object({pageProps:a.z.object({featureFlags:a.z.any().transform((function(){return null})),translations:a.z.any().transform((function(){return null})),tracking:a.z.any().transform((function(){return null})),ad:a.z.object({id:a.z.number(),slug:a.z.string()}).passthrough().optional(),data:a.z.object({searchAds:a.z.object({items:a.z.object({id:a.z.number(),slug:a.z.string()}).array()})}).optional()})}).passthrough()}).passthrough();const x=function(e){var t,r=e.html;return{json:S.parse(JSON.parse((null===(t=(0,b.parse)(r).querySelector("script#__NEXT_DATA__"))||void 0===t?void 0:t.text)||"{}"))}};function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==T(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===T(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A={AUTOS:"AUTOS",FUNDS:"FUNDS",PROMO:"PROMO",PROMO_ITEM:"PROMO_ITEM",HOTSHOT:"HOTSHOT",HOTSHOT_ALTO:"HOTSHOT_ALTO",OTODOM:"OTODOM",OTODOM_OFFER:"OTODOM_OFFER",RATES:"RATES",STATIONS:"STATIONS",STATION:"STATION"},L=a.z.object({id:a.z.string(),data:a.z.object({url:a.z.string()}),returnvalue:a.z.object({json:a.z.any()})}),N=(a.z.preprocess(a.z.object({id:a.z.string(),data:a.z.object({url:a.z.string()}).passthrough(),returnvalue:a.z.object({html:a.z.any(),json:a.z.any()})}).transform((function(e){var t,r;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({type:null===(t=Object.entries((r={},C(r,A.AUTOS,new RegExp("mini.com.pl/nowe/|bmw.pl/nowe/|bmw.pl/uzywane/")),C(r,A.FUNDS,new RegExp("tfi/fund/")),C(r,A.HOTSHOT,new RegExp("x-kom.pl/goracy_strzal")),C(r,A.HOTSHOT_ALTO,new RegExp("al.to/goracy_strzal")),C(r,A.PROMO,new RegExp("x-kom.pl/promocje")),C(r,A.PROMO_ITEM,new RegExp("promocje.x-kom.pl/")),C(r,A.OTODOM,new RegExp("otodom.pl/pl/oferty/")),C(r,A.OTODOM_OFFER,new RegExp("otodom.pl/pl/oferta/")),C(r,A.RATES,new RegExp("pl/rest/rates/")),C(r,A.STATIONS,new RegExp(/stations-get-stations\?zoom=\d/)),C(r,A.STATION,new RegExp(/stations-get-station\?station_id=\d/)),r)).find((function(t){var r,n,o=(n=2,function(e){if(Array.isArray(e))return e}(r=t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(r,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return o[0],o[1].test(e.data.url)})))||void 0===t?void 0:t.shift()},e)})).parse,a.z.discriminatedUnion("type",[L.extend({type:a.z.literal(A.AUTOS),data:a.z.object({url:a.z.string()}).extend({body:a.z.object({$match:a.z.object({}).passthrough(),$skip:a.z.number(),$limit:a.z.number()})})}),L.extend({type:a.z.literal(A.FUNDS)}),a.z.object({id:a.z.string(),type:a.z.literal(A.PROMO),data:a.z.object({url:a.z.string()}),returnvalue:a.z.object({html:a.z.string()}).transform((function(e){var t=e.html;return{json:h.parse({list:(0,b.parse)(t).querySelectorAll("h3 + p").map((function(e){return e.parentNode.parentNode})).map((function(e){var t;return{name:e.querySelector("h3").text,desc:e.querySelector("p").text.replace(/\s+\n/,"\n"),href:null===(t=e.querySelector("a[href]"))||void 0===t?void 0:t.getAttribute("href")}})).map((function(e){return y(y({},e),(n=e.desc.match(/Twój kod rabatowy: (.+)/)||[],(t=n,r=2,o=function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(t,r)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],(a=o[1])?{code:a}:{}));var t,r,n,o,a})).slice(0,50)})}}))}).extend({}).passthrough(),L.extend({type:a.z.literal(A.PROMO_ITEM),data:a.z.object({url:a.z.string()}).extend({code:a.z.string().optional(),desc:a.z.string(),href:a.z.string(),name:a.z.string()})}),L.extend({type:a.z.literal(A.HOTSHOT)}),L.extend({type:a.z.literal(A.HOTSHOT_ALTO)}),a.z.object({id:a.z.string(),type:a.z.literal(A.OTODOM),data:a.z.object({url:a.z.string()}),returnvalue:a.z.object({html:a.z.string()}).transform(x)}),a.z.object({id:a.z.string(),type:a.z.literal(A.OTODOM_OFFER),data:a.z.object({url:a.z.string()}),returnvalue:a.z.object({html:a.z.string()}).transform(x)}),L.extend({type:a.z.literal(A.RATES)}),L.extend({type:a.z.literal(A.STATIONS)}),L.extend({type:a.z.literal(A.STATION),data:a.z.object({url:a.z.string()}).extend({x:a.z.number(),y:a.z.number(),station_id:a.z.number(),network_id:a.z.number(),network_name:a.z.string(),map_img:a.z.string()})})])).transform((function(e){return console.log(e),e})),a.z.object({id:a.z.string(),data:a.z.object({url:a.z.string()})})),M=a.z.discriminatedUnion("type",[N.extend({type:a.z.literal(A.AUTOS),returnvalue:a.z.object({json:l})}),N.extend({type:a.z.literal(A.FUNDS),returnvalue:a.z.object({json:u})}),N.extend({type:a.z.literal(A.HOTSHOT),returnvalue:a.z.object({json:p})}),N.extend({type:a.z.literal(A.HOTSHOT_ALTO),returnvalue:a.z.object({json:p})}),N.extend({type:a.z.literal(A.PROMO),returnvalue:a.z.object({json:h})}),N.extend({type:a.z.literal(A.PROMO_ITEM),returnvalue:a.z.object({json:w})}).extend({data:a.z.object({code:a.z.string().optional(),desc:a.z.string(),href:a.z.string(),name:a.z.string()})}),N.extend({type:a.z.literal(A.OTODOM),returnvalue:a.z.object({json:S})}),N.extend({type:a.z.literal(A.OTODOM_OFFER),returnvalue:a.z.object({json:S})}),N.extend({type:a.z.literal(A.RATES),returnvalue:a.z.object({json:O})}),N.extend({type:a.z.literal(A.STATIONS),returnvalue:a.z.object({json:E})}),N.extend({type:a.z.literal(A.STATION),returnvalue:a.z.object({json:k})}).extend({data:a.z.object({x:a.z.number(),y:a.z.number(),station_id:a.z.number(),network_id:a.z.number(),network_name:a.z.string(),map_img:a.z.string()})})]).array(),R=a.z.object({id:a.z.string(),name:a.z.string(),data:a.z.object({url:a.z.string()}).passthrough(),opts:a.z.object({repeat:a.z.object({count:a.z.number(),key:a.z.string(),cron:a.z.string()}).strict().optional(),jobId:a.z.string().optional(),delay:a.z.number(),timestamp:a.z.number(),prevMillis:a.z.number().optional(),attempts:a.z.number()}).strict(),progress:a.z.number(),delay:a.z.number(),timestamp:a.z.number(),attemptsMade:a.z.number(),stacktrace:a.z.array(a.z.unknown()),returnvalue:a.z.null(),finishedOn:a.z.null(),processedOn:a.z.null()}).strict().array(),I=r(9957),D=function(e,t){return fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:t?JSON.stringify(t):null})};function U(){return n.createElement("fieldset",null,n.createElement("legend",null,"process"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.autocentrum.pl/ac-ajax/stations-get-stations?zoom=6"},opts:{delay:(0,I.seconds)(5)}})}),[])},"stations-get-stations"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.autocentrum.pl/ac-ajax/stations-get-station?station_id=71",station_id:71,x:50.09040739526325,y:19.95947331190109,network_id:34,network_name:"BP",map_img:"/ac-file/station-map-img/593aa6fc592c7ded238b4570/bp.png"},opts:{delay:(0,I.seconds)(5)}})}),[])},"stations-get-station"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://najlepszeoferty.mini.com.pl/nowe/api/v1/ems/mini-new-pl_PL/search",body:{$match:{transactionalPrice:{$min:0,$max:179e4}},$skip:0,$limit:100}},opts:{delay:(0,I.seconds)(5)}})}),[])},"mini.com.pl/nowe"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://najlepszeoferty.bmw.pl/nowe/api/v1/ems/bmw-new-pl_PL/search",body:{$match:{transactionalPrice:{$min:0,$max:179e4}},$skip:0,$limit:100}},opts:{delay:(0,I.seconds)(5)}})}),[])},"bmw.pl/nowe"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/search",body:{$match:{transactionalPrice:{$min:0,$max:179e4}},$skip:0,$limit:100}},opts:{delay:(0,I.seconds)(5)}})}),[])},"bmw.pl/uzywane"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.pkotfi.pl/_ajax/rest/v2/tfi/fund/2/values/?format=json&division=daily"},opts:{delay:(0,I.seconds)(5)}})}),[])},"tfi/fund/2"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.rbinternational.com.pl/rest/rates/?type=kursywalut&range=all"},opts:{delay:(0,I.seconds)(5)}})}),[])},"rest/rates"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dzialka/warszawa?limit=72&page=1"},opts:{delay:(0,I.seconds)(5)}})}),[])},"dzialka/warszawa"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dom/warszawa?limit=72&page=1"},opts:{delay:(0,I.seconds)(5)}})}),[])},"dom/warszawa"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dom/komorow_5600?limit=72&page=1"},opts:{delay:(0,I.seconds)(5)}})}),[])},"dom/komorow_5600"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dom/michalowice_62659?limit=72&page=1"},opts:{delay:(0,I.seconds)(5)}})}),[])},"dom/michalowice_62659"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.x-kom.pl/promocje"},opts:{delay:(0,I.seconds)(5)}})}),[])},"x-kom.pl/promocje"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.x-kom.pl/goracy_strzal"},opts:{delay:(0,I.seconds)(5)}})}),[])},"x-kom.pl/goracy_strzal"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.al.to/goracy_strzal"},opts:{delay:(0,I.seconds)(5)}})}),[])},"al.to/goracy_strzal"))}function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){G(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==$(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==$(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===$(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||V(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){if(e){if("string"==typeof e)return Y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(e,t):void 0}}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function J(){var e,t=q((0,n.useState)((function(){return{start:0,limit:10,type:"",data:!1,returnvalue:!0}})),2),r=t[0],o=t[1],i=q((0,n.useState)((function(){return{type:[""].concat(Object.values(A))}})),1)[0],l=q((0,n.useState)([]),2),u=l[0],c=l[1],s=q((0,n.useState)((function(){return[]})),2),m=s[0],p=s[1],b=(0,n.useCallback)((function(e){var t=e.target;return p((function(e){return t.checked?e.concat(t.value):e.filter((function(e){return e!==t.value}))}))}),[]);return n.createElement("fieldset",null,n.createElement("legend",null,"entries"),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"start"),n.createElement("select",{value:r.start,onChange:(0,n.useCallback)((function(e){var t=e.target;return o((function(e){return H(H({},e),{},{start:Number(t.value)})}))}),[])},(e=Array(10),function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||V(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e,t){return t*r.limit})).map((function(e){return n.createElement("option",{key:e,value:e},e)})))),n.createElement("label",null,n.createElement("span",null,"limit"),n.createElement("select",{value:r.limit,onChange:(0,n.useCallback)((function(e){var t=e.target;return o((function(e){return H(H({},e),{},{start:0,limit:Number(t.value)})}))}),[])},[5,10,50,100,500].map((function(e){return n.createElement("option",{key:e,value:e},e)})))),n.createElement("label",null,n.createElement("span",null,"type"),n.createElement("select",{value:r.type,onChange:(0,n.useCallback)((function(e){var t=e.target;return o((function(e){return H(H({},e),{},{type:t.value})}))}),[])},i.type.map((function(e){return n.createElement("option",{key:e,value:e},e)})))),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("entries",r).then((function(e){return e.json()})).then(r.data?a.z.any({}).array().parseAsync:M.parseAsync).then(c).then((function(){return p([])}))}),[r])},"entries"),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:r.data,onChange:(0,n.useCallback)((function(e){var t=e.target;return o((function(e){return H(H({},e),{},{data:t.checked})}))}),[])}),n.createElement("span",null,"data")),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:r.returnvalue,onChange:(0,n.useCallback)((function(e){var t=e.target;return o((function(e){return H(H({},e),{},{returnvalue:t.checked})}))}),[])}),n.createElement("span",null,"returnvalue"))),n.createElement("div",null,n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:u.length>0&&m.length===u.length,disabled:0===u.length,onChange:(0,n.useCallback)((function(e){var t=e.target;return p(t.checked?u.map((function(e){return e.id})):[])}),[u])})),n.createElement("span",null,"".concat(m.length," / ").concat(u.length))," ",n.createElement("button",{disabled:0===m.length,onClick:(0,n.useCallback)((function(){return D("entries/delete",{selected:m}).then((function(e){return e.json()})).then((function(){return c((function(e){return e.filter((function(e){var t=e.id;return!m.includes(t)}))}))})).then((function(){return p([])}))}),[m])},"delete")),u.map((function(e){return n.createElement("div",{key:e.id},n.createElement("div",null,n.createElement("label",null,n.createElement("input",{type:"checkbox",value:e.id,checked:m.includes(e.id),onChange:b}),n.createElement("span",null,e.id))," ","| ",n.createElement("a",{href:"entry/".concat(e.id)},"item")," |"," ",n.createElement("a",{href:"json/".concat(e.id)},"json")," |"," ",n.createElement("a",{href:"html/".concat(e.id)},"html")," |"," ",n.createElement("a",{href:"delete/".concat(e.id)},"delete")),n.createElement("pre",null,JSON.stringify(e,null,2)))})))}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?W(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function K(){var e=B((0,n.useState)((function(){return[]})),2),t=e[0],r=e[1],o=B((0,n.useState)((function(){return[]})),2),i=o[0],l=o[1];(0,n.useEffect)((function(){D("delayed",{}).then((function(e){return e.json()})).then(R.parseAsync).then(r).then((function(){return l([])}))}),[]);var u=(0,n.useCallback)((function(e){var t=e.target;return l((function(e){return t.checked?e.concat(t.value):e.filter((function(e){return e!==t.value}))}))}),[]);return n.createElement("fieldset",null,n.createElement("legend",null,"delayed"),n.createElement("div",null,n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:t.length>0&&i.length===t.length,disabled:0===t.length,onChange:(0,n.useCallback)((function(e){var r=e.target;return l(r.checked?t.map((function(e){return e.id})):[])}),[t])})),n.createElement("span",null,"".concat(i.length," / ").concat(t.length))," ",n.createElement("button",{disabled:0===i.length,onClick:(0,n.useCallback)((function(){return D("entries/delete",{selected:i}).then((function(e){return e.json()})).then((function(){return r((function(e){return e.filter((function(e){var t=e.id;return!i.includes(t)}))}))})).then((function(){return l([])}))}),[i])},"delete")),t.map((function(e){return n.createElement("div",{key:e.id},n.createElement("div",null,n.createElement("label",null,n.createElement("input",{type:"checkbox",value:e.id,checked:i.includes(e.id),onChange:u}),n.createElement("span",null,e.id))," ","| ",n.createElement("a",{href:"delete/".concat(e.id)},"delete")),n.createElement("pre",null,JSON.stringify(a.z.object({id:a.z.string(),name:a.z.string(),data:a.z.any()}).parse(e),null,2)))})),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.autocentrum.pl/ac-ajax/stations-get-stations?zoom=6"},opts:{repeat:{cron:"0 11,19 * * *"}}})}),[])},"stations-get-stations"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.rbinternational.com.pl/rest/rates/?type=kursywalut&range=all"},opts:{repeat:{cron:"15 8 * * *"}}})}),[])},"rest/rates"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dzialka/warszawa?limit=72&page=1"},opts:{repeat:{cron:"30 * * * *"}}})}),[])},"dzialka/warszawa"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.otodom.pl/pl/oferty/sprzedaz/dom/warszawa?limit=72&page=1"},opts:{repeat:{cron:"0 * * * *"}}})}),[])},"dom/warszawa"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.x-kom.pl/promocje"},opts:{repeat:{cron:"1 8,20 * * *"}}})}),[])},"x-kom.pl/promocje"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.x-kom.pl/goracy_strzal"},opts:{repeat:{cron:"1 10,22 * * *"}}})}),[])},"x-kom.pl/goracy_strzal"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("process",{data:{url:"https://www.al.to/goracy_strzal"},opts:{repeat:{cron:"1 9,21 * * *"}}})}),[])},"al.to/goracy_strzal"),n.createElement("button",{onClick:(0,n.useCallback)((function(){return D("cleanup")}),[])},"cleanupRepeatable"))}function X(e){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(e)}function Q(){Q=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,o){var a=t&&t.prototype instanceof p?t:p,i=Object.create(a.prototype),l=new k(o||[]);return n(i,"_invoke",{value:w(e,r,l)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var m={};function p(){}function b(){}function d(){}var f={};u(f,a,(function(){return this}));var z=Object.getPrototypeOf,y=z&&z(z(S([])));y&&y!==t&&r.call(y,a)&&(f=y);var g=d.prototype=p.prototype=Object.create(f);function h(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function v(e,t){function o(n,a,i,l){var u=s(e[n],e,a);if("throw"!==u.type){var c=u.arg,m=c.value;return m&&"object"==X(m)&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){o("next",e,i,l)}),(function(e){o("throw",e,i,l)})):t.resolve(m).then((function(e){c.value=e,i(c)}),(function(e){return o("throw",e,i,l)}))}l(u.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function w(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=j(i,r);if(l){if(l===m)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=s(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,m;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return b.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:b,configurable:!0}),b.displayName=u(d,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,u(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},h(v.prototype),u(v.prototype,i,(function(){return this})),e.AsyncIterator=v,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new v(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},h(g),u(g,l,"Generator"),u(g,a,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}function Z(e,t,r,n,o,a,i){try{var l=e[a](i),u=l.value}catch(e){return void r(e)}l.done?t(u):Promise.resolve(u).then(n,o)}var ee=(0,o.k)(function(){var e,t=(e=Q().mark((function e(t){var r;return Q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/data.json?".concat(t));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){Z(a,n,o,i,l,"next",e)}function l(e){Z(a,n,o,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}());function te(e){var t=e.version,r=void 0===t?1:t,o=ee.read(r);return n.createElement("section",null,n.createElement("h2",null,"Hello"),n.createElement("pre",null,JSON.stringify(o,null,2)),n.createElement(U,null),n.createElement(K,null),n.createElement(J,null))}}}]);