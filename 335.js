"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[335],{9238:(n,e,t)=>{t.d(e,{o:()=>_,U:()=>v});var r=t(4041),o=t(3590),a=t(2591),i=t.n(a),l=t(1740),s=t.n(l),c=t(8128),z=t.n(c),u=t(855),d=t.n(u),b=t(3051),g=t.n(b),f=t(3656),p=t.n(f),m=t(7292),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=z().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=g(),i()(m.A,h),m.A&&m.A.locals&&m.A.locals;var y=t(3771),j=(0,o.vt)({}),v=function(n,e){return j.diff(n,e)};function _(n){var e=n.left,t=n.right,o=v(e,t),a=o&&y.format(o,e);return a?r.createElement("div",{className:"jsondiffpatch-unchanged-hidden",dangerouslySetInnerHTML:{__html:a}}):null}},3335:(n,e,t)=>{t.r(e),t.d(e,{default:()=>y});var r=t(4041),o=t(6333),a=t(9238),i=t(5769);function l(n){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},l(n)}var s=["data"];function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function z(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){u(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e,t){var r;return r=function(n,e){if("object"!=l(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(e),(e="symbol"==l(r)?r:String(r))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function d(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a,i,l=[],s=!0,c=!1;try{if(a=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=a.call(t)).done)&&(l.push(r.value),l.length!==e);s=!0);}catch(n){c=!0,o=n}finally{try{if(!s&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(n,e)||b(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(n,e){if(n){if("string"==typeof n)return g(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(n,e):void 0}}function g(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var f,p=[100].concat((f=Array(5),function(n){if(Array.isArray(n))return g(n)}(f)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(f)||b(f)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(n,e){return 1e3*(e+1)}))),m=(0,o.$)((function(n){return fetch("".concat("","flats?limit=").concat(n)).then((function(n){return n.json()})).then((function(n){return n.result}))})),h=function(n){return fetch("".concat("","flats/delete?id=").concat(n))};function y(){var n=d((0,r.useState)((function(){return{limit:p[0]}})),2),e=n[0],t=n[1],o=m.read(e.limit),l=(0,r.useMemo)((function(){return o.reduce((function(n,e){return Object.assign(n,u({},e.item,(n[e.item]||[]).concat(e)))}),{})}),[o]),c=d((0,r.useState)((function(){return[]})),2),b=c[0],g=c[1],f=(0,r.useCallback)((function(n){var e,t=n.target;return e=Number(t.value),g((function(n){return t.checked?n.concat(e):n.filter((function(n){return n!==e}))}))}),[]);return console.log(z(z({},e),{},{result:o,selected:b})),r.createElement("section",null,r.createElement("h2",null,"Flats"),r.createElement("div",null,r.createElement("label",null,r.createElement("span",null,"limit"),r.createElement("select",{value:String(e.limit),onChange:(0,r.useCallback)((function(n){var e=n.target;return t((function(n){return z(z({},n),{},{limit:Number(e.value)})}))}),[])},p.map((function(n){return r.createElement("option",{key:n,value:String(n)},n)})))),r.createElement("button",{onClick:function(){return g(Object.values(l).flatMap((function(n){return n.reduce((function(n,e,t,r){return t<r.length-1&&void 0===(0,a.U)(i.VW.parse(r[t+1].data),i.VW.parse(e.data))?n.concat(e.id):n}),[])})))}},"select duplicates"),r.createElement("button",{disabled:0===b.length,onClick:function(){return b.reduce((function(n,e){return n.then((function(){return h(e)}))}),Promise.resolve())}},"delete selected (".concat(b.length,")"))),r.createElement("ol",null,Object.entries(l).map((function(n){var e=d(n,2),t=e[0],o=e[1];return r.createElement("li",{key:t},"[",t,"]",r.createElement("ul",null,o.map((function(n,e){return r.createElement("li",{key:n.id},r.createElement("label",null,r.createElement("input",{type:"checkbox",value:n.id,checked:b.includes(n.id),onChange:f}),"[",n.id,"]"),r.createElement("button",{onClick:function(){return h(n.id)}},"delete"),r.createElement("pre",null,JSON.stringify(z({data:{url:(t=n).data.url}},function(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}(t,s)),null,2)),e<o.length-1&&r.createElement(a.o,{left:i.VW.parse(o[e+1].data),right:i.VW.parse(n.data)}));var t}))))}))))}},5769:(n,e,t)=>{t.d(e,{Sj:()=>c,VW:()=>s});var r=t(6195),o=t(9379),a=r.z.object({id:r.z.number(),title:r.z.string(),description:r.z.string(),category:r.z.object({id:r.z.number(),type:r.z.string(),itemType:r.z.string().optional()}),map:r.z.object({zoom:r.z.number(),lat:r.z.number(),lon:r.z.number(),radius:r.z.number(),show_detailed:r.z.boolean()}),isBusiness:r.z.boolean(),url:r.z.string(),isHighlighted:r.z.boolean(),isPromoted:r.z.boolean(),promotion:r.z.object({highlighted:r.z.boolean(),urgent:r.z.boolean(),top_ad:r.z.boolean(),options:r.z.array(r.z.string()),b2c_ad_page:r.z.boolean(),premium_ad_page:r.z.boolean()}),externalUrl:r.z.string().optional(),delivery:r.z.object({rock:r.z.object({offer_id:r.z.null(),active:r.z.boolean(),mode:r.z.string()})}),createdTime:r.z.string(),lastRefreshTime:r.z.string(),pushupTime:r.z.string().optional(),validToTime:r.z.string(),isActive:r.z.boolean(),status:r.z.string(),params:r.z.array(r.z.object({key:r.z.string(),name:r.z.string(),type:r.z.string(),value:r.z.string(),normalizedValue:r.z.string()})),itemCondition:r.z.string(),price:r.z.object({budget:r.z.boolean(),free:r.z.boolean(),exchange:r.z.boolean(),displayValue:r.z.string(),regularPrice:r.z.object({value:r.z.number(),currencyCode:r.z.string(),currencySymbol:r.z.string(),negotiable:r.z.boolean(),priceFormatConfig:r.z.object({decimalSeparator:r.z.string(),thousandsSeparator:r.z.string()})})}),salary:r.z.null(),partner:r.z.object({code:r.z.string()}),isJob:r.z.boolean(),photos:r.z.array(r.z.string()),photosSet:r.z.array(r.z.string()),location:r.z.object({cityName:r.z.string(),cityId:r.z.number(),cityNormalizedName:r.z.string(),regionName:r.z.string(),regionId:r.z.number(),regionNormalizedName:r.z.string(),districtName:r.z.string().nullable(),districtId:r.z.number(),pathName:r.z.string()}),urlPath:r.z.string(),contact:r.z.object({chat:r.z.boolean(),courier:r.z.boolean(),name:r.z.string(),negotiation:r.z.boolean(),phone:r.z.boolean()}),user:r.z.object({id:r.z.number(),name:r.z.string(),photo:r.z.string().nullable(),logo:r.z.string().nullable(),otherAdsEnabled:r.z.boolean(),socialNetworkAccountType:r.z.string().nullable(),isOnline:r.z.boolean(),lastSeen:r.z.string(),about:r.z.string(),bannerDesktopURL:r.z.string(),logo_ad_page:r.z.string().nullable(),company_name:r.z.string(),created:r.z.string(),sellerType:r.z.null(),uuid:r.z.string()}),shop:r.z.object({subdomain:r.z.string().nullable()}),safedeal:r.z.object({weight:r.z.number(),weight_grams:r.z.number(),status:r.z.string(),safedeal_blocked:r.z.boolean(),allowed_quantity:r.z.array(r.z.unknown())}),searchReason:r.z.string(),isNewFavouriteAd:r.z.boolean()}).strict(),i=r.z.object({listing:r.z.object({listing:r.z.object({pageNumber:r.z.number(),totalElements:r.z.number(),visibleElements:r.z.number(),totalPages:r.z.number(),ads:a.array(),metaData:r.z.object({searchId:r.z.string(),spellCheckerQuery:r.z.null(),searchSuggestion:r.z.object({type:r.z.enum(["extended_distance","no_results_distance"]),url:r.z.string(),changes:r.z.object({})}).nullable(),favSearchNewAds:r.z.unknown().array(),location:r.z.null(),facets:r.z.object({district:r.z.object({id:r.z.number(),count:r.z.number(),label:r.z.string(),url:r.z.string()}).array().optional(),category_without_exclusions:r.z.object({id:r.z.number(),count:r.z.number(),label:r.z.string(),url:r.z.string()}).array().optional()}),searchReason:r.z.object({promoted:r.z.number().array().optional(),organic:r.z.number().array().optional()}),subSections:r.z.unknown().array(),search_request_id:r.z.string().optional()}),links:r.z.object({self:r.z.string().optional(),next:r.z.string().optional(),first:r.z.string().optional()}),params:r.z.object({offset:r.z.number(),limit:r.z.number(),category_id:r.z.number(),region_id:r.z.number(),city_id:r.z.number().optional(),filter_refiners:r.z.string(),facets:r.z.string()}),requestParams:r.z.object({page:r.z.number(),categoryPath:r.z.string(),query:r.z.string(),params:r.z.object({}),options:r.z.object({spellCheckerDisabledByExperiment:r.z.boolean(),mWebAdlimitPerPageVariant:r.z.string().optional()})}),categoryId:r.z.number(),categories:r.z.null(),viewType:r.z.string(),expansionListing:r.z.object({pageNumber:r.z.number(),totalElements:r.z.number(),visibleElements:r.z.number(),totalPages:r.z.number(),ads:r.z.object({}).array()}).nullable()}),popularSearches:r.z.unknown().array(),seo:r.z.object({title:r.z.string(),description:r.z.string(),h1:r.z.string(),seoText:r.z.string()}),breadcrumbs:r.z.object({label:r.z.string(),href:r.z.string(),categoryId:r.z.number().optional()}).array(),locationNames:r.z.object({city:r.z.object({id:r.z.number(),name:r.z.string(),normalized_name:r.z.string(),lat:r.z.number(),lon:r.z.number()}).optional(),municipality:r.z.object({name:r.z.string()}).optional(),county:r.z.object({name:r.z.string()}).optional(),region:r.z.object({id:r.z.number(),name:r.z.string(),normalized_name:r.z.string()})}),filters:r.z.object({data:r.z.record(r.z.object({type:r.z.string(),label:r.z.string(),unit:r.z.string().nullable(),scope:r.z.string().nullable(),values:r.z.unknown().array(),options:r.z.object({categories:r.z.array(r.z.number()),order:r.z.number(),orderForSearch:r.z.number(),ranges:r.z.array(r.z.unknown()),constraints:r.z.object({type:r.z.string()}),fakeCategory:r.z.boolean().optional()}).array(),default_value:r.z.string().optional()}).array()),metadata:r.z.object({currencies:r.z.array(r.z.object({code:r.z.string(),symbol:r.z.string(),is_default:r.z.boolean(),prioritized_categories:r.z.unknown().array()})),distances:r.z.array(r.z.object({value:r.z.number(),is_default:r.z.boolean()}))}),headers:r.z.object({"x-request-id":r.z.string()})}),filteredCounts:r.z.number().nullable().array()}),categories:r.z.object({list:r.z.record(o.U),counts:r.z.number().nullable().array(),promos:r.z.array(r.z.object({icon:r.z.object({image_url:r.z.string(),big_image_url:r.z.string()}),name:r.z.string(),link:r.z.object({url:r.z.string(),is_external:r.z.boolean()})}))}),cookies:r.z.object({})}),l=a,s=l.strip().extend({user:l.shape.user.omit({isOnline:!0,lastSeen:!0})}).omit({searchReason:!0}),c=r.z.object({json:i})},9379:(n,e,t)=>{t.d(e,{U:()=>a,S:()=>l});var r=t(6195),o=r.z.object({id:r.z.number(),title:r.z.string(),description:r.z.string(),category:r.z.object({id:r.z.number(),type:r.z.string(),itemType:r.z.string().optional()}),map:r.z.object({zoom:r.z.number(),lat:r.z.number(),lon:r.z.number(),radius:r.z.number(),show_detailed:r.z.boolean()}),isBusiness:r.z.boolean(),url:r.z.string(),isHighlighted:r.z.boolean(),isPromoted:r.z.boolean(),promotion:r.z.object({highlighted:r.z.boolean(),urgent:r.z.boolean(),top_ad:r.z.boolean(),options:r.z.string().array(),b2c_ad_page:r.z.boolean(),premium_ad_page:r.z.boolean()}),delivery:r.z.object({rock:r.z.object({offer_id:r.z.null(),active:r.z.boolean(),mode:r.z.string()})}),createdTime:r.z.string(),lastRefreshTime:r.z.string(),validToTime:r.z.string(),isActive:r.z.boolean(),status:r.z.string(),params:r.z.object({key:r.z.string(),name:r.z.string(),type:r.z.string(),value:r.z.string(),normalizedValue:r.z.string()}).array(),itemCondition:r.z.string(),price:r.z.object({budget:r.z.boolean(),free:r.z.boolean(),exchange:r.z.boolean(),displayValue:r.z.string(),regularPrice:r.z.object({value:r.z.number(),currencyCode:r.z.string(),currencySymbol:r.z.string(),negotiable:r.z.boolean(),priceFormatConfig:r.z.object({decimalSeparator:r.z.string(),thousandsSeparator:r.z.string()})})}),salary:r.z.null(),partner:r.z.object({code:r.z.string()}),isJob:r.z.boolean(),photos:r.z.string().array(),photosSet:r.z.string().array(),location:r.z.object({cityName:r.z.string(),cityId:r.z.number(),cityNormalizedName:r.z.string(),regionName:r.z.string(),regionId:r.z.number(),regionNormalizedName:r.z.string(),districtName:r.z.string().nullable(),districtId:r.z.number(),pathName:r.z.string()}),urlPath:r.z.string(),contact:r.z.object({chat:r.z.boolean(),courier:r.z.boolean(),name:r.z.string(),negotiation:r.z.boolean(),phone:r.z.boolean()}),user:r.z.object({id:r.z.number(),name:r.z.string(),photo:r.z.string().nullable(),logo:r.z.string().nullable(),otherAdsEnabled:r.z.boolean(),socialNetworkAccountType:r.z.string().nullable(),isOnline:r.z.boolean(),lastSeen:r.z.string(),about:r.z.string(),bannerDesktopURL:r.z.string(),logo_ad_page:r.z.string().nullable(),company_name:r.z.string(),created:r.z.string(),sellerType:r.z.null(),uuid:r.z.string()}),shop:r.z.object({subdomain:r.z.string().nullable()}),safedeal:r.z.object({weight:r.z.number(),weight_grams:r.z.number(),status:r.z.string(),safedeal_blocked:r.z.boolean(),allowed_quantity:r.z.unknown().array()}),searchReason:r.z.string(),isNewFavouriteAd:r.z.boolean()}),a=r.z.object({id:r.z.number(),label:r.z.string(),parentId:r.z.number(),name:r.z.string(),normalizedName:r.z.string(),position:r.z.number(),viewType:r.z.string(),iconName:r.z.string(),level:r.z.number(),displayOrder:r.z.number(),children:r.z.array(r.z.number()),path:r.z.string(),type:r.z.string(),isAdding:r.z.boolean(),isSearch:r.z.boolean(),isOfferSeek:r.z.boolean(),privateBusiness:r.z.boolean(),photosMax:r.z.number(),img:r.z.string().optional()}),i=r.z.object({listing:r.z.object({listing:r.z.object({pageNumber:r.z.number(),totalElements:r.z.number(),visibleElements:r.z.number(),totalPages:r.z.number(),ads:o.array(),metaData:r.z.object({searchId:r.z.string(),spellCheckerQuery:r.z.null(),searchSuggestion:r.z.object({type:r.z.enum(["extended_distance","no_results_distance"]),url:r.z.string(),changes:r.z.object({})}).nullable(),favSearchNewAds:r.z.unknown().array(),location:r.z.null(),facets:r.z.object({district:r.z.object({id:r.z.number(),count:r.z.number(),label:r.z.string(),url:r.z.string()}).array().optional(),category_without_exclusions:r.z.object({id:r.z.number(),count:r.z.number(),label:r.z.string(),url:r.z.string()}).array().optional()}),searchReason:r.z.object({promoted:r.z.number().array().optional(),organic:r.z.number().array().optional()}),subSections:r.z.unknown().array(),search_request_id:r.z.string().optional()}),links:r.z.object({self:r.z.string().optional(),next:r.z.string().optional(),first:r.z.string().optional()}),params:r.z.object({offset:r.z.number(),limit:r.z.number(),category_id:r.z.number(),region_id:r.z.number(),city_id:r.z.number().optional(),filter_refiners:r.z.string(),facets:r.z.string()}),requestParams:r.z.object({page:r.z.number(),categoryPath:r.z.string(),query:r.z.string(),params:r.z.object({}),options:r.z.object({spellCheckerDisabledByExperiment:r.z.boolean(),mWebAdlimitPerPageVariant:r.z.string().optional()})}),categoryId:r.z.number(),categories:r.z.null(),viewType:r.z.string(),expansionListing:r.z.object({pageNumber:r.z.number(),totalElements:r.z.number(),visibleElements:r.z.number(),totalPages:r.z.number(),ads:r.z.object({}).array()}).nullable()}),popularSearches:r.z.unknown().array(),seo:r.z.object({title:r.z.string(),description:r.z.string(),h1:r.z.string(),seoText:r.z.string()}),breadcrumbs:r.z.object({label:r.z.string(),href:r.z.string(),categoryId:r.z.number().optional()}).array(),locationNames:r.z.object({city:r.z.object({id:r.z.number(),name:r.z.string(),normalized_name:r.z.string(),lat:r.z.number(),lon:r.z.number()}).optional(),municipality:r.z.object({name:r.z.string()}).optional(),county:r.z.object({name:r.z.string()}).optional(),region:r.z.object({id:r.z.number(),name:r.z.string(),normalized_name:r.z.string()})}),filters:r.z.object({data:r.z.record(r.z.object({type:r.z.string(),label:r.z.string(),unit:r.z.string().nullable(),scope:r.z.string().nullable(),values:r.z.unknown().array(),options:r.z.object({categories:r.z.array(r.z.number()),order:r.z.number(),orderForSearch:r.z.number(),ranges:r.z.array(r.z.unknown()),constraints:r.z.object({type:r.z.string()}),fakeCategory:r.z.boolean().optional()}).array(),default_value:r.z.string().optional()}).array()),metadata:r.z.object({currencies:r.z.array(r.z.object({code:r.z.string(),symbol:r.z.string(),is_default:r.z.boolean(),prioritized_categories:r.z.unknown().array()})),distances:r.z.array(r.z.object({value:r.z.number(),is_default:r.z.boolean()}))}),headers:r.z.object({"x-request-id":r.z.string()})}),filteredCounts:r.z.number().nullable().array()}),categories:r.z.object({list:r.z.record(a),counts:r.z.number().nullable().array(),promos:r.z.array(r.z.object({icon:r.z.object({image_url:r.z.string(),big_image_url:r.z.string()}),name:r.z.string(),link:r.z.object({url:r.z.string(),is_external:r.z.boolean()})}))}),cookies:r.z.object({})}),l=r.z.object({json:i})},7292:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(6758),o=t.n(r),a=t(935),i=t.n(a)()(o());i.push([n.id,'.jsondiffpatch-delta {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  display: inline-block;\n}\n.jsondiffpatch-delta pre {\n  font-family: "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Courier,\n    monospace;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\nul.jsondiffpatch-delta {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-delta ul {\n  list-style-type: none;\n  padding: 0 0 0 20px;\n  margin: 0;\n}\n.jsondiffpatch-added .jsondiffpatch-property-name,\n.jsondiffpatch-added .jsondiffpatch-value pre,\n.jsondiffpatch-modified .jsondiffpatch-right-value pre,\n.jsondiffpatch-textdiff-added {\n  background: #bbffbb;\n}\n.jsondiffpatch-deleted .jsondiffpatch-property-name,\n.jsondiffpatch-deleted pre,\n.jsondiffpatch-modified .jsondiffpatch-left-value pre,\n.jsondiffpatch-textdiff-deleted {\n  background: #ffbbbb;\n  text-decoration: line-through;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination {\n  color: gray;\n}\n.jsondiffpatch-unchanged,\n.jsondiffpatch-movedestination > .jsondiffpatch-value {\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  overflow-y: hidden;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-showing\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value,\n.jsondiffpatch-unchanged-hidden\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  display: block;\n}\n.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-visible\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 100px;\n}\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n.jsondiffpatch-unchanged-hiding\n  .jsondiffpatch-movedestination\n  > .jsondiffpatch-value {\n  max-height: 0;\n}\n.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n  display: none;\n}\n.jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-property-name {\n  display: inline-block;\n  padding-right: 5px;\n  vertical-align: top;\n}\n.jsondiffpatch-property-name:after {\n  content: ": ";\n}\n.jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n  content: ": [";\n}\n.jsondiffpatch-child-node-type-array:after {\n  content: "],";\n}\ndiv.jsondiffpatch-child-node-type-array:before {\n  content: "[";\n}\ndiv.jsondiffpatch-child-node-type-array:after {\n  content: "]";\n}\n.jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n  content: ": {";\n}\n.jsondiffpatch-child-node-type-object:after {\n  content: "},";\n}\ndiv.jsondiffpatch-child-node-type-object:before {\n  content: "{";\n}\ndiv.jsondiffpatch-child-node-type-object:after {\n  content: "}";\n}\n.jsondiffpatch-value pre:after {\n  content: ",";\n}\nli:last-child > .jsondiffpatch-value pre:after,\n.jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n  content: "";\n}\n.jsondiffpatch-modified .jsondiffpatch-value {\n  display: inline-block;\n}\n.jsondiffpatch-modified .jsondiffpatch-right-value {\n  margin-left: 5px;\n}\n.jsondiffpatch-moved .jsondiffpatch-value {\n  display: none;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination {\n  display: inline-block;\n  background: #ffffbb;\n  color: #888;\n}\n.jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n  content: " => ";\n}\nul.jsondiffpatch-textdiff {\n  padding: 0;\n}\n.jsondiffpatch-textdiff-location {\n  color: #bbb;\n  display: inline-block;\n  min-width: 60px;\n}\n.jsondiffpatch-textdiff-line {\n  display: inline-block;\n}\n.jsondiffpatch-textdiff-line-number:after {\n  content: ",";\n}\n.jsondiffpatch-error {\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n',""]);const l=i}}]);