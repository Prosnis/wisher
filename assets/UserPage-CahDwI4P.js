import{_ as W,r as v,e as K,g as ee,z as le,o as y,c as A,a,w as S,v as V,F as J,k as Z,A as we,t as O,l as Ve,f as te,q as He,x as ye,h as $,B as je,C as ne,u as We,p as qe,m as B,D as Re,s as ze,E as X,G as Ke,H as Xe,I as Ge,J as Ye,K as Je,L as ue,M as Ze,S as Qe,N as et,i as tt,O as ce,j as de,P as he,Q as nt}from"./index-DtZ_ybxC.js";import{N as st}from"./NavBar-JqVFmojW.js";import{g as ot}from"./GetUserData-DNN_yxwx.js";const rt="/wisher/assets/empty-box-D7umrX5t.png",it=[{name:"Аниме",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Рыбалка",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Танцы",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Хоббихорсинг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Квадробинг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Футбол",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Рисование",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Вышивание",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Фитнес",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Лего",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Паркур",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Кулинария",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Фотография",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Йога",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Плавание",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Велоспорт",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Программирование",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Чтение",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Гейминг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Музыка",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Бег",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Садоводство",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"}],at={class:"user-edit-list"},lt={class:"badge-wrapper"},ut=["onClick"],ct={__name:"EditUserPage",props:{user:{type:Object,default:()=>({name:"Unknown",about:"Empty"})},pickedBadges:{type:Array,default:()=>[]}},emits:["close","updateProfile"],setup(e,{emit:t}){const n=e,s=t,o=v(""),r=v(""),i=K(),l=ee(),u=v(n.user.displayName),d=v(n.user.about),g=v([...n.pickedBadges]);le(()=>n.user,m=>{u.value=m.displayName,d.value=m.about},{immediate:!0}),le(()=>n.pickedBadges,m=>{g.value=[...m]},{immediate:!0});function w(m){return g.value.some(h=>h.name===m.name)}function T(m){const h=g.value.findIndex(f=>f.name===m.name);h!==-1?g.value.splice(h,1):g.value.push(m),console.log(g.value)}async function N(){const m=i.currentUser;if(!m){console.error("Пользователь не авторизован");return}const h=te(l,"users",m.uid),f=await He(h),b=f.exists()?f.data():{},c={};c.displayName=r.value!==""?r.value:b.displayName||m.displayName,c.about=o.value!==""?o.value:b.about||"",c.badges=g.value.length>0?g.value:b.badges||[];try{await ye(h,c),console.log("Профиль успешно обновлен"),s("updateProfile",{userName:c.displayName,userAbout:c.about,pickedBadges:c.badges})}catch(U){console.error("Ошибка при обновлении профиля:",U)}}return(m,h)=>(y(),A("form",{method:"dialog",class:"form",onSubmit:N},[h[5]||(h[5]=a("h1",null,"Редактировать профиль",-1)),a("ul",at,[a("li",null,[h[2]||(h[2]=a("label",{for:"name"},"Имя:",-1)),S(a("input",{id:"name","onUpdate:modelValue":h[0]||(h[0]=f=>r.value=f),type:"text"},null,512),[[V,r.value]])]),a("li",null,[h[3]||(h[3]=a("label",{for:"about"},"Краткая информация:",-1)),S(a("textarea",{id:"about","onUpdate:modelValue":h[1]||(h[1]=f=>o.value=f),name:""},null,512),[[V,o.value]])]),a("li",null,[h[4]||(h[4]=a("label",{for:""},"Выберите интересы:",-1)),a("div",lt,[(y(!0),A(J,null,Z(Ve(it),(f,b)=>(y(),A("div",{key:b,class:"badge",style:we({backgroundColor:w(f)?"green":f.BgColor,color:w(f)?"white":f.color}),onClick:c=>T(f)},O(f.name),13,ut))),128))])])]),h[6]||(h[6]=a("button",{class:"btn-modal-save"}," сохранить изменения ",-1))],32))}},dt=W(ct,[["__scopeId","data-v-6cd33811"]]),ht={class:"modal__dialog__inner"},ft={class:"modal__content"},pt={__name:"ModalComponent",setup(e,{expose:t}){const n=v(null);function s(){n.value.showModal()}function o(){n.value.close()}return t({openModal:s,closeModal:o}),(r,i)=>{const l=ne("font-awesome-icon");return y(),A("dialog",{ref_key:"dialogRef",ref:n,class:"modal__dialog"},[a("div",ht,[a("button",{class:"modal__button modal__button--close",onClick:o},[$(l,{class:"modal__icon--close modal__icon",icon:["fas","close"]})]),a("div",ft,[je(r.$slots,"default",{},void 0)])])],512)}}},fe=W(pt,[["__scopeId","data-v-e1f9dae2"]]),_t=["data-id"],mt=["src"],gt={card__title:""},bt={class:"card__price"},vt={class:"card__user__info"},wt={class:"user__info--info"},yt=["src"],Rt=["textContent"],kt={class:"user__info--date"},Tt={__name:"WishCardCreate",props:{wish:{type:Object},userImg:{type:String},userName:{type:String}},setup(e){const t=e,n=We();function s(l){n.push(`${qe.card}/${l}`).catch(u=>{console.log("Card not allowed")})}function o(l){return l?new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:0}).format(l):""}function r(l){l.target.classList.add("card__hover")}function i(l){l.target.classList.remove("card__hover")}return(l,u)=>(y(),A("div",{class:"card","data-id":e.wish.id,onMouseenter:u[0]||(u[0]=d=>r(d)),onMouseleave:u[1]||(u[1]=d=>i(d)),onClick:u[2]||(u[2]=d=>s(e.wish.id))},[a("img",{src:e.wish.img,alt:"",class:"card__image"},null,8,mt),a("h3",gt,O(e.wish.name),1),a("p",bt,O(o(e.wish.price))+" руб ",1),a("div",vt,[a("div",wt,[a("img",{src:t.userImg,alt:"User Avatar",class:"card__img user__info--avatarImg"},null,8,yt),a("span",{textContent:O(t.userName)},null,8,Rt)]),a("span",kt,O(new Date().toLocaleDateString()),1)])],40,_t))}},Ut=W(Tt,[["__scopeId","data-v-add0c8f1"]]),Ct={class:"form__wrapper"},At={class:"form__list"},Et={class:"form__preview__card"},Nt={class:"card__label card__label--file",for:"file-input"},It=["src"],xt={card__title:""},Ot={class:"card__price"},Pt={class:"card__user__info"},Dt={class:"user__info--info"},Bt=["src"],Lt=["textContent"],St={class:"user__info--date"},$t={__name:"WishCardsAdd",props:{userImg:{type:String},userName:{type:String}},setup(e,{emit:t}){const n=e,s=t,o=ee(),r=K(),i=v(""),l=v(""),u=v(""),d=v(""),g=v(new Date().toLocaleDateString()),w=v("");function T(b){return b?new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:0}).format(b):""}function N(){l.value="",u.value="",d.value="",w.value="",i.value=""}function m(b,c,U,_,C,p){return{id:crypto.randomUUID(),userId:r.currentUser.uid,img:b||"https://media.istockphoto.com/id/1308342088/vector/surprise-gift-box-gift-box-with-red-ribbon-bow-flat-style-element-design-for-giveaway.jpg?s=612x612&w=0&k=20&c=FUOJS2CFbYIqm4R7zfyKUdeS-gMyc3bGlRr1rL7rjQ0=",name:c,hover:!1,description:U||"Описание отсутствует. ",price:_||0,date:C,link:p,reserve:""}}async function h(){const b=m(i.value,l.value,u.value,d.value,g.value,w.value);await ze(te(o,"wishes",b.id),b),s("addWish",b),N()}function f(b){const c=b.target.files[0];if(c){const U=new FileReader;U.onload=_=>{i.value=_.target.result},U.readAsDataURL(c)}}return(b,c)=>{const U=ne("font-awesome-icon");return y(),A("form",{method:"dialog",class:"form",onSubmit:h},[c[9]||(c[9]=a("h1",{class:"form__title"}," Добавить желание ",-1)),a("div",Ct,[a("ul",At,[a("li",null,[c[5]||(c[5]=a("label",{for:"name"},"Название:",-1)),S(a("input",{id:"name","onUpdate:modelValue":c[0]||(c[0]=_=>l.value=_),type:"text",required:""},null,512),[[V,l.value]])]),a("li",null,[c[6]||(c[6]=a("label",{for:"description"},"Описание",-1)),S(a("textarea",{id:"description","onUpdate:modelValue":c[1]||(c[1]=_=>u.value=_),type:"text"},null,512),[[V,u.value]])]),a("li",null,[c[7]||(c[7]=a("label",{for:"price"},"Цена",-1)),S(a("input",{id:"price","onUpdate:modelValue":c[2]||(c[2]=_=>d.value=_),type:"number"},null,512),[[V,d.value]])]),a("li",null,[c[8]||(c[8]=a("label",{for:"link"},"Ссылка на товар",-1)),S(a("input",{id:"link","onUpdate:modelValue":c[3]||(c[3]=_=>w.value=_),type:"text"},null,512),[[V,w.value]])])]),a("div",Et,[a("label",Nt,[i.value?(y(),A("img",{key:0,src:i.value,alt:"",class:"card__image"},null,8,It)):B("",!0),i.value?B("",!0):(y(),Re(U,{key:1,class:"card__icon--file",icon:["fas","file-image"]})),a("input",{id:"file-input",class:"card__input card__input--file",type:"file",onChange:c[4]||(c[4]=_=>f(_))},null,32)]),a("h3",xt,O(l.value),1),a("p",Ot,O(T(d.value)),1),a("div",Pt,[a("div",Dt,[a("img",{src:n.userImg,alt:"User Avatar",class:"card__img user__info--avatarImg"},null,8,Bt),a("span",{textContent:O(n.userName)},null,8,Lt)]),a("span",St,O(g.value),1)])])]),c[10]||(c[10]=a("button",{class:"form__btn form__btn--add"}," добавить ",-1))],32)}}},Mt=W($t,[["__scopeId","data-v-408a6c70"]]);/**
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
 */const ke="firebasestorage.googleapis.com",Te="storageBucket",Ft=2*60*1e3,Vt=10*60*1e3;/**
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
 */class k extends et{constructor(t,n,s=0){super(G(t),`Firebase Storage: ${n} (${G(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,k.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return G(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var R;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(R||(R={}));function G(e){return"storage/"+e}function se(){const e="An unknown error occurred, please check the error payload for server response.";return new k(R.UNKNOWN,e)}function Ht(e){return new k(R.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function jt(e){return new k(R.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Wt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new k(R.UNAUTHENTICATED,e)}function qt(){return new k(R.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function zt(e){return new k(R.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Kt(){return new k(R.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Xt(){return new k(R.CANCELED,"User canceled the upload/download.")}function Gt(e){return new k(R.INVALID_URL,"Invalid URL '"+e+"'.")}function Yt(e){return new k(R.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Jt(){return new k(R.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Te+"' property when initializing the app?")}function Zt(){return new k(R.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Qt(){return new k(R.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function en(e){return new k(R.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Q(e){return new k(R.INVALID_ARGUMENT,e)}function Ue(){return new k(R.APP_DELETED,"The Firebase app was deleted.")}function tn(e){return new k(R.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function j(e,t){return new k(R.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function H(e){throw new k(R.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class x{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=x.makeFromUrl(t,n)}catch{return new x(t,"")}if(s.path==="")return s;throw Yt(t)}static makeFromUrl(t,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function r(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const i="(/(.*))?$",l=new RegExp("^gs://"+o+i,"i"),u={bucket:1,path:3};function d(_){_.path_=decodeURIComponent(_.path)}const g="v[A-Za-z0-9_]+",w=n.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",N=new RegExp(`^https?://${w}/${g}/b/${o}/o${T}`,"i"),m={bucket:1,path:3},h=n===ke?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",b=new RegExp(`^https?://${h}/${o}/${f}`,"i"),U=[{regex:l,indices:u,postModify:r},{regex:N,indices:m,postModify:d},{regex:b,indices:{bucket:1,path:2},postModify:d}];for(let _=0;_<U.length;_++){const C=U[_],p=C.regex.exec(t);if(p){const P=p[C.indices.bucket];let E=p[C.indices.path];E||(E=""),s=new x(P,E),C.postModify(s);break}}if(s==null)throw Gt(t);return s}}class nn{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function sn(e,t,n){let s=1,o=null,r=null,i=!1,l=0;function u(){return l===2}let d=!1;function g(...f){d||(d=!0,t.apply(null,f))}function w(f){o=setTimeout(()=>{o=null,e(N,u())},f)}function T(){r&&clearTimeout(r)}function N(f,...b){if(d){T();return}if(f){T(),g.call(null,f,...b);return}if(u()||i){T(),g.call(null,f,...b);return}s<64&&(s*=2);let U;l===1?(l=2,U=0):U=(s+Math.random())*1e3,w(U)}let m=!1;function h(f){m||(m=!0,T(),!d&&(o!==null?(f||(l=2),clearTimeout(o),w(0)):f||(l=1)))}return w(0),r=setTimeout(()=>{i=!0,h(!0)},n),h}function on(e){e(!1)}/**
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
 */function rn(e){return e!==void 0}function an(e){return typeof e=="object"&&!Array.isArray(e)}function oe(e){return typeof e=="string"||e instanceof String}function pe(e){return re()&&e instanceof Blob}function re(){return typeof Blob<"u"}function _e(e,t,n,s){if(s<t)throw Q(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw Q(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function ie(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function Ce(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const o=t(s)+"="+t(e[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var M;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(M||(M={}));/**
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
 */function ln(e,t){const n=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,r=t.indexOf(e)!==-1;return n||o||r}/**
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
 */class un{constructor(t,n,s,o,r,i,l,u,d,g,w,T=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=r,this.additionalRetryCodes_=i,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=g,this.connectionFactory_=w,this.retry=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,m)=>{this.resolve_=N,this.reject_=m,this.start_()})}start_(){const t=(s,o)=>{if(o){s(!1,new q(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const i=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&r.addUploadProgressListener(i),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(i),this.pendingConnection_=null;const l=r.getErrorCode()===M.NO_ERROR,u=r.getStatus();if(!l||ln(u,this.additionalRetryCodes_)&&this.retry){const g=r.getErrorCode()===M.ABORT;s(!1,new q(!1,null,g));return}const d=this.successCodes_.indexOf(u)!==-1;s(!0,new q(d,r))})},n=(s,o)=>{const r=this.resolve_,i=this.reject_,l=o.connection;if(o.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());rn(u)?r(u):r()}catch(u){i(u)}else if(l!==null){const u=se();u.serverResponse=l.getErrorText(),this.errorCallback_?i(this.errorCallback_(l,u)):i(u)}else if(o.canceled){const u=this.appDelete_?Ue():Xt();i(u)}else{const u=Kt();i(u)}};this.canceled_?n(!1,new q(!1,null,!0)):this.backoffId_=sn(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&on(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class q{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function cn(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function dn(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function hn(e,t){t&&(e["X-Firebase-GMPID"]=t)}function fn(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function pn(e,t,n,s,o,r,i=!0){const l=Ce(e.urlParams),u=e.url+l,d=Object.assign({},e.headers);return hn(d,t),cn(d,n),dn(d,r),fn(d,s),new un(u,e.method,d,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,i)}/**
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
 */function _n(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function mn(...e){const t=_n();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(re())return new Blob(e);throw new k(R.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function gn(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function bn(e){if(typeof atob>"u")throw en("base-64");return atob(e)}/**
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
 */const D={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Y{constructor(t,n){this.data=t,this.contentType=n||null}}function vn(e,t){switch(e){case D.RAW:return new Y(Ae(t));case D.BASE64:case D.BASE64URL:return new Y(Ee(e,t));case D.DATA_URL:return new Y(yn(t),Rn(t))}throw se()}function Ae(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const r=s,i=e.charCodeAt(++n);s=65536|(r&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function wn(e){let t;try{t=decodeURIComponent(e)}catch{throw j(D.DATA_URL,"Malformed data URL.")}return Ae(t)}function Ee(e,t){switch(e){case D.BASE64:{const o=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(o||r)throw j(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case D.BASE64URL:{const o=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(o||r)throw j(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=bn(t)}catch(o){throw o.message.includes("polyfill")?o:j(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class Ne{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw j(D.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=kn(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function yn(e){const t=new Ne(e);return t.base64?Ee(D.BASE64,t.rest):wn(t.rest)}function Rn(e){return new Ne(e).contentType}function kn(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class L{constructor(t,n){let s=0,o="";pe(t)?(this.data_=t,s=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(pe(this.data_)){const s=this.data_,o=gn(s,t,n);return o===null?null:new L(o)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new L(s,!0)}}static getBlob(...t){if(re()){const n=t.map(s=>s instanceof L?s.data_:s);return new L(mn.apply(null,n))}else{const n=t.map(i=>oe(i)?vn(D.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const o=new Uint8Array(s);let r=0;return n.forEach(i=>{for(let l=0;l<i.length;l++)o[r++]=i[l]}),new L(o,!0)}}uploadData(){return this.data_}}/**
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
 */function Ie(e){let t;try{t=JSON.parse(e)}catch{return null}return an(t)?t:null}/**
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
 */function Tn(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Un(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function xe(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Cn(e,t){return t}class I{constructor(t,n,s,o){this.server=t,this.local=n||t,this.writable=!!s,this.xform=o||Cn}}let z=null;function An(e){return!oe(e)||e.length<2?e:xe(e)}function Oe(){if(z)return z;const e=[];e.push(new I("bucket")),e.push(new I("generation")),e.push(new I("metageneration")),e.push(new I("name","fullPath",!0));function t(r,i){return An(i)}const n=new I("name");n.xform=t,e.push(n);function s(r,i){return i!==void 0?Number(i):i}const o=new I("size");return o.xform=s,e.push(o),e.push(new I("timeCreated")),e.push(new I("updated")),e.push(new I("md5Hash",null,!0)),e.push(new I("cacheControl",null,!0)),e.push(new I("contentDisposition",null,!0)),e.push(new I("contentEncoding",null,!0)),e.push(new I("contentLanguage",null,!0)),e.push(new I("contentType",null,!0)),e.push(new I("metadata","customMetadata",!0)),z=e,z}function En(e,t){function n(){const s=e.bucket,o=e.fullPath,r=new x(s,o);return t._makeStorageReference(r)}Object.defineProperty(e,"ref",{get:n})}function Nn(e,t,n){const s={};s.type="file";const o=n.length;for(let r=0;r<o;r++){const i=n[r];s[i.local]=i.xform(s,t[i.server])}return En(s,e),s}function Pe(e,t,n){const s=Ie(t);return s===null?null:Nn(e,s,n)}function In(e,t,n,s){const o=Ie(t);if(o===null||!oe(o.downloadTokens))return null;const r=o.downloadTokens;if(r.length===0)return null;const i=encodeURIComponent;return r.split(",").map(d=>{const g=e.bucket,w=e.fullPath,T="/b/"+i(g)+"/o/"+i(w),N=ie(T,n,s),m=Ce({alt:"media",token:d});return N+m})[0]}function xn(e,t){const n={},s=t.length;for(let o=0;o<s;o++){const r=t[o];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}class De{constructor(t,n,s,o){this.url=t,this.method=n,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Be(e){if(!e)throw se()}function On(e,t){function n(s,o){const r=Pe(e,o,t);return Be(r!==null),r}return n}function Pn(e,t){function n(s,o){const r=Pe(e,o,t);return Be(r!==null),In(r,o,e.host,e._protocol)}return n}function Le(e){function t(n,s){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=qt():o=Wt():n.getStatus()===402?o=jt(e.bucket):n.getStatus()===403?o=zt(e.path):o=s,o.status=n.getStatus(),o.serverResponse=s.serverResponse,o}return t}function Dn(e){const t=Le(e);function n(s,o){let r=t(s,o);return s.getStatus()===404&&(r=Ht(e.path)),r.serverResponse=o.serverResponse,r}return n}function Bn(e,t,n){const s=t.fullServerUrl(),o=ie(s,e.host,e._protocol),r="GET",i=e.maxOperationRetryTime,l=new De(o,r,Pn(e,n),i);return l.errorHandler=Dn(t),l}function Ln(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Sn(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=Ln(null,t)),s}function $n(e,t,n,s,o){const r=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function l(){let U="";for(let _=0;_<2;_++)U=U+Math.random().toString().slice(2);return U}const u=l();i["Content-Type"]="multipart/related; boundary="+u;const d=Sn(t,s,o),g=xn(d,n),w="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+g+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,T=`\r
--`+u+"--",N=L.getBlob(w,s,T);if(N===null)throw Zt();const m={name:d.fullPath},h=ie(r,e.host,e._protocol),f="POST",b=e.maxUploadRetryTime,c=new De(h,f,On(e,n),b);return c.urlParams=m,c.headers=i,c.body=N.uploadData(),c.errorHandler=Le(t),c}class Mn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=M.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=M.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=M.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,o){if(this.sent_)throw H("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw H("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw H("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw H("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw H("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Fn extends Mn{initXhr(){this.xhr_.responseType="text"}}function Se(){return new Fn}/**
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
 */class F{constructor(t,n){this._service=t,n instanceof x?this._location=n:this._location=x.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new F(t,n)}get root(){const t=new x(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xe(this._location.path)}get storage(){return this._service}get parent(){const t=Tn(this._location.path);if(t===null)return null;const n=new x(this._location.bucket,t);return new F(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw tn(t)}}function Vn(e,t,n){e._throwIfRoot("uploadBytes");const s=$n(e.storage,e._location,Oe(),new L(t,!0),n);return e.storage.makeRequestWithTokens(s,Se).then(o=>({metadata:o,ref:e}))}function Hn(e){e._throwIfRoot("getDownloadURL");const t=Bn(e.storage,e._location,Oe());return e.storage.makeRequestWithTokens(t,Se).then(n=>{if(n===null)throw Qt();return n})}function jn(e,t){const n=Un(e._location.path,t),s=new x(e._location.bucket,n);return new F(e.storage,s)}/**
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
 */function Wn(e){return/^[A-Za-z]+:\/\//.test(e)}function qn(e,t){return new F(e,t)}function $e(e,t){if(e instanceof ae){const n=e;if(n._bucket==null)throw Jt();const s=new F(n,n._bucket);return t!=null?$e(s,t):s}else return t!==void 0?jn(e,t):e}function zn(e,t){if(t&&Wn(t)){if(e instanceof ae)return qn(e,t);throw Q("To use ref(service, url), the first argument must be a Storage instance.")}else return $e(e,t)}function me(e,t){const n=t==null?void 0:t[Te];return n==null?null:x.makeFromBucketSpec(n,e)}function Kn(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=s;o&&(e._overrideAuthToken=typeof o=="string"?o:Ze(o,e.app.options.projectId))}class ae{constructor(t,n,s,o,r){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=r,this._bucket=null,this._host=ke,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ft,this._maxUploadRetryTime=Vt,this._requests=new Set,o!=null?this._bucket=x.makeFromBucketSpec(o,this._host):this._bucket=me(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=x.makeFromBucketSpec(this._url,t):this._bucket=me(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){_e("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){_e("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new F(this,t)}_makeRequest(t,n,s,o,r=!0){if(this._deleted)return new nn(Ue());{const i=pn(t,this._appId,s,o,n,this._firebaseVersion,r);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,o).getPromise()}}const ge="@firebase/storage",be="0.13.2";/**
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
 */const Me="storage";function Xn(e,t,n){return e=X(e),Vn(e,t,n)}function Gn(e){return e=X(e),Hn(e)}function Yn(e,t){return e=X(e),zn(e,t)}function Jn(e=Ge(),t){e=X(e);const s=Ke(e,Me).getImmediate({identifier:t}),o=Xe("storage");return o&&Zn(s,...o),s}function Zn(e,t,n,s={}){Kn(e,t,n,s)}function Qn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new ae(n,s,o,t,Qe)}function es(){Ye(new Je(Me,Qn,"PUBLIC").setMultipleInstances(!0)),ue(ge,be,""),ue(ge,be,"esm2017")}es();const ts=ee(),ns=Jn(),ss=K();async function ve(e,t){const n=Yn(ns,t);return await Xn(n,e),await Gn(n)}async function os(e,t,n,s){s.value=!0;const o=ss.currentUser,r=te(ts,"users",o.uid),i={};try{if(n.value){const l=await ve(n.value,`avatars/${o.uid}`);i.photoUrl=l,e.value.photoUrl=l}if(t.value){const l=await ve(t.value,`wallpapers/${o.uid}`);i.wallpaperUrl=l,e.value.wallpaperUrl=l}await ye(r,i),console.log("Профиль успешно обновлен")}catch(l){console.log("ошибка при загрузке профиля,",l)}finally{s.value=!1}}const rs={class:"user"},is={class:"skeleton-loader user__info"},as={class:"user__info"},ls={key:0,class:"profile"},us=["src"],cs={key:0,for:"input-wallaper",class:"profile__wallaper-edit"},ds={key:0,class:"profile__spinner"},hs=["src"],fs={key:1,for:"input-avatar",class:"profile__photo profile__photo--edit"},ps={class:"profile__settings"},_s={key:1,style:{height:"55px"}},ms={class:"profile__name"},gs={class:"profile__about"},bs={class:"profile__badges"},vs={class:"wishes"},ws={key:1,class:"wishes__list"},ys={class:"whishes__cards"},Rs={key:2,class:"wishes__empty"},ks={__name:"UserPage",setup(e){const t=v({}),n=v([]),s=v([]),o=nt(),r=v(!1),i=v(!1),l=v(null),u=v(null),d=v(!1),g=v(null),w=v(null),T=v(!0),N=v(!1),m=K(),h=v(!1);function f(){g.value.openModal()}function b(){w.value.openModal()}function c(C,p){const P=p.target.files[0];C==="avatar"?u.value=P:C==="wallpaper"&&(l.value=P),os(t,l,u,d)}function U(C){t.value.displayName=C.userName,t.value.about=C.userAbout,n.value=C.pickedBadges,console.log("Профиль обновлен в родительском компоненте:",C)}function _(C){s.value.push(C)}return tt(async()=>{T.value=!0;const C=o.params.uid,p=m.currentUser;p&&p.uid===C&&(h.value=!0);const{user:P,wishes:E}=await ot(C);P?(t.value=P,n.value=P.badges||[],s.value=E):console.error("Не удалось загрузить данные пользователя"),T.value=!1}),(C,p)=>{const P=ne("font-awesome-icon");return y(),A("div",null,[a("div",null,[$(st)]),a("main",rs,[S(a("div",is,null,512),[[ce,T.value]]),a("section",as,[t.value?S((y(),A("div",ls,[a("div",{class:"profile__wallapper",onMouseenter:p[2]||(p[2]=E=>r.value=!0),onMouseleave:p[3]||(p[3]=E=>r.value=!1)},[a("img",{src:t.value.wallpaperUrl,alt:"user-wallapper",loading:"lazy",class:"profile__wallapper-img",style:we({opacity:N.value?1:0}),onLoad:p[0]||(p[0]=E=>N.value=!0)},null,44,us),r.value?(y(),A("label",cs,[a("input",{id:"input-wallaper",class:"profile__input profile__input--wallpaper",type:"file",onChange:p[1]||(p[1]=E=>c("wallpaper",E))},null,32),p[7]||(p[7]=de(" изменить обложку "))])):B("",!0)],32),p[8]||(p[8]=de("А ")),a("div",{class:"profile__photo-wrapper",onMouseenter:p[5]||(p[5]=E=>i.value=!0),onMouseleave:p[6]||(p[6]=E=>i.value=!1)},[d.value?(y(),A("div",ds)):B("",!0),a("img",{class:"profile__photo",src:t.value.photoUrl,alt:"user-photo",loading:"lazy"},null,8,hs),i.value?(y(),A("label",fs,[a("input",{id:"input-avatar",class:"profile__input profile__input--avatar",type:"file",onChange:p[4]||(p[4]=E=>c("avatar",E))},null,32),$(P,{class:"profile__icon profile__icon-edit",icon:["fas","edit"]})])):B("",!0)],32),a("div",ps,[h.value?(y(),A("button",{key:0,class:"profile__button profile__button--edit",onClick:f}," Редактировать профиль ")):B("",!0),h.value?B("",!0):(y(),A("div",_s)),$(fe,{ref_key:"modal",ref:g},{default:he(()=>[$(dt,{user:t.value,"picked-badges":n.value,onUpdateProfile:U},null,8,["user","picked-badges"])]),_:1},512)]),a("h2",ms,O(t.value.displayName),1),a("p",gs,O(t.value.about||"Информация о пользователе отсутствует"),1),a("div",bs,[(y(!0),A(J,null,Z(n.value,(E,Fe)=>(y(),A("div",{key:Fe,class:"badge"},O(E.name),1))),128))])],512)),[[ce,!T.value]]):B("",!0)]),a("div",vs,[p[10]||(p[10]=a("h2",null,"Список желаний",-1)),h.value?(y(),A("button",{key:0,class:"profile__button profile__button--addWish",onClick:b}," Добавить ")):B("",!0),$(fe,{ref_key:"modalAddCard",ref:w},{default:he(()=>[$(Mt,{"user-img":t.value.photoUrl,"user-name":t.value.displayName,onAddWish:_},null,8,["user-img","user-name"])]),_:1},512),s.value.length?(y(),A("section",ws,[a("div",ys,[(y(!0),A(J,null,Z(s.value,E=>(y(),Re(Ut,{key:E.id,wish:E,"user-img":t.value.photoUrl,"user-name":t.value.displayName},null,8,["wish","user-img","user-name"]))),128))])])):(y(),A("div",Rs,p[9]||(p[9]=[a("img",{src:rt,alt:"empty-box",loading:"lazy"},null,-1),a("p",null,"У пользователя пока нет желаний.",-1)])))])])])}}},As=W(ks,[["__scopeId","data-v-703565f8"]]);export{As as default};
