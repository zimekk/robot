"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[586],{4586:(e,r,n)=>{n.r(r),n.d(r,{default:()=>l});var t=n(4344),o=n(5364),c="dyson",u="",i=(0,o.$)((function(){return fetch("".concat(u).concat(c)).then((function(e){return e.json()})).then((function(e){return e.result})).catch((function(e){return console.error(e),[]}))}));function l(){var e=i.read();return console.log({result:e}),t.createElement("section",null,t.createElement("h2",null,"Dyson"),t.createElement("ol",null,e.map((function(e){return t.createElement("li",{key:e.id},"[",e.id,"]",t.createElement("button",{onClick:(0,t.useCallback)((function(){return fetch("".concat(u).concat(c,"/delete?id=").concat(e.id))}),[])},"delete"),t.createElement("pre",null,JSON.stringify(e,null,2)))}))))}},7371:e=>{e.exports=function e(r,n){if(r===n)return!0;if(r&&n&&"object"==typeof r&&"object"==typeof n){if(r.constructor!==n.constructor)return!1;var t,o,c;if(Array.isArray(r)){if((t=r.length)!=n.length)return!1;for(o=t;0!=o--;)if(!e(r[o],n[o]))return!1;return!0}if(r.constructor===RegExp)return r.source===n.source&&r.flags===n.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===n.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===n.toString();if((t=(c=Object.keys(r)).length)!==Object.keys(n).length)return!1;for(o=t;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,c[o]))return!1;for(o=t;0!=o--;){var u=c[o];if(!e(r[u],n[u]))return!1}return!0}return r!=r&&n!=n}},5364:(e,r,n)=>{n.d(r,{$:()=>l});var t=n(7371),o=n.n(t);const c=[];function u(e,r,n,t=0,c=!1){for(const e of r)if(o()(n,e.args)){if(c)return;if(e.error)throw e.error;if(e.response)return e.response;throw e.promise}const u={args:n,promise:e(...n).then((e=>u.response=null==e||e)).catch((e=>u.error=null!=e?e:"unknown error")).then((()=>{t>0&&setTimeout((()=>{const e=r.indexOf(u);-1!==e&&r.splice(e,1)}),t)}))};if(r.push(u),!c)throw u.promise}function i(e,...r){if(void 0===r||0===r.length)e.splice(0,e.length);else{const n=e.find((e=>o()(r,e.args)));if(n){const r=e.indexOf(n);-1!==r&&e.splice(r,1)}}}function l(e,r=0){const n=[];return{read:(...t)=>u(e,n,t,r),preload:(...t)=>{u(e,n,t,r,!0)},clear:(...e)=>i(n,...e),peek:(...e)=>{var r;return null==(r=n.find((r=>o()(e,r.args))))?void 0:r.response}}}function s(e,...r){return u(e,c,r,s.lifespan)}s.lifespan=0,s.clear=(...e)=>i(c,...e),s.preload=(e,...r)=>{u(e,c,r,s.lifespan,!0)},s.peek=(...e)=>{var r;return null==(r=c.find((r=>o()(e,r.args))))?void 0:r.response}}}]);