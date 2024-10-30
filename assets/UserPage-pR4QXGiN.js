import{_ as V,r as b,o as R,c as T,a,j as P,k as He,l as te,t as I,e as ne,g as z,m as ue,w as S,v as F,F as J,n as Q,q as ye,x as Ve,f as q,y as Re,z as se,A as We,B as je,C as X,D as ze,E as qe,G as Xe,H as Ke,I as Ge,J as ce,K as Ye,S as Ze,L as Je,M as ke,h as B,N as Qe,O as et,P as de,Q as tt,R as he,T as nt}from"./index-D03g55Ss.js";const st="/wisher/assets/empty-box-D7umrX5t.png",ot={class:"modal__dialog__inner"},rt={class:"modal__content"},at={__name:"ModalComponent",setup(e,{expose:t}){const n=b(null),s=()=>{n.value.showModal()},o=()=>{n.value.close()};return t({openModal:s,closeModal:o}),(r,i)=>{const u=te("font-awesome-icon");return R(),T("dialog",{ref_key:"dialogRef",ref:n,class:"modal__dialog"},[a("div",ot,[a("button",{class:"modal__button modal__button--close",onClick:o},[P(u,{class:"modal__icon--close modal__icon",icon:["fas","close"]})]),a("div",rt,[He(r.$slots,"default",{},void 0)])])],512)}}},pe=V(at,[["__scopeId","data-v-3427cf66"]]),it={},lt={class:"nav"};function ut(e,t){return R(),T("nav",lt,t[0]||(t[0]=[a("ul",{class:"nav__links"},[a("span",{class:"nav__logo logo"},"ВИШЕР")],-1)]))}const ct=V(it,[["render",ut],["__scopeId","data-v-e0846c3d"]]),dt={class:"card"},ht=["src"],pt={card__title:""},_t={class:"card__price"},ft={class:"card__user__info"},gt={class:"user__info--info"},mt=["src"],bt=["textContent"],wt={class:"user__info--date"},vt={__name:"WishCard",props:{wish:{type:Object},userImg:{type:String},userName:{type:String}},setup(e){const t=e;return b(!1),(n,s)=>(R(),T("div",dt,[a("img",{src:e.wish.img,alt:"",class:"card__image"},null,8,ht),a("h3",pt,I(e.wish.name),1),a("p",_t,I(e.wish.price)+" руб",1),a("div",ft,[a("div",gt,[a("img",{src:t.userImg,alt:"User Avatar",class:"card__img user__info--avatarImg"},null,8,mt),a("span",{textContent:I(t.userName)},null,8,bt)]),a("span",wt,I(new Date().toLocaleDateString()),1)])]))}},yt=[{name:"Аниме",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Рыбалка",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Танцы",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Хоббихорсинг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Квадробинг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Футбол",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Рисование",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Вышивание",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Фитнес",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Лего",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Паркур",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Кулинария",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Фотография",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Йога",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Плавание",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Велоспорт",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Программирование",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Чтение",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Гейминг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Музыка",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Бег",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Садоводство",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"}],Rt={class:"user-edit-list"},kt={class:"badge-wrapper"},Tt=["onClick"],Ut={__name:"EditUserPage",props:{user:{type:Object,default:()=>({name:"Unknown",about:"Empty"})},pickedBadges:{type:Array,default:()=>[]}},emits:["close","updateProfile"],setup(e,{emit:t}){const n=b(""),s=b(""),o=ne(),r=z(),i=t,u=e,d=b(u.user.displayName),_=b(u.user.about),f=b([...u.pickedBadges]);ue(()=>u.user,p=>{d.value=p.displayName,_.value=p.about},{immediate:!0}),ue(()=>u.pickedBadges,p=>{f.value=[...p]},{immediate:!0});function k(p){return f.value.some(l=>l.name===p.name)}function y(p){const l=f.value.findIndex(c=>c.name===p.name);l!==-1?f.value.splice(l,1):f.value.push(p),console.log(f.value)}async function A(){const p=o.currentUser;if(!p){console.error("Пользователь не авторизован");return}const l=q(r,"users",p.uid),c=await Re(l),g=c.exists()?c.data():{},U={};U.displayName=s.value!==""?s.value:g.displayName||p.displayName,U.about=n.value!==""?n.value:g.about||"",U.badges=f.value.length>0?f.value:g.badges||[];try{await se(l,U),console.log("Профиль успешно обновлен"),i("updateProfile",{userName:U.displayName,userAbout:U.about,pickedBadges:U.badges})}catch(m){console.error("Ошибка при обновлении профиля:",m)}}return(p,l)=>(R(),T("form",{method:"dialog",onSubmit:A,class:"form"},[l[5]||(l[5]=a("h1",null,"Редактировать профиль",-1)),a("ul",Rt,[a("li",null,[l[2]||(l[2]=a("label",{for:"name"},"Имя:",-1)),S(a("input",{type:"text",id:"name","onUpdate:modelValue":l[0]||(l[0]=c=>s.value=c)},null,512),[[F,s.value]])]),a("li",null,[l[3]||(l[3]=a("label",{for:"about"},"Краткая информация:",-1)),S(a("textarea",{name:"",id:"about","onUpdate:modelValue":l[1]||(l[1]=c=>n.value=c)},null,512),[[F,n.value]])]),a("li",null,[l[4]||(l[4]=a("label",{for:""},"Выберите интересы:",-1)),a("div",kt,[(R(!0),T(J,null,Q(Ve(yt),(c,g)=>(R(),T("div",{key:g,class:"badge",style:ye({backgroundColor:k(c)?"green":c.BgColor,color:k(c)?"white":c.color}),onClick:U=>y(c)},I(c.name),13,Tt))),128))])])]),l[6]||(l[6]=a("button",{class:"btn-modal-save"},"сохранить изменения",-1))],32))}},At=V(Ut,[["__scopeId","data-v-91fb060c"]]),_e=z();async function Ct(e){const t=await Re(q(_e,"users",e)),n=t.exists()?t.data():null;if(!n)return console.error("Пользователь не найден!"),{user:null,wishes:[]};const o=(await We(je(_e,"users",e,"wishes"))).docs.map(r=>({id:r.id,...r.data()}));return{user:n,wishes:o}}/**
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
 */const Te="firebasestorage.googleapis.com",Ue="storageBucket",Et=2*60*1e3,Nt=10*60*1e3;/**
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
 */class v extends Je{constructor(t,n,s=0){super(Y(t),`Firebase Storage: ${n} (${Y(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,v.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Y(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var w;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(w||(w={}));function Y(e){return"storage/"+e}function oe(){const e="An unknown error occurred, please check the error payload for server response.";return new v(w.UNKNOWN,e)}function It(e){return new v(w.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function xt(e){return new v(w.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ot(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new v(w.UNAUTHENTICATED,e)}function Dt(){return new v(w.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Pt(e){return new v(w.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Bt(){return new v(w.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function St(){return new v(w.CANCELED,"User canceled the upload/download.")}function Lt(e){return new v(w.INVALID_URL,"Invalid URL '"+e+"'.")}function $t(e){return new v(w.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Mt(){return new v(w.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ue+"' property when initializing the app?")}function Ft(){return new v(w.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ht(){return new v(w.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Vt(e){return new v(w.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ee(e){return new v(w.INVALID_ARGUMENT,e)}function Ae(){return new v(w.APP_DELETED,"The Firebase app was deleted.")}function Wt(e){return new v(w.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function H(e,t){return new v(w.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function M(e){throw new v(w.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class N{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=N.makeFromUrl(t,n)}catch{return new N(t,"")}if(s.path==="")return s;throw $t(t)}static makeFromUrl(t,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function r(h){h.path.charAt(h.path.length-1)==="/"&&(h.path_=h.path_.slice(0,-1))}const i="(/(.*))?$",u=new RegExp("^gs://"+o+i,"i"),d={bucket:1,path:3};function _(h){h.path_=decodeURIComponent(h.path)}const f="v[A-Za-z0-9_]+",k=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",A=new RegExp(`^https?://${k}/${f}/b/${o}/o${y}`,"i"),p={bucket:1,path:3},l=n===Te?"(?:storage.googleapis.com|storage.cloud.google.com)":n,c="([^?#]*)",g=new RegExp(`^https?://${l}/${o}/${c}`,"i"),m=[{regex:u,indices:d,postModify:r},{regex:A,indices:p,postModify:_},{regex:g,indices:{bucket:1,path:2},postModify:_}];for(let h=0;h<m.length;h++){const x=m[h],C=x.regex.exec(t);if(C){const K=C[x.indices.bucket];let G=C[x.indices.path];G||(G=""),s=new N(K,G),x.postModify(s);break}}if(s==null)throw Lt(t);return s}}class jt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function zt(e,t,n){let s=1,o=null,r=null,i=!1,u=0;function d(){return u===2}let _=!1;function f(...c){_||(_=!0,t.apply(null,c))}function k(c){o=setTimeout(()=>{o=null,e(A,d())},c)}function y(){r&&clearTimeout(r)}function A(c,...g){if(_){y();return}if(c){y(),f.call(null,c,...g);return}if(d()||i){y(),f.call(null,c,...g);return}s<64&&(s*=2);let m;u===1?(u=2,m=0):m=(s+Math.random())*1e3,k(m)}let p=!1;function l(c){p||(p=!0,y(),!_&&(o!==null?(c||(u=2),clearTimeout(o),k(0)):c||(u=1)))}return k(0),r=setTimeout(()=>{i=!0,l(!0)},n),l}function qt(e){e(!1)}/**
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
 */function Xt(e){return e!==void 0}function Kt(e){return typeof e=="object"&&!Array.isArray(e)}function re(e){return typeof e=="string"||e instanceof String}function fe(e){return ae()&&e instanceof Blob}function ae(){return typeof Blob<"u"}function ge(e,t,n,s){if(s<t)throw ee(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw ee(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function ie(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function Ce(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const o=t(s)+"="+t(e[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var L;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(L||(L={}));/**
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
 */function Gt(e,t){const n=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,r=t.indexOf(e)!==-1;return n||o||r}/**
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
 */class Yt{constructor(t,n,s,o,r,i,u,d,_,f,k,y=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=r,this.additionalRetryCodes_=i,this.callback_=u,this.errorCallback_=d,this.timeout_=_,this.progressCallback_=f,this.connectionFactory_=k,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,p)=>{this.resolve_=A,this.reject_=p,this.start_()})}start_(){const t=(s,o)=>{if(o){s(!1,new W(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const i=u=>{const d=u.loaded,_=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,_)};this.progressCallback_!==null&&r.addUploadProgressListener(i),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(i),this.pendingConnection_=null;const u=r.getErrorCode()===L.NO_ERROR,d=r.getStatus();if(!u||Gt(d,this.additionalRetryCodes_)&&this.retry){const f=r.getErrorCode()===L.ABORT;s(!1,new W(!1,null,f));return}const _=this.successCodes_.indexOf(d)!==-1;s(!0,new W(_,r))})},n=(s,o)=>{const r=this.resolve_,i=this.reject_,u=o.connection;if(o.wasSuccessCode)try{const d=this.callback_(u,u.getResponse());Xt(d)?r(d):r()}catch(d){i(d)}else if(u!==null){const d=oe();d.serverResponse=u.getErrorText(),this.errorCallback_?i(this.errorCallback_(u,d)):i(d)}else if(o.canceled){const d=this.appDelete_?Ae():St();i(d)}else{const d=Bt();i(d)}};this.canceled_?n(!1,new W(!1,null,!0)):this.backoffId_=zt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&qt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class W{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Zt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Jt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Qt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function en(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function tn(e,t,n,s,o,r,i=!0){const u=Ce(e.urlParams),d=e.url+u,_=Object.assign({},e.headers);return Qt(_,t),Zt(_,n),Jt(_,r),en(_,s),new Yt(d,e.method,_,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,i)}/**
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
 */function nn(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sn(...e){const t=nn();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(ae())return new Blob(e);throw new v(w.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function on(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function rn(e){if(typeof atob>"u")throw Vt("base-64");return atob(e)}/**
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
 */const O={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Z{constructor(t,n){this.data=t,this.contentType=n||null}}function an(e,t){switch(e){case O.RAW:return new Z(Ee(t));case O.BASE64:case O.BASE64URL:return new Z(Ne(e,t));case O.DATA_URL:return new Z(un(t),cn(t))}throw oe()}function Ee(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const r=s,i=e.charCodeAt(++n);s=65536|(r&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function ln(e){let t;try{t=decodeURIComponent(e)}catch{throw H(O.DATA_URL,"Malformed data URL.")}return Ee(t)}function Ne(e,t){switch(e){case O.BASE64:{const o=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(o||r)throw H(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case O.BASE64URL:{const o=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(o||r)throw H(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=rn(t)}catch(o){throw o.message.includes("polyfill")?o:H(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class Ie{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw H(O.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=dn(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function un(e){const t=new Ie(e);return t.base64?Ne(O.BASE64,t.rest):ln(t.rest)}function cn(e){return new Ie(e).contentType}function dn(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class D{constructor(t,n){let s=0,o="";fe(t)?(this.data_=t,s=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(fe(this.data_)){const s=this.data_,o=on(s,t,n);return o===null?null:new D(o)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new D(s,!0)}}static getBlob(...t){if(ae()){const n=t.map(s=>s instanceof D?s.data_:s);return new D(sn.apply(null,n))}else{const n=t.map(i=>re(i)?an(O.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const o=new Uint8Array(s);let r=0;return n.forEach(i=>{for(let u=0;u<i.length;u++)o[r++]=i[u]}),new D(o,!0)}}uploadData(){return this.data_}}/**
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
 */function xe(e){let t;try{t=JSON.parse(e)}catch{return null}return Kt(t)?t:null}/**
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
 */function hn(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function pn(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function Oe(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function _n(e,t){return t}class E{constructor(t,n,s,o){this.server=t,this.local=n||t,this.writable=!!s,this.xform=o||_n}}let j=null;function fn(e){return!re(e)||e.length<2?e:Oe(e)}function De(){if(j)return j;const e=[];e.push(new E("bucket")),e.push(new E("generation")),e.push(new E("metageneration")),e.push(new E("name","fullPath",!0));function t(r,i){return fn(i)}const n=new E("name");n.xform=t,e.push(n);function s(r,i){return i!==void 0?Number(i):i}const o=new E("size");return o.xform=s,e.push(o),e.push(new E("timeCreated")),e.push(new E("updated")),e.push(new E("md5Hash",null,!0)),e.push(new E("cacheControl",null,!0)),e.push(new E("contentDisposition",null,!0)),e.push(new E("contentEncoding",null,!0)),e.push(new E("contentLanguage",null,!0)),e.push(new E("contentType",null,!0)),e.push(new E("metadata","customMetadata",!0)),j=e,j}function gn(e,t){function n(){const s=e.bucket,o=e.fullPath,r=new N(s,o);return t._makeStorageReference(r)}Object.defineProperty(e,"ref",{get:n})}function mn(e,t,n){const s={};s.type="file";const o=n.length;for(let r=0;r<o;r++){const i=n[r];s[i.local]=i.xform(s,t[i.server])}return gn(s,e),s}function Pe(e,t,n){const s=xe(t);return s===null?null:mn(e,s,n)}function bn(e,t,n,s){const o=xe(t);if(o===null||!re(o.downloadTokens))return null;const r=o.downloadTokens;if(r.length===0)return null;const i=encodeURIComponent;return r.split(",").map(_=>{const f=e.bucket,k=e.fullPath,y="/b/"+i(f)+"/o/"+i(k),A=ie(y,n,s),p=Ce({alt:"media",token:_});return A+p})[0]}function wn(e,t){const n={},s=t.length;for(let o=0;o<s;o++){const r=t[o];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}class Be{constructor(t,n,s,o){this.url=t,this.method=n,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Se(e){if(!e)throw oe()}function vn(e,t){function n(s,o){const r=Pe(e,o,t);return Se(r!==null),r}return n}function yn(e,t){function n(s,o){const r=Pe(e,o,t);return Se(r!==null),bn(r,o,e.host,e._protocol)}return n}function Le(e){function t(n,s){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=Dt():o=Ot():n.getStatus()===402?o=xt(e.bucket):n.getStatus()===403?o=Pt(e.path):o=s,o.status=n.getStatus(),o.serverResponse=s.serverResponse,o}return t}function Rn(e){const t=Le(e);function n(s,o){let r=t(s,o);return s.getStatus()===404&&(r=It(e.path)),r.serverResponse=o.serverResponse,r}return n}function kn(e,t,n){const s=t.fullServerUrl(),o=ie(s,e.host,e._protocol),r="GET",i=e.maxOperationRetryTime,u=new Be(o,r,yn(e,n),i);return u.errorHandler=Rn(t),u}function Tn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Un(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=Tn(null,t)),s}function An(e,t,n,s,o){const r=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function u(){let m="";for(let h=0;h<2;h++)m=m+Math.random().toString().slice(2);return m}const d=u();i["Content-Type"]="multipart/related; boundary="+d;const _=Un(t,s,o),f=wn(_,n),k="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+d+`\r
Content-Type: `+_.contentType+`\r
\r
`,y=`\r
--`+d+"--",A=D.getBlob(k,s,y);if(A===null)throw Ft();const p={name:_.fullPath},l=ie(r,e.host,e._protocol),c="POST",g=e.maxUploadRetryTime,U=new Be(l,c,vn(e,n),g);return U.urlParams=p,U.headers=i,U.body=A.uploadData(),U.errorHandler=Le(t),U}class Cn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=L.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=L.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=L.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,o){if(this.sent_)throw M("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw M("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw M("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw M("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw M("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class En extends Cn{initXhr(){this.xhr_.responseType="text"}}function $e(){return new En}/**
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
 */class ${constructor(t,n){this._service=t,n instanceof N?this._location=n:this._location=N.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new $(t,n)}get root(){const t=new N(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Oe(this._location.path)}get storage(){return this._service}get parent(){const t=hn(this._location.path);if(t===null)return null;const n=new N(this._location.bucket,t);return new $(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Wt(t)}}function Nn(e,t,n){e._throwIfRoot("uploadBytes");const s=An(e.storage,e._location,De(),new D(t,!0),n);return e.storage.makeRequestWithTokens(s,$e).then(o=>({metadata:o,ref:e}))}function In(e){e._throwIfRoot("getDownloadURL");const t=kn(e.storage,e._location,De());return e.storage.makeRequestWithTokens(t,$e).then(n=>{if(n===null)throw Ht();return n})}function xn(e,t){const n=pn(e._location.path,t),s=new N(e._location.bucket,n);return new $(e.storage,s)}/**
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
 */function On(e){return/^[A-Za-z]+:\/\//.test(e)}function Dn(e,t){return new $(e,t)}function Me(e,t){if(e instanceof le){const n=e;if(n._bucket==null)throw Mt();const s=new $(n,n._bucket);return t!=null?Me(s,t):s}else return t!==void 0?xn(e,t):e}function Pn(e,t){if(t&&On(t)){if(e instanceof le)return Dn(e,t);throw ee("To use ref(service, url), the first argument must be a Storage instance.")}else return Me(e,t)}function me(e,t){const n=t==null?void 0:t[Ue];return n==null?null:N.makeFromBucketSpec(n,e)}function Bn(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=s;o&&(e._overrideAuthToken=typeof o=="string"?o:Ye(o,e.app.options.projectId))}class le{constructor(t,n,s,o,r){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=r,this._bucket=null,this._host=Te,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Et,this._maxUploadRetryTime=Nt,this._requests=new Set,o!=null?this._bucket=N.makeFromBucketSpec(o,this._host):this._bucket=me(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=N.makeFromBucketSpec(this._url,t):this._bucket=me(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ge("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ge("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new $(this,t)}_makeRequest(t,n,s,o,r=!0){if(this._deleted)return new jt(Ae());{const i=tn(t,this._appId,s,o,n,this._firebaseVersion,r);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,o).getPromise()}}const be="@firebase/storage",we="0.13.2";/**
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
 */const Fe="storage";function Sn(e,t,n){return e=X(e),Nn(e,t,n)}function Ln(e){return e=X(e),In(e)}function $n(e,t){return e=X(e),Pn(e,t)}function Mn(e=Xe(),t){e=X(e);const s=ze(e,Fe).getImmediate({identifier:t}),o=qe("storage");return o&&Fn(s,...o),s}function Fn(e,t,n,s={}){Bn(e,t,n,s)}function Hn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new le(n,s,o,t,Ze)}function Vn(){Ke(new Ge(Fe,Hn,"PUBLIC").setMultipleInstances(!0)),ce(be,we,""),ce(be,we,"esm2017")}Vn();const Wn=z(),jn=Mn(),zn=ne();async function ve(e,t){const n=$n(jn,t);return await Sn(n,e),await Ln(n)}async function qn(e,t,n,s){s.value=!0;const o=zn.currentUser,r=q(Wn,"users",o.uid),i={};try{if(n.value){const u=await ve(n.value,`avatars/${o.uid}`);i.photoUrl=u,e.value.photoUrl=u}if(t.value){const u=await ve(t.value,`wallpapers/${o.uid}`);i.wallpaperUrl=u,e.value.wallpaperUrl=u}await se(r,i),console.log("Профиль успешно обновлен")}catch(u){console.log("ошибка при загрузке профиля,",u)}finally{s.value=!1}}const Xn={class:"form__wrapper"},Kn={class:"form__list"},Gn={class:"form__preview__card"},Yn={key:0,class:"card__label card__label--file",for:"file-input"},Zn=["src"],Jn={card__title:""},Qn={class:"card__price"},es={class:"card__user__info"},ts={class:"user__info--info"},ns=["src"],ss=["textContent"],os={class:"user__info--date"},rs={__name:"AddWishCards",props:{userImg:{type:String},userName:{type:String},usersWhises:{type:Array}},setup(e,{emit:t}){const n=t,s=z(),o=ne(),r=b(""),i=b(""),u=b(""),d=b(""),_=e,f=(p,l,c,g)=>({id:crypto.randomUUID(),img:p,name:l,hover:!1,description:c,price:g});async function k(p,l){try{const c=q(s,"users",p);await se(c,{wishes:Qe(l)}),n("addWish",l),console.log("Card successfully added to wishes!")}catch(c){console.error("Error adding card to wishes:",c)}}const y=()=>{const p=o.currentUser,l=f(r.value,i.value,u.value,d.value);k(p.uid,l)},A=p=>{const l=p.target.files[0];if(l){const c=new FileReader;c.onload=g=>{r.value=g.target.result},c.readAsDataURL(l)}};return(p,l)=>{const c=te("font-awesome-icon");return R(),T("form",{method:"dialog",class:"form",onSubmit:y},[l[8]||(l[8]=a("h1",{class:"form__title"},"Добавить желание",-1)),a("div",Xn,[a("ul",Kn,[a("li",null,[l[4]||(l[4]=a("label",{for:"name"},"Название:",-1)),S(a("input",{type:"text",id:"name","onUpdate:modelValue":l[0]||(l[0]=g=>i.value=g)},null,512),[[F,i.value]])]),a("li",null,[l[5]||(l[5]=a("label",{for:"description"},"Описание",-1)),S(a("textarea",{type:"text",id:"description","onUpdate:modelValue":l[1]||(l[1]=g=>u.value=g)}," ",512),[[F,u.value]])]),a("li",null,[l[6]||(l[6]=a("label",{for:"price"},"Цена",-1)),S(a("input",{type:"number",id:"price","onUpdate:modelValue":l[2]||(l[2]=g=>d.value=g)},null,512),[[F,d.value]])]),l[7]||(l[7]=a("li",null,[a("label",{for:"link"},"Ссылка на товар"),a("input",{type:"text",id:"link"})],-1))]),a("div",Gn,[r.value?B("",!0):(R(),T("label",Yn,[r.value?B("",!0):(R(),ke(c,{key:0,class:"card__icon--file",icon:["fas","file-image"]})),a("input",{class:"card__input card__input--file",type:"file",id:"file-input",onChange:l[3]||(l[3]=g=>A(g))},null,32)])),r.value?(R(),T("img",{key:1,src:r.value,alt:"",class:"card__image"},null,8,Zn)):B("",!0),a("h3",Jn,I(i.value),1),a("p",Qn,I(d.value)+" руб",1),a("div",es,[a("div",ts,[a("img",{src:_.userImg,alt:"User Avatar",class:"card__img user__info--avatarImg"},null,8,ns),a("span",{textContent:I(_.userName)},null,8,ss)]),a("span",os,I(new Date().toLocaleDateString()),1)])])]),l[9]||(l[9]=a("button",{class:""},"добавить",-1))],32)}}},as=V(rs,[["__scopeId","data-v-48643cac"]]),is={class:"user"},ls={class:"skeleton-loader user__info"},us={class:"user__info"},cs={key:0,class:"profile"},ds=["src"],hs={key:0,for:"input-wallaper",class:"profile__wallaper-edit"},ps={key:0,class:"profile__spinner"},_s=["src"],fs={key:1,for:"input-avatar",class:"profile__photo profile__photo--edit"},gs={class:"profile__settings"},ms={class:"profile__name"},bs={class:"profile__about"},ws={class:"profile__badges"},vs={class:"wishes"},ys={key:0,class:"wishes__list"},Rs={class:"whishes__cards"},ks={key:1,class:"wishes__empty"},Ts={__name:"UserPage",setup(e){const t=b({}),n=b([]),s=b([]),o=nt(),r=b(!1),i=b(!1),u=b(null),d=b(null),_=b(!1),f=b(null),k=b(null),y=b(!0),A=b(!1),p=()=>{f.value.openModal()},l=()=>{k.value.openModal()};function c(m,h){const x=h.target.files[0];m==="avatar"?d.value=x:m==="wallpaper"&&(u.value=x),qn(t,u,d,_)}function g(m){t.value.displayName=m.userName,t.value.about=m.userAbout,n.value=m.pickedBadges,console.log("Профиль обновлен в родительском компоненте:",m)}const U=m=>{s.value.push(m)};return et(async()=>{y.value=!0;const m=o.params.uid,{user:h,wishes:x}=await Ct(m);h?(t.value=h,n.value=h.badges||[],s.value=h.wishes):console.error("Не удалось загрузить данные пользователя"),y.value=!1}),(m,h)=>{const x=te("font-awesome-icon");return R(),T("div",null,[a("div",null,[P(ct)]),a("main",is,[S(a("div",ls,null,512),[[de,y.value]]),a("section",us,[t.value?S((R(),T("div",cs,[a("div",{class:"profile__wallapper",onMouseenter:h[2]||(h[2]=C=>r.value=!0),onMouseleave:h[3]||(h[3]=C=>r.value=!1)},[a("img",{src:t.value.wallpaperUrl,alt:"user-wallapper",loading:"lazy",class:"profile__wallapper-img",style:ye({opacity:A.value?1:0}),onLoad:h[0]||(h[0]=C=>A.value=!0)},null,44,ds),r.value?(R(),T("label",hs,[a("input",{class:"profile__input profile__input--wallpaper",id:"input-wallaper",type:"file",onChange:h[1]||(h[1]=C=>c("wallpaper",C))},null,32),h[7]||(h[7]=tt(" изменить обложку "))])):B("",!0)],32),a("div",{class:"profile__photo-wrapper",onMouseenter:h[5]||(h[5]=C=>i.value=!0),onMouseleave:h[6]||(h[6]=C=>i.value=!1)},[_.value?(R(),T("div",ps)):B("",!0),a("img",{class:"profile__photo",src:t.value.photoUrl,alt:"user-photo",loading:"lazy"},null,8,_s),i.value?(R(),T("label",fs,[a("input",{class:"profile__input profile__input--avatar",type:"file",id:"input-avatar",onChange:h[4]||(h[4]=C=>c("avatar",C))},null,32),P(x,{class:"profile__icon profile__icon-edit",icon:["fas","edit"]})])):B("",!0)],32),a("div",gs,[a("button",{class:"profile__button profile__button--edit",onClick:p},"Редактировать профиль"),P(pe,{ref_key:"modal",ref:f},{default:he(()=>[P(At,{user:t.value,"picked-badges":n.value,onUpdateProfile:g},null,8,["user","picked-badges"])]),_:1},512)]),a("h2",ms,I(t.value.displayName),1),a("p",bs,I(t.value.about||"Информация о пользователе отсутствует"),1),a("div",ws,[(R(!0),T(J,null,Q(n.value,(C,K)=>(R(),T("div",{key:K,class:"badge"},I(C.name),1))),128))])],512)),[[de,!y.value]]):B("",!0)]),a("div",vs,[h[9]||(h[9]=a("h2",null,"Список желаний",-1)),a("button",{class:"profile__button profile__button--addWish",onClick:l},"Добавить"),P(pe,{ref_key:"modalAddCard",ref:k},{default:he(()=>[P(as,{userImg:t.value.photoUrl,userName:t.value.displayName,onAddWish:U},null,8,["userImg","userName"])]),_:1},512),s.value.length?(R(),T("section",ys,[a("div",Rs,[(R(!0),T(J,null,Q(s.value,C=>(R(),ke(vt,{key:C.id,wish:C,userImg:t.value.photoUrl,userName:t.value.displayName},null,8,["wish","userImg","userName"]))),128))])])):(R(),T("div",ks,h[8]||(h[8]=[a("img",{src:st,alt:"empty-box",loading:"lazy"},null,-1),a("p",null,"У пользователя пока нет желаний.",-1)])))])])])}}},As=V(Ts,[["__scopeId","data-v-54008212"]]);export{As as default};
