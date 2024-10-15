import{_ as z,r as A,o as k,c as T,a as u,j as D,k as xe,l as Q,t as M,h as F,e as K,g as fe,m as re,w as ae,v as ie,F as G,n as Y,q as De,x as Le,f as Z,y as _e,z as ge,A as q,B as Se,C as Me,D as $e,E as Fe,G as He,H as le,I as Ve,S as je,J as ze,K as qe,L as We,M as Xe,N as Ke,O as Ge,P as Ye,Q as Ze}from"./index-BqCaOGU1.js";const Je="/wisher/assets/empty-box-D7umrX5t.png",Qe={class:"modal__dialog__inner"},et={class:"modal__content"},tt={__name:"ModalComponent",setup(e,{expose:t}){const n=A(null),s=()=>{n.value.showModal()},o=()=>{n.value.close()};return t({openModal:s,closeModal:o}),(r,a)=>{const i=Q("font-awesome-icon");return k(),T("dialog",{ref_key:"dialogRef",ref:n,class:"modal__dialog"},[u("div",Qe,[u("button",{class:"modal__button modal__button--close",onClick:o},[D(i,{class:"modal__icon--close modal__icon",icon:["fas","close"]})]),u("div",et,[xe(r.$slots,"default",{},void 0)])])],512)}}},nt=z(tt,[["__scopeId","data-v-b9443608"]]),st={},ot={class:"nav"};function rt(e,t){return k(),T("nav",ot,t[0]||(t[0]=[u("ul",{class:"nav__links"},[u("span",{class:"nav__logo logo"},"ВИШЕР")],-1)]))}const at=z(st,[["render",rt],["__scopeId","data-v-8fd04beb"]]),it=["src"],lt={class:"card__title"},ut={class:"card__description"},ct={key:0,class:"card__icons"},dt={__name:"WishCard",setup(e){const t=A(!1),n=()=>{},s=()=>{},o=()=>{};return(r,a)=>{const i=Q("font-awesome-icon");return k(),T("div",{class:"card",onMouseenter:a[0]||(a[0]=l=>t.value=!0),onMouseleave:a[1]||(a[1]=l=>t.value=!1)},[u("img",{class:"card__img",src:r.wish.img,alt:""},null,8,it),u("p",lt,M(r.wish.name),1),u("p",ut,M(r.wish.description),1),t.value?(k(),T("div",ct,[D(i,{class:"card_icons_icon",icon:["fas","heart"],onClick:n}),D(i,{class:"card_icons_icon",icon:["fas","add"],onClick:o}),D(i,{class:"card_icons_icon",icon:["fas","comment"],onClick:s})])):F("",!0)],32)}}},ht=[{name:"Аниме",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Рыбалка",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Танцы",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Хоббихорсинг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Квадробинг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Футбол",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Рисование",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Вышивание",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Фитнес",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Лего",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Паркур",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Кулинария",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Фотография",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Йога",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Плавание",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Велоспорт",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Программирование",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Чтение",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Гейминг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Музыка",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Бег",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Садоводство",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"}],pt={class:"user-edit-list"},ft={class:"badge-wrapper"},_t=["onClick"],gt={__name:"EditUserPage",props:{user:{type:Object,default:()=>({name:"Unknown",about:"Empty"})},pickedBadges:{type:Array,default:()=>[]}},emits:["close","updateProfile"],setup(e,{emit:t}){const n=A(""),s=A(""),o=K(),r=fe(),a=t,i=e,l=A(i.user.displayName),h=A(i.user.about),m=A([...i.pickedBadges]);re(()=>i.user,_=>{l.value=_.displayName,h.value=_.about},{immediate:!0}),re(()=>i.pickedBadges,_=>{m.value=[..._]},{immediate:!0});function U(_){return m.value.some(c=>c.name===_.name)}function y(_){const c=m.value.findIndex(d=>d.name===_.name);c!==-1?m.value.splice(c,1):m.value.push(_),console.log(m.value)}async function E(){const _=o.currentUser;if(!_){console.error("Пользователь не авторизован");return}const c=Z(r,"users",_.uid),d=await _e(c),C=d.exists()?d.data():{},v={};v.displayName=s.value!==""?s.value:C.displayName||_.displayName,v.about=n.value!==""?n.value:C.about||"",v.badges=m.value.length>0?m.value:C.badges||[];try{await ge(c,v),console.log("Профиль успешно обновлен"),a("updateProfile",{userName:v.displayName,userAbout:v.about,pickedBadges:v.badges})}catch(O){console.error("Ошибка при обновлении профиля:",O)}}return(_,c)=>(k(),T("form",{method:"dialog",onSubmit:E,class:"form"},[c[5]||(c[5]=u("h1",null,"Редактировать профиль",-1)),u("ul",pt,[u("li",null,[c[2]||(c[2]=u("label",{for:"name"},"Имя:",-1)),ae(u("input",{type:"text",id:"name","onUpdate:modelValue":c[0]||(c[0]=d=>s.value=d)},null,512),[[ie,s.value]])]),u("li",null,[c[3]||(c[3]=u("label",{for:"about"},"Краткая информация:",-1)),ae(u("textarea",{name:"",id:"about","onUpdate:modelValue":c[1]||(c[1]=d=>n.value=d)},null,512),[[ie,n.value]])]),u("li",null,[c[4]||(c[4]=u("label",{for:""},"Выберите интересы:",-1)),u("div",ft,[(k(!0),T(G,null,Y(Le(ht),(d,C)=>(k(),T("div",{key:C,class:"badge",style:De({backgroundColor:U(d)?"green":d.BgColor,color:U(d)?"white":d.color}),onClick:v=>y(d)},M(d.name),13,_t))),128))])])]),c[6]||(c[6]=u("button",{class:"btn-modal-save"},"сохранить изменения",-1))],32))}},mt=z(gt,[["__scopeId","data-v-e9f09dbf"]]);/**
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
 */const me="firebasestorage.googleapis.com",be="storageBucket",bt=2*60*1e3,wt=10*60*1e3;/**
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
 */class w extends ze{constructor(t,n,s=0){super(W(t),`Firebase Storage: ${n} (${W(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,w.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return W(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var b;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(b||(b={}));function W(e){return"storage/"+e}function ee(){const e="An unknown error occurred, please check the error payload for server response.";return new w(b.UNKNOWN,e)}function vt(e){return new w(b.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function yt(e){return new w(b.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Rt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new w(b.UNAUTHENTICATED,e)}function kt(){return new w(b.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Tt(e){return new w(b.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Ut(){return new w(b.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function At(){return new w(b.CANCELED,"User canceled the upload/download.")}function Et(e){return new w(b.INVALID_URL,"Invalid URL '"+e+"'.")}function Ct(e){return new w(b.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Nt(){return new w(b.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+be+"' property when initializing the app?")}function Ot(){return new w(b.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function It(){return new w(b.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Pt(e){return new w(b.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function J(e){return new w(b.INVALID_ARGUMENT,e)}function we(){return new w(b.APP_DELETED,"The Firebase app was deleted.")}function Bt(e){return new w(b.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function H(e,t){return new w(b.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function $(e){throw new w(b.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class I{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=I.makeFromUrl(t,n)}catch{return new I(t,"")}if(s.path==="")return s;throw Ct(t)}static makeFromUrl(t,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function r(p){p.path.charAt(p.path.length-1)==="/"&&(p.path_=p.path_.slice(0,-1))}const a="(/(.*))?$",i=new RegExp("^gs://"+o+a,"i"),l={bucket:1,path:3};function h(p){p.path_=decodeURIComponent(p.path)}const m="v[A-Za-z0-9_]+",U=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",E=new RegExp(`^https?://${U}/${m}/b/${o}/o${y}`,"i"),_={bucket:1,path:3},c=n===me?"(?:storage.googleapis.com|storage.cloud.google.com)":n,d="([^?#]*)",C=new RegExp(`^https?://${c}/${o}/${d}`,"i"),O=[{regex:i,indices:l,postModify:r},{regex:E,indices:_,postModify:h},{regex:C,indices:{bucket:1,path:2},postModify:h}];for(let p=0;p<O.length;p++){const f=O[p],R=f.regex.exec(t);if(R){const g=R[f.indices.bucket];let B=R[f.indices.path];B||(B=""),s=new I(g,B),f.postModify(s);break}}if(s==null)throw Et(t);return s}}class xt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Dt(e,t,n){let s=1,o=null,r=null,a=!1,i=0;function l(){return i===2}let h=!1;function m(...d){h||(h=!0,t.apply(null,d))}function U(d){o=setTimeout(()=>{o=null,e(E,l())},d)}function y(){r&&clearTimeout(r)}function E(d,...C){if(h){y();return}if(d){y(),m.call(null,d,...C);return}if(l()||a){y(),m.call(null,d,...C);return}s<64&&(s*=2);let O;i===1?(i=2,O=0):O=(s+Math.random())*1e3,U(O)}let _=!1;function c(d){_||(_=!0,y(),!h&&(o!==null?(d||(i=2),clearTimeout(o),U(0)):d||(i=1)))}return U(0),r=setTimeout(()=>{a=!0,c(!0)},n),c}function Lt(e){e(!1)}/**
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
 */function St(e){return e!==void 0}function Mt(e){return typeof e=="object"&&!Array.isArray(e)}function te(e){return typeof e=="string"||e instanceof String}function ue(e){return ne()&&e instanceof Blob}function ne(){return typeof Blob<"u"}function ce(e,t,n,s){if(s<t)throw J(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw J(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function se(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function ve(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const o=t(s)+"="+t(e[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var L;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(L||(L={}));/**
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
 */function $t(e,t){const n=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,r=t.indexOf(e)!==-1;return n||o||r}/**
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
 */class Ft{constructor(t,n,s,o,r,a,i,l,h,m,U,y=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=r,this.additionalRetryCodes_=a,this.callback_=i,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=m,this.connectionFactory_=U,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,_)=>{this.resolve_=E,this.reject_=_,this.start_()})}start_(){const t=(s,o)=>{if(o){s(!1,new V(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const a=i=>{const l=i.loaded,h=i.lengthComputable?i.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&r.addUploadProgressListener(a),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(a),this.pendingConnection_=null;const i=r.getErrorCode()===L.NO_ERROR,l=r.getStatus();if(!i||$t(l,this.additionalRetryCodes_)&&this.retry){const m=r.getErrorCode()===L.ABORT;s(!1,new V(!1,null,m));return}const h=this.successCodes_.indexOf(l)!==-1;s(!0,new V(h,r))})},n=(s,o)=>{const r=this.resolve_,a=this.reject_,i=o.connection;if(o.wasSuccessCode)try{const l=this.callback_(i,i.getResponse());St(l)?r(l):r()}catch(l){a(l)}else if(i!==null){const l=ee();l.serverResponse=i.getErrorText(),this.errorCallback_?a(this.errorCallback_(i,l)):a(l)}else if(o.canceled){const l=this.appDelete_?we():At();a(l)}else{const l=Ut();a(l)}};this.canceled_?n(!1,new V(!1,null,!0)):this.backoffId_=Dt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Lt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class V{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Ht(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Vt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function jt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function zt(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function qt(e,t,n,s,o,r,a=!0){const i=ve(e.urlParams),l=e.url+i,h=Object.assign({},e.headers);return jt(h,t),Ht(h,n),Vt(h,r),zt(h,s),new Ft(l,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,a)}/**
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
 */function Wt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Xt(...e){const t=Wt();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(ne())return new Blob(e);throw new w(b.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Kt(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function Gt(e){if(typeof atob>"u")throw Pt("base-64");return atob(e)}/**
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
 */const P={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class X{constructor(t,n){this.data=t,this.contentType=n||null}}function Yt(e,t){switch(e){case P.RAW:return new X(ye(t));case P.BASE64:case P.BASE64URL:return new X(Re(e,t));case P.DATA_URL:return new X(Jt(t),Qt(t))}throw ee()}function ye(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const r=s,a=e.charCodeAt(++n);s=65536|(r&1023)<<10|a&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function Zt(e){let t;try{t=decodeURIComponent(e)}catch{throw H(P.DATA_URL,"Malformed data URL.")}return ye(t)}function Re(e,t){switch(e){case P.BASE64:{const o=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(o||r)throw H(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case P.BASE64URL:{const o=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(o||r)throw H(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Gt(t)}catch(o){throw o.message.includes("polyfill")?o:H(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class ke{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw H(P.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=en(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function Jt(e){const t=new ke(e);return t.base64?Re(P.BASE64,t.rest):Zt(t.rest)}function Qt(e){return new ke(e).contentType}function en(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class x{constructor(t,n){let s=0,o="";ue(t)?(this.data_=t,s=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(ue(this.data_)){const s=this.data_,o=Kt(s,t,n);return o===null?null:new x(o)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new x(s,!0)}}static getBlob(...t){if(ne()){const n=t.map(s=>s instanceof x?s.data_:s);return new x(Xt.apply(null,n))}else{const n=t.map(a=>te(a)?Yt(P.RAW,a).data:a.data_);let s=0;n.forEach(a=>{s+=a.byteLength});const o=new Uint8Array(s);let r=0;return n.forEach(a=>{for(let i=0;i<a.length;i++)o[r++]=a[i]}),new x(o,!0)}}uploadData(){return this.data_}}/**
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
 */function Te(e){let t;try{t=JSON.parse(e)}catch{return null}return Mt(t)?t:null}/**
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
 */function tn(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function nn(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function Ue(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function sn(e,t){return t}class N{constructor(t,n,s,o){this.server=t,this.local=n||t,this.writable=!!s,this.xform=o||sn}}let j=null;function on(e){return!te(e)||e.length<2?e:Ue(e)}function Ae(){if(j)return j;const e=[];e.push(new N("bucket")),e.push(new N("generation")),e.push(new N("metageneration")),e.push(new N("name","fullPath",!0));function t(r,a){return on(a)}const n=new N("name");n.xform=t,e.push(n);function s(r,a){return a!==void 0?Number(a):a}const o=new N("size");return o.xform=s,e.push(o),e.push(new N("timeCreated")),e.push(new N("updated")),e.push(new N("md5Hash",null,!0)),e.push(new N("cacheControl",null,!0)),e.push(new N("contentDisposition",null,!0)),e.push(new N("contentEncoding",null,!0)),e.push(new N("contentLanguage",null,!0)),e.push(new N("contentType",null,!0)),e.push(new N("metadata","customMetadata",!0)),j=e,j}function rn(e,t){function n(){const s=e.bucket,o=e.fullPath,r=new I(s,o);return t._makeStorageReference(r)}Object.defineProperty(e,"ref",{get:n})}function an(e,t,n){const s={};s.type="file";const o=n.length;for(let r=0;r<o;r++){const a=n[r];s[a.local]=a.xform(s,t[a.server])}return rn(s,e),s}function Ee(e,t,n){const s=Te(t);return s===null?null:an(e,s,n)}function ln(e,t,n,s){const o=Te(t);if(o===null||!te(o.downloadTokens))return null;const r=o.downloadTokens;if(r.length===0)return null;const a=encodeURIComponent;return r.split(",").map(h=>{const m=e.bucket,U=e.fullPath,y="/b/"+a(m)+"/o/"+a(U),E=se(y,n,s),_=ve({alt:"media",token:h});return E+_})[0]}function un(e,t){const n={},s=t.length;for(let o=0;o<s;o++){const r=t[o];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}class Ce{constructor(t,n,s,o){this.url=t,this.method=n,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ne(e){if(!e)throw ee()}function cn(e,t){function n(s,o){const r=Ee(e,o,t);return Ne(r!==null),r}return n}function dn(e,t){function n(s,o){const r=Ee(e,o,t);return Ne(r!==null),ln(r,o,e.host,e._protocol)}return n}function Oe(e){function t(n,s){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=kt():o=Rt():n.getStatus()===402?o=yt(e.bucket):n.getStatus()===403?o=Tt(e.path):o=s,o.status=n.getStatus(),o.serverResponse=s.serverResponse,o}return t}function hn(e){const t=Oe(e);function n(s,o){let r=t(s,o);return s.getStatus()===404&&(r=vt(e.path)),r.serverResponse=o.serverResponse,r}return n}function pn(e,t,n){const s=t.fullServerUrl(),o=se(s,e.host,e._protocol),r="GET",a=e.maxOperationRetryTime,i=new Ce(o,r,dn(e,n),a);return i.errorHandler=hn(t),i}function fn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function _n(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=fn(null,t)),s}function gn(e,t,n,s,o){const r=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function i(){let O="";for(let p=0;p<2;p++)O=O+Math.random().toString().slice(2);return O}const l=i();a["Content-Type"]="multipart/related; boundary="+l;const h=_n(t,s,o),m=un(h,n),U="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,y=`\r
--`+l+"--",E=x.getBlob(U,s,y);if(E===null)throw Ot();const _={name:h.fullPath},c=se(r,e.host,e._protocol),d="POST",C=e.maxUploadRetryTime,v=new Ce(c,d,cn(e,n),C);return v.urlParams=_,v.headers=a,v.body=E.uploadData(),v.errorHandler=Oe(t),v}class mn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=L.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=L.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=L.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,o){if(this.sent_)throw $("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class bn extends mn{initXhr(){this.xhr_.responseType="text"}}function Ie(){return new bn}/**
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
 */class S{constructor(t,n){this._service=t,n instanceof I?this._location=n:this._location=I.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new S(t,n)}get root(){const t=new I(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ue(this._location.path)}get storage(){return this._service}get parent(){const t=tn(this._location.path);if(t===null)return null;const n=new I(this._location.bucket,t);return new S(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Bt(t)}}function wn(e,t,n){e._throwIfRoot("uploadBytes");const s=gn(e.storage,e._location,Ae(),new x(t,!0),n);return e.storage.makeRequestWithTokens(s,Ie).then(o=>({metadata:o,ref:e}))}function vn(e){e._throwIfRoot("getDownloadURL");const t=pn(e.storage,e._location,Ae());return e.storage.makeRequestWithTokens(t,Ie).then(n=>{if(n===null)throw It();return n})}function yn(e,t){const n=nn(e._location.path,t),s=new I(e._location.bucket,n);return new S(e.storage,s)}/**
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
 */function Rn(e){return/^[A-Za-z]+:\/\//.test(e)}function kn(e,t){return new S(e,t)}function Pe(e,t){if(e instanceof oe){const n=e;if(n._bucket==null)throw Nt();const s=new S(n,n._bucket);return t!=null?Pe(s,t):s}else return t!==void 0?yn(e,t):e}function Tn(e,t){if(t&&Rn(t)){if(e instanceof oe)return kn(e,t);throw J("To use ref(service, url), the first argument must be a Storage instance.")}else return Pe(e,t)}function de(e,t){const n=t==null?void 0:t[be];return n==null?null:I.makeFromBucketSpec(n,e)}function Un(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=s;o&&(e._overrideAuthToken=typeof o=="string"?o:Ve(o,e.app.options.projectId))}class oe{constructor(t,n,s,o,r){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=r,this._bucket=null,this._host=me,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=bt,this._maxUploadRetryTime=wt,this._requests=new Set,o!=null?this._bucket=I.makeFromBucketSpec(o,this._host):this._bucket=de(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=I.makeFromBucketSpec(this._url,t):this._bucket=de(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ce("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ce("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new S(this,t)}_makeRequest(t,n,s,o,r=!0){if(this._deleted)return new xt(we());{const a=qt(t,this._appId,s,o,n,this._firebaseVersion,r);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,o).getPromise()}}const he="@firebase/storage",pe="0.13.2";/**
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
 */const Be="storage";function An(e,t,n){return e=q(e),wn(e,t,n)}function En(e){return e=q(e),vn(e)}function Cn(e,t){return e=q(e),Tn(e,t)}function Nn(e=$e(),t){e=q(e);const s=Se(e,Be).getImmediate({identifier:t}),o=Me("storage");return o&&On(s,...o),s}function On(e,t,n,s={}){Un(e,t,n,s)}function In(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new oe(n,s,o,t,je)}function Pn(){Fe(new He(Be,In,"PUBLIC").setMultipleInstances(!0)),le(he,pe,""),le(he,pe,"esm2017")}Pn();const Bn={class:"user"},xn={class:"user__info"},Dn={key:0,class:"profile"},Ln=["src"],Sn={key:0,class:"profile__spinner"},Mn={key:1,for:"input-wallaper",class:"profile__wallaper-edit"},$n=["src"],Fn={key:0,for:"input-avatar",class:"profile__photo profile__photo--edit"},Hn={class:"profile__settings"},Vn={class:"profile__name"},jn={class:"profile__about"},zn={class:"profile__badges"},qn={class:"wishes"},Wn={key:0,class:"wishes__list"},Xn={class:"whishes__cards"},Kn={key:1,class:"wishes__empty"},Gn={__name:"UserPage",setup(e){const t=A({}),n=A([]),s=A([]),o=Ye(),r=fe(),a=A(!1),i=A(!1),l=A(null),h=A(null),m=Nn(),U=K(),y=A(!1),E=A(null),_=()=>{E.value.openModal()};async function c(p,f){const R=Cn(m,f);return await An(R,p),await En(R)}async function d(){y.value=!0;const p=U.currentUser,f=Z(r,"users",p.uid),R={};try{if(h.value){const g=await c(h.value,`avatars/${p.uid}`);R.photoUrl=g,t.value.photoUrl=g}if(l.value){const g=await c(l.value,`wallpapers/${p.uid}`);R.wallpaperUrl=g,t.value.wallpaperUrl=g}await ge(f,R),console.log("Профиль успешно обновлен")}catch(g){console.log("ошибка при загрузке профиля,",g)}finally{y.value=!1}}function C(p,f){const R=f.target.files[0];p==="avatar"?h.value=R:p==="wallpaper"&&(l.value=R),d()}const v=o.params.uid;function O(p){t.value.displayName=p.userName,t.value.about=p.userAbout,n.value=p.pickedBadges,console.log("Профиль обновлен в родительском компоненте:",p)}return qe(async()=>{if(!K().currentUser){console.error("User is not authenticated");return}const R=await _e(Z(r,"users",v));R.exists()?(t.value=R.data(),console.log("Loaded user data:",t.value),n.value=t.value.badges||[]):console.error("No such user!");const g=await We(Xe(r,"users",v,"wishes"));s.value=g.docs.map(B=>({id:B.id,...B.data()}))}),(p,f)=>{const R=Q("font-awesome-icon");return k(),T("div",null,[u("div",null,[D(at)]),u("main",Bn,[u("section",xn,[t.value?(k(),T("div",Dn,[u("div",{class:"profile__wallapper",onMouseenter:f[1]||(f[1]=g=>a.value=!0),onMouseleave:f[2]||(f[2]=g=>a.value=!1)},[u("img",{src:t.value.wallpaperUrl,alt:"user-wallapper",loading:"lazy"},null,8,Ln),y.value?(k(),T("div",Sn)):F("",!0),a.value?(k(),T("label",Mn,[u("input",{class:"profile__input profile__input--wallpaper",id:"input-wallaper",type:"file",onChange:f[0]||(f[0]=g=>C("wallpaper",g))},null,32),f[6]||(f[6]=Ke(" изменить обложку "))])):F("",!0)],32),u("div",{class:"profile__photo-wrapper",onMouseenter:f[4]||(f[4]=g=>i.value=!0),onMouseleave:f[5]||(f[5]=g=>i.value=!1)},[u("img",{class:"profile__photo",src:t.value.photoUrl,alt:"user-photo",loading:"lazy"},null,8,$n),i.value?(k(),T("label",Fn,[u("input",{class:"profile__input profile__input--avatar",type:"file",id:"input-avatar",onChange:f[3]||(f[3]=g=>C("avatar",g))},null,32),D(R,{class:"profile__icon profile__icon-edit",icon:["fas","edit"]})])):F("",!0)],32),u("div",Hn,[u("button",{class:"profile__button profile__button--edit",onClick:_},"Редактировать профиль"),D(nt,{ref_key:"modal",ref:E},{default:Ge(()=>[D(mt,{user:t.value,"picked-badges":n.value,onUpdateProfile:O},null,8,["user","picked-badges"])]),_:1},512)]),u("h2",Vn,M(t.value.displayName),1),u("p",jn,M(t.value.about||"Информация о пользователе отсутствует"),1),u("div",zn,[(k(!0),T(G,null,Y(n.value,(g,B)=>(k(),T("div",{key:B,class:"badge"},M(g.name),1))),128))])])):F("",!0)]),u("div",qn,[s.value.length?(k(),T("section",Wn,[u("div",Xn,[(k(!0),T(G,null,Y(s.value,g=>(k(),Ze(dt,{key:g.id,wish:g},null,8,["wish"]))),128))])])):(k(),T("div",Kn,f[7]||(f[7]=[u("img",{src:Je,alt:"empty-box",loading:"lazy"},null,-1),u("p",null,"У пользователя пока нет желаний.",-1)])))])])])}}},Zn=z(Gn,[["__scopeId","data-v-f9e1a0b1"]]);export{Zn as default};
