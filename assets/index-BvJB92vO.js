const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RegisterView-BrJ8XWcd.js","assets/RegisterView-gEIOTGGQ.css","assets/AuthView-Dz0dTZbb.js","assets/AuthView-9Q2AYyAW.css","assets/UserPage-DZhedH0Y.js","assets/UserPage-D3P-GyWH.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
* @vue/shared v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function p5(c){const e=Object.create(null);for(const t of c.split(","))e[t]=1;return t=>t in e}const T2={},t0=[],e3=()=>{},zz=()=>!1,_8=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),g5=c=>c.startsWith("onUpdate:"),t1=Object.assign,L5=(c,e)=>{const t=c.indexOf(e);t>-1&&c.splice(t,1)},Mz=Object.prototype.hasOwnProperty,w2=(c,e)=>Mz.call(c,e),a2=Array.isArray,s0=c=>v8(c)==="[object Map]",tl=c=>v8(c)==="[object Set]",d2=c=>typeof c=="function",j2=c=>typeof c=="string",o4=c=>typeof c=="symbol",D2=c=>c!==null&&typeof c=="object",sl=c=>(D2(c)||d2(c))&&d2(c.then)&&d2(c.catch),nl=Object.prototype.toString,v8=c=>nl.call(c),Cz=c=>v8(c).slice(8,-1),il=c=>v8(c)==="[object Object]",z5=c=>j2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,a6=p5(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),w8=c=>{const e=Object.create(null);return t=>e[t]||(e[t]=c(t))},yz=/-(\w)/g,j1=w8(c=>c.replace(yz,(e,t)=>t?t.toUpperCase():"")),_z=/\B([A-Z])/g,O4=w8(c=>c.replace(_z,"-$1").toLowerCase()),x8=w8(c=>c.charAt(0).toUpperCase()+c.slice(1)),Oc=w8(c=>c?`on${x8(c)}`:""),e4=(c,e)=>!Object.is(c,e),Oe=(c,...e)=>{for(let t=0;t<c.length;t++)c[t](...e)},rl=(c,e,t,s=!1)=>{Object.defineProperty(c,e,{configurable:!0,enumerable:!1,writable:s,value:t})},pt=c=>{const e=parseFloat(c);return isNaN(e)?c:e};let vn;const ll=()=>vn||(vn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function M5(c){if(a2(c)){const e={};for(let t=0;t<c.length;t++){const s=c[t],n=j2(s)?bz(s):M5(s);if(n)for(const i in n)e[i]=n[i]}return e}else if(j2(c)||D2(c))return c}const vz=/;(?![^(]*\))/g,wz=/:([^]+)/,xz=/\/\*[^]*?\*\//g;function bz(c){const e={};return c.replace(xz,"").split(vz).forEach(t=>{if(t){const s=t.split(wz);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function C5(c){let e="";if(j2(c))e=c;else if(a2(c))for(let t=0;t<c.length;t++){const s=C5(c[t]);s&&(e+=s+" ")}else if(D2(c))for(const t in c)c[t]&&(e+=t+" ");return e.trim()}const Nz="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ez=p5(Nz);function ol(c){return!!c||c===""}const al=c=>!!(c&&c.__v_isRef===!0),Az=c=>j2(c)?c:c==null?"":a2(c)||D2(c)&&(c.toString===nl||!d2(c.toString))?al(c)?Az(c.value):JSON.stringify(c,fl,2):String(c),fl=(c,e)=>al(e)?fl(c,e.value):s0(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,n],i)=>(t[Vc(s,i)+" =>"]=n,t),{})}:tl(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Vc(t))}:o4(e)?Vc(e):D2(e)&&!a2(e)&&!il(e)?String(e):e,Vc=(c,e="")=>{var t;return o4(c)?`Symbol(${(t=c.description)!=null?t:e})`:c};/**
* @vue/reactivity v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let A1;class Tz{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=A1,!e&&A1&&(this.index=(A1.scopes||(A1.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=A1;try{return A1=this,e()}finally{A1=t}}}on(){A1=this}off(){A1=this.parent}stop(e){if(this._active){let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function Sz(){return A1}let A2;const Fc=new WeakSet;class ul{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,A1&&A1.active&&A1.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fc.has(this)&&(Fc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wn(this),ml(this);const e=A2,t=H1;A2=this,H1=!0;try{return this.fn()}finally{pl(this),A2=e,H1=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)v5(e);this.deps=this.depsTail=void 0,wn(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gt(this)&&this.run()}get dirty(){return gt(this)}}let hl=0,f6;function dl(c){c.flags|=8,c.next=f6,f6=c}function y5(){hl++}function _5(){if(--hl>0)return;let c;for(;f6;){let e=f6;for(f6=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){c||(c=s)}e=t}}if(c)throw c}function ml(c){for(let e=c.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function pl(c){let e,t=c.depsTail,s=t;for(;s;){const n=s.prevDep;s.version===-1?(s===t&&(t=n),v5(s),Iz(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=n}c.deps=e,c.depsTail=t}function gt(c){for(let e=c.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(gl(e.dep.computed)||e.dep.version!==e.version))return!0;return!!c._dirty}function gl(c){if(c.flags&4&&!(c.flags&16)||(c.flags&=-17,c.globalVersion===v6))return;c.globalVersion=v6;const e=c.dep;if(c.flags|=2,e.version>0&&!c.isSSR&&c.deps&&!gt(c)){c.flags&=-3;return}const t=A2,s=H1;A2=c,H1=!0;try{ml(c);const n=c.fn(c._value);(e.version===0||e4(n,c._value))&&(c._value=n,e.version++)}catch(n){throw e.version++,n}finally{A2=t,H1=s,pl(c),c.flags&=-3}}function v5(c){const{dep:e,prevSub:t,nextSub:s}=c;if(t&&(t.nextSub=s,c.prevSub=void 0),s&&(s.prevSub=t,c.nextSub=void 0),e.subs===c&&(e.subs=t),!e.subs&&e.computed){e.computed.flags&=-5;for(let n=e.computed.deps;n;n=n.nextDep)v5(n)}}function Iz(c){const{prevDep:e,nextDep:t}=c;e&&(e.nextDep=t,c.prevDep=void 0),t&&(t.prevDep=e,c.nextDep=void 0)}let H1=!0;const Ll=[];function a4(){Ll.push(H1),H1=!1}function f4(){const c=Ll.pop();H1=c===void 0?!0:c}function wn(c){const{cleanup:e}=c;if(c.cleanup=void 0,e){const t=A2;A2=void 0;try{e()}finally{A2=t}}}let v6=0;class Rz{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class w5{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!A2||!H1||A2===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==A2)t=this.activeLink=new Rz(A2,this),A2.deps?(t.prevDep=A2.depsTail,A2.depsTail.nextDep=t,A2.depsTail=t):A2.deps=A2.depsTail=t,A2.flags&4&&zl(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=A2.depsTail,t.nextDep=void 0,A2.depsTail.nextDep=t,A2.depsTail=t,A2.deps===t&&(A2.deps=s)}return t}trigger(e){this.version++,v6++,this.notify(e)}notify(e){y5();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{_5()}}}function zl(c){const e=c.dep.computed;if(e&&!c.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)zl(s)}const t=c.dep.subs;t!==c&&(c.prevSub=t,t&&(t.nextSub=c)),c.dep.subs=c}const Lt=new WeakMap,w4=Symbol(""),zt=Symbol(""),w6=Symbol("");function m1(c,e,t){if(H1&&A2){let s=Lt.get(c);s||Lt.set(c,s=new Map);let n=s.get(t);n||s.set(t,n=new w5),n.track()}}function M3(c,e,t,s,n,i){const r=Lt.get(c);if(!r){v6++;return}const o=a=>{a&&a.trigger()};if(y5(),e==="clear")r.forEach(o);else{const a=a2(c),u=a&&z5(t);if(a&&t==="length"){const h=Number(s);r.forEach((m,p)=>{(p==="length"||p===w6||!o4(p)&&p>=h)&&o(m)})}else switch(t!==void 0&&o(r.get(t)),u&&o(r.get(w6)),e){case"add":a?u&&o(r.get("length")):(o(r.get(w4)),s0(c)&&o(r.get(zt)));break;case"delete":a||(o(r.get(w4)),s0(c)&&o(r.get(zt)));break;case"set":s0(c)&&o(r.get(w4));break}}_5()}function G4(c){const e=x2(c);return e===c?e:(m1(e,"iterate",w6),F1(c)?e:e.map(f1))}function b8(c){return m1(c=x2(c),"iterate",w6),c}const Pz={__proto__:null,[Symbol.iterator](){return Uc(this,Symbol.iterator,f1)},concat(...c){return G4(this).concat(...c.map(e=>a2(e)?G4(e):e))},entries(){return Uc(this,"entries",c=>(c[1]=f1(c[1]),c))},every(c,e){return h3(this,"every",c,e,void 0,arguments)},filter(c,e){return h3(this,"filter",c,e,t=>t.map(f1),arguments)},find(c,e){return h3(this,"find",c,e,f1,arguments)},findIndex(c,e){return h3(this,"findIndex",c,e,void 0,arguments)},findLast(c,e){return h3(this,"findLast",c,e,f1,arguments)},findLastIndex(c,e){return h3(this,"findLastIndex",c,e,void 0,arguments)},forEach(c,e){return h3(this,"forEach",c,e,void 0,arguments)},includes(...c){return Bc(this,"includes",c)},indexOf(...c){return Bc(this,"indexOf",c)},join(c){return G4(this).join(c)},lastIndexOf(...c){return Bc(this,"lastIndexOf",c)},map(c,e){return h3(this,"map",c,e,void 0,arguments)},pop(){return G0(this,"pop")},push(...c){return G0(this,"push",c)},reduce(c,...e){return xn(this,"reduce",c,e)},reduceRight(c,...e){return xn(this,"reduceRight",c,e)},shift(){return G0(this,"shift")},some(c,e){return h3(this,"some",c,e,void 0,arguments)},splice(...c){return G0(this,"splice",c)},toReversed(){return G4(this).toReversed()},toSorted(c){return G4(this).toSorted(c)},toSpliced(...c){return G4(this).toSpliced(...c)},unshift(...c){return G0(this,"unshift",c)},values(){return Uc(this,"values",f1)}};function Uc(c,e,t){const s=b8(c),n=s[e]();return s!==c&&!F1(c)&&(n._next=n.next,n.next=()=>{const i=n._next();return i.value&&(i.value=t(i.value)),i}),n}const kz=Array.prototype;function h3(c,e,t,s,n,i){const r=b8(c),o=r!==c&&!F1(c),a=r[e];if(a!==kz[e]){const m=a.apply(c,i);return o?f1(m):m}let u=t;r!==c&&(o?u=function(m,p){return t.call(this,f1(m),p,c)}:t.length>2&&(u=function(m,p){return t.call(this,m,p,c)}));const h=a.call(r,u,s);return o&&n?n(h):h}function xn(c,e,t,s){const n=b8(c);let i=t;return n!==c&&(F1(c)?t.length>3&&(i=function(r,o,a){return t.call(this,r,o,a,c)}):i=function(r,o,a){return t.call(this,r,f1(o),a,c)}),n[e](i,...s)}function Bc(c,e,t){const s=x2(c);m1(s,"iterate",w6);const n=s[e](...t);return(n===-1||n===!1)&&E5(t[0])?(t[0]=x2(t[0]),s[e](...t)):n}function G0(c,e,t=[]){a4(),y5();const s=x2(c)[e].apply(c,t);return _5(),f4(),s}const Dz=p5("__proto__,__v_isRef,__isVue"),Ml=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(o4));function Oz(c){o4(c)||(c=String(c));const e=x2(this);return m1(e,"has",c),e.hasOwnProperty(c)}class Cl{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){const n=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!n;if(t==="__v_isReadonly")return n;if(t==="__v_isShallow")return i;if(t==="__v_raw")return s===(n?i?Yz:wl:i?vl:_l).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const r=a2(e);if(!n){let a;if(r&&(a=Pz[t]))return a;if(t==="hasOwnProperty")return Oz}const o=Reflect.get(e,t,d1(e)?e:s);return(o4(t)?Ml.has(t):Dz(t))||(n||m1(e,"get",t),i)?o:d1(o)?r&&z5(t)?o:o.value:D2(o)?n?bl(o):E8(o):o}}class yl extends Cl{constructor(e=!1){super(!1,e)}set(e,t,s,n){let i=e[t];if(!this._isShallow){const a=E4(i);if(!F1(s)&&!E4(s)&&(i=x2(i),s=x2(s)),!a2(e)&&d1(i)&&!d1(s))return a?!1:(i.value=s,!0)}const r=a2(e)&&z5(t)?Number(t)<e.length:w2(e,t),o=Reflect.set(e,t,s,d1(e)?e:n);return e===x2(n)&&(r?e4(s,i)&&M3(e,"set",t,s):M3(e,"add",t,s)),o}deleteProperty(e,t){const s=w2(e,t);e[t];const n=Reflect.deleteProperty(e,t);return n&&s&&M3(e,"delete",t,void 0),n}has(e,t){const s=Reflect.has(e,t);return(!o4(t)||!Ml.has(t))&&m1(e,"has",t),s}ownKeys(e){return m1(e,"iterate",a2(e)?"length":w4),Reflect.ownKeys(e)}}class Vz extends Cl{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Fz=new yl,Uz=new Vz,Bz=new yl(!0);const x5=c=>c,N8=c=>Reflect.getPrototypeOf(c);function we(c,e,t=!1,s=!1){c=c.__v_raw;const n=x2(c),i=x2(e);t||(e4(e,i)&&m1(n,"get",e),m1(n,"get",i));const{has:r}=N8(n),o=s?x5:t?A5:f1;if(r.call(n,e))return o(c.get(e));if(r.call(n,i))return o(c.get(i));c!==n&&c.get(e)}function xe(c,e=!1){const t=this.__v_raw,s=x2(t),n=x2(c);return e||(e4(c,n)&&m1(s,"has",c),m1(s,"has",n)),c===n?t.has(c):t.has(c)||t.has(n)}function be(c,e=!1){return c=c.__v_raw,!e&&m1(x2(c),"iterate",w4),Reflect.get(c,"size",c)}function bn(c,e=!1){!e&&!F1(c)&&!E4(c)&&(c=x2(c));const t=x2(this);return N8(t).has.call(t,c)||(t.add(c),M3(t,"add",c,c)),this}function Nn(c,e,t=!1){!t&&!F1(e)&&!E4(e)&&(e=x2(e));const s=x2(this),{has:n,get:i}=N8(s);let r=n.call(s,c);r||(c=x2(c),r=n.call(s,c));const o=i.call(s,c);return s.set(c,e),r?e4(e,o)&&M3(s,"set",c,e):M3(s,"add",c,e),this}function En(c){const e=x2(this),{has:t,get:s}=N8(e);let n=t.call(e,c);n||(c=x2(c),n=t.call(e,c)),s&&s.call(e,c);const i=e.delete(c);return n&&M3(e,"delete",c,void 0),i}function An(){const c=x2(this),e=c.size!==0,t=c.clear();return e&&M3(c,"clear",void 0,void 0),t}function Ne(c,e){return function(s,n){const i=this,r=i.__v_raw,o=x2(r),a=e?x5:c?A5:f1;return!c&&m1(o,"iterate",w4),r.forEach((u,h)=>s.call(n,a(u),a(h),i))}}function Ee(c,e,t){return function(...s){const n=this.__v_raw,i=x2(n),r=s0(i),o=c==="entries"||c===Symbol.iterator&&r,a=c==="keys"&&r,u=n[c](...s),h=t?x5:e?A5:f1;return!e&&m1(i,"iterate",a?zt:w4),{next(){const{value:m,done:p}=u.next();return p?{value:m,done:p}:{value:o?[h(m[0]),h(m[1])]:h(m),done:p}},[Symbol.iterator](){return this}}}}function O3(c){return function(...e){return c==="delete"?!1:c==="clear"?void 0:this}}function Hz(){const c={get(i){return we(this,i)},get size(){return be(this)},has:xe,add:bn,set:Nn,delete:En,clear:An,forEach:Ne(!1,!1)},e={get(i){return we(this,i,!1,!0)},get size(){return be(this)},has:xe,add(i){return bn.call(this,i,!0)},set(i,r){return Nn.call(this,i,r,!0)},delete:En,clear:An,forEach:Ne(!1,!0)},t={get(i){return we(this,i,!0)},get size(){return be(this,!0)},has(i){return xe.call(this,i,!0)},add:O3("add"),set:O3("set"),delete:O3("delete"),clear:O3("clear"),forEach:Ne(!0,!1)},s={get(i){return we(this,i,!0,!0)},get size(){return be(this,!0)},has(i){return xe.call(this,i,!0)},add:O3("add"),set:O3("set"),delete:O3("delete"),clear:O3("clear"),forEach:Ne(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=Ee(i,!1,!1),t[i]=Ee(i,!0,!1),e[i]=Ee(i,!1,!0),s[i]=Ee(i,!0,!0)}),[c,t,e,s]}const[qz,jz,Wz,$z]=Hz();function b5(c,e){const t=e?c?$z:Wz:c?jz:qz;return(s,n,i)=>n==="__v_isReactive"?!c:n==="__v_isReadonly"?c:n==="__v_raw"?s:Reflect.get(w2(t,n)&&n in s?t:s,n,i)}const Gz={get:b5(!1,!1)},Kz={get:b5(!1,!0)},Qz={get:b5(!0,!1)};const _l=new WeakMap,vl=new WeakMap,wl=new WeakMap,Yz=new WeakMap;function Xz(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jz(c){return c.__v_skip||!Object.isExtensible(c)?0:Xz(Cz(c))}function E8(c){return E4(c)?c:N5(c,!1,Fz,Gz,_l)}function xl(c){return N5(c,!1,Bz,Kz,vl)}function bl(c){return N5(c,!0,Uz,Qz,wl)}function N5(c,e,t,s,n){if(!D2(c)||c.__v_raw&&!(e&&c.__v_isReactive))return c;const i=n.get(c);if(i)return i;const r=Jz(c);if(r===0)return c;const o=new Proxy(c,r===2?s:t);return n.set(c,o),o}function n0(c){return E4(c)?n0(c.__v_raw):!!(c&&c.__v_isReactive)}function E4(c){return!!(c&&c.__v_isReadonly)}function F1(c){return!!(c&&c.__v_isShallow)}function E5(c){return c?!!c.__v_raw:!1}function x2(c){const e=c&&c.__v_raw;return e?x2(e):c}function Zz(c){return!w2(c,"__v_skip")&&Object.isExtensible(c)&&rl(c,"__v_skip",!0),c}const f1=c=>D2(c)?E8(c):c,A5=c=>D2(c)?bl(c):c;function d1(c){return c?c.__v_isRef===!0:!1}function eM(c){return Nl(c,!1)}function cM(c){return Nl(c,!0)}function Nl(c,e){return d1(c)?c:new tM(c,e)}class tM{constructor(e,t){this.dep=new w5,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:x2(e),this._value=t?e:f1(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||F1(e)||E4(e);e=s?e:x2(e),e4(e,t)&&(this._rawValue=e,this._value=s?e:f1(e),this.dep.trigger())}}function i0(c){return d1(c)?c.value:c}const sM={get:(c,e,t)=>e==="__v_raw"?c:i0(Reflect.get(c,e,t)),set:(c,e,t,s)=>{const n=c[e];return d1(n)&&!d1(t)?(n.value=t,!0):Reflect.set(c,e,t,s)}};function El(c){return n0(c)?c:new Proxy(c,sM)}class nM{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new w5(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=v6-1,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&A2!==this)return dl(this),!0}get value(){const e=this.dep.track();return gl(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function iM(c,e,t=!1){let s,n;return d2(c)?s=c:(s=c.get,n=c.set),new nM(s,n,t)}const Ae={},Je=new WeakMap;let C4;function rM(c,e=!1,t=C4){if(t){let s=Je.get(t);s||Je.set(t,s=[]),s.push(c)}}function lM(c,e,t=T2){const{immediate:s,deep:n,once:i,scheduler:r,augmentJob:o,call:a}=t,u=B=>n?B:F1(B)||n===!1||n===0?p3(B,1):p3(B);let h,m,p,z,A=!1,R=!1;if(d1(c)?(m=()=>c.value,A=F1(c)):n0(c)?(m=()=>u(c),A=!0):a2(c)?(R=!0,A=c.some(B=>n0(B)||F1(B)),m=()=>c.map(B=>{if(d1(B))return B.value;if(n0(B))return u(B);if(d2(B))return a?a(B,2):B()})):d2(c)?e?m=a?()=>a(c,2):c:m=()=>{if(p){a4();try{p()}finally{f4()}}const B=C4;C4=h;try{return a?a(c,3,[z]):c(z)}finally{C4=B}}:m=e3,e&&n){const B=m,s2=n===!0?1/0:n;m=()=>p3(B(),s2)}const P=Sz(),T=()=>{h.stop(),P&&L5(P.effects,h)};if(i&&e){const B=e;e=(...s2)=>{B(...s2),T()}}let S=R?new Array(c.length).fill(Ae):Ae;const O=B=>{if(!(!(h.flags&1)||!h.dirty&&!B))if(e){const s2=h.run();if(n||A||(R?s2.some((f2,v)=>e4(f2,S[v])):e4(s2,S))){p&&p();const f2=C4;C4=h;try{const v=[s2,S===Ae?void 0:R&&S[0]===Ae?[]:S,z];a?a(e,3,v):e(...v),S=s2}finally{C4=f2}}}else h.run()};return o&&o(O),h=new ul(m),h.scheduler=r?()=>r(O,!1):O,z=B=>rM(B,!1,h),p=h.onStop=()=>{const B=Je.get(h);if(B){if(a)a(B,4);else for(const s2 of B)s2();Je.delete(h)}},e?s?O(!0):S=h.run():r?r(O.bind(null,!0),!0):h.run(),T.pause=h.pause.bind(h),T.resume=h.resume.bind(h),T.stop=T,T}function p3(c,e=1/0,t){if(e<=0||!D2(c)||c.__v_skip||(t=t||new Set,t.has(c)))return c;if(t.add(c),e--,d1(c))p3(c.value,e,t);else if(a2(c))for(let s=0;s<c.length;s++)p3(c[s],e,t);else if(tl(c)||s0(c))c.forEach(s=>{p3(s,e,t)});else if(il(c)){for(const s in c)p3(c[s],e,t);for(const s of Object.getOwnPropertySymbols(c))Object.prototype.propertyIsEnumerable.call(c,s)&&p3(c[s],e,t)}return c}/**
* @vue/runtime-core v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function B6(c,e,t,s){try{return s?c(...s):c()}catch(n){A8(n,e,t)}}function r3(c,e,t,s){if(d2(c)){const n=B6(c,e,t,s);return n&&sl(n)&&n.catch(i=>{A8(i,e,t)}),n}if(a2(c)){const n=[];for(let i=0;i<c.length;i++)n.push(r3(c[i],e,t,s));return n}}function A8(c,e,t,s=!0){const n=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:r}=e&&e.appContext.config||T2;if(e){let o=e.parent;const a=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const h=o.ec;if(h){for(let m=0;m<h.length;m++)if(h[m](c,a,u)===!1)return}o=o.parent}if(i){a4(),B6(i,null,10,[c,a,u]),f4();return}}oM(c,t,n,s,r)}function oM(c,e,t,s=!0,n=!1){if(n)throw c;console.error(c)}let x6=!1,Mt=!1;const y1=[];let Q1=0;const r0=[];let B3=null,K4=0;const Al=Promise.resolve();let T5=null;function Tl(c){const e=T5||Al;return c?e.then(this?c.bind(this):c):e}function aM(c){let e=x6?Q1+1:0,t=y1.length;for(;e<t;){const s=e+t>>>1,n=y1[s],i=b6(n);i<c||i===c&&n.flags&2?e=s+1:t=s}return e}function S5(c){if(!(c.flags&1)){const e=b6(c),t=y1[y1.length-1];!t||!(c.flags&2)&&e>=b6(t)?y1.push(c):y1.splice(aM(e),0,c),c.flags|=1,Sl()}}function Sl(){!x6&&!Mt&&(Mt=!0,T5=Al.then(Rl))}function fM(c){a2(c)?r0.push(...c):B3&&c.id===-1?B3.splice(K4+1,0,c):c.flags&1||(r0.push(c),c.flags|=1),Sl()}function Tn(c,e,t=x6?Q1+1:0){for(;t<y1.length;t++){const s=y1[t];if(s&&s.flags&2){if(c&&s.id!==c.uid)continue;y1.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&=-2}}}function Il(c){if(r0.length){const e=[...new Set(r0)].sort((t,s)=>b6(t)-b6(s));if(r0.length=0,B3){B3.push(...e);return}for(B3=e,K4=0;K4<B3.length;K4++){const t=B3[K4];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}B3=null,K4=0}}const b6=c=>c.id==null?c.flags&2?-1:1/0:c.id;function Rl(c){Mt=!1,x6=!0;try{for(Q1=0;Q1<y1.length;Q1++){const e=y1[Q1];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),B6(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;Q1<y1.length;Q1++){const e=y1[Q1];e&&(e.flags&=-2)}Q1=0,y1.length=0,Il(),x6=!1,T5=null,(y1.length||r0.length)&&Rl()}}let e1=null,Pl=null;function Ze(c){const e=e1;return e1=c,Pl=c&&c.type.__scopeId||null,e}function uM(c,e=e1,t){if(!e||c._n)return c;const s=(...n)=>{s._d&&Fn(-1);const i=Ze(e);let r;try{r=c(...n)}finally{Ze(i),s._d&&Fn(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function b02(c,e){if(e1===null)return c;const t=P8(e1),s=c.dirs||(c.dirs=[]);for(let n=0;n<e.length;n++){let[i,r,o,a=T2]=e[n];i&&(d2(i)&&(i={mounted:i,updated:i}),i.deep&&p3(r),s.push({dir:i,instance:t,value:r,oldValue:void 0,arg:o,modifiers:a}))}return c}function z4(c,e,t,s){const n=c.dirs,i=e&&e.dirs;for(let r=0;r<n.length;r++){const o=n[r];i&&(o.oldValue=i[r].value);let a=o.dir[s];a&&(a4(),r3(a,t,8,[c.el,o,c,e]),f4())}}const hM=Symbol("_vte"),dM=c=>c.__isTeleport;function I5(c,e){c.shapeFlag&6&&c.component?(c.transition=e,I5(c.component.subTree,e)):c.shapeFlag&128?(c.ssContent.transition=e.clone(c.ssContent),c.ssFallback.transition=e.clone(c.ssFallback)):c.transition=e}/*! #__NO_SIDE_EFFECTS__ */function R5(c,e){return d2(c)?t1({name:c.name},e,{setup:c}):c}function kl(c){c.ids=[c.ids[0]+c.ids[2]+++"-",0,0]}function Ct(c,e,t,s,n=!1){if(a2(c)){c.forEach((A,R)=>Ct(A,e&&(a2(e)?e[R]:e),t,s,n));return}if(l0(s)&&!n)return;const i=s.shapeFlag&4?P8(s.component):s.el,r=n?null:i,{i:o,r:a}=c,u=e&&e.r,h=o.refs===T2?o.refs={}:o.refs,m=o.setupState,p=x2(m),z=m===T2?()=>!1:A=>w2(p,A);if(u!=null&&u!==a&&(j2(u)?(h[u]=null,z(u)&&(m[u]=null)):d1(u)&&(u.value=null)),d2(a))B6(a,o,12,[r,h]);else{const A=j2(a),R=d1(a);if(A||R){const P=()=>{if(c.f){const T=A?z(a)?m[a]:h[a]:a.value;n?a2(T)&&L5(T,i):a2(T)?T.includes(i)||T.push(i):A?(h[a]=[i],z(a)&&(m[a]=h[a])):(a.value=[i],c.k&&(h[c.k]=a.value))}else A?(h[a]=r,z(a)&&(m[a]=r)):R&&(a.value=r,c.k&&(h[c.k]=r))};r?(P.id=-1,E1(P,t)):P()}}}const l0=c=>!!c.type.__asyncLoader,Dl=c=>c.type.__isKeepAlive;function mM(c,e){Ol(c,"a",e)}function pM(c,e){Ol(c,"da",e)}function Ol(c,e,t=h1){const s=c.__wdc||(c.__wdc=()=>{let n=t;for(;n;){if(n.isDeactivated)return;n=n.parent}return c()});if(T8(e,s,t),t){let n=t.parent;for(;n&&n.parent;)Dl(n.parent.vnode)&&gM(s,e,t,n),n=n.parent}}function gM(c,e,t,s){const n=T8(e,c,s,!0);Vl(()=>{L5(s[e],n)},t)}function T8(c,e,t=h1,s=!1){if(t){const n=t[c]||(t[c]=[]),i=e.__weh||(e.__weh=(...r)=>{a4();const o=H6(t),a=r3(e,t,c,r);return o(),f4(),a});return s?n.unshift(i):n.push(i),i}}const A3=c=>(e,t=h1)=>{(!R8||c==="sp")&&T8(c,(...s)=>e(...s),t)},LM=A3("bm"),zM=A3("m"),MM=A3("bu"),CM=A3("u"),yM=A3("bum"),Vl=A3("um"),_M=A3("sp"),vM=A3("rtg"),wM=A3("rtc");function xM(c,e=h1){T8("ec",c,e)}const bM="components";function NM(c,e){return AM(bM,c,!0,e)||c}const EM=Symbol.for("v-ndc");function AM(c,e,t=!0,s=!1){const n=e1||h1;if(n){const i=n.type;{const o=LC(i,!1);if(o&&(o===e||o===j1(e)||o===x8(j1(e))))return i}const r=Sn(n[c]||i[c],e)||Sn(n.appContext[c],e);return!r&&s?i:r}}function Sn(c,e){return c&&(c[e]||c[j1(e)]||c[x8(j1(e))])}function N02(c,e,t,s){let n;const i=t,r=a2(c);if(r||j2(c)){const o=r&&n0(c);let a=!1;o&&(a=!F1(c),c=b8(c)),n=new Array(c.length);for(let u=0,h=c.length;u<h;u++)n[u]=e(a?f1(c[u]):c[u],u,void 0,i)}else if(typeof c=="number"){n=new Array(c);for(let o=0;o<c;o++)n[o]=e(o+1,o,void 0,i)}else if(D2(c))if(c[Symbol.iterator])n=Array.from(c,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(c);n=new Array(o.length);for(let a=0,u=o.length;a<u;a++){const h=o[a];n[a]=e(c[h],h,a,i)}}else n=[];return n}function E02(c,e,t={},s,n){if(e1.ce||e1.parent&&l0(e1.parent)&&e1.parent.ce)return c8(),xt(V1,null,[_1("slot",t,s)],64);let i=c[e];i&&i._c&&(i._d=!1),c8();const r=i&&Fl(i(t)),o=xt(V1,{key:(t.key||r&&r.key||`_${e}`)+(!r&&s?"_fb":"")},r||[],r&&c._===1?64:-2);return i&&i._c&&(i._d=!0),o}function Fl(c){return c.some(e=>t8(e)?!(e.type===c4||e.type===V1&&!Fl(e.children)):!0)?c:null}const yt=c=>c?r9(c)?P8(c):yt(c.parent):null,u6=t1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>yt(c.parent),$root:c=>yt(c.root),$host:c=>c.ce,$emit:c=>c.emit,$options:c=>P5(c),$forceUpdate:c=>c.f||(c.f=()=>{S5(c.update)}),$nextTick:c=>c.n||(c.n=Tl.bind(c.proxy)),$watch:c=>YM.bind(c)}),Hc=(c,e)=>c!==T2&&!c.__isScriptSetup&&w2(c,e),TM={get({_:c},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:n,props:i,accessCache:r,type:o,appContext:a}=c;let u;if(e[0]!=="$"){const z=r[e];if(z!==void 0)switch(z){case 1:return s[e];case 2:return n[e];case 4:return t[e];case 3:return i[e]}else{if(Hc(s,e))return r[e]=1,s[e];if(n!==T2&&w2(n,e))return r[e]=2,n[e];if((u=c.propsOptions[0])&&w2(u,e))return r[e]=3,i[e];if(t!==T2&&w2(t,e))return r[e]=4,t[e];_t&&(r[e]=0)}}const h=u6[e];let m,p;if(h)return e==="$attrs"&&m1(c.attrs,"get",""),h(c);if((m=o.__cssModules)&&(m=m[e]))return m;if(t!==T2&&w2(t,e))return r[e]=4,t[e];if(p=a.config.globalProperties,w2(p,e))return p[e]},set({_:c},e,t){const{data:s,setupState:n,ctx:i}=c;return Hc(n,e)?(n[e]=t,!0):s!==T2&&w2(s,e)?(s[e]=t,!0):w2(c.props,e)||e[0]==="$"&&e.slice(1)in c?!1:(i[e]=t,!0)},has({_:{data:c,setupState:e,accessCache:t,ctx:s,appContext:n,propsOptions:i}},r){let o;return!!t[r]||c!==T2&&w2(c,r)||Hc(e,r)||(o=i[0])&&w2(o,r)||w2(s,r)||w2(u6,r)||w2(n.config.globalProperties,r)},defineProperty(c,e,t){return t.get!=null?c._.accessCache[e]=0:w2(t,"value")&&this.set(c,e,t.value,null),Reflect.defineProperty(c,e,t)}};function In(c){return a2(c)?c.reduce((e,t)=>(e[t]=null,e),{}):c}let _t=!0;function SM(c){const e=P5(c),t=c.proxy,s=c.ctx;_t=!1,e.beforeCreate&&Rn(e.beforeCreate,c,"bc");const{data:n,computed:i,methods:r,watch:o,provide:a,inject:u,created:h,beforeMount:m,mounted:p,beforeUpdate:z,updated:A,activated:R,deactivated:P,beforeDestroy:T,beforeUnmount:S,destroyed:O,unmounted:B,render:s2,renderTracked:f2,renderTriggered:v,errorCaptured:M,serverPrefetch:_,expose:w,inheritAttrs:x,components:b,directives:y,filters:L1}=e;if(u&&IM(u,s,null),r)for(const L2 in r){const m2=r[L2];d2(m2)&&(s[L2]=m2.bind(t))}if(n){const L2=n.call(t,t);D2(L2)&&(c.data=E8(L2))}if(_t=!0,i)for(const L2 in i){const m2=i[L2],b1=d2(m2)?m2.bind(t,t):d2(m2.get)?m2.get.bind(t,t):e3,U1=!d2(m2)&&d2(m2.set)?m2.set.bind(t):e3,D1=J2({get:b1,set:U1});Object.defineProperty(s,L2,{enumerable:!0,configurable:!0,get:()=>D1.value,set:O2=>D1.value=O2})}if(o)for(const L2 in o)Ul(o[L2],s,t,L2);if(a){const L2=d2(a)?a.call(t):a;Reflect.ownKeys(L2).forEach(m2=>{Ve(m2,L2[m2])})}h&&Rn(h,c,"c");function H2(L2,m2){a2(m2)?m2.forEach(b1=>L2(b1.bind(t))):m2&&L2(m2.bind(t))}if(H2(LM,m),H2(zM,p),H2(MM,z),H2(CM,A),H2(mM,R),H2(pM,P),H2(xM,M),H2(wM,f2),H2(vM,v),H2(yM,S),H2(Vl,B),H2(_M,_),a2(w))if(w.length){const L2=c.exposed||(c.exposed={});w.forEach(m2=>{Object.defineProperty(L2,m2,{get:()=>t[m2],set:b1=>t[m2]=b1})})}else c.exposed||(c.exposed={});s2&&c.render===e3&&(c.render=s2),x!=null&&(c.inheritAttrs=x),b&&(c.components=b),y&&(c.directives=y),_&&kl(c)}function IM(c,e,t=e3){a2(c)&&(c=vt(c));for(const s in c){const n=c[s];let i;D2(n)?"default"in n?i=q1(n.from||s,n.default,!0):i=q1(n.from||s):i=q1(n),d1(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:r=>i.value=r}):e[s]=i}}function Rn(c,e,t){r3(a2(c)?c.map(s=>s.bind(e.proxy)):c.bind(e.proxy),e,t)}function Ul(c,e,t,s){let n=s.includes(".")?e9(t,s):()=>t[s];if(j2(c)){const i=e[c];d2(i)&&h6(n,i)}else if(d2(c))h6(n,c.bind(t));else if(D2(c))if(a2(c))c.forEach(i=>Ul(i,e,t,s));else{const i=d2(c.handler)?c.handler.bind(t):e[c.handler];d2(i)&&h6(n,i,c)}}function P5(c){const e=c.type,{mixins:t,extends:s}=e,{mixins:n,optionsCache:i,config:{optionMergeStrategies:r}}=c.appContext,o=i.get(e);let a;return o?a=o:!n.length&&!t&&!s?a=e:(a={},n.length&&n.forEach(u=>e8(a,u,r,!0)),e8(a,e,r)),D2(e)&&i.set(e,a),a}function e8(c,e,t,s=!1){const{mixins:n,extends:i}=e;i&&e8(c,i,t,!0),n&&n.forEach(r=>e8(c,r,t,!0));for(const r in e)if(!(s&&r==="expose")){const o=RM[r]||t&&t[r];c[r]=o?o(c[r],e[r]):e[r]}return c}const RM={data:Pn,props:kn,emits:kn,methods:J0,computed:J0,beforeCreate:C1,created:C1,beforeMount:C1,mounted:C1,beforeUpdate:C1,updated:C1,beforeDestroy:C1,beforeUnmount:C1,destroyed:C1,unmounted:C1,activated:C1,deactivated:C1,errorCaptured:C1,serverPrefetch:C1,components:J0,directives:J0,watch:kM,provide:Pn,inject:PM};function Pn(c,e){return e?c?function(){return t1(d2(c)?c.call(this,this):c,d2(e)?e.call(this,this):e)}:e:c}function PM(c,e){return J0(vt(c),vt(e))}function vt(c){if(a2(c)){const e={};for(let t=0;t<c.length;t++)e[c[t]]=c[t];return e}return c}function C1(c,e){return c?[...new Set([].concat(c,e))]:e}function J0(c,e){return c?t1(Object.create(null),c,e):e}function kn(c,e){return c?a2(c)&&a2(e)?[...new Set([...c,...e])]:t1(Object.create(null),In(c),In(e??{})):e}function kM(c,e){if(!c)return e;if(!e)return c;const t=t1(Object.create(null),c);for(const s in e)t[s]=C1(c[s],e[s]);return t}function Bl(){return{app:null,config:{isNativeTag:zz,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let DM=0;function OM(c,e){return function(s,n=null){d2(s)||(s=t1({},s)),n!=null&&!D2(n)&&(n=null);const i=Bl(),r=new WeakSet,o=[];let a=!1;const u=i.app={_uid:DM++,_component:s,_props:n,_container:null,_context:i,_instance:null,version:MC,get config(){return i.config},set config(h){},use(h,...m){return r.has(h)||(h&&d2(h.install)?(r.add(h),h.install(u,...m)):d2(h)&&(r.add(h),h(u,...m))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,m){return m?(i.components[h]=m,u):i.components[h]},directive(h,m){return m?(i.directives[h]=m,u):i.directives[h]},mount(h,m,p){if(!a){const z=u._ceVNode||_1(s,n);return z.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),m&&e?e(z,h):c(z,h,p),a=!0,u._container=h,h.__vue_app__=u,P8(z.component)}},onUnmount(h){o.push(h)},unmount(){a&&(r3(o,u._instance,16),c(null,u._container),delete u._container.__vue_app__)},provide(h,m){return i.provides[h]=m,u},runWithContext(h){const m=o0;o0=u;try{return h()}finally{o0=m}}};return u}}let o0=null;function Ve(c,e){if(h1){let t=h1.provides;const s=h1.parent&&h1.parent.provides;s===t&&(t=h1.provides=Object.create(s)),t[c]=e}}function q1(c,e,t=!1){const s=h1||e1;if(s||o0){const n=o0?o0._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(n&&c in n)return n[c];if(arguments.length>1)return t&&d2(e)?e.call(s&&s.proxy):e}}const Hl={},ql=()=>Object.create(Hl),jl=c=>Object.getPrototypeOf(c)===Hl;function VM(c,e,t,s=!1){const n={},i=ql();c.propsDefaults=Object.create(null),Wl(c,e,n,i);for(const r in c.propsOptions[0])r in n||(n[r]=void 0);t?c.props=s?n:xl(n):c.type.props?c.props=n:c.props=i,c.attrs=i}function FM(c,e,t,s){const{props:n,attrs:i,vnode:{patchFlag:r}}=c,o=x2(n),[a]=c.propsOptions;let u=!1;if((s||r>0)&&!(r&16)){if(r&8){const h=c.vnode.dynamicProps;for(let m=0;m<h.length;m++){let p=h[m];if(S8(c.emitsOptions,p))continue;const z=e[p];if(a)if(w2(i,p))z!==i[p]&&(i[p]=z,u=!0);else{const A=j1(p);n[A]=wt(a,o,A,z,c,!1)}else z!==i[p]&&(i[p]=z,u=!0)}}}else{Wl(c,e,n,i)&&(u=!0);let h;for(const m in o)(!e||!w2(e,m)&&((h=O4(m))===m||!w2(e,h)))&&(a?t&&(t[m]!==void 0||t[h]!==void 0)&&(n[m]=wt(a,o,m,void 0,c,!0)):delete n[m]);if(i!==o)for(const m in i)(!e||!w2(e,m))&&(delete i[m],u=!0)}u&&M3(c.attrs,"set","")}function Wl(c,e,t,s){const[n,i]=c.propsOptions;let r=!1,o;if(e)for(let a in e){if(a6(a))continue;const u=e[a];let h;n&&w2(n,h=j1(a))?!i||!i.includes(h)?t[h]=u:(o||(o={}))[h]=u:S8(c.emitsOptions,a)||(!(a in s)||u!==s[a])&&(s[a]=u,r=!0)}if(i){const a=x2(t),u=o||T2;for(let h=0;h<i.length;h++){const m=i[h];t[m]=wt(n,a,m,u[m],c,!w2(u,m))}}return r}function wt(c,e,t,s,n,i){const r=c[t];if(r!=null){const o=w2(r,"default");if(o&&s===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&d2(a)){const{propsDefaults:u}=n;if(t in u)s=u[t];else{const h=H6(n);s=u[t]=a.call(null,e),h()}}else s=a;n.ce&&n.ce._setProp(t,s)}r[0]&&(i&&!o?s=!1:r[1]&&(s===""||s===O4(t))&&(s=!0))}return s}const UM=new WeakMap;function $l(c,e,t=!1){const s=t?UM:e.propsCache,n=s.get(c);if(n)return n;const i=c.props,r={},o=[];let a=!1;if(!d2(c)){const h=m=>{a=!0;const[p,z]=$l(m,e,!0);t1(r,p),z&&o.push(...z)};!t&&e.mixins.length&&e.mixins.forEach(h),c.extends&&h(c.extends),c.mixins&&c.mixins.forEach(h)}if(!i&&!a)return D2(c)&&s.set(c,t0),t0;if(a2(i))for(let h=0;h<i.length;h++){const m=j1(i[h]);Dn(m)&&(r[m]=T2)}else if(i)for(const h in i){const m=j1(h);if(Dn(m)){const p=i[h],z=r[m]=a2(p)||d2(p)?{type:p}:t1({},p),A=z.type;let R=!1,P=!0;if(a2(A))for(let T=0;T<A.length;++T){const S=A[T],O=d2(S)&&S.name;if(O==="Boolean"){R=!0;break}else O==="String"&&(P=!1)}else R=d2(A)&&A.name==="Boolean";z[0]=R,z[1]=P,(R||w2(z,"default"))&&o.push(m)}}const u=[r,o];return D2(c)&&s.set(c,u),u}function Dn(c){return c[0]!=="$"&&!a6(c)}const Gl=c=>c[0]==="_"||c==="$stable",k5=c=>a2(c)?c.map(Y1):[Y1(c)],BM=(c,e,t)=>{if(e._n)return e;const s=uM((...n)=>k5(e(...n)),t);return s._c=!1,s},Kl=(c,e,t)=>{const s=c._ctx;for(const n in c){if(Gl(n))continue;const i=c[n];if(d2(i))e[n]=BM(n,i,s);else if(i!=null){const r=k5(i);e[n]=()=>r}}},Ql=(c,e)=>{const t=k5(e);c.slots.default=()=>t},Yl=(c,e,t)=>{for(const s in e)(t||s!=="_")&&(c[s]=e[s])},HM=(c,e,t)=>{const s=c.slots=ql();if(c.vnode.shapeFlag&32){const n=e._;n?(Yl(s,e,t),t&&rl(s,"_",n,!0)):Kl(e,s)}else e&&Ql(c,e)},qM=(c,e,t)=>{const{vnode:s,slots:n}=c;let i=!0,r=T2;if(s.shapeFlag&32){const o=e._;o?t&&o===1?i=!1:Yl(n,e,t):(i=!e.$stable,Kl(e,n)),r=e}else e&&(Ql(c,e),r={default:1});if(i)for(const o in n)!Gl(o)&&r[o]==null&&delete n[o]},E1=sC;function jM(c){return WM(c)}function WM(c,e){const t=ll();t.__VUE__=!0;const{insert:s,remove:n,patchProp:i,createElement:r,createText:o,createComment:a,setText:u,setElementText:h,parentNode:m,nextSibling:p,setScopeId:z=e3,insertStaticContent:A}=c,R=(L,C,E,V=null,k=null,H=null,G=void 0,W=null,j=!!C.dynamicChildren)=>{if(L===C)return;L&&!K0(L,C)&&(V=D(L),O2(L,k,H,!0),L=null),C.patchFlag===-2&&(j=!1,C.dynamicChildren=null);const{type:q,ref:n2,shapeFlag:Q}=C;switch(q){case I8:P(L,C,E,V);break;case c4:T(L,C,E,V);break;case Wc:L==null&&S(C,E,V,G);break;case V1:b(L,C,E,V,k,H,G,W,j);break;default:Q&1?s2(L,C,E,V,k,H,G,W,j):Q&6?y(L,C,E,V,k,H,G,W,j):(Q&64||Q&128)&&q.process(L,C,E,V,k,H,G,W,j,X)}n2!=null&&k&&Ct(n2,L&&L.ref,H,C||L,!C)},P=(L,C,E,V)=>{if(L==null)s(C.el=o(C.children),E,V);else{const k=C.el=L.el;C.children!==L.children&&u(k,C.children)}},T=(L,C,E,V)=>{L==null?s(C.el=a(C.children||""),E,V):C.el=L.el},S=(L,C,E,V)=>{[L.el,L.anchor]=A(L.children,C,E,V,L.el,L.anchor)},O=({el:L,anchor:C},E,V)=>{let k;for(;L&&L!==C;)k=p(L),s(L,E,V),L=k;s(C,E,V)},B=({el:L,anchor:C})=>{let E;for(;L&&L!==C;)E=p(L),n(L),L=E;n(C)},s2=(L,C,E,V,k,H,G,W,j)=>{C.type==="svg"?G="svg":C.type==="math"&&(G="mathml"),L==null?f2(C,E,V,k,H,G,W,j):_(L,C,k,H,G,W,j)},f2=(L,C,E,V,k,H,G,W)=>{let j,q;const{props:n2,shapeFlag:Q,transition:c2,dirs:J}=L;if(j=L.el=r(L.type,H,n2&&n2.is,n2),Q&8?h(j,L.children):Q&16&&M(L.children,j,null,V,k,qc(L,H),G,W),J&&z4(L,null,V,"created"),v(j,L,L.scopeId,G,V),n2){for(const v2 in n2)v2!=="value"&&!a6(v2)&&i(j,v2,null,n2[v2],H,V);"value"in n2&&i(j,"value",null,n2.value,H),(q=n2.onVnodeBeforeMount)&&K1(q,V,L)}J&&z4(L,null,V,"beforeMount");const r2=$M(k,c2);r2&&c2.beforeEnter(j),s(j,C,E),((q=n2&&n2.onVnodeMounted)||r2||J)&&E1(()=>{q&&K1(q,V,L),r2&&c2.enter(j),J&&z4(L,null,V,"mounted")},k)},v=(L,C,E,V,k)=>{if(E&&z(L,E),V)for(let H=0;H<V.length;H++)z(L,V[H]);if(k){let H=k.subTree;if(C===H||t9(H.type)&&(H.ssContent===C||H.ssFallback===C)){const G=k.vnode;v(L,G,G.scopeId,G.slotScopeIds,k.parent)}}},M=(L,C,E,V,k,H,G,W,j=0)=>{for(let q=j;q<L.length;q++){const n2=L[q]=W?H3(L[q]):Y1(L[q]);R(null,n2,C,E,V,k,H,G,W)}},_=(L,C,E,V,k,H,G)=>{const W=C.el=L.el;let{patchFlag:j,dynamicChildren:q,dirs:n2}=C;j|=L.patchFlag&16;const Q=L.props||T2,c2=C.props||T2;let J;if(E&&M4(E,!1),(J=c2.onVnodeBeforeUpdate)&&K1(J,E,C,L),n2&&z4(C,L,E,"beforeUpdate"),E&&M4(E,!0),(Q.innerHTML&&c2.innerHTML==null||Q.textContent&&c2.textContent==null)&&h(W,""),q?w(L.dynamicChildren,q,W,E,V,qc(C,k),H):G||m2(L,C,W,null,E,V,qc(C,k),H,!1),j>0){if(j&16)x(W,Q,c2,E,k);else if(j&2&&Q.class!==c2.class&&i(W,"class",null,c2.class,k),j&4&&i(W,"style",Q.style,c2.style,k),j&8){const r2=C.dynamicProps;for(let v2=0;v2<r2.length;v2++){const C2=r2[v2],n1=Q[C2],G2=c2[C2];(G2!==n1||C2==="value")&&i(W,C2,n1,G2,k,E)}}j&1&&L.children!==C.children&&h(W,C.children)}else!G&&q==null&&x(W,Q,c2,E,k);((J=c2.onVnodeUpdated)||n2)&&E1(()=>{J&&K1(J,E,C,L),n2&&z4(C,L,E,"updated")},V)},w=(L,C,E,V,k,H,G)=>{for(let W=0;W<C.length;W++){const j=L[W],q=C[W],n2=j.el&&(j.type===V1||!K0(j,q)||j.shapeFlag&70)?m(j.el):E;R(j,q,n2,null,V,k,H,G,!0)}},x=(L,C,E,V,k)=>{if(C!==E){if(C!==T2)for(const H in C)!a6(H)&&!(H in E)&&i(L,H,C[H],null,k,V);for(const H in E){if(a6(H))continue;const G=E[H],W=C[H];G!==W&&H!=="value"&&i(L,H,W,G,k,V)}"value"in E&&i(L,"value",C.value,E.value,k)}},b=(L,C,E,V,k,H,G,W,j)=>{const q=C.el=L?L.el:o(""),n2=C.anchor=L?L.anchor:o("");let{patchFlag:Q,dynamicChildren:c2,slotScopeIds:J}=C;J&&(W=W?W.concat(J):J),L==null?(s(q,E,V),s(n2,E,V),M(C.children||[],E,n2,k,H,G,W,j)):Q>0&&Q&64&&c2&&L.dynamicChildren?(w(L.dynamicChildren,c2,E,k,H,G,W),(C.key!=null||k&&C===k.subTree)&&Xl(L,C,!0)):m2(L,C,E,n2,k,H,G,W,j)},y=(L,C,E,V,k,H,G,W,j)=>{C.slotScopeIds=W,L==null?C.shapeFlag&512?k.ctx.activate(C,E,V,G,j):L1(C,E,V,k,H,G,j):k1(L,C,j)},L1=(L,C,E,V,k,H,G)=>{const W=L.component=hC(L,V,k);if(Dl(L)&&(W.ctx.renderer=X),dC(W,!1,G),W.asyncDep){if(k&&k.registerDep(W,H2,G),!L.el){const j=W.subTree=_1(c4);T(null,j,C,E)}}else H2(W,L,C,E,k,H,G)},k1=(L,C,E)=>{const V=C.component=L.component;if(cC(L,C,E))if(V.asyncDep&&!V.asyncResolved){L2(V,C,E);return}else V.next=C,V.update();else C.el=L.el,V.vnode=C},H2=(L,C,E,V,k,H,G)=>{const W=()=>{if(L.isMounted){let{next:Q,bu:c2,u:J,parent:r2,vnode:v2}=L;{const i1=Jl(L);if(i1){Q&&(Q.el=v2.el,L2(L,Q,G)),i1.asyncDep.then(()=>{L.isUnmounted||W()});return}}let C2=Q,n1;M4(L,!1),Q?(Q.el=v2.el,L2(L,Q,G)):Q=v2,c2&&Oe(c2),(n1=Q.props&&Q.props.onVnodeBeforeUpdate)&&K1(n1,r2,Q,v2),M4(L,!0);const G2=jc(L),Q2=L.subTree;L.subTree=G2,R(Q2,G2,m(Q2.el),D(Q2),L,k,H),Q.el=G2.el,C2===null&&tC(L,G2.el),J&&E1(J,k),(n1=Q.props&&Q.props.onVnodeUpdated)&&E1(()=>K1(n1,r2,Q,v2),k)}else{let Q;const{el:c2,props:J}=C,{bm:r2,m:v2,parent:C2,root:n1,type:G2}=L,Q2=l0(C);if(M4(L,!1),r2&&Oe(r2),!Q2&&(Q=J&&J.onVnodeBeforeMount)&&K1(Q,C2,C),M4(L,!0),c2&&N2){const i1=()=>{L.subTree=jc(L),N2(c2,L.subTree,L,k,null)};Q2&&G2.__asyncHydrate?G2.__asyncHydrate(c2,L,i1):i1()}else{n1.ce&&n1.ce._injectChildStyle(G2);const i1=L.subTree=jc(L);R(null,i1,E,V,L,k,H),C.el=i1.el}if(v2&&E1(v2,k),!Q2&&(Q=J&&J.onVnodeMounted)){const i1=C;E1(()=>K1(Q,C2,i1),k)}(C.shapeFlag&256||C2&&l0(C2.vnode)&&C2.vnode.shapeFlag&256)&&L.a&&E1(L.a,k),L.isMounted=!0,C=E=V=null}};L.scope.on();const j=L.effect=new ul(W);L.scope.off();const q=L.update=j.run.bind(j),n2=L.job=j.runIfDirty.bind(j);n2.i=L,n2.id=L.uid,j.scheduler=()=>S5(n2),M4(L,!0),q()},L2=(L,C,E)=>{C.component=L;const V=L.vnode.props;L.vnode=C,L.next=null,FM(L,C.props,V,E),qM(L,C.children,E),a4(),Tn(L),f4()},m2=(L,C,E,V,k,H,G,W,j=!1)=>{const q=L&&L.children,n2=L?L.shapeFlag:0,Q=C.children,{patchFlag:c2,shapeFlag:J}=C;if(c2>0){if(c2&128){U1(q,Q,E,V,k,H,G,W,j);return}else if(c2&256){b1(q,Q,E,V,k,H,G,W,j);return}}J&8?(n2&16&&v1(q,k,H),Q!==q&&h(E,Q)):n2&16?J&16?U1(q,Q,E,V,k,H,G,W,j):v1(q,k,H,!0):(n2&8&&h(E,""),J&16&&M(Q,E,V,k,H,G,W,j))},b1=(L,C,E,V,k,H,G,W,j)=>{L=L||t0,C=C||t0;const q=L.length,n2=C.length,Q=Math.min(q,n2);let c2;for(c2=0;c2<Q;c2++){const J=C[c2]=j?H3(C[c2]):Y1(C[c2]);R(L[c2],J,E,null,k,H,G,W,j)}q>n2?v1(L,k,H,!0,!1,Q):M(C,E,V,k,H,G,W,j,Q)},U1=(L,C,E,V,k,H,G,W,j)=>{let q=0;const n2=C.length;let Q=L.length-1,c2=n2-1;for(;q<=Q&&q<=c2;){const J=L[q],r2=C[q]=j?H3(C[q]):Y1(C[q]);if(K0(J,r2))R(J,r2,E,null,k,H,G,W,j);else break;q++}for(;q<=Q&&q<=c2;){const J=L[Q],r2=C[c2]=j?H3(C[c2]):Y1(C[c2]);if(K0(J,r2))R(J,r2,E,null,k,H,G,W,j);else break;Q--,c2--}if(q>Q){if(q<=c2){const J=c2+1,r2=J<n2?C[J].el:V;for(;q<=c2;)R(null,C[q]=j?H3(C[q]):Y1(C[q]),E,r2,k,H,G,W,j),q++}}else if(q>c2)for(;q<=Q;)O2(L[q],k,H,!0),q++;else{const J=q,r2=q,v2=new Map;for(q=r2;q<=c2;q++){const z1=C[q]=j?H3(C[q]):Y1(C[q]);z1.key!=null&&v2.set(z1.key,q)}let C2,n1=0;const G2=c2-r2+1;let Q2=!1,i1=0;const R3=new Array(G2);for(q=0;q<G2;q++)R3[q]=0;for(q=J;q<=Q;q++){const z1=L[q];if(n1>=G2){O2(z1,k,H,!0);continue}let O1;if(z1.key!=null)O1=v2.get(z1.key);else for(C2=r2;C2<=c2;C2++)if(R3[C2-r2]===0&&K0(z1,C[C2])){O1=C2;break}O1===void 0?O2(z1,k,H,!0):(R3[O1-r2]=q+1,O1>=i1?i1=O1:Q2=!0,R(z1,C[O1],E,null,k,H,G,W,j),n1++)}const B4=Q2?GM(R3):t0;for(C2=B4.length-1,q=G2-1;q>=0;q--){const z1=r2+q,O1=C[z1],H4=z1+1<n2?C[z1+1].el:V;R3[q]===0?R(null,O1,E,H4,k,H,G,W,j):Q2&&(C2<0||q!==B4[C2]?D1(O1,E,H4,2):C2--)}}},D1=(L,C,E,V,k=null)=>{const{el:H,type:G,transition:W,children:j,shapeFlag:q}=L;if(q&6){D1(L.component.subTree,C,E,V);return}if(q&128){L.suspense.move(C,E,V);return}if(q&64){G.move(L,C,E,X);return}if(G===V1){s(H,C,E);for(let Q=0;Q<j.length;Q++)D1(j[Q],C,E,V);s(L.anchor,C,E);return}if(G===Wc){O(L,C,E);return}if(V!==2&&q&1&&W)if(V===0)W.beforeEnter(H),s(H,C,E),E1(()=>W.enter(H),k);else{const{leave:Q,delayLeave:c2,afterLeave:J}=W,r2=()=>s(H,C,E),v2=()=>{Q(H,()=>{r2(),J&&J()})};c2?c2(H,r2,v2):v2()}else s(H,C,E)},O2=(L,C,E,V=!1,k=!1)=>{const{type:H,props:G,ref:W,children:j,dynamicChildren:q,shapeFlag:n2,patchFlag:Q,dirs:c2,cacheIndex:J}=L;if(Q===-2&&(k=!1),W!=null&&Ct(W,null,E,L,!0),J!=null&&(C.renderCache[J]=void 0),n2&256){C.ctx.deactivate(L);return}const r2=n2&1&&c2,v2=!l0(L);let C2;if(v2&&(C2=G&&G.onVnodeBeforeUnmount)&&K1(C2,C,L),n2&6)G1(L.component,E,V);else{if(n2&128){L.suspense.unmount(E,V);return}r2&&z4(L,null,C,"beforeUnmount"),n2&64?L.type.remove(L,C,E,X,V):q&&!q.hasOnce&&(H!==V1||Q>0&&Q&64)?v1(q,C,E,!1,!0):(H===V1&&Q&384||!k&&n2&16)&&v1(j,C,E),V&&V2(L)}(v2&&(C2=G&&G.onVnodeUnmounted)||r2)&&E1(()=>{C2&&K1(C2,C,L),r2&&z4(L,null,C,"unmounted")},E)},V2=L=>{const{type:C,el:E,anchor:V,transition:k}=L;if(C===V1){I3(E,V);return}if(C===Wc){B(L);return}const H=()=>{n(E),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(L.shapeFlag&1&&k&&!k.persisted){const{leave:G,delayLeave:W}=k,j=()=>G(E,H);W?W(L.el,H,j):j()}else H()},I3=(L,C)=>{let E;for(;L!==C;)E=p(L),n(L),L=E;n(C)},G1=(L,C,E)=>{const{bum:V,scope:k,job:H,subTree:G,um:W,m:j,a:q}=L;On(j),On(q),V&&Oe(V),k.stop(),H&&(H.flags|=8,O2(G,L,C,E)),W&&E1(W,C),E1(()=>{L.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},v1=(L,C,E,V=!1,k=!1,H=0)=>{for(let G=H;G<L.length;G++)O2(L[G],C,E,V,k)},D=L=>{if(L.shapeFlag&6)return D(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const C=p(L.anchor||L.el),E=C&&C[hM];return E?p(E):C};let Y=!1;const K=(L,C,E)=>{L==null?C._vnode&&O2(C._vnode,null,null,!0):R(C._vnode||null,L,C,null,null,null,E),C._vnode=L,Y||(Y=!0,Tn(),Il(),Y=!1)},X={p:R,um:O2,m:D1,r:V2,mt:L1,mc:M,pc:m2,pbc:w,n:D,o:c};let z2,N2;return{render:K,hydrate:z2,createApp:OM(K,z2)}}function qc({type:c,props:e},t){return t==="svg"&&c==="foreignObject"||t==="mathml"&&c==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function M4({effect:c,job:e},t){t?(c.flags|=32,e.flags|=4):(c.flags&=-33,e.flags&=-5)}function $M(c,e){return(!c||c&&!c.pendingBranch)&&e&&!e.persisted}function Xl(c,e,t=!1){const s=c.children,n=e.children;if(a2(s)&&a2(n))for(let i=0;i<s.length;i++){const r=s[i];let o=n[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=n[i]=H3(n[i]),o.el=r.el),!t&&o.patchFlag!==-2&&Xl(r,o)),o.type===I8&&(o.el=r.el)}}function GM(c){const e=c.slice(),t=[0];let s,n,i,r,o;const a=c.length;for(s=0;s<a;s++){const u=c[s];if(u!==0){if(n=t[t.length-1],c[n]<u){e[s]=n,t.push(s);continue}for(i=0,r=t.length-1;i<r;)o=i+r>>1,c[t[o]]<u?i=o+1:r=o;u<c[t[i]]&&(i>0&&(e[s]=t[i-1]),t[i]=s)}}for(i=t.length,r=t[i-1];i-- >0;)t[i]=r,r=e[r];return t}function Jl(c){const e=c.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jl(e)}function On(c){if(c)for(let e=0;e<c.length;e++)c[e].flags|=8}const KM=Symbol.for("v-scx"),QM=()=>q1(KM);function h6(c,e,t){return Zl(c,e,t)}function Zl(c,e,t=T2){const{immediate:s,deep:n,flush:i,once:r}=t,o=t1({},t);let a;if(R8)if(i==="sync"){const p=QM();a=p.__watcherHandles||(p.__watcherHandles=[])}else if(!e||s)o.once=!0;else{const p=()=>{};return p.stop=e3,p.resume=e3,p.pause=e3,p}const u=h1;o.call=(p,z,A)=>r3(p,u,z,A);let h=!1;i==="post"?o.scheduler=p=>{E1(p,u&&u.suspense)}:i!=="sync"&&(h=!0,o.scheduler=(p,z)=>{z?p():S5(p)}),o.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const m=lM(c,e,o);return a&&a.push(m),m}function YM(c,e,t){const s=this.proxy,n=j2(c)?c.includes(".")?e9(s,c):()=>s[c]:c.bind(s,s);let i;d2(e)?i=e:(i=e.handler,t=e);const r=H6(this),o=Zl(n,i.bind(s),t);return r(),o}function e9(c,e){const t=e.split(".");return()=>{let s=c;for(let n=0;n<t.length&&s;n++)s=s[t[n]];return s}}const XM=(c,e)=>e==="modelValue"||e==="model-value"?c.modelModifiers:c[`${e}Modifiers`]||c[`${j1(e)}Modifiers`]||c[`${O4(e)}Modifiers`];function JM(c,e,...t){if(c.isUnmounted)return;const s=c.vnode.props||T2;let n=t;const i=e.startsWith("update:"),r=i&&XM(s,e.slice(7));r&&(r.trim&&(n=t.map(h=>j2(h)?h.trim():h)),r.number&&(n=t.map(pt)));let o,a=s[o=Oc(e)]||s[o=Oc(j1(e))];!a&&i&&(a=s[o=Oc(O4(e))]),a&&r3(a,c,6,n);const u=s[o+"Once"];if(u){if(!c.emitted)c.emitted={};else if(c.emitted[o])return;c.emitted[o]=!0,r3(u,c,6,n)}}function c9(c,e,t=!1){const s=e.emitsCache,n=s.get(c);if(n!==void 0)return n;const i=c.emits;let r={},o=!1;if(!d2(c)){const a=u=>{const h=c9(u,e,!0);h&&(o=!0,t1(r,h))};!t&&e.mixins.length&&e.mixins.forEach(a),c.extends&&a(c.extends),c.mixins&&c.mixins.forEach(a)}return!i&&!o?(D2(c)&&s.set(c,null),null):(a2(i)?i.forEach(a=>r[a]=null):t1(r,i),D2(c)&&s.set(c,r),r)}function S8(c,e){return!c||!_8(e)?!1:(e=e.slice(2).replace(/Once$/,""),w2(c,e[0].toLowerCase()+e.slice(1))||w2(c,O4(e))||w2(c,e))}function jc(c){const{type:e,vnode:t,proxy:s,withProxy:n,propsOptions:[i],slots:r,attrs:o,emit:a,render:u,renderCache:h,props:m,data:p,setupState:z,ctx:A,inheritAttrs:R}=c,P=Ze(c);let T,S;try{if(t.shapeFlag&4){const B=n||s,s2=B;T=Y1(u.call(s2,B,h,m,z,p,A)),S=o}else{const B=e;T=Y1(B.length>1?B(m,{attrs:o,slots:r,emit:a}):B(m,null)),S=e.props?o:ZM(o)}}catch(B){d6.length=0,A8(B,c,1),T=_1(c4)}let O=T;if(S&&R!==!1){const B=Object.keys(S),{shapeFlag:s2}=O;B.length&&s2&7&&(i&&B.some(g5)&&(S=eC(S,i)),O=m0(O,S,!1,!0))}return t.dirs&&(O=m0(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(t.dirs):t.dirs),t.transition&&I5(O,t.transition),T=O,Ze(P),T}const ZM=c=>{let e;for(const t in c)(t==="class"||t==="style"||_8(t))&&((e||(e={}))[t]=c[t]);return e},eC=(c,e)=>{const t={};for(const s in c)(!g5(s)||!(s.slice(9)in e))&&(t[s]=c[s]);return t};function cC(c,e,t){const{props:s,children:n,component:i}=c,{props:r,children:o,patchFlag:a}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&a>=0){if(a&1024)return!0;if(a&16)return s?Vn(s,r,u):!!r;if(a&8){const h=e.dynamicProps;for(let m=0;m<h.length;m++){const p=h[m];if(r[p]!==s[p]&&!S8(u,p))return!0}}}else return(n||o)&&(!o||!o.$stable)?!0:s===r?!1:s?r?Vn(s,r,u):!0:!!r;return!1}function Vn(c,e,t){const s=Object.keys(e);if(s.length!==Object.keys(c).length)return!0;for(let n=0;n<s.length;n++){const i=s[n];if(e[i]!==c[i]&&!S8(t,i))return!0}return!1}function tC({vnode:c,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===c&&(s.el=c.el),s===c)(c=e.vnode).el=t,e=e.parent;else break}}const t9=c=>c.__isSuspense;function sC(c,e){e&&e.pendingBranch?a2(c)?e.effects.push(...c):e.effects.push(c):fM(c)}const V1=Symbol.for("v-fgt"),I8=Symbol.for("v-txt"),c4=Symbol.for("v-cmt"),Wc=Symbol.for("v-stc"),d6=[];let T1=null;function c8(c=!1){d6.push(T1=c?null:[])}function nC(){d6.pop(),T1=d6[d6.length-1]||null}let N6=1;function Fn(c){N6+=c,c<0&&T1&&(T1.hasOnce=!0)}function s9(c){return c.dynamicChildren=N6>0?T1||t0:null,nC(),N6>0&&T1&&T1.push(c),c}function iC(c,e,t,s,n,i){return s9(i9(c,e,t,s,n,i,!0))}function xt(c,e,t,s,n){return s9(_1(c,e,t,s,n,!0))}function t8(c){return c?c.__v_isVNode===!0:!1}function K0(c,e){return c.type===e.type&&c.key===e.key}const n9=({key:c})=>c??null,Fe=({ref:c,ref_key:e,ref_for:t})=>(typeof c=="number"&&(c=""+c),c!=null?j2(c)||d1(c)||d2(c)?{i:e1,r:c,k:e,f:!!t}:c:null);function i9(c,e=null,t=null,s=0,n=null,i=c===V1?0:1,r=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:c,props:e,key:e&&n9(e),ref:e&&Fe(e),scopeId:Pl,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:e1};return o?(D5(a,t),i&128&&c.normalize(a)):t&&(a.shapeFlag|=j2(t)?8:16),N6>0&&!r&&T1&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&T1.push(a),a}const _1=rC;function rC(c,e=null,t=null,s=0,n=null,i=!1){if((!c||c===EM)&&(c=c4),t8(c)){const o=m0(c,e,!0);return t&&D5(o,t),N6>0&&!i&&T1&&(o.shapeFlag&6?T1[T1.indexOf(c)]=o:T1.push(o)),o.patchFlag=-2,o}if(zC(c)&&(c=c.__vccOpts),e){e=lC(e);let{class:o,style:a}=e;o&&!j2(o)&&(e.class=C5(o)),D2(a)&&(E5(a)&&!a2(a)&&(a=t1({},a)),e.style=M5(a))}const r=j2(c)?1:t9(c)?128:dM(c)?64:D2(c)?4:d2(c)?2:0;return i9(c,e,t,s,n,r,i,!0)}function lC(c){return c?E5(c)||jl(c)?t1({},c):c:null}function m0(c,e,t=!1,s=!1){const{props:n,ref:i,patchFlag:r,children:o,transition:a}=c,u=e?aC(n||{},e):n,h={__v_isVNode:!0,__v_skip:!0,type:c.type,props:u,key:u&&n9(u),ref:e&&e.ref?t&&i?a2(i)?i.concat(Fe(e)):[i,Fe(e)]:Fe(e):i,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:o,target:c.target,targetStart:c.targetStart,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:e&&c.type!==V1?r===-1?16:r|16:r,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:a,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&m0(c.ssContent),ssFallback:c.ssFallback&&m0(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce};return a&&s&&I5(h,a.clone(h)),h}function oC(c=" ",e=0){return _1(I8,null,c,e)}function A02(c="",e=!1){return e?(c8(),xt(c4,null,c)):_1(c4,null,c)}function Y1(c){return c==null||typeof c=="boolean"?_1(c4):a2(c)?_1(V1,null,c.slice()):typeof c=="object"?H3(c):_1(I8,null,String(c))}function H3(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:m0(c)}function D5(c,e){let t=0;const{shapeFlag:s}=c;if(e==null)e=null;else if(a2(e))t=16;else if(typeof e=="object")if(s&65){const n=e.default;n&&(n._c&&(n._d=!1),D5(c,n()),n._c&&(n._d=!0));return}else{t=32;const n=e._;!n&&!jl(e)?e._ctx=e1:n===3&&e1&&(e1.slots._===1?e._=1:(e._=2,c.patchFlag|=1024))}else d2(e)?(e={default:e,_ctx:e1},t=32):(e=String(e),s&64?(t=16,e=[oC(e)]):t=8);c.children=e,c.shapeFlag|=t}function aC(...c){const e={};for(let t=0;t<c.length;t++){const s=c[t];for(const n in s)if(n==="class")e.class!==s.class&&(e.class=C5([e.class,s.class]));else if(n==="style")e.style=M5([e.style,s.style]);else if(_8(n)){const i=e[n],r=s[n];r&&i!==r&&!(a2(i)&&i.includes(r))&&(e[n]=i?[].concat(i,r):r)}else n!==""&&(e[n]=s[n])}return e}function K1(c,e,t,s=null){r3(c,e,7,[t,s])}const fC=Bl();let uC=0;function hC(c,e,t){const s=c.type,n=(e?e.appContext:c.appContext)||fC,i={uid:uC++,vnode:c,type:s,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tz(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$l(s,n),emitsOptions:c9(s,n),emit:null,emitted:null,propsDefaults:T2,inheritAttrs:s.inheritAttrs,ctx:T2,data:T2,props:T2,attrs:T2,slots:T2,refs:T2,setupState:T2,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=JM.bind(null,i),c.ce&&c.ce(i),i}let h1=null,s8,bt;{const c=ll(),e=(t,s)=>{let n;return(n=c[t])||(n=c[t]=[]),n.push(s),i=>{n.length>1?n.forEach(r=>r(i)):n[0](i)}};s8=e("__VUE_INSTANCE_SETTERS__",t=>h1=t),bt=e("__VUE_SSR_SETTERS__",t=>R8=t)}const H6=c=>{const e=h1;return s8(c),c.scope.on(),()=>{c.scope.off(),s8(e)}},Un=()=>{h1&&h1.scope.off(),s8(null)};function r9(c){return c.vnode.shapeFlag&4}let R8=!1;function dC(c,e=!1,t=!1){e&&bt(e);const{props:s,children:n}=c.vnode,i=r9(c);VM(c,s,i,e),HM(c,n,t);const r=i?mC(c,e):void 0;return e&&bt(!1),r}function mC(c,e){const t=c.type;c.accessCache=Object.create(null),c.proxy=new Proxy(c.ctx,TM);const{setup:s}=t;if(s){const n=c.setupContext=s.length>1?gC(c):null,i=H6(c);a4();const r=B6(s,c,0,[c.props,n]);if(f4(),i(),sl(r)){if(l0(c)||kl(c),r.then(Un,Un),e)return r.then(o=>{Bn(c,o,e)}).catch(o=>{A8(o,c,0)});c.asyncDep=r}else Bn(c,r,e)}else l9(c,e)}function Bn(c,e,t){d2(e)?c.type.__ssrInlineRender?c.ssrRender=e:c.render=e:D2(e)&&(c.setupState=El(e)),l9(c,t)}let Hn;function l9(c,e,t){const s=c.type;if(!c.render){if(!e&&Hn&&!s.render){const n=s.template||P5(c).template;if(n){const{isCustomElement:i,compilerOptions:r}=c.appContext.config,{delimiters:o,compilerOptions:a}=s,u=t1(t1({isCustomElement:i,delimiters:o},r),a);s.render=Hn(n,u)}}c.render=s.render||e3}{const n=H6(c);a4();try{SM(c)}finally{f4(),n()}}}const pC={get(c,e){return m1(c,"get",""),c[e]}};function gC(c){const e=t=>{c.exposed=t||{}};return{attrs:new Proxy(c.attrs,pC),slots:c.slots,emit:c.emit,expose:e}}function P8(c){return c.exposed?c.exposeProxy||(c.exposeProxy=new Proxy(El(Zz(c.exposed)),{get(e,t){if(t in e)return e[t];if(t in u6)return u6[t](c)},has(e,t){return t in e||t in u6}})):c.proxy}function LC(c,e=!0){return d2(c)?c.displayName||c.name:c.name||e&&c.__name}function zC(c){return d2(c)&&"__vccOpts"in c}const J2=(c,e)=>iM(c,e,R8);function O5(c,e,t){const s=arguments.length;return s===2?D2(e)&&!a2(e)?t8(e)?_1(c,null,[e]):_1(c,e):_1(c,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&t8(t)&&(t=[t]),_1(c,e,t))}const MC="3.5.6";/**
* @vue/runtime-dom v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nt;const qn=typeof window<"u"&&window.trustedTypes;if(qn)try{Nt=qn.createPolicy("vue",{createHTML:c=>c})}catch{}const o9=Nt?c=>Nt.createHTML(c):c=>c,CC="http://www.w3.org/2000/svg",yC="http://www.w3.org/1998/Math/MathML",m3=typeof document<"u"?document:null,jn=m3&&m3.createElement("template"),_C={insert:(c,e,t)=>{e.insertBefore(c,t||null)},remove:c=>{const e=c.parentNode;e&&e.removeChild(c)},createElement:(c,e,t,s)=>{const n=e==="svg"?m3.createElementNS(CC,c):e==="mathml"?m3.createElementNS(yC,c):t?m3.createElement(c,{is:t}):m3.createElement(c);return c==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:c=>m3.createTextNode(c),createComment:c=>m3.createComment(c),setText:(c,e)=>{c.nodeValue=e},setElementText:(c,e)=>{c.textContent=e},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>m3.querySelector(c),setScopeId(c,e){c.setAttribute(e,"")},insertStaticContent(c,e,t,s,n,i){const r=t?t.previousSibling:e.lastChild;if(n&&(n===i||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),t),!(n===i||!(n=n.nextSibling)););else{jn.innerHTML=o9(s==="svg"?`<svg>${c}</svg>`:s==="mathml"?`<math>${c}</math>`:c);const o=jn.content;if(s==="svg"||s==="mathml"){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}e.insertBefore(o,t)}return[r?r.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},vC=Symbol("_vtc");function wC(c,e,t){const s=c[vC];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?c.removeAttribute("class"):t?c.setAttribute("class",e):c.className=e}const n8=Symbol("_vod"),a9=Symbol("_vsh"),T02={beforeMount(c,{value:e},{transition:t}){c[n8]=c.style.display==="none"?"":c.style.display,t&&e?t.beforeEnter(c):Q0(c,e)},mounted(c,{value:e},{transition:t}){t&&e&&t.enter(c)},updated(c,{value:e,oldValue:t},{transition:s}){!e!=!t&&(s?e?(s.beforeEnter(c),Q0(c,!0),s.enter(c)):s.leave(c,()=>{Q0(c,!1)}):Q0(c,e))},beforeUnmount(c,{value:e}){Q0(c,e)}};function Q0(c,e){c.style.display=e?c[n8]:"none",c[a9]=!e}const xC=Symbol(""),bC=/(^|;)\s*display\s*:/;function NC(c,e,t){const s=c.style,n=j2(t);let i=!1;if(t&&!n){if(e)if(j2(e))for(const r of e.split(";")){const o=r.slice(0,r.indexOf(":")).trim();t[o]==null&&Ue(s,o,"")}else for(const r in e)t[r]==null&&Ue(s,r,"");for(const r in t)r==="display"&&(i=!0),Ue(s,r,t[r])}else if(n){if(e!==t){const r=s[xC];r&&(t+=";"+r),s.cssText=t,i=bC.test(t)}}else e&&c.removeAttribute("style");n8 in c&&(c[n8]=i?s.display:"",c[a9]&&(s.display="none"))}const Wn=/\s*!important$/;function Ue(c,e,t){if(a2(t))t.forEach(s=>Ue(c,e,s));else if(t==null&&(t=""),e.startsWith("--"))c.setProperty(e,t);else{const s=EC(c,e);Wn.test(t)?c.setProperty(O4(s),t.replace(Wn,""),"important"):c[s]=t}}const $n=["Webkit","Moz","ms"],$c={};function EC(c,e){const t=$c[e];if(t)return t;let s=j1(e);if(s!=="filter"&&s in c)return $c[e]=s;s=x8(s);for(let n=0;n<$n.length;n++){const i=$n[n]+s;if(i in c)return $c[e]=i}return e}const Gn="http://www.w3.org/1999/xlink";function Kn(c,e,t,s,n,i=Ez(e)){s&&e.startsWith("xlink:")?t==null?c.removeAttributeNS(Gn,e.slice(6,e.length)):c.setAttributeNS(Gn,e,t):t==null||i&&!ol(t)?c.removeAttribute(e):c.setAttribute(e,i?"":o4(t)?String(t):t)}function AC(c,e,t,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(c[e]=e==="innerHTML"?o9(t):t);return}const n=c.tagName;if(e==="value"&&n!=="PROGRESS"&&!n.includes("-")){const r=n==="OPTION"?c.getAttribute("value")||"":c.value,o=t==null?c.type==="checkbox"?"on":"":String(t);(r!==o||!("_value"in c))&&(c.value=o),t==null&&c.removeAttribute(e),c._value=t;return}let i=!1;if(t===""||t==null){const r=typeof c[e];r==="boolean"?t=ol(t):t==null&&r==="string"?(t="",i=!0):r==="number"&&(t=0,i=!0)}try{c[e]=t}catch{}i&&c.removeAttribute(e)}function Q4(c,e,t,s){c.addEventListener(e,t,s)}function TC(c,e,t,s){c.removeEventListener(e,t,s)}const Qn=Symbol("_vei");function SC(c,e,t,s,n=null){const i=c[Qn]||(c[Qn]={}),r=i[e];if(s&&r)r.value=s;else{const[o,a]=IC(e);if(s){const u=i[e]=kC(s,n);Q4(c,o,u,a)}else r&&(TC(c,o,r,a),i[e]=void 0)}}const Yn=/(?:Once|Passive|Capture)$/;function IC(c){let e;if(Yn.test(c)){e={};let s;for(;s=c.match(Yn);)c=c.slice(0,c.length-s[0].length),e[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):O4(c.slice(2)),e]}let Gc=0;const RC=Promise.resolve(),PC=()=>Gc||(RC.then(()=>Gc=0),Gc=Date.now());function kC(c,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;r3(DC(s,t.value),e,5,[s])};return t.value=c,t.attached=PC(),t}function DC(c,e){if(a2(e)){const t=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{t.call(c),c._stopped=!0},e.map(s=>n=>!n._stopped&&s&&s(n))}else return e}const Xn=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,OC=(c,e,t,s,n,i)=>{const r=n==="svg";e==="class"?wC(c,s,r):e==="style"?NC(c,t,s):_8(e)?g5(e)||SC(c,e,t,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):VC(c,e,s,r))?(AC(c,e,s),!c.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kn(c,e,s,r,i,e!=="value")):(e==="true-value"?c._trueValue=s:e==="false-value"&&(c._falseValue=s),Kn(c,e,s,r))};function VC(c,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in c&&Xn(e)&&d2(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&c.tagName==="INPUT"||e==="type"&&c.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=c.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Xn(e)&&j2(t)?!1:!!(e in c||c._isVueCE&&(/[A-Z]/.test(e)||!j2(t)))}const Jn=c=>{const e=c.props["onUpdate:modelValue"]||!1;return a2(e)?t=>Oe(e,t):e};function FC(c){c.target.composing=!0}function Zn(c){const e=c.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kc=Symbol("_assign"),S02={created(c,{modifiers:{lazy:e,trim:t,number:s}},n){c[Kc]=Jn(n);const i=s||n.props&&n.props.type==="number";Q4(c,e?"change":"input",r=>{if(r.target.composing)return;let o=c.value;t&&(o=o.trim()),i&&(o=pt(o)),c[Kc](o)}),t&&Q4(c,"change",()=>{c.value=c.value.trim()}),e||(Q4(c,"compositionstart",FC),Q4(c,"compositionend",Zn),Q4(c,"change",Zn))},mounted(c,{value:e}){c.value=e??""},beforeUpdate(c,{value:e,oldValue:t,modifiers:{lazy:s,trim:n,number:i}},r){if(c[Kc]=Jn(r),c.composing)return;const o=(i||c.type==="number")&&!/^0\d/.test(c.value)?pt(c.value):c.value,a=e??"";o!==a&&(document.activeElement===c&&c.type!=="range"&&(s&&e===t||n&&c.value.trim()===a)||(c.value=a))}},UC=["ctrl","shift","alt","meta"],BC={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,e)=>UC.some(t=>c[`${t}Key`]&&!e.includes(t))},I02=(c,e)=>{const t=c._withMods||(c._withMods={}),s=e.join(".");return t[s]||(t[s]=(n,...i)=>{for(let r=0;r<e.length;r++){const o=BC[e[r]];if(o&&o(n,e))return}return c(n,...i)})},HC=t1({patchProp:OC},_C);let ei;function qC(){return ei||(ei=jM(HC))}const jC=(...c)=>{const e=qC().createApp(...c),{mount:t}=e;return e.mount=s=>{const n=$C(s);if(!n)return;const i=e._component;!d2(i)&&!i.render&&!i.template&&(i.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const r=t(n,!1,WC(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},e};function WC(c){if(c instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&c instanceof MathMLElement)return"mathml"}function $C(c){return j2(c)?document.querySelector(c):c}const GC=(c,e)=>{const t=c.__vccOpts||c;for(const[s,n]of e)t[s]=n;return t},KC={};function QC(c,e){const t=NM("router-view");return c8(),iC("div",null,[_1(t)])}const YC=GC(KC,[["render",QC],["__scopeId","data-v-0547ac39"]]),XC="modulepreload",JC=function(c){return"/wisher/"+c},ci={},Te=function(e,t,s){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));n=Promise.allSettled(t.map(a=>{if(a=JC(a),a in ci)return;ci[a]=!0;const u=a.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${h}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":XC,u||(m.as="script"),m.crossOrigin="",m.href=a,o&&m.setAttribute("nonce",o),document.head.appendChild(m),u)return new Promise((p,z)=>{m.addEventListener("load",p),m.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return n.then(r=>{for(const o of r||[])o.status==="rejected"&&i(o.reason);return e().catch(i)})},Z0={register:"/wisher/register",auth:"/wisher/auth",user:"/wisher/user",main:"/wisher"};var ti={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f9=function(c){const e=[];let t=0;for(let s=0;s<c.length;s++){let n=c.charCodeAt(s);n<128?e[t++]=n:n<2048?(e[t++]=n>>6|192,e[t++]=n&63|128):(n&64512)===55296&&s+1<c.length&&(c.charCodeAt(s+1)&64512)===56320?(n=65536+((n&1023)<<10)+(c.charCodeAt(++s)&1023),e[t++]=n>>18|240,e[t++]=n>>12&63|128,e[t++]=n>>6&63|128,e[t++]=n&63|128):(e[t++]=n>>12|224,e[t++]=n>>6&63|128,e[t++]=n&63|128)}return e},ZC=function(c){const e=[];let t=0,s=0;for(;t<c.length;){const n=c[t++];if(n<128)e[s++]=String.fromCharCode(n);else if(n>191&&n<224){const i=c[t++];e[s++]=String.fromCharCode((n&31)<<6|i&63)}else if(n>239&&n<365){const i=c[t++],r=c[t++],o=c[t++],a=((n&7)<<18|(i&63)<<12|(r&63)<<6|o&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const i=c[t++],r=c[t++];e[s++]=String.fromCharCode((n&15)<<12|(i&63)<<6|r&63)}}return e.join("")},u9={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(c,e){if(!Array.isArray(c))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let n=0;n<c.length;n+=3){const i=c[n],r=n+1<c.length,o=r?c[n+1]:0,a=n+2<c.length,u=a?c[n+2]:0,h=i>>2,m=(i&3)<<4|o>>4;let p=(o&15)<<2|u>>6,z=u&63;a||(z=64,r||(p=64)),s.push(t[h],t[m],t[p],t[z])}return s.join("")},encodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(c):this.encodeByteArray(f9(c),e)},decodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(c):ZC(this.decodeStringToByteArray(c,e))},decodeStringToByteArray(c,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let n=0;n<c.length;){const i=t[c.charAt(n++)],o=n<c.length?t[c.charAt(n)]:0;++n;const u=n<c.length?t[c.charAt(n)]:64;++n;const m=n<c.length?t[c.charAt(n)]:64;if(++n,i==null||o==null||u==null||m==null)throw new ey;const p=i<<2|o>>4;if(s.push(p),u!==64){const z=o<<4&240|u>>2;if(s.push(z),m!==64){const A=u<<6&192|m;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let c=0;c<this.ENCODED_VALS.length;c++)this.byteToCharMap_[c]=this.ENCODED_VALS.charAt(c),this.charToByteMap_[this.byteToCharMap_[c]]=c,this.byteToCharMapWebSafe_[c]=this.ENCODED_VALS_WEBSAFE.charAt(c),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[c]]=c,c>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(c)]=c,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(c)]=c)}}};class ey extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cy=function(c){const e=f9(c);return u9.encodeByteArray(e,!0)},i8=function(c){return cy(c).replace(/\./g,"")},h9=function(c){try{return u9.decodeString(c,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=()=>ty().__FIREBASE_DEFAULTS__,ny=()=>{if(typeof process>"u"||typeof ti>"u")return;const c=ti.__FIREBASE_DEFAULTS__;if(c)return JSON.parse(c)},iy=()=>{if(typeof document>"u")return;let c;try{c=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=c&&h9(c[1]);return e&&JSON.parse(e)},k8=()=>{try{return sy()||ny()||iy()}catch(c){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${c}`);return}},d9=c=>{var e,t;return(t=(e=k8())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[c]},ry=c=>{const e=d9(c);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},m9=()=>{var c;return(c=k8())===null||c===void 0?void 0:c.config},p9=c=>{var e;return(e=k8())===null||e===void 0?void 0:e[`_${c}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(c,e){if(c.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",n=c.iat||0,i=c.sub||c.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},c);return[i8(JSON.stringify(t)),i8(JSON.stringify(r)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ay(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p1())}function fy(){var c;const e=(c=k8())===null||c===void 0?void 0:c.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hy(){const c=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof c=="object"&&c.id!==void 0}function dy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function my(){const c=p1();return c.indexOf("MSIE ")>=0||c.indexOf("Trident/")>=0}function py(){return!fy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gy(){try{return typeof indexedDB=="object"}catch{return!1}}function Ly(){return new Promise((c,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(s);n.onsuccess=()=>{n.result.close(),t||self.indexedDB.deleteDatabase(s),c(!0)},n.onupgradeneeded=()=>{t=!1},n.onerror=()=>{var i;e(((i=n.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="FirebaseError";class T3 extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=zy,Object.setPrototypeOf(this,T3.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,q6.prototype.create)}}class q6{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],r=i?My(i,s):"Error",o=`${this.serviceName}: ${r} (${n}).`;return new T3(n,o,s)}}function My(c,e){return c.replace(Cy,(t,s)=>{const n=e[s];return n!=null?String(n):`<${s}?>`})}const Cy=/\{\$([^}]+)}/g;function yy(c){for(const e in c)if(Object.prototype.hasOwnProperty.call(c,e))return!1;return!0}function E6(c,e){if(c===e)return!0;const t=Object.keys(c),s=Object.keys(e);for(const n of t){if(!s.includes(n))return!1;const i=c[n],r=e[n];if(si(i)&&si(r)){if(!E6(i,r))return!1}else if(i!==r)return!1}for(const n of s)if(!t.includes(n))return!1;return!0}function si(c){return c!==null&&typeof c=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j6(c){const e=[];for(const[t,s]of Object.entries(c))Array.isArray(s)?s.forEach(n=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function e6(c){const e={};return c.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[n,i]=s.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}}),e}function c6(c){const e=c.indexOf("?");if(!e)return"";const t=c.indexOf("#",e);return c.substring(e,t>0?t:void 0)}function _y(c,e){const t=new vy(c,e);return t.subscribe.bind(t)}class vy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let n;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");wy(e,["next","error","complete"])?n=e:n={next:e,error:t,complete:s},n.next===void 0&&(n.next=Qc),n.error===void 0&&(n.error=Qc),n.complete===void 0&&(n.complete=Qc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wy(c,e){if(typeof c!="object"||c===null)return!1;for(const t of e)if(t in c&&typeof c[t]=="function")return!0;return!1}function Qc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(c){return c&&c._delegate?c._delegate:c}class A4{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y4="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ly;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&s.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ny(e))try{this.getOrInitializeService({instanceIdentifier:y4})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:n});s.resolve(i)}catch{}}}}clearInstance(e=y4){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=y4){return this.instances.has(e)}getOptions(e=y4){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);s===o&&r.resolve(n)}return n}onInit(e,t){var s;const n=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(n))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(n,i);const r=this.instances.get(n);return r&&e(r,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const n of s)try{n(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:by(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=y4){return this.component?this.component.multipleInstances?e:y4:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function by(c){return c===y4?void 0:c}function Ny(c){return c.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var g2;(function(c){c[c.DEBUG=0]="DEBUG",c[c.VERBOSE=1]="VERBOSE",c[c.INFO=2]="INFO",c[c.WARN=3]="WARN",c[c.ERROR=4]="ERROR",c[c.SILENT=5]="SILENT"})(g2||(g2={}));const Ay={debug:g2.DEBUG,verbose:g2.VERBOSE,info:g2.INFO,warn:g2.WARN,error:g2.ERROR,silent:g2.SILENT},Ty=g2.INFO,Sy={[g2.DEBUG]:"log",[g2.VERBOSE]:"log",[g2.INFO]:"info",[g2.WARN]:"warn",[g2.ERROR]:"error"},Iy=(c,e,...t)=>{if(e<c.logLevel)return;const s=new Date().toISOString(),n=Sy[e];if(n)console[n](`[${s}]  ${c.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class V5{constructor(e){this.name=e,this._logLevel=Ty,this._logHandler=Iy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in g2))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ay[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,g2.DEBUG,...e),this._logHandler(this,g2.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,g2.VERBOSE,...e),this._logHandler(this,g2.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,g2.INFO,...e),this._logHandler(this,g2.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,g2.WARN,...e),this._logHandler(this,g2.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,g2.ERROR,...e),this._logHandler(this,g2.ERROR,...e)}}const Ry=(c,e)=>e.some(t=>c instanceof t);let ni,ii;function Py(){return ni||(ni=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ky(){return ii||(ii=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const g9=new WeakMap,Et=new WeakMap,L9=new WeakMap,Yc=new WeakMap,F5=new WeakMap;function Dy(c){const e=new Promise((t,s)=>{const n=()=>{c.removeEventListener("success",i),c.removeEventListener("error",r)},i=()=>{t(Y3(c.result)),n()},r=()=>{s(c.error),n()};c.addEventListener("success",i),c.addEventListener("error",r)});return e.then(t=>{t instanceof IDBCursor&&g9.set(t,c)}).catch(()=>{}),F5.set(e,c),e}function Oy(c){if(Et.has(c))return;const e=new Promise((t,s)=>{const n=()=>{c.removeEventListener("complete",i),c.removeEventListener("error",r),c.removeEventListener("abort",r)},i=()=>{t(),n()},r=()=>{s(c.error||new DOMException("AbortError","AbortError")),n()};c.addEventListener("complete",i),c.addEventListener("error",r),c.addEventListener("abort",r)});Et.set(c,e)}let At={get(c,e,t){if(c instanceof IDBTransaction){if(e==="done")return Et.get(c);if(e==="objectStoreNames")return c.objectStoreNames||L9.get(c);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Y3(c[e])},set(c,e,t){return c[e]=t,!0},has(c,e){return c instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in c}};function Vy(c){At=c(At)}function Fy(c){return c===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=c.call(Xc(this),e,...t);return L9.set(s,e.sort?e.sort():[e]),Y3(s)}:ky().includes(c)?function(...e){return c.apply(Xc(this),e),Y3(g9.get(this))}:function(...e){return Y3(c.apply(Xc(this),e))}}function Uy(c){return typeof c=="function"?Fy(c):(c instanceof IDBTransaction&&Oy(c),Ry(c,Py())?new Proxy(c,At):c)}function Y3(c){if(c instanceof IDBRequest)return Dy(c);if(Yc.has(c))return Yc.get(c);const e=Uy(c);return e!==c&&(Yc.set(c,e),F5.set(e,c)),e}const Xc=c=>F5.get(c);function By(c,e,{blocked:t,upgrade:s,blocking:n,terminated:i}={}){const r=indexedDB.open(c,e),o=Y3(r);return s&&r.addEventListener("upgradeneeded",a=>{s(Y3(r.result),a.oldVersion,a.newVersion,Y3(r.transaction),a)}),t&&r.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),o.then(a=>{i&&a.addEventListener("close",()=>i()),n&&a.addEventListener("versionchange",u=>n(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const Hy=["get","getKey","getAll","getAllKeys","count"],qy=["put","add","delete","clear"],Jc=new Map;function ri(c,e){if(!(c instanceof IDBDatabase&&!(e in c)&&typeof e=="string"))return;if(Jc.get(e))return Jc.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,n=qy.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(n||Hy.includes(t)))return;const i=async function(r,...o){const a=this.transaction(r,n?"readwrite":"readonly");let u=a.store;return s&&(u=u.index(o.shift())),(await Promise.all([u[t](...o),n&&a.done]))[0]};return Jc.set(e,i),i}Vy(c=>({...c,get:(e,t,s)=>ri(e,t)||c.get(e,t,s),has:(e,t)=>!!ri(e,t)||c.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Wy(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Wy(c){const e=c.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tt="@firebase/app",li="0.10.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _3=new V5("@firebase/app"),$y="@firebase/app-compat",Gy="@firebase/analytics-compat",Ky="@firebase/analytics",Qy="@firebase/app-check-compat",Yy="@firebase/app-check",Xy="@firebase/auth",Jy="@firebase/auth-compat",Zy="@firebase/database",e_="@firebase/database-compat",c_="@firebase/functions",t_="@firebase/functions-compat",s_="@firebase/installations",n_="@firebase/installations-compat",i_="@firebase/messaging",r_="@firebase/messaging-compat",l_="@firebase/performance",o_="@firebase/performance-compat",a_="@firebase/remote-config",f_="@firebase/remote-config-compat",u_="@firebase/storage",h_="@firebase/storage-compat",d_="@firebase/firestore",m_="@firebase/vertexai-preview",p_="@firebase/firestore-compat",g_="firebase",L_="10.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="[DEFAULT]",z_={[Tt]:"fire-core",[$y]:"fire-core-compat",[Ky]:"fire-analytics",[Gy]:"fire-analytics-compat",[Yy]:"fire-app-check",[Qy]:"fire-app-check-compat",[Xy]:"fire-auth",[Jy]:"fire-auth-compat",[Zy]:"fire-rtdb",[e_]:"fire-rtdb-compat",[c_]:"fire-fn",[t_]:"fire-fn-compat",[s_]:"fire-iid",[n_]:"fire-iid-compat",[i_]:"fire-fcm",[r_]:"fire-fcm-compat",[l_]:"fire-perf",[o_]:"fire-perf-compat",[a_]:"fire-rc",[f_]:"fire-rc-compat",[u_]:"fire-gcs",[h_]:"fire-gcs-compat",[d_]:"fire-fst",[p_]:"fire-fst-compat",[m_]:"fire-vertex","fire-js":"fire-js",[g_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r8=new Map,M_=new Map,It=new Map;function oi(c,e){try{c.container.addComponent(e)}catch(t){_3.debug(`Component ${e.name} failed to register with FirebaseApp ${c.name}`,t)}}function p0(c){const e=c.name;if(It.has(e))return _3.debug(`There were multiple attempts to register component ${e}.`),!1;It.set(e,c);for(const t of r8.values())oi(t,c);for(const t of M_.values())oi(t,c);return!0}function U5(c,e){const t=c.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),c.container.getProvider(e)}function X1(c){return c.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},X3=new q6("app","Firebase",C_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new A4("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw X3.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=L_;function z9(c,e={}){let t=c;typeof e!="object"&&(e={name:e});const s=Object.assign({name:St,automaticDataCollectionEnabled:!1},e),n=s.name;if(typeof n!="string"||!n)throw X3.create("bad-app-name",{appName:String(n)});if(t||(t=m9()),!t)throw X3.create("no-options");const i=r8.get(n);if(i){if(E6(t,i.options)&&E6(s,i.config))return i;throw X3.create("duplicate-app",{appName:n})}const r=new Ey(n);for(const a of It.values())r.addComponent(a);const o=new y_(t,s,r);return r8.set(n,o),o}function M9(c=St){const e=r8.get(c);if(!e&&c===St&&m9())return z9();if(!e)throw X3.create("no-app",{appName:c});return e}function J3(c,e,t){var s;let n=(s=z_[c])!==null&&s!==void 0?s:c;t&&(n+=`-${t}`);const i=n.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${n}" with version "${e}":`];i&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_3.warn(o.join(" "));return}p0(new A4(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="firebase-heartbeat-database",v_=1,A6="firebase-heartbeat-store";let Zc=null;function C9(){return Zc||(Zc=By(__,v_,{upgrade:(c,e)=>{switch(e){case 0:try{c.createObjectStore(A6)}catch(t){console.warn(t)}}}}).catch(c=>{throw X3.create("idb-open",{originalErrorMessage:c.message})})),Zc}async function w_(c){try{const t=(await C9()).transaction(A6),s=await t.objectStore(A6).get(y9(c));return await t.done,s}catch(e){if(e instanceof T3)_3.warn(e.message);else{const t=X3.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_3.warn(t.message)}}}async function ai(c,e){try{const s=(await C9()).transaction(A6,"readwrite");await s.objectStore(A6).put(e,y9(c)),await s.done}catch(t){if(t instanceof T3)_3.warn(t.message);else{const s=X3.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_3.warn(s.message)}}}function y9(c){return`${c.name}!${c.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=1024,b_=30*24*60*60*1e3;class N_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new A_(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fi();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=b_}),this._storage.overwrite(this._heartbeatsCache))}catch(s){_3.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fi(),{heartbeatsToSend:s,unsentEntries:n}=E_(this._heartbeatsCache.heartbeats),i=i8(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return _3.warn(t),""}}}function fi(){return new Date().toISOString().substring(0,10)}function E_(c,e=x_){const t=[];let s=c.slice();for(const n of c){const i=t.find(r=>r.agent===n.agent);if(i){if(i.dates.push(n.date),ui(t)>e){i.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),ui(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class A_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gy()?Ly().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await w_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ai(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ai(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function ui(c){return i8(JSON.stringify({version:2,heartbeats:c})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(c){p0(new A4("platform-logger",e=>new jy(e),"PRIVATE")),p0(new A4("heartbeat",e=>new N_(e),"PRIVATE")),J3(Tt,li,c),J3(Tt,li,"esm2017"),J3("fire-js","")}T_("");function B5(c,e){var t={};for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&e.indexOf(s)<0&&(t[s]=c[s]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(c);n<s.length;n++)e.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(c,s[n])&&(t[s[n]]=c[s[n]]);return t}function _9(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const S_=_9,v9=new q6("auth","Firebase",_9());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l8=new V5("@firebase/auth");function I_(c,...e){l8.logLevel<=g2.WARN&&l8.warn(`Auth (${E0}): ${c}`,...e)}function Be(c,...e){l8.logLevel<=g2.ERROR&&l8.error(`Auth (${E0}): ${c}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(c,...e){throw H5(c,...e)}function c3(c,...e){return H5(c,...e)}function w9(c,e,t){const s=Object.assign(Object.assign({},S_()),{[e]:t});return new q6("auth","Firebase",s).create(e,{appName:c.name})}function C3(c){return w9(c,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function H5(c,...e){if(typeof c!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=c.name),c._errorFactory.create(t,...s)}return v9.create(c,...e)}function l2(c,e,...t){if(!c)throw H5(e,...t)}function g3(c){const e="INTERNAL ASSERTION FAILED: "+c;throw Be(e),new Error(e)}function v3(c,e){c||g3(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){var c;return typeof self<"u"&&((c=self.location)===null||c===void 0?void 0:c.href)||""}function R_(){return hi()==="http:"||hi()==="https:"}function hi(){var c;return typeof self<"u"&&((c=self.location)===null||c===void 0?void 0:c.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(R_()||hy()||"connection"in navigator)?navigator.onLine:!0}function k_(){if(typeof navigator>"u")return null;const c=navigator;return c.languages&&c.languages[0]||c.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W6{constructor(e,t){this.shortDelay=e,this.longDelay=t,v3(t>e,"Short delay should be less than long delay!"),this.isMobile=ay()||dy()}get(){return P_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q5(c,e){v3(c.emulator,"Emulator should always be set here");const{url:t}=c.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x9{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;g3("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;g3("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;g3("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=new W6(3e4,6e4);function u4(c,e){return c.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:c.tenantId}):e}async function h4(c,e,t,s,n={}){return b9(c,n,async()=>{let i={},r={};s&&(e==="GET"?r=s:i={body:JSON.stringify(s)});const o=j6(Object.assign({key:c.config.apiKey},r)).slice(1),a=await c._getAdditionalHeaders();a["Content-Type"]="application/json",c.languageCode&&(a["X-Firebase-Locale"]=c.languageCode);const u=Object.assign({method:e,headers:a},i);return uy()||(u.referrerPolicy="no-referrer"),x9.fetch()(N9(c,c.config.apiHost,t,o),u)})}async function b9(c,e,t){c._canInitEmulator=!1;const s=Object.assign(Object.assign({},D_),e);try{const n=new F_(c),i=await Promise.race([t(),n.promise]);n.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw Se(c,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const o=i.ok?r.errorMessage:r.error.message,[a,u]=o.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Se(c,"credential-already-in-use",r);if(a==="EMAIL_EXISTS")throw Se(c,"email-already-in-use",r);if(a==="USER_DISABLED")throw Se(c,"user-disabled",r);const h=s[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw w9(c,h,u);W1(c,h)}}catch(n){if(n instanceof T3)throw n;W1(c,"network-request-failed",{message:String(n)})}}async function $6(c,e,t,s,n={}){const i=await h4(c,e,t,s,n);return"mfaPendingCredential"in i&&W1(c,"multi-factor-auth-required",{_serverResponse:i}),i}function N9(c,e,t,s){const n=`${e}${t}?${s}`;return c.config.emulator?q5(c.config,n):`${c.config.apiScheme}://${n}`}function V_(c){switch(c){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(c3(this.auth,"network-request-failed")),O_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Se(c,e,t){const s={appName:c.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const n=c3(c,e,s);return n.customData._tokenResponse=t,n}function di(c){return c!==void 0&&c.enterprise!==void 0}class U_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return V_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function B_(c,e){return h4(c,"GET","/v2/recaptchaConfig",u4(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H_(c,e){return h4(c,"POST","/v1/accounts:delete",e)}async function E9(c,e){return h4(c,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m6(c){if(c)try{const e=new Date(Number(c));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function q_(c,e=!1){const t=g1(c),s=await t.getIdToken(e),n=j5(s);l2(n&&n.exp&&n.auth_time&&n.iat,t.auth,"internal-error");const i=typeof n.firebase=="object"?n.firebase:void 0,r=i==null?void 0:i.sign_in_provider;return{claims:n,token:s,authTime:m6(et(n.auth_time)),issuedAtTime:m6(et(n.iat)),expirationTime:m6(et(n.exp)),signInProvider:r||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function et(c){return Number(c)*1e3}function j5(c){const[e,t,s]=c.split(".");if(e===void 0||t===void 0||s===void 0)return Be("JWT malformed, contained fewer than 3 sections"),null;try{const n=h9(t);return n?JSON.parse(n):(Be("Failed to decode base64 JWT payload"),null)}catch(n){return Be("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function mi(c){const e=j5(c);return l2(e,"internal-error"),l2(typeof e.exp<"u","internal-error"),l2(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T6(c,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof T3&&j_(s)&&c.auth.currentUser===c&&await c.auth.signOut(),s}}function j_({code:c}){return c==="auth/user-disabled"||c==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const n=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=m6(this.lastLoginAt),this.creationTime=m6(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o8(c){var e;const t=c.auth,s=await c.getIdToken(),n=await T6(c,E9(t,{idToken:s}));l2(n==null?void 0:n.users.length,t,"internal-error");const i=n.users[0];c._notifyReloadListener(i);const r=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?A9(i.providerUserInfo):[],o=G_(c.providerData,r),a=c.isAnonymous,u=!(c.email&&i.passwordHash)&&!(o!=null&&o.length),h=a?u:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Pt(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(c,m)}async function $_(c){const e=g1(c);await o8(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function G_(c,e){return[...c.filter(s=>!e.some(n=>n.providerId===s.providerId)),...e]}function A9(c){return c.map(e=>{var{providerId:t}=e,s=B5(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K_(c,e){const t=await b9(c,{},async()=>{const s=j6({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:i}=c.config,r=N9(c,n,"/v1/token",`key=${i}`),o=await c._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",x9.fetch()(r,{method:"POST",headers:o,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Q_(c,e){return h4(c,"POST","/v2/accounts:revokeToken",u4(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){l2(e.idToken,"internal-error"),l2(typeof e.idToken<"u","internal-error"),l2(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){l2(e.length!==0,"internal-error");const t=mi(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(l2(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:n,expiresIn:i}=await K_(e,t);this.updateTokensAndExpiration(s,n,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:n,expirationTime:i}=t,r=new a0;return s&&(l2(typeof s=="string","internal-error",{appName:e}),r.refreshToken=s),n&&(l2(typeof n=="string","internal-error",{appName:e}),r.accessToken=n),i&&(l2(typeof i=="number","internal-error",{appName:e}),r.expirationTime=i),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new a0,this.toJSON())}_performRefresh(){return g3("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V3(c,e){l2(typeof c=="string"||typeof c>"u","internal-error",{appName:e})}class L3{constructor(e){var{uid:t,auth:s,stsTokenManager:n}=e,i=B5(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new W_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await T6(this,this.stsTokenManager.getToken(this.auth,e));return l2(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q_(this,e)}reload(){return $_(this)}_assign(e){this!==e&&(l2(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new L3(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){l2(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await o8(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(X1(this.auth.app))return Promise.reject(C3(this.auth));const e=await this.getIdToken();return await T6(this,H_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,n,i,r,o,a,u,h;const m=(s=t.displayName)!==null&&s!==void 0?s:void 0,p=(n=t.email)!==null&&n!==void 0?n:void 0,z=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,A=(r=t.photoURL)!==null&&r!==void 0?r:void 0,R=(o=t.tenantId)!==null&&o!==void 0?o:void 0,P=(a=t._redirectEventId)!==null&&a!==void 0?a:void 0,T=(u=t.createdAt)!==null&&u!==void 0?u:void 0,S=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:O,emailVerified:B,isAnonymous:s2,providerData:f2,stsTokenManager:v}=t;l2(O&&v,e,"internal-error");const M=a0.fromJSON(this.name,v);l2(typeof O=="string",e,"internal-error"),V3(m,e.name),V3(p,e.name),l2(typeof B=="boolean",e,"internal-error"),l2(typeof s2=="boolean",e,"internal-error"),V3(z,e.name),V3(A,e.name),V3(R,e.name),V3(P,e.name),V3(T,e.name),V3(S,e.name);const _=new L3({uid:O,auth:e,email:p,emailVerified:B,displayName:m,isAnonymous:s2,photoURL:A,phoneNumber:z,tenantId:R,stsTokenManager:M,createdAt:T,lastLoginAt:S});return f2&&Array.isArray(f2)&&(_.providerData=f2.map(w=>Object.assign({},w))),P&&(_._redirectEventId=P),_}static async _fromIdTokenResponse(e,t,s=!1){const n=new a0;n.updateFromServerResponse(t);const i=new L3({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:s});return await o8(i),i}static async _fromGetAccountInfoResponse(e,t,s){const n=t.users[0];l2(n.localId!==void 0,"internal-error");const i=n.providerUserInfo!==void 0?A9(n.providerUserInfo):[],r=!(n.email&&n.passwordHash)&&!(i!=null&&i.length),o=new a0;o.updateFromIdToken(s);const a=new L3({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r}),u={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:i,metadata:new Pt(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Map;function z3(c){v3(c instanceof Function,"Expected a class definition");let e=pi.get(c);return e?(v3(e instanceof c,"Instance stored in cache mismatched with class"),e):(e=new c,pi.set(c,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T9{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}T9.type="NONE";const gi=T9;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(c,e,t){return`firebase:${c}:${e}:${t}`}class f0{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:n,name:i}=this.auth;this.fullUserKey=He(this.userKey,n.apiKey,i),this.fullPersistenceKey=He("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?L3._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new f0(z3(gi),e,s);const n=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=n[0]||z3(gi);const r=He(s,e.config.apiKey,e.name);let o=null;for(const u of t)try{const h=await u._get(r);if(h){const m=L3._fromJSON(e,h);u!==i&&(o=m),i=u;break}}catch{}const a=n.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new f0(i,e,s):(i=a[0],o&&await i._set(r,o.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(r)}catch{}})),new f0(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(c){const e=c.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(P9(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(S9(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(D9(e))return"Blackberry";if(O9(e))return"Webos";if(I9(e))return"Safari";if((e.includes("chrome/")||R9(e))&&!e.includes("edge/"))return"Chrome";if(k9(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=c.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function S9(c=p1()){return/firefox\//i.test(c)}function I9(c=p1()){const e=c.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function R9(c=p1()){return/crios\//i.test(c)}function P9(c=p1()){return/iemobile/i.test(c)}function k9(c=p1()){return/android/i.test(c)}function D9(c=p1()){return/blackberry/i.test(c)}function O9(c=p1()){return/webos/i.test(c)}function W5(c=p1()){return/iphone|ipad|ipod/i.test(c)||/macintosh/i.test(c)&&/mobile/i.test(c)}function Y_(c=p1()){var e;return W5(c)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function X_(){return my()&&document.documentMode===10}function V9(c=p1()){return W5(c)||k9(c)||O9(c)||D9(c)||/windows phone/i.test(c)||P9(c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F9(c,e=[]){let t;switch(c){case"Browser":t=Li(p1());break;case"Worker":t=`${Li(p1())}-${c}`;break;default:t=c}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${E0}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((r,o)=>{try{const a=e(i);r(a)}catch(a){o(a)}});s.onAbort=t,this.queue.push(s);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const n of t)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(c,e={}){return h4(c,"GET","/v2/passwordPolicy",u4(c,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=6;class cv{constructor(e){var t,s,n,i;const r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=r.minPasswordLength)!==null&&t!==void 0?t:ev,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(n=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&n!==void 0?n:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,n,i,r,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(t=a.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),a.isValid&&(a.isValid=(s=a.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(n=a.containsLowercaseLetter)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(r=a.containsNumericCharacter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(o=a.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),a}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let n=0;n<e.length;n++)s=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t,s,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zi(this),this.idTokenSubscription=new zi(this),this.beforeStateQueue=new J_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v9,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=z3(t)),this._initializationPromise=this.queue(async()=>{var s,n;if(!this._deleted&&(this.persistenceManager=await f0.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((n=this.currentUser)===null||n===void 0?void 0:n.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await E9(this,{idToken:e}),s=await L3._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(X1(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(o,o))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let n=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,o=n==null?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(e);(!r||r===o)&&(a!=null&&a.user)&&(n=a.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(r){n=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return l2(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await o8(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(X1(this.app))return Promise.reject(C3(this));const t=e?g1(e):null;return t&&l2(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&l2(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return X1(this.app)?Promise.reject(C3(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return X1(this.app)?Promise.reject(C3(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(z3(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Z_(this),t=new cv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new q6("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Q_(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&z3(e)||this._popupRedirectResolver;l2(t,this,"argument-error"),this.redirectPersistenceManager=await f0.create(this,[z3(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,n){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let r=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(l2(o,this,"internal-error"),o.then(()=>{r||i(this.currentUser)}),typeof t=="function"){const a=e.addObserver(t,s,n);return()=>{r=!0,a()}}else{const a=e.addObserver(t);return()=>{r=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return l2(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=F9(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&I_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function V4(c){return g1(c)}class zi{constructor(e){this.auth=e,this.observer=null,this.addObserver=_y(t=>this.observer=t)}get next(){return l2(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D8={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sv(c){D8=c}function U9(c){return D8.loadJS(c)}function nv(){return D8.recaptchaEnterpriseScript}function iv(){return D8.gapiScript}function rv(c){return`__${c}${Math.floor(Math.random()*1e6)}`}const lv="recaptcha-enterprise",ov="NO_RECAPTCHA";class av{constructor(e){this.type=lv,this.auth=V4(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(r,o)=>{B_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const u=new U_(a);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,r(u.siteKey)}}).catch(a=>{o(a)})})}function n(i,r,o){const a=window.grecaptcha;di(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(u=>{r(u)}).catch(()=>{r(ov)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,r)=>{s(this.auth).then(o=>{if(!t&&di(window.grecaptcha))n(o,i,r);else{if(typeof window>"u"){r(new Error("RecaptchaVerifier is only supported in browser"));return}let a=nv();a.length!==0&&(a+=o),U9(a).then(()=>{n(o,i,r)}).catch(u=>{r(u)})}}).catch(o=>{r(o)})})}}async function Mi(c,e,t,s=!1){const n=new av(c);let i;try{i=await n.verify(t)}catch{i=await n.verify(t,!0)}const r=Object.assign({},e);return s?Object.assign(r,{captchaResp:i}):Object.assign(r,{captchaResponse:i}),Object.assign(r,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(r,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),r}async function kt(c,e,t,s){var n;if(!((n=c._getRecaptchaConfig())===null||n===void 0)&&n.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Mi(c,e,t,t==="getOobCode");return s(c,i)}else return s(c,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const r=await Mi(c,e,t,t==="getOobCode");return s(c,r)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(c,e){const t=U5(c,"auth");if(t.isInitialized()){const n=t.getImmediate(),i=t.getOptions();if(E6(i,e??{}))return n;W1(n,"already-initialized")}return t.initialize({options:e})}function uv(c,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(z3);e!=null&&e.errorMap&&c._updateErrorMap(e.errorMap),c._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function hv(c,e,t){const s=V4(c);l2(s._canInitEmulator,s,"emulator-config-failed"),l2(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const n=!1,i=B9(e),{host:r,port:o}=dv(e),a=o===null?"":`:${o}`;s.config.emulator={url:`${i}//${r}${a}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:r,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:n})}),mv()}function B9(c){const e=c.indexOf(":");return e<0?"":c.substr(0,e+1)}function dv(c){const e=B9(c),t=/(\/\/)?([^?#/]+)/.exec(c.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(s);if(n){const i=n[1];return{host:i,port:Ci(s.substr(i.length+1))}}else{const[i,r]=s.split(":");return{host:i,port:Ci(r)}}}function Ci(c){if(!c)return null;const e=Number(c);return isNaN(e)?null:e}function mv(){function c(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",c):c())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $5{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return g3("not implemented")}_getIdTokenResponse(e){return g3("not implemented")}_linkToIdToken(e,t){return g3("not implemented")}_getReauthenticationResolver(e){return g3("not implemented")}}async function pv(c,e){return h4(c,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(c,e){return $6(c,"POST","/v1/accounts:signInWithPassword",u4(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lv(c,e){return $6(c,"POST","/v1/accounts:signInWithEmailLink",u4(c,e))}async function zv(c,e){return $6(c,"POST","/v1/accounts:signInWithEmailLink",u4(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S6 extends $5{constructor(e,t,s,n=null){super("password",s),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new S6(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new S6(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kt(e,t,"signInWithPassword",gv);case"emailLink":return Lv(e,{email:this._email,oobCode:this._password});default:W1(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kt(e,s,"signUpPassword",pv);case"emailLink":return zv(e,{idToken:t,email:this._email,oobCode:this._password});default:W1(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(c,e){return $6(c,"POST","/v1/accounts:signInWithIdp",u4(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="http://localhost";class T4 extends $5{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new T4(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):W1("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:n}=t,i=B5(t,["providerId","signInMethod"]);if(!s||!n)return null;const r=new T4(s,n);return r.idToken=i.idToken||void 0,r.accessToken=i.accessToken||void 0,r.secret=i.secret,r.nonce=i.nonce,r.pendingToken=i.pendingToken||null,r}_getIdTokenResponse(e){const t=this.buildRequest();return u0(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,u0(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,u0(e,t)}buildRequest(){const e={requestUri:Mv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=j6(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(c){switch(c){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yv(c){const e=e6(c6(c)).link,t=e?e6(c6(e)).deep_link_id:null,s=e6(c6(c)).deep_link_id;return(s?e6(c6(s)).link:null)||s||t||e||c}class G5{constructor(e){var t,s,n,i,r,o;const a=e6(c6(e)),u=(t=a.apiKey)!==null&&t!==void 0?t:null,h=(s=a.oobCode)!==null&&s!==void 0?s:null,m=Cv((n=a.mode)!==null&&n!==void 0?n:null);l2(u&&h&&m,"argument-error"),this.apiKey=u,this.operation=m,this.code=h,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(r=a.languageCode)!==null&&r!==void 0?r:null,this.tenantId=(o=a.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const t=yv(e);try{return new G5(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(){this.providerId=A0.PROVIDER_ID}static credential(e,t){return S6._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=G5.parseLink(t);return l2(s,"argument-error"),S6._fromEmailAndCode(e,s.code,s.tenantId)}}A0.PROVIDER_ID="password";A0.EMAIL_PASSWORD_SIGN_IN_METHOD="password";A0.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H9{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G6 extends H9{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3 extends G6{constructor(){super("facebook.com")}static credential(e){return T4._fromParams({providerId:j3.PROVIDER_ID,signInMethod:j3.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return j3.credentialFromTaggedObject(e)}static credentialFromError(e){return j3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return j3.credential(e.oauthAccessToken)}catch{return null}}}j3.FACEBOOK_SIGN_IN_METHOD="facebook.com";j3.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W3 extends G6{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return T4._fromParams({providerId:W3.PROVIDER_ID,signInMethod:W3.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return W3.credentialFromTaggedObject(e)}static credentialFromError(e){return W3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return W3.credential(t,s)}catch{return null}}}W3.GOOGLE_SIGN_IN_METHOD="google.com";W3.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $3 extends G6{constructor(){super("github.com")}static credential(e){return T4._fromParams({providerId:$3.PROVIDER_ID,signInMethod:$3.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $3.credentialFromTaggedObject(e)}static credentialFromError(e){return $3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $3.credential(e.oauthAccessToken)}catch{return null}}}$3.GITHUB_SIGN_IN_METHOD="github.com";$3.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G3 extends G6{constructor(){super("twitter.com")}static credential(e,t){return T4._fromParams({providerId:G3.PROVIDER_ID,signInMethod:G3.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return G3.credentialFromTaggedObject(e)}static credentialFromError(e){return G3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return G3.credential(t,s)}catch{return null}}}G3.TWITTER_SIGN_IN_METHOD="twitter.com";G3.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _v(c,e){return $6(c,"POST","/v1/accounts:signUp",u4(c,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,n=!1){const i=await L3._fromIdTokenResponse(e,s,n),r=yi(s);return new S4({user:i,providerId:r,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const n=yi(s);return new S4({user:e,providerId:n,_tokenResponse:s,operationType:t})}}function yi(c){return c.providerId?c.providerId:"phoneNumber"in c?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a8 extends T3{constructor(e,t,s,n){var i;super(t.code,t.message),this.operationType=s,this.user=n,Object.setPrototypeOf(this,a8.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,n){return new a8(e,t,s,n)}}function q9(c,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(c):t._getIdTokenResponse(c)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?a8._fromErrorAndOperation(c,i,e,s):i})}async function vv(c,e,t=!1){const s=await T6(c,e._linkToIdToken(c.auth,await c.getIdToken()),t);return S4._forOperation(c,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(c,e,t=!1){const{auth:s}=c;if(X1(s.app))return Promise.reject(C3(s));const n="reauthenticate";try{const i=await T6(c,q9(s,n,e,c),t);l2(i.idToken,s,"internal-error");const r=j5(i.idToken);l2(r,s,"internal-error");const{sub:o}=r;return l2(c.uid===o,s,"user-mismatch"),S4._forOperation(c,n,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&W1(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j9(c,e,t=!1){if(X1(c.app))return Promise.reject(C3(c));const s="signIn",n=await q9(c,s,e),i=await S4._fromIdTokenResponse(c,s,n);return t||await c._updateCurrentUser(i.user),i}async function xv(c,e){return j9(V4(c),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W9(c){const e=V4(c);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function R02(c,e,t){if(X1(c.app))return Promise.reject(C3(c));const s=V4(c),r=await kt(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_v).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&W9(c),a}),o=await S4._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(o.user),o}function P02(c,e,t){return X1(c.app)?Promise.reject(C3(c)):xv(g1(c),A0.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&W9(c),s})}function bv(c,e,t,s){return g1(c).onIdTokenChanged(e,t,s)}function Nv(c,e,t){return g1(c).beforeAuthStateChanged(e,t)}function Ev(c,e,t,s){return g1(c).onAuthStateChanged(e,t,s)}const f8="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $9{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(f8,"1"),this.storage.removeItem(f8),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=1e3,Tv=10;class G9 extends $9{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=V9(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),n=this.localCache[t];s!==n&&e(t,n,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((r,o,a)=>{this.notifyListeners(r,a)});return}const s=e.key;t?this.detachListener():this.stopPolling();const n=()=>{const r=this.storage.getItem(s);!t&&this.localCache[s]===r||this.notifyListeners(s,r)},i=this.storage.getItem(s);X_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,Tv):n()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const n of Array.from(s))n(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Av)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}G9.type="LOCAL";const Sv=G9;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K9 extends $9{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}K9.type="SESSION";const Q9=K9;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(c){return Promise.all(c.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O8{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(n=>n.isListeningto(e));if(t)return t;const s=new O8(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:n,data:i}=t.data,r=this.handlersMap[n];if(!(r!=null&&r.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:n});const o=Array.from(r).map(async u=>u(t.origin,i)),a=await Iv(o);t.ports[0].postMessage({status:"done",eventId:s,eventType:n,response:a})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}O8.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K5(c="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return c+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let i,r;return new Promise((o,a)=>{const u=K5("",20);n.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},s);r={messageChannel:n,onMessage(m){const p=m;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(p.data.response);break;default:clearTimeout(h),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(r),n.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[n.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t3(){return window}function Pv(c){t3().location.href=c}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y9(){return typeof t3().WorkerGlobalScope<"u"&&typeof t3().importScripts=="function"}async function kv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dv(){var c;return((c=navigator==null?void 0:navigator.serviceWorker)===null||c===void 0?void 0:c.controller)||null}function Ov(){return Y9()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X9="firebaseLocalStorageDb",Vv=1,u8="firebaseLocalStorage",J9="fbase_key";class K6{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function V8(c,e){return c.transaction([u8],e?"readwrite":"readonly").objectStore(u8)}function Fv(){const c=indexedDB.deleteDatabase(X9);return new K6(c).toPromise()}function Dt(){const c=indexedDB.open(X9,Vv);return new Promise((e,t)=>{c.addEventListener("error",()=>{t(c.error)}),c.addEventListener("upgradeneeded",()=>{const s=c.result;try{s.createObjectStore(u8,{keyPath:J9})}catch(n){t(n)}}),c.addEventListener("success",async()=>{const s=c.result;s.objectStoreNames.contains(u8)?e(s):(s.close(),await Fv(),e(await Dt()))})})}async function _i(c,e,t){const s=V8(c,!0).put({[J9]:e,value:t});return new K6(s).toPromise()}async function Uv(c,e){const t=V8(c,!1).get(e),s=await new K6(t).toPromise();return s===void 0?null:s.value}function vi(c,e){const t=V8(c,!0).delete(e);return new K6(t).toPromise()}const Bv=800,Hv=3;class Z9{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dt(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Hv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Y9()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=O8._getInstance(Ov()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await kv(),!this.activeServiceWorker)return;this.sender=new Rv(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dt();return await _i(e,f8,"1"),await vi(e,f8),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>_i(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Uv(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vi(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(n=>{const i=V8(n,!1).getAll();return new K6(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:n,value:i}of e)s.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!s.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const n of Array.from(s))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Z9.type="LOCAL";const qv=Z9;new W6(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(c,e){return e?z3(e):(l2(c._popupRedirectResolver,c,"argument-error"),c._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q5 extends $5{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return u0(e,this._buildIdpRequest())}_linkToIdToken(e,t){return u0(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return u0(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Wv(c){return j9(c.auth,new Q5(c),c.bypassAuthState)}function $v(c){const{auth:e,user:t}=c;return l2(t,e,"internal-error"),wv(t,new Q5(c),c.bypassAuthState)}async function Gv(c){const{auth:e,user:t}=c;return l2(t,e,"internal-error"),vv(t,new Q5(c),c.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t,s,n,i=!1){this.auth=e,this.resolver=s,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:n,tenantId:i,error:r,type:o}=e;if(r){this.reject(r);return}const a={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wv;case"linkViaPopup":case"linkViaRedirect":return Gv;case"reauthViaPopup":case"reauthViaRedirect":return $v;default:W1(this.auth,"internal-error")}}resolve(e){v3(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){v3(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=new W6(2e3,1e4);class e0 extends eo{constructor(e,t,s,n,i){super(e,t,n,i),this.provider=s,this.authWindow=null,this.pollId=null,e0.currentPopupAction&&e0.currentPopupAction.cancel(),e0.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return l2(e,this.auth,"internal-error"),e}async onExecution(){v3(this.filter.length===1,"Popup operations only handle one event");const e=K5();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(c3(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(c3(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,e0.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(c3(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kv.get())};e()}}e0.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="pendingRedirect",qe=new Map;class Yv extends eo{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=qe.get(this.auth._key());if(!e){try{const s=await Xv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}qe.set(this.auth._key(),e)}return this.bypassAuthState||qe.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xv(c,e){const t=ew(e),s=Zv(c);if(!await s._isAvailable())return!1;const n=await s._get(t)==="true";return await s._remove(t),n}function Jv(c,e){qe.set(c._key(),e)}function Zv(c){return z3(c._redirectPersistence)}function ew(c){return He(Qv,c.config.apiKey,c.name)}async function cw(c,e,t=!1){if(X1(c.app))return Promise.reject(C3(c));const s=V4(c),n=jv(s,e),r=await new Yv(s,n,t).execute();return r&&!t&&(delete r.user._redirectEventId,await s._persistUserIfCurrent(r.user),await s._setRedirectUser(null,e)),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=10*60*1e3;class sw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!co(e)){const n=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(c3(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tw&&this.cachedEventUids.clear(),this.cachedEventUids.has(wi(e))}saveEventToCache(e){this.cachedEventUids.add(wi(e)),this.lastProcessedEventTime=Date.now()}}function wi(c){return[c.type,c.eventId,c.sessionId,c.tenantId].filter(e=>e).join("-")}function co({type:c,error:e}){return c==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nw(c){switch(c.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return co(c);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(c,e={}){return h4(c,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lw=/^https?/;async function ow(c){if(c.config.emulator)return;const{authorizedDomains:e}=await iw(c);for(const t of e)try{if(aw(t))return}catch{}W1(c,"unauthorized-domain")}function aw(c){const e=Rt(),{protocol:t,hostname:s}=new URL(e);if(c.startsWith("chrome-extension://")){const r=new URL(c);return r.hostname===""&&s===""?t==="chrome-extension:"&&c.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&r.hostname===s}if(!lw.test(t))return!1;if(rw.test(c))return s===c;const n=c.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=new W6(3e4,6e4);function xi(){const c=t3().___jsl;if(c!=null&&c.H){for(const e of Object.keys(c.H))if(c.H[e].r=c.H[e].r||[],c.H[e].L=c.H[e].L||[],c.H[e].r=[...c.H[e].L],c.CP)for(let t=0;t<c.CP.length;t++)c.CP[t]=null}}function uw(c){return new Promise((e,t)=>{var s,n,i;function r(){xi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xi(),t(c3(c,"network-request-failed"))},timeout:fw.get()})}if(!((n=(s=t3().gapi)===null||s===void 0?void 0:s.iframes)===null||n===void 0)&&n.Iframe)e(gapi.iframes.getContext());else if(!((i=t3().gapi)===null||i===void 0)&&i.load)r();else{const o=rv("iframefcb");return t3()[o]=()=>{gapi.load?r():t(c3(c,"network-request-failed"))},U9(`${iv()}?onload=${o}`).catch(a=>t(a))}}).catch(e=>{throw je=null,e})}let je=null;function hw(c){return je=je||uw(c),je}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=new W6(5e3,15e3),mw="__/auth/iframe",pw="emulator/auth/iframe",gw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zw(c){const e=c.config;l2(e.authDomain,c,"auth-domain-config-required");const t=e.emulator?q5(e,pw):`https://${c.config.authDomain}/${mw}`,s={apiKey:e.apiKey,appName:c.name,v:E0},n=Lw.get(c.config.apiHost);n&&(s.eid=n);const i=c._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${j6(s).slice(1)}`}async function Mw(c){const e=await hw(c),t=t3().gapi;return l2(t,c,"internal-error"),e.open({where:document.body,url:zw(c),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gw,dontclear:!0},s=>new Promise(async(n,i)=>{await s.restyle({setHideOnLeave:!1});const r=c3(c,"network-request-failed"),o=t3().setTimeout(()=>{i(r)},dw.get());function a(){t3().clearTimeout(o),n(s)}s.ping(a).then(a,()=>{i(r)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yw=500,_w=600,vw="_blank",ww="http://localhost";class bi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xw(c,e,t,s=yw,n=_w){const i=Math.max((window.screen.availHeight-n)/2,0).toString(),r=Math.max((window.screen.availWidth-s)/2,0).toString();let o="";const a=Object.assign(Object.assign({},Cw),{width:s.toString(),height:n.toString(),top:i,left:r}),u=p1().toLowerCase();t&&(o=R9(u)?vw:t),S9(u)&&(e=e||ww,a.scrollbars="yes");const h=Object.entries(a).reduce((p,[z,A])=>`${p}${z}=${A},`,"");if(Y_(u)&&o!=="_self")return bw(e||"",o),new bi(null);const m=window.open(e||"",o,h);l2(m,c,"popup-blocked");try{m.focus()}catch{}return new bi(m)}function bw(c,e){const t=document.createElement("a");t.href=c,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="__/auth/handler",Ew="emulator/auth/handler",Aw=encodeURIComponent("fac");async function Ni(c,e,t,s,n,i){l2(c.config.authDomain,c,"auth-domain-config-required"),l2(c.config.apiKey,c,"invalid-api-key");const r={apiKey:c.config.apiKey,appName:c.name,authType:t,redirectUrl:s,v:E0,eventId:n};if(e instanceof H9){e.setDefaultLanguage(c.languageCode),r.providerId=e.providerId||"",yy(e.getCustomParameters())||(r.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))r[h]=m}if(e instanceof G6){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(r.scopes=h.join(","))}c.tenantId&&(r.tid=c.tenantId);const o=r;for(const h of Object.keys(o))o[h]===void 0&&delete o[h];const a=await c._getAppCheckToken(),u=a?`#${Aw}=${encodeURIComponent(a)}`:"";return`${Tw(c)}?${j6(o).slice(1)}${u}`}function Tw({config:c}){return c.emulator?q5(c,Ew):`https://${c.authDomain}/${Nw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="webStorageSupport";class Sw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Q9,this._completeRedirectFn=cw,this._overrideRedirectResult=Jv}async _openPopup(e,t,s,n){var i;v3((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const r=await Ni(e,t,s,Rt(),n);return xw(e,r,K5())}async _openRedirect(e,t,s,n){await this._originValidation(e);const i=await Ni(e,t,s,Rt(),n);return Pv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:n,promise:i}=this.eventManagers[t];return n?Promise.resolve(n):(v3(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Mw(e),s=new sw(e);return t.register("authEvent",n=>(l2(n==null?void 0:n.authEvent,e,"invalid-auth-event"),{status:s.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ct,{type:ct},n=>{var i;const r=(i=n==null?void 0:n[0])===null||i===void 0?void 0:i[ct];r!==void 0&&t(!!r),W1(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ow(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return V9()||I9()||W5()}}const Iw=Sw;var Ei="@firebase/auth",Ai="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){l2(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(c){switch(c){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kw(c){p0(new A4("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=s.options;l2(r&&!r.includes(":"),"invalid-api-key",{appName:s.name});const a={apiKey:r,authDomain:o,clientPlatform:c,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:F9(c)},u=new tv(s,n,i,a);return uv(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),p0(new A4("auth-internal",e=>{const t=V4(e.getProvider("auth").getImmediate());return(s=>new Rw(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),J3(Ei,Ai,Pw(c)),J3(Ei,Ai,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=5*60,Ow=p9("authIdTokenMaxAge")||Dw;let Ti=null;const Vw=c=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Ow)return;const n=t==null?void 0:t.token;Ti!==n&&(Ti=n,await fetch(c,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function Fw(c=M9()){const e=U5(c,"auth");if(e.isInitialized())return e.getImmediate();const t=fv(c,{popupRedirectResolver:Iw,persistence:[qv,Sv,Q9]}),s=p9("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const r=Vw(i.toString());Nv(t,r,()=>r(t.currentUser)),bv(t,o=>r(o))}}const n=d9("auth");return n&&hv(t,`http://${n}`),t}function Uw(){var c,e;return(e=(c=document.getElementsByTagName("head"))===null||c===void 0?void 0:c[0])!==null&&e!==void 0?e:document}sv({loadJS(c){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",c),s.onload=e,s.onerror=n=>{const i=c3("internal-error");i.customData=n,t(i)},s.type="text/javascript",s.charset="UTF-8",Uw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kw("Browser");/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Y4=typeof document<"u";function to(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function Bw(c){return c.__esModule||c[Symbol.toStringTag]==="Module"||c.default&&to(c.default)}const b2=Object.assign;function tt(c,e){const t={};for(const s in e){const n=e[s];t[s]=$1(n)?n.map(c):c(n)}return t}const p6=()=>{},$1=Array.isArray,so=/#/g,Hw=/&/g,qw=/\//g,jw=/=/g,Ww=/\?/g,no=/\+/g,$w=/%5B/g,Gw=/%5D/g,io=/%5E/g,Kw=/%60/g,ro=/%7B/g,Qw=/%7C/g,lo=/%7D/g,Yw=/%20/g;function Y5(c){return encodeURI(""+c).replace(Qw,"|").replace($w,"[").replace(Gw,"]")}function Xw(c){return Y5(c).replace(ro,"{").replace(lo,"}").replace(io,"^")}function Ot(c){return Y5(c).replace(no,"%2B").replace(Yw,"+").replace(so,"%23").replace(Hw,"%26").replace(Kw,"`").replace(ro,"{").replace(lo,"}").replace(io,"^")}function Jw(c){return Ot(c).replace(jw,"%3D")}function Zw(c){return Y5(c).replace(so,"%23").replace(Ww,"%3F")}function ex(c){return c==null?"":Zw(c).replace(qw,"%2F")}function I6(c){try{return decodeURIComponent(""+c)}catch{}return""+c}const cx=/\/$/,tx=c=>c.replace(cx,"");function st(c,e,t="/"){let s,n={},i="",r="";const o=e.indexOf("#");let a=e.indexOf("?");return o<a&&o>=0&&(a=-1),a>-1&&(s=e.slice(0,a),i=e.slice(a+1,o>-1?o:e.length),n=c(i)),o>-1&&(s=s||e.slice(0,o),r=e.slice(o,e.length)),s=rx(s??e,t),{fullPath:s+(i&&"?")+i+r,path:s,query:n,hash:I6(r)}}function sx(c,e){const t=e.query?c(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Si(c,e){return!e||!c.toLowerCase().startsWith(e.toLowerCase())?c:c.slice(e.length)||"/"}function nx(c,e,t){const s=e.matched.length-1,n=t.matched.length-1;return s>-1&&s===n&&g0(e.matched[s],t.matched[n])&&oo(e.params,t.params)&&c(e.query)===c(t.query)&&e.hash===t.hash}function g0(c,e){return(c.aliasOf||c)===(e.aliasOf||e)}function oo(c,e){if(Object.keys(c).length!==Object.keys(e).length)return!1;for(const t in c)if(!ix(c[t],e[t]))return!1;return!0}function ix(c,e){return $1(c)?Ii(c,e):$1(e)?Ii(e,c):c===e}function Ii(c,e){return $1(e)?c.length===e.length&&c.every((t,s)=>t===e[s]):c.length===1&&c[0]===e}function rx(c,e){if(c.startsWith("/"))return c;if(!c)return e;const t=e.split("/"),s=c.split("/"),n=s[s.length-1];(n===".."||n===".")&&s.push("");let i=t.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+s.slice(r).join("/")}const F3={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var R6;(function(c){c.pop="pop",c.push="push"})(R6||(R6={}));var g6;(function(c){c.back="back",c.forward="forward",c.unknown=""})(g6||(g6={}));function lx(c){if(!c)if(Y4){const e=document.querySelector("base");c=e&&e.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),tx(c)}const ox=/^[^#]+#/;function ax(c,e){return c.replace(ox,"#")+e}function fx(c,e){const t=document.documentElement.getBoundingClientRect(),s=c.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const F8=()=>({left:window.scrollX,top:window.scrollY});function ux(c){let e;if("el"in c){const t=c.el,s=typeof t=="string"&&t.startsWith("#"),n=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!n)return;e=fx(n,c)}else e=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ri(c,e){return(history.state?history.state.position-e:-1)+c}const Vt=new Map;function hx(c,e){Vt.set(c,e)}function dx(c){const e=Vt.get(c);return Vt.delete(c),e}let mx=()=>location.protocol+"//"+location.host;function ao(c,e){const{pathname:t,search:s,hash:n}=e,i=c.indexOf("#");if(i>-1){let o=n.includes(c.slice(i))?c.slice(i).length:1,a=n.slice(o);return a[0]!=="/"&&(a="/"+a),Si(a,"")}return Si(t,c)+s+n}function px(c,e,t,s){let n=[],i=[],r=null;const o=({state:p})=>{const z=ao(c,location),A=t.value,R=e.value;let P=0;if(p){if(t.value=z,e.value=p,r&&r===A){r=null;return}P=R?p.position-R.position:0}else s(z);n.forEach(T=>{T(t.value,A,{delta:P,type:R6.pop,direction:P?P>0?g6.forward:g6.back:g6.unknown})})};function a(){r=t.value}function u(p){n.push(p);const z=()=>{const A=n.indexOf(p);A>-1&&n.splice(A,1)};return i.push(z),z}function h(){const{history:p}=window;p.state&&p.replaceState(b2({},p.state,{scroll:F8()}),"")}function m(){for(const p of i)p();i=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:a,listen:u,destroy:m}}function Pi(c,e,t,s=!1,n=!1){return{back:c,current:e,forward:t,replaced:s,position:window.history.length,scroll:n?F8():null}}function gx(c){const{history:e,location:t}=window,s={value:ao(c,t)},n={value:e.state};n.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,u,h){const m=c.indexOf("#"),p=m>-1?(t.host&&document.querySelector("base")?c:c.slice(m))+a:mx()+c+a;try{e[h?"replaceState":"pushState"](u,"",p),n.value=u}catch(z){console.error(z),t[h?"replace":"assign"](p)}}function r(a,u){const h=b2({},e.state,Pi(n.value.back,a,n.value.forward,!0),u,{position:n.value.position});i(a,h,!0),s.value=a}function o(a,u){const h=b2({},n.value,e.state,{forward:a,scroll:F8()});i(h.current,h,!0);const m=b2({},Pi(s.value,a,null),{position:h.position+1},u);i(a,m,!1),s.value=a}return{location:s,state:n,push:o,replace:r}}function Lx(c){c=lx(c);const e=gx(c),t=px(c,e.state,e.location,e.replace);function s(i,r=!0){r||t.pauseListeners(),history.go(i)}const n=b2({location:"",base:c,go:s,createHref:ax.bind(null,c)},e,t);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>e.state.value}),n}function zx(c){return typeof c=="string"||c&&typeof c=="object"}function fo(c){return typeof c=="string"||typeof c=="symbol"}const uo=Symbol("");var ki;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(ki||(ki={}));function L0(c,e){return b2(new Error,{type:c,[uo]:!0},e)}function d3(c,e){return c instanceof Error&&uo in c&&(e==null||!!(c.type&e))}const Di="[^/]+?",Mx={sensitive:!1,strict:!1,start:!0,end:!0},Cx=/[.+*?^${}()[\]/\\]/g;function yx(c,e){const t=b2({},Mx,e),s=[];let n=t.start?"^":"";const i=[];for(const u of c){const h=u.length?[]:[90];t.strict&&!u.length&&(n+="/");for(let m=0;m<u.length;m++){const p=u[m];let z=40+(t.sensitive?.25:0);if(p.type===0)m||(n+="/"),n+=p.value.replace(Cx,"\\$&"),z+=40;else if(p.type===1){const{value:A,repeatable:R,optional:P,regexp:T}=p;i.push({name:A,repeatable:R,optional:P});const S=T||Di;if(S!==Di){z+=10;try{new RegExp(`(${S})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${A}" (${S}): `+B.message)}}let O=R?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;m||(O=P&&u.length<2?`(?:/${O})`:"/"+O),P&&(O+="?"),n+=O,z+=20,P&&(z+=-8),R&&(z+=-20),S===".*"&&(z+=-50)}h.push(z)}s.push(h)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}t.strict||(n+="/?"),t.end?n+="$":t.strict&&(n+="(?:/|$)");const r=new RegExp(n,t.sensitive?"":"i");function o(u){const h=u.match(r),m={};if(!h)return null;for(let p=1;p<h.length;p++){const z=h[p]||"",A=i[p-1];m[A.name]=z&&A.repeatable?z.split("/"):z}return m}function a(u){let h="",m=!1;for(const p of c){(!m||!h.endsWith("/"))&&(h+="/"),m=!1;for(const z of p)if(z.type===0)h+=z.value;else if(z.type===1){const{value:A,repeatable:R,optional:P}=z,T=A in u?u[A]:"";if($1(T)&&!R)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const S=$1(T)?T.join("/"):T;if(!S)if(P)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):m=!0);else throw new Error(`Missing required param "${A}"`);h+=S}}return h||"/"}return{re:r,score:s,keys:i,parse:o,stringify:a}}function _x(c,e){let t=0;for(;t<c.length&&t<e.length;){const s=e[t]-c[t];if(s)return s;t++}return c.length<e.length?c.length===1&&c[0]===80?-1:1:c.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ho(c,e){let t=0;const s=c.score,n=e.score;for(;t<s.length&&t<n.length;){const i=_x(s[t],n[t]);if(i)return i;t++}if(Math.abs(n.length-s.length)===1){if(Oi(s))return 1;if(Oi(n))return-1}return n.length-s.length}function Oi(c){const e=c[c.length-1];return c.length>0&&e[e.length-1]<0}const vx={type:0,value:""},wx=/[a-zA-Z0-9_]/;function xx(c){if(!c)return[[]];if(c==="/")return[[vx]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function e(z){throw new Error(`ERR (${t})/"${u}": ${z}`)}let t=0,s=t;const n=[];let i;function r(){i&&n.push(i),i=[]}let o=0,a,u="",h="";function m(){u&&(t===0?i.push({type:0,value:u}):t===1||t===2||t===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=a}for(;o<c.length;){if(a=c[o++],a==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:a==="/"?(u&&m(),r()):a===":"?(m(),t=1):p();break;case 4:p(),t=s;break;case 1:a==="("?t=2:wx.test(a)?p():(m(),t=0,a!=="*"&&a!=="?"&&a!=="+"&&o--);break;case 2:a===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+a:t=3:h+=a;break;case 3:m(),t=0,a!=="*"&&a!=="?"&&a!=="+"&&o--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),m(),r(),n}function bx(c,e,t){const s=yx(xx(c.path),t),n=b2(s,{record:c,parent:e,children:[],alias:[]});return e&&!n.record.aliasOf==!e.record.aliasOf&&e.children.push(n),n}function Nx(c,e){const t=[],s=new Map;e=Bi({strict:!1,end:!0,sensitive:!1},e);function n(m){return s.get(m)}function i(m,p,z){const A=!z,R=Fi(m);R.aliasOf=z&&z.record;const P=Bi(e,m),T=[R];if("alias"in m){const B=typeof m.alias=="string"?[m.alias]:m.alias;for(const s2 of B)T.push(Fi(b2({},R,{components:z?z.record.components:R.components,path:s2,aliasOf:z?z.record:R})))}let S,O;for(const B of T){const{path:s2}=B;if(p&&s2[0]!=="/"){const f2=p.record.path,v=f2[f2.length-1]==="/"?"":"/";B.path=p.record.path+(s2&&v+s2)}if(S=bx(B,p,P),z?z.alias.push(S):(O=O||S,O!==S&&O.alias.push(S),A&&m.name&&!Ui(S)&&r(m.name)),mo(S)&&a(S),R.children){const f2=R.children;for(let v=0;v<f2.length;v++)i(f2[v],S,z&&z.children[v])}z=z||S}return O?()=>{r(O)}:p6}function r(m){if(fo(m)){const p=s.get(m);p&&(s.delete(m),t.splice(t.indexOf(p),1),p.children.forEach(r),p.alias.forEach(r))}else{const p=t.indexOf(m);p>-1&&(t.splice(p,1),m.record.name&&s.delete(m.record.name),m.children.forEach(r),m.alias.forEach(r))}}function o(){return t}function a(m){const p=Tx(m,t);t.splice(p,0,m),m.record.name&&!Ui(m)&&s.set(m.record.name,m)}function u(m,p){let z,A={},R,P;if("name"in m&&m.name){if(z=s.get(m.name),!z)throw L0(1,{location:m});P=z.record.name,A=b2(Vi(p.params,z.keys.filter(O=>!O.optional).concat(z.parent?z.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),m.params&&Vi(m.params,z.keys.map(O=>O.name))),R=z.stringify(A)}else if(m.path!=null)R=m.path,z=t.find(O=>O.re.test(R)),z&&(A=z.parse(R),P=z.record.name);else{if(z=p.name?s.get(p.name):t.find(O=>O.re.test(p.path)),!z)throw L0(1,{location:m,currentLocation:p});P=z.record.name,A=b2({},p.params,m.params),R=z.stringify(A)}const T=[];let S=z;for(;S;)T.unshift(S.record),S=S.parent;return{name:P,path:R,params:A,matched:T,meta:Ax(T)}}c.forEach(m=>i(m));function h(){t.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:r,clearRoutes:h,getRoutes:o,getRecordMatcher:n}}function Vi(c,e){const t={};for(const s of e)s in c&&(t[s]=c[s]);return t}function Fi(c){const e={path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:c.aliasOf,beforeEnter:c.beforeEnter,props:Ex(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Ex(c){const e={},t=c.props||!1;if("component"in c)e.default=t;else for(const s in c.components)e[s]=typeof t=="object"?t[s]:t;return e}function Ui(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function Ax(c){return c.reduce((e,t)=>b2(e,t.meta),{})}function Bi(c,e){const t={};for(const s in c)t[s]=s in e?e[s]:c[s];return t}function Tx(c,e){let t=0,s=e.length;for(;t!==s;){const i=t+s>>1;ho(c,e[i])<0?s=i:t=i+1}const n=Sx(c);return n&&(s=e.lastIndexOf(n,s-1)),s}function Sx(c){let e=c;for(;e=e.parent;)if(mo(e)&&ho(c,e)===0)return e}function mo({record:c}){return!!(c.name||c.components&&Object.keys(c.components).length||c.redirect)}function Ix(c){const e={};if(c===""||c==="?")return e;const s=(c[0]==="?"?c.slice(1):c).split("&");for(let n=0;n<s.length;++n){const i=s[n].replace(no," "),r=i.indexOf("="),o=I6(r<0?i:i.slice(0,r)),a=r<0?null:I6(i.slice(r+1));if(o in e){let u=e[o];$1(u)||(u=e[o]=[u]),u.push(a)}else e[o]=a}return e}function Hi(c){let e="";for(let t in c){const s=c[t];if(t=Jw(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}($1(s)?s.map(i=>i&&Ot(i)):[s&&Ot(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function Rx(c){const e={};for(const t in c){const s=c[t];s!==void 0&&(e[t]=$1(s)?s.map(n=>n==null?null:""+n):s==null?s:""+s)}return e}const Px=Symbol(""),qi=Symbol(""),U8=Symbol(""),X5=Symbol(""),Ft=Symbol("");function Y0(){let c=[];function e(s){return c.push(s),()=>{const n=c.indexOf(s);n>-1&&c.splice(n,1)}}function t(){c=[]}return{add:e,list:()=>c.slice(),reset:t}}function q3(c,e,t,s,n,i=r=>r()){const r=s&&(s.enterCallbacks[n]=s.enterCallbacks[n]||[]);return()=>new Promise((o,a)=>{const u=p=>{p===!1?a(L0(4,{from:t,to:e})):p instanceof Error?a(p):zx(p)?a(L0(2,{from:e,to:p})):(r&&s.enterCallbacks[n]===r&&typeof p=="function"&&r.push(p),o())},h=i(()=>c.call(s&&s.instances[n],e,t,u));let m=Promise.resolve(h);c.length<3&&(m=m.then(u)),m.catch(p=>a(p))})}function nt(c,e,t,s,n=i=>i()){const i=[];for(const r of c)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(to(a)){const h=(a.__vccOpts||a)[e];h&&i.push(q3(h,t,s,r,o,n))}else{let u=a();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${o}" at "${r.path}"`);const m=Bw(h)?h.default:h;r.mods[o]=h,r.components[o]=m;const z=(m.__vccOpts||m)[e];return z&&q3(z,t,s,r,o,n)()}))}}return i}function ji(c){const e=q1(U8),t=q1(X5),s=J2(()=>{const a=i0(c.to);return e.resolve(a)}),n=J2(()=>{const{matched:a}=s.value,{length:u}=a,h=a[u-1],m=t.matched;if(!h||!m.length)return-1;const p=m.findIndex(g0.bind(null,h));if(p>-1)return p;const z=Wi(a[u-2]);return u>1&&Wi(h)===z&&m[m.length-1].path!==z?m.findIndex(g0.bind(null,a[u-2])):p}),i=J2(()=>n.value>-1&&Vx(t.params,s.value.params)),r=J2(()=>n.value>-1&&n.value===t.matched.length-1&&oo(t.params,s.value.params));function o(a={}){return Ox(a)?e[i0(c.replace)?"replace":"push"](i0(c.to)).catch(p6):Promise.resolve()}return{route:s,href:J2(()=>s.value.href),isActive:i,isExactActive:r,navigate:o}}const kx=R5({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ji,setup(c,{slots:e}){const t=E8(ji(c)),{options:s}=q1(U8),n=J2(()=>({[$i(c.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[$i(c.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&e.default(t);return c.custom?i:O5("a",{"aria-current":t.isExactActive?c.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:n.value},i)}}}),Dx=kx;function Ox(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const e=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return c.preventDefault&&c.preventDefault(),!0}}function Vx(c,e){for(const t in e){const s=e[t],n=c[t];if(typeof s=="string"){if(s!==n)return!1}else if(!$1(n)||n.length!==s.length||s.some((i,r)=>i!==n[r]))return!1}return!0}function Wi(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const $i=(c,e,t)=>c??e??t,Fx=R5({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:e,slots:t}){const s=q1(Ft),n=J2(()=>c.route||s.value),i=q1(qi,0),r=J2(()=>{let u=i0(i);const{matched:h}=n.value;let m;for(;(m=h[u])&&!m.components;)u++;return u}),o=J2(()=>n.value.matched[r.value]);Ve(qi,J2(()=>r.value+1)),Ve(Px,o),Ve(Ft,n);const a=eM();return h6(()=>[a.value,o.value,c.name],([u,h,m],[p,z,A])=>{h&&(h.instances[m]=u,z&&z!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=z.leaveGuards),h.updateGuards.size||(h.updateGuards=z.updateGuards))),u&&h&&(!z||!g0(h,z)||!p)&&(h.enterCallbacks[m]||[]).forEach(R=>R(u))},{flush:"post"}),()=>{const u=n.value,h=c.name,m=o.value,p=m&&m.components[h];if(!p)return Gi(t.default,{Component:p,route:u});const z=m.props[h],A=z?z===!0?u.params:typeof z=="function"?z(u):z:null,P=O5(p,b2({},A,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(m.instances[h]=null)},ref:a}));return Gi(t.default,{Component:P,route:u})||P}}});function Gi(c,e){if(!c)return null;const t=c(e);return t.length===1?t[0]:t}const Ux=Fx;function Bx(c){const e=Nx(c.routes,c),t=c.parseQuery||Ix,s=c.stringifyQuery||Hi,n=c.history,i=Y0(),r=Y0(),o=Y0(),a=cM(F3);let u=F3;Y4&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=tt.bind(null,D=>""+D),m=tt.bind(null,ex),p=tt.bind(null,I6);function z(D,Y){let K,X;return fo(D)?(K=e.getRecordMatcher(D),X=Y):X=D,e.addRoute(X,K)}function A(D){const Y=e.getRecordMatcher(D);Y&&e.removeRoute(Y)}function R(){return e.getRoutes().map(D=>D.record)}function P(D){return!!e.getRecordMatcher(D)}function T(D,Y){if(Y=b2({},Y||a.value),typeof D=="string"){const C=st(t,D,Y.path),E=e.resolve({path:C.path},Y),V=n.createHref(C.fullPath);return b2(C,E,{params:p(E.params),hash:I6(C.hash),redirectedFrom:void 0,href:V})}let K;if(D.path!=null)K=b2({},D,{path:st(t,D.path,Y.path).path});else{const C=b2({},D.params);for(const E in C)C[E]==null&&delete C[E];K=b2({},D,{params:m(C)}),Y.params=m(Y.params)}const X=e.resolve(K,Y),z2=D.hash||"";X.params=h(p(X.params));const N2=sx(s,b2({},D,{hash:Xw(z2),path:X.path})),L=n.createHref(N2);return b2({fullPath:N2,hash:z2,query:s===Hi?Rx(D.query):D.query||{}},X,{redirectedFrom:void 0,href:L})}function S(D){return typeof D=="string"?st(t,D,a.value.path):b2({},D)}function O(D,Y){if(u!==D)return L0(8,{from:Y,to:D})}function B(D){return v(D)}function s2(D){return B(b2(S(D),{replace:!0}))}function f2(D){const Y=D.matched[D.matched.length-1];if(Y&&Y.redirect){const{redirect:K}=Y;let X=typeof K=="function"?K(D):K;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=S(X):{path:X},X.params={}),b2({query:D.query,hash:D.hash,params:X.path!=null?{}:D.params},X)}}function v(D,Y){const K=u=T(D),X=a.value,z2=D.state,N2=D.force,L=D.replace===!0,C=f2(K);if(C)return v(b2(S(C),{state:typeof C=="object"?b2({},z2,C.state):z2,force:N2,replace:L}),Y||K);const E=K;E.redirectedFrom=Y;let V;return!N2&&nx(s,X,K)&&(V=L0(16,{to:E,from:X}),D1(X,X,!0,!1)),(V?Promise.resolve(V):w(E,X)).catch(k=>d3(k)?d3(k,2)?k:U1(k):m2(k,E,X)).then(k=>{if(k){if(d3(k,2))return v(b2({replace:L},S(k.to),{state:typeof k.to=="object"?b2({},z2,k.to.state):z2,force:N2}),Y||E)}else k=b(E,X,!0,L,z2);return x(E,X,k),k})}function M(D,Y){const K=O(D,Y);return K?Promise.reject(K):Promise.resolve()}function _(D){const Y=I3.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(D):D()}function w(D,Y){let K;const[X,z2,N2]=Hx(D,Y);K=nt(X.reverse(),"beforeRouteLeave",D,Y);for(const C of X)C.leaveGuards.forEach(E=>{K.push(q3(E,D,Y))});const L=M.bind(null,D,Y);return K.push(L),v1(K).then(()=>{K=[];for(const C of i.list())K.push(q3(C,D,Y));return K.push(L),v1(K)}).then(()=>{K=nt(z2,"beforeRouteUpdate",D,Y);for(const C of z2)C.updateGuards.forEach(E=>{K.push(q3(E,D,Y))});return K.push(L),v1(K)}).then(()=>{K=[];for(const C of N2)if(C.beforeEnter)if($1(C.beforeEnter))for(const E of C.beforeEnter)K.push(q3(E,D,Y));else K.push(q3(C.beforeEnter,D,Y));return K.push(L),v1(K)}).then(()=>(D.matched.forEach(C=>C.enterCallbacks={}),K=nt(N2,"beforeRouteEnter",D,Y,_),K.push(L),v1(K))).then(()=>{K=[];for(const C of r.list())K.push(q3(C,D,Y));return K.push(L),v1(K)}).catch(C=>d3(C,8)?C:Promise.reject(C))}function x(D,Y,K){o.list().forEach(X=>_(()=>X(D,Y,K)))}function b(D,Y,K,X,z2){const N2=O(D,Y);if(N2)return N2;const L=Y===F3,C=Y4?history.state:{};K&&(X||L?n.replace(D.fullPath,b2({scroll:L&&C&&C.scroll},z2)):n.push(D.fullPath,z2)),a.value=D,D1(D,Y,K,L),U1()}let y;function L1(){y||(y=n.listen((D,Y,K)=>{if(!G1.listening)return;const X=T(D),z2=f2(X);if(z2){v(b2(z2,{replace:!0}),X).catch(p6);return}u=X;const N2=a.value;Y4&&hx(Ri(N2.fullPath,K.delta),F8()),w(X,N2).catch(L=>d3(L,12)?L:d3(L,2)?(v(L.to,X).then(C=>{d3(C,20)&&!K.delta&&K.type===R6.pop&&n.go(-1,!1)}).catch(p6),Promise.reject()):(K.delta&&n.go(-K.delta,!1),m2(L,X,N2))).then(L=>{L=L||b(X,N2,!1),L&&(K.delta&&!d3(L,8)?n.go(-K.delta,!1):K.type===R6.pop&&d3(L,20)&&n.go(-1,!1)),x(X,N2,L)}).catch(p6)}))}let k1=Y0(),H2=Y0(),L2;function m2(D,Y,K){U1(D);const X=H2.list();return X.length?X.forEach(z2=>z2(D,Y,K)):console.error(D),Promise.reject(D)}function b1(){return L2&&a.value!==F3?Promise.resolve():new Promise((D,Y)=>{k1.add([D,Y])})}function U1(D){return L2||(L2=!D,L1(),k1.list().forEach(([Y,K])=>D?K(D):Y()),k1.reset()),D}function D1(D,Y,K,X){const{scrollBehavior:z2}=c;if(!Y4||!z2)return Promise.resolve();const N2=!K&&dx(Ri(D.fullPath,0))||(X||!K)&&history.state&&history.state.scroll||null;return Tl().then(()=>z2(D,Y,N2)).then(L=>L&&ux(L)).catch(L=>m2(L,D,Y))}const O2=D=>n.go(D);let V2;const I3=new Set,G1={currentRoute:a,listening:!0,addRoute:z,removeRoute:A,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:R,resolve:T,options:c,push:B,replace:s2,go:O2,back:()=>O2(-1),forward:()=>O2(1),beforeEach:i.add,beforeResolve:r.add,afterEach:o.add,onError:H2.add,isReady:b1,install(D){const Y=this;D.component("RouterLink",Dx),D.component("RouterView",Ux),D.config.globalProperties.$router=Y,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>i0(a)}),Y4&&!V2&&a.value===F3&&(V2=!0,B(n.location).catch(z2=>{}));const K={};for(const z2 in F3)Object.defineProperty(K,z2,{get:()=>a.value[z2],enumerable:!0});D.provide(U8,Y),D.provide(X5,xl(K)),D.provide(Ft,a);const X=D.unmount;I3.add(D),D.unmount=function(){I3.delete(D),I3.size<1&&(u=F3,y&&y(),y=null,a.value=F3,V2=!1,L2=!1),X()}}};function v1(D){return D.reduce((Y,K)=>Y.then(()=>_(K)),Promise.resolve())}return G1}function Hx(c,e){const t=[],s=[],n=[],i=Math.max(e.matched.length,c.matched.length);for(let r=0;r<i;r++){const o=e.matched[r];o&&(c.matched.find(u=>g0(u,o))?s.push(o):t.push(o));const a=c.matched[r];a&&(e.matched.find(u=>g0(u,a))||n.push(a))}return[t,s,n]}function k02(){return q1(U8)}function D02(c){return q1(X5)}const po=Bx({history:Lx(),routes:[{path:Z0.register,component:()=>Te(()=>import("./RegisterView-BrJ8XWcd.js"),__vite__mapDeps([0,1]))},{path:Z0.auth,component:()=>Te(()=>import("./AuthView-Dz0dTZbb.js"),__vite__mapDeps([2,3]))},{path:`${Z0.user}/:uid`,component:()=>Te(()=>import("./UserPage-DZhedH0Y.js"),__vite__mapDeps([4,5])),meta:{requiresAuth:!0}},{path:Z0.main,component:()=>Te(()=>import("./RegisterView-BrJ8XWcd.js"),__vite__mapDeps([0,1]))}]});po.beforeEach((c,e,t)=>{const s=c.matched.some(i=>i.meta.requiresAuth),n=Fw();Ev(n,i=>{s&&!i?t(Z0.auth):t()})});var qx="firebase",jx="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */J3(qx,jx,"app");var Ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var x4,go;(function(){var c;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,M){function _(){}_.prototype=M.prototype,v.D=M.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(w,x,b){for(var y=Array(arguments.length-2),L1=2;L1<arguments.length;L1++)y[L1-2]=arguments[L1];return M.prototype[x].apply(w,y)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function n(v,M,_){_||(_=0);var w=Array(16);if(typeof M=="string")for(var x=0;16>x;++x)w[x]=M.charCodeAt(_++)|M.charCodeAt(_++)<<8|M.charCodeAt(_++)<<16|M.charCodeAt(_++)<<24;else for(x=0;16>x;++x)w[x]=M[_++]|M[_++]<<8|M[_++]<<16|M[_++]<<24;M=v.g[0],_=v.g[1],x=v.g[2];var b=v.g[3],y=M+(b^_&(x^b))+w[0]+3614090360&4294967295;M=_+(y<<7&4294967295|y>>>25),y=b+(x^M&(_^x))+w[1]+3905402710&4294967295,b=M+(y<<12&4294967295|y>>>20),y=x+(_^b&(M^_))+w[2]+606105819&4294967295,x=b+(y<<17&4294967295|y>>>15),y=_+(M^x&(b^M))+w[3]+3250441966&4294967295,_=x+(y<<22&4294967295|y>>>10),y=M+(b^_&(x^b))+w[4]+4118548399&4294967295,M=_+(y<<7&4294967295|y>>>25),y=b+(x^M&(_^x))+w[5]+1200080426&4294967295,b=M+(y<<12&4294967295|y>>>20),y=x+(_^b&(M^_))+w[6]+2821735955&4294967295,x=b+(y<<17&4294967295|y>>>15),y=_+(M^x&(b^M))+w[7]+4249261313&4294967295,_=x+(y<<22&4294967295|y>>>10),y=M+(b^_&(x^b))+w[8]+1770035416&4294967295,M=_+(y<<7&4294967295|y>>>25),y=b+(x^M&(_^x))+w[9]+2336552879&4294967295,b=M+(y<<12&4294967295|y>>>20),y=x+(_^b&(M^_))+w[10]+4294925233&4294967295,x=b+(y<<17&4294967295|y>>>15),y=_+(M^x&(b^M))+w[11]+2304563134&4294967295,_=x+(y<<22&4294967295|y>>>10),y=M+(b^_&(x^b))+w[12]+1804603682&4294967295,M=_+(y<<7&4294967295|y>>>25),y=b+(x^M&(_^x))+w[13]+4254626195&4294967295,b=M+(y<<12&4294967295|y>>>20),y=x+(_^b&(M^_))+w[14]+2792965006&4294967295,x=b+(y<<17&4294967295|y>>>15),y=_+(M^x&(b^M))+w[15]+1236535329&4294967295,_=x+(y<<22&4294967295|y>>>10),y=M+(x^b&(_^x))+w[1]+4129170786&4294967295,M=_+(y<<5&4294967295|y>>>27),y=b+(_^x&(M^_))+w[6]+3225465664&4294967295,b=M+(y<<9&4294967295|y>>>23),y=x+(M^_&(b^M))+w[11]+643717713&4294967295,x=b+(y<<14&4294967295|y>>>18),y=_+(b^M&(x^b))+w[0]+3921069994&4294967295,_=x+(y<<20&4294967295|y>>>12),y=M+(x^b&(_^x))+w[5]+3593408605&4294967295,M=_+(y<<5&4294967295|y>>>27),y=b+(_^x&(M^_))+w[10]+38016083&4294967295,b=M+(y<<9&4294967295|y>>>23),y=x+(M^_&(b^M))+w[15]+3634488961&4294967295,x=b+(y<<14&4294967295|y>>>18),y=_+(b^M&(x^b))+w[4]+3889429448&4294967295,_=x+(y<<20&4294967295|y>>>12),y=M+(x^b&(_^x))+w[9]+568446438&4294967295,M=_+(y<<5&4294967295|y>>>27),y=b+(_^x&(M^_))+w[14]+3275163606&4294967295,b=M+(y<<9&4294967295|y>>>23),y=x+(M^_&(b^M))+w[3]+4107603335&4294967295,x=b+(y<<14&4294967295|y>>>18),y=_+(b^M&(x^b))+w[8]+1163531501&4294967295,_=x+(y<<20&4294967295|y>>>12),y=M+(x^b&(_^x))+w[13]+2850285829&4294967295,M=_+(y<<5&4294967295|y>>>27),y=b+(_^x&(M^_))+w[2]+4243563512&4294967295,b=M+(y<<9&4294967295|y>>>23),y=x+(M^_&(b^M))+w[7]+1735328473&4294967295,x=b+(y<<14&4294967295|y>>>18),y=_+(b^M&(x^b))+w[12]+2368359562&4294967295,_=x+(y<<20&4294967295|y>>>12),y=M+(_^x^b)+w[5]+4294588738&4294967295,M=_+(y<<4&4294967295|y>>>28),y=b+(M^_^x)+w[8]+2272392833&4294967295,b=M+(y<<11&4294967295|y>>>21),y=x+(b^M^_)+w[11]+1839030562&4294967295,x=b+(y<<16&4294967295|y>>>16),y=_+(x^b^M)+w[14]+4259657740&4294967295,_=x+(y<<23&4294967295|y>>>9),y=M+(_^x^b)+w[1]+2763975236&4294967295,M=_+(y<<4&4294967295|y>>>28),y=b+(M^_^x)+w[4]+1272893353&4294967295,b=M+(y<<11&4294967295|y>>>21),y=x+(b^M^_)+w[7]+4139469664&4294967295,x=b+(y<<16&4294967295|y>>>16),y=_+(x^b^M)+w[10]+3200236656&4294967295,_=x+(y<<23&4294967295|y>>>9),y=M+(_^x^b)+w[13]+681279174&4294967295,M=_+(y<<4&4294967295|y>>>28),y=b+(M^_^x)+w[0]+3936430074&4294967295,b=M+(y<<11&4294967295|y>>>21),y=x+(b^M^_)+w[3]+3572445317&4294967295,x=b+(y<<16&4294967295|y>>>16),y=_+(x^b^M)+w[6]+76029189&4294967295,_=x+(y<<23&4294967295|y>>>9),y=M+(_^x^b)+w[9]+3654602809&4294967295,M=_+(y<<4&4294967295|y>>>28),y=b+(M^_^x)+w[12]+3873151461&4294967295,b=M+(y<<11&4294967295|y>>>21),y=x+(b^M^_)+w[15]+530742520&4294967295,x=b+(y<<16&4294967295|y>>>16),y=_+(x^b^M)+w[2]+3299628645&4294967295,_=x+(y<<23&4294967295|y>>>9),y=M+(x^(_|~b))+w[0]+4096336452&4294967295,M=_+(y<<6&4294967295|y>>>26),y=b+(_^(M|~x))+w[7]+1126891415&4294967295,b=M+(y<<10&4294967295|y>>>22),y=x+(M^(b|~_))+w[14]+2878612391&4294967295,x=b+(y<<15&4294967295|y>>>17),y=_+(b^(x|~M))+w[5]+4237533241&4294967295,_=x+(y<<21&4294967295|y>>>11),y=M+(x^(_|~b))+w[12]+1700485571&4294967295,M=_+(y<<6&4294967295|y>>>26),y=b+(_^(M|~x))+w[3]+2399980690&4294967295,b=M+(y<<10&4294967295|y>>>22),y=x+(M^(b|~_))+w[10]+4293915773&4294967295,x=b+(y<<15&4294967295|y>>>17),y=_+(b^(x|~M))+w[1]+2240044497&4294967295,_=x+(y<<21&4294967295|y>>>11),y=M+(x^(_|~b))+w[8]+1873313359&4294967295,M=_+(y<<6&4294967295|y>>>26),y=b+(_^(M|~x))+w[15]+4264355552&4294967295,b=M+(y<<10&4294967295|y>>>22),y=x+(M^(b|~_))+w[6]+2734768916&4294967295,x=b+(y<<15&4294967295|y>>>17),y=_+(b^(x|~M))+w[13]+1309151649&4294967295,_=x+(y<<21&4294967295|y>>>11),y=M+(x^(_|~b))+w[4]+4149444226&4294967295,M=_+(y<<6&4294967295|y>>>26),y=b+(_^(M|~x))+w[11]+3174756917&4294967295,b=M+(y<<10&4294967295|y>>>22),y=x+(M^(b|~_))+w[2]+718787259&4294967295,x=b+(y<<15&4294967295|y>>>17),y=_+(b^(x|~M))+w[9]+3951481745&4294967295,v.g[0]=v.g[0]+M&4294967295,v.g[1]=v.g[1]+(x+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+x&4294967295,v.g[3]=v.g[3]+b&4294967295}s.prototype.u=function(v,M){M===void 0&&(M=v.length);for(var _=M-this.blockSize,w=this.B,x=this.h,b=0;b<M;){if(x==0)for(;b<=_;)n(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<M;)if(w[x++]=v.charCodeAt(b++),x==this.blockSize){n(this,w),x=0;break}}else for(;b<M;)if(w[x++]=v[b++],x==this.blockSize){n(this,w),x=0;break}}this.h=x,this.o+=M},s.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var M=1;M<v.length-8;++M)v[M]=0;var _=8*this.o;for(M=v.length-8;M<v.length;++M)v[M]=_&255,_/=256;for(this.u(v),v=Array(16),M=_=0;4>M;++M)for(var w=0;32>w;w+=8)v[_++]=this.g[M]>>>w&255;return v};function i(v,M){var _=o;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=M(v)}function r(v,M){this.h=M;for(var _=[],w=!0,x=v.length-1;0<=x;x--){var b=v[x]|0;w&&b==M||(_[x]=b,w=!1)}this.g=_}var o={};function a(v){return-128<=v&&128>v?i(v,function(M){return new r([M|0],0>M?-1:0)}):new r([v|0],0>v?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return m;if(0>v)return P(u(-v));for(var M=[],_=1,w=0;v>=_;w++)M[w]=v/_|0,_*=4294967296;return new r(M,0)}function h(v,M){if(v.length==0)throw Error("number format error: empty string");if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(v.charAt(0)=="-")return P(h(v.substring(1),M));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(M,8)),w=m,x=0;x<v.length;x+=8){var b=Math.min(8,v.length-x),y=parseInt(v.substring(x,x+b),M);8>b?(b=u(Math.pow(M,b)),w=w.j(b).add(u(y))):(w=w.j(_),w=w.add(u(y)))}return w}var m=a(0),p=a(1),z=a(16777216);c=r.prototype,c.m=function(){if(R(this))return-P(this).m();for(var v=0,M=1,_=0;_<this.g.length;_++){var w=this.i(_);v+=(0<=w?w:4294967296+w)*M,M*=4294967296}return v},c.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A(this))return"0";if(R(this))return"-"+P(this).toString(v);for(var M=u(Math.pow(v,6)),_=this,w="";;){var x=B(_,M).g;_=T(_,x.j(M));var b=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=x,A(_))return b+w;for(;6>b.length;)b="0"+b;w=b+w}},c.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function A(v){if(v.h!=0)return!1;for(var M=0;M<v.g.length;M++)if(v.g[M]!=0)return!1;return!0}function R(v){return v.h==-1}c.l=function(v){return v=T(this,v),R(v)?-1:A(v)?0:1};function P(v){for(var M=v.g.length,_=[],w=0;w<M;w++)_[w]=~v.g[w];return new r(_,~v.h).add(p)}c.abs=function(){return R(this)?P(this):this},c.add=function(v){for(var M=Math.max(this.g.length,v.g.length),_=[],w=0,x=0;x<=M;x++){var b=w+(this.i(x)&65535)+(v.i(x)&65535),y=(b>>>16)+(this.i(x)>>>16)+(v.i(x)>>>16);w=y>>>16,b&=65535,y&=65535,_[x]=y<<16|b}return new r(_,_[_.length-1]&-2147483648?-1:0)};function T(v,M){return v.add(P(M))}c.j=function(v){if(A(this)||A(v))return m;if(R(this))return R(v)?P(this).j(P(v)):P(P(this).j(v));if(R(v))return P(this.j(P(v)));if(0>this.l(z)&&0>v.l(z))return u(this.m()*v.m());for(var M=this.g.length+v.g.length,_=[],w=0;w<2*M;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var x=0;x<v.g.length;x++){var b=this.i(w)>>>16,y=this.i(w)&65535,L1=v.i(x)>>>16,k1=v.i(x)&65535;_[2*w+2*x]+=y*k1,S(_,2*w+2*x),_[2*w+2*x+1]+=b*k1,S(_,2*w+2*x+1),_[2*w+2*x+1]+=y*L1,S(_,2*w+2*x+1),_[2*w+2*x+2]+=b*L1,S(_,2*w+2*x+2)}for(w=0;w<M;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=M;w<2*M;w++)_[w]=0;return new r(_,0)};function S(v,M){for(;(v[M]&65535)!=v[M];)v[M+1]+=v[M]>>>16,v[M]&=65535,M++}function O(v,M){this.g=v,this.h=M}function B(v,M){if(A(M))throw Error("division by zero");if(A(v))return new O(m,m);if(R(v))return M=B(P(v),M),new O(P(M.g),P(M.h));if(R(M))return M=B(v,P(M)),new O(P(M.g),M.h);if(30<v.g.length){if(R(v)||R(M))throw Error("slowDivide_ only works with positive integers.");for(var _=p,w=M;0>=w.l(v);)_=s2(_),w=s2(w);var x=f2(_,1),b=f2(w,1);for(w=f2(w,2),_=f2(_,2);!A(w);){var y=b.add(w);0>=y.l(v)&&(x=x.add(_),b=y),w=f2(w,1),_=f2(_,1)}return M=T(v,x.j(M)),new O(x,M)}for(x=m;0<=v.l(M);){for(_=Math.max(1,Math.floor(v.m()/M.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),b=u(_),y=b.j(M);R(y)||0<y.l(v);)_-=w,b=u(_),y=b.j(M);A(b)&&(b=p),x=x.add(b),v=T(v,y)}return new O(x,v)}c.A=function(v){return B(this,v).h},c.and=function(v){for(var M=Math.max(this.g.length,v.g.length),_=[],w=0;w<M;w++)_[w]=this.i(w)&v.i(w);return new r(_,this.h&v.h)},c.or=function(v){for(var M=Math.max(this.g.length,v.g.length),_=[],w=0;w<M;w++)_[w]=this.i(w)|v.i(w);return new r(_,this.h|v.h)},c.xor=function(v){for(var M=Math.max(this.g.length,v.g.length),_=[],w=0;w<M;w++)_[w]=this.i(w)^v.i(w);return new r(_,this.h^v.h)};function s2(v){for(var M=v.g.length+1,_=[],w=0;w<M;w++)_[w]=v.i(w)<<1|v.i(w-1)>>>31;return new r(_,v.h)}function f2(v,M){var _=M>>5;M%=32;for(var w=v.g.length-_,x=[],b=0;b<w;b++)x[b]=0<M?v.i(b+_)>>>M|v.i(b+_+1)<<32-M:v.i(b+_);return new r(x,v.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,go=s,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=u,r.fromString=h,x4=r}).apply(typeof Ki<"u"?Ki:typeof self<"u"?self:typeof window<"u"?window:{});var Ie=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lo,zo,t6,Mo,We,Ut,Co,yo,_o;(function(){var c,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,d){return l==Array.prototype||l==Object.prototype||(l[f]=d.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ie=="object"&&Ie];for(var f=0;f<l.length;++f){var d=l[f];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function n(l,f){if(f)e:{var d=s;l=l.split(".");for(var g=0;g<l.length-1;g++){var N=l[g];if(!(N in d))break e;d=d[N]}l=l[l.length-1],g=d[l],f=f(g),f!=g&&f!=null&&e(d,l,{configurable:!0,writable:!0,value:f})}}function i(l,f){l instanceof String&&(l+="");var d=0,g=!1,N={next:function(){if(!g&&d<l.length){var I=d++;return{value:f(I,l[I]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}n("Array.prototype.values",function(l){return l||function(){return i(this,function(f,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function a(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function u(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,d){return l.call.apply(l.bind,arguments)}function m(l,f,d){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,g),l.apply(f,N)}}return function(){return l.apply(f,arguments)}}function p(l,f,d){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:m,p.apply(null,arguments)}function z(l,f){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function A(l,f){function d(){}d.prototype=f.prototype,l.aa=f.prototype,l.prototype=new d,l.prototype.constructor=l,l.Qb=function(g,N,I){for(var $=Array(arguments.length-2),E2=2;E2<arguments.length;E2++)$[E2-2]=arguments[E2];return f.prototype[N].apply(g,$)}}function R(l){const f=l.length;if(0<f){const d=Array(f);for(let g=0;g<f;g++)d[g]=l[g];return d}return[]}function P(l,f){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(a(g)){const N=l.length||0,I=g.length||0;l.length=N+I;for(let $=0;$<I;$++)l[N+$]=g[$]}else l.push(g)}}class T{constructor(f,d){this.i=f,this.j=d,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function S(l){return/^[\s\xa0]*$/.test(l)}function O(){var l=o.navigator;return l&&(l=l.userAgent)?l:""}function B(l){return B[" "](l),l}B[" "]=function(){};var s2=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function f2(l,f,d){for(const g in l)f.call(d,l[g],g,l)}function v(l,f){for(const d in l)f.call(void 0,l[d],d,l)}function M(l){const f={};for(const d in l)f[d]=l[d];return f}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(l,f){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)l[d]=g[d];for(let I=0;I<_.length;I++)d=_[I],Object.prototype.hasOwnProperty.call(g,d)&&(l[d]=g[d])}}function x(l){var f=1;l=l.split(":");const d=[];for(;0<f&&l.length;)d.push(l.shift()),f--;return l.length&&d.push(l.join(":")),d}function b(l){o.setTimeout(()=>{throw l},0)}function y(){var l=b1;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class L1{constructor(){this.h=this.g=null}add(f,d){const g=k1.get();g.set(f,d),this.h?this.h.next=g:this.g=g,this.h=g}}var k1=new T(()=>new H2,l=>l.reset());class H2{constructor(){this.next=this.g=this.h=null}set(f,d){this.h=f,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let L2,m2=!1,b1=new L1,U1=()=>{const l=o.Promise.resolve(void 0);L2=()=>{l.then(D1)}};var D1=()=>{for(var l;l=y();){try{l.h.call(l.g)}catch(d){b(d)}var f=k1;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}m2=!1};function O2(){this.s=this.s,this.C=this.C}O2.prototype.s=!1,O2.prototype.ma=function(){this.s||(this.s=!0,this.N())},O2.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function V2(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}V2.prototype.h=function(){this.defaultPrevented=!0};var I3=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const d=()=>{};o.addEventListener("test",d,f),o.removeEventListener("test",d,f)}catch{}return l}();function G1(l,f){if(V2.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var d=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(s2){e:{try{B(f.nodeName);var N=!0;break e}catch{}N=!1}N||(f=null)}}else d=="mouseover"?f=l.fromElement:d=="mouseout"&&(f=l.toElement);this.relatedTarget=f,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:v1[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&G1.aa.h.call(this)}}A(G1,V2);var v1={2:"touch",3:"pen",4:"mouse"};G1.prototype.h=function(){G1.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),Y=0;function K(l,f,d,g,N){this.listener=l,this.proxy=null,this.src=f,this.type=d,this.capture=!!g,this.ha=N,this.key=++Y,this.da=this.fa=!1}function X(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function z2(l){this.src=l,this.g={},this.h=0}z2.prototype.add=function(l,f,d,g,N){var I=l.toString();l=this.g[I],l||(l=this.g[I]=[],this.h++);var $=L(l,f,g,N);return-1<$?(f=l[$],d||(f.fa=!1)):(f=new K(f,this.src,I,!!g,N),f.fa=d,l.push(f)),f};function N2(l,f){var d=f.type;if(d in l.g){var g=l.g[d],N=Array.prototype.indexOf.call(g,f,void 0),I;(I=0<=N)&&Array.prototype.splice.call(g,N,1),I&&(X(f),l.g[d].length==0&&(delete l.g[d],l.h--))}}function L(l,f,d,g){for(var N=0;N<l.length;++N){var I=l[N];if(!I.da&&I.listener==f&&I.capture==!!d&&I.ha==g)return N}return-1}var C="closure_lm_"+(1e6*Math.random()|0),E={};function V(l,f,d,g,N){if(Array.isArray(f)){for(var I=0;I<f.length;I++)V(l,f[I],d,g,N);return null}return d=c2(d),l&&l[D]?l.K(f,d,u(g)?!!g.capture:!!g,N):k(l,f,d,!1,g,N)}function k(l,f,d,g,N,I){if(!f)throw Error("Invalid event type");var $=u(N)?!!N.capture:!!N,E2=n2(l);if(E2||(l[C]=E2=new z2(l)),d=E2.add(f,d,g,$,I),d.proxy)return d;if(g=H(),d.proxy=g,g.src=l,g.listener=d,l.addEventListener)I3||(N=$),N===void 0&&(N=!1),l.addEventListener(f.toString(),g,N);else if(l.attachEvent)l.attachEvent(j(f.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function H(){function l(d){return f.call(l.src,l.listener,d)}const f=q;return l}function G(l,f,d,g,N){if(Array.isArray(f))for(var I=0;I<f.length;I++)G(l,f[I],d,g,N);else g=u(g)?!!g.capture:!!g,d=c2(d),l&&l[D]?(l=l.i,f=String(f).toString(),f in l.g&&(I=l.g[f],d=L(I,d,g,N),-1<d&&(X(I[d]),Array.prototype.splice.call(I,d,1),I.length==0&&(delete l.g[f],l.h--)))):l&&(l=n2(l))&&(f=l.g[f.toString()],l=-1,f&&(l=L(f,d,g,N)),(d=-1<l?f[l]:null)&&W(d))}function W(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[D])N2(f.i,l);else{var d=l.type,g=l.proxy;f.removeEventListener?f.removeEventListener(d,g,l.capture):f.detachEvent?f.detachEvent(j(d),g):f.addListener&&f.removeListener&&f.removeListener(g),(d=n2(f))?(N2(d,l),d.h==0&&(d.src=null,f[C]=null)):X(l)}}}function j(l){return l in E?E[l]:E[l]="on"+l}function q(l,f){if(l.da)l=!0;else{f=new G1(f,this);var d=l.listener,g=l.ha||l.src;l.fa&&W(l),l=d.call(g,f)}return l}function n2(l){return l=l[C],l instanceof z2?l:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function c2(l){return typeof l=="function"?l:(l[Q]||(l[Q]=function(f){return l.handleEvent(f)}),l[Q])}function J(){O2.call(this),this.i=new z2(this),this.M=this,this.F=null}A(J,O2),J.prototype[D]=!0,J.prototype.removeEventListener=function(l,f,d,g){G(this,l,f,d,g)};function r2(l,f){var d,g=l.F;if(g)for(d=[];g;g=g.F)d.push(g);if(l=l.M,g=f.type||f,typeof f=="string")f=new V2(f,l);else if(f instanceof V2)f.target=f.target||l;else{var N=f;f=new V2(g,l),w(f,N)}if(N=!0,d)for(var I=d.length-1;0<=I;I--){var $=f.g=d[I];N=v2($,g,!0,f)&&N}if($=f.g=l,N=v2($,g,!0,f)&&N,N=v2($,g,!1,f)&&N,d)for(I=0;I<d.length;I++)$=f.g=d[I],N=v2($,g,!1,f)&&N}J.prototype.N=function(){if(J.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var d=l.g[f],g=0;g<d.length;g++)X(d[g]);delete l.g[f],l.h--}}this.F=null},J.prototype.K=function(l,f,d,g){return this.i.add(String(l),f,!1,d,g)},J.prototype.L=function(l,f,d,g){return this.i.add(String(l),f,!0,d,g)};function v2(l,f,d,g){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var N=!0,I=0;I<f.length;++I){var $=f[I];if($&&!$.da&&$.capture==d){var E2=$.listener,Y2=$.ha||$.src;$.fa&&N2(l.i,$),N=E2.call(Y2,g)!==!1&&N}}return N&&!g.defaultPrevented}function C2(l,f,d){if(typeof l=="function")d&&(l=p(l,d));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:o.setTimeout(l,f||0)}function n1(l){l.g=C2(()=>{l.g=null,l.i&&(l.i=!1,n1(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class G2 extends O2{constructor(f,d){super(),this.m=f,this.l=d,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:n1(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Q2(l){O2.call(this),this.h=l,this.g={}}A(Q2,O2);var i1=[];function R3(l){f2(l.g,function(f,d){this.g.hasOwnProperty(d)&&W(f)},l),l.g={}}Q2.prototype.N=function(){Q2.aa.N.call(this),R3(this)},Q2.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var B4=o.JSON.stringify,z1=o.JSON.parse,O1=class{stringify(l){return o.JSON.stringify(l,void 0)}parse(l){return o.JSON.parse(l,void 0)}};function H4(){}H4.prototype.h=null;function S7(l){return l.h||(l.h=l.i())}function I7(){}var P0={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vc(){V2.call(this,"d")}A(vc,V2);function wc(){V2.call(this,"c")}A(wc,V2);var m4={},R7=null;function fe(){return R7=R7||new J}m4.La="serverreachability";function P7(l){V2.call(this,m4.La,l)}A(P7,V2);function k0(l){const f=fe();r2(f,new P7(f))}m4.STAT_EVENT="statevent";function k7(l,f){V2.call(this,m4.STAT_EVENT,l),this.stat=f}A(k7,V2);function M1(l){const f=fe();r2(f,new k7(f,l))}m4.Ma="timingevent";function D7(l,f){V2.call(this,m4.Ma,l),this.size=f}A(D7,V2);function D0(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){l()},f)}function O0(){this.g=!0}O0.prototype.xa=function(){this.g=!1};function QL(l,f,d,g,N,I){l.info(function(){if(l.g)if(I)for(var $="",E2=I.split("&"),Y2=0;Y2<E2.length;Y2++){var y2=E2[Y2].split("=");if(1<y2.length){var r1=y2[0];y2=y2[1];var l1=r1.split("_");$=2<=l1.length&&l1[1]=="type"?$+(r1+"="+y2+"&"):$+(r1+"=redacted&")}}else $=null;else $=I;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+f+`
`+d+`
`+$})}function YL(l,f,d,g,N,I,$){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+f+`
`+d+`
`+I+" "+$})}function q4(l,f,d,g){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+JL(l,d)+(g?" "+g:"")})}function XL(l,f){l.info(function(){return"TIMEOUT: "+f})}O0.prototype.info=function(){};function JL(l,f){if(!l.g)return f;if(!f)return null;try{var d=JSON.parse(f);if(d){for(l=0;l<d.length;l++)if(Array.isArray(d[l])){var g=d[l];if(!(2>g.length)){var N=g[1];if(Array.isArray(N)&&!(1>N.length)){var I=N[0];if(I!="noop"&&I!="stop"&&I!="close")for(var $=1;$<N.length;$++)N[$]=""}}}}return B4(d)}catch{return f}}var ue={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},O7={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xc;function he(){}A(he,H4),he.prototype.g=function(){return new XMLHttpRequest},he.prototype.i=function(){return{}},xc=new he;function P3(l,f,d,g){this.j=l,this.i=f,this.l=d,this.R=g||1,this.U=new Q2(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new V7}function V7(){this.i=null,this.g="",this.h=!1}var F7={},bc={};function Nc(l,f,d){l.L=1,l.v=ge(f3(f)),l.m=d,l.P=!0,U7(l,null)}function U7(l,f){l.F=Date.now(),de(l),l.A=f3(l.v);var d=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),en(d.i,"t",g),l.C=0,d=l.j.J,l.h=new V7,l.g=Mn(l.j,d?f:null,!l.m),0<l.O&&(l.M=new G2(p(l.Y,l,l.g),l.O)),f=l.U,d=l.g,g=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(i1[0]=N.toString()),N=i1);for(var I=0;I<N.length;I++){var $=V(d,N[I],g||f.handleEvent,!1,f.h||f);if(!$)break;f.g[$.key]=$}f=l.H?M(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),k0(),QL(l.i,l.u,l.A,l.l,l.R,l.m)}P3.prototype.ca=function(l){l=l.target;const f=this.M;f&&u3(l)==3?f.j():this.Y(l)},P3.prototype.Y=function(l){try{if(l==this.g)e:{const l1=u3(this.g);var f=this.g.Ba();const $4=this.g.Z();if(!(3>l1)&&(l1!=3||this.g&&(this.h.h||this.g.oa()||on(this.g)))){this.J||l1!=4||f==7||(f==8||0>=$4?k0(3):k0(2)),Ec(this);var d=this.g.Z();this.X=d;c:if(B7(this)){var g=on(this.g);l="";var N=g.length,I=u3(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){p4(this),V0(this);var $="";break c}this.h.i=new o.TextDecoder}for(f=0;f<N;f++)this.h.h=!0,l+=this.h.i.decode(g[f],{stream:!(I&&f==N-1)});g.length=0,this.h.g+=l,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=d==200,YL(this.i,this.u,this.A,this.l,this.R,l1,d),this.o){if(this.T&&!this.K){c:{if(this.g){var E2,Y2=this.g;if((E2=Y2.g?Y2.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(E2)){var y2=E2;break c}}y2=null}if(d=y2)q4(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ac(this,d);else{this.o=!1,this.s=3,M1(12),p4(this),V0(this);break e}}if(this.P){d=!0;let B1;for(;!this.J&&this.C<$.length;)if(B1=ZL(this,$),B1==bc){l1==4&&(this.s=4,M1(14),d=!1),q4(this.i,this.l,null,"[Incomplete Response]");break}else if(B1==F7){this.s=4,M1(15),q4(this.i,this.l,$,"[Invalid Chunk]"),d=!1;break}else q4(this.i,this.l,B1,null),Ac(this,B1);if(B7(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),l1!=4||$.length!=0||this.h.h||(this.s=1,M1(16),d=!1),this.o=this.o&&d,!d)q4(this.i,this.l,$,"[Invalid Chunked Response]"),p4(this),V0(this);else if(0<$.length&&!this.W){this.W=!0;var r1=this.j;r1.g==this&&r1.ba&&!r1.M&&(r1.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),kc(r1),r1.M=!0,M1(11))}}else q4(this.i,this.l,$,null),Ac(this,$);l1==4&&p4(this),this.o&&!this.J&&(l1==4?pn(this.j,this):(this.o=!1,de(this)))}else gz(this.g),d==400&&0<$.indexOf("Unknown SID")?(this.s=3,M1(12)):(this.s=0,M1(13)),p4(this),V0(this)}}}catch{}finally{}};function B7(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function ZL(l,f){var d=l.C,g=f.indexOf(`
`,d);return g==-1?bc:(d=Number(f.substring(d,g)),isNaN(d)?F7:(g+=1,g+d>f.length?bc:(f=f.slice(g,g+d),l.C=g+d,f)))}P3.prototype.cancel=function(){this.J=!0,p4(this)};function de(l){l.S=Date.now()+l.I,H7(l,l.I)}function H7(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=D0(p(l.ba,l),f)}function Ec(l){l.B&&(o.clearTimeout(l.B),l.B=null)}P3.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(XL(this.i,this.A),this.L!=2&&(k0(),M1(17)),p4(this),this.s=2,V0(this)):H7(this,this.S-l)};function V0(l){l.j.G==0||l.J||pn(l.j,l)}function p4(l){Ec(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,R3(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Ac(l,f){try{var d=l.j;if(d.G!=0&&(d.g==l||Tc(d.h,l))){if(!l.K&&Tc(d.h,l)&&d.G==3){try{var g=d.Da.g.parse(f)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<l.F)ye(d),Me(d);else break e;Pc(d),M1(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=D0(p(d.Za,d),6e3));if(1>=W7(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else L4(d,11)}else if((l.K||d.g==l)&&ye(d),!S(f))for(N=d.Da.g.parse(f),f=0;f<N.length;f++){let y2=N[f];if(d.T=y2[0],y2=y2[1],d.G==2)if(y2[0]=="c"){d.K=y2[1],d.ia=y2[2];const r1=y2[3];r1!=null&&(d.la=r1,d.j.info("VER="+d.la));const l1=y2[4];l1!=null&&(d.Aa=l1,d.j.info("SVER="+d.Aa));const $4=y2[5];$4!=null&&typeof $4=="number"&&0<$4&&(g=1.5*$4,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const B1=l.g;if(B1){const ve=B1.g?B1.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ve){var I=g.h;I.g||ve.indexOf("spdy")==-1&&ve.indexOf("quic")==-1&&ve.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Sc(I,I.h),I.h=null))}if(g.D){const Dc=B1.g?B1.g.getResponseHeader("X-HTTP-Session-Id"):null;Dc&&(g.ya=Dc,I2(g.I,g.D,Dc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-l.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var $=l;if(g.qa=zn(g,g.J?g.ia:null,g.W),$.K){$7(g.h,$);var E2=$,Y2=g.L;Y2&&(E2.I=Y2),E2.B&&(Ec(E2),de(E2)),g.g=$}else dn(g);0<d.i.length&&Ce(d)}else y2[0]!="stop"&&y2[0]!="close"||L4(d,7);else d.G==3&&(y2[0]=="stop"||y2[0]=="close"?y2[0]=="stop"?L4(d,7):Rc(d):y2[0]!="noop"&&d.l&&d.l.ta(y2),d.v=0)}}k0(4)}catch{}}var ez=class{constructor(l,f){this.g=l,this.map=f}};function q7(l){this.l=l||10,o.PerformanceNavigationTiming?(l=o.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function j7(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function W7(l){return l.h?1:l.g?l.g.size:0}function Tc(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Sc(l,f){l.g?l.g.add(f):l.h=f}function $7(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}q7.prototype.cancel=function(){if(this.i=G7(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function G7(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const d of l.g.values())f=f.concat(d.D);return f}return R(l.i)}function cz(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(a(l)){for(var f=[],d=l.length,g=0;g<d;g++)f.push(l[g]);return f}f=[],d=0;for(g in l)f[d++]=l[g];return f}function tz(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(a(l)||typeof l=="string"){var f=[];l=l.length;for(var d=0;d<l;d++)f.push(d);return f}f=[],d=0;for(const g in l)f[d++]=g;return f}}}function K7(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(a(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var d=tz(l),g=cz(l),N=g.length,I=0;I<N;I++)f.call(void 0,g[I],d&&d[I],l)}var Q7=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sz(l,f){if(l){l=l.split("&");for(var d=0;d<l.length;d++){var g=l[d].indexOf("="),N=null;if(0<=g){var I=l[d].substring(0,g);N=l[d].substring(g+1)}else I=l[d];f(I,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function g4(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof g4){this.h=l.h,me(this,l.j),this.o=l.o,this.g=l.g,pe(this,l.s),this.l=l.l;var f=l.i,d=new B0;d.i=f.i,f.g&&(d.g=new Map(f.g),d.h=f.h),Y7(this,d),this.m=l.m}else l&&(f=String(l).match(Q7))?(this.h=!1,me(this,f[1]||"",!0),this.o=F0(f[2]||""),this.g=F0(f[3]||"",!0),pe(this,f[4]),this.l=F0(f[5]||"",!0),Y7(this,f[6]||"",!0),this.m=F0(f[7]||"")):(this.h=!1,this.i=new B0(null,this.h))}g4.prototype.toString=function(){var l=[],f=this.j;f&&l.push(U0(f,X7,!0),":");var d=this.g;return(d||f=="file")&&(l.push("//"),(f=this.o)&&l.push(U0(f,X7,!0),"@"),l.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&l.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&l.push("/"),l.push(U0(d,d.charAt(0)=="/"?rz:iz,!0))),(d=this.i.toString())&&l.push("?",d),(d=this.m)&&l.push("#",U0(d,oz)),l.join("")};function f3(l){return new g4(l)}function me(l,f,d){l.j=d?F0(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function pe(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Y7(l,f,d){f instanceof B0?(l.i=f,az(l.i,l.h)):(d||(f=U0(f,lz)),l.i=new B0(f,l.h))}function I2(l,f,d){l.i.set(f,d)}function ge(l){return I2(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function F0(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function U0(l,f,d){return typeof l=="string"?(l=encodeURI(l).replace(f,nz),d&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function nz(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var X7=/[#\/\?@]/g,iz=/[#\?:]/g,rz=/[#\?]/g,lz=/[#\?@]/g,oz=/#/g;function B0(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function k3(l){l.g||(l.g=new Map,l.h=0,l.i&&sz(l.i,function(f,d){l.add(decodeURIComponent(f.replace(/\+/g," ")),d)}))}c=B0.prototype,c.add=function(l,f){k3(this),this.i=null,l=j4(this,l);var d=this.g.get(l);return d||this.g.set(l,d=[]),d.push(f),this.h+=1,this};function J7(l,f){k3(l),f=j4(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Z7(l,f){return k3(l),f=j4(l,f),l.g.has(f)}c.forEach=function(l,f){k3(this),this.g.forEach(function(d,g){d.forEach(function(N){l.call(f,N,g,this)},this)},this)},c.na=function(){k3(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),d=[];for(let g=0;g<f.length;g++){const N=l[g];for(let I=0;I<N.length;I++)d.push(f[g])}return d},c.V=function(l){k3(this);let f=[];if(typeof l=="string")Z7(this,l)&&(f=f.concat(this.g.get(j4(this,l))));else{l=Array.from(this.g.values());for(let d=0;d<l.length;d++)f=f.concat(l[d])}return f},c.set=function(l,f){return k3(this),this.i=null,l=j4(this,l),Z7(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},c.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function en(l,f,d){J7(l,f),0<d.length&&(l.i=null,l.g.set(j4(l,f),R(d)),l.h+=d.length)}c.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var d=0;d<f.length;d++){var g=f[d];const I=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var N=I;$[g]!==""&&(N+="="+encodeURIComponent(String($[g]))),l.push(N)}}return this.i=l.join("&")};function j4(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function az(l,f){f&&!l.j&&(k3(l),l.i=null,l.g.forEach(function(d,g){var N=g.toLowerCase();g!=N&&(J7(this,g),en(this,N,d))},l)),l.j=f}function fz(l,f){const d=new O0;if(o.Image){const g=new Image;g.onload=z(D3,d,"TestLoadImage: loaded",!0,f,g),g.onerror=z(D3,d,"TestLoadImage: error",!1,f,g),g.onabort=z(D3,d,"TestLoadImage: abort",!1,f,g),g.ontimeout=z(D3,d,"TestLoadImage: timeout",!1,f,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else f(!1)}function uz(l,f){const d=new O0,g=new AbortController,N=setTimeout(()=>{g.abort(),D3(d,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:g.signal}).then(I=>{clearTimeout(N),I.ok?D3(d,"TestPingServer: ok",!0,f):D3(d,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(N),D3(d,"TestPingServer: error",!1,f)})}function D3(l,f,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function hz(){this.g=new O1}function dz(l,f,d){const g=d||"";try{K7(l,function(N,I){let $=N;u(N)&&($=B4(N)),f.push(g+I+"="+encodeURIComponent($))})}catch(N){throw f.push(g+"type="+encodeURIComponent("_badmap")),N}}function H0(l){this.l=l.Ub||null,this.j=l.eb||!1}A(H0,H4),H0.prototype.g=function(){return new Le(this.l,this.j)},H0.prototype.i=function(l){return function(){return l}}({});function Le(l,f){J.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Le,J),c=Le.prototype,c.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,j0(this)},c.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||o).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},c.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,q0(this)),this.readyState=0},c.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,j0(this)),this.g&&(this.readyState=3,j0(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cn(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function cn(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}c.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?q0(this):j0(this),this.readyState==3&&cn(this)}},c.Ra=function(l){this.g&&(this.response=this.responseText=l,q0(this))},c.Qa=function(l){this.g&&(this.response=l,q0(this))},c.ga=function(){this.g&&q0(this)};function q0(l){l.readyState=4,l.l=null,l.j=null,l.v=null,j0(l)}c.setRequestHeader=function(l,f){this.u.append(l,f)},c.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},c.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var d=f.next();!d.done;)d=d.value,l.push(d[0]+": "+d[1]),d=f.next();return l.join(`\r
`)};function j0(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Le.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function tn(l){let f="";return f2(l,function(d,g){f+=g,f+=":",f+=d,f+=`\r
`}),f}function Ic(l,f,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=tn(d),typeof l=="string"?d!=null&&encodeURIComponent(String(d)):I2(l,f,d))}function U2(l){J.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(U2,J);var mz=/^https?$/i,pz=["POST","PUT"];c=U2.prototype,c.Ha=function(l){this.J=l},c.ea=function(l,f,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xc.g(),this.v=this.o?S7(this.o):S7(xc),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(I){sn(this,I);return}if(l=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const I of g.keys())d.set(I,g.get(I));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(I=>I.toLowerCase()=="content-type"),N=o.FormData&&l instanceof o.FormData,!(0<=Array.prototype.indexOf.call(pz,f,void 0))||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,$]of d)this.g.setRequestHeader(I,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ln(this),this.u=!0,this.g.send(l),this.u=!1}catch(I){sn(this,I)}};function sn(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,nn(l),ze(l)}function nn(l){l.A||(l.A=!0,r2(l,"complete"),r2(l,"error"))}c.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,r2(this,"complete"),r2(this,"abort"),ze(this))},c.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ze(this,!0)),U2.aa.N.call(this)},c.Ea=function(){this.s||(this.B||this.u||this.j?rn(this):this.bb())},c.bb=function(){rn(this)};function rn(l){if(l.h&&typeof r<"u"&&(!l.v[1]||u3(l)!=4||l.Z()!=2)){if(l.u&&u3(l)==4)C2(l.Ea,0,l);else if(r2(l,"readystatechange"),u3(l)==4){l.h=!1;try{const $=l.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var d;if(!(d=f)){var g;if(g=$===0){var N=String(l.D).match(Q7)[1]||null;!N&&o.self&&o.self.location&&(N=o.self.location.protocol.slice(0,-1)),g=!mz.test(N?N.toLowerCase():"")}d=g}if(d)r2(l,"complete"),r2(l,"success");else{l.m=6;try{var I=2<u3(l)?l.g.statusText:""}catch{I=""}l.l=I+" ["+l.Z()+"]",nn(l)}}finally{ze(l)}}}}function ze(l,f){if(l.g){ln(l);const d=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||r2(l,"ready");try{d.onreadystatechange=g}catch{}}}function ln(l){l.I&&(o.clearTimeout(l.I),l.I=null)}c.isActive=function(){return!!this.g};function u3(l){return l.g?l.g.readyState:0}c.Z=function(){try{return 2<u3(this)?this.g.status:-1}catch{return-1}},c.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},c.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),z1(f)}};function on(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function gz(l){const f={};l=(l.g&&2<=u3(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(S(l[g]))continue;var d=x(l[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const I=f[N]||[];f[N]=I,I.push(d)}v(f,function(g){return g.join(", ")})}c.Ba=function(){return this.m},c.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function W0(l,f,d){return d&&d.internalChannelParams&&d.internalChannelParams[l]||f}function an(l){this.Aa=0,this.i=[],this.j=new O0,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=W0("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=W0("baseRetryDelayMs",5e3,l),this.cb=W0("retryDelaySeedMs",1e4,l),this.Wa=W0("forwardChannelMaxRetries",2,l),this.wa=W0("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new q7(l&&l.concurrentRequestLimit),this.Da=new hz,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}c=an.prototype,c.la=8,c.G=1,c.connect=function(l,f,d,g){M1(0),this.W=l,this.H=f||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=zn(this,null,this.W),Ce(this)};function Rc(l){if(fn(l),l.G==3){var f=l.U++,d=f3(l.I);if(I2(d,"SID",l.K),I2(d,"RID",f),I2(d,"TYPE","terminate"),$0(l,d),f=new P3(l,l.j,f),f.L=2,f.v=ge(f3(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(f.v.toString(),"")}catch{}!d&&o.Image&&(new Image().src=f.v,d=!0),d||(f.g=Mn(f.j,null),f.g.ea(f.v)),f.F=Date.now(),de(f)}Ln(l)}function Me(l){l.g&&(kc(l),l.g.cancel(),l.g=null)}function fn(l){Me(l),l.u&&(o.clearTimeout(l.u),l.u=null),ye(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&o.clearTimeout(l.s),l.s=null)}function Ce(l){if(!j7(l.h)&&!l.s){l.s=!0;var f=l.Ga;L2||U1(),m2||(L2(),m2=!0),b1.add(f,l),l.B=0}}function Lz(l,f){return W7(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=D0(p(l.Ga,l,f),gn(l,l.B)),l.B++,!0)}c.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new P3(this,this.j,l);let I=this.o;if(this.S&&(I?(I=M(I),w(I,this.S)):I=this.S),this.m!==null||this.O||(N.H=I,I=null),this.P)e:{for(var f=0,d=0;d<this.i.length;d++){c:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break c}g=void 0}if(g===void 0)break;if(f+=g,4096<f){f=d;break e}if(f===4096||d===this.i.length-1){f=d+1;break e}}f=1e3}else f=1e3;f=hn(this,N,f),d=f3(this.I),I2(d,"RID",l),I2(d,"CVER",22),this.D&&I2(d,"X-HTTP-Session-Id",this.D),$0(this,d),I&&(this.O?f="headers="+encodeURIComponent(String(tn(I)))+"&"+f:this.m&&Ic(d,this.m,I)),Sc(this.h,N),this.Ua&&I2(d,"TYPE","init"),this.P?(I2(d,"$req",f),I2(d,"SID","null"),N.T=!0,Nc(N,d,null)):Nc(N,d,f),this.G=2}}else this.G==3&&(l?un(this,l):this.i.length==0||j7(this.h)||un(this))};function un(l,f){var d;f?d=f.l:d=l.U++;const g=f3(l.I);I2(g,"SID",l.K),I2(g,"RID",d),I2(g,"AID",l.T),$0(l,g),l.m&&l.o&&Ic(g,l.m,l.o),d=new P3(l,l.j,d,l.B+1),l.m===null&&(d.H=l.o),f&&(l.i=f.D.concat(l.i)),f=hn(l,d,1e3),d.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Sc(l.h,d),Nc(d,g,f)}function $0(l,f){l.H&&f2(l.H,function(d,g){I2(f,g,d)}),l.l&&K7({},function(d,g){I2(f,g,d)})}function hn(l,f,d){d=Math.min(l.i.length,d);var g=l.l?p(l.l.Na,l.l,l):null;e:{var N=l.i;let I=-1;for(;;){const $=["count="+d];I==-1?0<d?(I=N[0].g,$.push("ofs="+I)):I=0:$.push("ofs="+I);let E2=!0;for(let Y2=0;Y2<d;Y2++){let y2=N[Y2].g;const r1=N[Y2].map;if(y2-=I,0>y2)I=Math.max(0,N[Y2].g-100),E2=!1;else try{dz(r1,$,"req"+y2+"_")}catch{g&&g(r1)}}if(E2){g=$.join("&");break e}}}return l=l.i.splice(0,d),f.D=l,g}function dn(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;L2||U1(),m2||(L2(),m2=!0),b1.add(f,l),l.v=0}}function Pc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=D0(p(l.Fa,l),gn(l,l.v)),l.v++,!0)}c.Fa=function(){if(this.u=null,mn(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=D0(p(this.ab,this),l)}},c.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,M1(10),Me(this),mn(this))};function kc(l){l.A!=null&&(o.clearTimeout(l.A),l.A=null)}function mn(l){l.g=new P3(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=f3(l.qa);I2(f,"RID","rpc"),I2(f,"SID",l.K),I2(f,"AID",l.T),I2(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&I2(f,"TO",l.ja),I2(f,"TYPE","xmlhttp"),$0(l,f),l.m&&l.o&&Ic(f,l.m,l.o),l.L&&(l.g.I=l.L);var d=l.g;l=l.ia,d.L=1,d.v=ge(f3(f)),d.m=null,d.P=!0,U7(d,l)}c.Za=function(){this.C!=null&&(this.C=null,Me(this),Pc(this),M1(19))};function ye(l){l.C!=null&&(o.clearTimeout(l.C),l.C=null)}function pn(l,f){var d=null;if(l.g==f){ye(l),kc(l),l.g=null;var g=2}else if(Tc(l.h,f))d=f.D,$7(l.h,f),g=1;else return;if(l.G!=0){if(f.o)if(g==1){d=f.m?f.m.length:0,f=Date.now()-f.F;var N=l.B;g=fe(),r2(g,new D7(g,d)),Ce(l)}else dn(l);else if(N=f.s,N==3||N==0&&0<f.X||!(g==1&&Lz(l,f)||g==2&&Pc(l)))switch(d&&0<d.length&&(f=l.h,f.i=f.i.concat(d)),N){case 1:L4(l,5);break;case 4:L4(l,10);break;case 3:L4(l,6);break;default:L4(l,2)}}}function gn(l,f){let d=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(d*=2),d*f}function L4(l,f){if(l.j.info("Error code "+f),f==2){var d=p(l.fb,l),g=l.Xa;const N=!g;g=new g4(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||me(g,"https"),ge(g),N?fz(g.toString(),d):uz(g.toString(),d)}else M1(2);l.G=0,l.l&&l.l.sa(f),Ln(l),fn(l)}c.fb=function(l){l?(this.j.info("Successfully pinged google.com"),M1(2)):(this.j.info("Failed to ping google.com"),M1(1))};function Ln(l){if(l.G=0,l.ka=[],l.l){const f=G7(l.h);(f.length!=0||l.i.length!=0)&&(P(l.ka,f),P(l.ka,l.i),l.h.i.length=0,R(l.i),l.i.length=0),l.l.ra()}}function zn(l,f,d){var g=d instanceof g4?f3(d):new g4(d);if(g.g!="")f&&(g.g=f+"."+g.g),pe(g,g.s);else{var N=o.location;g=N.protocol,f=f?f+"."+N.hostname:N.hostname,N=+N.port;var I=new g4(null);g&&me(I,g),f&&(I.g=f),N&&pe(I,N),d&&(I.l=d),g=I}return d=l.D,f=l.ya,d&&f&&I2(g,d,f),I2(g,"VER",l.la),$0(l,g),g}function Mn(l,f,d){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new U2(new H0({eb:d})):new U2(l.pa),f.Ha(l.J),f}c.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cn(){}c=Cn.prototype,c.ua=function(){},c.ta=function(){},c.sa=function(){},c.ra=function(){},c.isActive=function(){return!0},c.Na=function(){};function _e(){}_e.prototype.g=function(l,f){return new N1(l,f)};function N1(l,f){J.call(this),this.g=new an(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!S(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!S(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new W4(this)}A(N1,J),N1.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},N1.prototype.close=function(){Rc(this.g)},N1.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var d={};d.__data__=l,l=d}else this.u&&(d={},d.__data__=B4(l),l=d);f.i.push(new ez(f.Ya++,l)),f.G==3&&Ce(f)},N1.prototype.N=function(){this.g.l=null,delete this.j,Rc(this.g),delete this.g,N1.aa.N.call(this)};function yn(l){vc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const d in f){l=d;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}A(yn,vc);function _n(){wc.call(this),this.status=1}A(_n,wc);function W4(l){this.g=l}A(W4,Cn),W4.prototype.ua=function(){r2(this.g,"a")},W4.prototype.ta=function(l){r2(this.g,new yn(l))},W4.prototype.sa=function(l){r2(this.g,new _n)},W4.prototype.ra=function(){r2(this.g,"b")},_e.prototype.createWebChannel=_e.prototype.g,N1.prototype.send=N1.prototype.o,N1.prototype.open=N1.prototype.m,N1.prototype.close=N1.prototype.close,_o=function(){return new _e},yo=function(){return fe()},Co=m4,Ut={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ue.NO_ERROR=0,ue.TIMEOUT=8,ue.HTTP_ERROR=6,We=ue,O7.COMPLETE="complete",Mo=O7,I7.EventType=P0,P0.OPEN="a",P0.CLOSE="b",P0.ERROR="c",P0.MESSAGE="d",J.prototype.listen=J.prototype.K,t6=I7,zo=H0,U2.prototype.listenOnce=U2.prototype.L,U2.prototype.getLastError=U2.prototype.Ka,U2.prototype.getLastErrorCode=U2.prototype.Ba,U2.prototype.getStatus=U2.prototype.Z,U2.prototype.getResponseJson=U2.prototype.Oa,U2.prototype.getResponseText=U2.prototype.oa,U2.prototype.send=U2.prototype.ea,U2.prototype.setWithCredentials=U2.prototype.Ha,Lo=U2}).apply(typeof Ie<"u"?Ie:typeof self<"u"?self:typeof window<"u"?window:{});const Qi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}a1.UNAUTHENTICATED=new a1(null),a1.GOOGLE_CREDENTIALS=new a1("google-credentials-uid"),a1.FIRST_PARTY=new a1("first-party-uid"),a1.MOCK_USER=new a1("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T0="10.13.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4=new V5("@firebase/firestore");function X0(){return I4.logLevel}function Z(c,...e){if(I4.logLevel<=g2.DEBUG){const t=e.map(J5);I4.debug(`Firestore (${T0}): ${c}`,...t)}}function w3(c,...e){if(I4.logLevel<=g2.ERROR){const t=e.map(J5);I4.error(`Firestore (${T0}): ${c}`,...t)}}function z0(c,...e){if(I4.logLevel<=g2.WARN){const t=e.map(J5);I4.warn(`Firestore (${T0}): ${c}`,...t)}}function J5(c){if(typeof c=="string")return c;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(c)}catch{return c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(c="Unexpected state"){const e=`FIRESTORE (${T0}) INTERNAL ASSERTION FAILED: `+c;throw w3(e),new Error(e)}function S2(c,e){c||o2()}function h2(c,e){return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class t2 extends T3{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y3{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(a1.UNAUTHENTICATED))}shutdown(){}}class $x{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Gx{constructor(e){this.t=e,this.currentUser=a1.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const n=a=>this.i!==s?(s=this.i,t(a)):Promise.resolve();let i=new y3;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new y3,e.enqueueRetryable(()=>n(this.currentUser))};const r=()=>{const a=i;e.enqueueRetryable(async()=>{await a.promise,await n(this.currentUser)})},o=a=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit(a=>o(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?o(a):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new y3)}},0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(S2(typeof s.accessToken=="string"),new vo(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return S2(e===null||typeof e=="string"),new a1(e)}}class Kx{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=a1.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Qx{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new Kx(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(a1.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const s=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const r=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const n=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>n(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?n(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(S2(typeof t.token=="string"),this.R=t.token,new Yx(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(c){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(c);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<c;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const n=Jx(40);for(let i=0;i<n.length;++i)s.length<20&&n[i]<t&&(s+=e.charAt(n[i]%e.length))}return s}}function _2(c,e){return c<e?-1:c>e?1:0}function M0(c,e,t){return c.length===e.length&&c.every((s,n)=>t(s,e[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new t2(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new t2(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new t2(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new t2(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $2.fromMillis(Date.now())}static fromDate(e){return $2.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new $2(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_2(this.nanoseconds,e.nanoseconds):_2(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.timestamp=e}static fromTimestamp(e){return new u2(e)}static min(){return new u2(new $2(0,0))}static max(){return new u2(new $2(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P6{constructor(e,t,s){t===void 0?t=0:t>e.length&&o2(),s===void 0?s=e.length-t:s>e.length-t&&o2(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return P6.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof P6?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let n=0;n<s;n++){const i=e.get(n),r=t.get(n);if(i<r)return-1;if(i>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class P2 extends P6{construct(e,t,s){return new P2(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new t2(F.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(n=>n.length>0))}return new P2(t)}static emptyPath(){return new P2([])}}const Zx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z2 extends P6{construct(e,t,s){return new Z2(e,t,s)}static isValidIdentifier(e){return Zx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z2.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z2(["__name__"])}static fromServerFormat(e){const t=[];let s="",n=0;const i=()=>{if(s.length===0)throw new t2(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let r=!1;for(;n<e.length;){const o=e[n];if(o==="\\"){if(n+1===e.length)throw new t2(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const a=e[n+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new t2(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=a,n+=2}else o==="`"?(r=!r,n++):o!=="."||r?(s+=o,n++):(i(),n++)}if(i(),r)throw new t2(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Z2(t)}static emptyPath(){return new Z2([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e){this.path=e}static fromPath(e){return new i2(P2.fromString(e))}static fromName(e){return new i2(P2.fromString(e).popFirst(5))}static empty(){return new i2(P2.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&P2.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return P2.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new i2(new P2(e.slice()))}}function eb(c,e){const t=c.toTimestamp().seconds,s=c.toTimestamp().nanoseconds+1,n=u2.fromTimestamp(s===1e9?new $2(t+1,0):new $2(t,s));return new t4(n,i2.empty(),e)}function cb(c){return new t4(c.readTime,c.key,-1)}class t4{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new t4(u2.min(),i2.empty(),-1)}static max(){return new t4(u2.max(),i2.empty(),-1)}}function tb(c,e){let t=c.readTime.compareTo(e.readTime);return t!==0?t:(t=i2.comparator(c.documentKey,e.documentKey),t!==0?t:_2(c.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q6(c){if(c.code!==F.FAILED_PRECONDITION||c.message!==sb)throw c;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&o2(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U((s,n)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,n)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):U.reject(t)}static resolve(e){return new U((t,s)=>{t(e)})}static reject(e){return new U((t,s)=>{s(e)})}static waitFor(e){return new U((t,s)=>{let n=0,i=0,r=!1;e.forEach(o=>{++n,o.next(()=>{++i,r&&i===n&&t()},a=>s(a))}),r=!0,i===n&&t()})}static or(e){let t=U.resolve(!1);for(const s of e)t=t.next(n=>n?U.resolve(n):s());return t}static forEach(e,t){const s=[];return e.forEach((n,i)=>{s.push(t.call(this,n,i))}),this.waitFor(s)}static mapArray(e,t){return new U((s,n)=>{const i=e.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const u=a;t(e[u]).next(h=>{r[u]=h,++o,o===i&&s(r)},h=>n(h))}})}static doWhile(e,t){return new U((s,n)=>{const i=()=>{e()===!0?t().next(()=>{i()},n):s()};i()})}}function ib(c){const e=c.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Y6(c){return c.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z5{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Z5.oe=-1;function B8(c){return c==null}function h8(c){return c===0&&1/c==-1/0}function rb(c){return typeof c=="number"&&Number.isInteger(c)&&!h8(c)&&c<=Number.MAX_SAFE_INTEGER&&c>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(c){let e=0;for(const t in c)Object.prototype.hasOwnProperty.call(c,t)&&e++;return e}function F4(c,e){for(const t in c)Object.prototype.hasOwnProperty.call(c,t)&&e(t,c[t])}function xo(c){for(const e in c)if(Object.prototype.hasOwnProperty.call(c,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,t){this.comparator=e,this.root=t||X2.EMPTY}insert(e,t){return new F2(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,X2.BLACK,null,null))}remove(e){return new F2(this.comparator,this.root.remove(e,this.comparator).copy(null,null,X2.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const n=this.comparator(e,s.key);if(n===0)return t+s.left.size;n<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Re(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Re(this.root,e,this.comparator,!1)}getReverseIterator(){return new Re(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Re(this.root,e,this.comparator,!0)}}class Re{constructor(e,t,s,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class X2{constructor(e,t,s,n,i){this.key=e,this.value=t,this.color=s??X2.RED,this.left=n??X2.EMPTY,this.right=i??X2.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,n,i){return new X2(e??this.key,t??this.value,s??this.color,n??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let n=this;const i=s(e,n.key);return n=i<0?n.copy(null,null,null,n.left.insert(e,t,s),null):i===0?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,s)),n.fixUp()}removeMin(){if(this.left.isEmpty())return X2.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,n=this;if(t(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),t(e,n.key)===0){if(n.right.isEmpty())return X2.EMPTY;s=n.right.min(),n=n.copy(s.key,s.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,X2.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,X2.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw o2();const e=this.left.check();if(e!==this.right.check())throw o2();return e+(this.isRed()?0:1)}}X2.EMPTY=null,X2.RED=!0,X2.BLACK=!1;X2.EMPTY=new class{constructor(){this.size=0}get key(){throw o2()}get value(){throw o2()}get color(){throw o2()}get left(){throw o2()}get right(){throw o2()}copy(e,t,s,n,i){return this}insert(e,t,s){return new X2(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e){this.comparator=e,this.data=new F2(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const n=s.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xi(this.data.getIterator())}getIteratorFrom(e){return new Xi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof c1)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const n=t.getNext().key,i=s.getNext().key;if(this.comparator(n,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new c1(this.comparator);return t.data=e,t}}class Xi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.fields=e,e.sort(Z2.comparator)}static empty(){return new S1([])}unionWith(e){let t=new c1(Z2.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new S1(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return M0(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(n){try{return atob(n)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bo("Invalid base64 string: "+i):i}}(e);return new s1(t)}static fromUint8Array(e){const t=function(n){let i="";for(let r=0;r<n.length;++r)i+=String.fromCharCode(n[r]);return i}(e);return new s1(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let n=0;n<t.length;n++)s[n]=t.charCodeAt(n);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _2(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}s1.EMPTY_BYTE_STRING=new s1("");const lb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function s4(c){if(S2(!!c),typeof c=="string"){let e=0;const t=lb.exec(c);if(S2(!!t),t[1]){let n=t[1];n=(n+"000000000").substr(0,9),e=Number(n)}const s=new Date(c);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:B2(c.seconds),nanos:B2(c.nanos)}}function B2(c){return typeof c=="number"?c:typeof c=="string"?Number(c):0}function R4(c){return typeof c=="string"?s1.fromBase64String(c):s1.fromUint8Array(c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(c){var e,t;return((t=(((e=c==null?void 0:c.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function cs(c){const e=c.mapValue.fields.__previous_value__;return es(e)?cs(e):e}function k6(c){const e=s4(c.mapValue.fields.__local_write_time__.timestampValue);return new $2(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,t,s,n,i,r,o,a,u){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=n,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=u}}class D6{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new D6("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof D6&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function P4(c){return"nullValue"in c?0:"booleanValue"in c?1:"integerValue"in c||"doubleValue"in c?2:"timestampValue"in c?3:"stringValue"in c?5:"bytesValue"in c?6:"referenceValue"in c?7:"geoPointValue"in c?8:"arrayValue"in c?9:"mapValue"in c?es(c)?4:fb(c)?9007199254740991:ab(c)?10:11:o2()}function l3(c,e){if(c===e)return!0;const t=P4(c);if(t!==P4(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return c.booleanValue===e.booleanValue;case 4:return k6(c).isEqual(k6(e));case 3:return function(n,i){if(typeof n.timestampValue=="string"&&typeof i.timestampValue=="string"&&n.timestampValue.length===i.timestampValue.length)return n.timestampValue===i.timestampValue;const r=s4(n.timestampValue),o=s4(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(c,e);case 5:return c.stringValue===e.stringValue;case 6:return function(n,i){return R4(n.bytesValue).isEqual(R4(i.bytesValue))}(c,e);case 7:return c.referenceValue===e.referenceValue;case 8:return function(n,i){return B2(n.geoPointValue.latitude)===B2(i.geoPointValue.latitude)&&B2(n.geoPointValue.longitude)===B2(i.geoPointValue.longitude)}(c,e);case 2:return function(n,i){if("integerValue"in n&&"integerValue"in i)return B2(n.integerValue)===B2(i.integerValue);if("doubleValue"in n&&"doubleValue"in i){const r=B2(n.doubleValue),o=B2(i.doubleValue);return r===o?h8(r)===h8(o):isNaN(r)&&isNaN(o)}return!1}(c,e);case 9:return M0(c.arrayValue.values||[],e.arrayValue.values||[],l3);case 10:case 11:return function(n,i){const r=n.mapValue.fields||{},o=i.mapValue.fields||{};if(Yi(r)!==Yi(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!l3(r[a],o[a])))return!1;return!0}(c,e);default:return o2()}}function O6(c,e){return(c.values||[]).find(t=>l3(t,e))!==void 0}function C0(c,e){if(c===e)return 0;const t=P4(c),s=P4(e);if(t!==s)return _2(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return _2(c.booleanValue,e.booleanValue);case 2:return function(i,r){const o=B2(i.integerValue||i.doubleValue),a=B2(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(c,e);case 3:return Ji(c.timestampValue,e.timestampValue);case 4:return Ji(k6(c),k6(e));case 5:return _2(c.stringValue,e.stringValue);case 6:return function(i,r){const o=R4(i),a=R4(r);return o.compareTo(a)}(c.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const h=_2(o[u],a[u]);if(h!==0)return h}return _2(o.length,a.length)}(c.referenceValue,e.referenceValue);case 8:return function(i,r){const o=_2(B2(i.latitude),B2(r.latitude));return o!==0?o:_2(B2(i.longitude),B2(r.longitude))}(c.geoPointValue,e.geoPointValue);case 9:return Zi(c.arrayValue,e.arrayValue);case 10:return function(i,r){var o,a,u,h;const m=i.fields||{},p=r.fields||{},z=(o=m.value)===null||o===void 0?void 0:o.arrayValue,A=(a=p.value)===null||a===void 0?void 0:a.arrayValue,R=_2(((u=z==null?void 0:z.values)===null||u===void 0?void 0:u.length)||0,((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0);return R!==0?R:Zi(z,A)}(c.mapValue,e.mapValue);case 11:return function(i,r){if(i===Pe.mapValue&&r===Pe.mapValue)return 0;if(i===Pe.mapValue)return 1;if(r===Pe.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},h=Object.keys(u);a.sort(),h.sort();for(let m=0;m<a.length&&m<h.length;++m){const p=_2(a[m],h[m]);if(p!==0)return p;const z=C0(o[a[m]],u[h[m]]);if(z!==0)return z}return _2(a.length,h.length)}(c.mapValue,e.mapValue);default:throw o2()}}function Ji(c,e){if(typeof c=="string"&&typeof e=="string"&&c.length===e.length)return _2(c,e);const t=s4(c),s=s4(e),n=_2(t.seconds,s.seconds);return n!==0?n:_2(t.nanos,s.nanos)}function Zi(c,e){const t=c.values||[],s=e.values||[];for(let n=0;n<t.length&&n<s.length;++n){const i=C0(t[n],s[n]);if(i)return i}return _2(t.length,s.length)}function y0(c){return Bt(c)}function Bt(c){return"nullValue"in c?"null":"booleanValue"in c?""+c.booleanValue:"integerValue"in c?""+c.integerValue:"doubleValue"in c?""+c.doubleValue:"timestampValue"in c?function(t){const s=s4(t);return`time(${s.seconds},${s.nanos})`}(c.timestampValue):"stringValue"in c?c.stringValue:"bytesValue"in c?function(t){return R4(t).toBase64()}(c.bytesValue):"referenceValue"in c?function(t){return i2.fromName(t).toString()}(c.referenceValue):"geoPointValue"in c?function(t){return`geo(${t.latitude},${t.longitude})`}(c.geoPointValue):"arrayValue"in c?function(t){let s="[",n=!0;for(const i of t.values||[])n?n=!1:s+=",",s+=Bt(i);return s+"]"}(c.arrayValue):"mapValue"in c?function(t){const s=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of s)i?i=!1:n+=",",n+=`${r}:${Bt(t.fields[r])}`;return n+"}"}(c.mapValue):o2()}function Ht(c){return!!c&&"integerValue"in c}function ts(c){return!!c&&"arrayValue"in c}function er(c){return!!c&&"nullValue"in c}function cr(c){return!!c&&"doubleValue"in c&&isNaN(Number(c.doubleValue))}function $e(c){return!!c&&"mapValue"in c}function ab(c){var e,t;return((t=(((e=c==null?void 0:c.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function L6(c){if(c.geoPointValue)return{geoPointValue:Object.assign({},c.geoPointValue)};if(c.timestampValue&&typeof c.timestampValue=="object")return{timestampValue:Object.assign({},c.timestampValue)};if(c.mapValue){const e={mapValue:{fields:{}}};return F4(c.mapValue.fields,(t,s)=>e.mapValue.fields[t]=L6(s)),e}if(c.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(c.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=L6(c.arrayValue.values[t]);return e}return Object.assign({},c)}function fb(c){return(((c.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.value=e}static empty(){return new w1({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!$e(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=L6(t)}setAll(e){let t=Z2.emptyPath(),s={},n=[];e.forEach((r,o)=>{if(!t.isImmediateParentOf(o)){const a=this.getFieldsMap(t);this.applyChanges(a,s,n),s={},n=[],t=o.popLast()}r?s[o.lastSegment()]=L6(r):n.push(o.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,n)}delete(e){const t=this.field(e.popLast());$e(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return l3(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let n=t.mapValue.fields[e.get(s)];$e(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,s){F4(t,(n,i)=>e[n]=i);for(const n of s)delete e[n]}clone(){return new w1(L6(this.value))}}function No(c){const e=[];return F4(c.fields,(t,s)=>{const n=new Z2([t]);if($e(s)){const i=No(s.mapValue).fields;if(i.length===0)e.push(n);else for(const r of i)e.push(n.child(r))}else e.push(n)}),new S1(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,t,s,n,i,r,o){this.key=e,this.documentType=t,this.version=s,this.readTime=n,this.createTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new u1(e,0,u2.min(),u2.min(),u2.min(),w1.empty(),0)}static newFoundDocument(e,t,s,n){return new u1(e,1,t,u2.min(),s,n,0)}static newNoDocument(e,t){return new u1(e,2,t,u2.min(),u2.min(),w1.empty(),0)}static newUnknownDocument(e,t){return new u1(e,3,t,u2.min(),u2.min(),w1.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(u2.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=w1.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=w1.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=u2.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof u1&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new u1(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d8{constructor(e,t){this.position=e,this.inclusive=t}}function tr(c,e,t){let s=0;for(let n=0;n<c.position.length;n++){const i=e[n],r=c.position[n];if(i.field.isKeyField()?s=i2.comparator(i2.fromName(r.referenceValue),t.key):s=C0(r,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function sr(c,e){if(c===null)return e===null;if(e===null||c.inclusive!==e.inclusive||c.position.length!==e.position.length)return!1;for(let t=0;t<c.position.length;t++)if(!l3(c.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m8{constructor(e,t="asc"){this.field=e,this.dir=t}}function ub(c,e){return c.dir===e.dir&&c.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{}class W2 extends Eo{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new db(e,t,s):t==="array-contains"?new gb(e,s):t==="in"?new Lb(e,s):t==="not-in"?new zb(e,s):t==="array-contains-any"?new Mb(e,s):new W2(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new mb(e,s):new pb(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(C0(t,this.value)):t!==null&&P4(this.value)===P4(t)&&this.matchesComparison(C0(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return o2()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class o3 extends Eo{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new o3(e,t)}matches(e){return Ao(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ao(c){return c.op==="and"}function To(c){return hb(c)&&Ao(c)}function hb(c){for(const e of c.filters)if(e instanceof o3)return!1;return!0}function qt(c){if(c instanceof W2)return c.field.canonicalString()+c.op.toString()+y0(c.value);if(To(c))return c.filters.map(e=>qt(e)).join(",");{const e=c.filters.map(t=>qt(t)).join(",");return`${c.op}(${e})`}}function So(c,e){return c instanceof W2?function(s,n){return n instanceof W2&&s.op===n.op&&s.field.isEqual(n.field)&&l3(s.value,n.value)}(c,e):c instanceof o3?function(s,n){return n instanceof o3&&s.op===n.op&&s.filters.length===n.filters.length?s.filters.reduce((i,r,o)=>i&&So(r,n.filters[o]),!0):!1}(c,e):void o2()}function Io(c){return c instanceof W2?function(t){return`${t.field.canonicalString()} ${t.op} ${y0(t.value)}`}(c):c instanceof o3?function(t){return t.op.toString()+" {"+t.getFilters().map(Io).join(" ,")+"}"}(c):"Filter"}class db extends W2{constructor(e,t,s){super(e,t,s),this.key=i2.fromName(s.referenceValue)}matches(e){const t=i2.comparator(e.key,this.key);return this.matchesComparison(t)}}class mb extends W2{constructor(e,t){super(e,"in",t),this.keys=Ro("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class pb extends W2{constructor(e,t){super(e,"not-in",t),this.keys=Ro("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ro(c,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>i2.fromName(s.referenceValue))}class gb extends W2{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ts(t)&&O6(t.arrayValue,this.value)}}class Lb extends W2{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&O6(this.value.arrayValue,t)}}class zb extends W2{constructor(e,t){super(e,"not-in",t)}matches(e){if(O6(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!O6(this.value.arrayValue,t)}}class Mb extends W2{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ts(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>O6(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,t=null,s=[],n=[],i=null,r=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=n,this.limit=i,this.startAt=r,this.endAt=o,this.ue=null}}function nr(c,e=null,t=[],s=[],n=null,i=null,r=null){return new Cb(c,e,t,s,n,i,r)}function ss(c){const e=h2(c);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>qt(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),B8(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>y0(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>y0(s)).join(",")),e.ue=t}return e.ue}function ns(c,e){if(c.limit!==e.limit||c.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<c.orderBy.length;t++)if(!ub(c.orderBy[t],e.orderBy[t]))return!1;if(c.filters.length!==e.filters.length)return!1;for(let t=0;t<c.filters.length;t++)if(!So(c.filters[t],e.filters[t]))return!1;return c.collectionGroup===e.collectionGroup&&!!c.path.isEqual(e.path)&&!!sr(c.startAt,e.startAt)&&sr(c.endAt,e.endAt)}function jt(c){return i2.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H8{constructor(e,t=null,s=[],n=[],i=null,r="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=n,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function yb(c,e,t,s,n,i,r,o){return new H8(c,e,t,s,n,i,r,o)}function is(c){return new H8(c)}function ir(c){return c.filters.length===0&&c.limit===null&&c.startAt==null&&c.endAt==null&&(c.explicitOrderBy.length===0||c.explicitOrderBy.length===1&&c.explicitOrderBy[0].field.isKeyField())}function _b(c){return c.collectionGroup!==null}function z6(c){const e=h2(c);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(r){let o=new c1(Z2.comparator);return r.filters.forEach(a=>{a.getFlattenedFilters().forEach(u=>{u.isInequality()&&(o=o.add(u.field))})}),o})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new m8(i,s))}),t.has(Z2.keyField().canonicalString())||e.ce.push(new m8(Z2.keyField(),s))}return e.ce}function s3(c){const e=h2(c);return e.le||(e.le=vb(e,z6(c))),e.le}function vb(c,e){if(c.limitType==="F")return nr(c.path,c.collectionGroup,e,c.filters,c.limit,c.startAt,c.endAt);{e=e.map(n=>{const i=n.dir==="desc"?"asc":"desc";return new m8(n.field,i)});const t=c.endAt?new d8(c.endAt.position,c.endAt.inclusive):null,s=c.startAt?new d8(c.startAt.position,c.startAt.inclusive):null;return nr(c.path,c.collectionGroup,e,c.filters,c.limit,t,s)}}function Wt(c,e,t){return new H8(c.path,c.collectionGroup,c.explicitOrderBy.slice(),c.filters.slice(),e,t,c.startAt,c.endAt)}function q8(c,e){return ns(s3(c),s3(e))&&c.limitType===e.limitType}function Po(c){return`${ss(s3(c))}|lt:${c.limitType}`}function X4(c){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(n=>Io(n)).join(", ")}]`),B8(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(n=>y0(n)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(n=>y0(n)).join(",")),`Target(${s})`}(s3(c))}; limitType=${c.limitType})`}function j8(c,e){return e.isFoundDocument()&&function(s,n){const i=n.key.path;return s.collectionGroup!==null?n.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):i2.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(c,e)&&function(s,n){for(const i of z6(s))if(!i.field.isKeyField()&&n.data.field(i.field)===null)return!1;return!0}(c,e)&&function(s,n){for(const i of s.filters)if(!i.matches(n))return!1;return!0}(c,e)&&function(s,n){return!(s.startAt&&!function(r,o,a){const u=tr(r,o,a);return r.inclusive?u<=0:u<0}(s.startAt,z6(s),n)||s.endAt&&!function(r,o,a){const u=tr(r,o,a);return r.inclusive?u>=0:u>0}(s.endAt,z6(s),n))}(c,e)}function wb(c){return c.collectionGroup||(c.path.length%2==1?c.path.lastSegment():c.path.get(c.path.length-2))}function ko(c){return(e,t)=>{let s=!1;for(const n of z6(c)){const i=xb(n,e,t);if(i!==0)return i;s=s||n.field.isKeyField()}return 0}}function xb(c,e,t){const s=c.field.isKeyField()?i2.comparator(e.key,t.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?C0(a,u):o2()}(c.field,e,t);switch(c.dir){case"asc":return s;case"desc":return-1*s;default:return o2()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[n,i]of s)if(this.equalsFn(n,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),n=this.inner[s];if(n===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return void(n[i]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],e))return s.length===1?delete this.inner[t]:s.splice(n,1),this.innerSize--,!0;return!1}forEach(e){F4(this.inner,(t,s)=>{for(const[n,i]of s)e(n,i)})}isEmpty(){return xo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=new F2(i2.comparator);function x3(){return bb}const Do=new F2(i2.comparator);function s6(...c){let e=Do;for(const t of c)e=e.insert(t.key,t);return e}function Oo(c){let e=Do;return c.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function v4(){return M6()}function Vo(){return M6()}function M6(){return new S0(c=>c.toString(),(c,e)=>c.isEqual(e))}const Nb=new F2(i2.comparator),Eb=new c1(i2.comparator);function p2(...c){let e=Eb;for(const t of c)e=e.add(t);return e}const Ab=new c1(_2);function Tb(){return Ab}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(c,e){if(c.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:h8(e)?"-0":e}}function Fo(c){return{integerValue:""+c}}function Sb(c,e){return rb(e)?Fo(e):rs(c,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W8{constructor(){this._=void 0}}function Ib(c,e,t){return c instanceof p8?function(n,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return i&&es(i)&&(i=cs(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(t,e):c instanceof _0?Bo(c,e):c instanceof V6?Ho(c,e):function(n,i){const r=Uo(n,i),o=rr(r)+rr(n.Pe);return Ht(r)&&Ht(n.Pe)?Fo(o):rs(n.serializer,o)}(c,e)}function Rb(c,e,t){return c instanceof _0?Bo(c,e):c instanceof V6?Ho(c,e):t}function Uo(c,e){return c instanceof g8?function(s){return Ht(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class p8 extends W8{}class _0 extends W8{constructor(e){super(),this.elements=e}}function Bo(c,e){const t=qo(e);for(const s of c.elements)t.some(n=>l3(n,s))||t.push(s);return{arrayValue:{values:t}}}class V6 extends W8{constructor(e){super(),this.elements=e}}function Ho(c,e){let t=qo(e);for(const s of c.elements)t=t.filter(n=>!l3(n,s));return{arrayValue:{values:t}}}class g8 extends W8{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function rr(c){return B2(c.integerValue||c.doubleValue)}function qo(c){return ts(c)&&c.arrayValue.values?c.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,t){this.field=e,this.transform=t}}function kb(c,e){return c.field.isEqual(e.field)&&function(s,n){return s instanceof _0&&n instanceof _0||s instanceof V6&&n instanceof V6?M0(s.elements,n.elements,l3):s instanceof g8&&n instanceof g8?l3(s.Pe,n.Pe):s instanceof p8&&n instanceof p8}(c.transform,e.transform)}class Db{constructor(e,t){this.version=e,this.transformResults=t}}class n3{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n3}static exists(e){return new n3(void 0,e)}static updateTime(e){return new n3(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ge(c,e){return c.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(c.updateTime):c.exists===void 0||c.exists===e.isFoundDocument()}class $8{}function jo(c,e){if(!c.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return c.isNoDocument()?new $o(c.key,n3.none()):new X6(c.key,c.data,n3.none());{const t=c.data,s=w1.empty();let n=new c1(Z2.comparator);for(let i of e.fields)if(!n.has(i)){let r=t.field(i);r===null&&i.length>1&&(i=i.popLast(),r=t.field(i)),r===null?s.delete(i):s.set(i,r),n=n.add(i)}return new d4(c.key,s,new S1(n.toArray()),n3.none())}}function Ob(c,e,t){c instanceof X6?function(n,i,r){const o=n.value.clone(),a=or(n.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(c,e,t):c instanceof d4?function(n,i,r){if(!Ge(n.precondition,i))return void i.convertToUnknownDocument(r.version);const o=or(n.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Wo(n)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(c,e,t):function(n,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function C6(c,e,t,s){return c instanceof X6?function(i,r,o,a){if(!Ge(i.precondition,r))return o;const u=i.value.clone(),h=ar(i.fieldTransforms,a,r);return u.setAll(h),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(c,e,t,s):c instanceof d4?function(i,r,o,a){if(!Ge(i.precondition,r))return o;const u=ar(i.fieldTransforms,a,r),h=r.data;return h.setAll(Wo(i)),h.setAll(u),r.convertToFoundDocument(r.version,h).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(c,e,t,s):function(i,r,o){return Ge(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(c,e,t)}function Vb(c,e){let t=null;for(const s of c.fieldTransforms){const n=e.data.field(s.field),i=Uo(s.transform,n||null);i!=null&&(t===null&&(t=w1.empty()),t.set(s.field,i))}return t||null}function lr(c,e){return c.type===e.type&&!!c.key.isEqual(e.key)&&!!c.precondition.isEqual(e.precondition)&&!!function(s,n){return s===void 0&&n===void 0||!(!s||!n)&&M0(s,n,(i,r)=>kb(i,r))}(c.fieldTransforms,e.fieldTransforms)&&(c.type===0?c.value.isEqual(e.value):c.type!==1||c.data.isEqual(e.data)&&c.fieldMask.isEqual(e.fieldMask))}class X6 extends $8{constructor(e,t,s,n=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class d4 extends $8{constructor(e,t,s,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Wo(c){const e=new Map;return c.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=c.data.field(t);e.set(t,s)}}),e}function or(c,e,t){const s=new Map;S2(c.length===t.length);for(let n=0;n<t.length;n++){const i=c[n],r=i.transform,o=e.data.field(i.field);s.set(i.field,Rb(r,o,t[n]))}return s}function ar(c,e,t){const s=new Map;for(const n of c){const i=n.transform,r=t.data.field(n.field);s.set(n.field,Ib(i,r,e))}return s}class $o extends $8{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fb extends $8{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,t,s,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=n}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let n=0;n<this.mutations.length;n++){const i=this.mutations[n];i.key.isEqual(e.key)&&Ob(i,e,s[n])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=C6(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=C6(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Vo();return this.mutations.forEach(n=>{const i=e.get(n.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=t.has(n.key)?null:o;const a=jo(r,o);a!==null&&s.set(n.key,a),r.isValidDocument()||r.convertToNoDocument(u2.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),p2())}isEqual(e){return this.batchId===e.batchId&&M0(this.mutations,e.mutations,(t,s)=>lr(t,s))&&M0(this.baseMutations,e.baseMutations,(t,s)=>lr(t,s))}}class ls{constructor(e,t,s,n){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=n}static from(e,t,s){S2(e.mutations.length===s.length);let n=function(){return Nb}();const i=e.mutations;for(let r=0;r<i.length;r++)n=n.insert(i[r].key,s[r].version);return new ls(e,t,s,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q2,M2;function qb(c){switch(c){default:return o2();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function Go(c){if(c===void 0)return w3("GRPC error has no .code"),F.UNKNOWN;switch(c){case q2.OK:return F.OK;case q2.CANCELLED:return F.CANCELLED;case q2.UNKNOWN:return F.UNKNOWN;case q2.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case q2.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case q2.INTERNAL:return F.INTERNAL;case q2.UNAVAILABLE:return F.UNAVAILABLE;case q2.UNAUTHENTICATED:return F.UNAUTHENTICATED;case q2.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case q2.NOT_FOUND:return F.NOT_FOUND;case q2.ALREADY_EXISTS:return F.ALREADY_EXISTS;case q2.PERMISSION_DENIED:return F.PERMISSION_DENIED;case q2.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case q2.ABORTED:return F.ABORTED;case q2.OUT_OF_RANGE:return F.OUT_OF_RANGE;case q2.UNIMPLEMENTED:return F.UNIMPLEMENTED;case q2.DATA_LOSS:return F.DATA_LOSS;default:return o2()}}(M2=q2||(q2={}))[M2.OK=0]="OK",M2[M2.CANCELLED=1]="CANCELLED",M2[M2.UNKNOWN=2]="UNKNOWN",M2[M2.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M2[M2.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M2[M2.NOT_FOUND=5]="NOT_FOUND",M2[M2.ALREADY_EXISTS=6]="ALREADY_EXISTS",M2[M2.PERMISSION_DENIED=7]="PERMISSION_DENIED",M2[M2.UNAUTHENTICATED=16]="UNAUTHENTICATED",M2[M2.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M2[M2.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M2[M2.ABORTED=10]="ABORTED",M2[M2.OUT_OF_RANGE=11]="OUT_OF_RANGE",M2[M2.UNIMPLEMENTED=12]="UNIMPLEMENTED",M2[M2.INTERNAL=13]="INTERNAL",M2[M2.UNAVAILABLE=14]="UNAVAILABLE",M2[M2.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=new x4([4294967295,4294967295],0);function fr(c){const e=jb().encode(c),t=new go;return t.update(e),new Uint8Array(t.digest())}function ur(c){const e=new DataView(c.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),n=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new x4([t,s],0),new x4([n,i],0)]}class os{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new n6(`Invalid padding: ${t}`);if(s<0)throw new n6(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new n6(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new n6(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=x4.fromNumber(this.Ie)}Ee(e,t,s){let n=e.add(t.multiply(x4.fromNumber(s)));return n.compare(Wb)===1&&(n=new x4([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=fr(e),[s,n]=ur(t);for(let i=0;i<this.hashCount;i++){const r=this.Ee(s,n,i);if(!this.de(r))return!1}return!0}static create(e,t,s){const n=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),r=new os(i,n,t);return s.forEach(o=>r.insert(o)),r}insert(e){if(this.Ie===0)return;const t=fr(e),[s,n]=ur(t);for(let i=0;i<this.hashCount;i++){const r=this.Ee(s,n,i);this.Ae(r)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class n6 extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G8{constructor(e,t,s,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const n=new Map;return n.set(e,J6.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new G8(u2.min(),n,new F2(_2),x3(),p2())}}class J6{constructor(e,t,s,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new J6(s,t,p2(),p2(),p2())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t,s,n){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=n}}class Ko{constructor(e,t){this.targetId=e,this.me=t}}class Qo{constructor(e,t,s=s1.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=n}}class hr{constructor(){this.fe=0,this.ge=mr(),this.pe=s1.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=p2(),t=p2(),s=p2();return this.ge.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:s=s.add(n);break;default:o2()}}),new J6(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=mr()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,S2(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class $b{constructor(e){this.Le=e,this.Be=new Map,this.ke=x3(),this.qe=dr(),this.Qe=new F2(_2)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const s=this.Ge(t);switch(e.state){case 0:this.ze(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),s.De(e.resumeToken));break;default:o2()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,n)=>{this.ze(n)&&t(n)})}He(e){const t=e.targetId,s=e.me.count,n=this.Je(t);if(n){const i=n.target;if(jt(i))if(s===0){const r=new i2(i.path);this.Ue(t,r,u1.newNoDocument(r,u2.min()))}else S2(s===1);else{const r=this.Ye(t);if(r!==s){const o=this.Ze(e),a=o?this.Xe(o,e,r):1;if(a!==0){this.je(t);const u=a===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,u)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:n=0},hashCount:i=0}=t;let r,o;try{r=R4(s).toUint8Array()}catch(a){if(a instanceof bo)return z0("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new os(r,n,i)}catch(a){return z0(a instanceof n6?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return o.Ie===0?null:o}Xe(e,t,s){return t.me.count===s-this.nt(e,t.targetId)?0:2}nt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let n=0;return s.forEach(i=>{const r=this.Le.tt(),o=`projects/${r.projectId}/databases/${r.database}/documents/${i.path.canonicalString()}`;e.mightContain(o)||(this.Ue(t,i,null),n++)}),n}rt(e){const t=new Map;this.Be.forEach((i,r)=>{const o=this.Je(r);if(o){if(i.current&&jt(o.target)){const a=new i2(o.target.path);this.ke.get(a)!==null||this.it(r,a)||this.Ue(r,a,u1.newNoDocument(a,e))}i.be&&(t.set(r,i.ve()),i.Ce())}});let s=p2();this.qe.forEach((i,r)=>{let o=!0;r.forEachWhile(a=>{const u=this.Je(a);return!u||u.purpose==="TargetPurposeLimboResolution"||(o=!1,!1)}),o&&(s=s.add(i))}),this.ke.forEach((i,r)=>r.setReadTime(e));const n=new G8(e,t,this.Qe,this.ke,s);return this.ke=x3(),this.qe=dr(),this.Qe=new F2(_2),n}$e(e,t){if(!this.ze(e))return;const s=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,s){if(!this.ze(e))return;const n=this.Ge(e);this.it(e,t)?n.Fe(t,1):n.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new hr,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new c1(_2),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||Z("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new hr),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function dr(){return new F2(i2.comparator)}function mr(){return new F2(i2.comparator)}const Gb={asc:"ASCENDING",desc:"DESCENDING"},Kb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qb={and:"AND",or:"OR"};class Yb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $t(c,e){return c.useProto3Json||B8(e)?e:{value:e}}function L8(c,e){return c.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yo(c,e){return c.useProto3Json?e.toBase64():e.toUint8Array()}function Xb(c,e){return L8(c,e.toTimestamp())}function i3(c){return S2(!!c),u2.fromTimestamp(function(t){const s=s4(t);return new $2(s.seconds,s.nanos)}(c))}function as(c,e){return Gt(c,e).canonicalString()}function Gt(c,e){const t=function(n){return new P2(["projects",n.projectId,"databases",n.database])}(c).child("documents");return e===void 0?t:t.child(e)}function Xo(c){const e=P2.fromString(c);return S2(ta(e)),e}function Kt(c,e){return as(c.databaseId,e.path)}function it(c,e){const t=Xo(e);if(t.get(1)!==c.databaseId.projectId)throw new t2(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+c.databaseId.projectId);if(t.get(3)!==c.databaseId.database)throw new t2(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+c.databaseId.database);return new i2(Zo(t))}function Jo(c,e){return as(c.databaseId,e)}function Jb(c){const e=Xo(c);return e.length===4?P2.emptyPath():Zo(e)}function Qt(c){return new P2(["projects",c.databaseId.projectId,"databases",c.databaseId.database]).canonicalString()}function Zo(c){return S2(c.length>4&&c.get(4)==="documents"),c.popFirst(5)}function pr(c,e,t){return{name:Kt(c,e),fields:t.value.mapValue.fields}}function Zb(c,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:o2()}(e.targetChange.targetChangeType||"NO_CHANGE"),n=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(S2(h===void 0||typeof h=="string"),s1.fromBase64String(h||"")):(S2(h===void 0||h instanceof Buffer||h instanceof Uint8Array),s1.fromUint8Array(h||new Uint8Array))}(c,e.targetChange.resumeToken),r=e.targetChange.cause,o=r&&function(u){const h=u.code===void 0?F.UNKNOWN:Go(u.code);return new t2(h,u.message||"")}(r);t=new Qo(s,n,i,o||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const n=it(c,s.document.name),i=i3(s.document.updateTime),r=s.document.createTime?i3(s.document.createTime):u2.min(),o=new w1({mapValue:{fields:s.document.fields}}),a=u1.newFoundDocument(n,i,r,o),u=s.targetIds||[],h=s.removedTargetIds||[];t=new Ke(u,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const n=it(c,s.document),i=s.readTime?i3(s.readTime):u2.min(),r=u1.newNoDocument(n,i),o=s.removedTargetIds||[];t=new Ke([],o,r.key,r)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const n=it(c,s.document),i=s.removedTargetIds||[];t=new Ke([],i,n,null)}else{if(!("filter"in e))return o2();{e.filter;const s=e.filter;s.targetId;const{count:n=0,unchangedNames:i}=s,r=new Hb(n,i),o=s.targetId;t=new Ko(o,r)}}return t}function eN(c,e){let t;if(e instanceof X6)t={update:pr(c,e.key,e.value)};else if(e instanceof $o)t={delete:Kt(c,e.key)};else if(e instanceof d4)t={update:pr(c,e.key,e.data),updateMask:aN(e.fieldMask)};else{if(!(e instanceof Fb))return o2();t={verify:Kt(c,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof p8)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof _0)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof V6)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof g8)return{fieldPath:r.field.canonicalString(),increment:o.Pe};throw o2()}(0,s))),e.precondition.isNone||(t.currentDocument=function(n,i){return i.updateTime!==void 0?{updateTime:Xb(n,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:o2()}(c,e.precondition)),t}function cN(c,e){return c&&c.length>0?(S2(e!==void 0),c.map(t=>function(n,i){let r=n.updateTime?i3(n.updateTime):i3(i);return r.isEqual(u2.min())&&(r=i3(i)),new Db(r,n.transformResults||[])}(t,e))):[]}function tN(c,e){return{documents:[Jo(c,e.path)]}}function sN(c,e){const t={structuredQuery:{}},s=e.path;let n;e.collectionGroup!==null?(n=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Jo(c,n);const i=function(u){if(u.length!==0)return ca(o3.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:J4(p.field),direction:rN(p.dir)}}(h))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=$t(c,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:t,parent:n}}function nN(c){let e=Jb(c.parent);const t=c.structuredQuery,s=t.from?t.from.length:0;let n=null;if(s>0){S2(s===1);const h=t.from[0];h.allDescendants?n=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(m){const p=ea(m);return p instanceof o3&&To(p)?p.getFilters():[p]}(t.where));let r=[];t.orderBy&&(r=function(m){return m.map(p=>function(A){return new m8(Z4(A.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(p))}(t.orderBy));let o=null;t.limit&&(o=function(m){let p;return p=typeof m=="object"?m.value:m,B8(p)?null:p}(t.limit));let a=null;t.startAt&&(a=function(m){const p=!!m.before,z=m.values||[];return new d8(z,p)}(t.startAt));let u=null;return t.endAt&&(u=function(m){const p=!m.before,z=m.values||[];return new d8(z,p)}(t.endAt)),yb(e,n,r,i,o,"F",a,u)}function iN(c,e){const t=function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return o2()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ea(c){return c.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Z4(t.unaryFilter.field);return W2.create(s,"==",{doubleValue:NaN});case"IS_NULL":const n=Z4(t.unaryFilter.field);return W2.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Z4(t.unaryFilter.field);return W2.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Z4(t.unaryFilter.field);return W2.create(r,"!=",{nullValue:"NULL_VALUE"});default:return o2()}}(c):c.fieldFilter!==void 0?function(t){return W2.create(Z4(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return o2()}}(t.fieldFilter.op),t.fieldFilter.value)}(c):c.compositeFilter!==void 0?function(t){return o3.create(t.compositeFilter.filters.map(s=>ea(s)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return o2()}}(t.compositeFilter.op))}(c):o2()}function rN(c){return Gb[c]}function lN(c){return Kb[c]}function oN(c){return Qb[c]}function J4(c){return{fieldPath:c.canonicalString()}}function Z4(c){return Z2.fromServerFormat(c.fieldPath)}function ca(c){return c instanceof W2?function(t){if(t.op==="=="){if(cr(t.value))return{unaryFilter:{field:J4(t.field),op:"IS_NAN"}};if(er(t.value))return{unaryFilter:{field:J4(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(cr(t.value))return{unaryFilter:{field:J4(t.field),op:"IS_NOT_NAN"}};if(er(t.value))return{unaryFilter:{field:J4(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:J4(t.field),op:lN(t.op),value:t.value}}}(c):c instanceof o3?function(t){const s=t.getFilters().map(n=>ca(n));return s.length===1?s[0]:{compositeFilter:{op:oN(t.op),filters:s}}}(c):o2()}function aN(c){const e=[];return c.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ta(c){return c.length>=4&&c.get(0)==="projects"&&c.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K3{constructor(e,t,s,n,i=u2.min(),r=u2.min(),o=s1.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new K3(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new K3(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new K3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new K3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.ct=e}}function uN(c){const e=nN({parent:c.parent,structuredQuery:c.structuredQuery});return c.limitType==="LAST"?Wt(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(){this.un=new dN}addToCollectionParentIndex(e,t){return this.un.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(t4.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(t4.min())}updateCollectionGroup(e,t,s){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class dN{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),n=this.index[t]||new c1(P2.comparator),i=!n.has(s);return this.index[t]=n.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),n=this.index[t];return n&&n.has(s)}getEntries(e){return(this.index[e]||new c1(P2.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new v0(0)}static kn(){return new v0(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(){this.changes=new S0(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,u1.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?U.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e,t,s,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=n}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(s=n,this.remoteDocumentCache.getEntry(e,t))).next(n=>(s!==null&&C6(s.mutation,n,S1.empty(),$2.now()),n))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,p2()).next(()=>s))}getLocalViewOfDocuments(e,t,s=p2()){const n=v4();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,s).next(i=>{let r=s6();return i.forEach((o,a)=>{r=r.insert(o,a.overlayedDocument)}),r}))}getOverlayedDocuments(e,t){const s=v4();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,p2()))}populateOverlays(e,t,s){const n=[];return s.forEach(i=>{t.has(i)||n.push(i)}),this.documentOverlayCache.getOverlays(e,n).next(i=>{i.forEach((r,o)=>{t.set(r,o)})})}computeViews(e,t,s,n){let i=x3();const r=M6(),o=function(){return M6()}();return t.forEach((a,u)=>{const h=s.get(u.key);n.has(u.key)&&(h===void 0||h.mutation instanceof d4)?i=i.insert(u.key,u):h!==void 0?(r.set(u.key,h.mutation.getFieldMask()),C6(h.mutation,u,h.mutation.getFieldMask(),$2.now())):r.set(u.key,S1.empty())}),this.recalculateAndSaveOverlays(e,i).next(a=>(a.forEach((u,h)=>r.set(u,h)),t.forEach((u,h)=>{var m;return o.set(u,new pN(h,(m=r.get(u))!==null&&m!==void 0?m:null))}),o))}recalculateAndSaveOverlays(e,t){const s=M6();let n=new F2((r,o)=>r-o),i=p2();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(r=>{for(const o of r)o.keys().forEach(a=>{const u=t.get(a);if(u===null)return;let h=s.get(a)||S1.empty();h=o.applyToLocalView(u,h),s.set(a,h);const m=(n.get(o.batchId)||p2()).add(a);n=n.insert(o.batchId,m)})}).next(()=>{const r=[],o=n.getReverseIterator();for(;o.hasNext();){const a=o.getNext(),u=a.key,h=a.value,m=Vo();h.forEach(p=>{if(!i.has(p)){const z=jo(t.get(p),s.get(p));z!==null&&m.set(p,z),i=i.add(p)}}),r.push(this.documentOverlayCache.saveOverlays(e,u,m))}return U.waitFor(r)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,n){return function(r){return i2.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_b(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,n):this.getDocumentsMatchingCollectionQuery(e,t,s,n)}getNextDocuments(e,t,s,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,n).next(i=>{const r=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,n-i.size):U.resolve(v4());let o=-1,a=i;return r.next(u=>U.forEach(u,(h,m)=>(o<m.largestBatchId&&(o=m.largestBatchId),i.get(h)?U.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{a=a.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,a,u,p2())).next(h=>({batchId:o,changes:Oo(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new i2(t)).next(s=>{let n=s6();return s.isFoundDocument()&&(n=n.insert(s.key,s)),n})}getDocumentsMatchingCollectionGroupQuery(e,t,s,n){const i=t.collectionGroup;let r=s6();return this.indexManager.getCollectionParents(e,i).next(o=>U.forEach(o,a=>{const u=function(m,p){return new H8(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,n).next(h=>{h.forEach((m,p)=>{r=r.insert(m,p)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,s,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,n))).next(r=>{i.forEach((a,u)=>{const h=u.getKey();r.get(h)===null&&(r=r.insert(h,u1.newInvalidDocument(h)))});let o=s6();return r.forEach((a,u)=>{const h=i.get(a);h!==void 0&&C6(h.mutation,u,S1.empty(),$2.now()),j8(t,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return U.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(n){return{id:n.id,version:n.version,createTime:i3(n.createTime)}}(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(n){return{name:n.name,query:uN(n.bundledQuery),readTime:i3(n.readTime)}}(t)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(){this.overlays=new F2(i2.comparator),this.Ir=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const s=v4();return U.forEach(t,n=>this.getOverlay(e,n).next(i=>{i!==null&&s.set(n,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((n,i)=>{this.ht(e,t,i)}),U.resolve()}removeOverlaysForBatchId(e,t,s){const n=this.Ir.get(s);return n!==void 0&&(n.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(s)),U.resolve()}getOverlaysForCollection(e,t,s){const n=v4(),i=t.length+1,r=new i2(t.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const a=o.getNext().value,u=a.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&a.largestBatchId>s&&n.set(a.getKey(),a)}return U.resolve(n)}getOverlaysForCollectionGroup(e,t,s,n){let i=new F2((u,h)=>u-h);const r=this.overlays.getIterator();for(;r.hasNext();){const u=r.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=v4(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const o=v4(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((u,h)=>o.set(u,h)),!(o.size()>=n)););return U.resolve(o)}ht(e,t,s){const n=this.overlays.get(s.key);if(n!==null){const r=this.Ir.get(n.largestBatchId).delete(s.key);this.Ir.set(n.largestBatchId,r)}this.overlays=this.overlays.insert(s.key,new Bb(t,s));let i=this.Ir.get(t);i===void 0&&(i=p2(),this.Ir.set(t,i)),this.Ir.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(){this.sessionToken=s1.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.Tr=new c1(K2.Er),this.dr=new c1(K2.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const s=new K2(e,t);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Vr(new K2(e,t))}mr(e,t){e.forEach(s=>this.removeReference(s,t))}gr(e){const t=new i2(new P2([])),s=new K2(t,e),n=new K2(t,e+1),i=[];return this.dr.forEachInRange([s,n],r=>{this.Vr(r),i.push(r.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new i2(new P2([])),s=new K2(t,e),n=new K2(t,e+1);let i=p2();return this.dr.forEachInRange([s,n],r=>{i=i.add(r.key)}),i}containsKey(e){const t=new K2(e,0),s=this.Tr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class K2{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return i2.comparator(e.key,t.key)||_2(e.wr,t.wr)}static Ar(e,t){return _2(e.wr,t.wr)||i2.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new c1(K2.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,n){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Ub(i,t,s,n);this.mutationQueue.push(r);for(const o of n)this.br=this.br.add(new K2(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return U.resolve(r)}lookupMutationBatch(e,t){return U.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,n=this.vr(s),i=n<0?0:n;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new K2(t,0),n=new K2(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([s,n],r=>{const o=this.Dr(r.wr);i.push(o)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new c1(_2);return t.forEach(n=>{const i=new K2(n,0),r=new K2(n,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,r],o=>{s=s.add(o.wr)})}),U.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,n=s.length+1;let i=s;i2.isDocumentKey(i)||(i=i.child(""));const r=new K2(new i2(i),0);let o=new c1(_2);return this.br.forEachWhile(a=>{const u=a.key.path;return!!s.isPrefixOf(u)&&(u.length===n&&(o=o.add(a.wr)),!0)},r),U.resolve(this.Cr(o))}Cr(e){const t=[];return e.forEach(s=>{const n=this.Dr(s);n!==null&&t.push(n)}),t}removeMutationBatch(e,t){S2(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return U.forEach(t.mutations,n=>{const i=new K2(n.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,t){const s=new K2(t,0),n=this.br.firstAfterOrEqual(s);return U.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.Mr=e,this.docs=function(){return new F2(i2.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,n=this.docs.get(s),i=n?n.size:0,r=this.Mr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return U.resolve(s?s.document.mutableCopy():u1.newInvalidDocument(t))}getEntries(e,t){let s=x3();return t.forEach(n=>{const i=this.docs.get(n);s=s.insert(n,i?i.document.mutableCopy():u1.newInvalidDocument(n))}),U.resolve(s)}getDocumentsMatchingQuery(e,t,s,n){let i=x3();const r=t.path,o=new i2(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:u,value:{document:h}}=a.getNext();if(!r.isPrefixOf(u.path))break;u.path.length>r.length+1||tb(cb(h),s)<=0||(n.has(h.key)||j8(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,t,s,n){o2()}Or(e,t){return U.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new _N(this)}getSize(e){return U.resolve(this.size)}}class _N extends mN{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((s,n)=>{n.isValidDocument()?t.push(this.cr.addEntry(e,n)):this.cr.removeEntry(s)}),U.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.persistence=e,this.Nr=new S0(t=>ss(t),ns),this.lastRemoteSnapshotVersion=u2.min(),this.highestTargetId=0,this.Lr=0,this.Br=new fs,this.targetCount=0,this.kr=v0.Bn()}forEachTarget(e,t){return this.Nr.forEach((s,n)=>t(n)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Lr&&(this.Lr=t),U.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new v0(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.Kn(t),U.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,s){let n=0;const i=[];return this.Nr.forEach((r,o)=>{o.sequenceNumber<=t&&s.get(o.targetId)===null&&(this.Nr.delete(r),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),n++)}),U.waitFor(i).next(()=>n)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const s=this.Nr.get(t)||null;return U.resolve(s)}addMatchingKeys(e,t,s){return this.Br.Rr(t,s),U.resolve()}removeMatchingKeys(e,t,s){this.Br.mr(t,s);const n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(r=>{i.push(n.markPotentiallyOrphaned(e,r))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),U.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Br.yr(t);return U.resolve(s)}containsKey(e,t){return U.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Z5(0),this.Kr=!1,this.Kr=!0,this.$r=new MN,this.referenceDelegate=e(this),this.Ur=new vN(this),this.indexManager=new hN,this.remoteDocumentCache=function(n){return new yN(n)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new fN(t),this.Gr=new LN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zN,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.qr[e.toKey()];return s||(s=new CN(t,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,s){Z("MemoryPersistence","Starting transaction:",e);const n=new xN(this.Qr.next());return this.referenceDelegate.zr(),s(n).next(i=>this.referenceDelegate.jr(n).next(()=>i)).toPromise().then(i=>(n.raiseOnCommittedEvent(),i))}Hr(e,t){return U.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,t)))}}class xN extends nb{constructor(e){super(),this.currentSequenceNumber=e}}class us{constructor(e){this.persistence=e,this.Jr=new fs,this.Yr=null}static Zr(e){return new us(e)}get Xr(){if(this.Yr)return this.Yr;throw o2()}addReference(e,t,s){return this.Jr.addReference(s,t),this.Xr.delete(s.toString()),U.resolve()}removeReference(e,t,s){return this.Jr.removeReference(s,t),this.Xr.add(s.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),U.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(n=>this.Xr.add(n.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(n=>{n.forEach(i=>this.Xr.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,s=>{const n=i2.fromPath(s);return this.ei(e,n).next(i=>{i||t.removeEntry(n,u2.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(s=>{s?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return U.or([()=>U.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t,s,n){this.targetId=e,this.fromCache=t,this.$i=s,this.Ui=n}static Wi(e,t){let s=p2(),n=p2();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:n=n.add(i.doc.key)}return new hs(e,t.fromCache,s,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return py()?8:ib(p1())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,s,n){const i={result:null};return this.Yi(e,t).next(r=>{i.result=r}).next(()=>{if(!i.result)return this.Zi(e,t,n,s).next(r=>{i.result=r})}).next(()=>{if(i.result)return;const r=new bN;return this.Xi(e,t,r).next(o=>{if(i.result=o,this.zi)return this.es(e,t,r,o.size)})}).next(()=>i.result)}es(e,t,s,n){return s.documentReadCount<this.ji?(X0()<=g2.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",X4(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(X0()<=g2.DEBUG&&Z("QueryEngine","Query:",X4(t),"scans",s.documentReadCount,"local documents and returns",n,"documents as results."),s.documentReadCount>this.Hi*n?(X0()<=g2.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",X4(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,s3(t))):U.resolve())}Yi(e,t){if(ir(t))return U.resolve(null);let s=s3(t);return this.indexManager.getIndexType(e,s).next(n=>n===0?null:(t.limit!==null&&n===1&&(t=Wt(t,null,"F"),s=s3(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const r=p2(...i);return this.Ji.getDocuments(e,r).next(o=>this.indexManager.getMinOffset(e,s).next(a=>{const u=this.ts(t,o);return this.ns(t,u,r,a.readTime)?this.Yi(e,Wt(t,null,"F")):this.rs(e,u,t,a)}))})))}Zi(e,t,s,n){return ir(t)||n.isEqual(u2.min())?U.resolve(null):this.Ji.getDocuments(e,s).next(i=>{const r=this.ts(t,i);return this.ns(t,r,s,n)?U.resolve(null):(X0()<=g2.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),X4(t)),this.rs(e,r,t,eb(n,-1)).next(o=>o))})}ts(e,t){let s=new c1(ko(e));return t.forEach((n,i)=>{j8(e,i)&&(s=s.add(i))}),s}ns(e,t,s,n){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}Xi(e,t,s){return X0()<=g2.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",X4(t)),this.Ji.getDocumentsMatchingQuery(e,t,t4.min(),s)}rs(e,t,s,n){return this.Ji.getDocumentsMatchingQuery(e,s,n).next(i=>(t.forEach(r=>{i=i.insert(r.key,r)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,t,s,n){this.persistence=e,this.ss=t,this.serializer=n,this.os=new F2(_2),this._s=new S0(i=>ss(i),ns),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function AN(c,e,t,s){return new EN(c,e,t,s)}async function sa(c,e){const t=h2(c);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let n;return t.mutationQueue.getAllMutationBatches(s).next(i=>(n=i,t.ls(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const r=[],o=[];let a=p2();for(const u of n){r.push(u.batchId);for(const h of u.mutations)a=a.add(h.key)}for(const u of i){o.push(u.batchId);for(const h of u.mutations)a=a.add(h.key)}return t.localDocuments.getDocuments(s,a).next(u=>({hs:u,removedBatchIds:r,addedBatchIds:o}))})})}function TN(c,e){const t=h2(c);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const n=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(o,a,u,h){const m=u.batch,p=m.keys();let z=U.resolve();return p.forEach(A=>{z=z.next(()=>h.getEntry(a,A)).next(R=>{const P=u.docVersions.get(A);S2(P!==null),R.version.compareTo(P)<0&&(m.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),h.addEntry(R)))})}),z.next(()=>o.mutationQueue.removeMutationBatch(a,m))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,n,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=p2();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,n))})}function na(c){const e=h2(c);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function SN(c,e){const t=h2(c),s=e.snapshotVersion;let n=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const r=t.cs.newChangeBuffer({trackRemovals:!0});n=t.os;const o=[];e.targetChanges.forEach((h,m)=>{const p=n.get(m);if(!p)return;o.push(t.Ur.removeMatchingKeys(i,h.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(i,h.addedDocuments,m)));let z=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?z=z.withResumeToken(s1.EMPTY_BYTE_STRING,u2.min()).withLastLimboFreeSnapshotVersion(u2.min()):h.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(h.resumeToken,s)),n=n.insert(m,z),function(R,P,T){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(p,z,h)&&o.push(t.Ur.updateTargetData(i,z))});let a=x3(),u=p2();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&o.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),o.push(IN(i,r,e.documentUpdates).next(h=>{a=h.Ps,u=h.Is})),!s.isEqual(u2.min())){const h=t.Ur.getLastRemoteSnapshotVersion(i).next(m=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,s));o.push(h)}return U.waitFor(o).next(()=>r.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,a,u)).next(()=>a)}).then(i=>(t.os=n,i))}function IN(c,e,t){let s=p2(),n=p2();return t.forEach(i=>s=s.add(i)),e.getEntries(c,s).next(i=>{let r=x3();return t.forEach((o,a)=>{const u=i.get(o);a.isFoundDocument()!==u.isFoundDocument()&&(n=n.add(o)),a.isNoDocument()&&a.version.isEqual(u2.min())?(e.removeEntry(o,a.readTime),r=r.insert(o,a)):!u.isValidDocument()||a.version.compareTo(u.version)>0||a.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(a),r=r.insert(o,a)):Z("LocalStore","Ignoring outdated watch update for ",o,". Current version:",u.version," Watch version:",a.version)}),{Ps:r,Is:n}})}function RN(c,e){const t=h2(c);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function PN(c,e){const t=h2(c);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let n;return t.Ur.getTargetData(s,e).next(i=>i?(n=i,U.resolve(n)):t.Ur.allocateTargetId(s).next(r=>(n=new K3(e,r,"TargetPurposeListen",s.currentSequenceNumber),t.Ur.addTargetData(s,n).next(()=>n))))}).then(s=>{const n=t.os.get(s.targetId);return(n===null||s.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(t.os=t.os.insert(s.targetId,s),t._s.set(e,s.targetId)),s})}async function Yt(c,e,t){const s=h2(c),n=s.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,r=>s.persistence.referenceDelegate.removeTarget(r,n))}catch(r){if(!Y6(r))throw r;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${r}`)}s.os=s.os.remove(e),s._s.delete(n.target)}function gr(c,e,t){const s=h2(c);let n=u2.min(),i=p2();return s.persistence.runTransaction("Execute query","readwrite",r=>function(a,u,h){const m=h2(a),p=m._s.get(h);return p!==void 0?U.resolve(m.os.get(p)):m.Ur.getTargetData(u,h)}(s,r,s3(e)).next(o=>{if(o)return n=o.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(r,o.targetId).next(a=>{i=a})}).next(()=>s.ss.getDocumentsMatchingQuery(r,e,t?n:u2.min(),t?i:p2())).next(o=>(kN(s,wb(e),o),{documents:o,Ts:i})))}function kN(c,e,t){let s=c.us.get(e)||u2.min();t.forEach((n,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),c.us.set(e,s)}class Lr{constructor(){this.activeTargetIds=Tb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DN{constructor(){this.so=new Lr,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,s){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Lr,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ke=null;function rt(){return ke===null?ke=function(){return 268435456+Math.round(2147483648*Math.random())}():ke++,"0x"+ke.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1="WebChannelConnection";class UN extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+t.host,this.vo=`projects/${n}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get Fo(){return!1}Mo(t,s,n,i,r){const o=rt(),a=this.xo(t,s.toUriEncodedString());Z("RestConnection",`Sending RPC '${t}' ${o}:`,a,n);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,r),this.No(t,a,u,n).then(h=>(Z("RestConnection",`Received RPC '${t}' ${o}: `,h),h),h=>{throw z0("RestConnection",`RPC '${t}' ${o} failed with error: `,h,"url: ",a,"request:",n),h})}Lo(t,s,n,i,r,o){return this.Mo(t,s,n,i,r)}Oo(t,s,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+T0}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,r)=>t[r]=i),n&&n.headers.forEach((i,r)=>t[r]=i)}xo(t,s){const n=VN[t];return`${this.Do}/v1/${s}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,s,n){const i=rt();return new Promise((r,o)=>{const a=new Lo;a.setWithCredentials(!0),a.listenOnce(Mo.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case We.NO_ERROR:const h=a.getResponseJson();Z(o1,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),r(h);break;case We.TIMEOUT:Z(o1,`RPC '${e}' ${i} timed out`),o(new t2(F.DEADLINE_EXCEEDED,"Request time out"));break;case We.HTTP_ERROR:const m=a.getStatus();if(Z(o1,`RPC '${e}' ${i} failed with status:`,m,"response text:",a.getResponseText()),m>0){let p=a.getResponseJson();Array.isArray(p)&&(p=p[0]);const z=p==null?void 0:p.error;if(z&&z.status&&z.message){const A=function(P){const T=P.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(T)>=0?T:F.UNKNOWN}(z.status);o(new t2(A,z.message))}else o(new t2(F.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new t2(F.UNAVAILABLE,"Connection failed."));break;default:o2()}}finally{Z(o1,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(n);Z(o1,`RPC '${e}' ${i} sending request:`,n),a.send(t,"POST",u,s,15)})}Bo(e,t,s){const n=rt(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=_o(),o=yo(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.xmlHttpFactory=new zo({})),this.Oo(a.initMessageHeaders,t,s),a.encodeInitMessageHeaders=!0;const h=i.join("");Z(o1,`Creating RPC '${e}' stream ${n}: ${h}`,a);const m=r.createWebChannel(h,a);let p=!1,z=!1;const A=new FN({Io:P=>{z?Z(o1,`Not sending because RPC '${e}' stream ${n} is closed:`,P):(p||(Z(o1,`Opening RPC '${e}' stream ${n} transport.`),m.open(),p=!0),Z(o1,`RPC '${e}' stream ${n} sending:`,P),m.send(P))},To:()=>m.close()}),R=(P,T,S)=>{P.listen(T,O=>{try{S(O)}catch(B){setTimeout(()=>{throw B},0)}})};return R(m,t6.EventType.OPEN,()=>{z||(Z(o1,`RPC '${e}' stream ${n} transport opened.`),A.yo())}),R(m,t6.EventType.CLOSE,()=>{z||(z=!0,Z(o1,`RPC '${e}' stream ${n} transport closed`),A.So())}),R(m,t6.EventType.ERROR,P=>{z||(z=!0,z0(o1,`RPC '${e}' stream ${n} transport errored:`,P),A.So(new t2(F.UNAVAILABLE,"The operation could not be completed")))}),R(m,t6.EventType.MESSAGE,P=>{var T;if(!z){const S=P.data[0];S2(!!S);const O=S,B=O.error||((T=O[0])===null||T===void 0?void 0:T.error);if(B){Z(o1,`RPC '${e}' stream ${n} received error:`,B);const s2=B.status;let f2=function(_){const w=q2[_];if(w!==void 0)return Go(w)}(s2),v=B.message;f2===void 0&&(f2=F.INTERNAL,v="Unknown error status: "+s2+" with message "+B.message),z=!0,A.So(new t2(f2,v)),m.close()}else Z(o1,`RPC '${e}' stream ${n} received:`,S),A.bo(S)}}),R(o,Co.STAT_EVENT,P=>{P.stat===Ut.PROXY?Z(o1,`RPC '${e}' stream ${n} detected buffering proxy`):P.stat===Ut.NOPROXY&&Z(o1,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function lt(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K8(c){return new Yb(c,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,s=1e3,n=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=s,this.qo=n,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),n=Math.max(0,t-s);n>0&&Z("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,n,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t,s,n,i,r,o,a){this.ui=e,this.Ho=s,this.Jo=n,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ia(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(w3(t.toString()),w3("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,n])=>{this.Yo===t&&this.P_(s,n)},s=>{e(()=>{const n=new t2(F.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(n)})})}P_(e,t){const s=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(n=>{s(()=>this.I_(n))}),this.stream.onMessage(n=>{s(()=>++this.e_==1?this.E_(n):this.onNext(n))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BN extends ra{constructor(e,t,s,n,i,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,n,r),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Zb(this.serializer,e),s=function(i){if(!("targetChange"in i))return u2.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?u2.min():r.readTime?i3(r.readTime):u2.min()}(e);return this.listener.d_(t,s)}A_(e){const t={};t.database=Qt(this.serializer),t.addTarget=function(i,r){let o;const a=r.target;if(o=jt(a)?{documents:tN(i,a)}:{query:sN(i,a)._t},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=Yo(i,r.resumeToken);const u=$t(i,r.expectedCount);u!==null&&(o.expectedCount=u)}else if(r.snapshotVersion.compareTo(u2.min())>0){o.readTime=L8(i,r.snapshotVersion.toTimestamp());const u=$t(i,r.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,e);const s=iN(this.serializer,e);s&&(t.labels=s),this.a_(t)}R_(e){const t={};t.database=Qt(this.serializer),t.removeTarget=e,this.a_(t)}}class HN extends ra{constructor(e,t,s,n,i,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,n,r),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return S2(!!e.streamToken),this.lastStreamToken=e.streamToken,S2(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){S2(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=cN(e.writeResults,e.commitTime),s=i3(e.commitTime);return this.listener.g_(s,t)}p_(){const e={};e.database=Qt(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>eN(this.serializer,s))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN extends class{}{constructor(e,t,s,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=n,this.y_=!1}w_(){if(this.y_)throw new t2(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,s,n){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Mo(e,Gt(t,s),n,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new t2(F.UNKNOWN,i.toString())})}Lo(e,t,s,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Lo(e,Gt(t,s),n,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new t2(F.UNKNOWN,r.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class jN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(w3(t),this.D_=!1):Z("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,t,s,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(r=>{s.enqueueAndForget(async()=>{U4(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=h2(a);u.L_.add(4),await Z6(u),u.q_.set("Unknown"),u.L_.delete(4),await Q8(u)}(this))})}),this.q_=new jN(s,n)}}async function Q8(c){if(U4(c))for(const e of c.B_)await e(!0)}async function Z6(c){for(const e of c.B_)await e(!1)}function la(c,e){const t=h2(c);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),gs(t)?ps(t):I0(t).r_()&&ms(t,e))}function ds(c,e){const t=h2(c),s=I0(t);t.N_.delete(e),s.r_()&&oa(t,e),t.N_.size===0&&(s.r_()?s.o_():U4(t)&&t.q_.set("Unknown"))}function ms(c,e){if(c.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(u2.min())>0){const t=c.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}I0(c).A_(e)}function oa(c,e){c.Q_.xe(e),I0(c).R_(e)}function ps(c){c.Q_=new $b({getRemoteKeysForTarget:e=>c.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>c.N_.get(e)||null,tt:()=>c.datastore.serializer.databaseId}),I0(c).start(),c.q_.v_()}function gs(c){return U4(c)&&!I0(c).n_()&&c.N_.size>0}function U4(c){return h2(c).L_.size===0}function aa(c){c.Q_=void 0}async function $N(c){c.q_.set("Online")}async function GN(c){c.N_.forEach((e,t)=>{ms(c,e)})}async function KN(c,e){aa(c),gs(c)?(c.q_.M_(e),ps(c)):c.q_.set("Unknown")}async function QN(c,e,t){if(c.q_.set("Online"),e instanceof Qo&&e.state===2&&e.cause)try{await async function(n,i){const r=i.cause;for(const o of i.targetIds)n.N_.has(o)&&(await n.remoteSyncer.rejectListen(o,r),n.N_.delete(o),n.Q_.removeTarget(o))}(c,e)}catch(s){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await z8(c,s)}else if(e instanceof Ke?c.Q_.Ke(e):e instanceof Ko?c.Q_.He(e):c.Q_.We(e),!t.isEqual(u2.min()))try{const s=await na(c.localStore);t.compareTo(s)>=0&&await function(i,r){const o=i.Q_.rt(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,u)=>{const h=i.N_.get(a);if(!h)return;i.N_.set(a,h.withResumeToken(s1.EMPTY_BYTE_STRING,h.snapshotVersion)),oa(i,a);const m=new K3(h.target,a,u,h.sequenceNumber);ms(i,m)}),i.remoteSyncer.applyRemoteEvent(o)}(c,t)}catch(s){Z("RemoteStore","Failed to raise snapshot:",s),await z8(c,s)}}async function z8(c,e,t){if(!Y6(e))throw e;c.L_.add(1),await Z6(c),c.q_.set("Offline"),t||(t=()=>na(c.localStore)),c.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await t(),c.L_.delete(1),await Q8(c)})}function fa(c,e){return e().catch(t=>z8(c,t,e))}async function Y8(c){const e=h2(c),t=n4(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;YN(e);)try{const n=await RN(e.localStore,s);if(n===null){e.O_.length===0&&t.o_();break}s=n.batchId,XN(e,n)}catch(n){await z8(e,n)}ua(e)&&ha(e)}function YN(c){return U4(c)&&c.O_.length<10}function XN(c,e){c.O_.push(e);const t=n4(c);t.r_()&&t.V_&&t.m_(e.mutations)}function ua(c){return U4(c)&&!n4(c).n_()&&c.O_.length>0}function ha(c){n4(c).start()}async function JN(c){n4(c).p_()}async function ZN(c){const e=n4(c);for(const t of c.O_)e.m_(t.mutations)}async function eE(c,e,t){const s=c.O_.shift(),n=ls.from(s,e,t);await fa(c,()=>c.remoteSyncer.applySuccessfulWrite(n)),await Y8(c)}async function cE(c,e){e&&n4(c).V_&&await async function(s,n){if(function(r){return qb(r)&&r!==F.ABORTED}(n.code)){const i=s.O_.shift();n4(s).s_(),await fa(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,n)),await Y8(s)}}(c,e),ua(c)&&ha(c)}async function Mr(c,e){const t=h2(c);t.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const s=U4(t);t.L_.add(3),await Z6(t),s&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Q8(t)}async function tE(c,e){const t=h2(c);e?(t.L_.delete(2),await Q8(t)):e||(t.L_.add(2),await Z6(t),t.q_.set("Unknown"))}function I0(c){return c.K_||(c.K_=function(t,s,n){const i=h2(t);return i.w_(),new BN(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(c.datastore,c.asyncQueue,{Eo:$N.bind(null,c),Ro:GN.bind(null,c),mo:KN.bind(null,c),d_:QN.bind(null,c)}),c.B_.push(async e=>{e?(c.K_.s_(),gs(c)?ps(c):c.q_.set("Unknown")):(await c.K_.stop(),aa(c))})),c.K_}function n4(c){return c.U_||(c.U_=function(t,s,n){const i=h2(t);return i.w_(),new HN(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(c.datastore,c.asyncQueue,{Eo:()=>Promise.resolve(),Ro:JN.bind(null,c),mo:cE.bind(null,c),f_:ZN.bind(null,c),g_:eE.bind(null,c)}),c.B_.push(async e=>{e?(c.U_.s_(),await Y8(c)):(await c.U_.stop(),c.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${c.O_.length} pending writes`),c.O_=[]))})),c.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,s,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=n,this.removalCallback=i,this.deferred=new y3,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(r=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,n,i){const r=Date.now()+s,o=new Ls(e,t,r,n,i);return o.start(s),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new t2(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zs(c,e){if(w3("AsyncQueue",`${e}: ${c}`),Y6(c))return new t2(F.UNAVAILABLE,`${e}: ${c}`);throw c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.comparator=e?(t,s)=>e(t,s)||i2.comparator(t.key,s.key):(t,s)=>i2.comparator(t.key,s.key),this.keyedMap=s6(),this.sortedSet=new F2(this.comparator)}static emptySet(e){return new h0(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof h0)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const n=t.getNext().key,i=s.getNext().key;if(!n.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new h0;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.W_=new F2(i2.comparator)}track(e){const t=e.doc.key,s=this.W_.get(t);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(t,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(t):e.type===1&&s.type===2?this.W_=this.W_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):o2():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,s)=>{e.push(s)}),e}}class w0{constructor(e,t,s,n,i,r,o,a,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=n,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,n,i){const r=[];return t.forEach(o=>{r.push({type:0,doc:o})}),new w0(e,t,h0.emptySet(t),r,s,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&q8(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let n=0;n<t.length;n++)if(t[n].type!==s[n].type||!t[n].doc.isEqual(s[n].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class nE{constructor(){this.queries=yr(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,s){const n=h2(t),i=n.queries;n.queries=yr(),i.forEach((r,o)=>{for(const a of o.j_)a.onError(s)})})(this,new t2(F.ABORTED,"Firestore shutting down"))}}function yr(){return new S0(c=>Po(c),q8)}async function da(c,e){const t=h2(c);let s=3;const n=e.query;let i=t.queries.get(n);i?!i.H_()&&e.J_()&&(s=2):(i=new sE,s=e.J_()?0:1);try{switch(s){case 0:i.z_=await t.onListen(n,!0);break;case 1:i.z_=await t.onListen(n,!1);break;case 2:await t.onFirstRemoteStoreListen(n)}}catch(r){const o=zs(r,`Initialization of query '${X4(e.query)}' failed`);return void e.onError(o)}t.queries.set(n,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Ms(t)}async function ma(c,e){const t=h2(c),s=e.query;let n=3;const i=t.queries.get(s);if(i){const r=i.j_.indexOf(e);r>=0&&(i.j_.splice(r,1),i.j_.length===0?n=e.J_()?0:1:!i.H_()&&e.J_()&&(n=2))}switch(n){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function iE(c,e){const t=h2(c);let s=!1;for(const n of e){const i=n.query,r=t.queries.get(i);if(r){for(const o of r.j_)o.X_(n)&&(s=!0);r.z_=n}}s&&Ms(t)}function rE(c,e,t){const s=h2(c),n=s.queries.get(e);if(n)for(const i of n.j_)i.onError(t);s.queries.delete(e)}function Ms(c){c.Y_.forEach(e=>{e.next()})}var Xt,_r;(_r=Xt||(Xt={})).ea="default",_r.Cache="cache";class pa{constructor(e,t,s){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const n of e.docChanges)n.type!==3&&s.push(n);e=new w0(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const s=t!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=w0.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Xt.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e){this.key=e}}class La{constructor(e){this.key=e}}class lE{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=p2(),this.mutatedKeys=p2(),this.Aa=ko(e),this.Ra=new h0(this.Aa)}get Va(){return this.Ta}ma(e,t){const s=t?t.fa:new Cr,n=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,r=n,o=!1;const a=this.query.limitType==="F"&&n.size===this.query.limit?n.last():null,u=this.query.limitType==="L"&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((h,m)=>{const p=n.get(h),z=j8(this.query,m)?m:null,A=!!p&&this.mutatedKeys.has(p.key),R=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let P=!1;p&&z?p.data.isEqual(z.data)?A!==R&&(s.track({type:3,doc:z}),P=!0):this.ga(p,z)||(s.track({type:2,doc:z}),P=!0,(a&&this.Aa(z,a)>0||u&&this.Aa(z,u)<0)&&(o=!0)):!p&&z?(s.track({type:0,doc:z}),P=!0):p&&!z&&(s.track({type:1,doc:p}),P=!0,(a||u)&&(o=!0)),P&&(z?(r=r.add(z),i=R?i.add(h):i.delete(h)):(r=r.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;r.size>this.query.limit;){const h=this.query.limitType==="F"?r.last():r.first();r=r.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Ra:r,fa:s,ns:o,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,n){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const r=e.fa.G_();r.sort((h,m)=>function(z,A){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return o2()}};return R(z)-R(A)}(h.type,m.type)||this.Aa(h.doc,m.doc)),this.pa(s),n=n!=null&&n;const o=t&&!n?this.ya():[],a=this.da.size===0&&this.current&&!n?1:0,u=a!==this.Ea;return this.Ea=a,r.length!==0||u?{snapshot:new w0(this.query,e.Ra,i,r,e.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Cr,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=p2(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const t=[];return e.forEach(s=>{this.da.has(s)||t.push(new La(s))}),this.da.forEach(s=>{e.has(s)||t.push(new ga(s))}),t}ba(e){this.Ta=e.Ts,this.da=p2();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return w0.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class oE{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class aE{constructor(e){this.key=e,this.va=!1}}class fE{constructor(e,t,s,n,i,r){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Ca={},this.Fa=new S0(o=>Po(o),q8),this.Ma=new Map,this.xa=new Set,this.Oa=new F2(i2.comparator),this.Na=new Map,this.La=new fs,this.Ba={},this.ka=new Map,this.qa=v0.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function uE(c,e,t=!0){const s=va(c);let n;const i=s.Fa.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),n=i.view.Da()):n=await za(s,e,t,!0),n}async function hE(c,e){const t=va(c);await za(t,e,!0,!1)}async function za(c,e,t,s){const n=await PN(c.localStore,s3(e)),i=n.targetId,r=c.sharedClientState.addLocalQueryTarget(i,t);let o;return s&&(o=await dE(c,e,i,r==="current",n.resumeToken)),c.isPrimaryClient&&t&&la(c.remoteStore,n),o}async function dE(c,e,t,s,n){c.Ka=(m,p,z)=>async function(R,P,T,S){let O=P.view.ma(T);O.ns&&(O=await gr(R.localStore,P.query,!1).then(({documents:v})=>P.view.ma(v,O)));const B=S&&S.targetChanges.get(P.targetId),s2=S&&S.targetMismatches.get(P.targetId)!=null,f2=P.view.applyChanges(O,R.isPrimaryClient,B,s2);return wr(R,P.targetId,f2.wa),f2.snapshot}(c,m,p,z);const i=await gr(c.localStore,e,!0),r=new lE(e,i.Ts),o=r.ma(i.documents),a=J6.createSynthesizedTargetChangeForCurrentChange(t,s&&c.onlineState!=="Offline",n),u=r.applyChanges(o,c.isPrimaryClient,a);wr(c,t,u.wa);const h=new oE(e,t,r);return c.Fa.set(e,h),c.Ma.has(t)?c.Ma.get(t).push(e):c.Ma.set(t,[e]),u.snapshot}async function mE(c,e,t){const s=h2(c),n=s.Fa.get(e),i=s.Ma.get(n.targetId);if(i.length>1)return s.Ma.set(n.targetId,i.filter(r=>!q8(r,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(n.targetId),s.sharedClientState.isActiveQueryTarget(n.targetId)||await Yt(s.localStore,n.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(n.targetId),t&&ds(s.remoteStore,n.targetId),Jt(s,n.targetId)}).catch(Q6)):(Jt(s,n.targetId),await Yt(s.localStore,n.targetId,!0))}async function pE(c,e){const t=h2(c),s=t.Fa.get(e),n=t.Ma.get(s.targetId);t.isPrimaryClient&&n.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),ds(t.remoteStore,s.targetId))}async function gE(c,e,t){const s=vE(c);try{const n=await function(r,o){const a=h2(r),u=$2.now(),h=o.reduce((z,A)=>z.add(A.key),p2());let m,p;return a.persistence.runTransaction("Locally write mutations","readwrite",z=>{let A=x3(),R=p2();return a.cs.getEntries(z,h).next(P=>{A=P,A.forEach((T,S)=>{S.isValidDocument()||(R=R.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(z,A)).next(P=>{m=P;const T=[];for(const S of o){const O=Vb(S,m.get(S.key).overlayedDocument);O!=null&&T.push(new d4(S.key,O,No(O.value.mapValue),n3.exists(!0)))}return a.mutationQueue.addMutationBatch(z,u,T,o)}).next(P=>{p=P;const T=P.applyToLocalDocumentSet(m,R);return a.documentOverlayCache.saveOverlays(z,P.batchId,T)})}).then(()=>({batchId:p.batchId,changes:Oo(m)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(n.batchId),function(r,o,a){let u=r.Ba[r.currentUser.toKey()];u||(u=new F2(_2)),u=u.insert(o,a),r.Ba[r.currentUser.toKey()]=u}(s,n.batchId,t),await ee(s,n.changes),await Y8(s.remoteStore)}catch(n){const i=zs(n,"Failed to persist write");t.reject(i)}}async function Ma(c,e){const t=h2(c);try{const s=await SN(t.localStore,e);e.targetChanges.forEach((n,i)=>{const r=t.Na.get(i);r&&(S2(n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size<=1),n.addedDocuments.size>0?r.va=!0:n.modifiedDocuments.size>0?S2(r.va):n.removedDocuments.size>0&&(S2(r.va),r.va=!1))}),await ee(t,s,e)}catch(s){await Q6(s)}}function vr(c,e,t){const s=h2(c);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const n=[];s.Fa.forEach((i,r)=>{const o=r.view.Z_(e);o.snapshot&&n.push(o.snapshot)}),function(r,o){const a=h2(r);a.onlineState=o;let u=!1;a.queries.forEach((h,m)=>{for(const p of m.j_)p.Z_(o)&&(u=!0)}),u&&Ms(a)}(s.eventManager,e),n.length&&s.Ca.d_(n),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function LE(c,e,t){const s=h2(c);s.sharedClientState.updateQueryState(e,"rejected",t);const n=s.Na.get(e),i=n&&n.key;if(i){let r=new F2(i2.comparator);r=r.insert(i,u1.newNoDocument(i,u2.min()));const o=p2().add(i),a=new G8(u2.min(),new Map,new F2(_2),r,o);await Ma(s,a),s.Oa=s.Oa.remove(i),s.Na.delete(e),Cs(s)}else await Yt(s.localStore,e,!1).then(()=>Jt(s,e,t)).catch(Q6)}async function zE(c,e){const t=h2(c),s=e.batch.batchId;try{const n=await TN(t.localStore,e);ya(t,s,null),Ca(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ee(t,n)}catch(n){await Q6(n)}}async function ME(c,e,t){const s=h2(c);try{const n=await function(r,o){const a=h2(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return a.mutationQueue.lookupMutationBatch(u,o).next(m=>(S2(m!==null),h=m.keys(),a.mutationQueue.removeMutationBatch(u,m))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,h,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>a.localDocuments.getDocuments(u,h))})}(s.localStore,e);ya(s,e,t),Ca(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ee(s,n)}catch(n){await Q6(n)}}function Ca(c,e){(c.ka.get(e)||[]).forEach(t=>{t.resolve()}),c.ka.delete(e)}function ya(c,e,t){const s=h2(c);let n=s.Ba[s.currentUser.toKey()];if(n){const i=n.get(e);i&&(t?i.reject(t):i.resolve(),n=n.remove(e)),s.Ba[s.currentUser.toKey()]=n}}function Jt(c,e,t=null){c.sharedClientState.removeLocalQueryTarget(e);for(const s of c.Ma.get(e))c.Fa.delete(s),t&&c.Ca.$a(s,t);c.Ma.delete(e),c.isPrimaryClient&&c.La.gr(e).forEach(s=>{c.La.containsKey(s)||_a(c,s)})}function _a(c,e){c.xa.delete(e.path.canonicalString());const t=c.Oa.get(e);t!==null&&(ds(c.remoteStore,t),c.Oa=c.Oa.remove(e),c.Na.delete(t),Cs(c))}function wr(c,e,t){for(const s of t)s instanceof ga?(c.La.addReference(s.key,e),CE(c,s)):s instanceof La?(Z("SyncEngine","Document no longer in limbo: "+s.key),c.La.removeReference(s.key,e),c.La.containsKey(s.key)||_a(c,s.key)):o2()}function CE(c,e){const t=e.key,s=t.path.canonicalString();c.Oa.get(t)||c.xa.has(s)||(Z("SyncEngine","New document in limbo: "+t),c.xa.add(s),Cs(c))}function Cs(c){for(;c.xa.size>0&&c.Oa.size<c.maxConcurrentLimboResolutions;){const e=c.xa.values().next().value;c.xa.delete(e);const t=new i2(P2.fromString(e)),s=c.qa.next();c.Na.set(s,new aE(t)),c.Oa=c.Oa.insert(t,s),la(c.remoteStore,new K3(s3(is(t.path)),s,"TargetPurposeLimboResolution",Z5.oe))}}async function ee(c,e,t){const s=h2(c),n=[],i=[],r=[];s.Fa.isEmpty()||(s.Fa.forEach((o,a)=>{r.push(s.Ka(a,e,t).then(u=>{var h;if((u||t)&&s.isPrimaryClient){const m=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(a.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(a.targetId,m?"current":"not-current")}if(u){n.push(u);const m=hs.Wi(a.targetId,u);i.push(m)}}))}),await Promise.all(r),s.Ca.d_(n),await async function(a,u){const h=h2(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>U.forEach(u,p=>U.forEach(p.$i,z=>h.persistence.referenceDelegate.addReference(m,p.targetId,z)).next(()=>U.forEach(p.Ui,z=>h.persistence.referenceDelegate.removeReference(m,p.targetId,z)))))}catch(m){if(!Y6(m))throw m;Z("LocalStore","Failed to update sequence numbers: "+m)}for(const m of u){const p=m.targetId;if(!m.fromCache){const z=h.os.get(p),A=z.snapshotVersion,R=z.withLastLimboFreeSnapshotVersion(A);h.os=h.os.insert(p,R)}}}(s.localStore,i))}async function yE(c,e){const t=h2(c);if(!t.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const s=await sa(t.localStore,e);t.currentUser=e,function(i,r){i.ka.forEach(o=>{o.forEach(a=>{a.reject(new t2(F.CANCELLED,r))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ee(t,s.hs)}}function _E(c,e){const t=h2(c),s=t.Na.get(e);if(s&&s.va)return p2().add(s.key);{let n=p2();const i=t.Ma.get(e);if(!i)return n;for(const r of i){const o=t.Fa.get(r);n=n.unionWith(o.view.Va)}return n}}function va(c){const e=h2(c);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ma.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_E.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LE.bind(null,e),e.Ca.d_=iE.bind(null,e.eventManager),e.Ca.$a=rE.bind(null,e.eventManager),e}function vE(c){const e=h2(c);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ME.bind(null,e),e}class xr{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=K8(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return AN(this.persistence,new NN,e.initialUser,this.serializer)}createPersistence(e){return new wN(us.Zr,this.serializer)}createSharedClientState(e){return new DN}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wE{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>vr(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=yE.bind(null,this.syncEngine),await tE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nE}()}createDatastore(e){const t=K8(e.databaseInfo.databaseId),s=function(i){return new UN(i)}(e.databaseInfo);return function(i,r,o,a){return new qN(i,r,o,a)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,n,i,r,o){return new WN(s,n,i,r,o)}(this.localStore,this.datastore,e.asyncQueue,t=>vr(this.syncEngine,t,0),function(){return zr.D()?new zr:new ON}())}createSyncEngine(e,t){return function(n,i,r,o,a,u,h){const m=new fE(n,i,r,o,a,u);return h&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(n){const i=h2(n);Z("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Z6(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):w3("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,t,s,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=n,this.user=a1.UNAUTHENTICATED,this.clientId=wo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{Z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(Z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new t2(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new y3;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=zs(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ot(c,e){c.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const t=c.configuration;await e.initialize(t);let s=t.initialUser;c.setCredentialChangeListener(async n=>{s.isEqual(n)||(await sa(e.localStore,n),s=n)}),e.persistence.setDatabaseDeletedListener(()=>c.terminate()),c._offlineComponents=e}async function br(c,e){c.asyncQueue.verifyOperationInProgress();const t=await NE(c);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,c.configuration),c.setCredentialChangeListener(s=>Mr(e.remoteStore,s)),c.setAppCheckTokenChangeListener((s,n)=>Mr(e.remoteStore,n)),c._onlineComponents=e}function bE(c){return c.name==="FirebaseError"?c.code===F.FAILED_PRECONDITION||c.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&c instanceof DOMException)||c.code===22||c.code===20||c.code===11}async function NE(c){if(!c._offlineComponents)if(c._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await ot(c,c._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!bE(t))throw t;z0("Error using user provided cache. Falling back to memory cache: "+t),await ot(c,new xr)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await ot(c,new xr);return c._offlineComponents}async function xa(c){return c._onlineComponents||(c._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await br(c,c._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await br(c,new wE))),c._onlineComponents}function EE(c){return xa(c).then(e=>e.syncEngine)}async function ba(c){const e=await xa(c),t=e.eventManager;return t.onListen=uE.bind(null,e.syncEngine),t.onUnlisten=mE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=pE.bind(null,e.syncEngine),t}function AE(c,e,t={}){const s=new y3;return c.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const h=new wa({next:p=>{r.enqueueAndForget(()=>ma(i,m));const z=p.docs.has(o);!z&&p.fromCache?u.reject(new t2(F.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&p.fromCache&&a&&a.source==="server"?u.reject(new t2(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),m=new pa(is(o.path),h,{includeMetadataChanges:!0,_a:!0});return da(i,m)}(await ba(c),c.asyncQueue,e,t,s)),s.promise}function TE(c,e,t={}){const s=new y3;return c.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const h=new wa({next:p=>{r.enqueueAndForget(()=>ma(i,m)),p.fromCache&&a.source==="server"?u.reject(new t2(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),m=new pa(o,h,{includeMetadataChanges:!0,_a:!0});return da(i,m)}(await ba(c),c.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(c){const e={};return c.timeoutSeconds!==void 0&&(e.timeoutSeconds=c.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(c,e,t){if(!t)throw new t2(F.INVALID_ARGUMENT,`Function ${c}() cannot be called with an empty ${e}.`)}function SE(c,e,t,s){if(e===!0&&s===!0)throw new t2(F.INVALID_ARGUMENT,`${c} and ${t} cannot be used together.`)}function Er(c){if(!i2.isDocumentKey(c))throw new t2(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${c} has ${c.length}.`)}function Ar(c){if(i2.isDocumentKey(c))throw new t2(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${c} has ${c.length}.`)}function ys(c){if(c===void 0)return"undefined";if(c===null)return"null";if(typeof c=="string")return c.length>20&&(c=`${c.substring(0,20)}...`),JSON.stringify(c);if(typeof c=="number"||typeof c=="boolean")return""+c;if(typeof c=="object"){if(c instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(c);return e?`a custom ${e} object`:"an object"}}return typeof c=="function"?"a function":o2()}function b3(c,e){if("_delegate"in c&&(c=c._delegate),!(c instanceof e)){if(e.name===c.constructor.name)throw new t2(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ys(c);throw new t2(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new t2(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new t2(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Na((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new t2(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new t2(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new t2(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,n){return s.timeoutSeconds===n.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class X8{constructor(e,t,s,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new t2(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new t2(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tr(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Wx;switch(s.type){case"firstParty":return new Qx(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new t2(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Nr.get(t);s&&(Z("ComponentProvider","Removing Datastore"),Nr.delete(t),s.terminate())}(this),Promise.resolve()}}function IE(c,e,t,s={}){var n;const i=(c=b3(c,X8))._getSettings(),r=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==r&&z0("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),c._setSettings(Object.assign(Object.assign({},i),{host:r,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=a1.MOCK_USER;else{o=oy(s.mockUserToken,(n=c._app)===null||n===void 0?void 0:n.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new t2(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new a1(u)}c._authCredentials=new $x(new vo(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J8{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new J8(this.firestore,e,this._query)}}class x1{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Z3(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new x1(this.firestore,e,this._key)}}class Z3 extends J8{constructor(e,t,s){super(e,t,is(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new x1(this.firestore,null,new i2(e))}withConverter(e){return new Z3(this.firestore,e,this._path)}}function U02(c,e,...t){if(c=g1(c),Ea("collection","path",e),c instanceof X8){const s=P2.fromString(e,...t);return Ar(s),new Z3(c,null,s)}{if(!(c instanceof x1||c instanceof Z3))throw new t2(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=c._path.child(P2.fromString(e,...t));return Ar(s),new Z3(c.firestore,null,s)}}function B02(c,e,...t){if(c=g1(c),arguments.length===1&&(e=wo.newId()),Ea("doc","path",e),c instanceof X8){const s=P2.fromString(e,...t);return Er(s),new x1(c,null,new i2(s))}{if(!(c instanceof x1||c instanceof Z3))throw new t2(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=c._path.child(P2.fromString(e,...t));return Er(s),new x1(c.firestore,c instanceof Z3?c.converter:null,new i2(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new ia(this,"async_queue_retry"),this.Eu=()=>{const t=lt();t&&Z("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()};const e=lt();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const t=lt();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const t=new y3;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Y6(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const t=this.au.then(()=>(this.Pu=!0,e().catch(s=>{this.hu=s,this.Pu=!1;const n=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw w3("INTERNAL UNHANDLED ERROR: ",n),s}).then(s=>(this.Pu=!1,s))));return this.au=t,t}enqueueAfterDelay(e,t,s){this.du(),this.Tu.indexOf(e)>-1&&(t=0);const n=Ls.createAndSchedule(this,e,t,s,i=>this.Vu(i));return this.lu.push(n),n}du(){this.hu&&o2()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const t of this.lu)if(t.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.lu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const t=this.lu.indexOf(e);this.lu.splice(t,1)}}class ce extends X8{constructor(e,t,s,n){super(e,t,s,n),this.type="firestore",this._queue=function(){return new RE}(),this._persistenceKey=(n==null?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Aa(this),this._firestoreClient.terminate()}}function PE(c,e){const t=typeof c=="object"?c:M9(),s=typeof c=="string"?c:"(default)",n=U5(t,"firestore").getImmediate({identifier:s});if(!n._initialized){const i=ry("firestore");i&&IE(n,...i)}return n}function _s(c){return c._firestoreClient||Aa(c),c._firestoreClient.verifyNotTerminated(),c._firestoreClient}function Aa(c){var e,t,s;const n=c._freezeSettings(),i=function(o,a,u,h){return new ob(o,a,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Na(h.experimentalLongPollingOptions),h.useFetchStreams)}(c._databaseId,((e=c._app)===null||e===void 0?void 0:e.options.appId)||"",c._persistenceKey,n);c._firestoreClient=new xE(c._authCredentials,c._appCheckCredentials,c._queue,i),!((t=n.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=n.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(c._firestoreClient._uninitializedComponentsProvider={_offlineKind:n.localCache.kind,_offline:n.localCache._offlineComponentProvider,_online:n.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this._byteString=e}static fromBase64String(e){try{return new x0(s1.fromBase64String(e))}catch(t){throw new t2(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new x0(s1.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z8{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new t2(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z2(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new t2(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new t2(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _2(this._lat,e._lat)||_2(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,n){if(s.length!==n.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==n[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=/^__.*__$/;class DE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new d4(e,this.data,this.fieldMask,t,this.fieldTransforms):new X6(e,this.data,t,this.fieldTransforms)}}class Ta{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new d4(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Sa(c){switch(c){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw o2()}}class cc{constructor(e,t,s,n,i,r){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=n,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new cc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),n=this.Su({path:s,Du:!1});return n.vu(e),n}Cu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),n=this.Su({path:s,Du:!1});return n.yu(),n}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return M8(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Sa(this.wu)&&kE.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class OE{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||K8(e)}Nu(e,t,s,n=!1){return new cc({wu:e,methodName:t,Ou:s,path:Z2.emptyPath(),Du:!1,xu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ia(c){const e=c._freezeSettings(),t=K8(c._databaseId);return new OE(c._databaseId,!!e.ignoreUndefinedProperties,t)}function VE(c,e,t,s,n,i={}){const r=c.Nu(i.merge||i.mergeFields?2:0,e,t,n);bs("Data must be an object, but it was:",r,s);const o=Ra(s,r);let a,u;if(i.merge)a=new S1(r.fieldMask),u=r.fieldTransforms;else if(i.mergeFields){const h=[];for(const m of i.mergeFields){const p=Zt(e,m,t);if(!r.contains(p))throw new t2(F.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);ka(h,p)||h.push(p)}a=new S1(h),u=r.fieldTransforms.filter(m=>a.covers(m.field))}else a=null,u=r.fieldTransforms;return new DE(new w1(o),a,u)}class tc extends ec{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof tc}}function FE(c,e,t){return new cc({wu:3,Ou:e.settings.Ou,methodName:c._methodName,Du:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class xs extends ec{constructor(e,t){super(e),this.Lu=t}_toFieldTransform(e){const t=FE(this,e,!0),s=this.Lu.map(i=>te(i,t)),n=new _0(s);return new Pb(e.path,n)}isEqual(e){return e instanceof xs&&E6(this.Lu,e.Lu)}}function UE(c,e,t,s){const n=c.Nu(1,e,t);bs("Data must be an object, but it was:",n,s);const i=[],r=w1.empty();F4(s,(a,u)=>{const h=Ns(e,a,t);u=g1(u);const m=n.Cu(h);if(u instanceof tc)i.push(h);else{const p=te(u,m);p!=null&&(i.push(h),r.set(h,p))}});const o=new S1(i);return new Ta(r,o,n.fieldTransforms)}function BE(c,e,t,s,n,i){const r=c.Nu(1,e,t),o=[Zt(e,s,t)],a=[n];if(i.length%2!=0)throw new t2(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)o.push(Zt(e,i[p])),a.push(i[p+1]);const u=[],h=w1.empty();for(let p=o.length-1;p>=0;--p)if(!ka(u,o[p])){const z=o[p];let A=a[p];A=g1(A);const R=r.Cu(z);if(A instanceof tc)u.push(z);else{const P=te(A,R);P!=null&&(u.push(z),h.set(z,P))}}const m=new S1(u);return new Ta(h,m,r.fieldTransforms)}function te(c,e){if(Pa(c=g1(c)))return bs("Unsupported field value:",e,c),Ra(c,e);if(c instanceof ec)return function(s,n){if(!Sa(n.wu))throw n.Mu(`${s._methodName}() can only be used with update() and set()`);if(!n.path)throw n.Mu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(n);i&&n.fieldTransforms.push(i)}(c,e),null;if(c===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),c instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(s,n){const i=[];let r=0;for(const o of s){let a=te(o,n.Fu(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(c,e)}return function(s,n){if((s=g1(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Sb(n.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=$2.fromDate(s);return{timestampValue:L8(n.serializer,i)}}if(s instanceof $2){const i=new $2(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:L8(n.serializer,i)}}if(s instanceof vs)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof x0)return{bytesValue:Yo(n.serializer,s._byteString)};if(s instanceof x1){const i=n.databaseId,r=s.firestore._databaseId;if(!r.isEqual(i))throw n.Mu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:as(s.firestore._databaseId||n.databaseId,s._key.path)}}if(s instanceof ws)return function(r,o){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:r.toArray().map(a=>{if(typeof a!="number")throw o.Mu("VectorValues must only contain numeric values.");return rs(o.serializer,a)})}}}}}}(s,n);throw n.Mu(`Unsupported field value: ${ys(s)}`)}(c,e)}function Ra(c,e){const t={};return xo(c)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):F4(c,(s,n)=>{const i=te(n,e.bu(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function Pa(c){return!(typeof c!="object"||c===null||c instanceof Array||c instanceof Date||c instanceof $2||c instanceof vs||c instanceof x0||c instanceof x1||c instanceof ec||c instanceof ws)}function bs(c,e,t){if(!Pa(t)||!function(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}(t)){const s=ys(t);throw s==="an object"?e.Mu(c+" a custom object"):e.Mu(c+" "+s)}}function Zt(c,e,t){if((e=g1(e))instanceof Z8)return e._internalPath;if(typeof e=="string")return Ns(c,e);throw M8("Field path arguments must be of type string or ",c,!1,void 0,t)}const HE=new RegExp("[~\\*/\\[\\]]");function Ns(c,e,t){if(e.search(HE)>=0)throw M8(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,c,!1,void 0,t);try{return new Z8(...e.split("."))._internalPath}catch{throw M8(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,c,!1,void 0,t)}}function M8(c,e,t,s,n){const i=s&&!s.isEmpty(),r=n!==void 0;let o=`Function ${e}() called with invalid data`;t&&(o+=" (via `toFirestore()`)"),o+=". ";let a="";return(i||r)&&(a+=" (found",i&&(a+=` in field ${s}`),r&&(a+=` in document ${n}`),a+=")"),new t2(F.INVALID_ARGUMENT,o+c+a)}function ka(c,e){return c.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t,s,n,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new x1(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Oa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qE extends Da{data(){return super.data()}}function Oa(c,e){return typeof e=="string"?Ns(c,e):e instanceof Z8?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(c){if(c.limitType==="L"&&c.explicitOrderBy.length===0)throw new t2(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class WE{convertValue(e,t="none"){switch(P4(e)){case 0:return null;case 1:return e.booleanValue;case 2:return B2(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(R4(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw o2()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return F4(e,(n,i)=>{s[n]=this.convertValue(i,t)}),s}convertVectorValue(e){var t,s,n;const i=(n=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||n===void 0?void 0:n.map(r=>B2(r.doubleValue));return new ws(i)}convertGeoPoint(e){return new vs(B2(e.latitude),B2(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=cs(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(k6(e));default:return null}}convertTimestamp(e){const t=s4(e);return new $2(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=P2.fromString(e);S2(ta(s));const n=new D6(s.get(1),s.get(3)),i=new i2(s.popFirst(5));return n.isEqual(t)||w3(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(c,e,t){let s;return s=c?c.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i6{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Va extends Da{constructor(e,t,s,n,i,r){super(e,t,s,n,r),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qe(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Oa("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Qe extends Va{data(e={}){return super.data(e)}}class GE{constructor(e,t,s,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new i6(n.hasPendingWrites,n.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Qe(this._firestore,this._userDataWriter,s.key,s,new i6(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new t2(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(n,i){if(n._snapshot.oldDocs.isEmpty()){let r=0;return n._snapshot.docChanges.map(o=>{const a=new Qe(n._firestore,n._userDataWriter,o.doc.key,o.doc,new i6(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Qe(n._firestore,n._userDataWriter,o.doc.key,o.doc,new i6(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter);let u=-1,h=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),h=r.indexOf(o.doc.key)),{type:KE(o.type),doc:a,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function KE(c){switch(c){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return o2()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H02(c){c=b3(c,x1);const e=b3(c.firestore,ce);return AE(_s(e),c._key).then(t=>QE(e,c,t))}class Fa extends WE{constructor(e){super(),this.firestore=e}convertBytes(e){return new x0(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new x1(this.firestore,null,t)}}function q02(c){c=b3(c,J8);const e=b3(c.firestore,ce),t=_s(e),s=new Fa(e);return jE(c._query),TE(t,c._query).then(n=>new GE(e,s,c,n))}function j02(c,e,t){c=b3(c,x1);const s=b3(c.firestore,ce),n=$E(c.converter,e);return Ua(s,[VE(Ia(s),"setDoc",c._key,n,c.converter!==null,t).toMutation(c._key,n3.none())])}function W02(c,e,t,...s){c=b3(c,x1);const n=b3(c.firestore,ce),i=Ia(n);let r;return r=typeof(e=g1(e))=="string"||e instanceof Z8?BE(i,"updateDoc",c._key,e,t,s):UE(i,"updateDoc",c._key,e),Ua(n,[r.toMutation(c._key,n3.exists(!0))])}function Ua(c,e){return function(s,n){const i=new y3;return s.asyncQueue.enqueueAndForget(async()=>gE(await EE(s),n,i)),i.promise}(_s(c),e)}function QE(c,e,t){const s=t.docs.get(e._key),n=new Fa(c);return new Va(c,n,e._key,s,new i6(t.hasPendingWrites,t.fromCache),e.converter)}function $02(...c){return new xs("arrayUnion",c)}(function(e,t=!0){(function(n){T0=n})(E0),p0(new A4("firestore",(s,{instanceIdentifier:n,options:i})=>{const r=s.getProvider("app").getImmediate(),o=new ce(new Gx(s.getProvider("auth-internal")),new Xx(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new t2(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new D6(u.options.projectId,h)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),J3(Qi,"4.7.2",e),J3(Qi,"4.7.2","esm2017")})();const Sr=()=>{};let Es={},Ba={},Ha=null,qa={mark:Sr,measure:Sr};try{typeof window<"u"&&(Es=window),typeof document<"u"&&(Ba=document),typeof MutationObserver<"u"&&(Ha=MutationObserver),typeof performance<"u"&&(qa=performance)}catch{}const{userAgent:Ir=""}=Es.navigator||{},i4=Es,R2=Ba,Rr=Ha,De=qa;i4.document;const S3=!!R2.documentElement&&!!R2.head&&typeof R2.addEventListener=="function"&&typeof R2.createElement=="function",ja=~Ir.indexOf("MSIE")||~Ir.indexOf("Trident/");var k2="classic",Wa="duotone",I1="sharp",R1="sharp-duotone",YE=[k2,Wa,I1,R1],XE={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Pr={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},JE=["kit"],ZE=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,eA=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,cA={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},tA={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},sA={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},nA={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},iA={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},rA={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},$a={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},lA=["solid","regular","light","thin","duotone","brands"],Ga=[1,2,3,4,5,6,7,8,9,10],oA=Ga.concat([11,12,13,14,15,16,17,18,19,20]),r6={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},aA=[...Object.keys(nA),...lA,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",r6.GROUP,r6.SWAP_OPACITY,r6.PRIMARY,r6.SECONDARY].concat(Ga.map(c=>"".concat(c,"x"))).concat(oA.map(c=>"w-".concat(c))),fA={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},uA={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},hA={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},kr={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const N3="___FONT_AWESOME___",e5=16,Ka="fa",Qa="svg-inline--fa",k4="data-fa-i2svg",c5="data-fa-pseudo-element",dA="data-fa-pseudo-element-pending",As="data-prefix",Ts="data-icon",Dr="fontawesome-i2svg",mA="async",pA=["HTML","HEAD","STYLE","SCRIPT"],Ya=(()=>{try{return!0}catch{return!1}})(),Xa=[k2,I1,R1];function se(c){return new Proxy(c,{get(e,t){return t in e?e[t]:e[k2]}})}const Ja={...$a};Ja[k2]={...$a[k2],...Pr.kit,...Pr["kit-duotone"]};const b4=se(Ja),t5={...rA};t5[k2]={...t5[k2],...kr.kit,...kr["kit-duotone"]};const F6=se(t5),s5={...iA};s5[k2]={...s5[k2],...hA.kit};const N4=se(s5),n5={...sA};n5[k2]={...n5[k2],...uA.kit};const gA=se(n5),LA=ZE,Za="fa-layers-text",zA=eA,MA={...XE};se(MA);const CA=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],at=r6,b0=new Set;Object.keys(F6[k2]).map(b0.add.bind(b0));Object.keys(F6[I1]).map(b0.add.bind(b0));Object.keys(F6[R1]).map(b0.add.bind(b0));const yA=[...JE,...aA],y6=i4.FontAwesomeConfig||{};function _A(c){var e=R2.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function vA(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}R2&&typeof R2.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,s]=e;const n=vA(_A(t));n!=null&&(y6[s]=n)});const ef={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ka,replacementClass:Qa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};y6.familyPrefix&&(y6.cssPrefix=y6.familyPrefix);const N0={...ef,...y6};N0.autoReplaceSvg||(N0.observeMutations=!1);const e2={};Object.keys(ef).forEach(c=>{Object.defineProperty(e2,c,{enumerable:!0,set:function(e){N0[c]=e,_6.forEach(t=>t(e2))},get:function(){return N0[c]}})});Object.defineProperty(e2,"familyPrefix",{enumerable:!0,set:function(c){N0.cssPrefix=c,_6.forEach(e=>e(e2))},get:function(){return N0.cssPrefix}});i4.FontAwesomeConfig=e2;const _6=[];function wA(c){return _6.push(c),()=>{_6.splice(_6.indexOf(c),1)}}const U3=e5,J1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xA(c){if(!c||!S3)return;const e=R2.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;const t=R2.head.childNodes;let s=null;for(let n=t.length-1;n>-1;n--){const i=t[n],r=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(s=i)}return R2.head.insertBefore(e,s),c}const bA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function U6(){let c=12,e="";for(;c-- >0;)e+=bA[Math.random()*62|0];return e}function R0(c){const e=[];for(let t=(c||[]).length>>>0;t--;)e[t]=c[t];return e}function Ss(c){return c.classList?R0(c.classList):(c.getAttribute("class")||"").split(" ").filter(e=>e)}function cf(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function NA(c){return Object.keys(c||{}).reduce((e,t)=>e+"".concat(t,'="').concat(cf(c[t]),'" '),"").trim()}function sc(c){return Object.keys(c||{}).reduce((e,t)=>e+"".concat(t,": ").concat(c[t].trim(),";"),"")}function Is(c){return c.size!==J1.size||c.x!==J1.x||c.y!==J1.y||c.rotate!==J1.rotate||c.flipX||c.flipY}function EA(c){let{transform:e,containerWidth:t,iconWidth:s}=c;const n={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),r="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),a={transform:"".concat(i," ").concat(r," ").concat(o)},u={transform:"translate(".concat(s/2*-1," -256)")};return{outer:n,inner:a,path:u}}function AA(c){let{transform:e,width:t=e5,height:s=e5,startCentered:n=!1}=c,i="";return n&&ja?i+="translate(".concat(e.x/U3-t/2,"em, ").concat(e.y/U3-s/2,"em) "):n?i+="translate(calc(-50% + ".concat(e.x/U3,"em), calc(-50% + ").concat(e.y/U3,"em)) "):i+="translate(".concat(e.x/U3,"em, ").concat(e.y/U3,"em) "),i+="scale(".concat(e.size/U3*(e.flipX?-1:1),", ").concat(e.size/U3*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var TA=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function tf(){const c=Ka,e=Qa,t=e2.cssPrefix,s=e2.replacementClass;let n=TA;if(t!==c||s!==e){const i=new RegExp("\\.".concat(c,"\\-"),"g"),r=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");n=n.replace(i,".".concat(t,"-")).replace(r,"--".concat(t,"-")).replace(o,".".concat(s))}return n}let Or=!1;function ft(){e2.autoAddCss&&!Or&&(xA(tf()),Or=!0)}var SA={mixout(){return{dom:{css:tf,insertCss:ft}}},hooks(){return{beforeDOMElementCreation(){ft()},beforeI2svg(){ft()}}}};const E3=i4||{};E3[N3]||(E3[N3]={});E3[N3].styles||(E3[N3].styles={});E3[N3].hooks||(E3[N3].hooks={});E3[N3].shims||(E3[N3].shims=[]);var Z1=E3[N3];const sf=[],nf=function(){R2.removeEventListener("DOMContentLoaded",nf),C8=1,sf.map(c=>c())};let C8=!1;S3&&(C8=(R2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(R2.readyState),C8||R2.addEventListener("DOMContentLoaded",nf));function IA(c){S3&&(C8?setTimeout(c,0):sf.push(c))}function ne(c){const{tag:e,attributes:t={},children:s=[]}=c;return typeof c=="string"?cf(c):"<".concat(e," ").concat(NA(t),">").concat(s.map(ne).join(""),"</").concat(e,">")}function Vr(c,e,t){if(c&&c[e]&&c[e][t])return{prefix:e,iconName:t,icon:c[e][t]}}var ut=function(e,t,s,n){var i=Object.keys(e),r=i.length,o=t,a,u,h;for(s===void 0?(a=1,h=e[i[0]]):(a=0,h=s);a<r;a++)u=i[a],h=o(h,e[u],u,e);return h};function RA(c){const e=[];let t=0;const s=c.length;for(;t<s;){const n=c.charCodeAt(t++);if(n>=55296&&n<=56319&&t<s){const i=c.charCodeAt(t++);(i&64512)==56320?e.push(((n&1023)<<10)+(i&1023)+65536):(e.push(n),t--)}else e.push(n)}return e}function i5(c){const e=RA(c);return e.length===1?e[0].toString(16):null}function PA(c,e){const t=c.length;let s=c.charCodeAt(e),n;return s>=55296&&s<=56319&&t>e+1&&(n=c.charCodeAt(e+1),n>=56320&&n<=57343)?(s-55296)*1024+n-56320+65536:s}function Fr(c){return Object.keys(c).reduce((e,t)=>{const s=c[t];return!!s.icon?e[s.iconName]=s.icon:e[t]=s,e},{})}function r5(c,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=t,n=Fr(e);typeof Z1.hooks.addPack=="function"&&!s?Z1.hooks.addPack(c,Fr(e)):Z1.styles[c]={...Z1.styles[c]||{},...n},c==="fas"&&r5("fa",e)}const{styles:_4,shims:kA}=Z1,DA={[k2]:Object.values(N4[k2]),[I1]:Object.values(N4[I1]),[R1]:Object.values(N4[R1])};let Rs=null,rf={},lf={},of={},af={},ff={};const OA={[k2]:Object.keys(b4[k2]),[I1]:Object.keys(b4[I1]),[R1]:Object.keys(b4[R1])};function VA(c){return~yA.indexOf(c)}function FA(c,e){const t=e.split("-"),s=t[0],n=t.slice(1).join("-");return s===c&&n!==""&&!VA(n)?n:null}const uf=()=>{const c=s=>ut(_4,(n,i,r)=>(n[r]=ut(i,s,{}),n),{});rf=c((s,n,i)=>(n[3]&&(s[n[3]]=i),n[2]&&n[2].filter(o=>typeof o=="number").forEach(o=>{s[o.toString(16)]=i}),s)),lf=c((s,n,i)=>(s[i]=i,n[2]&&n[2].filter(o=>typeof o=="string").forEach(o=>{s[o]=i}),s)),ff=c((s,n,i)=>{const r=n[2];return s[i]=i,r.forEach(o=>{s[o]=i}),s});const e="far"in _4||e2.autoFetchSvg,t=ut(kA,(s,n)=>{const i=n[0];let r=n[1];const o=n[2];return r==="far"&&!e&&(r="fas"),typeof i=="string"&&(s.names[i]={prefix:r,iconName:o}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:r,iconName:o}),s},{names:{},unicodes:{}});of=t.names,af=t.unicodes,Rs=nc(e2.styleDefault,{family:e2.familyDefault})};wA(c=>{Rs=nc(c.styleDefault,{family:e2.familyDefault})});uf();function Ps(c,e){return(rf[c]||{})[e]}function UA(c,e){return(lf[c]||{})[e]}function Q3(c,e){return(ff[c]||{})[e]}function hf(c){return of[c]||{prefix:null,iconName:null}}function BA(c){const e=af[c],t=Ps("fas",c);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function r4(){return Rs}const ks=()=>({prefix:null,iconName:null,rest:[]});function nc(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=k2}=e,s=b4[t][c],n=F6[t][c]||F6[t][s],i=c in Z1.styles?c:null;return n||i||null}const HA={[k2]:Object.keys(N4[k2]),[I1]:Object.keys(N4[I1]),[R1]:Object.keys(N4[R1])};function ic(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e,s={[k2]:"".concat(e2.cssPrefix,"-").concat(k2),[I1]:"".concat(e2.cssPrefix,"-").concat(I1),[R1]:"".concat(e2.cssPrefix,"-").concat(R1)};let n=null,i=k2;const r=YE.filter(a=>a!==Wa);r.forEach(a=>{(c.includes(s[a])||c.some(u=>HA[a].includes(u)))&&(i=a)});const o=c.reduce((a,u)=>{const h=FA(e2.cssPrefix,u);if(_4[u]?(u=DA[i].includes(u)?gA[i][u]:u,n=u,a.prefix=u):OA[i].indexOf(u)>-1?(n=u,a.prefix=nc(u,{family:i})):h?a.iconName=h:u!==e2.replacementClass&&!r.some(m=>u===s[m])&&a.rest.push(u),!t&&a.prefix&&a.iconName){const m=n==="fa"?hf(a.iconName):{},p=Q3(a.prefix,a.iconName);m.prefix&&(n=null),a.iconName=m.iconName||p||a.iconName,a.prefix=m.prefix||a.prefix,a.prefix==="far"&&!_4.far&&_4.fas&&!e2.autoFetchSvg&&(a.prefix="fas")}return a},ks());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===I1&&(_4.fass||e2.autoFetchSvg)&&(o.prefix="fass",o.iconName=Q3(o.prefix,o.iconName)||o.iconName),!o.prefix&&i===R1&&(_4.fasds||e2.autoFetchSvg)&&(o.prefix="fasds",o.iconName=Q3(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=r4()||"fas"),o}class qA{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const n=t.reduce(this._pullDefinitions,{});Object.keys(n).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...n[i]},r5(i,n[i]);const r=N4[k2][i];r&&r5(r,n[i]),uf()})}reset(){this.definitions={}}_pullDefinitions(e,t){const s=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(s).map(n=>{const{prefix:i,iconName:r,icon:o}=s[n],a=o[2];e[i]||(e[i]={}),a.length>0&&a.forEach(u=>{typeof u=="string"&&(e[i][u]=o)}),e[i][r]=o}),e}}let Ur=[],c0={};const d0={},jA=Object.keys(d0);function WA(c,e){let{mixoutsTo:t}=e;return Ur=c,c0={},Object.keys(d0).forEach(s=>{jA.indexOf(s)===-1&&delete d0[s]}),Ur.forEach(s=>{const n=s.mixout?s.mixout():{};if(Object.keys(n).forEach(i=>{typeof n[i]=="function"&&(t[i]=n[i]),typeof n[i]=="object"&&Object.keys(n[i]).forEach(r=>{t[i]||(t[i]={}),t[i][r]=n[i][r]})}),s.hooks){const i=s.hooks();Object.keys(i).forEach(r=>{c0[r]||(c0[r]=[]),c0[r].push(i[r])})}s.provides&&s.provides(d0)}),t}function l5(c,e){for(var t=arguments.length,s=new Array(t>2?t-2:0),n=2;n<t;n++)s[n-2]=arguments[n];return(c0[c]||[]).forEach(r=>{e=r.apply(null,[e,...s])}),e}function D4(c){for(var e=arguments.length,t=new Array(e>1?e-1:0),s=1;s<e;s++)t[s-1]=arguments[s];(c0[c]||[]).forEach(i=>{i.apply(null,t)})}function l4(){const c=arguments[0],e=Array.prototype.slice.call(arguments,1);return d0[c]?d0[c].apply(null,e):void 0}function o5(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:e}=c;const t=c.prefix||r4();if(e)return e=Q3(t,e)||e,Vr(df.definitions,t,e)||Vr(Z1.styles,t,e)}const df=new qA,$A=()=>{e2.autoReplaceSvg=!1,e2.observeMutations=!1,D4("noAuto")},GA={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return S3?(D4("beforeI2svg",c),l4("pseudoElements2svg",c),l4("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=c;e2.autoReplaceSvg===!1&&(e2.autoReplaceSvg=!0),e2.observeMutations=!0,IA(()=>{QA({autoReplaceSvgRoot:e}),D4("watch",c)})}},KA={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:Q3(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){const e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],t=nc(c[0]);return{prefix:t,iconName:Q3(t,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(e2.cssPrefix,"-"))>-1||c.match(LA))){const e=ic(c.split(" "),{skipLookups:!0});return{prefix:e.prefix||r4(),iconName:Q3(e.prefix,e.iconName)||e.iconName}}if(typeof c=="string"){const e=r4();return{prefix:e,iconName:Q3(e,c)||c}}}},P1={noAuto:$A,config:e2,dom:GA,parse:KA,library:df,findIconDefinition:o5,toHtml:ne},QA=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=R2}=c;(Object.keys(Z1.styles).length>0||e2.autoFetchSvg)&&S3&&e2.autoReplaceSvg&&P1.dom.i2svg({node:e})};function rc(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(t=>ne(t))}}),Object.defineProperty(c,"node",{get:function(){if(!S3)return;const t=R2.createElement("div");return t.innerHTML=c.html,t.children}}),c}function YA(c){let{children:e,main:t,mask:s,attributes:n,styles:i,transform:r}=c;if(Is(r)&&t.found&&!s.found){const{width:o,height:a}=t,u={x:o/a/2,y:.5};n.style=sc({...i,"transform-origin":"".concat(u.x+r.x/16,"em ").concat(u.y+r.y/16,"em")})}return[{tag:"svg",attributes:n,children:e}]}function XA(c){let{prefix:e,iconName:t,children:s,attributes:n,symbol:i}=c;const r=i===!0?"".concat(e,"-").concat(e2.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...n,id:r},children:s}]}]}function Ds(c){const{icons:{main:e,mask:t},prefix:s,iconName:n,transform:i,symbol:r,title:o,maskId:a,titleId:u,extra:h,watchable:m=!1}=c,{width:p,height:z}=t.found?t:e,A=s==="fak",R=[e2.replacementClass,n?"".concat(e2.cssPrefix,"-").concat(n):""].filter(s2=>h.classes.indexOf(s2)===-1).filter(s2=>s2!==""||!!s2).concat(h.classes).join(" ");let P={children:[],attributes:{...h.attributes,"data-prefix":s,"data-icon":n,class:R,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(z)}};const T=A&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/z*16*.0625,"em")}:{};m&&(P.attributes[k4]=""),o&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||U6())},children:[o]}),delete P.attributes.title);const S={...P,prefix:s,iconName:n,main:e,mask:t,maskId:a,transform:i,symbol:r,styles:{...T,...h.styles}},{children:O,attributes:B}=t.found&&e.found?l4("generateAbstractMask",S)||{children:[],attributes:{}}:l4("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=O,S.attributes=B,r?XA(S):YA(S)}function Br(c){const{content:e,width:t,height:s,transform:n,title:i,extra:r,watchable:o=!1}=c,a={...r.attributes,...i?{title:i}:{},class:r.classes.join(" ")};o&&(a[k4]="");const u={...r.styles};Is(n)&&(u.transform=AA({transform:n,startCentered:!0,width:t,height:s}),u["-webkit-transform"]=u.transform);const h=sc(u);h.length>0&&(a.style=h);const m=[];return m.push({tag:"span",attributes:a,children:[e]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function JA(c){const{content:e,title:t,extra:s}=c,n={...s.attributes,...t?{title:t}:{},class:s.classes.join(" ")},i=sc(s.styles);i.length>0&&(n.style=i);const r=[];return r.push({tag:"span",attributes:n,children:[e]}),t&&r.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),r}const{styles:ht}=Z1;function a5(c){const e=c[0],t=c[1],[s]=c.slice(4);let n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(e2.cssPrefix,"-").concat(at.GROUP)},children:[{tag:"path",attributes:{class:"".concat(e2.cssPrefix,"-").concat(at.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(e2.cssPrefix,"-").concat(at.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:t,icon:n}}const ZA={found:!1,width:512,height:512};function eT(c,e){!Ya&&!e2.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function f5(c,e){let t=e;return e==="fa"&&e2.styleDefault!==null&&(e=r4()),new Promise((s,n)=>{if(t==="fa"){const i=hf(c)||{};c=i.iconName||c,e=i.prefix||e}if(c&&e&&ht[e]&&ht[e][c]){const i=ht[e][c];return s(a5(i))}eT(c,e),s({...ZA,icon:e2.showMissingIcons&&c?l4("missingIconAbstract")||{}:{}})})}const Hr=()=>{},u5=e2.measurePerformance&&De&&De.mark&&De.measure?De:{mark:Hr,measure:Hr},l6='FA "6.6.0"',cT=c=>(u5.mark("".concat(l6," ").concat(c," begins")),()=>mf(c)),mf=c=>{u5.mark("".concat(l6," ").concat(c," ends")),u5.measure("".concat(l6," ").concat(c),"".concat(l6," ").concat(c," begins"),"".concat(l6," ").concat(c," ends"))};var Os={begin:cT,end:mf};const Ye=()=>{};function qr(c){return typeof(c.getAttribute?c.getAttribute(k4):null)=="string"}function tT(c){const e=c.getAttribute?c.getAttribute(As):null,t=c.getAttribute?c.getAttribute(Ts):null;return e&&t}function sT(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(e2.replacementClass)}function nT(){return e2.autoReplaceSvg===!0?Xe.replace:Xe[e2.autoReplaceSvg]||Xe.replace}function iT(c){return R2.createElementNS("http://www.w3.org/2000/svg",c)}function rT(c){return R2.createElement(c)}function pf(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=c.tag==="svg"?iT:rT}=e;if(typeof c=="string")return R2.createTextNode(c);const s=t(c.tag);return Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])}),(c.children||[]).forEach(function(i){s.appendChild(pf(i,{ceFn:t}))}),s}function lT(c){let e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Xe={replace:function(c){const e=c[0];if(e.parentNode)if(c[1].forEach(t=>{e.parentNode.insertBefore(pf(t),e)}),e.getAttribute(k4)===null&&e2.keepOriginalSource){let t=R2.createComment(lT(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(c){const e=c[0],t=c[1];if(~Ss(e).indexOf(e2.replacementClass))return Xe.replace(c);const s=new RegExp("".concat(e2.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const i=t[0].attributes.class.split(" ").reduce((r,o)=>(o===e2.replacementClass||o.match(s)?r.toSvg.push(o):r.toNode.push(o),r),{toNode:[],toSvg:[]});t[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const n=t.map(i=>ne(i)).join(`
`);e.setAttribute(k4,""),e.innerHTML=n}};function jr(c){c()}function gf(c,e){const t=typeof e=="function"?e:Ye;if(c.length===0)t();else{let s=jr;e2.mutateApproach===mA&&(s=i4.requestAnimationFrame||jr),s(()=>{const n=nT(),i=Os.begin("mutate");c.map(n),i(),t()})}}let Vs=!1;function Lf(){Vs=!0}function h5(){Vs=!1}let y8=null;function Wr(c){if(!Rr||!e2.observeMutations)return;const{treeCallback:e=Ye,nodeCallback:t=Ye,pseudoElementsCallback:s=Ye,observeMutationsRoot:n=R2}=c;y8=new Rr(i=>{if(Vs)return;const r=r4();R0(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!qr(o.addedNodes[0])&&(e2.searchPseudoElements&&s(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&e2.searchPseudoElements&&s(o.target.parentNode),o.type==="attributes"&&qr(o.target)&&~CA.indexOf(o.attributeName))if(o.attributeName==="class"&&tT(o.target)){const{prefix:a,iconName:u}=ic(Ss(o.target));o.target.setAttribute(As,a||r),u&&o.target.setAttribute(Ts,u)}else sT(o.target)&&t(o.target)})}),S3&&y8.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function oT(){y8&&y8.disconnect()}function aT(c){const e=c.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((s,n)=>{const i=n.split(":"),r=i[0],o=i.slice(1);return r&&o.length>0&&(s[r]=o.join(":").trim()),s},{})),t}function fT(c){const e=c.getAttribute("data-prefix"),t=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"";let n=ic(Ss(c));return n.prefix||(n.prefix=r4()),e&&t&&(n.prefix=e,n.iconName=t),n.iconName&&n.prefix||(n.prefix&&s.length>0&&(n.iconName=UA(n.prefix,c.innerText)||Ps(n.prefix,i5(c.innerText))),!n.iconName&&e2.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function uT(c){const e=R0(c.attributes).reduce((n,i)=>(n.name!=="class"&&n.name!=="style"&&(n[i.name]=i.value),n),{}),t=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return e2.autoA11y&&(t?e["aria-labelledby"]="".concat(e2.replacementClass,"-title-").concat(s||U6()):(e["aria-hidden"]="true",e.focusable="false")),e}function hT(){return{iconName:null,title:null,titleId:null,prefix:null,transform:J1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $r(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:s,rest:n}=fT(c),i=uT(c),r=l5("parseNodeAttributes",{},c);let o=e.styleParser?aT(c):[];return{iconName:t,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:J1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:i},...r}}const{styles:dT}=Z1;function zf(c){const e=e2.autoReplaceSvg==="nest"?$r(c,{styleParser:!1}):$r(c);return~e.extra.classes.indexOf(Za)?l4("generateLayersText",c,e):l4("generateSvgReplacementMutation",c,e)}let a3=new Set;Xa.map(c=>{a3.add("fa-".concat(c))});Object.keys(b4[k2]).map(a3.add.bind(a3));Object.keys(b4[I1]).map(a3.add.bind(a3));Object.keys(b4[R1]).map(a3.add.bind(a3));a3=[...a3];function Gr(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!S3)return Promise.resolve();const t=R2.documentElement.classList,s=h=>t.add("".concat(Dr,"-").concat(h)),n=h=>t.remove("".concat(Dr,"-").concat(h)),i=e2.autoFetchSvg?a3:Xa.map(h=>"fa-".concat(h)).concat(Object.keys(dT));i.includes("fa")||i.push("fa");const r=[".".concat(Za,":not([").concat(k4,"])")].concat(i.map(h=>".".concat(h,":not([").concat(k4,"])"))).join(", ");if(r.length===0)return Promise.resolve();let o=[];try{o=R0(c.querySelectorAll(r))}catch{}if(o.length>0)s("pending"),n("complete");else return Promise.resolve();const a=Os.begin("onTree"),u=o.reduce((h,m)=>{try{const p=zf(m);p&&h.push(p)}catch(p){Ya||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,m)=>{Promise.all(u).then(p=>{gf(p,()=>{s("active"),s("complete"),n("pending"),typeof e=="function"&&e(),a(),h()})}).catch(p=>{a(),m(p)})})}function mT(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zf(c).then(t=>{t&&gf([t],e)})}function pT(c){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(e||{}).icon?e:o5(e||{});let{mask:n}=t;return n&&(n=(n||{}).icon?n:o5(n||{})),c(s,{...t,mask:n})}}const gT=function(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=J1,symbol:s=!1,mask:n=null,maskId:i=null,title:r=null,titleId:o=null,classes:a=[],attributes:u={},styles:h={}}=e;if(!c)return;const{prefix:m,iconName:p,icon:z}=c;return rc({type:"icon",...c},()=>(D4("beforeDOMElementCreation",{iconDefinition:c,params:e}),e2.autoA11y&&(r?u["aria-labelledby"]="".concat(e2.replacementClass,"-title-").concat(o||U6()):(u["aria-hidden"]="true",u.focusable="false")),Ds({icons:{main:a5(z),mask:n?a5(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:p,transform:{...J1,...t},symbol:s,title:r,maskId:i,titleId:o,extra:{attributes:u,styles:h,classes:a}})))};var LT={mixout(){return{icon:pT(gT)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=Gr,c.nodeCallback=mT,c}}},provides(c){c.i2svg=function(e){const{node:t=R2,callback:s=()=>{}}=e;return Gr(t,s)},c.generateSvgReplacementMutation=function(e,t){const{iconName:s,title:n,titleId:i,prefix:r,transform:o,symbol:a,mask:u,maskId:h,extra:m}=t;return new Promise((p,z)=>{Promise.all([f5(s,r),u.iconName?f5(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[R,P]=A;p([e,Ds({icons:{main:R,mask:P},prefix:r,iconName:s,transform:o,symbol:a,maskId:h,title:n,titleId:i,extra:m,watchable:!0})])}).catch(z)})},c.generateAbstractIcon=function(e){let{children:t,attributes:s,main:n,transform:i,styles:r}=e;const o=sc(r);o.length>0&&(s.style=o);let a;return Is(i)&&(a=l4("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),t.push(a||n.icon),{children:t,attributes:s}}}},zT={mixout(){return{layer(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return rc({type:"layer"},()=>{D4("beforeDOMElementCreation",{assembler:c,params:e});let s=[];return c(n=>{Array.isArray(n)?n.map(i=>{s=s.concat(i.abstract)}):s=s.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(e2.cssPrefix,"-layers"),...t].join(" ")},children:s}]})}}}},MT={mixout(){return{counter(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:s=[],attributes:n={},styles:i={}}=e;return rc({type:"counter",content:c},()=>(D4("beforeDOMElementCreation",{content:c,params:e}),JA({content:c.toString(),title:t,extra:{attributes:n,styles:i,classes:["".concat(e2.cssPrefix,"-layers-counter"),...s]}})))}}}},CT={mixout(){return{text(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=J1,title:s=null,classes:n=[],attributes:i={},styles:r={}}=e;return rc({type:"text",content:c},()=>(D4("beforeDOMElementCreation",{content:c,params:e}),Br({content:c,transform:{...J1,...t},title:s,extra:{attributes:i,styles:r,classes:["".concat(e2.cssPrefix,"-layers-text"),...n]}})))}}},provides(c){c.generateLayersText=function(e,t){const{title:s,transform:n,extra:i}=t;let r=null,o=null;if(ja){const a=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();r=u.width/a,o=u.height/a}return e2.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Br({content:e.innerHTML,width:r,height:o,transform:n,title:s,extra:i,watchable:!0})])}}};const yT=new RegExp('"',"ug"),Kr=[1105920,1112319],Qr={FontAwesome:{normal:"fas",400:"fas"},...tA,...cA,...fA},d5=Object.keys(Qr).reduce((c,e)=>(c[e.toLowerCase()]=Qr[e],c),{}),_T=Object.keys(d5).reduce((c,e)=>{const t=d5[e];return c[e]=t[900]||[...Object.entries(t)][0][1],c},{});function vT(c){const e=c.replace(yT,""),t=PA(e,0),s=t>=Kr[0]&&t<=Kr[1],n=e.length===2?e[0]===e[1]:!1;return{value:i5(n?e[0]:e),isSecondary:s||n}}function wT(c,e){const t=c.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),n=isNaN(s)?"normal":s;return(d5[t]||{})[n]||_T[t]}function Yr(c,e){const t="".concat(dA).concat(e.replace(":","-"));return new Promise((s,n)=>{if(c.getAttribute(t)!==null)return s();const r=R0(c.children).filter(p=>p.getAttribute(c5)===e)[0],o=i4.getComputedStyle(c,e),a=o.getPropertyValue("font-family"),u=a.match(zA),h=o.getPropertyValue("font-weight"),m=o.getPropertyValue("content");if(r&&!u)return c.removeChild(r),s();if(u&&m!=="none"&&m!==""){const p=o.getPropertyValue("content");let z=wT(a,h);const{value:A,isSecondary:R}=vT(p),P=u[0].startsWith("FontAwesome");let T=Ps(z,A),S=T;if(P){const O=BA(A);O.iconName&&O.prefix&&(T=O.iconName,z=O.prefix)}if(T&&!R&&(!r||r.getAttribute(As)!==z||r.getAttribute(Ts)!==S)){c.setAttribute(t,S),r&&c.removeChild(r);const O=hT(),{extra:B}=O;B.attributes[c5]=e,f5(T,z).then(s2=>{const f2=Ds({...O,icons:{main:s2,mask:ks()},prefix:z,iconName:S,extra:B,watchable:!0}),v=R2.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(v,c.firstChild):c.appendChild(v),v.outerHTML=f2.map(M=>ne(M)).join(`