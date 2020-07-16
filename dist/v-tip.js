(function(ya,_){typeof exports==="object"&&typeof module!=="undefined"?_(exports):typeof define==="function"&&define.amd?define(["exports"],_):(ya=ya||self,_(ya["v-tip"]={}))})(this,function(ya){"use strict";/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var _=function(){return _=Object.assign||function a(b){for(var c,d=1,e=arguments.length;d<e;d++){c=arguments[d];for(var f in c)Object.prototype.hasOwnProperty.call(c,f)&&(b[f]=c[f])}return b},_.apply(this,arguments)};/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */var V=Object.freeze({});function t(a){return a===void 0||a===null}function l(a){return a!==void 0&&a!==null}function C(a){return a===!0}function je(a){return a===!1}function Ia(a){return typeof a==="string"||typeof a==="number"||typeof a==="symbol"||typeof a==="boolean"}function H(a){return a!==null&&typeof a==="object"}var Ua=Object.prototype.toString;function ke(a){return Ua.call(a).slice(8,-1)}function J(a){return Ua.call(a)==="[object Object]"}function le(a){return Ua.call(a)==="[object RegExp]"}function wc(a){var b=parseFloat(String(a));return b>=0&&Math.floor(b)===b&&isFinite(a)}function wb(a){return l(a)&&typeof a.then==="function"&&typeof a.catch==="function"}function me(a){return a==null?"":Array.isArray(a)||J(a)&&a.toString===Ua?JSON.stringify(a,null,2):String(a)}function Ja(a){var b=parseFloat(a);return isNaN(b)?a:b}function S(a,b){for(var c=Object.create(null),d=a.split(","),e=0;e<d.length;e++)c[d[e]]=!0;return b?function(f){return c[f.toLowerCase()]}:function(f){return c[f]}}var Ih=S("slot,component",!0),ne=S("key,ref,slot,slot-scope,is");function $(a,b){if(a.length){var c=a.indexOf(b);if(c>-1)return a.splice(c,1)}}var oe=Object.prototype.hasOwnProperty;function I(a,b){return oe.call(a,b)}function ka(a){var b=Object.create(null);return function c(d){var e=b[d];return e||(b[d]=a(d))}}var pe=/-(\w)/g,la=ka(function(a){return a.replace(pe,function(b,c){return c?c.toUpperCase():""})}),qe=ka(function(a){return a.charAt(0).toUpperCase()+a.slice(1)}),re=/\B([A-Z])/g,Ka=ka(function(a){return a.replace(re,"-$1").toLowerCase()});function se(a,b){function c(d){var e=arguments.length;return e?e>1?a.apply(b,arguments):a.call(b,d):a.call(b)}return c._length=a.length,c}function te(a,b){return a.bind(b)}var ue=Function.prototype.bind?te:se;function xb(a,b){b=b||0;for(var c=a.length-b,d=new Array(c);c--;)d[c]=a[c+b];return d}function B(a,b){for(var c in b)a[c]=b[c];return a}function xc(a){for(var b={},c=0;c<a.length;c++)a[c]&&B(b,a[c]);return b}function K(a,b,c){}var Va=function(a,b,c){return!1},yc=function(a){return a};function ma(a,b){if(a===b)return!0;var c=H(a),d=H(b);if(c&&d)try{var e=Array.isArray(a),f=Array.isArray(b);if(e&&f)return a.length===b.length&&a.every(function(i,o){return ma(i,b[o])});{if(a instanceof Date&&b instanceof Date)return a.getTime()===b.getTime();if(!e&&!f){var g=Object.keys(a),h=Object.keys(b);return g.length===h.length&&g.every(function(i){return ma(a[i],b[i])})}else return!1}}catch(i){return!1}else return!c&&!d?String(a)===String(b):!1}function zc(a,b){for(var c=0;c<a.length;c++)if(ma(a[c],b))return c;return-1}function Wa(a){var b=!1;return function(){b||(b=!0,a.apply(this,arguments))}}var Ac="data-server-rendered",Xa=["component","directive","filter"],Bc=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],P={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Va,isReservedAttr:Va,isUnknownElement:Va,getTagNamespace:K,parsePlatformTagName:yc,mustUseProp:Va,async:!0,_lifecycleHooks:Bc},ve=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function we(a){var b=(a+"").charCodeAt(0);return b===36||b===95}function za(a,b,c,d){Object.defineProperty(a,b,{value:c,enumerable:!!d,writable:!0,configurable:!0})}var xe=new RegExp("[^"+ve.source+".$_\\d]");function ye(a){if(xe.test(a))return;var b=a.split(".");return function(c){for(var d=0;d<b.length;d++){if(!c)return;c=c[b[d]]}return c}}var ze="__proto__"in{},N=typeof window!=="undefined",yb=typeof WXEnvironment!=="undefined"&&!!WXEnvironment.platform,Cc=yb&&WXEnvironment.platform.toLowerCase(),G=N&&window.navigator.userAgent.toLowerCase(),Aa=G&&/msie|trident/.test(G),Ba=G&&G.indexOf("msie 9.0")>0,zb=G&&G.indexOf("edge/")>0,Jh=G&&G.indexOf("android")>0||Cc==="android",Ae=G&&/iphone|ipad|ipod|ios/.test(G)||Cc==="ios",Kh=G&&/chrome\/\d+/.test(G)&&!zb,Lh=G&&/phantomjs/.test(G),Dc=G&&G.match(/firefox\/(\d+)/),Ab={}.watch,Ec=!1;if(N)try{var Fc={};Object.defineProperty(Fc,"passive",{get:function a(){Ec=!0}}),window.addEventListener("test-passive",null,Fc)}catch(a){}var Ya,Za=function(){return Ya===void 0&&(!N&&!yb&&typeof global!=="undefined"?Ya=global.process&&global.process.env.VUE_ENV==="server":Ya=!1),Ya},_a=N&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function Ca(a){return typeof a==="function"&&/native code/.test(a.toString())}var $a=typeof Symbol!=="undefined"&&Ca(Symbol)&&typeof Reflect!=="undefined"&&Ca(Reflect.ownKeys),La;typeof Set!=="undefined"&&Ca(Set)?La=Set:La=function(){function a(){this.set=Object.create(null)}return a.prototype.has=function b(c){return this.set[c]===!0},a.prototype.add=function b(c){this.set[c]=!0},a.prototype.clear=function b(){this.set=Object.create(null)},a}();var Gc=K,Be=0,O=function a(){this.id=Be++,this.subs=[]};O.prototype.addSub=function a(b){this.subs.push(b)},O.prototype.removeSub=function a(b){$(this.subs,b)},O.prototype.depend=function a(){O.target&&O.target.addDep(this)},O.prototype.notify=function a(){for(var b=this.subs.slice(),c=0,d=b.length;c<d;c++)b[c].update()},O.target=null;var ab=[];function bb(a){ab.push(a),O.target=a}function cb(){ab.pop(),O.target=ab[ab.length-1]}var L=function a(b,c,d,e,f,g,h,i){this.tag=b,this.data=c,this.children=d,this.text=e,this.elm=f,this.ns=void 0,this.context=g,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=c&&c.key,this.componentOptions=h,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=i,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Hc={child:{configurable:!0}};Hc.child.get=function(){return this.componentInstance},Object.defineProperties(L.prototype,Hc);var na=function(a){a===void 0&&(a="");var b=new L();return b.text=a,b.isComment=!0,b};function Da(a){return new L(void 0,void 0,void 0,String(a))}function Bb(a){var b=new L(a.tag,a.data,a.children&&a.children.slice(),a.text,a.elm,a.context,a.componentOptions,a.asyncFactory);return b.ns=a.ns,b.isStatic=a.isStatic,b.key=a.key,b.isComment=a.isComment,b.fnContext=a.fnContext,b.fnOptions=a.fnOptions,b.fnScopeId=a.fnScopeId,b.asyncMeta=a.asyncMeta,b.isCloned=!0,b}var Ic=Array.prototype,db=Object.create(Ic),Ce=["push","pop","shift","unshift","splice","sort","reverse"];Ce.forEach(function(a){var b=Ic[a];za(db,a,function c(){for(var d=[],e=arguments.length;e--;)d[e]=arguments[e];var f=b.apply(this,d),g=this.__ob__,h;switch(a){case"push":case"unshift":h=d;break;case"splice":h=d.slice(2);break}return h&&g.observeArray(h),g.dep.notify(),f})});var De=Object.getOwnPropertyNames(db),Cb=!0;function ea(a){Cb=a}var eb=function a(b){this.value=b,this.dep=new O(),this.vmCount=0,za(b,"__ob__",this),Array.isArray(b)?(ze?Ee(b,db):Fe(b,db,De),this.observeArray(b)):this.walk(b)};eb.prototype.walk=function a(b){for(var c=Object.keys(b),d=0;d<c.length;d++)pa(b,c[d])},eb.prototype.observeArray=function a(b){for(var c=0,d=b.length;c<d;c++)oa(b[c])};function Ee(a,b){a.__proto__=b}function Fe(a,b,c){for(var d=0,e=c.length;d<e;d++){var f=c[d];za(a,f,b[f])}}function oa(a,b){if(!H(a)||a instanceof L)return;var c;return I(a,"__ob__")&&a.__ob__ instanceof eb?c=a.__ob__:Cb&&!Za()&&(Array.isArray(a)||J(a))&&Object.isExtensible(a)&&!a._isVue&&(c=new eb(a)),b&&c&&c.vmCount++,c}function pa(a,b,c,d,e){var f=new O(),g=Object.getOwnPropertyDescriptor(a,b);if(g&&g.configurable===!1)return;var h=g&&g.get,i=g&&g.set;(!h||i)&&arguments.length===2&&(c=a[b]);var o=!e&&oa(c);Object.defineProperty(a,b,{enumerable:!0,configurable:!0,get:function m(){var p=h?h.call(a):c;return O.target&&(f.depend(),o&&(o.dep.depend(),Array.isArray(p)&&Kc(p))),p},set:function m(p){var q=h?h.call(a):c;if(p===q||p!==p&&q!==q)return;if(h&&!i)return;i?i.call(a,p):c=p,o=!e&&oa(p),f.notify()}})}function Db(a,b,c){if(Array.isArray(a)&&wc(b))return a.length=Math.max(a.length,b),a.splice(b,1,c),c;if(b in a&&!(b in Object.prototype))return a[b]=c,c;var d=a.__ob__;return a._isVue||d&&d.vmCount?c:d?(pa(d.value,b,c),d.dep.notify(),c):(a[b]=c,c)}function Jc(a,b){if(Array.isArray(a)&&wc(b)){a.splice(b,1);return}var c=a.__ob__;if(a._isVue||c&&c.vmCount)return;if(!I(a,b))return;delete a[b];if(!c)return;c.dep.notify()}function Kc(a){for(var b=void 0,c=0,d=a.length;c<d;c++)b=a[c],b&&b.__ob__&&b.__ob__.dep.depend(),Array.isArray(b)&&Kc(b)}var W=P.optionMergeStrategies;function Eb(a,b){if(!b)return a;for(var c,d,e,f=$a?Reflect.ownKeys(b):Object.keys(b),g=0;g<f.length;g++){c=f[g];if(c==="__ob__")continue;d=a[c],e=b[c],I(a,c)?d!==e&&J(d)&&J(e)&&Eb(d,e):Db(a,c,e)}return a}function Fb(a,b,c){return c?function d(){var e=typeof b==="function"?b.call(c,c):b,f=typeof a==="function"?a.call(c,c):a;return e?Eb(e,f):f}:b?a?function d(){return Eb(typeof b==="function"?b.call(this,this):b,typeof a==="function"?a.call(this,this):a)}:b:a}W.data=function(a,b,c){return c?Fb(a,b,c):b&&typeof b!=="function"?a:Fb(a,b)};function Ge(a,b){var c=b?a?a.concat(b):Array.isArray(b)?b:[b]:a;return c?He(c):c}function He(a){for(var b=[],c=0;c<a.length;c++)b.indexOf(a[c])===-1&&b.push(a[c]);return b}Bc.forEach(function(a){W[a]=Ge});function Ie(a,b,c,d){var e=Object.create(a||null);return b?B(e,b):e}Xa.forEach(function(a){W[a+"s"]=Ie}),W.watch=function(a,b,c,d){a===Ab&&(a=void 0),b===Ab&&(b=void 0);if(!b)return Object.create(a||null);if(!a)return b;var e={};B(e,a);for(var f in b){var g=e[f],h=b[f];g&&!Array.isArray(g)&&(g=[g]),e[f]=g?g.concat(h):Array.isArray(h)?h:[h]}return e},W.props=W.methods=W.inject=W.computed=function(a,b,c,d){b&&!1&&Ne(d,b);if(!a)return b;var e=Object.create(null);return B(e,a),b&&B(e,b),e},W.provide=Fb;var Je=function(a,b){return b===void 0?a:b};function Ke(a,b){var c=a.props;if(!c)return;var d={},e,f,g;if(Array.isArray(c))for(e=c.length;e--;)f=c[e],typeof f==="string"&&(g=la(f),d[g]={type:null});else if(J(c))for(var h in c)f=c[h],g=la(h),d[g]=J(f)?f:{type:f};a.props=d}function Le(a,b){var c=a.inject;if(!c)return;var d=a.inject={};if(Array.isArray(c))for(var e=0;e<c.length;e++)d[c[e]]={from:c[e]};else if(J(c))for(var f in c){var g=c[f];d[f]=J(g)?B({from:f},g):{from:g}}}function Me(a){var b=a.directives;if(b)for(var c in b){var d=b[c];typeof d==="function"&&(b[c]={bind:d,update:d})}}function Ne(a,b,c){J(b)||Gc('Invalid value for option "'+a+'": expected an Object, but got '+ke(b)+".")}function qa(a,b,c){typeof b==="function"&&(b=b.options),Ke(b),Le(b),Me(b);if(!b._base){b.extends&&(a=qa(a,b.extends,c));if(b.mixins)for(var d=0,e=b.mixins.length;d<e;d++)a=qa(a,b.mixins[d],c)}var f={},g;for(g in a)h(g);for(g in b)I(a,g)||h(g);function h(i){var o=W[i]||Je;f[i]=o(a[i],b[i],c,i)}return f}function Gb(a,b,c,d){if(typeof c!=="string")return;var e=a[b];if(I(e,c))return e[c];var f=la(c);if(I(e,f))return e[f];var g=qe(f);if(I(e,g))return e[g];var h=e[c]||e[f]||e[g];return h}function Hb(a,b,c,d){var e=b[a],f=!I(c,a),g=c[a],h=Mc(Boolean,e.type);if(h>-1){if(f&&!I(e,"default"))g=!1;else if(g===""||g===Ka(a)){var i=Mc(String,e.type);(i<0||h<i)&&(g=!0)}}if(g===void 0){g=Oe(d,e,a);var o=Cb;ea(!0),oa(g),ea(o)}return g}function Oe(a,b,c){if(!I(b,"default"))return;var d=b.default;return a&&a.$options.propsData&&a.$options.propsData[c]===void 0&&a._props[c]!==void 0?a._props[c]:typeof d==="function"&&Ib(b.type)!=="Function"?d.call(a):d}function Ib(a){var b=a&&a.toString().match(/^\s*function (\w+)/);return b?b[1]:""}function Lc(a,b){return Ib(a)===Ib(b)}function Mc(a,b){if(!Array.isArray(b))return Lc(b,a)?0:-1;for(var c=0,d=b.length;c<d;c++)if(Lc(b[c],a))return c;return-1}function aa(a,b,c){bb();try{if(b)for(var d=b;d=d.$parent;){var e=d.$options.errorCaptured;if(e)for(var f=0;f<e.length;f++)try{var g=e[f].call(d,a,b,c)===!1;if(g)return}catch(h){Nc(h,d,"errorCaptured hook")}}Nc(a,b,c)}finally{cb()}}function fb(a,b,c,d,e){var f;try{f=c?a.apply(b,c):a.call(b),f&&!f._isVue&&wb(f)&&!f._handled&&(f.catch(function(g){return aa(g,d,e+" (Promise/async)")}),f._handled=!0)}catch(g){aa(g,d,e)}return f}function Nc(a,b,c){if(P.errorHandler)try{return P.errorHandler.call(null,a,b,c)}catch(d){d!==a&&Oc(d)}Oc(a)}function Oc(a,b,c){if((N||yb)&&typeof console!=="undefined")console.error(a);else throw a}var Jb=!1,Kb=[],Lb=!1;function gb(){Lb=!1;var a=Kb.slice(0);Kb.length=0;for(var b=0;b<a.length;b++)a[b]()}var Ma;if(typeof Promise!=="undefined"&&Ca(Promise)){var Pe=Promise.resolve();Ma=function(){Pe.then(gb),Ae&&setTimeout(K)},Jb=!0}else if(!Aa&&typeof MutationObserver!=="undefined"&&(Ca(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")){var hb=1,Qe=new MutationObserver(gb),Pc=document.createTextNode(String(hb));Qe.observe(Pc,{characterData:!0}),Ma=function(){hb=(hb+1)%2,Pc.data=String(hb)},Jb=!0}else typeof setImmediate!=="undefined"&&Ca(setImmediate)?Ma=function(){setImmediate(gb)}:Ma=function(){setTimeout(gb,0)};function Mb(a,b){var c;Kb.push(function(){if(a)try{a.call(b)}catch(d){aa(d,b,"nextTick")}else c&&c(b)}),Lb||(Lb=!0,Ma());if(!a&&typeof Promise!=="undefined")return new Promise(function(d){c=d})}var Qc=new La();function ib(a){Nb(a,Qc),Qc.clear()}function Nb(a,b){var c,d,e=Array.isArray(a);if(!e&&!H(a)||Object.isFrozen(a)||a instanceof L)return;if(a.__ob__){var f=a.__ob__.dep.id;if(b.has(f))return;b.add(f)}if(e)for(c=a.length;c--;)Nb(a[c],b);else for(d=Object.keys(a),c=d.length;c--;)Nb(a[d[c]],b)}var Rc=ka(function(a){var b=a.charAt(0)==="&";a=b?a.slice(1):a;var c=a.charAt(0)==="~";a=c?a.slice(1):a;var d=a.charAt(0)==="!";return a=d?a.slice(1):a,{name:a,once:c,capture:d,passive:b}});function Ob(a,b){function c(){var d=arguments,e=c.fns;if(Array.isArray(e))for(var f=e.slice(),g=0;g<f.length;g++)fb(f[g],null,d,b,"v-on handler");else return fb(e,null,arguments,b,"v-on handler")}return c.fns=a,c}function Sc(a,b,c,d,e,f){var g,h,i,o,m;for(g in a)h=i=a[g],o=b[g],m=Rc(g),t(i)||(t(o)?(t(i.fns)&&(i=a[g]=Ob(i,f)),C(m.once)&&(i=a[g]=e(m.name,i,m.capture)),c(m.name,i,m.capture,m.passive,m.params)):i!==o&&(o.fns=i,a[g]=o));for(g in b)t(a[g])&&(m=Rc(g),d(m.name,b[g],m.capture))}function fa(a,b,c){a instanceof L&&(a=a.data.hook||(a.data.hook={}));var d,e=a[b];function f(){c.apply(this,arguments),$(d.fns,f)}t(e)?d=Ob([f]):l(e.fns)&&C(e.merged)?(d=e,d.fns.push(f)):d=Ob([e,f]),d.merged=!0,a[b]=d}function Re(a,b,c){var d=b.options.props;if(t(d))return;var e={},f=a.attrs,g=a.props;if(l(f)||l(g))for(var h in d){var i=Ka(h);Tc(e,g,h,i,!0)||Tc(e,f,h,i,!1)}return e}function Tc(a,b,c,d,e){if(l(b)){if(I(b,c))return a[c]=b[c],e||delete b[c],!0;if(I(b,d))return a[c]=b[d],e||delete b[d],!0}return!1}function Se(a){for(var b=0;b<a.length;b++)if(Array.isArray(a[b]))return Array.prototype.concat.apply([],a);return a}function Pb(a){return Ia(a)?[Da(a)]:Array.isArray(a)?Uc(a):void 0}function Na(a){return l(a)&&l(a.text)&&je(a.isComment)}function Uc(a,b){var c=[],d,e,f,g;for(d=0;d<a.length;d++){e=a[d];if(t(e)||typeof e==="boolean")continue;f=c.length-1,g=c[f],Array.isArray(e)?e.length>0&&(e=Uc(e,(b||"")+"_"+d),Na(e[0])&&Na(g)&&(c[f]=Da(g.text+e[0].text),e.shift()),c.push.apply(c,e)):Ia(e)?Na(g)?c[f]=Da(g.text+e):e!==""&&c.push(Da(e)):Na(e)&&Na(g)?c[f]=Da(g.text+e.text):(C(a._isVList)&&l(e.tag)&&t(e.key)&&l(b)&&(e.key="__vlist"+b+"_"+d+"__"),c.push(e))}return c}function Te(a){var b=a.$options.provide;b&&(a._provided=typeof b==="function"?b.call(a):b)}function Ue(a){var b=Vc(a.$options.inject,a);b&&(ea(!1),Object.keys(b).forEach(function(c){pa(a,c,b[c])}),ea(!0))}function Vc(a,b){if(a){for(var c=Object.create(null),d=$a?Reflect.ownKeys(a):Object.keys(a),e=0;e<d.length;e++){var f=d[e];if(f==="__ob__")continue;for(var g=a[f].from,h=b;h;){if(h._provided&&I(h._provided,g)){c[f]=h._provided[g];break}h=h.$parent}if(!h){if("default"in a[f]){var i=a[f].default;c[f]=typeof i==="function"?i.call(b):i}}}return c}}function Qb(a,b){if(!a||!a.length)return{};for(var c={},d=0,e=a.length;d<e;d++){var f=a[d],g=f.data;g&&g.attrs&&g.attrs.slot&&delete g.attrs.slot;if((f.context===b||f.fnContext===b)&&g&&g.slot!=null){var h=g.slot,i=c[h]||(c[h]=[]);f.tag==="template"?i.push.apply(i,f.children||[]):i.push(f)}else(c.default||(c.default=[])).push(f)}for(var o in c)c[o].every(Ve)&&delete c[o];return c}function Ve(a){return a.isComment&&!a.asyncFactory||a.text===" "}function jb(a,b,c){var d,e=Object.keys(b).length>0,f=a?!!a.$stable:!e,g=a&&a.$key;if(!a)d={};else{if(a._normalized)return a._normalized;{if(f&&c&&c!==V&&g===c.$key&&!e&&!c.$hasNormal)return c;{d={};for(var h in a)a[h]&&h[0]!=="$"&&(d[h]=We(b,h,a[h]))}}}for(var i in b)i in d||(d[i]=Xe(b,i));return a&&Object.isExtensible(a)&&(a._normalized=d),za(d,"$stable",f),za(d,"$key",g),za(d,"$hasNormal",e),d}function We(a,b,c){var d=function(){var e=arguments.length?c.apply(null,arguments):c({});return e=e&&typeof e==="object"&&!Array.isArray(e)?[e]:Pb(e),e&&(e.length===0||e.length===1&&e[0].isComment)?void 0:e};return c.proxy&&Object.defineProperty(a,b,{get:d,enumerable:!0,configurable:!0}),d}function Xe(a,b){return function(){return a[b]}}function Ye(a,b){var c,d,e,f,g;if(Array.isArray(a)||typeof a==="string")for(c=new Array(a.length),d=0,e=a.length;d<e;d++)c[d]=b(a[d],d);else if(typeof a==="number")for(c=new Array(a),d=0;d<a;d++)c[d]=b(d+1,d);else if(H(a))if($a&&a[Symbol.iterator]){c=[];for(var h=a[Symbol.iterator](),i=h.next();!i.done;)c.push(b(i.value,c.length)),i=h.next()}else for(f=Object.keys(a),c=new Array(f.length),d=0,e=f.length;d<e;d++)g=f[d],c[d]=b(a[g],g,d);return l(c)||(c=[]),c._isVList=!0,c}function Ze(a,b,c,d){var e=this.$scopedSlots[a],f;e?(c=c||{},d&&(c=B(B({},d),c)),f=e(c)||b):f=this.$slots[a]||b;var g=c&&c.slot;return g?this.$createElement("template",{slot:g},f):f}function _e(a){return Gb(this.$options,"filters",a)||yc}function Wc(a,b){return Array.isArray(a)?a.indexOf(b)===-1:a!==b}function $e(a,b,c,d,e){var f=P.keyCodes[b]||c;if(e&&d&&!P.keyCodes[b])return Wc(e,d);{if(f)return Wc(f,a);if(d)return Ka(d)!==b}}function af(a,b,c,d,e){if(c){if(H(c)){Array.isArray(c)&&(c=xc(c));var f,g=function(i){if(i==="class"||i==="style"||ne(i))f=a;else{var o=a.attrs&&a.attrs.type;f=d||P.mustUseProp(b,o,i)?a.domProps||(a.domProps={}):a.attrs||(a.attrs={})}var m=la(i),p=Ka(i);if(!(m in f)&&!(p in f)){f[i]=c[i];if(e){var q=a.on||(a.on={});q["update:"+i]=function(w){c[i]=w}}}};for(var h in c)g(h)}}return a}function bf(a,b){var c=this._staticTrees||(this._staticTrees=[]),d=c[a];return d&&!b?d:(d=c[a]=this.$options.staticRenderFns[a].call(this._renderProxy,null,this),Xc(d,"__static__"+a,!1),d)}function cf(a,b,c){return Xc(a,"__once__"+b+(c?"_"+c:""),!0),a}function Xc(a,b,c){if(Array.isArray(a))for(var d=0;d<a.length;d++)a[d]&&typeof a[d]!=="string"&&Yc(a[d],b+"_"+d,c);else Yc(a,b,c)}function Yc(a,b,c){a.isStatic=!0,a.key=b,a.isOnce=c}function df(a,b){if(b){if(J(b)){var c=a.on=a.on?B({},a.on):{};for(var d in b){var e=c[d],f=b[d];c[d]=e?[].concat(e,f):f}}}return a}function Zc(a,b,c,d){b=b||{$stable:!c};for(var e=0;e<a.length;e++){var f=a[e];Array.isArray(f)?Zc(f,b,c):f&&(f.proxy&&(f.fn.proxy=!0),b[f.key]=f.fn)}return d&&(b.$key=d),b}function ef(a,b){for(var c=0;c<b.length;c+=2){var d=b[c];typeof d==="string"&&d&&(a[b[c]]=b[c+1])}return a}function ff(a,b){return typeof a==="string"?b+a:a}function _c(a){a._o=cf,a._n=Ja,a._s=me,a._l=Ye,a._t=Ze,a._q=ma,a._i=zc,a._m=bf,a._f=_e,a._k=$e,a._b=af,a._v=Da,a._e=na,a._u=Zc,a._g=df,a._d=ef,a._p=ff}function Rb(a,b,c,d,e){var f=this,g=e.options,h;I(d,"_uid")?(h=Object.create(d),h._original=d):(h=d,d=d._original);var i=C(g._compiled),o=!i;this.data=a,this.props=b,this.children=c,this.parent=d,this.listeners=a.on||V,this.injections=Vc(g.inject,d),this.slots=function(){return f.$slots||jb(a.scopedSlots,f.$slots=Qb(c,d)),f.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function m(){return jb(a.scopedSlots,this.slots())}}),i&&(this.$options=g,this.$slots=this.slots(),this.$scopedSlots=jb(a.scopedSlots,this.$slots)),g._scopeId?this._c=function(m,p,q,w){var E=kb(h,m,p,q,w,o);return E&&!Array.isArray(E)&&(E.fnScopeId=g._scopeId,E.fnContext=d),E}:this._c=function(m,p,q,w){return kb(h,m,p,q,w,o)}}_c(Rb.prototype);function gf(a,b,c,d,e){var f=a.options,g={},h=f.props;if(l(h))for(var i in h)g[i]=Hb(i,h,b||V);else l(c.attrs)&&ad(g,c.attrs),l(c.props)&&ad(g,c.props);var o=new Rb(c,g,e,d,a),m=f.render.call(null,o._c,o);if(m instanceof L)return $c(m,c,o.parent,f);if(Array.isArray(m)){for(var p=Pb(m)||[],q=new Array(p.length),w=0;w<p.length;w++)q[w]=$c(p[w],c,o.parent,f);return q}}function $c(a,b,c,d,e){var f=Bb(a);return f.fnContext=c,f.fnOptions=d,b.slot&&((f.data||(f.data={})).slot=b.slot),f}function ad(a,b){for(var c in b)a[la(c)]=b[c]}var Sb={init:function a(b,c){if(b.componentInstance&&!b.componentInstance._isDestroyed&&b.data.keepAlive){var d=b;Sb.prepatch(d,d)}else{var e=b.componentInstance=hf(b,ra);e.$mount(c?b.elm:void 0,c)}},prepatch:function a(b,c){var d=c.componentOptions,e=c.componentInstance=b.componentInstance;Bf(e,d.propsData,d.listeners,c,d.children)},insert:function a(b){var c=b.context,d=b.componentInstance;d._isMounted||(d._isMounted=!0,T(d,"mounted")),b.data.keepAlive&&(c._isMounted?Ff(d):Vb(d,!0))},destroy:function a(b){var c=b.componentInstance;c._isDestroyed||(b.data.keepAlive?jd(c,!0):c.$destroy())}},bd=Object.keys(Sb);function cd(a,b,c,d,e){if(t(a))return;var f=c.$options._base;H(a)&&(a=f.extend(a));if(typeof a!=="function")return;var g;if(t(a.cid)){g=a,a=sf(g,f);if(a===void 0)return rf(g,b,c,d,e)}b=b||{},bc(a),l(b.model)&&lf(a.options,b);var h=Re(b,a);if(C(a.options.functional))return gf(a,h,b,c,d);var i=b.on;b.on=b.nativeOn;if(C(a.options.abstract)){var o=b.slot;b={},o&&(b.slot=o)}jf(b);var m=a.options.name||e,p=new L("vue-component-"+a.cid+(m?"-"+m:""),b,void 0,void 0,void 0,c,{Ctor:a,propsData:h,listeners:i,tag:e,children:d},g);return p}function hf(a,b){var c={_isComponent:!0,_parentVnode:a,parent:b},d=a.data.inlineTemplate;return l(d)&&(c.render=d.render,c.staticRenderFns=d.staticRenderFns),new a.componentOptions.Ctor(c)}function jf(a){for(var b=a.hook||(a.hook={}),c=0;c<bd.length;c++){var d=bd[c],e=b[d],f=Sb[d];e!==f&&!(e&&e._merged)&&(b[d]=e?kf(f,e):f)}}function kf(a,b){var c=function(d,e){a(d,e),b(d,e)};return c._merged=!0,c}function lf(a,b){var c=a.model&&a.model.prop||"value",d=a.model&&a.model.event||"input";(b.attrs||(b.attrs={}))[c]=b.model.value;var e=b.on||(b.on={}),f=e[d],g=b.model.callback;l(f)?(Array.isArray(f)?f.indexOf(g)===-1:f!==g)&&(e[d]=[g].concat(f)):e[d]=g}var mf=1,dd=2;function kb(a,b,c,d,e,f){return(Array.isArray(c)||Ia(c))&&(e=d,d=c,c=void 0),C(f)&&(e=dd),nf(a,b,c,d,e)}function nf(a,b,c,d,e){if(l(c)&&l(c.__ob__))return na();l(c)&&l(c.is)&&(b=c.is);if(!b)return na();Array.isArray(d)&&typeof d[0]==="function"&&(c=c||{},c.scopedSlots={default:d[0]},d.length=0),e===dd?d=Pb(d):e===mf&&(d=Se(d));var f,g;if(typeof b==="string"){var h;g=a.$vnode&&a.$vnode.ns||P.getTagNamespace(b),P.isReservedTag(b)?f=new L(P.parsePlatformTagName(b),c,d,void 0,void 0,a):(!c||!c.pre)&&l(h=Gb(a.$options,"components",b))?f=cd(h,c,a,d,b):f=new L(b,c,d,void 0,void 0,a)}else f=cd(b,c,a,d);return Array.isArray(f)?f:l(f)?(l(g)&&ed(f,g),l(c)&&of(c),f):na()}function ed(a,b,c){a.ns=b,a.tag==="foreignObject"&&(b=void 0,c=!0);if(l(a.children))for(var d=0,e=a.children.length;d<e;d++){var f=a.children[d];l(f.tag)&&(t(f.ns)||C(c)&&f.tag!=="svg")&&ed(f,b,c)}}function of(a){H(a.style)&&ib(a.style),H(a.class)&&ib(a.class)}function pf(a){a._vnode=null,a._staticTrees=null;var b=a.$options,c=a.$vnode=b._parentVnode,d=c&&c.context;a.$slots=Qb(b._renderChildren,d),a.$scopedSlots=V,a._c=function(f,g,h,i){return kb(a,f,g,h,i,!1)},a.$createElement=function(f,g,h,i){return kb(a,f,g,h,i,!0)};var e=c&&c.data;pa(a,"$attrs",e&&e.attrs||V,null,!0),pa(a,"$listeners",b._parentListeners||V,null,!0)}var Tb=null;function qf(a){_c(a.prototype),a.prototype.$nextTick=function(b){return Mb(b,this)},a.prototype._render=function(){var b=this,c=b.$options,d=c.render,e=c._parentVnode;e&&(b.$scopedSlots=jb(e.data.scopedSlots,b.$slots,b.$scopedSlots)),b.$vnode=e;var f;try{Tb=b,f=d.call(b._renderProxy,b.$createElement)}catch(g){aa(g,b,"render"),f=b._vnode}finally{Tb=null}return Array.isArray(f)&&f.length===1&&(f=f[0]),f instanceof L||(f=na()),f.parent=e,f}}function Ub(a,b){return(a.__esModule||$a&&a[Symbol.toStringTag]==="Module")&&(a=a.default),H(a)?b.extend(a):a}function rf(a,b,c,d,e){var f=na();return f.asyncFactory=a,f.asyncMeta={data:b,context:c,children:d,tag:e},f}function sf(a,b){if(C(a.error)&&l(a.errorComp))return a.errorComp;if(l(a.resolved))return a.resolved;var c=Tb;c&&l(a.owners)&&a.owners.indexOf(c)===-1&&a.owners.push(c);if(C(a.loading)&&l(a.loadingComp))return a.loadingComp;if(c&&!l(a.owners)){var d=a.owners=[c],e=!0,f=null,g=null;c.$on("hook:destroyed",function(){return $(d,c)});var h=function(p){for(var q=0,w=d.length;q<w;q++)d[q].$forceUpdate();p&&(d.length=0,f!==null&&(clearTimeout(f),f=null),g!==null&&(clearTimeout(g),g=null))},i=Wa(function(p){a.resolved=Ub(p,b),e?d.length=0:h(!0)}),o=Wa(function(p){l(a.errorComp)&&(a.error=!0,h(!0))}),m=a(i,o);return H(m)&&(wb(m)?t(a.resolved)&&m.then(i,o):wb(m.component)&&(m.component.then(i,o),l(m.error)&&(a.errorComp=Ub(m.error,b)),l(m.loading)&&(a.loadingComp=Ub(m.loading,b),m.delay===0?a.loading=!0:f=setTimeout(function(){f=null,t(a.resolved)&&t(a.error)&&(a.loading=!0,h(!1))},m.delay||200)),l(m.timeout)&&(g=setTimeout(function(){g=null,t(a.resolved)&&o(null)},m.timeout)))),e=!1,a.loading?a.loadingComp:a.resolved}}function lb(a){return a.isComment&&a.asyncFactory}function fd(a){if(Array.isArray(a))for(var b=0;b<a.length;b++){var c=a[b];if(l(c)&&(l(c.componentOptions)||lb(c)))return c}}function tf(a){a._events=Object.create(null),a._hasHookEvent=!1;var b=a.$options._parentListeners;b&&gd(a,b)}var Oa;function uf(a,b){Oa.$on(a,b)}function vf(a,b){Oa.$off(a,b)}function wf(a,b){var c=Oa;return function d(){var e=b.apply(null,arguments);e!==null&&c.$off(a,d)}}function gd(a,b,c){Oa=a,Sc(b,c||{},uf,vf,wf,a),Oa=void 0}function xf(a){var b=/^hook:/;a.prototype.$on=function(c,d){var e=this;if(Array.isArray(c))for(var f=0,g=c.length;f<g;f++)e.$on(c[f],d);else(e._events[c]||(e._events[c]=[])).push(d),b.test(c)&&(e._hasHookEvent=!0);return e},a.prototype.$once=function(c,d){var e=this;function f(){e.$off(c,f),d.apply(e,arguments)}return f.fn=d,e.$on(c,f),e},a.prototype.$off=function(c,d){var e=this;if(!arguments.length)return e._events=Object.create(null),e;if(Array.isArray(c)){for(var f=0,g=c.length;f<g;f++)e.$off(c[f],d);return e}var h=e._events[c];if(!h)return e;if(!d)return e._events[c]=null,e;for(var i,o=h.length;o--;){i=h[o];if(i===d||i.fn===d){h.splice(o,1);break}}return e},a.prototype.$emit=function(c){var d=this,e=d._events[c];if(e){e=e.length>1?xb(e):e;for(var f=xb(arguments,1),g='event handler for "'+c+'"',h=0,i=e.length;h<i;h++)fb(e[h],d,f,d,g)}return d}}var ra=null;function hd(a){var b=ra;return ra=a,function(){ra=b}}function yf(a){var b=a.$options,c=b.parent;if(c&&!b.abstract){for(;c.$options.abstract&&c.$parent;)c=c.$parent;c.$children.push(a)}a.$parent=c,a.$root=c?c.$root:a,a.$children=[],a.$refs={},a._watcher=null,a._inactive=null,a._directInactive=!1,a._isMounted=!1,a._isDestroyed=!1,a._isBeingDestroyed=!1}function zf(a){a.prototype._update=function(b,c){var d=this,e=d.$el,f=d._vnode,g=hd(d);d._vnode=b,f?d.$el=d.__patch__(f,b):d.$el=d.__patch__(d.$el,b,c,!1),g(),e&&(e.__vue__=null),d.$el&&(d.$el.__vue__=d),d.$vnode&&d.$parent&&d.$vnode===d.$parent._vnode&&(d.$parent.$el=d.$el)},a.prototype.$forceUpdate=function(){var b=this;b._watcher&&b._watcher.update()},a.prototype.$destroy=function(){var b=this;if(b._isBeingDestroyed)return;T(b,"beforeDestroy"),b._isBeingDestroyed=!0;var c=b.$parent;c&&!c._isBeingDestroyed&&!b.$options.abstract&&$(c.$children,b),b._watcher&&b._watcher.teardown();for(var d=b._watchers.length;d--;)b._watchers[d].teardown();b._data.__ob__&&b._data.__ob__.vmCount--,b._isDestroyed=!0,b.__patch__(b._vnode,null),T(b,"destroyed"),b.$off(),b.$el&&(b.$el.__vue__=null),b.$vnode&&(b.$vnode.parent=null)}}function Af(a,b,c){a.$el=b,a.$options.render||(a.$options.render=na),T(a,"beforeMount");var d;return d=function(){a._update(a._render(),c)},new U(a,d,K,{before:function e(){a._isMounted&&!a._isDestroyed&&T(a,"beforeUpdate")}},!0),c=!1,a.$vnode==null&&(a._isMounted=!0,T(a,"mounted")),a}function Bf(a,b,c,d,e){var f=d.data.scopedSlots,g=a.$scopedSlots,h=!!(f&&!f.$stable||g!==V&&!g.$stable||f&&a.$scopedSlots.$key!==f.$key),i=!!(e||a.$options._renderChildren||h);a.$options._parentVnode=d,a.$vnode=d,a._vnode&&(a._vnode.parent=d),a.$options._renderChildren=e,a.$attrs=d.data.attrs||V,a.$listeners=c||V;if(b&&a.$options.props){ea(!1);for(var o=a._props,m=a.$options._propKeys||[],p=0;p<m.length;p++){var q=m[p],w=a.$options.props;o[q]=Hb(q,w,b,a)}ea(!0),a.$options.propsData=b}c=c||V;var E=a.$options._parentListeners;a.$options._parentListeners=c,gd(a,c,E),i&&(a.$slots=Qb(e,d.context),a.$forceUpdate())}function id(a){for(;a&&(a=a.$parent);)if(a._inactive)return!0;return!1}function Vb(a,b){if(b){a._directInactive=!1;if(id(a))return}else if(a._directInactive)return;if(a._inactive||a._inactive===null){a._inactive=!1;for(var c=0;c<a.$children.length;c++)Vb(a.$children[c]);T(a,"activated")}}function jd(a,b){if(b){a._directInactive=!0;if(id(a))return}if(!a._inactive){a._inactive=!0;for(var c=0;c<a.$children.length;c++)jd(a.$children[c]);T(a,"deactivated")}}function T(a,b){bb();var c=a.$options[b],d=b+" hook";if(c)for(var e=0,f=c.length;e<f;e++)fb(c[e],a,null,a,d);a._hasHookEvent&&a.$emit("hook:"+b),cb()}var ba=[],Wb=[],mb={},Xb=!1,Yb=!1,Ea=0;function Cf(){Ea=ba.length=Wb.length=0,mb={},Xb=Yb=!1}var kd=0,Zb=Date.now;if(N&&!Aa){var _b=window.performance;_b&&typeof _b.now==="function"&&Zb()>document.createEvent("Event").timeStamp&&(Zb=function(){return _b.now()})}function Df(){kd=Zb(),Yb=!0;var a,b;for(ba.sort(function(e,f){return e.id-f.id}),Ea=0;Ea<ba.length;Ea++)a=ba[Ea],a.before&&a.before(),b=a.id,mb[b]=null,a.run();var c=Wb.slice(),d=ba.slice();Cf(),Gf(c),Ef(d),_a&&P.devtools&&_a.emit("flush")}function Ef(a){for(var b=a.length;b--;){var c=a[b],d=c.vm;d._watcher===c&&d._isMounted&&!d._isDestroyed&&T(d,"updated")}}function Ff(a){a._inactive=!1,Wb.push(a)}function Gf(a){for(var b=0;b<a.length;b++)a[b]._inactive=!0,Vb(a[b],!0)}function Hf(a){var b=a.id;if(mb[b]==null){mb[b]=!0;if(!Yb)ba.push(a);else{for(var c=ba.length-1;c>Ea&&ba[c].id>a.id;)c--;ba.splice(c+1,0,a)}Xb||(Xb=!0,Mb(Df))}}var If=0,U=function a(b,c,d,e,f){this.vm=b,f&&(b._watcher=this),b._watchers.push(this),e?(this.deep=!!e.deep,this.user=!!e.user,this.lazy=!!e.lazy,this.sync=!!e.sync,this.before=e.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=d,this.id=++If,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new La(),this.newDepIds=new La(),this.expression="",typeof c==="function"?this.getter=c:(this.getter=ye(c),this.getter||(this.getter=K)),this.value=this.lazy?void 0:this.get()};U.prototype.get=function a(){bb(this);var b,c=this.vm;try{b=this.getter.call(c,c)}catch(d){if(this.user)aa(d,c,'getter for watcher "'+this.expression+'"');else throw d}finally{this.deep&&ib(b),cb(),this.cleanupDeps()}return b},U.prototype.addDep=function a(b){var c=b.id;this.newDepIds.has(c)||(this.newDepIds.add(c),this.newDeps.push(b),this.depIds.has(c)||b.addSub(this))},U.prototype.cleanupDeps=function a(){for(var b=this.deps.length;b--;){var c=this.deps[b];this.newDepIds.has(c.id)||c.removeSub(this)}var d=this.depIds;this.depIds=this.newDepIds,this.newDepIds=d,this.newDepIds.clear(),d=this.deps,this.deps=this.newDeps,this.newDeps=d,this.newDeps.length=0},U.prototype.update=function a(){this.lazy?this.dirty=!0:this.sync?this.run():Hf(this)},U.prototype.run=function a(){if(this.active){var b=this.get();if(b!==this.value||H(b)||this.deep){var c=this.value;this.value=b;if(this.user)try{this.cb.call(this.vm,b,c)}catch(d){aa(d,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,b,c)}}},U.prototype.evaluate=function a(){this.value=this.get(),this.dirty=!1},U.prototype.depend=function a(){for(var b=this.deps.length;b--;)this.deps[b].depend()},U.prototype.teardown=function a(){if(this.active){this.vm._isBeingDestroyed||$(this.vm._watchers,this);for(var b=this.deps.length;b--;)this.deps[b].removeSub(this);this.active=!1}};var ga={enumerable:!0,configurable:!0,get:K,set:K};function $b(a,b,c){ga.get=function d(){return this[b][c]},ga.set=function d(e){this[b][c]=e},Object.defineProperty(a,c,ga)}function Jf(a){a._watchers=[];var b=a.$options;b.props&&Kf(a,b.props),b.methods&&Pf(a,b.methods),b.data?Lf(a):oa(a._data={},!0),b.computed&&Of(a,b.computed),b.watch&&b.watch!==Ab&&Qf(a,b.watch)}function Kf(a,b){var c=a.$options.propsData||{},d=a._props={},e=a.$options._propKeys=[],f=!a.$parent;f||ea(!1);var g=function(i){e.push(i);var o=Hb(i,b,c,a);pa(d,i,o),i in a||$b(a,"_props",i)};for(var h in b)g(h);ea(!0)}function Lf(a){var b=a.$options.data;b=a._data=typeof b==="function"?Mf(b,a):b||{},J(b)||(b={});for(var c=Object.keys(b),d=a.$options.props,e=a.$options.methods,f=c.length;f--;){var g=c[f];d&&I(d,g)||(we(g)||$b(a,"_data",g))}oa(b,!0)}function Mf(a,b){bb();try{return a.call(b,b)}catch(c){return aa(c,b,"data()"),{}}finally{cb()}}var Nf={lazy:!0};function Of(a,b){var c=a._computedWatchers=Object.create(null),d=Za();for(var e in b){var f=b[e],g=typeof f==="function"?f:f.get;d||(c[e]=new U(a,g||K,K,Nf)),e in a||ld(a,e,f)}}function ld(a,b,c){var d=!Za();typeof c==="function"?(ga.get=d?md(b):nd(c),ga.set=K):(ga.get=c.get?d&&c.cache!==!1?md(b):nd(c.get):K,ga.set=c.set||K),Object.defineProperty(a,b,ga)}function md(a){return function b(){var c=this._computedWatchers&&this._computedWatchers[a];if(c)return c.dirty&&c.evaluate(),O.target&&c.depend(),c.value}}function nd(a){return function b(){return a.call(this,this)}}function Pf(a,b){var c=a.$options.props;for(var d in b)a[d]=typeof b[d]!=="function"?K:ue(b[d],a)}function Qf(a,b){for(var c in b){var d=b[c];if(Array.isArray(d))for(var e=0;e<d.length;e++)ac(a,c,d[e]);else ac(a,c,d)}}function ac(a,b,c,d){return J(c)&&(d=c,c=c.handler),typeof c==="string"&&(c=a[c]),a.$watch(b,c,d)}function Rf(a){var b={};b.get=function(){return this._data};var c={};c.get=function(){return this._props},Object.defineProperty(a.prototype,"$data",b),Object.defineProperty(a.prototype,"$props",c),a.prototype.$set=Db,a.prototype.$delete=Jc,a.prototype.$watch=function(d,e,f){var g=this;if(J(e))return ac(g,d,e,f);f=f||{},f.user=!0;var h=new U(g,d,e,f);if(f.immediate)try{e.call(g,h.value)}catch(i){aa(i,g,'callback for immediate watcher "'+h.expression+'"')}return function i(){h.teardown()}}}var Sf=0;function Tf(a){a.prototype._init=function(b){var c=this;c._uid=Sf++,c._isVue=!0,b&&b._isComponent?Uf(c,b):c.$options=qa(bc(c.constructor),b||{},c),c._renderProxy=c,c._self=c,yf(c),tf(c),pf(c),T(c,"beforeCreate"),Ue(c),Jf(c),Te(c),T(c,"created"),c.$options.el&&c.$mount(c.$options.el)}}function Uf(a,b){var c=a.$options=Object.create(a.constructor.options),d=b._parentVnode;c.parent=b.parent,c._parentVnode=d;var e=d.componentOptions;c.propsData=e.propsData,c._parentListeners=e.listeners,c._renderChildren=e.children,c._componentTag=e.tag,b.render&&(c.render=b.render,c.staticRenderFns=b.staticRenderFns)}function bc(a){var b=a.options;if(a.super){var c=bc(a.super),d=a.superOptions;if(c!==d){a.superOptions=c;var e=Vf(a);e&&B(a.extendOptions,e),b=a.options=qa(c,a.extendOptions),b.name&&(b.components[b.name]=a)}}return b}function Vf(a){var b,c=a.options,d=a.sealedOptions;for(var e in c)c[e]!==d[e]&&(b||(b={}),b[e]=c[e]);return b}function D(a){this._init(a)}Tf(D),Rf(D),xf(D),zf(D),qf(D);function Wf(a){a.use=function(b){var c=this._installedPlugins||(this._installedPlugins=[]);if(c.indexOf(b)>-1)return this;var d=xb(arguments,1);return d.unshift(this),typeof b.install==="function"?b.install.apply(b,d):typeof b==="function"&&b.apply(null,d),c.push(b),this}}function Xf(a){a.mixin=function(b){return this.options=qa(this.options,b),this}}function Yf(a){a.cid=0;var b=1;a.extend=function(c){c=c||{};var d=this,e=d.cid,f=c._Ctor||(c._Ctor={});if(f[e])return f[e];var g=c.name||d.options.name,h=function i(o){this._init(o)};return h.prototype=Object.create(d.prototype),h.prototype.constructor=h,h.cid=b++,h.options=qa(d.options,c),h.super=d,h.options.props&&Zf(h),h.options.computed&&_f(h),h.extend=d.extend,h.mixin=d.mixin,h.use=d.use,Xa.forEach(function(i){h[i]=d[i]}),g&&(h.options.components[g]=h),h.superOptions=d.options,h.extendOptions=c,h.sealedOptions=B({},h.options),f[e]=h,h}}function Zf(a){var b=a.options.props;for(var c in b)$b(a.prototype,"_props",c)}function _f(a){var b=a.options.computed;for(var c in b)ld(a.prototype,c,b[c])}function $f(a){Xa.forEach(function(b){a[b]=function(c,d){return d?(b==="component"&&J(d)&&(d.name=d.name||c,d=this.options._base.extend(d)),b==="directive"&&typeof d==="function"&&(d={bind:d,update:d}),this.options[b+"s"][c]=d,d):this.options[b+"s"][c]}})}function od(a){return a&&(a.Ctor.options.name||a.tag)}function nb(a,b){if(Array.isArray(a))return a.indexOf(b)>-1;{if(typeof a==="string")return a.split(",").indexOf(b)>-1;if(le(a))return a.test(b)}return!1}function pd(a,b){var c=a.cache,d=a.keys,e=a._vnode;for(var f in c){var g=c[f];if(g){var h=od(g.componentOptions);h&&!b(h)&&cc(c,f,d,e)}}}function cc(a,b,c,d){var e=a[b];e&&(!d||e.tag!==d.tag)&&e.componentInstance.$destroy(),a[b]=null,$(c,b)}var qd=[String,RegExp,Array],ag={name:"keep-alive",abstract:!0,props:{include:qd,exclude:qd,max:[String,Number]},created:function a(){this.cache=Object.create(null),this.keys=[]},destroyed:function a(){for(var b in this.cache)cc(this.cache,b,this.keys)},mounted:function a(){var b=this;this.$watch("include",function(c){pd(b,function(d){return nb(c,d)})}),this.$watch("exclude",function(c){pd(b,function(d){return!nb(c,d)})})},render:function a(){var b=this.$slots.default,c=fd(b),d=c&&c.componentOptions;if(d){var e=od(d),f=this,g=f.include,h=f.exclude;if(g&&(!e||!nb(g,e))||h&&e&&nb(h,e))return c;var i=this,o=i.cache,m=i.keys,p=c.key==null?d.Ctor.cid+(d.tag?"::"+d.tag:""):c.key;o[p]?(c.componentInstance=o[p].componentInstance,$(m,p),m.push(p)):(o[p]=c,m.push(p),this.max&&m.length>parseInt(this.max)&&cc(o,m[0],m,this._vnode)),c.data.keepAlive=!0}return c||b&&b[0]}},bg={KeepAlive:ag};function cg(a){var b={};b.get=function(){return P},Object.defineProperty(a,"config",b),a.util={warn:Gc,extend:B,mergeOptions:qa,defineReactive:pa},a.set=Db,a.delete=Jc,a.nextTick=Mb,a.observable=function(c){return oa(c),c},a.options=Object.create(null),Xa.forEach(function(c){a.options[c+"s"]=Object.create(null)}),a.options._base=a,B(a.options.components,bg),Wf(a),Xf(a),Yf(a),$f(a)}cg(D),Object.defineProperty(D.prototype,"$isServer",{get:Za}),Object.defineProperty(D.prototype,"$ssrContext",{get:function a(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(D,"FunctionalRenderContext",{value:Rb}),D.version="2.6.11";var dg=S("style,class"),eg=S("input,textarea,option,select,progress"),fg=function(a,b,c){return c==="value"&&eg(a)&&b!=="button"||c==="selected"&&a==="option"||c==="checked"&&a==="input"||c==="muted"&&a==="video"},rd=S("contenteditable,draggable,spellcheck"),gg=S("events,caret,typing,plaintext-only"),hg=function(a,b){return ob(b)||b==="false"?"false":a==="contenteditable"&&gg(b)?b:"true"},ig=S("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),dc="http://www.w3.org/1999/xlink",ec=function(a){return a.charAt(5)===":"&&a.slice(0,5)==="xlink"},sd=function(a){return ec(a)?a.slice(6,a.length):""},ob=function(a){return a==null||a===!1};function jg(a){for(var b=a.data,c=a,d=a;l(d.componentInstance);)d=d.componentInstance._vnode,d&&d.data&&(b=td(d.data,b));for(;l(c=c.parent);)c&&c.data&&(b=td(b,c.data));return kg(b.staticClass,b.class)}function td(a,b){return{staticClass:fc(a.staticClass,b.staticClass),class:l(a.class)?[a.class,b.class]:b.class}}function kg(a,b){return l(a)||l(b)?fc(a,gc(b)):""}function fc(a,b){return a?b?a+" "+b:a:b||""}function gc(a){return Array.isArray(a)?lg(a):H(a)?mg(a):typeof a==="string"?a:""}function lg(a){for(var b="",c,d=0,e=a.length;d<e;d++)l(c=gc(a[d]))&&c!==""&&(b&&(b+=" "),b+=c);return b}function mg(a){var b="";for(var c in a)a[c]&&(b&&(b+=" "),b+=c);return b}var ng={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},og=S("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),hc=S("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ud=function(a){return og(a)||hc(a)};function pg(a){if(hc(a))return"svg";if(a==="math")return"math"}var pb=Object.create(null);function qg(a){if(!N)return!0;if(ud(a))return!1;a=a.toLowerCase();if(pb[a]!=null)return pb[a];var b=document.createElement(a);return a.indexOf("-")>-1?pb[a]=b.constructor===window.HTMLUnknownElement||b.constructor===window.HTMLElement:pb[a]=/HTMLUnknownElement/.test(b.toString())}var ic=S("text,number,password,search,email,tel,url");function rg(a){if(typeof a==="string"){var b=document.querySelector(a);return b?b:document.createElement("div")}else return a}function sg(a,b){var c=document.createElement(a);return a!=="select"?c:(b.data&&b.data.attrs&&b.data.attrs.multiple!==void 0&&c.setAttribute("multiple","multiple"),c)}function tg(a,b){return document.createElementNS(ng[a],b)}function ug(a){return document.createTextNode(a)}function vg(a){return document.createComment(a)}function wg(a,b,c){a.insertBefore(b,c)}function xg(a,b){a.removeChild(b)}function yg(a,b){a.appendChild(b)}function zg(a){return a.parentNode}function Ag(a){return a.nextSibling}function Bg(a){return a.tagName}function Cg(a,b){a.textContent=b}function Dg(a,b){a.setAttribute(b,"")}var Eg=Object.freeze({createElement:sg,createElementNS:tg,createTextNode:ug,createComment:vg,insertBefore:wg,removeChild:xg,appendChild:yg,parentNode:zg,nextSibling:Ag,tagName:Bg,setTextContent:Cg,setStyleScope:Dg}),Fg={create:function a(b,c){Fa(c)},update:function a(b,c){b.data.ref!==c.data.ref&&(Fa(b,!0),Fa(c))},destroy:function a(b){Fa(b,!0)}};function Fa(a,b){var c=a.data.ref;if(!l(c))return;var d=a.context,e=a.componentInstance||a.elm,f=d.$refs;b?Array.isArray(f[c])?$(f[c],e):f[c]===e&&(f[c]=void 0):a.data.refInFor?Array.isArray(f[c])?f[c].indexOf(e)<0&&f[c].push(e):f[c]=[e]:f[c]=e}var sa=new L("",{},[]),Pa=["create","activate","update","remove","destroy"];function ta(a,b){return a.key===b.key&&(a.tag===b.tag&&a.isComment===b.isComment&&l(a.data)===l(b.data)&&Gg(a,b)||C(a.isAsyncPlaceholder)&&a.asyncFactory===b.asyncFactory&&t(b.asyncFactory.error))}function Gg(a,b){if(a.tag!=="input")return!0;var c,d=l(c=a.data)&&l(c=c.attrs)&&c.type,e=l(c=b.data)&&l(c=c.attrs)&&c.type;return d===e||ic(d)&&ic(e)}function Hg(a,b,c){var d,e,f={};for(d=b;d<=c;++d)e=a[d].key,l(e)&&(f[e]=d);return f}function Ig(a){var b,c,d={},e=a.modules,f=a.nodeOps;for(b=0;b<Pa.length;++b)for(d[Pa[b]]=[],c=0;c<e.length;++c)l(e[c][Pa[b]])&&d[Pa[b]].push(e[c][Pa[b]]);function g(k){return new L(f.tagName(k).toLowerCase(),{},[],void 0,k)}function h(k,j){function n(){--n.listeners===0&&i(k)}return n.listeners=j,n}function i(k){var j=f.parentNode(k);l(j)&&f.removeChild(j,k)}function o(k,j,n,r,s,x,u){l(k.elm)&&l(x)&&(k=x[u]=Bb(k)),k.isRootInsert=!s;if(m(k,j,n,r))return;var v=k.data,y=k.children,z=k.tag;l(z)?(k.elm=k.ns?f.createElementNS(k.ns,z):f.createElement(z,k),X(k),E(k,y,j),l(v)&&ha(k,j),w(n,k.elm,r)):C(k.isComment)?(k.elm=f.createComment(k.text),w(n,k.elm,r)):(k.elm=f.createTextNode(k.text),w(n,k.elm,r))}function m(k,j,n,r){var s=k.data;if(l(s)){var x=l(k.componentInstance)&&s.keepAlive;l(s=s.hook)&&l(s=s.init)&&s(k,!1);if(l(k.componentInstance))return p(k,j),w(n,k.elm,r),C(x)&&q(k,j,n,r),!0}}function p(k,j){l(k.data.pendingInsert)&&(j.push.apply(j,k.data.pendingInsert),k.data.pendingInsert=null),k.elm=k.componentInstance.$el,M(k)?(ha(k,j),X(k)):(Fa(k),j.push(k))}function q(k,j,n,r){for(var s,x=k;x.componentInstance;){x=x.componentInstance._vnode;if(l(s=x.data)&&l(s=s.transition)){for(s=0;s<d.activate.length;++s)d.activate[s](sa,x);j.push(x);break}}w(n,k.elm,r)}function w(k,j,n){l(k)&&(l(n)?f.parentNode(n)===k&&f.insertBefore(k,j,n):f.appendChild(k,j))}function E(k,j,n){if(Array.isArray(j))for(var r=0;r<j.length;++r)o(j[r],n,k.elm,null,!0,j,r);else Ia(k.text)&&f.appendChild(k.elm,f.createTextNode(String(k.text)))}function M(k){for(;k.componentInstance;)k=k.componentInstance._vnode;return l(k.tag)}function ha(k,j){for(var n=0;n<d.create.length;++n)d.create[n](sa,k);b=k.data.hook,l(b)&&(l(b.create)&&b.create(sa,k),l(b.insert)&&j.push(k))}function X(k){var j;if(l(j=k.fnScopeId))f.setStyleScope(k.elm,j);else for(var n=k;n;)l(j=n.context)&&l(j=j.$options._scopeId)&&f.setStyleScope(k.elm,j),n=n.parent;l(j=ra)&&j!==k.context&&j!==k.fnContext&&l(j=j.$options._scopeId)&&f.setStyleScope(k.elm,j)}function Q(k,j,n,r,s,x){for(;r<=s;++r)o(n[r],x,k,j,!1,n,r)}function da(k){var j,n,r=k.data;if(l(r))for(l(j=r.hook)&&l(j=j.destroy)&&j(k),j=0;j<d.destroy.length;++j)d.destroy[j](k);if(l(j=k.children))for(n=0;n<k.children.length;++n)da(k.children[n])}function va(k,j,n){for(;j<=n;++j){var r=k[j];l(r)&&(l(r.tag)?(Sa(r),da(r)):i(r.elm))}}function Sa(k,j){if(l(j)||l(k.data)){var n,r=d.remove.length+1;for(l(j)?j.listeners+=r:j=h(k.elm,r),l(n=k.componentInstance)&&l(n=n._vnode)&&l(n.data)&&Sa(n,j),n=0;n<d.remove.length;++n)d.remove[n](k,j);l(n=k.data.hook)&&l(n=n.remove)?n(k,j):j()}else i(k.elm)}function wa(k,j,n,r,s){for(var x=0,u=0,v=j.length-1,y=j[0],z=j[v],A=n.length-1,F=n[0],R=n[A],xa,ia,ja,ie,vc=!s;x<=v&&u<=A;)t(y)?y=j[++x]:t(z)?z=j[--v]:ta(y,F)?(Z(y,F,r,n,u),y=j[++x],F=n[++u]):ta(z,R)?(Z(z,R,r,n,A),z=j[--v],R=n[--A]):ta(y,R)?(Z(y,R,r,n,A),vc&&f.insertBefore(k,y.elm,f.nextSibling(z.elm)),y=j[++x],R=n[--A]):ta(z,F)?(Z(z,F,r,n,u),vc&&f.insertBefore(k,z.elm,y.elm),z=j[--v],F=n[++u]):(t(xa)&&(xa=Hg(j,x,v)),ia=l(F.key)?xa[F.key]:Y(F,j,x,v),t(ia)?o(F,r,k,y.elm,!1,n,u):(ja=j[ia],ta(ja,F)?(Z(ja,F,r,n,u),j[ia]=void 0,vc&&f.insertBefore(k,ja.elm,y.elm)):o(F,r,k,y.elm,!1,n,u)),F=n[++u]);x>v?(ie=t(n[A+1])?null:n[A+1].elm,Q(k,ie,n,u,A,r)):u>A&&va(j,x,v)}function Y(k,j,n,r){for(var s=n;s<r;s++){var x=j[s];if(l(x)&&ta(k,x))return s}}function Z(k,j,n,r,s,x){if(k===j)return;l(j.elm)&&l(r)&&(j=r[s]=Bb(j));var u=j.elm=k.elm;if(C(k.isAsyncPlaceholder)){l(j.asyncFactory.resolved)?Ha(k.elm,j,n):j.isAsyncPlaceholder=!0;return}if(C(j.isStatic)&&C(k.isStatic)&&j.key===k.key&&(C(j.isCloned)||C(j.isOnce))){j.componentInstance=k.componentInstance;return}var v,y=j.data;l(y)&&l(v=y.hook)&&l(v=v.prepatch)&&v(k,j);var z=k.children,A=j.children;if(l(y)&&M(j)){for(v=0;v<d.update.length;++v)d.update[v](k,j);l(v=y.hook)&&l(v=v.update)&&v(k,j)}t(j.text)?l(z)&&l(A)?z!==A&&wa(u,z,A,n,x):l(A)?(l(k.text)&&f.setTextContent(u,""),Q(u,null,A,0,A.length-1,n)):l(z)?va(z,0,z.length-1):l(k.text)&&f.setTextContent(u,""):k.text!==j.text&&f.setTextContent(u,j.text),l(y)&&(l(v=y.hook)&&l(v=v.postpatch)&&v(k,j))}function Ta(k,j,n){if(C(n)&&l(k.parent))k.parent.data.pendingInsert=j;else for(var r=0;r<j.length;++r)j[r].data.hook.insert(j[r])}var vb=S("attrs,class,staticClass,staticStyle,key");function Ha(k,j,n,r){var s,x=j.tag,u=j.data,v=j.children;r=r||u&&u.pre,j.elm=k;if(C(j.isComment)&&l(j.asyncFactory))return j.isAsyncPlaceholder=!0,!0;if(l(u)){l(s=u.hook)&&l(s=s.init)&&s(j,!0);if(l(s=j.componentInstance))return p(j,n),!0}if(l(x)){if(l(v))if(!k.hasChildNodes())E(j,v,n);else if(l(s=u)&&l(s=s.domProps)&&l(s=s.innerHTML)){if(s!==k.innerHTML)return!1}else{for(var y=!0,z=k.firstChild,A=0;A<v.length;A++){if(!z||!Ha(z,v[A],n,r)){y=!1;break}z=z.nextSibling}if(!y||z)return!1}if(l(u)){var F=!1;for(var R in u)if(!vb(R)){F=!0,ha(j,n);break}!F&&u.class&&ib(u.class)}}else k.data!==j.text&&(k.data=j.text);return!0}return function k(j,n,r,s){if(t(n)){l(j)&&da(j);return}var x=!1,u=[];if(t(j))x=!0,o(n,u);else{var v=l(j.nodeType);if(!v&&ta(j,n))Z(j,n,u,null,null,s);else{if(v){j.nodeType===1&&j.hasAttribute(Ac)&&(j.removeAttribute(Ac),r=!0);if(C(r)){if(Ha(j,n,u))return Ta(n,u,!0),j}j=g(j)}var y=j.elm,z=f.parentNode(y);o(n,u,y._leaveCb?null:z,f.nextSibling(y));if(l(n.parent))for(var A=n.parent,F=M(n);A;){for(var R=0;R<d.destroy.length;++R)d.destroy[R](A);A.elm=n.elm;if(F){for(var xa=0;xa<d.create.length;++xa)d.create[xa](sa,A);var ia=A.data.hook.insert;if(ia.merged)for(var ja=1;ja<ia.fns.length;ja++)ia.fns[ja]()}else Fa(A);A=A.parent}l(z)?va([j],0,0):l(j.tag)&&da(j)}}return Ta(n,u,x),n.elm}}var Jg={create:jc,update:jc,destroy:function a(b){jc(b,sa)}};function jc(a,b){(a.data.directives||b.data.directives)&&Kg(a,b)}function Kg(a,b){var c=a===sa,d=b===sa,e=vd(a.data.directives,a.context),f=vd(b.data.directives,b.context),g=[],h=[],i,o,m;for(i in f)o=e[i],m=f[i],o?(m.oldValue=o.value,m.oldArg=o.arg,Qa(m,"update",b,a),m.def&&m.def.componentUpdated&&h.push(m)):(Qa(m,"bind",b,a),m.def&&m.def.inserted&&g.push(m));if(g.length){var p=function(){for(var q=0;q<g.length;q++)Qa(g[q],"inserted",b,a)};c?fa(b,"insert",p):p()}h.length&&fa(b,"postpatch",function(){for(var q=0;q<h.length;q++)Qa(h[q],"componentUpdated",b,a)});if(!c)for(i in e)f[i]||Qa(e[i],"unbind",a,a,d)}var Lg=Object.create(null);function vd(a,b){var c=Object.create(null);if(!a)return c;var d,e;for(d=0;d<a.length;d++)e=a[d],e.modifiers||(e.modifiers=Lg),c[Mg(e)]=e,e.def=Gb(b.$options,"directives",e.name);return c}function Mg(a){return a.rawName||a.name+"."+Object.keys(a.modifiers||{}).join(".")}function Qa(a,b,c,d,e){var f=a.def&&a.def[b];if(f)try{f(c.elm,a,c,d,e)}catch(g){aa(g,c.context,"directive "+a.name+" "+b+" hook")}}var Ng=[Fg,Jg];function wd(a,b){var c=b.componentOptions;if(l(c)&&c.Ctor.options.inheritAttrs===!1)return;if(t(a.data.attrs)&&t(b.data.attrs))return;var d,e,f,g=b.elm,h=a.data.attrs||{},i=b.data.attrs||{};l(i.__ob__)&&(i=b.data.attrs=B({},i));for(d in i)e=i[d],f=h[d],f!==e&&xd(g,d,e);(Aa||zb)&&i.value!==h.value&&xd(g,"value",i.value);for(d in h)t(i[d])&&(ec(d)?g.removeAttributeNS(dc,sd(d)):rd(d)||g.removeAttribute(d))}function xd(a,b,c){a.tagName.indexOf("-")>-1?yd(a,b,c):ig(b)?ob(c)?a.removeAttribute(b):(c=b==="allowfullscreen"&&a.tagName==="EMBED"?"true":b,a.setAttribute(b,c)):rd(b)?a.setAttribute(b,hg(b,c)):ec(b)?ob(c)?a.removeAttributeNS(dc,sd(b)):a.setAttributeNS(dc,b,c):yd(a,b,c)}function yd(a,b,c){if(ob(c))a.removeAttribute(b);else{if(Aa&&!Ba&&a.tagName==="TEXTAREA"&&b==="placeholder"&&c!==""&&!a.__ieph){var d=function(e){e.stopImmediatePropagation(),a.removeEventListener("input",d)};a.addEventListener("input",d),a.__ieph=!0}a.setAttribute(b,c)}}var Og={create:wd,update:wd};function zd(a,b){var c=b.elm,d=b.data,e=a.data;if(t(d.staticClass)&&t(d.class)&&(t(e)||t(e.staticClass)&&t(e.class)))return;var f=jg(b),g=c._transitionClasses;l(g)&&(f=fc(f,gc(g))),f!==c._prevClass&&(c.setAttribute("class",f),c._prevClass=f)}var Pg={create:zd,update:zd},kc="__r",lc="__c";function Qg(a){if(l(a[kc])){var b=Aa?"change":"input";a[b]=[].concat(a[kc],a[b]||[]),delete a[kc]}l(a[lc])&&(a.change=[].concat(a[lc],a.change||[]),delete a[lc])}var Ra;function Rg(a,b,c){var d=Ra;return function e(){var f=b.apply(null,arguments);f!==null&&Ad(a,e,c,d)}}var Sg=Jb&&!(Dc&&Number(Dc[1])<=53);function Tg(a,b,c,d){if(Sg){var e=kd,f=b;b=f._wrapper=function(g){if(g.target===g.currentTarget||g.timeStamp>=e||g.timeStamp<=0||g.target.ownerDocument!==document)return f.apply(this,arguments)}}Ra.addEventListener(a,b,Ec?{capture:c,passive:d}:c)}function Ad(a,b,c,d){(d||Ra).removeEventListener(a,b._wrapper||b,c)}function Bd(a,b){if(t(a.data.on)&&t(b.data.on))return;var c=b.data.on||{},d=a.data.on||{};Ra=b.elm,Qg(c),Sc(c,d,Tg,Ad,Rg,b.context),Ra=void 0}var Ug={create:Bd,update:Bd},qb;function Cd(a,b){if(t(a.data.domProps)&&t(b.data.domProps))return;var c,d,e=b.elm,f=a.data.domProps||{},g=b.data.domProps||{};l(g.__ob__)&&(g=b.data.domProps=B({},g));for(c in f)c in g||(e[c]="");for(c in g){d=g[c];if(c==="textContent"||c==="innerHTML"){b.children&&(b.children.length=0);if(d===f[c])continue;e.childNodes.length===1&&e.removeChild(e.childNodes[0])}if(c==="value"&&e.tagName!=="PROGRESS"){e._value=d;var h=t(d)?"":String(d);Vg(e,h)&&(e.value=h)}else if(c==="innerHTML"&&hc(e.tagName)&&t(e.innerHTML)){qb=qb||document.createElement("div"),qb.innerHTML="<svg>"+d+"</svg>";for(var i=qb.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;i.firstChild;)e.appendChild(i.firstChild)}else if(d!==f[c])try{e[c]=d}catch(o){}}}function Vg(a,b){return!a.composing&&(a.tagName==="OPTION"||Wg(a,b)||Xg(a,b))}function Wg(a,b){var c=!0;try{c=document.activeElement!==a}catch(d){}return c&&a.value!==b}function Xg(a,b){var c=a.value,d=a._vModifiers;if(l(d)){if(d.number)return Ja(c)!==Ja(b);if(d.trim)return c.trim()!==b.trim()}return c!==b}var Yg={create:Cd,update:Cd},Zg=ka(function(a){var b={},c=/;(?![^(]*\))/g,d=/:(.+)/;return a.split(c).forEach(function(e){if(e){var f=e.split(d);f.length>1&&(b[f[0].trim()]=f[1].trim())}}),b});function mc(a){var b=Dd(a.style);return a.staticStyle?B(a.staticStyle,b):b}function Dd(a){return Array.isArray(a)?xc(a):typeof a==="string"?Zg(a):a}function _g(a,b){var c={},d;if(b)for(var e=a;e.componentInstance;)e=e.componentInstance._vnode,e&&e.data&&(d=mc(e.data))&&B(c,d);(d=mc(a.data))&&B(c,d);for(var f=a;f=f.parent;)f.data&&(d=mc(f.data))&&B(c,d);return c}var $g=/^--/,Ed=/\s*!important$/,Fd=function(a,b,c){if($g.test(b))a.style.setProperty(b,c);else if(Ed.test(c))a.style.setProperty(Ka(b),c.replace(Ed,""),"important");else{var d=ah(b);if(Array.isArray(c))for(var e=0,f=c.length;e<f;e++)a.style[d]=c[e];else a.style[d]=c}},Gd=["Webkit","Moz","ms"],rb,ah=ka(function(a){rb=rb||document.createElement("div").style,a=la(a);if(a!=="filter"&&a in rb)return a;for(var b=a.charAt(0).toUpperCase()+a.slice(1),c=0;c<Gd.length;c++){var d=Gd[c]+b;if(d in rb)return d}});function Hd(a,b){var c=b.data,d=a.data;if(t(c.staticStyle)&&t(c.style)&&t(d.staticStyle)&&t(d.style))return;var e,f,g=b.elm,h=d.staticStyle,i=d.normalizedStyle||d.style||{},o=h||i,m=Dd(b.data.style)||{};b.data.normalizedStyle=l(m.__ob__)?B({},m):m;var p=_g(b,!0);for(f in o)t(p[f])&&Fd(g,f,"");for(f in p)e=p[f],e!==o[f]&&Fd(g,f,e==null?"":e)}var bh={create:Hd,update:Hd},Id=/\s+/;function Jd(a,b){if(!b||!(b=b.trim()))return;if(a.classList)b.indexOf(" ")>-1?b.split(Id).forEach(function(d){return a.classList.add(d)}):a.classList.add(b);else{var c=" "+(a.getAttribute("class")||"")+" ";c.indexOf(" "+b+" ")<0&&a.setAttribute("class",(c+b).trim())}}function Kd(a,b){if(!b||!(b=b.trim()))return;if(a.classList)b.indexOf(" ")>-1?b.split(Id).forEach(function(e){return a.classList.remove(e)}):a.classList.remove(b),a.classList.length||a.removeAttribute("class");else{for(var c=" "+(a.getAttribute("class")||"")+" ",d=" "+b+" ";c.indexOf(d)>=0;)c=c.replace(d," ");c=c.trim(),c?a.setAttribute("class",c):a.removeAttribute("class")}}function Ld(a){if(!a)return;if(typeof a==="object"){var b={};return a.css!==!1&&B(b,Md(a.name||"v")),B(b,a),b}else if(typeof a==="string")return Md(a)}var Md=ka(function(a){return{enterClass:a+"-enter",enterToClass:a+"-enter-to",enterActiveClass:a+"-enter-active",leaveClass:a+"-leave",leaveToClass:a+"-leave-to",leaveActiveClass:a+"-leave-active"}}),Nd=N&&!Ba,Ga="transition",nc="animation",sb="transition",tb="transitionend",oc="animation",Od="animationend";Nd&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(sb="WebkitTransition",tb="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(oc="WebkitAnimation",Od="webkitAnimationEnd"));var Pd=N?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(a){return a()};function Qd(a){Pd(function(){Pd(a)})}function ua(a,b){var c=a._transitionClasses||(a._transitionClasses=[]);c.indexOf(b)<0&&(c.push(b),Jd(a,b))}function ca(a,b){a._transitionClasses&&$(a._transitionClasses,b),Kd(a,b)}function Rd(a,b,c){var d=Sd(a,b),e=d.type,f=d.timeout,g=d.propCount;if(!e)return c();var h=e===Ga?tb:Od,i=0,o=function(){a.removeEventListener(h,m),c()},m=function(p){p.target===a&&(++i>=g&&o())};setTimeout(function(){i<g&&o()},f+1),a.addEventListener(h,m)}var ch=/\b(transform|all)(,|$)/;function Sd(a,b){var c=window.getComputedStyle(a),d=(c[sb+"Delay"]||"").split(", "),e=(c[sb+"Duration"]||"").split(", "),f=Td(d,e),g=(c[oc+"Delay"]||"").split(", "),h=(c[oc+"Duration"]||"").split(", "),i=Td(g,h),o,m=0,p=0;b===Ga?f>0&&(o=Ga,m=f,p=e.length):b===nc?i>0&&(o=nc,m=i,p=h.length):(m=Math.max(f,i),o=m>0?f>i?Ga:nc:null,p=o?o===Ga?e.length:h.length:0);var q=o===Ga&&ch.test(c[sb+"Property"]);return{type:o,timeout:m,propCount:p,hasTransform:q}}function Td(a,b){for(;a.length<b.length;)a=a.concat(a);return Math.max.apply(null,b.map(function(c,d){return Ud(c)+Ud(a[d])}))}function Ud(a){return Number(a.slice(0,-1).replace(",","."))*1e3}function pc(a,b){var c=a.elm;l(c._leaveCb)&&(c._leaveCb.cancelled=!0,c._leaveCb());var d=Ld(a.data.transition);if(t(d))return;if(l(c._enterCb)||c.nodeType!==1)return;for(var e=d.css,f=d.type,g=d.enterClass,h=d.enterToClass,i=d.enterActiveClass,o=d.appearClass,m=d.appearToClass,p=d.appearActiveClass,q=d.beforeEnter,w=d.enter,E=d.afterEnter,M=d.enterCancelled,ha=d.beforeAppear,X=d.appear,Q=d.afterAppear,da=d.appearCancelled,va=d.duration,Sa=ra,wa=ra.$vnode;wa&&wa.parent;)Sa=wa.context,wa=wa.parent;var Y=!Sa._isMounted||!a.isRootInsert;if(Y&&!X&&X!=="")return;var Z=Y&&o?o:g,Ta=Y&&p?p:i,vb=Y&&m?m:h,Ha=Y?ha||q:q,k=Y?typeof X==="function"?X:w:w,j=Y?Q||E:E,n=Y?da||M:M,r=Ja(H(va)?va.enter:va),s=e!==!1&&!Ba,x=qc(k),u=c._enterCb=Wa(function(){s&&(ca(c,vb),ca(c,Ta)),u.cancelled?(s&&ca(c,Z),n&&n(c)):j&&j(c),c._enterCb=null});a.data.show||fa(a,"insert",function(){var v=c.parentNode,y=v&&v._pending&&v._pending[a.key];y&&y.tag===a.tag&&y.elm._leaveCb&&y.elm._leaveCb(),k&&k(c,u)}),Ha&&Ha(c),s&&(ua(c,Z),ua(c,Ta),Qd(function(){ca(c,Z),u.cancelled||(ua(c,vb),x||(Wd(r)?setTimeout(u,r):Rd(c,f,u)))})),a.data.show&&(b&&b(),k&&k(c,u)),!s&&!x&&u()}function Vd(a,b){var c=a.elm;l(c._enterCb)&&(c._enterCb.cancelled=!0,c._enterCb());var d=Ld(a.data.transition);if(t(d)||c.nodeType!==1)return b();if(l(c._leaveCb))return;var e=d.css,f=d.type,g=d.leaveClass,h=d.leaveToClass,i=d.leaveActiveClass,o=d.beforeLeave,m=d.leave,p=d.afterLeave,q=d.leaveCancelled,w=d.delayLeave,E=d.duration,M=e!==!1&&!Ba,ha=qc(m),X=Ja(H(E)?E.leave:E),Q=c._leaveCb=Wa(function(){c.parentNode&&c.parentNode._pending&&(c.parentNode._pending[a.key]=null),M&&(ca(c,h),ca(c,i)),Q.cancelled?(M&&ca(c,g),q&&q(c)):(b(),p&&p(c)),c._leaveCb=null});w?w(da):da();function da(){if(Q.cancelled)return;!a.data.show&&c.parentNode&&((c.parentNode._pending||(c.parentNode._pending={}))[a.key]=a),o&&o(c),M&&(ua(c,g),ua(c,i),Qd(function(){ca(c,g),Q.cancelled||(ua(c,h),ha||(Wd(X)?setTimeout(Q,X):Rd(c,f,Q)))})),m&&m(c,Q),!M&&!ha&&Q()}}function Wd(a){return typeof a==="number"&&!isNaN(a)}function qc(a){if(t(a))return!1;var b=a.fns;return l(b)?qc(Array.isArray(b)?b[0]:b):(a._length||a.length)>1}function Xd(a,b){b.data.show!==!0&&pc(b)}var dh=N?{create:Xd,activate:Xd,remove:function a(b,c){b.data.show!==!0?Vd(b,c):c()}}:{},eh=[Og,Pg,Ug,Yg,bh,dh],fh=eh.concat(Ng),gh=Ig({nodeOps:Eg,modules:fh});Ba&&document.addEventListener("selectionchange",function(){var a=document.activeElement;a&&a.vmodel&&rc(a,"input")});var Yd={inserted:function a(b,c,d,e){d.tag==="select"?(e.elm&&!e.elm._vOptions?fa(d,"postpatch",function(){Yd.componentUpdated(b,c,d)}):Zd(b,c,d.context),b._vOptions=[].map.call(b.options,ub)):(d.tag==="textarea"||ic(b.type))&&(b._vModifiers=c.modifiers,c.modifiers.lazy||(b.addEventListener("compositionstart",hh),b.addEventListener("compositionend",ae),b.addEventListener("change",ae),Ba&&(b.vmodel=!0)))},componentUpdated:function a(b,c,d){if(d.tag==="select"){Zd(b,c,d.context);var e=b._vOptions,f=b._vOptions=[].map.call(b.options,ub);if(f.some(function(h,i){return!ma(h,e[i])})){var g=b.multiple?c.value.some(function(h){return $d(h,f)}):c.value!==c.oldValue&&$d(c.value,f);g&&rc(b,"change")}}}};function Zd(a,b,c){_d(a,b),(Aa||zb)&&setTimeout(function(){_d(a,b)},0)}function _d(a,b,c){var d=b.value,e=a.multiple;if(e&&!Array.isArray(d))return;for(var f,g,h=0,i=a.options.length;h<i;h++){g=a.options[h];if(e)f=zc(d,ub(g))>-1,g.selected!==f&&(g.selected=f);else if(ma(ub(g),d)){a.selectedIndex!==h&&(a.selectedIndex=h);return}}e||(a.selectedIndex=-1)}function $d(a,b){return b.every(function(c){return!ma(c,a)})}function ub(a){return"_value"in a?a._value:a.value}function hh(a){a.target.composing=!0}function ae(a){if(!a.target.composing)return;a.target.composing=!1,rc(a.target,"input")}function rc(a,b){var c=document.createEvent("HTMLEvents");c.initEvent(b,!0,!0),a.dispatchEvent(c)}function sc(a){return a.componentInstance&&(!a.data||!a.data.transition)?sc(a.componentInstance._vnode):a}var ih={bind:function a(b,c,d){var e=c.value;d=sc(d);var f=d.data&&d.data.transition,g=b.__vOriginalDisplay=b.style.display==="none"?"":b.style.display;e&&f?(d.data.show=!0,pc(d,function(){b.style.display=g})):b.style.display=e?g:"none"},update:function a(b,c,d){var e=c.value,f=c.oldValue;if(!e===!f)return;d=sc(d);var g=d.data&&d.data.transition;g?(d.data.show=!0,e?pc(d,function(){b.style.display=b.__vOriginalDisplay}):Vd(d,function(){b.style.display="none"})):b.style.display=e?b.__vOriginalDisplay:"none"},unbind:function a(b,c,d,e,f){f||(b.style.display=b.__vOriginalDisplay)}},jh={model:Yd,show:ih},be={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function tc(a){var b=a&&a.componentOptions;return b&&b.Ctor.options.abstract?tc(fd(b.children)):a}function ce(a){var b={},c=a.$options;for(var d in c.propsData)b[d]=a[d];var e=c._parentListeners;for(var f in e)b[la(f)]=e[f];return b}function de(a,b){if(/\d-keep-alive$/.test(b.tag))return a("keep-alive",{props:b.componentOptions.propsData})}function kh(a){for(;a=a.parent;)if(a.data.transition)return!0}function lh(a,b){return b.key===a.key&&b.tag===a.tag}var mh=function(a){return a.tag||lb(a)},nh=function(a){return a.name==="show"},oh={name:"transition",props:be,abstract:!0,render:function a(b){var c=this,d=this.$slots.default;if(!d)return;d=d.filter(mh);if(!d.length)return;var e=this.mode,f=d[0];if(kh(this.$vnode))return f;var g=tc(f);if(!g)return f;if(this._leaving)return de(b,f);var h="__transition-"+this._uid+"-";g.key=g.key==null?g.isComment?h+"comment":h+g.tag:Ia(g.key)?String(g.key).indexOf(h)===0?g.key:h+g.key:g.key;var i=(g.data||(g.data={})).transition=ce(this),o=this._vnode,m=tc(o);g.data.directives&&g.data.directives.some(nh)&&(g.data.show=!0);if(m&&m.data&&!lh(g,m)&&!lb(m)&&!(m.componentInstance&&m.componentInstance._vnode.isComment)){var p=m.data.transition=B({},i);if(e==="out-in")return this._leaving=!0,fa(p,"afterLeave",function(){c._leaving=!1,c.$forceUpdate()}),de(b,f);if(e==="in-out"){if(lb(g))return o;var q,w=function(){q()};fa(i,"afterEnter",w),fa(i,"enterCancelled",w),fa(p,"delayLeave",function(E){q=E})}}return f}},ee=B({tag:String,moveClass:String},be);delete ee.mode;var ph={props:ee,beforeMount:function a(){var b=this,c=this._update;this._update=function(d,e){var f=hd(b);b.__patch__(b._vnode,b.kept,!1,!0),b._vnode=b.kept,f(),c.call(b,d,e)}},render:function a(b){for(var c=this.tag||this.$vnode.data.tag||"span",d=Object.create(null),e=this.prevChildren=this.children,f=this.$slots.default||[],g=this.children=[],h=ce(this),i=0;i<f.length;i++){var o=f[i];o.tag&&(o.key!=null&&String(o.key).indexOf("__vlist")!==0&&(g.push(o),d[o.key]=o,(o.data||(o.data={})).transition=h))}if(e){for(var m=[],p=[],q=0;q<e.length;q++){var w=e[q];w.data.transition=h,w.data.pos=w.elm.getBoundingClientRect(),d[w.key]?m.push(w):p.push(w)}this.kept=b(c,null,m),this.removed=p}return b(c,null,g)},updated:function a(){var b=this.prevChildren,c=this.moveClass||(this.name||"v")+"-move";if(!b.length||!this.hasMove(b[0].elm,c))return;b.forEach(qh),b.forEach(rh),b.forEach(sh),this._reflow=document.body.offsetHeight,b.forEach(function(d){if(d.data.moved){var e=d.elm,f=e.style;ua(e,c),f.transform=f.WebkitTransform=f.transitionDuration="",e.addEventListener(tb,e._moveCb=function g(h){if(h&&h.target!==e)return;(!h||/transform$/.test(h.propertyName))&&(e.removeEventListener(tb,g),e._moveCb=null,ca(e,c))})}})},methods:{hasMove:function a(b,c){if(!Nd)return!1;if(this._hasMove)return this._hasMove;var d=b.cloneNode();b._transitionClasses&&b._transitionClasses.forEach(function(f){Kd(d,f)}),Jd(d,c),d.style.display="none",this.$el.appendChild(d);var e=Sd(d);return this.$el.removeChild(d),this._hasMove=e.hasTransform}}};function qh(a){a.elm._moveCb&&a.elm._moveCb(),a.elm._enterCb&&a.elm._enterCb()}function rh(a){a.data.newPos=a.elm.getBoundingClientRect()}function sh(a){var b=a.data.pos,c=a.data.newPos,d=b.left-c.left,e=b.top-c.top;if(d||e){a.data.moved=!0;var f=a.elm.style;f.transform=f.WebkitTransform="translate("+d+"px,"+e+"px)",f.transitionDuration="0s"}}var th={Transition:oh,TransitionGroup:ph};D.config.mustUseProp=fg,D.config.isReservedTag=ud,D.config.isReservedAttr=dg,D.config.getTagNamespace=pg,D.config.isUnknownElement=qg,B(D.options.directives,jh),B(D.options.components,th),D.prototype.__patch__=N?gh:K,D.prototype.$mount=function(a,b){return a=a&&N?rg(a):void 0,Af(this,a,b)},N&&setTimeout(function(){P.devtools&&(_a&&_a.emit("init",D))},0);var uh={name:"tip",computed:{tipStyle(){return{transform:`translate3d(${this.position.left}px, ${this.position.top}px,0px)`}},tipClass(){let a=[this.theme];return["right","left","top","bottom"].indexOf(this.positions)!==-1&&a.push(`${this.positions}-tip`),this.class&&a.push(this.class.split(" ")),a}},data(){return{position:{left:0,top:0},visible:!1}},props:{el:{require:!0},html:{type:Object},class:{type:String},theme:{type:String,default:"dark",validator:function(a){return["dark","light"].indexOf(a)!==-1}},content:{default:""},offset:{default:10,type:Number},delay:{default:200,type:Number},triggers:{default:"hover",validator:function(a){return["hover","click"].indexOf(a)!==-1}},positions:{type:String,default:"bottom",validator:function(a){return["right","left","top","bottom","cursor"].indexOf(a)!==-1}}},watch:{triggers:{immediate:!0,handler(a,b){this.unBindEvent(b),this.bindEvent()}},visible:{handler(){this.visible?(this.html&&this.$el.appendChild(this.html),window.addEventListener("resize",this.handleResize)):window.removeEventListener("resize",this.handleResize)}}},destroyed(){window.removeEventListener("resize",this.handleResize)},methods:{bindEvent(){this.triggers==="hover"&&(this.el.addEventListener("mouseenter",this.handlerHover),this.el.addEventListener("mouseleave",this.tooltipHidden)),this.triggers==="click"&&this.el.addEventListener("click",this.tooltipToggle)},unBindEvent(a){(a||this.triggers==="hover")&&(this.el.removeEventListener("mouseenter",this.handlerHover),this.el.removeEventListener("mouseleave",this.tooltipHidden)),(a||this.triggers==="click")&&this.el.removeEventListener("click",this.tooltipToggle)},handleResize(a){this.visible&&(this.positions==="cursor"&&(this.visible=!1),this.setPosition(a))},tooltipToggle(a){this.visible=!this.visible,this.visible&&this.$nextTick().then(()=>this.setPosition(a))},setPosition(a){let b=this.el.getBoundingClientRect(),c=this.$el.getBoundingClientRect();switch(this.positions){case"cursor":this.position={left:a.pageX+this.offset,top:a.pageY+this.offset};return;case"left":this.position={left:b.left-this.offset-c.width,top:b.top+b.height/2-c.height/2};return;case"right":this.position={left:b.right+this.offset,top:b.top+b.height/2-c.height/2};return;case"top":this.position={left:b.left+b.width/2-c.width/2,top:b.top-this.offset-c.height};return;case"bottom":this.position={left:b.left+b.width/2-c.width/2,top:b.bottom+this.offset}}},handlerHover(a){if(this.visible)return;clearTimeout(this._scheduleTimer),this._scheduleTimer=window.setTimeout(()=>{this.visible=!0,this.$nextTick().then(()=>this.setPosition(a))},this.delay)},tooltipHidden(){this.visible=!1,clearTimeout(this._scheduleTimer)}}};function vh(a,b,c,d,e,f,g,h,i,o){typeof g!=="boolean"&&(i=h,h=g,g=!1);const m=typeof c==="function"?c.options:c;a&&a.render&&(m.render=a.render,m.staticRenderFns=a.staticRenderFns,m._compiled=!0,e&&(m.functional=!0)),d&&(m._scopeId=d);let p;f?(p=function(q){q=q||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!q&&typeof __VUE_SSR_CONTEXT__!=="undefined"&&(q=__VUE_SSR_CONTEXT__),b&&b.call(this,i(q)),q&&q._registeredComponents&&q._registeredComponents.add(f)},m._ssrRegister=p):b&&(p=g?function(q){b.call(this,o(q,this.$root.$options.shadowRoot))}:function(q){b.call(this,h(q))});if(p)if(m.functional){const q=m.render;m.render=function w(E,M){return p.call(M),q(E,M)}}else{const q=m.beforeCreate;m.beforeCreate=q?[].concat(q,p):[p]}return c}const wh=typeof navigator!=="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function xh(a){return(b,c)=>yh(b,c)}let uc;const fe={};function yh(a,b){const c=wh?b.media||"default":a,d=fe[c]||(fe[c]={ids:new Set(),styles:[]});if(!d.ids.has(a)){d.ids.add(a);let e=b.source;b.map&&(e+=`
/*# sourceURL=`+b.map.sources[0]+" */",e+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(b.map))))+" */"),d.element||(d.element=document.createElement("style"),d.element.type="text/css",b.media&&d.element.setAttribute("media",b.media),uc===void 0&&(uc=document.head||document.getElementsByTagName("head")[0]),uc.appendChild(d.element));if("styleSheet"in d.element)d.styles.push(e),d.element.styleSheet.cssText=d.styles.filter(Boolean).join(`
`);else{const f=d.ids.size-1,g=document.createTextNode(e),h=d.element.childNodes;h[f]&&d.element.removeChild(h[f]),h.length?d.element.insertBefore(g,h[f]):d.element.appendChild(g)}}}const zh=uh;var ge=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("transition",{attrs:{name:"v-tip-fade"}},[c("div",{directives:[{name:"show",rawName:"v-show",value:a.visible,expression:"visible"}],staticClass:"v-tip",class:a.tipClass,style:a.tipStyle},[a._v(`
    `+a._s(a.content)+`
  `)])])},Ah=[];ge._withStripped=!0;const Bh=function(a){if(!a)return;a("data-v-ce87551c_0",{source:`
.v-tip[data-v-ce87551c] {\r
  will-change: transform;\r
  box-sizing: border-box;\r
  position: absolute;\r
  left: 0;\r
  top: 0;\r
  z-index: 10;\r
  padding: 7px 10px;\r
  font-size: 14px;\r
  border-radius: 6px;\r
  line-height: 1.2;\r
  min-width: 10px;\r
  word-wrap: break-word;\r
  /*pointer-events: none;*/\r
  background: var(--backgroundColor);\r
  color: var(--color);\r
  border: 1px solid var(--borderColor);
}
.dark[data-v-ce87551c] {\r
  --backgroundColor: #303133;\r
  --color: #fff;\r
  --borderColor: transparent;
}
.light[data-v-ce87551c] {\r
  --backgroundColor: #fff;\r
  --color: #303133;\r
  --borderColor: #bdc3c6;
}
.v-tip-fade-enter-active[data-v-ce87551c],\r
.v-tip-fade-leave-active[data-v-ce87551c] {\r
  transition: opacity 0.3s;
}
.v-tip-fade-enter[data-v-ce87551c],\r
.v-tip-fade-leave-to[data-v-ce87551c] {\r
  opacity: 0;
}
.top-tip[data-v-ce87551c]::after,\r
.top-tip[data-v-ce87551c]::before {\r
  position: absolute;\r
  top: 100%;\r
  left: 50%;\r
  border: solid transparent;\r
  content: '';\r
  height: 0;\r
  width: 0;\r
  pointer-events: none;
}
.top-tip[data-v-ce87551c]::after {\r
  border-color: transparent;\r
  border-top-color: var(--backgroundColor);\r
  border-width: 5px;\r
  margin-left: -5px;
}
.top-tip[data-v-ce87551c]::before {\r
  border-color: transparent;\r
  border-top-color: var(--borderColor);\r
  border-width: 6px;\r
  margin-left: -6px;
}
.bottom-tip[data-v-ce87551c]::after,\r
.bottom-tip[data-v-ce87551c]::before {\r
  position: absolute;\r
  bottom: 100%;\r
  left: 50%;\r
  border: solid transparent;\r
  content: '';\r
  height: 0;\r
  width: 0;\r
  pointer-events: none;
}
.bottom-tip[data-v-ce87551c]::after {\r
  border-color: transparent;\r
  border-bottom-color: var(--backgroundColor);\r
  border-width: 5px;\r
  margin-left: -5px;
}
.bottom-tip[data-v-ce87551c]::before {\r
  border-color: transparent;\r
  border-bottom-color: var(--borderColor);\r
  border-width: 6px;\r
  margin-left: -6px;
}
.right-tip[data-v-ce87551c]::after,\r
.right-tip[data-v-ce87551c]::before {\r
  position: absolute;\r
  right: 100%;\r
  top: 50%;\r
  border: solid transparent;\r
  content: '';\r
  height: 0;\r
  width: 0;\r
  pointer-events: none;
}
.right-tip[data-v-ce87551c]::after {\r
  border-color: transparent;\r
  border-right-color: var(--backgroundColor);\r
  border-width: 5px;\r
  margin-top: -5px;
}
.right-tip[data-v-ce87551c]::before {\r
  border-color: transparent;\r
  border-right-color: var(--borderColor);\r
  border-width: 6px;\r
  margin-top: -6px;
}
.left-tip[data-v-ce87551c]::after,\r
.left-tip[data-v-ce87551c]::before {\r
  position: absolute;\r
  left: 100%;\r
  top: 50%;\r
  border: solid transparent;\r
  content: '';\r
  height: 0;\r
  width: 0;\r
  pointer-events: none;
}
.left-tip[data-v-ce87551c]::after {\r
  border-color: transparent;\r
  border-left-color: var(--backgroundColor);\r
  border-width: 5px;\r
  margin-top: -5px;
}
.left-tip[data-v-ce87551c]::before {\r
  border-color: transparent;\r
  border-left-color: var(--borderColor);\r
  border-width: 6px;\r
  margin-top: -6px;
}\r
`,map:{version:3,sources:["C:\\Users\\lxw\\Desktop\\codework\\v-tip\\src\\components\\tip.vue"],names:[],mappings:";AAoMA;EACA,sBAAA;EACA,sBAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,qBAAA;EACA,wBAAA;EACA,kCAAA;EACA,mBAAA;EACA,oCAAA;AACA;AACA;EACA,0BAAA;EACA,aAAA;EACA,0BAAA;AACA;AACA;EACA,uBAAA;EACA,gBAAA;EACA,sBAAA;AACA;AAEA;;EAEA,wBAAA;AACA;AACA;;EAEA,UAAA;AACA;AACA;;EAEA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,yBAAA;EACA,WAAA;EACA,SAAA;EACA,QAAA;EACA,oBAAA;AACA;AAEA;EACA,yBAAA;EACA,wCAAA;EACA,iBAAA;EACA,iBAAA;AACA;AACA;EACA,yBAAA;EACA,oCAAA;EACA,iBAAA;EACA,iBAAA;AACA;AAEA;;EAEA,kBAAA;EACA,YAAA;EACA,SAAA;EACA,yBAAA;EACA,WAAA;EACA,SAAA;EACA,QAAA;EACA,oBAAA;AACA;AAEA;EACA,yBAAA;EACA,2CAAA;EACA,iBAAA;EACA,iBAAA;AACA;AACA;EACA,yBAAA;EACA,uCAAA;EACA,iBAAA;EACA,iBAAA;AACA;AAEA;;EAEA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,yBAAA;EACA,WAAA;EACA,SAAA;EACA,QAAA;EACA,oBAAA;AACA;AAEA;EACA,yBAAA;EACA,0CAAA;EACA,iBAAA;EACA,gBAAA;AACA;AACA;EACA,yBAAA;EACA,sCAAA;EACA,iBAAA;EACA,gBAAA;AACA;AAEA;;EAEA,kBAAA;EACA,UAAA;EACA,QAAA;EACA,yBAAA;EACA,WAAA;EACA,SAAA;EACA,QAAA;EACA,oBAAA;AACA;AAEA;EACA,yBAAA;EACA,yCAAA;EACA,iBAAA;EACA,gBAAA;AACA;AACA;EACA,yBAAA;EACA,qCAAA;EACA,iBAAA;EACA,gBAAA;AACA",file:"tip.vue",sourcesContent:[`<template>\r
  <!--  v-show="visible" -->\r
  <transition name="v-tip-fade">\r
    <div class="v-tip" :class="tipClass" :style="tipStyle" v-show="visible">\r
      {{ content }}\r
    </div>\r
  </transition>\r
</template>\r
\r
<script>\r
export default {\r
  name: 'tip',\r
  computed: {\r
    tipStyle() {\r
      return {\r
        transform: \`translate3d(\${this.position.left}px, \${this.position.top}px,0px)\`,\r
      };\r
    },\r
    tipClass() {\r
      let classList = [this.theme];\r
      if (['right', 'left', 'top', 'bottom'].indexOf(this.positions) !== -1) {\r
        classList.push(\`\${this.positions}-tip\`);\r
      }\r
      if (this.class) {\r
        classList.push(this.class.split(' '));\r
      }\r
      return classList;\r
    },\r
  },\r
  data() {\r
    return {\r
      position: {\r
        left: 0,\r
        top: 0,\r
      },\r
      visible: false,\r
    };\r
  },\r
  props: {\r
    el: {\r
      require: true,\r
    },\r
\r
    html: {\r
      type: Object,\r
    },\r
    class: {\r
      type: String,\r
    },\r
    theme: {\r
      type: String,\r
      default: 'dark',\r
      validator: function (value) {\r
        return ['dark', 'light'].indexOf(value) !== -1;\r
      },\r
    },\r
    content: {\r
      default: '',\r
    },\r
    offset: {\r
      default: 10,\r
      type: Number,\r
    },\r
    delay: {\r
      default: 200,\r
      type: Number,\r
    },\r
    triggers: {\r
      default: 'hover',\r
      validator: function (value) {\r
        return ['hover', 'click'].indexOf(value) !== -1;\r
      },\r
    },\r
    positions: {\r
      type: String,\r
      default: 'bottom',\r
      validator: function (value) {\r
        return (\r
          ['right', 'left', 'top', 'bottom', 'cursor'].indexOf(value) !== -1\r
        );\r
      },\r
    },\r
  },\r
  watch: {\r
    triggers: {\r
      immediate: true,\r
      handler(newValue, oldValue) {\r
        this.unBindEvent(oldValue);\r
        this.bindEvent();\r
      },\r
    },\r
    visible: {\r
      handler() {\r
        if (this.visible) {\r
          if (this.html) {\r
            this.$el.appendChild(this.html);\r
          }\r
          window.addEventListener('resize', this.handleResize);\r
        } else {\r
          window.removeEventListener('resize', this.handleResize);\r
        }\r
      },\r
    },\r
  },\r
  destroyed() {\r
    window.removeEventListener('resize', this.handleResize);\r
  },\r
  methods: {\r
    bindEvent() {\r
      if (this.triggers === 'hover') {\r
        this.el.addEventListener('mouseenter', this.handlerHover);\r
        this.el.addEventListener('mouseleave', this.tooltipHidden);\r
      }\r
      if (this.triggers === 'click') {\r
        this.el.addEventListener('click', this.tooltipToggle);\r
      }\r
    },\r
    unBindEvent(triggers) {\r
      if (triggers || this.triggers === 'hover') {\r
        this.el.removeEventListener('mouseenter', this.handlerHover);\r
        this.el.removeEventListener('mouseleave', this.tooltipHidden);\r
      }\r
      if (triggers || this.triggers === 'click') {\r
        this.el.removeEventListener('click', this.tooltipToggle);\r
      }\r
    },\r
    handleResize(event) {\r
      if (this.visible) {\r
        if (this.positions === 'cursor') {\r
          this.visible = false;\r
        }\r
        this.setPosition(event);\r
      }\r
    },\r
    tooltipToggle(event) {\r
      this.visible = !this.visible;\r
      if (this.visible) {\r
        this.$nextTick().then(() => this.setPosition(event));\r
      }\r
    },\r
    setPosition(event) {\r
      let elPosition = this.el.getBoundingClientRect();\r
      let tipPosition = this.$el.getBoundingClientRect();\r
      switch (this.positions) {\r
        case 'cursor':\r
          this.position = {\r
            left: event.pageX + this.offset,\r
            top: event.pageY + this.offset,\r
          };\r
          return;\r
        case 'left':\r
          this.position = {\r
            left: elPosition.left - this.offset - tipPosition.width,\r
            top:\r
              elPosition.top + elPosition.height / 2 - tipPosition.height / 2,\r
          };\r
          return;\r
        case 'right':\r
          this.position = {\r
            left: elPosition.right + this.offset,\r
            top:\r
              elPosition.top + elPosition.height / 2 - tipPosition.height / 2,\r
          };\r
          return;\r
        case 'top':\r
          this.position = {\r
            left:\r
              elPosition.left + elPosition.width / 2 - tipPosition.width / 2,\r
            top: elPosition.top - this.offset - tipPosition.height,\r
          };\r
          return;\r
        case 'bottom':\r
          this.position = {\r
            left:\r
              elPosition.left + elPosition.width / 2 - tipPosition.width / 2,\r
            top: elPosition.bottom + this.offset,\r
          };\r
      }\r
    },\r
    handlerHover(event) {\r
      if (this.visible) return;\r
      clearTimeout(this._scheduleTimer);\r
      this._scheduleTimer = window.setTimeout(() => {\r
        this.visible = true;\r
        this.$nextTick().then(() => this.setPosition(event));\r
      }, this.delay);\r
    },\r
    tooltipHidden() {\r
      this.visible = false;\r
      clearTimeout(this._scheduleTimer);\r
    },\r
  },\r
};\r
</script>\r
\r
<style scoped>\r
.v-tip {\r
  will-change: transform;\r
  box-sizing: border-box;\r
  position: absolute;\r
  left: 0;\r
  top: 0;\r
  z-index: 10;\r
  padding: 7px 10px;\r
  font-size: 14px;\r
  border-radius: 6px;\r
  line-height: 1.2;\r
  min-width: 10px;\r
  word-wrap: break-word;\r
  /*pointer-events: none;*/\r
  background: var(--backgroundColor);\r
  color: var(--color);\r
  border: 1px solid var(--borderColor);\r
}\r
.dark {\r
  --backgroundColor: #303133;\r
  --color: #fff;\r
  --borderColor: transparent;\r
}\r
.light {\r
  --backgroundColor: #fff;\r
  --color: #303133;\r
  --borderColor: #bdc3c6;\r
}\r
\r
.v-tip-fade-enter-active,\r
.v-tip-fade-leave-active {\r
  transition: opacity 0.3s;\r
}\r
.v-tip-fade-enter,\r
.v-tip-fade-leave-to {\r
  opacity: 0;\r
}\r
.top-tip::after,\r
.top-tip::before {\r
  position: absolute;\r
  top: 100%;\r
  left: 50%;\r
  border: solid transparent;\r
  content: '';\r
  height: 0;\r
  width: 0;\r
  pointer-events: none;\r
}\r
\r
.top-tip::after {\r
  border-color: transparent;\r
  border-top-color: var(--backgroundColor);\r
  border-width: 5px;\r
  margin-left: -5px;\r
}\r
.top-tip::before {\r
  border-color: transparent;\r
  border-top-color: var(--borderColor);\r
  border-width: 6px;\r
  margin-left: -6px;\r
}\r
\r
.bottom-tip::after,\r
.bottom-tip::before {\r
  position: absolute;\r
  bottom: 100%;\r
  left: 50%;\r
  border: solid transparent;\r
  content: '';\r
  height: 0;\r
  width: 0;\r
  pointer-events: none;\r
}\r
\r
.bottom-tip::after {\r
  border-color: transparent;\r
  border-bottom-color: var(--backgroundColor);\r
  border-width: 5px;\r
  margin-left: -5px;\r
}\r
.bottom-tip::before {\r
  border-color: transparent;\r
  border-bottom-color: var(--borderColor);\r
  border-width: 6px;\r
  margin-left: -6px;\r
}\r
\r
.right-tip::after,\r
.right-tip::before {\r
  position: absolute;\r
  right: 100%;\r
  top: 50%;\r
  border: solid transparent;\r
  content: '';\r
  height: 0;\r
  width: 0;\r
  pointer-events: none;\r
}\r
\r
.right-tip::after {\r
  border-color: transparent;\r
  border-right-color: var(--backgroundColor);\r
  border-width: 5px;\r
  margin-top: -5px;\r
}\r
.right-tip::before {\r
  border-color: transparent;\r
  border-right-color: var(--borderColor);\r
  border-width: 6px;\r
  margin-top: -6px;\r
}\r
\r
.left-tip::after,\r
.left-tip::before {\r
  position: absolute;\r
  left: 100%;\r
  top: 50%;\r
  border: solid transparent;\r
  content: '';\r
  height: 0;\r
  width: 0;\r
  pointer-events: none;\r
}\r
\r
.left-tip::after {\r
  border-color: transparent;\r
  border-left-color: var(--backgroundColor);\r
  border-width: 5px;\r
  margin-top: -5px;\r
}\r
.left-tip::before {\r
  border-color: transparent;\r
  border-left-color: var(--borderColor);\r
  border-width: 6px;\r
  margin-top: -6px;\r
}\r
</style>\r
`]},media:void 0})},Ch="data-v-ce87551c",Dh=void 0,Eh=!1,Fh=vh({render:ge,staticRenderFns:Ah},Bh,zh,Ch,Eh,Dh,!1,xh,void 0,void 0);var he=function(){function a(b,c,d){this.vnode=c,this.props=_(_({el:b},a.defaultOptions),this.propsHandle(d));var e=D.extend(Fh);this.tip=new e({propsData:this.props}).$mount(),this.refHandle()}return a.prototype.updateProps=function(b){Object.assign(this.tip,this.propsHandle(b))},a.prototype.startWatch=function(){var b=this,c=this.tip.$watch("visible",function(){d()});function d(){document.body.appendChild(b.tip.$el),c()}},a.prototype.refHandle=function(){this.ref&&(this.vnode.context.$refs[this.ref]?this.tip.$el.appendChild(this.vnode.context.$refs[this.ref]):console.error("[Tooltip] no REF element ["+this.ref+"]"))},a.prototype.destroy=function(){document.body.contains(this.tip.$el)&&document.body.removeChild(this.tip.$el)},a.prototype.propsHandle=function(b){if(typeof b==="string")return{content:b};if(typeof b==="object")return b.ref&&!b.context&&(this.ref=b.ref,delete b.ref),_({},b)},a.defaults=function(b){this.defaultOptions=b},a}();function Gh(a){return{bind:function(b,c,d){a&&he.defaults(a)},inserted:function(b,c,d,e){b.tip=new he(b,d,c.value),b.tip.startWatch()},update:function(b,c,d,e){b.tip.updateProps(c.value)},unbind:function(b,c,d,e){b.tip.destroy()}}}var Hh={install:function(a,b){b===void 0&&(b={});var c=b.directiveName||"tip";console.log(b),a.directive(c,Gh(b)),console.log("注册成功")}};ya.default=Hh,Object.defineProperty(ya,"__esModule",{value:!0})});
