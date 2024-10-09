import{_ as ce,o as R,c as U,a as p,r as O,k as de,t as F,l as $,i as B,m as q,n as Oe,p as Ie,q as Ce,x as Pe,C as De,y as Q,z as xe,S as Le,F as Se,g as Be,d as ee,A as Me,B as Fe,f as te,D as $e,E as He,H as Ve,I as ne,J as se,K as re,L as je,M as qe,N as ze}from"./index-B6lVp50B.js";import We from"./EditUserPage-D5dzKlxy.js";const Xe="/wisher/assets/empty-box-D7umrX5t.png",Ke={},Ge={class:"nav"};function Ye(e,t){return R(),U("nav",Ge,t[0]||(t[0]=[p("ul",{class:"nav-list"},[p("span",{class:"logo"},"ВИШЕР")],-1)]))}const Ze=ce(Ke,[["render",Ye],["__scopeId","data-v-d9522025"]]),Je=["src"],Qe={class:"user-card-title"},et={class:"user-card-description"},tt={key:0,class:"card-icons"},nt={__name:"WishCard",setup(e){const t=O(!1),n=()=>{},s=()=>{},r=()=>{};return(o,i)=>{const a=de("font-awesome-icon");return R(),U("div",{class:"card",onMouseenter:i[0]||(i[0]=l=>t.value=!0),onMouseleave:i[1]||(i[1]=l=>t.value=!1)},[p("img",{class:"card-img",src:o.wish.img,alt:""},null,8,Je),p("p",Qe,F(o.wish.name),1),p("p",et,F(o.wish.description),1),t.value?(R(),U("div",tt,[$(a,{class:"card-icon",icon:["fas","heart"],onClick:n}),$(a,{class:"card-icon",icon:["fas","add"],onClick:r}),$(a,{class:"card-icon",icon:["fas","comment"],onClick:s})])):B("",!0)],32)}}};/**
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
 */const he="firebasestorage.googleapis.com",pe="storageBucket",st=2*60*1e3,rt=10*60*1e3;/**
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
 */class _ extends Se{constructor(t,n,s=0){super(z(t),`Firebase Storage: ${n} (${z(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return z(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var f;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(f||(f={}));function z(e){return"storage/"+e}function K(){const e="An unknown error occurred, please check the error payload for server response.";return new _(f.UNKNOWN,e)}function ot(e){return new _(f.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function it(e){return new _(f.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function at(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _(f.UNAUTHENTICATED,e)}function lt(){return new _(f.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ut(e){return new _(f.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function ct(){return new _(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function dt(){return new _(f.CANCELED,"User canceled the upload/download.")}function ht(e){return new _(f.INVALID_URL,"Invalid URL '"+e+"'.")}function pt(e){return new _(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function ft(){return new _(f.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+pe+"' property when initializing the app?")}function _t(){return new _(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function gt(){return new _(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function mt(e){return new _(f.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function X(e){return new _(f.INVALID_ARGUMENT,e)}function fe(){return new _(f.APP_DELETED,"The Firebase app was deleted.")}function wt(e){return new _(f.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function H(e,t){return new _(f.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function M(e){throw new _(f.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class E{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=E.makeFromUrl(t,n)}catch{return new E(t,"")}if(s.path==="")return s;throw pt(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(u){u.path.charAt(u.path.length-1)==="/"&&(u.path_=u.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),l={bucket:1,path:3};function c(u){u.path_=decodeURIComponent(u.path)}const m="v[A-Za-z0-9_]+",T=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",v=new RegExp(`^https?://${T}/${m}/b/${r}/o${y}`,"i"),k={bucket:1,path:3},C=n===he?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",P=new RegExp(`^https?://${C}/${r}/${w}`,"i"),A=[{regex:a,indices:l,postModify:o},{regex:v,indices:k,postModify:c},{regex:P,indices:{bucket:1,path:2},postModify:c}];for(let u=0;u<A.length;u++){const d=A[u],g=d.regex.exec(t);if(g){const h=g[d.indices.bucket];let D=g[d.indices.path];D||(D=""),s=new E(h,D),d.postModify(s);break}}if(s==null)throw ht(t);return s}}class bt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Rt(e,t,n){let s=1,r=null,o=null,i=!1,a=0;function l(){return a===2}let c=!1;function m(...w){c||(c=!0,t.apply(null,w))}function T(w){r=setTimeout(()=>{r=null,e(v,l())},w)}function y(){o&&clearTimeout(o)}function v(w,...P){if(c){y();return}if(w){y(),m.call(null,w,...P);return}if(l()||i){y(),m.call(null,w,...P);return}s<64&&(s*=2);let A;a===1?(a=2,A=0):A=(s+Math.random())*1e3,T(A)}let k=!1;function C(w){k||(k=!0,y(),!c&&(r!==null?(w||(a=2),clearTimeout(r),T(0)):w||(a=1)))}return T(0),o=setTimeout(()=>{i=!0,C(!0)},n),C}function yt(e){e(!1)}/**
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
 */function vt(e){return e!==void 0}function Tt(e){return typeof e=="object"&&!Array.isArray(e)}function G(e){return typeof e=="string"||e instanceof String}function oe(e){return Y()&&e instanceof Blob}function Y(){return typeof Blob<"u"}function ie(e,t,n,s){if(s<t)throw X(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw X(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function Z(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function _e(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var L;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(L||(L={}));/**
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
 */function kt(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
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
 */class Ut{constructor(t,n,s,r,o,i,a,l,c,m,T,y=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=m,this.connectionFactory_=T,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,k)=>{this.resolve_=v,this.reject_=k,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new V(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===L.NO_ERROR,l=o.getStatus();if(!a||kt(l,this.additionalRetryCodes_)&&this.retry){const m=o.getErrorCode()===L.ABORT;s(!1,new V(!1,null,m));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new V(c,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());vt(l)?o(l):o()}catch(l){i(l)}else if(a!==null){const l=K();l.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,l)):i(l)}else if(r.canceled){const l=this.appDelete_?fe():dt();i(l)}else{const l=ct();i(l)}};this.canceled_?n(!1,new V(!1,null,!0)):this.backoffId_=Rt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&yt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class V{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Et(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function At(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Nt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Ot(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function It(e,t,n,s,r,o,i=!0){const a=_e(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return Nt(c,t),Et(c,n),At(c,o),Ot(c,s),new Ut(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}/**
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
 */function Ct(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Pt(...e){const t=Ct();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(Y())return new Blob(e);throw new _(f.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Dt(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function xt(e){if(typeof atob>"u")throw mt("base-64");return atob(e)}/**
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
 */const I={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class W{constructor(t,n){this.data=t,this.contentType=n||null}}function Lt(e,t){switch(e){case I.RAW:return new W(ge(t));case I.BASE64:case I.BASE64URL:return new W(me(e,t));case I.DATA_URL:return new W(Bt(t),Mt(t))}throw K()}function ge(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=s,i=e.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function St(e){let t;try{t=decodeURIComponent(e)}catch{throw H(I.DATA_URL,"Malformed data URL.")}return ge(t)}function me(e,t){switch(e){case I.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw H(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case I.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw H(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=xt(t)}catch(r){throw r.message.includes("polyfill")?r:H(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class we{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw H(I.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Ft(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function Bt(e){const t=new we(e);return t.base64?me(I.BASE64,t.rest):St(t.rest)}function Mt(e){return new we(e).contentType}function Ft(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class x{constructor(t,n){let s=0,r="";oe(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(oe(this.data_)){const s=this.data_,r=Dt(s,t,n);return r===null?null:new x(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new x(s,!0)}}static getBlob(...t){if(Y()){const n=t.map(s=>s instanceof x?s.data_:s);return new x(Pt.apply(null,n))}else{const n=t.map(i=>G(i)?Lt(I.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)r[o++]=i[a]}),new x(r,!0)}}uploadData(){return this.data_}}/**
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
 */function be(e){let t;try{t=JSON.parse(e)}catch{return null}return Tt(t)?t:null}/**
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
 */function $t(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Ht(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function Re(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Vt(e,t){return t}class b{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||Vt}}let j=null;function jt(e){return!G(e)||e.length<2?e:Re(e)}function ye(){if(j)return j;const e=[];e.push(new b("bucket")),e.push(new b("generation")),e.push(new b("metageneration")),e.push(new b("name","fullPath",!0));function t(o,i){return jt(i)}const n=new b("name");n.xform=t,e.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new b("size");return r.xform=s,e.push(r),e.push(new b("timeCreated")),e.push(new b("updated")),e.push(new b("md5Hash",null,!0)),e.push(new b("cacheControl",null,!0)),e.push(new b("contentDisposition",null,!0)),e.push(new b("contentEncoding",null,!0)),e.push(new b("contentLanguage",null,!0)),e.push(new b("contentType",null,!0)),e.push(new b("metadata","customMetadata",!0)),j=e,j}function qt(e,t){function n(){const s=e.bucket,r=e.fullPath,o=new E(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function zt(e,t,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,t[i.server])}return qt(s,e),s}function ve(e,t,n){const s=be(t);return s===null?null:zt(e,s,n)}function Wt(e,t,n,s){const r=be(t);if(r===null||!G(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(c=>{const m=e.bucket,T=e.fullPath,y="/b/"+i(m)+"/o/"+i(T),v=Z(y,n,s),k=_e({alt:"media",token:c});return v+k})[0]}function Xt(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class Te{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ke(e){if(!e)throw K()}function Kt(e,t){function n(s,r){const o=ve(e,r,t);return ke(o!==null),o}return n}function Gt(e,t){function n(s,r){const o=ve(e,r,t);return ke(o!==null),Wt(o,r,e.host,e._protocol)}return n}function Ue(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=lt():r=at():n.getStatus()===402?r=it(e.bucket):n.getStatus()===403?r=ut(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function Yt(e){const t=Ue(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=ot(e.path)),o.serverResponse=r.serverResponse,o}return n}function Zt(e,t,n){const s=t.fullServerUrl(),r=Z(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new Te(r,o,Gt(e,n),i);return a.errorHandler=Yt(t),a}function Jt(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Qt(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=Jt(null,t)),s}function en(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let A="";for(let u=0;u<2;u++)A=A+Math.random().toString().slice(2);return A}const l=a();i["Content-Type"]="multipart/related; boundary="+l;const c=Qt(t,s,r),m=Xt(c,n),T="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,y=`\r
--`+l+"--",v=x.getBlob(T,s,y);if(v===null)throw _t();const k={name:c.fullPath},C=Z(o,e.host,e._protocol),w="POST",P=e.maxUploadRetryTime,N=new Te(C,w,Kt(e,n),P);return N.urlParams=k,N.headers=i,N.body=v.uploadData(),N.errorHandler=Ue(t),N}class tn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=L.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=L.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=L.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw M("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw M("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw M("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw M("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw M("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class nn extends tn{initXhr(){this.xhr_.responseType="text"}}function Ee(){return new nn}/**
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
 */class S{constructor(t,n){this._service=t,n instanceof E?this._location=n:this._location=E.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new S(t,n)}get root(){const t=new E(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Re(this._location.path)}get storage(){return this._service}get parent(){const t=$t(this._location.path);if(t===null)return null;const n=new E(this._location.bucket,t);return new S(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw wt(t)}}function sn(e,t,n){e._throwIfRoot("uploadBytes");const s=en(e.storage,e._location,ye(),new x(t,!0),n);return e.storage.makeRequestWithTokens(s,Ee).then(r=>({metadata:r,ref:e}))}function rn(e){e._throwIfRoot("getDownloadURL");const t=Zt(e.storage,e._location,ye());return e.storage.makeRequestWithTokens(t,Ee).then(n=>{if(n===null)throw gt();return n})}function on(e,t){const n=Ht(e._location.path,t),s=new E(e._location.bucket,n);return new S(e.storage,s)}/**
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
 */function an(e){return/^[A-Za-z]+:\/\//.test(e)}function ln(e,t){return new S(e,t)}function Ae(e,t){if(e instanceof J){const n=e;if(n._bucket==null)throw ft();const s=new S(n,n._bucket);return t!=null?Ae(s,t):s}else return t!==void 0?on(e,t):e}function un(e,t){if(t&&an(t)){if(e instanceof J)return ln(e,t);throw X("To use ref(service, url), the first argument must be a Storage instance.")}else return Ae(e,t)}function ae(e,t){const n=t==null?void 0:t[pe];return n==null?null:E.makeFromBucketSpec(n,e)}function cn(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:xe(r,e.app.options.projectId))}class J{constructor(t,n,s,r,o){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=he,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=st,this._maxUploadRetryTime=rt,this._requests=new Set,r!=null?this._bucket=E.makeFromBucketSpec(r,this._host):this._bucket=ae(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=E.makeFromBucketSpec(this._url,t):this._bucket=ae(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ie("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ie("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new S(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new bt(fe());{const i=It(t,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const le="@firebase/storage",ue="0.13.2";/**
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
 */const Ne="storage";function dn(e,t,n){return e=q(e),sn(e,t,n)}function hn(e){return e=q(e),rn(e)}function pn(e,t){return e=q(e),un(e,t)}function fn(e=Ce(),t){e=q(e);const s=Oe(e,Ne).getImmediate({identifier:t}),r=Ie("storage");return r&&_n(s,...r),s}function _n(e,t,n,s={}){cn(e,t,n,s)}function gn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new J(n,s,r,t,Le)}function mn(){Pe(new De(Ne,gn,"PUBLIC").setMultipleInstances(!0)),Q(le,ue,""),Q(le,ue,"esm2017")}mn();const wn={class:"user-main"},bn={class:"user-info"},Rn={key:0,class:"profile-wrapper"},yn=["src"],vn={key:0,class:"spinner"},Tn={key:1,for:"input-wallaper",class:"btn-wallaper-edit"},kn=["src"],Un={key:0,for:"input-avatar",class:"user-photo btn-avatar-edit"},En={class:"user-settings"},An={class:"user-title"},Nn={class:"user-about"},On={class:"badge-wrapper"},In={class:"wishes-block"},Cn={key:0,class:"user-wishes"},Pn={class:"cards-list"},Dn={key:1,class:"empty-wishes"},xn={__name:"UserPage",setup(e){const t=O(!1),n=O({}),s=O([]),r=O([]),o=je(),i=Be(),a=O(!1),l=O(!1),c=O(null),m=O(null),T=fn(),y=ee(),v=O(!1),k=()=>{t.value=!t.value},C=async(u,d)=>{const g=pn(T,d);return await dn(g,u),await hn(g)},w=async()=>{v.value=!0;const u=y.currentUser,d=te(i,"users",u.uid),g={};try{if(m.value){const h=await C(m.value,`avatars/${u.uid}`);g.photoUrl=h,n.value.photoUrl=h}if(c.value){const h=await C(c.value,`wallpapers/${u.uid}`);g.wallpaperUrl=h,n.value.wallpaperUrl=h}await ze(d,g),console.log("Профиль успешно обновлен")}catch(h){console.log("ошибка при загрузке профиля,",h)}finally{v.value=!1}},P=(u,d)=>{const g=d.target.files[0];u==="avatar"?m.value=g:u==="wallpaper"&&(c.value=g),w()},N=o.params.uid,A=u=>{n.value.displayName=u.userName,n.value.about=u.userAbout,s.value=u.pickedBadges,console.log("Профиль обновлен в родительском компоненте:",u)};return Me(async()=>{if(!ee().currentUser){console.error("User is not authenticated");return}const g=await Fe(te(i,"users",N));g.exists()?(n.value=g.data(),console.log("Loaded user data:",n.value),s.value=n.value.badges||[]):console.error("No such user!");const h=await $e(He(i,"users",N,"wishes"));r.value=h.docs.map(D=>({id:D.id,...D.data()}))}),(u,d)=>{const g=de("font-awesome-icon");return R(),U("div",null,[p("div",null,[$(Ze)]),p("main",wn,[p("section",bn,[n.value?(R(),U("div",Rn,[p("div",{class:"user-wallapper",onMouseenter:d[1]||(d[1]=h=>a.value=!0),onMouseleave:d[2]||(d[2]=h=>a.value=!1)},[p("img",{src:n.value.wallpaperUrl,alt:"user-wallapper"},null,8,yn),v.value?(R(),U("div",vn)):B("",!0),a.value?(R(),U("label",Tn,[p("input",{class:"input-wallaper-edit",id:"input-wallaper",type:"file",onChange:d[0]||(d[0]=h=>P("wallpaper",h))},null,32),d[6]||(d[6]=Ve(" изменить обложку "))])):B("",!0)],32),p("div",{class:"user-photo-edit",onMouseenter:d[4]||(d[4]=h=>l.value=!0),onMouseleave:d[5]||(d[5]=h=>l.value=!1)},[p("img",{class:"user-photo",src:n.value.photoUrl,alt:"user-photo"},null,8,kn),l.value?(R(),U("label",Un,[p("input",{class:"input-avatar-edit",type:"file",id:"input-avatar",onChange:d[3]||(d[3]=h=>P("avatar",h))},null,32),$(g,{class:"user-photo-icon",icon:["fas","edit"]})])):B("",!0)],32),p("div",En,[p("button",{onClick:k},"Редактировать профиль"),t.value?(R(),ne(We,{key:0,onClose:k,user:n.value,pickedBadges:s.value,onUpdateProfile:A},null,8,["user","pickedBadges"])):B("",!0)]),p("h2",An,F(n.value.displayName),1),p("p",Nn,F(n.value.about||"Информация о пользователе отсутствует"),1),p("div",On,[(R(!0),U(se,null,re(s.value,(h,D)=>(R(),U("div",{key:D,class:"badge",style:qe({backgroundColor:h.BgColor,color:h.color})},F(h.name),5))),128))])])):B("",!0)]),p("div",In,[r.value.length?(R(),U("section",Cn,[p("div",Pn,[(R(!0),U(se,null,re(r.value,h=>(R(),ne(nt,{key:h.id,wish:h},null,8,["wish"]))),128))])])):(R(),U("div",Dn,d[7]||(d[7]=[p("img",{src:Xe,alt:"empty-box"},null,-1),p("p",null,"У пользователя пока нет желаний.",-1)])))])])])}}},Bn=ce(xn,[["__scopeId","data-v-86784834"]]);export{Bn as default};
