"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[521],{2521:(e,r,t)=>{t.r(r),t.d(r,{default:()=>u});var n=t(2784),o=(0,t(357).k)((function(){return fetch("thule").then((function(e){return e.json()})).then((function(e){return e.result}))}));function u(){var e=o.read();return console.log({result:e}),n.createElement("section",null,n.createElement("h2",null,"Thule",n.createElement("button",{onClick:(0,n.useCallback)((function(){return fetch("thule/insert")}),[])},"insert")),n.createElement("ol",null,e.map((function(e){return n.createElement("li",{key:e.id},"[",e.id,"]",n.createElement("button",{onClick:(0,n.useCallback)((function(){return fetch("thule/delete?id=".concat(e.id))}),[])},"delete"),n.createElement("pre",null,JSON.stringify(e,null,2)))}))))}},9378:e=>{e.exports=function e(r,t){if(r===t)return!0;if(r&&t&&"object"==typeof r&&"object"==typeof t){if(r.constructor!==t.constructor)return!1;var n,o,u;if(Array.isArray(r)){if((n=r.length)!=t.length)return!1;for(o=n;0!=o--;)if(!e(r[o],t[o]))return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if((n=(u=Object.keys(r)).length)!==Object.keys(t).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(t,u[o]))return!1;for(o=n;0!=o--;){var l=u[o];if(!e(r[l],t[l]))return!1}return!0}return r!=r&&t!=t}},357:(e,r,t)=>{t.d(r,{k:()=>c});var n=t(9378),o=t.n(n);const u=[];function l(e,r,t,n=0,u=!1){for(const e of r)if(o()(t,e.args)){if(u)return;if(e.error)throw e.error;if(e.response)return e.response;throw e.promise}const l={args:t,promise:e(...t).then((e=>l.response=null==e||e)).catch((e=>l.error=null!=e?e:"unknown error")).then((()=>{n>0&&setTimeout((()=>{const e=r.indexOf(l);-1!==e&&r.splice(e,1)}),n)}))};if(r.push(l),!u)throw l.promise}function i(e,...r){if(void 0===r||0===r.length)e.splice(0,e.length);else{const t=e.find((e=>o()(r,e.args)));if(t){const r=e.indexOf(t);-1!==r&&e.splice(r,1)}}}function c(e,r=0){const t=[];return{read:(...n)=>l(e,t,n,r),preload:(...n)=>{l(e,t,n,r,!0)},clear:(...e)=>i(t,...e),peek:(...e)=>{var r;return null==(r=t.find((r=>o()(e,r.args))))?void 0:r.response}}}function s(e,...r){return l(e,u,r,s.lifespan)}s.lifespan=0,s.clear=(...e)=>i(u,...e),s.preload=(e,...r)=>{l(e,u,r,s.lifespan,!0)},s.peek=(...e)=>{var r;return null==(r=u.find((r=>o()(e,r.args))))?void 0:r.response}}}]);