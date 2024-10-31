import{_ as F,r as b,o as k,c as C,a as i,j as B,k as Ve,l as te,t as x,e as ne,g as q,m as ue,w as P,v as M,F as Z,n as Q,q as ye,x as He,f as z,y as Re,z as se,A as je,B as We,C as K,D as qe,E as ze,G as Ke,H as Xe,I as Ge,J as ce,K as Ye,S as Je,L as Ze,M as ke,h as S,N as Qe,O as et,P as de,Q as tt,R as he,T as nt}from"./index-DbVbMy4e.js";const st="/wisher/assets/empty-box-D7umrX5t.png",ot={class:"modal__dialog__inner"},rt={class:"modal__content"},at={__name:"ModalComponent",setup(e,{expose:t}){const n=b(null),s=()=>{n.value.showModal()},o=()=>{n.value.close()};return t({openModal:s,closeModal:o}),(r,a)=>{const l=te("font-awesome-icon");return k(),C("dialog",{ref_key:"dialogRef",ref:n,class:"modal__dialog"},[i("div",ot,[i("button",{class:"modal__button modal__button--close",onClick:o},[B(l,{class:"modal__icon--close modal__icon",icon:["fas","close"]})]),i("div",rt,[Ve(r.$slots,"default",{},void 0)])])],512)}}},pe=F(at,[["__scopeId","data-v-3427cf66"]]),it={},lt={class:"nav"};function ut(e,t){return k(),C("nav",lt,t[0]||(t[0]=[i("ul",{class:"nav__links"},[i("span",{class:"nav__logo logo"},"ВИШЕР")],-1)]))}const ct=F(it,[["render",ut],["__scopeId","data-v-e0846c3d"]]),dt=["data-id"],ht=["src"],pt={card__title:""},ft={class:"card__price"},_t={class:"card__user__info"},gt={class:"user__info--info"},mt=["src"],bt=["textContent"],vt={class:"user__info--date"},wt={__name:"WishCardCreate",props:{wish:{type:Object},userImg:{type:String},userName:{type:String}},setup(e){const t=e,n=o=>{o.target.classList.add("card__hover"),console.log(o.target.dataset.id)},s=o=>{o.target.classList.remove("card__hover")};return(o,r)=>(k(),C("div",{class:"card",onMouseenter:r[0]||(r[0]=a=>n(a)),onMouseleave:r[1]||(r[1]=a=>s(a)),"data-id":e.wish.id},[i("img",{src:e.wish.img,alt:"",class:"card__image"},null,8,ht),i("h3",pt,x(e.wish.name),1),i("p",ft,x(e.wish.price)+" руб",1),i("div",_t,[i("div",gt,[i("img",{src:t.userImg,alt:"User Avatar",class:"card__img user__info--avatarImg"},null,8,mt),i("span",{textContent:x(t.userName)},null,8,bt)]),i("span",vt,x(new Date().toLocaleDateString()),1)])],40,dt))}},yt=F(wt,[["__scopeId","data-v-b5875b69"]]),Rt=[{name:"Аниме",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Рыбалка",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Танцы",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Хоббихорсинг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Квадробинг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Футбол",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Рисование",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Вышивание",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Фитнес",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Лего",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Паркур",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Кулинария",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Фотография",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Йога",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Плавание",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Велоспорт",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Программирование",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Чтение",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Гейминг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Музыка",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Бег",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Садоводство",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"}],kt={class:"user-edit-list"},Tt={class:"badge-wrapper"},Ut=["onClick"],Ct={__name:"EditUserPage",props:{user:{type:Object,default:()=>({name:"Unknown",about:"Empty"})},pickedBadges:{type:Array,default:()=>[]}},emits:["close","updateProfile"],setup(e,{emit:t}){const n=b(""),s=b(""),o=ne(),r=q(),a=t,l=e,d=b(l.user.displayName),f=b(l.user.about),g=b([...l.pickedBadges]);ue(()=>l.user,m=>{d.value=m.displayName,f.value=m.about},{immediate:!0}),ue(()=>l.pickedBadges,m=>{g.value=[...m]},{immediate:!0});function T(m){return g.value.some(_=>_.name===m.name)}function R(m){const _=g.value.findIndex(p=>p.name===m.name);_!==-1?g.value.splice(_,1):g.value.push(m),console.log(g.value)}async function A(){const m=o.currentUser;if(!m){console.error("Пользователь не авторизован");return}const _=z(r,"users",m.uid),p=await Re(_),v=p.exists()?p.data():{},c={};c.displayName=s.value!==""?s.value:v.displayName||m.displayName,c.about=n.value!==""?n.value:v.about||"",c.badges=g.value.length>0?g.value:v.badges||[];try{await se(_,c),console.log("Профиль успешно обновлен"),a("updateProfile",{userName:c.displayName,userAbout:c.about,pickedBadges:c.badges})}catch(h){console.error("Ошибка при обновлении профиля:",h)}}return(m,_)=>(k(),C("form",{method:"dialog",onSubmit:A,class:"form"},[_[5]||(_[5]=i("h1",null,"Редактировать профиль",-1)),i("ul",kt,[i("li",null,[_[2]||(_[2]=i("label",{for:"name"},"Имя:",-1)),P(i("input",{type:"text",id:"name","onUpdate:modelValue":_[0]||(_[0]=p=>s.value=p)},null,512),[[M,s.value]])]),i("li",null,[_[3]||(_[3]=i("label",{for:"about"},"Краткая информация:",-1)),P(i("textarea",{name:"",id:"about","onUpdate:modelValue":_[1]||(_[1]=p=>n.value=p)},null,512),[[M,n.value]])]),i("li",null,[_[4]||(_[4]=i("label",{for:""},"Выберите интересы:",-1)),i("div",Tt,[(k(!0),C(Z,null,Q(He(Rt),(p,v)=>(k(),C("div",{key:v,class:"badge",style:ye({backgroundColor:T(p)?"green":p.BgColor,color:T(p)?"white":p.color}),onClick:c=>R(p)},x(p.name),13,Ut))),128))])])]),_[6]||(_[6]=i("button",{class:"btn-modal-save"},"сохранить изменения",-1))],32))}},At=F(Ct,[["__scopeId","data-v-91fb060c"]]),fe=q();async function Et(e){const t=await Re(z(fe,"users",e)),n=t.exists()?t.data():null;if(!n)return console.error("Пользователь не найден!"),{user:null,wishes:[]};const o=(await je(We(fe,"users",e,"wishes"))).docs.map(r=>({id:r.id,...r.data()}));return{user:n,wishes:o}}/**
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
 */const Te="firebasestorage.googleapis.com",Ue="storageBucket",Nt=2*60*1e3,It=10*60*1e3;/**
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
 */class y extends Ze{constructor(t,n,s=0){super(Y(t),`Firebase Storage: ${n} (${Y(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,y.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Y(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var w;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(w||(w={}));function Y(e){return"storage/"+e}function oe(){const e="An unknown error occurred, please check the error payload for server response.";return new y(w.UNKNOWN,e)}function xt(e){return new y(w.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Ot(e){return new y(w.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Dt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new y(w.UNAUTHENTICATED,e)}function Pt(){return new y(w.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Bt(e){return new y(w.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function St(){return new y(w.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Lt(){return new y(w.CANCELED,"User canceled the upload/download.")}function $t(e){return new y(w.INVALID_URL,"Invalid URL '"+e+"'.")}function Mt(e){return new y(w.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Ft(){return new y(w.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ue+"' property when initializing the app?")}function Vt(){return new y(w.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ht(){return new y(w.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jt(e){return new y(w.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ee(e){return new y(w.INVALID_ARGUMENT,e)}function Ce(){return new y(w.APP_DELETED,"The Firebase app was deleted.")}function Wt(e){return new y(w.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function H(e,t){return new y(w.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function V(e){throw new y(w.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class N{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=N.makeFromUrl(t,n)}catch{return new N(t,"")}if(s.path==="")return s;throw Mt(t)}static makeFromUrl(t,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function r(u){u.path.charAt(u.path.length-1)==="/"&&(u.path_=u.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+o+a,"i"),d={bucket:1,path:3};function f(u){u.path_=decodeURIComponent(u.path)}const g="v[A-Za-z0-9_]+",T=n.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",A=new RegExp(`^https?://${T}/${g}/b/${o}/o${R}`,"i"),m={bucket:1,path:3},_=n===Te?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",v=new RegExp(`^https?://${_}/${o}/${p}`,"i"),h=[{regex:l,indices:d,postModify:r},{regex:A,indices:m,postModify:f},{regex:v,indices:{bucket:1,path:2},postModify:f}];for(let u=0;u<h.length;u++){const I=h[u],U=I.regex.exec(t);if(U){const X=U[I.indices.bucket];let G=U[I.indices.path];G||(G=""),s=new N(X,G),I.postModify(s);break}}if(s==null)throw $t(t);return s}}class qt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function zt(e,t,n){let s=1,o=null,r=null,a=!1,l=0;function d(){return l===2}let f=!1;function g(...p){f||(f=!0,t.apply(null,p))}function T(p){o=setTimeout(()=>{o=null,e(A,d())},p)}function R(){r&&clearTimeout(r)}function A(p,...v){if(f){R();return}if(p){R(),g.call(null,p,...v);return}if(d()||a){R(),g.call(null,p,...v);return}s<64&&(s*=2);let h;l===1?(l=2,h=0):h=(s+Math.random())*1e3,T(h)}let m=!1;function _(p){m||(m=!0,R(),!f&&(o!==null?(p||(l=2),clearTimeout(o),T(0)):p||(l=1)))}return T(0),r=setTimeout(()=>{a=!0,_(!0)},n),_}function Kt(e){e(!1)}/**
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
 */function Xt(e){return e!==void 0}function Gt(e){return typeof e=="object"&&!Array.isArray(e)}function re(e){return typeof e=="string"||e instanceof String}function _e(e){return ae()&&e instanceof Blob}function ae(){return typeof Blob<"u"}function ge(e,t,n,s){if(s<t)throw ee(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw ee(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function ie(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function Ae(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const o=t(s)+"="+t(e[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var L;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(L||(L={}));/**
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
 */function Yt(e,t){const n=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,r=t.indexOf(e)!==-1;return n||o||r}/**
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
 */class Jt{constructor(t,n,s,o,r,a,l,d,f,g,T,R=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=r,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=d,this.timeout_=f,this.progressCallback_=g,this.connectionFactory_=T,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,m)=>{this.resolve_=A,this.reject_=m,this.start_()})}start_(){const t=(s,o)=>{if(o){s(!1,new j(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const a=l=>{const d=l.loaded,f=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,f)};this.progressCallback_!==null&&r.addUploadProgressListener(a),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(a),this.pendingConnection_=null;const l=r.getErrorCode()===L.NO_ERROR,d=r.getStatus();if(!l||Yt(d,this.additionalRetryCodes_)&&this.retry){const g=r.getErrorCode()===L.ABORT;s(!1,new j(!1,null,g));return}const f=this.successCodes_.indexOf(d)!==-1;s(!0,new j(f,r))})},n=(s,o)=>{const r=this.resolve_,a=this.reject_,l=o.connection;if(o.wasSuccessCode)try{const d=this.callback_(l,l.getResponse());Xt(d)?r(d):r()}catch(d){a(d)}else if(l!==null){const d=oe();d.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,d)):a(d)}else if(o.canceled){const d=this.appDelete_?Ce():Lt();a(d)}else{const d=St();a(d)}};this.canceled_?n(!1,new j(!1,null,!0)):this.backoffId_=zt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Kt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class j{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Zt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Qt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function en(e,t){t&&(e["X-Firebase-GMPID"]=t)}function tn(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function nn(e,t,n,s,o,r,a=!0){const l=Ae(e.urlParams),d=e.url+l,f=Object.assign({},e.headers);return en(f,t),Zt(f,n),Qt(f,r),tn(f,s),new Jt(d,e.method,f,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,a)}/**
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
 */function sn(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function on(...e){const t=sn();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(ae())return new Blob(e);throw new y(w.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rn(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function an(e){if(typeof atob>"u")throw jt("base-64");return atob(e)}/**
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
 */const O={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class J{constructor(t,n){this.data=t,this.contentType=n||null}}function ln(e,t){switch(e){case O.RAW:return new J(Ee(t));case O.BASE64:case O.BASE64URL:return new J(Ne(e,t));case O.DATA_URL:return new J(cn(t),dn(t))}throw oe()}function Ee(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const r=s,a=e.charCodeAt(++n);s=65536|(r&1023)<<10|a&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function un(e){let t;try{t=decodeURIComponent(e)}catch{throw H(O.DATA_URL,"Malformed data URL.")}return Ee(t)}function Ne(e,t){switch(e){case O.BASE64:{const o=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(o||r)throw H(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case O.BASE64URL:{const o=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(o||r)throw H(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=an(t)}catch(o){throw o.message.includes("polyfill")?o:H(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class Ie{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw H(O.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=hn(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function cn(e){const t=new Ie(e);return t.base64?Ne(O.BASE64,t.rest):un(t.rest)}function dn(e){return new Ie(e).contentType}function hn(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class D{constructor(t,n){let s=0,o="";_e(t)?(this.data_=t,s=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(_e(this.data_)){const s=this.data_,o=rn(s,t,n);return o===null?null:new D(o)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new D(s,!0)}}static getBlob(...t){if(ae()){const n=t.map(s=>s instanceof D?s.data_:s);return new D(on.apply(null,n))}else{const n=t.map(a=>re(a)?ln(O.RAW,a).data:a.data_);let s=0;n.forEach(a=>{s+=a.byteLength});const o=new Uint8Array(s);let r=0;return n.forEach(a=>{for(let l=0;l<a.length;l++)o[r++]=a[l]}),new D(o,!0)}}uploadData(){return this.data_}}/**
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
 */function xe(e){let t;try{t=JSON.parse(e)}catch{return null}return Gt(t)?t:null}/**
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
 */function pn(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function fn(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function Oe(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function _n(e,t){return t}class E{constructor(t,n,s,o){this.server=t,this.local=n||t,this.writable=!!s,this.xform=o||_n}}let W=null;function gn(e){return!re(e)||e.length<2?e:Oe(e)}function De(){if(W)return W;const e=[];e.push(new E("bucket")),e.push(new E("generation")),e.push(new E("metageneration")),e.push(new E("name","fullPath",!0));function t(r,a){return gn(a)}const n=new E("name");n.xform=t,e.push(n);function s(r,a){return a!==void 0?Number(a):a}const o=new E("size");return o.xform=s,e.push(o),e.push(new E("timeCreated")),e.push(new E("updated")),e.push(new E("md5Hash",null,!0)),e.push(new E("cacheControl",null,!0)),e.push(new E("contentDisposition",null,!0)),e.push(new E("contentEncoding",null,!0)),e.push(new E("contentLanguage",null,!0)),e.push(new E("contentType",null,!0)),e.push(new E("metadata","customMetadata",!0)),W=e,W}function mn(e,t){function n(){const s=e.bucket,o=e.fullPath,r=new N(s,o);return t._makeStorageReference(r)}Object.defineProperty(e,"ref",{get:n})}function bn(e,t,n){const s={};s.type="file";const o=n.length;for(let r=0;r<o;r++){const a=n[r];s[a.local]=a.xform(s,t[a.server])}return mn(s,e),s}function Pe(e,t,n){const s=xe(t);return s===null?null:bn(e,s,n)}function vn(e,t,n,s){const o=xe(t);if(o===null||!re(o.downloadTokens))return null;const r=o.downloadTokens;if(r.length===0)return null;const a=encodeURIComponent;return r.split(",").map(f=>{const g=e.bucket,T=e.fullPath,R="/b/"+a(g)+"/o/"+a(T),A=ie(R,n,s),m=Ae({alt:"media",token:f});return A+m})[0]}function wn(e,t){const n={},s=t.length;for(let o=0;o<s;o++){const r=t[o];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}class Be{constructor(t,n,s,o){this.url=t,this.method=n,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Se(e){if(!e)throw oe()}function yn(e,t){function n(s,o){const r=Pe(e,o,t);return Se(r!==null),r}return n}function Rn(e,t){function n(s,o){const r=Pe(e,o,t);return Se(r!==null),vn(r,o,e.host,e._protocol)}return n}function Le(e){function t(n,s){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=Pt():o=Dt():n.getStatus()===402?o=Ot(e.bucket):n.getStatus()===403?o=Bt(e.path):o=s,o.status=n.getStatus(),o.serverResponse=s.serverResponse,o}return t}function kn(e){const t=Le(e);function n(s,o){let r=t(s,o);return s.getStatus()===404&&(r=xt(e.path)),r.serverResponse=o.serverResponse,r}return n}function Tn(e,t,n){const s=t.fullServerUrl(),o=ie(s,e.host,e._protocol),r="GET",a=e.maxOperationRetryTime,l=new Be(o,r,Rn(e,n),a);return l.errorHandler=kn(t),l}function Un(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Cn(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=Un(null,t)),s}function An(e,t,n,s,o){const r=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let h="";for(let u=0;u<2;u++)h=h+Math.random().toString().slice(2);return h}const d=l();a["Content-Type"]="multipart/related; boundary="+d;const f=Cn(t,s,o),g=wn(f,n),T="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+g+`\r
--`+d+`\r
Content-Type: `+f.contentType+`\r
\r
`,R=`\r
--`+d+"--",A=D.getBlob(T,s,R);if(A===null)throw Vt();const m={name:f.fullPath},_=ie(r,e.host,e._protocol),p="POST",v=e.maxUploadRetryTime,c=new Be(_,p,yn(e,n),v);return c.urlParams=m,c.headers=a,c.body=A.uploadData(),c.errorHandler=Le(t),c}class En{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=L.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=L.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=L.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,o){if(this.sent_)throw V("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw V("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw V("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw V("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw V("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Nn extends En{initXhr(){this.xhr_.responseType="text"}}function $e(){return new Nn}/**
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
 */class ${constructor(t,n){this._service=t,n instanceof N?this._location=n:this._location=N.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new $(t,n)}get root(){const t=new N(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Oe(this._location.path)}get storage(){return this._service}get parent(){const t=pn(this._location.path);if(t===null)return null;const n=new N(this._location.bucket,t);return new $(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Wt(t)}}function In(e,t,n){e._throwIfRoot("uploadBytes");const s=An(e.storage,e._location,De(),new D(t,!0),n);return e.storage.makeRequestWithTokens(s,$e).then(o=>({metadata:o,ref:e}))}function xn(e){e._throwIfRoot("getDownloadURL");const t=Tn(e.storage,e._location,De());return e.storage.makeRequestWithTokens(t,$e).then(n=>{if(n===null)throw Ht();return n})}function On(e,t){const n=fn(e._location.path,t),s=new N(e._location.bucket,n);return new $(e.storage,s)}/**
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
 */function Dn(e){return/^[A-Za-z]+:\/\//.test(e)}function Pn(e,t){return new $(e,t)}function Me(e,t){if(e instanceof le){const n=e;if(n._bucket==null)throw Ft();const s=new $(n,n._bucket);return t!=null?Me(s,t):s}else return t!==void 0?On(e,t):e}function Bn(e,t){if(t&&Dn(t)){if(e instanceof le)return Pn(e,t);throw ee("To use ref(service, url), the first argument must be a Storage instance.")}else return Me(e,t)}function me(e,t){const n=t==null?void 0:t[Ue];return n==null?null:N.makeFromBucketSpec(n,e)}function Sn(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=s;o&&(e._overrideAuthToken=typeof o=="string"?o:Ye(o,e.app.options.projectId))}class le{constructor(t,n,s,o,r){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=r,this._bucket=null,this._host=Te,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Nt,this._maxUploadRetryTime=It,this._requests=new Set,o!=null?this._bucket=N.makeFromBucketSpec(o,this._host):this._bucket=me(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=N.makeFromBucketSpec(this._url,t):this._bucket=me(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ge("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ge("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new $(this,t)}_makeRequest(t,n,s,o,r=!0){if(this._deleted)return new qt(Ce());{const a=nn(t,this._appId,s,o,n,this._firebaseVersion,r);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,o).getPromise()}}const be="@firebase/storage",ve="0.13.2";/**
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
 */const Fe="storage";function Ln(e,t,n){return e=K(e),In(e,t,n)}function $n(e){return e=K(e),xn(e)}function Mn(e,t){return e=K(e),Bn(e,t)}function Fn(e=Ke(),t){e=K(e);const s=qe(e,Fe).getImmediate({identifier:t}),o=ze("storage");return o&&Vn(s,...o),s}function Vn(e,t,n,s={}){Sn(e,t,n,s)}function Hn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new le(n,s,o,t,Je)}function jn(){Xe(new Ge(Fe,Hn,"PUBLIC").setMultipleInstances(!0)),ce(be,ve,""),ce(be,ve,"esm2017")}jn();const Wn=q(),qn=Fn(),zn=ne();async function we(e,t){const n=Mn(qn,t);return await Ln(n,e),await $n(n)}async function Kn(e,t,n,s){s.value=!0;const o=zn.currentUser,r=z(Wn,"users",o.uid),a={};try{if(n.value){const l=await we(n.value,`avatars/${o.uid}`);a.photoUrl=l,e.value.photoUrl=l}if(t.value){const l=await we(t.value,`wallpapers/${o.uid}`);a.wallpaperUrl=l,e.value.wallpaperUrl=l}await se(r,a),console.log("Профиль успешно обновлен")}catch(l){console.log("ошибка при загрузке профиля,",l)}finally{s.value=!1}}const Xn={class:"form__wrapper"},Gn={class:"form__list"},Yn={class:"form__preview__card"},Jn={key:0,class:"card__label card__label--file",for:"file-input"},Zn=["src"],Qn={card__title:""},es={class:"card__price"},ts={class:"card__user__info"},ns={class:"user__info--info"},ss=["src"],os=["textContent"],rs={class:"user__info--date"},as={__name:"WishCardsAdd",props:{userImg:{type:String},userName:{type:String},usersWhises:{type:Array}},setup(e,{emit:t}){const n=t,s=q(),o=ne(),r=b(""),a=b(""),l=b(""),d=b(""),f=b(new Date().toLocaleDateString()),g=b(""),T=e,R=()=>{a.value="",l.value="",d.value="",g.value="",r.value=""},A=(v,c,h,u,I,U)=>({id:crypto.randomUUID(),img:v||"https://media.istockphoto.com/id/1308342088/vector/surprise-gift-box-gift-box-with-red-ribbon-bow-flat-style-element-design-for-giveaway.jpg?s=612x612&w=0&k=20&c=FUOJS2CFbYIqm4R7zfyKUdeS-gMyc3bGlRr1rL7rjQ0=",name:c,hover:!1,description:h||"Описание отсутствует. ",price:u||0,date:I,link:U});async function m(v,c){try{const h=z(s,"users",v);await se(h,{wishes:Qe(c)}),n("addWish",c),console.log("Card successfully added to wishes!")}catch(h){console.error("Error adding card to wishes:",h)}}const _=()=>{const v=o.currentUser,c=A(r.value,a.value,l.value,d.value,f.value,g.value);m(v.uid,c),R()},p=v=>{const c=v.target.files[0];if(c){const h=new FileReader;h.onload=u=>{r.value=u.target.result},h.readAsDataURL(c)}};return(v,c)=>{const h=te("font-awesome-icon");return k(),C("form",{method:"dialog",class:"form",onSubmit:_},[c[9]||(c[9]=i("h1",{class:"form__title"},"Добавить желание",-1)),i("div",Xn,[i("ul",Gn,[i("li",null,[c[5]||(c[5]=i("label",{for:"name"},"Название:",-1)),P(i("input",{type:"text",id:"name","onUpdate:modelValue":c[0]||(c[0]=u=>a.value=u),required:""},null,512),[[M,a.value]])]),i("li",null,[c[6]||(c[6]=i("label",{for:"description"},"Описание",-1)),P(i("textarea",{type:"text",id:"description","onUpdate:modelValue":c[1]||(c[1]=u=>l.value=u)}," ",512),[[M,l.value]])]),i("li",null,[c[7]||(c[7]=i("label",{for:"price"},"Цена",-1)),P(i("input",{type:"number",id:"price","onUpdate:modelValue":c[2]||(c[2]=u=>d.value=u)},null,512),[[M,d.value]])]),i("li",null,[c[8]||(c[8]=i("label",{for:"link"},"Ссылка на товар",-1)),P(i("input",{type:"text",id:"link","onUpdate:modelValue":c[3]||(c[3]=u=>g.value=u)},null,512),[[M,g.value]])])]),i("div",Yn,[r.value?S("",!0):(k(),C("label",Jn,[r.value?S("",!0):(k(),ke(h,{key:0,class:"card__icon--file",icon:["fas","file-image"]})),i("input",{class:"card__input card__input--file",type:"file",id:"file-input",onChange:c[4]||(c[4]=u=>p(u))},null,32)])),r.value?(k(),C("img",{key:1,src:r.value,alt:"",class:"card__image"},null,8,Zn)):S("",!0),i("h3",Qn,x(a.value),1),i("p",es,x(d.value)+" руб",1),i("div",ts,[i("div",ns,[i("img",{src:T.userImg,alt:"User Avatar",class:"card__img user__info--avatarImg"},null,8,ss),i("span",{textContent:x(T.userName)},null,8,os)]),i("span",rs,x(f.value),1)])])]),c[10]||(c[10]=i("button",{class:"form__btn form__btn--add"},"добавить",-1))],32)}}},is=F(as,[["__scopeId","data-v-87f86a3f"]]),ls={class:"user"},us={class:"skeleton-loader user__info"},cs={class:"user__info"},ds={key:0,class:"profile"},hs=["src"],ps={key:0,for:"input-wallaper",class:"profile__wallaper-edit"},fs={key:0,class:"profile__spinner"},_s=["src"],gs={key:1,for:"input-avatar",class:"profile__photo profile__photo--edit"},ms={class:"profile__settings"},bs={class:"profile__name"},vs={class:"profile__about"},ws={class:"profile__badges"},ys={class:"wishes"},Rs={key:0,class:"wishes__list"},ks={class:"whishes__cards"},Ts={key:1,class:"wishes__empty"},Us={__name:"UserPage",setup(e){const t=b({}),n=b([]),s=b([]),o=nt(),r=b(!1),a=b(!1),l=b(null),d=b(null),f=b(!1),g=b(null),T=b(null),R=b(!0),A=b(!1),m=()=>{g.value.openModal()},_=()=>{T.value.openModal()};function p(h,u){const I=u.target.files[0];h==="avatar"?d.value=I:h==="wallpaper"&&(l.value=I),Kn(t,l,d,f)}function v(h){t.value.displayName=h.userName,t.value.about=h.userAbout,n.value=h.pickedBadges,console.log("Профиль обновлен в родительском компоненте:",h)}const c=h=>{s.value.push(h)};return et(async()=>{R.value=!0;const h=o.params.uid,{user:u,wishes:I}=await Et(h);u?(t.value=u,n.value=u.badges||[],s.value=u.wishes):console.error("Не удалось загрузить данные пользователя"),R.value=!1}),(h,u)=>{const I=te("font-awesome-icon");return k(),C("div",null,[i("div",null,[B(ct)]),i("main",ls,[P(i("div",us,null,512),[[de,R.value]]),i("section",cs,[t.value?P((k(),C("div",ds,[i("div",{class:"profile__wallapper",onMouseenter:u[2]||(u[2]=U=>r.value=!0),onMouseleave:u[3]||(u[3]=U=>r.value=!1)},[i("img",{src:t.value.wallpaperUrl,alt:"user-wallapper",loading:"lazy",class:"profile__wallapper-img",style:ye({opacity:A.value?1:0}),onLoad:u[0]||(u[0]=U=>A.value=!0)},null,44,hs),r.value?(k(),C("label",ps,[i("input",{class:"profile__input profile__input--wallpaper",id:"input-wallaper",type:"file",onChange:u[1]||(u[1]=U=>p("wallpaper",U))},null,32),u[7]||(u[7]=tt(" изменить обложку "))])):S("",!0)],32),i("div",{class:"profile__photo-wrapper",onMouseenter:u[5]||(u[5]=U=>a.value=!0),onMouseleave:u[6]||(u[6]=U=>a.value=!1)},[f.value?(k(),C("div",fs)):S("",!0),i("img",{class:"profile__photo",src:t.value.photoUrl,alt:"user-photo",loading:"lazy"},null,8,_s),a.value?(k(),C("label",gs,[i("input",{class:"profile__input profile__input--avatar",type:"file",id:"input-avatar",onChange:u[4]||(u[4]=U=>p("avatar",U))},null,32),B(I,{class:"profile__icon profile__icon-edit",icon:["fas","edit"]})])):S("",!0)],32),i("div",ms,[i("button",{class:"profile__button profile__button--edit",onClick:m},"Редактировать профиль"),B(pe,{ref_key:"modal",ref:g},{default:he(()=>[B(At,{user:t.value,"picked-badges":n.value,onUpdateProfile:v},null,8,["user","picked-badges"])]),_:1},512)]),i("h2",bs,x(t.value.displayName),1),i("p",vs,x(t.value.about||"Информация о пользователе отсутствует"),1),i("div",ws,[(k(!0),C(Z,null,Q(n.value,(U,X)=>(k(),C("div",{key:X,class:"badge"},x(U.name),1))),128))])],512)),[[de,!R.value]]):S("",!0)]),i("div",ys,[u[9]||(u[9]=i("h2",null,"Список желаний",-1)),i("button",{class:"profile__button profile__button--addWish",onClick:_},"Добавить"),B(pe,{ref_key:"modalAddCard",ref:T},{default:he(()=>[B(is,{userImg:t.value.photoUrl,userName:t.value.displayName,onAddWish:c},null,8,["userImg","userName"])]),_:1},512),s.value.length?(k(),C("section",Rs,[i("div",ks,[(k(!0),C(Z,null,Q(s.value,U=>(k(),ke(yt,{key:U.id,wish:U,userImg:t.value.photoUrl,userName:t.value.displayName},null,8,["wish","userImg","userName"]))),128))])])):(k(),C("div",Ts,u[8]||(u[8]=[i("img",{src:st,alt:"empty-box",loading:"lazy"},null,-1),i("p",null,"У пользователя пока нет желаний.",-1)])))])])])}}},As=F(Us,[["__scopeId","data-v-ff944935"]]);export{As as default};
