"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[638],{5364:(e,r,t)=>{t.d(r,{$:()=>l});var n=t(7371),o=t.n(n);const c=[];function u(e,r,t,n=0,c=!1){for(const e of r)if(o()(t,e.args)){if(c)return;if(e.error)throw e.error;if(e.response)return e.response;throw e.promise}const u={args:t,promise:e(...t).then((e=>u.response=null==e||e)).catch((e=>u.error=null!=e?e:"unknown error")).then((()=>{n>0&&setTimeout((()=>{const e=r.indexOf(u);-1!==e&&r.splice(e,1)}),n)}))};if(r.push(u),!c)throw u.promise}function i(e,...r){if(void 0===r||0===r.length)e.splice(0,e.length);else{const t=e.find((e=>o()(r,e.args)));if(t){const r=e.indexOf(t);-1!==r&&e.splice(r,1)}}}function l(e,r=0){const t=[];return{read:(...n)=>u(e,t,n,r),preload:(...n)=>{u(e,t,n,r,!0)},clear:(...e)=>i(t,...e),peek:(...e)=>{var r;return null==(r=t.find((r=>o()(e,r.args))))?void 0:r.response}}}function s(e,...r){return u(e,c,r,s.lifespan)}s.lifespan=0,s.clear=(...e)=>i(c,...e),s.preload=(e,...r)=>{u(e,c,r,s.lifespan,!0)},s.peek=(...e)=>{var r;return null==(r=c.find((r=>o()(e,r.args))))?void 0:r.response}},5638:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l});var n=t(4344),o=t(5364),c="petro",u="",i=(0,o.$)((function(){return fetch("".concat(u).concat(c)).then((function(e){return e.json()})).then((function(e){return e.result})).catch((function(e){return console.error(e),[]}))}));function l(){var e=i.read();return console.log({result:e}),n.createElement("section",null,n.createElement("h2",null,"Petro"),n.createElement("ol",null,e.map((function(e){return n.createElement("li",{key:e.id},"[",e.id,"]",n.createElement("button",{onClick:(0,n.useCallback)((function(){return fetch("".concat(u).concat(c,"/delete?id=").concat(e.id))}),[])},"delete"),n.createElement("pre",null,JSON.stringify(e,null,2)))}))))}},7371:e=>{e.exports=function e(r,t){if(r===t)return!0;if(r&&t&&"object"==typeof r&&"object"==typeof t){if(r.constructor!==t.constructor)return!1;var n,o,c;if(Array.isArray(r)){if((n=r.length)!=t.length)return!1;for(o=n;0!=o--;)if(!e(r[o],t[o]))return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if((n=(c=Object.keys(r)).length)!==Object.keys(t).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(t,c[o]))return!1;for(o=n;0!=o--;){var u=c[o];if(!e(r[u],t[u]))return!1}return!0}return r!=r&&t!=t}}}]);