import{_ as L,r as v,o as w,c as R,a as l,h as O,z as Fe,A as Z,B as z,C as We,D as Ve,E as He,G as je,H as qe,I as le,J as ze,S as Ke,K as Xe,g as Q,e as K,f as ee,x as me,L as ge,j as Ge,m as I,F as H,M as ue,w as D,v as M,k as te,t as N,l as Ye,q as Je,u as Ze,p as Qe,N as ne,s as et,i as be,O as ve,P as tt,Q as nt}from"./index-DztK99nE.js";import{N as st}from"./WiNavbar-00RBB9ca.js";import{g as we}from"./GetUserData-S4vwgwMl.js";const ot={class:"modal__dialog__inner"},rt={class:"modal__content"},it={__name:"WiModal",setup(e,{expose:t}){const n=v(null);function s(){n.value.showModal()}function o(){n.value.close()}return t({openModal:s,closeModal:o}),(r,i)=>{const a=Z("font-awesome-icon");return w(),R("dialog",{ref_key:"dialogRef",ref:n,class:"modal__dialog"},[l("div",ot,[l("button",{class:"modal__button modal__button--close",onClick:o},[O(a,{class:"modal__icon--close modal__icon",icon:["fas","close"]})]),l("div",rt,[Fe(r.$slots,"default",{},void 0)])])],512)}}},ye=L(it,[["__scopeId","data-v-15099eb1"]]);/**
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
 */const Re="firebasestorage.googleapis.com",ke="storageBucket",at=2*60*1e3,lt=10*60*1e3;/**
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
 */class U extends Xe{constructor(t,n,s=0){super(G(t),`Firebase Storage: ${n} (${G(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,U.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return G(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var k;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(k||(k={}));function G(e){return"storage/"+e}function se(){const e="An unknown error occurred, please check the error payload for server response.";return new U(k.UNKNOWN,e)}function ut(e){return new U(k.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function ct(e){return new U(k.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function dt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new U(k.UNAUTHENTICATED,e)}function ht(){return new U(k.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function pt(e){return new U(k.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function ft(){return new U(k.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _t(){return new U(k.CANCELED,"User canceled the upload/download.")}function mt(e){return new U(k.INVALID_URL,"Invalid URL '"+e+"'.")}function gt(e){return new U(k.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function bt(){return new U(k.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ke+"' property when initializing the app?")}function vt(){return new U(k.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function wt(){return new U(k.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function yt(e){return new U(k.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function J(e){return new U(k.INVALID_ARGUMENT,e)}function Ue(){return new U(k.APP_DELETED,"The Firebase app was deleted.")}function Rt(e){return new U(k.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function V(e,t){return new U(k.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function W(e){throw new U(k.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class E{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=E.makeFromUrl(t,n)}catch{return new E(t,"")}if(s.path==="")return s;throw gt(t)}static makeFromUrl(t,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function r(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+o+i,"i"),u={bucket:1,path:3};function d(b){b.path_=decodeURIComponent(b.path)}const c="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${c}/b/${o}/o${m}`,"i"),g={bucket:1,path:3},_=n===Re?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",y=new RegExp(`^https?://${_}/${o}/${f}`,"i"),C=[{regex:a,indices:u,postModify:r},{regex:T,indices:g,postModify:d},{regex:y,indices:{bucket:1,path:2},postModify:d}];for(let b=0;b<C.length;b++){const $=C[b],F=$.regex.exec(t);if(F){const Me=F[$.indices.bucket];let X=F[$.indices.path];X||(X=""),s=new E(Me,X),$.postModify(s);break}}if(s==null)throw mt(t);return s}}class kt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Ut(e,t,n){let s=1,o=null,r=null,i=!1,a=0;function u(){return a===2}let d=!1;function c(...f){d||(d=!0,t.apply(null,f))}function p(f){o=setTimeout(()=>{o=null,e(T,u())},f)}function m(){r&&clearTimeout(r)}function T(f,...y){if(d){m();return}if(f){m(),c.call(null,f,...y);return}if(u()||i){m(),c.call(null,f,...y);return}s<64&&(s*=2);let C;a===1?(a=2,C=0):C=(s+Math.random())*1e3,p(C)}let g=!1;function _(f){g||(g=!0,m(),!d&&(o!==null?(f||(a=2),clearTimeout(o),p(0)):f||(a=1)))}return p(0),r=setTimeout(()=>{i=!0,_(!0)},n),_}function Tt(e){e(!1)}/**
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
 */function Ct(e){return e!==void 0}function At(e){return typeof e=="object"&&!Array.isArray(e)}function oe(e){return typeof e=="string"||e instanceof String}function ce(e){return re()&&e instanceof Blob}function re(){return typeof Blob<"u"}function de(e,t,n,s){if(s<t)throw J(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw J(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function ie(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function Te(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const o=t(s)+"="+t(e[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var B;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(B||(B={}));/**
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
 */function Et(e,t){const n=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,r=t.indexOf(e)!==-1;return n||o||r}/**
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
 */class Nt{constructor(t,n,s,o,r,i,a,u,d,c,p,m=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=r,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=c,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,g)=>{this.resolve_=T,this.reject_=g,this.start_()})}start_(){const t=(s,o)=>{if(o){s(!1,new j(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const i=a=>{const u=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&r.addUploadProgressListener(i),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(i),this.pendingConnection_=null;const a=r.getErrorCode()===B.NO_ERROR,u=r.getStatus();if(!a||Et(u,this.additionalRetryCodes_)&&this.retry){const c=r.getErrorCode()===B.ABORT;s(!1,new j(!1,null,c));return}const d=this.successCodes_.indexOf(u)!==-1;s(!0,new j(d,r))})},n=(s,o)=>{const r=this.resolve_,i=this.reject_,a=o.connection;if(o.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());Ct(u)?r(u):r()}catch(u){i(u)}else if(a!==null){const u=se();u.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,u)):i(u)}else if(o.canceled){const u=this.appDelete_?Ue():_t();i(u)}else{const u=ft();i(u)}};this.canceled_?n(!1,new j(!1,null,!0)):this.backoffId_=Ut(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Tt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class j{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function It(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Pt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function xt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Ot(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Dt(e,t,n,s,o,r,i=!0){const a=Te(e.urlParams),u=e.url+a,d=Object.assign({},e.headers);return xt(d,t),It(d,n),Pt(d,r),Ot(d,s),new Nt(u,e.method,d,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,i)}/**
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
 */function Bt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function St(...e){const t=Bt();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(re())return new Blob(e);throw new U(k.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Lt(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function $t(e){if(typeof atob>"u")throw yt("base-64");return atob(e)}/**
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
 */const P={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Y{constructor(t,n){this.data=t,this.contentType=n||null}}function Mt(e,t){switch(e){case P.RAW:return new Y(Ce(t));case P.BASE64:case P.BASE64URL:return new Y(Ae(e,t));case P.DATA_URL:return new Y(Wt(t),Vt(t))}throw se()}function Ce(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const r=s,i=e.charCodeAt(++n);s=65536|(r&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function Ft(e){let t;try{t=decodeURIComponent(e)}catch{throw V(P.DATA_URL,"Malformed data URL.")}return Ce(t)}function Ae(e,t){switch(e){case P.BASE64:{const o=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(o||r)throw V(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case P.BASE64URL:{const o=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(o||r)throw V(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=$t(t)}catch(o){throw o.message.includes("polyfill")?o:V(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class Ee{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw V(P.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Ht(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function Wt(e){const t=new Ee(e);return t.base64?Ae(P.BASE64,t.rest):Ft(t.rest)}function Vt(e){return new Ee(e).contentType}function Ht(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class x{constructor(t,n){let s=0,o="";ce(t)?(this.data_=t,s=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(ce(this.data_)){const s=this.data_,o=Lt(s,t,n);return o===null?null:new x(o)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new x(s,!0)}}static getBlob(...t){if(re()){const n=t.map(s=>s instanceof x?s.data_:s);return new x(St.apply(null,n))}else{const n=t.map(i=>oe(i)?Mt(P.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const o=new Uint8Array(s);let r=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)o[r++]=i[a]}),new x(o,!0)}}uploadData(){return this.data_}}/**
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
 */function Ne(e){let t;try{t=JSON.parse(e)}catch{return null}return At(t)?t:null}/**
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
 */function jt(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function qt(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function Ie(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function zt(e,t){return t}class A{constructor(t,n,s,o){this.server=t,this.local=n||t,this.writable=!!s,this.xform=o||zt}}let q=null;function Kt(e){return!oe(e)||e.length<2?e:Ie(e)}function Pe(){if(q)return q;const e=[];e.push(new A("bucket")),e.push(new A("generation")),e.push(new A("metageneration")),e.push(new A("name","fullPath",!0));function t(r,i){return Kt(i)}const n=new A("name");n.xform=t,e.push(n);function s(r,i){return i!==void 0?Number(i):i}const o=new A("size");return o.xform=s,e.push(o),e.push(new A("timeCreated")),e.push(new A("updated")),e.push(new A("md5Hash",null,!0)),e.push(new A("cacheControl",null,!0)),e.push(new A("contentDisposition",null,!0)),e.push(new A("contentEncoding",null,!0)),e.push(new A("contentLanguage",null,!0)),e.push(new A("contentType",null,!0)),e.push(new A("metadata","customMetadata",!0)),q=e,q}function Xt(e,t){function n(){const s=e.bucket,o=e.fullPath,r=new E(s,o);return t._makeStorageReference(r)}Object.defineProperty(e,"ref",{get:n})}function Gt(e,t,n){const s={};s.type="file";const o=n.length;for(let r=0;r<o;r++){const i=n[r];s[i.local]=i.xform(s,t[i.server])}return Xt(s,e),s}function xe(e,t,n){const s=Ne(t);return s===null?null:Gt(e,s,n)}function Yt(e,t,n,s){const o=Ne(t);if(o===null||!oe(o.downloadTokens))return null;const r=o.downloadTokens;if(r.length===0)return null;const i=encodeURIComponent;return r.split(",").map(d=>{const c=e.bucket,p=e.fullPath,m="/b/"+i(c)+"/o/"+i(p),T=ie(m,n,s),g=Te({alt:"media",token:d});return T+g})[0]}function Jt(e,t){const n={},s=t.length;for(let o=0;o<s;o++){const r=t[o];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}class Oe{constructor(t,n,s,o){this.url=t,this.method=n,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function De(e){if(!e)throw se()}function Zt(e,t){function n(s,o){const r=xe(e,o,t);return De(r!==null),r}return n}function Qt(e,t){function n(s,o){const r=xe(e,o,t);return De(r!==null),Yt(r,o,e.host,e._protocol)}return n}function Be(e){function t(n,s){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=ht():o=dt():n.getStatus()===402?o=ct(e.bucket):n.getStatus()===403?o=pt(e.path):o=s,o.status=n.getStatus(),o.serverResponse=s.serverResponse,o}return t}function en(e){const t=Be(e);function n(s,o){let r=t(s,o);return s.getStatus()===404&&(r=ut(e.path)),r.serverResponse=o.serverResponse,r}return n}function tn(e,t,n){const s=t.fullServerUrl(),o=ie(s,e.host,e._protocol),r="GET",i=e.maxOperationRetryTime,a=new Oe(o,r,Qt(e,n),i);return a.errorHandler=en(t),a}function nn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function sn(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=nn(null,t)),s}function on(e,t,n,s,o){const r=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let b=0;b<2;b++)C=C+Math.random().toString().slice(2);return C}const u=a();i["Content-Type"]="multipart/related; boundary="+u;const d=sn(t,s,o),c=Jt(d,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,m=`\r
--`+u+"--",T=x.getBlob(p,s,m);if(T===null)throw vt();const g={name:d.fullPath},_=ie(r,e.host,e._protocol),f="POST",y=e.maxUploadRetryTime,h=new Oe(_,f,Zt(e,n),y);return h.urlParams=g,h.headers=i,h.body=T.uploadData(),h.errorHandler=Be(t),h}class rn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=B.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=B.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=B.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,o){if(this.sent_)throw W("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw W("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw W("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw W("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw W("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class an extends rn{initXhr(){this.xhr_.responseType="text"}}function Se(){return new an}/**
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
 */class S{constructor(t,n){this._service=t,n instanceof E?this._location=n:this._location=E.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new S(t,n)}get root(){const t=new E(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ie(this._location.path)}get storage(){return this._service}get parent(){const t=jt(this._location.path);if(t===null)return null;const n=new E(this._location.bucket,t);return new S(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Rt(t)}}function ln(e,t,n){e._throwIfRoot("uploadBytes");const s=on(e.storage,e._location,Pe(),new x(t,!0),n);return e.storage.makeRequestWithTokens(s,Se).then(o=>({metadata:o,ref:e}))}function un(e){e._throwIfRoot("getDownloadURL");const t=tn(e.storage,e._location,Pe());return e.storage.makeRequestWithTokens(t,Se).then(n=>{if(n===null)throw wt();return n})}function cn(e,t){const n=qt(e._location.path,t),s=new E(e._location.bucket,n);return new S(e.storage,s)}/**
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
 */function dn(e){return/^[A-Za-z]+:\/\//.test(e)}function hn(e,t){return new S(e,t)}function Le(e,t){if(e instanceof ae){const n=e;if(n._bucket==null)throw bt();const s=new S(n,n._bucket);return t!=null?Le(s,t):s}else return t!==void 0?cn(e,t):e}function pn(e,t){if(t&&dn(t)){if(e instanceof ae)return hn(e,t);throw J("To use ref(service, url), the first argument must be a Storage instance.")}else return Le(e,t)}function he(e,t){const n=t==null?void 0:t[ke];return n==null?null:E.makeFromBucketSpec(n,e)}function fn(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=s;o&&(e._overrideAuthToken=typeof o=="string"?o:ze(o,e.app.options.projectId))}class ae{constructor(t,n,s,o,r){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=r,this._bucket=null,this._host=Re,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=at,this._maxUploadRetryTime=lt,this._requests=new Set,o!=null?this._bucket=E.makeFromBucketSpec(o,this._host):this._bucket=he(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=E.makeFromBucketSpec(this._url,t):this._bucket=he(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){de("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){de("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new S(this,t)}_makeRequest(t,n,s,o,r=!0){if(this._deleted)return new kt(Ue());{const i=Dt(t,this._appId,s,o,n,this._firebaseVersion,r);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,o).getPromise()}}const pe="@firebase/storage",fe="0.13.2";/**
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
 */const $e="storage";function _n(e,t,n){return e=z(e),ln(e,t,n)}function mn(e){return e=z(e),un(e)}function gn(e,t){return e=z(e),pn(e,t)}function bn(e=He(),t){e=z(e);const s=We(e,$e).getImmediate({identifier:t}),o=Ve("storage");return o&&vn(s,...o),s}function vn(e,t,n,s={}){fn(e,t,n,s)}function wn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new ae(n,s,o,t,Ke)}function yn(){je(new qe($e,wn,"PUBLIC").setMultipleInstances(!0)),le(pe,fe,""),le(pe,fe,"esm2017")}yn();const Rn=Q(),kn=bn(),Un=K();async function _e(e,t){const n=gn(kn,t);return await _n(n,e),await mn(n)}async function Tn(e,t,n,s){s.value=!0;const o=Un.currentUser,r=ee(Rn,"users",o.uid),i={};try{if(n.value){const a=await _e(n.value,`avatars/${o.uid}`);i.photoUrl=a,e.photoUrl=a}if(t.value){const a=await _e(t.value,`wallpapers/${o.uid}`);i.wallpaperUrl=a,e.wallpaperUrl=a}return await me(r,i),console.log("Профиль успешно обновлен"),{avatarUrl:i.photoUrl,wallpaperUrl:i.wallpaperUrl}}catch(a){console.log("ошибка при загрузке профиля,",a)}finally{s.value=!1}}const Cn=["src"],An={key:0,for:"input-wallaper",class:"profile__wallaper-edit"},En={key:0,class:"profile__spinner"},Nn=["src"],In={key:1,for:"input-avatar",class:"profile__photo profile__photo--edit"},Pn={__name:"WiUserPagePicturesEdit",props:{user:{type:Object,default:()=>({})}},setup(e){const t=v(!1),n=v(!1),s=v(null),o=v(null),r=v(!1),i=v(!1),a=e;function u(d,c){const p=c.target.files[0];d==="avatar"?o.value=p:d==="wallpaper"&&(s.value=p),Tn(a.user,s,o,r)}return(d,c)=>{const p=Z("font-awesome-icon");return w(),R(H,null,[l("div",{class:"profile__wallapper",onMouseenter:c[2]||(c[2]=m=>t.value=!0),onMouseleave:c[3]||(c[3]=m=>t.value=!1)},[l("img",{src:a.user.wallpaperUrl,alt:"user-wallpaper",loading:"lazy",class:"profile__wallapper-img",style:ge({opacity:i.value?1:0}),onLoad:c[0]||(c[0]=m=>i.value=!0)},null,44,Cn),t.value?(w(),R("label",An,[l("input",{id:"input-wallaper",class:"profile__input profile__input--wallpaper",type:"file",onChange:c[1]||(c[1]=m=>u("wallpaper",m))},null,32),c[7]||(c[7]=Ge(" изменить обложку "))])):I("",!0)],32),l("div",{class:"profile__photo-wrapper",onMouseenter:c[5]||(c[5]=m=>n.value=!0),onMouseleave:c[6]||(c[6]=m=>n.value=!1)},[r.value?(w(),R("div",En)):I("",!0),l("img",{class:"profile__photo",src:a.user.photoUrl,alt:"user-photo",loading:"lazy"},null,8,Nn),n.value?(w(),R("label",In,[l("input",{id:"input-avatar",class:"profile__input profile__input--avatar",type:"file",onChange:c[4]||(c[4]=m=>u("avatar",m))},null,32),O(p,{class:"profile__icon profile__icon-edit",icon:["fas","edit"]})])):I("",!0)],32)],64)}}},xn=L(Pn,[["__scopeId","data-v-fe72d865"]]),On=[{name:"Аниме",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Рыбалка",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Танцы",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Хоббихорсинг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Квадробинг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Футбол",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Рисование",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Вышивание",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Фитнес",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Лего",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Паркур",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Кулинария",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Фотография",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Йога",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Плавание",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Велоспорт",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Программирование",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Чтение",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Гейминг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Музыка",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Бег",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Садоводство",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"}],Dn={class:"user-edit-list"},Bn={class:"badge-wrapper"},Sn=["onClick"],Ln={__name:"WiUserPageSettings",props:{user:{type:Object,default:()=>({name:"Unknown",about:"Empty"})},pickedBadges:{type:Array,default:()=>[]}},emits:["close","updateProfile"],setup(e,{emit:t}){const n=e,s=t,o=v(""),r=v(""),i=K(),a=Q(),u=v(n.user.displayName),d=v(n.user.about),c=v([...n.pickedBadges]);ue(()=>n.user,g=>{u.value=g.displayName,d.value=g.about},{immediate:!0}),ue(()=>n.pickedBadges,g=>{c.value=[...g]},{immediate:!0});function p(g){return c.value.some(_=>_.name===g.name)}function m(g){const _=c.value.findIndex(f=>f.name===g.name);_!==-1?c.value.splice(_,1):c.value.push(g),console.log(c.value)}async function T(){const g=i.currentUser;if(!g){console.error("Пользователь не авторизован");return}const _=ee(a,"users",g.uid),f=await Je(_),y=f.exists()?f.data():{},h={};h.displayName=r.value!==""?r.value:y.displayName||g.displayName,h.about=o.value!==""?o.value:y.about||"",h.badges=c.value.length>0?c.value:y.badges||[];try{await me(_,h),console.log("Профиль успешно обновлен"),s("updateProfile",{userName:h.displayName,userAbout:h.about,pickedBadges:h.badges})}catch(C){console.error("Ошибка при обновлении профиля:",C)}}return(g,_)=>(w(),R("form",{method:"dialog",class:"form",onSubmit:T},[_[5]||(_[5]=l("h1",null,"Редактировать профиль",-1)),l("ul",Dn,[l("li",null,[_[2]||(_[2]=l("label",{for:"name"},"Имя:",-1)),D(l("input",{id:"name","onUpdate:modelValue":_[0]||(_[0]=f=>r.value=f),type:"text"},null,512),[[M,r.value]])]),l("li",null,[_[3]||(_[3]=l("label",{for:"about"},"Краткая информация:",-1)),D(l("textarea",{id:"about","onUpdate:modelValue":_[1]||(_[1]=f=>o.value=f),name:""},null,512),[[M,o.value]])]),l("li",null,[_[4]||(_[4]=l("label",{for:""},"Выберите интересы:",-1)),l("div",Bn,[(w(!0),R(H,null,te(Ye(On),(f,y)=>(w(),R("div",{key:y,class:"badge",style:ge({backgroundColor:p(f)?"green":f.BgColor,color:p(f)?"white":f.color}),onClick:h=>m(f)},N(f.name),13,Sn))),128))])])]),_[6]||(_[6]=l("button",{class:"btn-modal-save"}," сохранить изменения ",-1))],32))}},$n=L(Ln,[["__scopeId","data-v-5ff80c7c"]]),Mn="/wisher/assets/empty-box-D7umrX5t.png",Fn=["data-id"],Wn=["src"],Vn={card__title:""},Hn={class:"card__price"},jn={class:"card__user__info"},qn={class:"user__info--info"},zn=["src"],Kn=["textContent"],Xn={class:"user__info--date"},Gn={__name:"WiCardCreate",props:{wish:{type:Object},userImg:{type:String},userName:{type:String}},setup(e){const t=e,n=Ze();function s(a){n.push(`${Qe.card}/${a}`).catch(u=>{console.log("Card not allowed",u)})}function o(a){return a?new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:0}).format(a):""}function r(a){a.target.classList.add("card__hover")}function i(a){a.target.classList.remove("card__hover")}return(a,u)=>(w(),R("div",{class:"card","data-id":e.wish.id,onMouseenter:u[0]||(u[0]=d=>r(d)),onMouseleave:u[1]||(u[1]=d=>i(d)),onClick:u[2]||(u[2]=d=>s(e.wish.id))},[l("img",{src:e.wish.img,alt:"",class:"card__image"},null,8,Wn),l("h3",Vn,N(e.wish.name),1),l("p",Hn,N(o(e.wish.price))+" руб ",1),l("div",jn,[l("div",qn,[l("img",{src:t.userImg,alt:"User Avatar",class:"card__img user__info--avatarImg"},null,8,zn),l("span",{textContent:N(t.userName)},null,8,Kn)]),l("span",Xn,N(new Date().toLocaleDateString()),1)])],40,Fn))}},Yn=L(Gn,[["__scopeId","data-v-1e9c093d"]]),Jn={class:"form__wrapper"},Zn={class:"form__list"},Qn={class:"form__preview__card"},es={class:"card__label card__label--file",for:"file-input"},ts=["src"],ns={card__title:""},ss={class:"card__price"},os={class:"card__user__info"},rs={class:"user__info--info"},is=["src"],as=["textContent"],ls={class:"user__info--date"},us={__name:"WiCardsAdd",props:{userImg:{type:String},userName:{type:String}},setup(e,{emit:t}){const n=e,s=t,o=Q(),r=K(),i=v(""),a=v(""),u=v(""),d=v(""),c=v(new Date().toLocaleDateString()),p=v("");function m(y){return y?new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:0}).format(y):""}function T(){a.value="",u.value="",d.value="",p.value="",i.value=""}function g(y,h,C,b,$,F){return{id:crypto.randomUUID(),userId:r.currentUser.uid,img:y||"https://media.istockphoto.com/id/1308342088/vector/surprise-gift-box-gift-box-with-red-ribbon-bow-flat-style-element-design-for-giveaway.jpg?s=612x612&w=0&k=20&c=FUOJS2CFbYIqm4R7zfyKUdeS-gMyc3bGlRr1rL7rjQ0=",name:h,hover:!1,description:C||"Описание отсутствует. ",price:b||0,date:$,link:F,reserve:""}}async function _(){const y=g(i.value,a.value,u.value,d.value,c.value,p.value);await et(ee(o,"wishes",y.id),y),s("handleAddWish",y),T()}function f(y){const h=y.target.files[0];if(h){const C=new FileReader;C.onload=b=>{i.value=b.target.result},C.readAsDataURL(h)}}return(y,h)=>{const C=Z("font-awesome-icon");return w(),R("form",{method:"dialog",class:"form",onSubmit:_},[h[9]||(h[9]=l("h1",{class:"form__title"}," Добавить желание ",-1)),l("div",Jn,[l("ul",Zn,[l("li",null,[h[5]||(h[5]=l("label",{for:"name"},"Название:",-1)),D(l("input",{id:"name","onUpdate:modelValue":h[0]||(h[0]=b=>a.value=b),type:"text",required:""},null,512),[[M,a.value]])]),l("li",null,[h[6]||(h[6]=l("label",{for:"description"},"Описание",-1)),D(l("textarea",{id:"description","onUpdate:modelValue":h[1]||(h[1]=b=>u.value=b),type:"text"},null,512),[[M,u.value]])]),l("li",null,[h[7]||(h[7]=l("label",{for:"price"},"Цена",-1)),D(l("input",{id:"price","onUpdate:modelValue":h[2]||(h[2]=b=>d.value=b),type:"number"},null,512),[[M,d.value]])]),l("li",null,[h[8]||(h[8]=l("label",{for:"link"},"Ссылка на товар",-1)),D(l("input",{id:"link","onUpdate:modelValue":h[3]||(h[3]=b=>p.value=b),type:"text"},null,512),[[M,p.value]])])]),l("div",Qn,[l("label",es,[i.value?(w(),R("img",{key:0,src:i.value,alt:"",class:"card__image"},null,8,ts)):I("",!0),i.value?I("",!0):(w(),ne(C,{key:1,class:"card__icon--file",icon:["fas","file-image"]})),l("input",{id:"file-input",class:"card__input card__input--file",type:"file",onChange:h[4]||(h[4]=b=>f(b))},null,32)]),l("h3",ns,N(a.value),1),l("p",ss,N(m(d.value)),1),l("div",os,[l("div",rs,[l("img",{src:n.userImg,alt:"User Avatar",class:"card__img user__info--avatarImg"},null,8,is),l("span",{textContent:N(n.userName)},null,8,as)]),l("span",ls,N(c.value),1)])])]),h[10]||(h[10]=l("button",{class:"form__btn form__btn--add"}," добавить ",-1))],32)}}},cs=L(us,[["__scopeId","data-v-a30cc3ac"]]),ds={key:1,class:"wishes__list"},hs={class:"whishes__cards"},ps={key:2,class:"wishes__empty"},fs={__name:"WiUserWishes",props:{user:{type:Object,default:()=>({})},hasEditPermission:{type:Boolean,default:()=>!1},currentUserUid:{type:String}},setup(e){const t=v(null),n=v([]),s=e;be(async()=>{console.log("UID пользователя:",s.currentUserUid);try{const{wishes:i}=await we(s.currentUserUid);n.value=i}catch(i){console.error("Ошибка при получении желаний:",i)}});function o(){t.value.openModal()}function r(i){n.value.push(i)}return(i,a)=>(w(),R(H,null,[a[1]||(a[1]=l("h2",null,"Список желаний",-1)),e.hasEditPermission?(w(),R("button",{key:0,class:"profile__button profile__button--addWish",onClick:o}," Добавить ")):I("",!0),O(ye,{ref_key:"modalAddCard",ref:t},{default:ve(()=>[O(cs,{"user-img":s.user.photoUrl,"user-name":s.user.displayName,onHandleAddWish:r},null,8,["user-img","user-name"])]),_:1},512),n.value.length?(w(),R("section",ds,[l("div",hs,[(w(!0),R(H,null,te(n.value,u=>(w(),ne(Yn,{key:u.id,wish:u,"user-img":s.user.photoUrl,"user-name":s.user.displayName},null,8,["wish","user-img","user-name"]))),128))])])):(w(),R("div",ps,a[0]||(a[0]=[l("img",{src:Mn,alt:"empty-box",loading:"lazy"},null,-1),l("p",null,"У пользователя пока нет желаний.",-1)])))],64))}},_s=L(fs,[["__scopeId","data-v-7aeede9e"]]),ms={class:"user"},gs={class:"skeleton-loader user__info"},bs={class:"user__info"},vs={key:0,class:"profile"},ws={class:"profile__settings"},ys={key:1,style:{height:"55px"}},Rs={class:"profile__name"},ks={class:"profile__about"},Us={class:"profile__badges"},Ts={class:"wishes"},Cs={__name:"UserPageView",setup(e){const t=v({}),n=v([]),s=nt(),o=v(null),r=v(!0),i=K(),a=v(!0),u=v("");function d(){o.value.openModal()}function c(p){t.value.displayName=p.userName,t.value.about=p.userAbout,n.value=p.pickedBadges,console.log("Профиль обновлен в родительском компоненте:",p)}return be(async()=>{r.value=!0;const p=s.params.uid,m=i.currentUser;u.value=m.uid,m&&m.uid===p&&(a.value=!0);const{user:T}=await we(p);T?(t.value=T,n.value=T.badges||[]):console.error("Не удалось загрузить данные пользователя"),r.value=!1}),(p,m)=>(w(),R("div",null,[l("div",null,[O(st)]),l("main",ms,[D(l("div",gs,null,512),[[tt,r.value]]),l("section",bs,[!r.value&&t.value&&t.value.displayName?(w(),R("div",vs,[O(xn,{user:t.value},null,8,["user"]),l("div",ws,[a.value?(w(),R("button",{key:0,class:"profile__button profile__button--edit",onClick:d}," Редактировать профиль ")):I("",!0),a.value?I("",!0):(w(),R("div",ys)),O(ye,{ref_key:"modal",ref:o},{default:ve(()=>[O($n,{user:t.value,"picked-badges":n.value,onUpdateProfile:c},null,8,["user","picked-badges"])]),_:1},512)]),l("h2",Rs,N(t.value.displayName),1),l("p",ks,N(t.value.about||"Информация о пользователе отсутствует"),1),l("div",Us,[(w(!0),R(H,null,te(n.value,(T,g)=>(w(),R("div",{key:g,class:"badge"},N(T.name),1))),128))])])):I("",!0)]),l("div",Ts,[u.value&&t.value?(w(),ne(_s,{key:0,currentUserUid:u.value,hasEditPermission:a.value,user:t.value},null,8,["currentUserUid","hasEditPermission","user"])):I("",!0)])])]))}},Is=L(Cs,[["__scopeId","data-v-5b5e788b"]]);export{Is as default};
