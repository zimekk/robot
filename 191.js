"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[191],{9191:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(4344);const l=e=>Number.isFinite(e)?e:0;const i=e=>0===e||0n===e,o=(e,t)=>1===t||1n===t?e:`${e}s`,a=1e-7,c=86400000n;function u(e,t){const n="bigint"==typeof e;if(!n&&!Number.isFinite(e))throw new TypeError("Expected a finite number or bigint");const r=e<0?"-":"";e=e<0?-e:e,(t={...t}).colonNotation&&(t.compact=!1,t.formatSubMilliseconds=!1,t.separateMilliseconds=!1,t.verbose=!1),t.compact&&(t.unitCount=1,t.secondsDecimalDigits=0,t.millisecondsDecimalDigits=0);let u=[];const s=(e,n,r,l)=>{if(0!==u.length&&t.colonNotation||!i(e)||t.colonNotation&&"m"===r){if(l??=String(e),t.colonNotation){const e=l.includes(".")?l.split(".")[0].length:l.length,t=u.length>0?2:1;l="0".repeat(Math.max(0,t-e))+l}else l+=t.verbose?" "+o(n,e):r;u.push(l)}},m=function(e){switch(typeof e){case"number":if(Number.isFinite(e))return function(e){return{days:Math.trunc(e/864e5),hours:Math.trunc(e/36e5%24),minutes:Math.trunc(e/6e4%60),seconds:Math.trunc(e/1e3%60),milliseconds:Math.trunc(e%1e3),microseconds:Math.trunc(l(1e3*e)%1e3),nanoseconds:Math.trunc(l(1e6*e)%1e3)}}(e);break;case"bigint":return function(e){return{days:e/86400000n,hours:e/3600000n%24n,minutes:e/60000n%60n,seconds:e/1000n%60n,milliseconds:e%1000n,microseconds:0n,nanoseconds:0n}}(e)}throw new TypeError("Expected a finite number or bigint")}(e),d=BigInt(m.days);if(t.hideYearAndDays?s(24n*BigInt(d)+BigInt(m.hours),"hour","h"):(t.hideYear?s(d,"day","d"):(s(d/365n,"year","y"),s(d%365n,"day","d")),s(Number(m.hours),"hour","h")),s(Number(m.minutes),"minute","m"),!t.hideSeconds)if(t.separateMilliseconds||t.formatSubMilliseconds||!t.colonNotation&&e<1e3){const e=Number(m.seconds),n=Number(m.milliseconds),r=Number(m.microseconds),l=Number(m.nanoseconds);if(s(e,"second","s"),t.formatSubMilliseconds)s(n,"millisecond","ms"),s(r,"microsecond","µs"),s(l,"nanosecond","ns");else{const e=n+r/1e3+l/1e6,i="number"==typeof t.millisecondsDecimalDigits?t.millisecondsDecimalDigits:0,o=e>=1?Math.round(e):Math.ceil(e),a=i?e.toFixed(i):o;s(Number.parseFloat(a),"millisecond","ms",a)}}else{const r=((e,t)=>{const n=Math.floor(e*10**t+a);return(Math.round(n)/10**t).toFixed(t)})((n?Number(e%c):e)/1e3%60,"number"==typeof t.secondsDecimalDigits?t.secondsDecimalDigits:1),l=t.keepDecimalsOnWholeSeconds?r:r.replace(/\.0+$/,"");s(Number.parseFloat(l),"second","s",l)}if(0===u.length)return r+"0"+(t.verbose?" milliseconds":"ms");const f=t.colonNotation?":":" ";return"number"==typeof t.unitCount&&(u=u.slice(0,Math.max(t.unitCount,1))),r+u.join(f)}var s=n(5469),m=n(5364),d=function(e){return Number((((e.map((function(e){return e.split(/\s+/)})).find((function(e){return e[5].match(/hostname/)}))||[])[4]||"").match(/^(\d+)%/)||[])[1])},f=(0,m.$)((function(){return fetch("".concat("","status")).then((function(e){return e.json()})).then((function(e){return e.result})).catch((function(e){return console.error(e),{databases:[],usage:[],cpus:[],hostname:null,platform:null,type:null,loadavg:null,freemem:0,totalmem:0,uptime:0}}))}));function h(){var e=f.read();return console.log({result:e}),console.log({total:d(e.usage)}),r.createElement("section",null,r.createElement("h2",null,"Status"),r.createElement("h3",null,"databases"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"name"),r.createElement("th",null,"size")),e.databases.map((function(e,t){var n=e.name,l=e.size;return r.createElement("tr",{key:t},r.createElement("td",null,n),r.createElement("td",null,l))})))),r.createElement("h3",null,"disks"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"filesystem"),r.createElement("th",null,"size"),r.createElement("th",null,"used"),r.createElement("th",null,"avail"),r.createElement("th",null,"capacity")),e.usage.map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",{colSpan:5},e))})))),r.createElement("h3",null,"cpus"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"model"),r.createElement("th",null,"speed"),r.createElement("th",null,"times")),e.cpus.map((function(e,t){var n=e.model,l=e.speed,i=e.times;return r.createElement("tr",{key:t},r.createElement("td",null,n),r.createElement("td",null,l),r.createElement("td",null,r.createElement("pre",null,JSON.stringify(i,null,2))))})))),r.createElement("h3",null,"host"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"hostname"),r.createElement("th",null,"platform"),r.createElement("th",null,"type"),r.createElement("th",null,"loadavg")),[e].map((function(e,t){var n=e.hostname,l=e.platform,i=e.type,o=e.loadavg;return r.createElement("tr",{key:t},r.createElement("td",null,n),r.createElement("td",null,l),r.createElement("td",null,i),r.createElement("td",null,r.createElement("pre",null,JSON.stringify(o,null,2))))})))),r.createElement("h3",null,"mem"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"freemem"),r.createElement("th",null,"totalmem"),r.createElement("th",null,"usage")),[e].map((function(e,t){var n=e.freemem,l=e.totalmem;return r.createElement("tr",{key:t},r.createElement("td",null,(0,s.A)(n)),r.createElement("td",null,(0,s.A)(l)),r.createElement("td",null,(0,s.A)(l-n)))})))),r.createElement("h3",null,"uptime"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"uptime")),[e].map((function(e,t){var n=e.uptime;return r.createElement("tr",{key:t},r.createElement("td",null,u(1e3*n)))})))),r.createElement("pre",null,JSON.stringify(e,null,2)))}},7371:e=>{e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,l,i;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(l=r;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(l=r;0!=l--;)if(!Object.prototype.hasOwnProperty.call(n,i[l]))return!1;for(l=r;0!=l--;){var o=i[l];if(!e(t[o],n[o]))return!1}return!0}return t!=t&&n!=n}},5364:(e,t,n)=>{n.d(t,{$:()=>c});var r=n(7371),l=n.n(r);const i=[];function o(e,t,n,r=0,i=!1){for(const e of t)if(l()(n,e.args)){if(i)return;if(e.error)throw e.error;if(e.response)return e.response;throw e.promise}const o={args:n,promise:e(...n).then((e=>o.response=null==e||e)).catch((e=>o.error=null!=e?e:"unknown error")).then((()=>{r>0&&setTimeout((()=>{const e=t.indexOf(o);-1!==e&&t.splice(e,1)}),r)}))};if(t.push(o),!i)throw o.promise}function a(e,...t){if(void 0===t||0===t.length)e.splice(0,e.length);else{const n=e.find((e=>l()(t,e.args)));if(n){const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}}function c(e,t=0){const n=[];return{read:(...r)=>o(e,n,r,t),preload:(...r)=>{o(e,n,r,t,!0)},clear:(...e)=>a(n,...e),peek:(...e)=>{var t;return null==(t=n.find((t=>l()(e,t.args))))?void 0:t.response}}}function u(e,...t){return o(e,i,t,u.lifespan)}u.lifespan=0,u.clear=(...e)=>a(i,...e),u.preload=(e,...t)=>{o(e,i,t,u.lifespan,!0)},u.peek=(...e)=>{var t;return null==(t=i.find((t=>l()(e,t.args))))?void 0:t.response}},5469:(e,t,n)=>{n.d(t,{A:()=>c});const r=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],l=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],i=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],o=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],a=(e,t,n)=>{let r=e;return"string"==typeof t||Array.isArray(t)?r=e.toLocaleString(t,n):!0!==t&&void 0===n||(r=e.toLocaleString(void 0,n)),r};function c(e,t){if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);const n=(t={bits:!1,binary:!1,space:!0,...t}).bits?t.binary?o:i:t.binary?l:r,c=t.space?" ":"";if(t.signed&&0===e)return` 0${c}${n[0]}`;const u=e<0,s=u?"-":t.signed?"+":"";let m;if(u&&(e=-e),void 0!==t.minimumFractionDigits&&(m={minimumFractionDigits:t.minimumFractionDigits}),void 0!==t.maximumFractionDigits&&(m={maximumFractionDigits:t.maximumFractionDigits,...m}),e<1)return s+a(e,t.locale,m)+c+n[0];const d=Math.min(Math.floor(t.binary?Math.log(e)/Math.log(1024):Math.log10(e)/3),n.length-1);return e/=(t.binary?1024:1e3)**d,m||(e=e.toPrecision(3)),s+a(Number(e),t.locale,m)+c+n[d]}}}]);