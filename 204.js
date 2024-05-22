"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[204],{1443:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,i,s){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(n)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var f=[].concat(t[c]);n&&o[f[0]]||(void 0!==s&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=s),r&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=r):f[2]=r),i&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=i):f[4]="".concat(i)),e.push(f))}},e}},10:t=>{t.exports=function(t){return t[1]}},7371:t=>{t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,i,s;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(i=n;0!=i--;)if(!t(e[i],r[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(s=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(r,s[i]))return!1;for(i=n;0!=i--;){var o=s[i];if(!t(e[o],r[o]))return!1}return!0}return e!=e&&r!=r}},3609:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var s={},o=[],l=0;l<t.length;l++){var a=t[l],c=n.base?a[0]+n.base:a[0],f=s[c]||0,u="".concat(c," ").concat(f);s[c]=f+1;var h=r(u),d={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==h)e[h].references++,e[h].updater(d);else{var p=i(d,n);n.byIndex=l,e.splice(l,0,{identifier:u,updater:p,references:1})}o.push(u)}return o}function i(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,i){var s=n(t=t||[],i=i||{});return function(t){t=t||[];for(var o=0;o<s.length;o++){var l=r(s[o]);e[l].references--}for(var a=n(t,i),c=0;c<s.length;c++){var f=r(s[c]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}s=a}}},2950:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},8693:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},3433:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},3774:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,i&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},5618:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},7113:(t,e,r)=>{r.d(e,{$:()=>a});var n=r(7371),i=r.n(n);const s=[];function o(t,e,r,n=0,s=!1){for(const t of e)if(i()(r,t.args)){if(s)return;if(t.error)throw t.error;if(t.response)return t.response;throw t.promise}const o={args:r,promise:t(...r).then((t=>o.response=null==t||t)).catch((t=>o.error=null!=t?t:"unknown error")).then((()=>{n>0&&setTimeout((()=>{const t=e.indexOf(o);-1!==t&&e.splice(t,1)}),n)}))};if(e.push(o),!s)throw o.promise}function l(t,...e){if(void 0===e||0===e.length)t.splice(0,t.length);else{const r=t.find((t=>i()(e,t.args)));if(r){const e=t.indexOf(r);-1!==e&&t.splice(e,1)}}}function a(t,e=0){const r=[];return{read:(...n)=>o(t,r,n,e),preload:(...n)=>{o(t,r,n,e,!0)},clear:(...t)=>l(r,...t),peek:(...t)=>{var e;return null==(e=r.find((e=>i()(t,e.args))))?void 0:e.response}}}function c(t,...e){return o(t,s,e,c.lifespan)}c.lifespan=0,c.clear=(...t)=>l(s,...t),c.preload=(t,...e)=>{o(t,s,e,c.lifespan,!0)},c.peek=(...t)=>{var e;return null==(e=s.find((e=>i()(t,e.args))))?void 0:e.response}},6290:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u,format:()=>d,hideUnchanged:()=>f,showUnchanged:()=>c});const n=t=>"_t"===t?-1:"_"===t.substring(0,1)?parseInt(t.slice(1),10):parseInt(t,10)+.1,i=(t,e)=>n(t)-n(e),s=class{format(t,e){const r={};this.prepareContext(r);const n=r;return this.recurse(n,t,e),this.finalize(n)}prepareContext(t){t.buffer=[],t.out=function(...t){this.buffer.push(...t)}}typeFormattterNotFound(t,e){throw new Error(`cannot format delta type: ${e}`)}typeFormattterErrorFormatter(t,e,r,n,i,s,o){}finalize({buffer:t}){if(Array.isArray(t))return t.join("")}recurse(t,e,r,n,i,s,o){const l=e&&s?s.value:r;if(void 0===e&&void 0===n)return;const a=this.getDeltaType(e,s),c="node"===a?"a"===e._t?"array":"object":"";let f;void 0!==n?this.nodeBegin(t,n,i,a,c,o):this.rootBegin(t,a,c);try{f="unknown"!==a?this[`format_${a}`]:this.typeFormattterNotFound(t,a),f.call(this,t,e,l,n,i,s)}catch(r){this.typeFormattterErrorFormatter(t,r,e,l,n,i,s),"undefined"!=typeof console&&console.error&&console.error(r.stack)}void 0!==n?this.nodeEnd(t,n,i,a,c,o):this.rootEnd(t,a,c)}formatDeltaChildren(t,e,r){this.forEachDeltaKey(e,r,((n,i,s,o)=>{this.recurse(t,e[n],r?r[i]:void 0,n,i,s,o)}))}forEachDeltaKey(t,e,r){const n=Object.keys(t),s="a"===t._t,o={};let l;if(void 0!==e)for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&(void 0!==t[l]||s&&void 0!==t[`_${l}`]||n.push(l));for(l in t)if(Object.prototype.hasOwnProperty.call(t,l)){const r=t[l];if(Array.isArray(r)&&3===r[2]){const i=r;o[`${i[1]}`]={key:l,value:e&&e[parseInt(l.substring(1),10)]},!1!==this.includeMoveDestinations&&void 0===e&&void 0===t[i[1]]&&n.push(i[1].toString())}}s?n.sort(i):n.sort();for(let t=0,e=n.length;t<e;t++){const i=n[t];if(s&&"_t"===i)continue;const l=s?parseInt("_"===(a=i).substring(0,1)?a.slice(1):a,10):i,c=t===e-1;r(i,l,o[l],c)}var a}getDeltaType(t,e){if(void 0===t)return void 0!==e?"movedestination":"unchanged";if(Array.isArray(t)){if(1===t.length)return"added";if(2===t.length)return"modified";if(3===t.length&&0===t[2])return"deleted";if(3===t.length&&2===t[2])return"textdiff";if(3===t.length&&3===t[2])return"moved"}else if("object"==typeof t)return"node";return"unknown"}parseTextDiff(t){const e=[],r=t.split("\n@@ ");for(let t=0,n=r.length;t<n;t++){const n=r[t],i={pieces:[]},s=/^(?:@@ )?[-+]?(\d+),(\d+)/.exec(n).slice(1);i.location={line:s[0],chr:s[1]};const o=n.split("\n").slice(1);for(let t=0,e=o.length;t<e;t++){const e=o[t];if(!e.length)continue;const r={type:"context"};"+"===e.substring(0,1)?r.type="added":"-"===e.substring(0,1)&&(r.type="deleted"),r.text=e.slice(1),i.pieces.push(r)}e.push(i)}return e}};class o extends s{typeFormattterErrorFormatter(t,e){t.out(`<pre class="jsondiffpatch-error">${e}</pre>`)}formatValue(t,e){t.out(`<pre>${l(JSON.stringify(e,null,2))}</pre>`)}formatTextDiffString(t,e){const r=this.parseTextDiff(e);t.out('<ul class="jsondiffpatch-textdiff">');for(let e=0,n=r.length;e<n;e++){const n=r[e];t.out(`<li><div class="jsondiffpatch-textdiff-location"><span class="jsondiffpatch-textdiff-line-number">${n.location.line}</span><span class="jsondiffpatch-textdiff-char">${n.location.chr}</span></div><div class="jsondiffpatch-textdiff-line">`);const i=n.pieces;for(let e=0,r=i.length;e<r;e++){const r=i[e];t.out(`<span class="jsondiffpatch-textdiff-${r.type}">${l(decodeURI(r.text))}</span>`)}t.out("</div></li>")}t.out("</ul>")}rootBegin(t,e,r){const n=`jsondiffpatch-${e}${r?` jsondiffpatch-child-node-type-${r}`:""}`;t.out(`<div class="jsondiffpatch-delta ${n}">`)}rootEnd(t){t.out("</div>"+(t.hasArrows?`<script type="text/javascript">setTimeout(${a.toString()},10);<\/script>`:""))}nodeBegin(t,e,r,n,i){const s=`jsondiffpatch-${n}${i?` jsondiffpatch-child-node-type-${i}`:""}`;t.out(`<li class="${s}" data-key="${r}"><div class="jsondiffpatch-property-name">${r}</div>`)}nodeEnd(t){t.out("</li>")}format_unchanged(t,e,r){void 0!==r&&(t.out('<div class="jsondiffpatch-value">'),this.formatValue(t,r),t.out("</div>"))}format_movedestination(t,e,r){void 0!==r&&(t.out('<div class="jsondiffpatch-value">'),this.formatValue(t,r),t.out("</div>"))}format_node(t,e,r){const n="a"===e._t?"array":"object";t.out(`<ul class="jsondiffpatch-node jsondiffpatch-node-type-${n}">`),this.formatDeltaChildren(t,e,r),t.out("</ul>")}format_added(t,e){t.out('<div class="jsondiffpatch-value">'),this.formatValue(t,e[0]),t.out("</div>")}format_modified(t,e){t.out('<div class="jsondiffpatch-value jsondiffpatch-left-value">'),this.formatValue(t,e[0]),t.out('</div><div class="jsondiffpatch-value jsondiffpatch-right-value">'),this.formatValue(t,e[1]),t.out("</div>")}format_deleted(t,e){t.out('<div class="jsondiffpatch-value">'),this.formatValue(t,e[0]),t.out("</div>")}format_moved(t,e){t.out('<div class="jsondiffpatch-value">'),this.formatValue(t,e[0]),t.out(`</div><div class="jsondiffpatch-moved-destination">${e[1]}</div>`),t.out('<div class="jsondiffpatch-arrow" style="position: relative; left: -34px;">\n          <svg width="30" height="60" style="position: absolute; display: none;">\n          <defs>\n              <marker id="markerArrow" markerWidth="8" markerHeight="8"\n                 refx="2" refy="4"\n                     orient="auto" markerUnits="userSpaceOnUse">\n                  <path d="M1,1 L1,7 L7,4 L1,1" style="fill: #339;" />\n              </marker>\n          </defs>\n          <path d="M30,0 Q-10,25 26,50"\n            style="stroke: #88f; stroke-width: 2px; fill: none; stroke-opacity: 0.5; marker-end: url(#markerArrow);"\n          ></path>\n          </svg>\n      </div>'),t.hasArrows=!0}format_textdiff(t,e){t.out('<div class="jsondiffpatch-value">'),this.formatTextDiffString(t,e[0]),t.out("</div>")}}function l(t){let e=t;const r=[[/&/g,"&amp;"],[/</g,"&lt;"],[/>/g,"&gt;"],[/'/g,"&apos;"],[/"/g,"&quot;"]];for(let t=0;t<r.length;t++)e=e.replace(r[t][0],r[t][1]);return e}const a=function(t){((t,e,r)=>{const n=t.querySelectorAll(".jsondiffpatch-arrow");for(let t=0,e=n.length;t<e;t++)r(n[t])})(t||document,0,(({parentNode:t,children:e,style:r})=>{const n=t,i=e[0],s=i.children[1];i.style.display="none";const o=(({textContent:t,innerText:e})=>t||e)(n.querySelector(".jsondiffpatch-moved-destination"));let l;if((({children:t},e)=>{for(let r=0,n=t.length;r<n;r++)e(t[r],r)})(n.parentNode,(t=>{t.getAttribute("data-key")===o&&(l=t)})),l)try{const t=l.offsetTop-n.offsetTop;i.setAttribute("height",`${Math.abs(t)+6}`),r.top=`${-8+(t>0?0:t)}px`;const e=t>0?`M30,0 Q-10,${Math.round(t/2)} 26,${t-4}`:`M30,${-t} Q-10,${Math.round(-t/2)} 26,4`;s.setAttribute("d",e),i.style.display=""}catch(t){}}))},c=(t,e,r)=>{const n=e||document.body,i="jsondiffpatch-unchanged-",s={showing:`${i}showing`,hiding:`${i}hiding`,visible:`${i}visible`,hidden:`${i}hidden`},o=n.classList;if(!o)return;if(!r)return o.remove(s.showing),o.remove(s.hiding),o.remove(s.visible),o.remove(s.hidden),void(!1===t&&o.add(s.hidden));!1===t?(o.remove(s.showing),o.add(s.visible),setTimeout((()=>{o.add(s.hiding)}),10)):(o.remove(s.hiding),o.add(s.showing),o.remove(s.hidden));const l=setInterval((()=>{a(n)}),100);setTimeout((()=>{o.remove(s.showing),o.remove(s.hiding),!1===t?(o.add(s.hidden),o.remove(s.visible)):(o.add(s.visible),o.remove(s.hidden)),setTimeout((()=>{o.remove(s.visible),clearInterval(l)}),r+400)}),r)},f=(t,e)=>c(!1,t,e),u=o;let h;function d(t,e){return h||(h=new o),h.format(t,e)}},5975:(t,e,r)=>{r.d(e,{vt:()=>P});const n=class{constructor(t){this.selfOptions=t||{},this.pipes={}}options(t){return t&&(this.selfOptions=t),this.selfOptions}pipe(t,e){let r=e;if("string"==typeof t){if(void 0===r)return this.pipes[t];this.pipes[t]=r}if(t&&t.name){if(r=t,r.processor===this)return r;this.pipes[r.name]=r}return r.processor=this,r}process(t,e){let r=t;r.options=this.options();let n,i=e||t.pipe||"default";for(;i;)void 0!==r.nextAfterChildren&&(r.next=r.nextAfterChildren,r.nextAfterChildren=null),"string"==typeof i&&(i=this.pipe(i)),i.process(r),n=i,i=null,r&&r.next&&(r=r.next,i=r.pipe||n);return r.hasResult?r.result:void 0}},i=class{constructor(t){this.name=t,this.filters=[]}process(t){if(!this.processor)throw new Error("add this pipe to a processor before using it");const e=this.debug,r=this.filters.length,n=t;for(let t=0;t<r;t++){const r=this.filters[t];if(e&&this.log(`filter: ${r.filterName}`),r(n),"object"==typeof n&&n.exiting){n.exiting=!1;break}}!n.next&&this.resultCheck&&this.resultCheck(n)}log(t){console.log(`[jsondiffpatch] ${this.name} pipe, ${t}`)}append(...t){return this.filters.push(...t),this}prepend(...t){return this.filters.unshift(...t),this}indexOf(t){if(!t)throw new Error("a filter name is required");for(let e=0;e<this.filters.length;e++)if(this.filters[e].filterName===t)return e;throw new Error(`filter not found: ${t}`)}list(){return this.filters.map((t=>t.filterName))}after(t,...e){const r=this.indexOf(t);return this.filters.splice(r+1,0,...e),this}before(t,...e){const r=this.indexOf(t);return this.filters.splice(r,0,...e),this}replace(t,...e){const r=this.indexOf(t);return this.filters.splice(r,1,...e),this}remove(t){const e=this.indexOf(t);return this.filters.splice(e,1),this}clear(){return this.filters.length=0,this}shouldHaveResult(t){if(!1!==t){if(!this.resultCheck)return this.resultCheck=t=>{if(!t.hasResult){console.log(t);const e=new Error(`${this.name} failed`);throw e.noResult=!0,e}},this}else this.resultCheck=null}};class s{setResult(t){return this.result=t,this.hasResult=!0,this}exit(){return this.exiting=!0,this}push(t,e){return t.parent=this,void 0!==e&&(t.childName=e),t.root=this.root||this,t.options=t.options||this.options,this.children?(this.children[this.children.length-1].next=t,this.children.push(t)):(this.children=[t],this.nextAfterChildren=this.next||null,this.next=t),t.next=this,this}}function o(t){if("object"!=typeof t)return t;if(null===t)return null;if(Array.isArray(t))return t.map(o);if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return function(t){const e=/^\/(.*)\/([gimyu]*)$/.exec(t.toString());return new RegExp(e[1],e[2])}(t);const e={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=o(t[r]));return e}const l=class extends s{constructor(t,e){super(),this.left=t,this.right=e,this.pipe="diff"}setResult(t){if(this.options.cloneDiffValues&&"object"==typeof t){const e="function"==typeof this.options.cloneDiffValues?this.options.cloneDiffValues:o;"object"==typeof t[0]&&(t[0]=e(t[0])),"object"==typeof t[1]&&(t[1]=e(t[1]))}return super.setResult(t)}},a=class extends s{constructor(t,e){super(),this.left=t,this.delta=e,this.pipe="patch"}},c=class extends s{constructor(t){super(),this.delta=t,this.pipe="reverse"}},f=function(t){if(t.left!==t.right)if(void 0!==t.left)if(void 0!==t.right){if("function"==typeof t.left||"function"==typeof t.right)throw new Error("functions are not supported");t.leftType=null===t.left?"null":typeof t.left,t.rightType=null===t.right?"null":typeof t.right,t.leftType===t.rightType&&"boolean"!==t.leftType&&"number"!==t.leftType?("object"===t.leftType&&(t.leftIsArray=Array.isArray(t.left)),"object"===t.rightType&&(t.rightIsArray=Array.isArray(t.right)),t.leftIsArray===t.rightIsArray?t.left instanceof RegExp&&(t.right instanceof RegExp?t.setResult([t.left.toString(),t.right.toString()]).exit():t.setResult([t.left,t.right]).exit()):t.setResult([t.left,t.right]).exit()):t.setResult([t.left,t.right]).exit()}else t.setResult([t.left,0,0]).exit();else{if("function"==typeof t.right)throw new Error("functions are not supported");t.setResult([t.right]).exit()}else t.setResult(void 0).exit()};f.filterName="trivial";const u=function(t){if(void 0===t.delta)return void t.setResult(t.left).exit();if(t.nested=!Array.isArray(t.delta),t.nested)return;const e=t.delta;if(1!==e.length)if(2!==e.length)3===e.length&&0===e[2]&&t.setResult(void 0).exit();else{if(t.left instanceof RegExp){const r=/^\/(.*)\/([gimyu]+)$/.exec(e[1]);if(r)return void t.setResult(new RegExp(r[1],r[2])).exit()}t.setResult(e[1]).exit()}else t.setResult(e[0]).exit()};u.filterName="trivial";const h=function(t){if(void 0===t.delta)return void t.setResult(t.delta).exit();if(t.nested=!Array.isArray(t.delta),t.nested)return;const e=t.delta;1!==e.length?2!==e.length?3===e.length&&0===e[2]&&t.setResult([e[0]]).exit():t.setResult([e[1],e[0]]).exit():t.setResult([e[0],0,0]).exit()};h.filterName="trivial";const d=t=>{if(!t||!t.children)return;const e=t.children.length;let r,n=t.result;for(let i=0;i<e;i++)r=t.children[i],void 0!==r.result&&(n=n||{},n[r.childName]=r.result);n&&t.leftIsArray&&(n._t="a"),t.setResult(n).exit()};d.filterName="collectChildren";const p=t=>{if(t.leftIsArray||"object"!==t.leftType)return;const e=t.left,r=t.right;let n,i;const s=t.options.propertyFilter;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(s&&!s(n,t)||(i=new l(e[n],r[n]),t.push(i,n)));for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s&&!s(n,t)||void 0===e[n]&&(i=new l(void 0,r[n]),t.push(i,n)));t.children&&0!==t.children.length?t.exit():t.setResult(void 0).exit()};p.filterName="objects";const v=function(t){if(!t.nested)return;const e=t.delta;if(e._t)return;const r=e;let n,i;for(n in r)i=new a(t.left[n],r[n]),t.push(i,n);t.exit()};v.filterName="objects";const g=function(t){if(!t||!t.children)return;if(t.delta._t)return;const e=t.left,r=t.children.length;let n;for(let i=0;i<r;i++){n=t.children[i];const r=n.childName;Object.prototype.hasOwnProperty.call(t.left,r)&&void 0===n.result?delete e[r]:e[r]!==n.result&&(e[r]=n.result)}t.setResult(e).exit()};g.filterName="collectChildren";const y=function(t){if(!t.nested)return;if(t.delta._t)return;const e=t.delta;let r,n;for(r in e)n=new c(e[r]),t.push(n,r);t.exit()};y.filterName="objects";const m=t=>{if(!t||!t.children)return;if(t.delta._t)return;const e=t.children.length;let r;const n={};for(let i=0;i<e;i++){r=t.children[i];const e=r.childName;n[e]!==r.result&&(n[e]=r.result)}t.setResult(n).exit()};m.filterName="collectChildren";const x=function(t,e,r,n){return t[r]===e[n]};function b(t,e,r,n,i){const s=t[r],o=e[n];if(s===o)return!0;if("object"!=typeof s||"object"!=typeof o)return!1;const l=i.objectHash;if(!l)return i.matchByPosition&&r===n;i.hashCache1=i.hashCache1||[];let a=i.hashCache1[r];if(void 0===a&&(i.hashCache1[r]=a=l(s,r)),void 0===a)return!1;i.hashCache2=i.hashCache2||[];let c=i.hashCache2[n];return void 0===c&&(i.hashCache2[n]=c=l(o,n)),void 0!==c&&a===c}const w=function(t){if(!t.leftIsArray)return;const e={objectHash:t.options&&t.options.objectHash,matchByPosition:t.options&&t.options.matchByPosition};let r,n,i,s=0,o=0;const a=t.left,c=t.right,f=a.length,u=c.length;let h,d;for(f>0&&u>0&&!e.objectHash&&"boolean"!=typeof e.matchByPosition&&(e.matchByPosition=!function(t,e,r,n){for(let i=0;i<r;i++){const r=t[i];for(let t=0;t<n;t++){const n=e[t];if(i!==t&&r===n)return!0}}}(a,c,f,u));s<f&&s<u&&b(a,c,s,s,e);)r=s,h=new l(a[r],c[r]),t.push(h,r),s++;for(;o+s<f&&o+s<u&&b(a,c,f-1-o,u-1-o,e);)n=f-1-o,i=u-1-o,h=new l(a[n],c[i]),t.push(h,i),o++;if(s+o===f){if(f===u)return void t.setResult(void 0).exit();for(d=d||{_t:"a"},r=s;r<u-o;r++)d[r]=[c[r]];return void t.setResult(d).exit()}if(s+o===u){for(d=d||{_t:"a"},r=s;r<f-o;r++)d[`_${r}`]=[a[r],0,0];return void t.setResult(d).exit()}delete e.hashCache1,delete e.hashCache2;const p=a.slice(s,f-o),v=c.slice(s,u-o),g=function(t,e,r,n){const i=n||{},s=function(t,e,r,n){const i=t.length,s=e.length;let o,l;const a=new Array(i+1);for(o=0;o<i+1;o++)for(a[o]=new Array(s+1),l=0;l<s+1;l++)a[o][l]=0;for(a.match=r,o=1;o<i+1;o++)for(l=1;l<s+1;l++)r(t,e,o-1,l-1,n)?a[o][l]=a[o-1][l-1]+1:a[o][l]=Math.max(a[o-1][l],a[o][l-1]);return a}(t,e,r||x,i);return function(t,e,r,n){let i=e.length,s=r.length;const o={sequence:[],indices1:[],indices2:[]};for(;0!==i&&0!==s;)t.match(e,r,i-1,s-1,n)?(o.sequence.unshift(e[i-1]),o.indices1.unshift(i-1),o.indices2.unshift(s-1),--i,--s):t[i][s-1]>t[i-1][s]?--s:--i;return o}(s,t,e,i)}(p,v,b,e),y=[];for(d=d||{_t:"a"},r=s;r<f-o;r++)g.indices1.indexOf(r-s)<0&&(d[`_${r}`]=[a[r],0,0],y.push(r));let m=!0;t.options&&t.options.arrays&&!1===t.options.arrays.detectMove&&(m=!1);let w=!1;t.options&&t.options.arrays&&t.options.arrays.includeValueOnMove&&(w=!0);const j=y.length;for(r=s;r<u-o;r++){const o=g.indices2.indexOf(r-s);if(o<0){let o=!1;if(m&&j>0)for(let f=0;f<j;f++)if(n=y[f],b(p,v,n-s,r-s,e)){d[`_${n}`].splice(1,2,r,3),w||(d[`_${n}`][0]=""),i=r,h=new l(a[n],c[i]),t.push(h,i),y.splice(f,1),o=!0;break}o||(d[r]=[c[r]])}else n=g.indices1[o]+s,i=g.indices2[o]+s,h=new l(a[n],c[i]),t.push(h,i)}t.setResult(d).exit()};w.filterName="arrays";const j=(t,e)=>t-e,R=t=>(e,r)=>e[t]-r[t],_=function(t){if(!t.nested)return;const e=t.delta;if("a"!==e._t)return;let r,n;const i=e,s=t.left;let o=[],l=[];const c=[];for(r in i)if("_t"!==r)if("_"===r[0]){const t=r;if(0!==i[t][2]&&3!==i[t][2])throw new Error(`only removal or move can be applied at original array indices, invalid diff type: ${i[t][2]}`);o.push(parseInt(r.slice(1),10))}else{const t=r;1===i[t].length?l.push({index:parseInt(t,10),value:i[t][0]}):c.push({index:parseInt(t,10),delta:i[t]})}for(o=o.sort(j),r=o.length-1;r>=0;r--){n=o[r];const t=i[`_${n}`],e=s.splice(n,1)[0];3===t[2]&&l.push({index:t[1],value:e})}l=l.sort(R("index"));const f=l.length;for(r=0;r<f;r++){const t=l[r];s.splice(t.index,0,t.value)}const u=c.length;let h;if(u>0)for(r=0;r<u;r++){const e=c[r];h=new a(s[e.index],e.delta),t.push(h,e.index)}t.children?t.exit():t.setResult(s).exit()};_.filterName="arrays";const $=function(t){if(!t||!t.children)return;if("a"!==t.delta._t)return;const e=t.left,r=t.children.length;let n;for(let i=0;i<r;i++)n=t.children[i],e[n.childName]=n.result;t.setResult(e).exit()};$.filterName="arraysCollectChildren";const A=function(t){if(!t.nested){const e=t.delta;if(3===e[2]){const r=e;t.newName=`_${r[1]}`,t.setResult([r[0],parseInt(t.childName.substring(1),10),3]).exit()}return}const e=t.delta;if("a"!==e._t)return;const r=e;let n,i;for(n in r)"_t"!==n&&(i=new c(r[n]),t.push(i,n));t.exit()};A.filterName="arrays";const C=(t,e,r)=>{if("string"==typeof e&&"_"===e[0])return parseInt(e.substring(1),10);if(Array.isArray(r)&&0===r[2])return`_${e}`;let n=+e;for(const r in t){const i=t[r];if(Array.isArray(i))if(3===i[2]){const t=parseInt(r.substring(1),10),s=i[1];if(s===+e)return t;t<=n&&s>n?n++:t>=n&&s<n&&n--}else 0===i[2]?parseInt(r.substring(1),10)<=n&&n++:1===i.length&&parseInt(r,10)<=n&&n--}return n},N=t=>{if(!t||!t.children)return;const e=t.delta;if("a"!==e._t)return;const r=e,n=t.children.length;let i;const s={_t:"a"};for(let e=0;e<n;e++){i=t.children[e];let n=i.newName;void 0===n&&(n=C(r,i.childName,i.result)),s[n]!==i.result&&(s[n]=i.result)}t.setResult(s).exit()};N.filterName="arraysCollectChildren";const O=function(t){t.left instanceof Date?(t.right instanceof Date?t.left.getTime()!==t.right.getTime()?t.setResult([t.left,t.right]):t.setResult(void 0):t.setResult([t.left,t.right]),t.exit()):t.right instanceof Date&&t.setResult([t.left,t.right]).exit()};O.filterName="dates";let T=null;function k(t,e){var r;if(!T){let n;if(!(null===(r=null==t?void 0:t.textDiff)||void 0===r?void 0:r.diffMatchPatch)){if(!e)return null;const t=new Error("The diff-match-patch library was not provided. Pass the library in through the options or use the `jsondiffpatch/with-text-diffs` entry-point.");throw t.diff_match_patch_not_found=!0,t}n=new t.textDiff.diffMatchPatch,T={diff:function(t,e){return n.patch_toText(n.patch_make(t,e))},patch:function(t,e){const r=n.patch_apply(n.patch_fromText(e),t);for(let t=0;t<r[1].length;t++)r[1][t]||(new Error("text patch failed").textPatchFailed=!0);return r[0]}}}return T}const E=function(t){if("string"!==t.leftType)return;const e=t.left,r=t.right,n=t.options&&t.options.textDiff&&t.options.textDiff.minLength||60;if(e.length<n||r.length<n)return void t.setResult([e,r]).exit();const i=k(t.options);if(!i)return void t.setResult([e,r]).exit();const s=i.diff;t.setResult([s(e,r),0,2]).exit()};E.filterName="texts";const I=function(t){if(t.nested)return;const e=t.delta;if(2!==e[2])return;const r=e,n=k(t.options,!0).patch;t.setResult(n(t.left,r[0])).exit()};I.filterName="texts";const D=function(t){let e,r,n,i,s=null;const o=/^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/;let l;const a=t.split("\n");for(e=0,r=a.length;e<r;e++){n=a[e];const t=n.slice(0,1);"@"===t?(s=o.exec(n),l=e,a[l]="@@ -"+s[3]+","+s[4]+" +"+s[1]+","+s[2]+" @@"):"+"===t?(a[e]="-"+a[e].slice(1),"+"===a[e-1].slice(0,1)&&(i=a[e],a[e]=a[e-1],a[e-1]=i)):"-"===t&&(a[e]="+"+a[e].slice(1))}return a.join("\n")},S=function(t){if(t.nested)return;const e=t.delta;if(2!==e[2])return;const r=e;t.setResult([D(r[0]),0,2]).exit()};S.filterName="texts";const M=class{constructor(t){this.processor=new n(t),this.processor.pipe(new i("diff").append(d,f,O,E,p,w).shouldHaveResult()),this.processor.pipe(new i("patch").append(g,$,u,I,v,_).shouldHaveResult()),this.processor.pipe(new i("reverse").append(m,N,h,S,y,A).shouldHaveResult())}options(t){return this.processor.options(t)}diff(t,e){return this.processor.process(new l(t,e))}patch(t,e){return this.processor.process(new a(t,e))}reverse(t){return this.processor.process(new c(t))}unpatch(t,e){return this.patch(t,this.reverse(e))}clone(t){return o(t)}};function P(t){return new M(t)}}}]);