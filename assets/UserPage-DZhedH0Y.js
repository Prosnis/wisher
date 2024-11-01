import{_ as L,r as w,o as k,c as C,a as r,j as E,k as Ve,l as X,m as H,t as x,n as te,F as K,e as re,g as G,q as he,w as B,v as M,x as ne,y as Re,z as He,f as Y,A as ke,B as ae,C as je,D as ze,E as Z,G as qe,H as Ke,I as Xe,J as Ge,K as Ye,L as _e,M as Ze,S as Je,N as Qe,h as F,O as Ue,P as et,Q as tt,R as pe,T as nt}from"./index-BvJB92vO.js";const st="/wisher/assets/empty-box-D7umrX5t.png",ot={class:"modal__dialog__inner"},rt={class:"modal__content"},at={__name:"ModalComponent",setup(e,{expose:t}){const s=w(null),n=()=>{s.value.showModal()},o=()=>{s.value.close()};return t({openModal:n,closeModal:o}),(a,i)=>{const l=X("font-awesome-icon");return k(),C("dialog",{ref_key:"dialogRef",ref:s,class:"modal__dialog"},[r("div",ot,[r("button",{class:"modal__button modal__button--close",onClick:o},[E(l,{class:"modal__icon--close modal__icon",icon:["fas","close"]})]),r("div",rt,[Ve(a.$slots,"default",{},void 0)])])],512)}}},se=L(at,[["__scopeId","data-v-aa35d7b0"]]),it={},lt={class:"nav"};function ut(e,t){return k(),C("nav",lt,t[0]||(t[0]=[r("ul",{class:"nav__links"},[r("span",{class:"nav__logo logo"},"ВИШЕР")],-1)]))}const ct=L(it,[["render",ut],["__scopeId","data-v-e0846c3d"]]),dt="/wisher/assets/ozon-DIAmpGYW.png",ht="/wisher/assets/ym-I_fhSRkn.png",_t="/wisher/assets/wb-_uZB1mgy.png",pt={class:"card__preview"},ft={class:"card__preview__description"},mt={class:"preview__user"},gt={class:"preview__user--avatar"},wt=["src"],bt={class:"user__name"},vt=["href"],yt={class:"card__preview--title"},Rt={class:"card__preview--img"},kt=["src"],Ut={class:"card__preview__details"},Tt={class:"test"},Ct={class:"icon-wrapper"},At=["href"],It={class:"card__preview__details-links"},Nt=["href"],Et=["href"],xt=["href"],Ot={class:"card__preview--actions"},Dt={__name:"WishCardPreview",props:{wish:{type:Object},userImg:{type:String},userName:{type:String}},setup(e){const t=e;return(s,n)=>{const o=X("font-awesome-icon");return k(),C("div",pt,[r("div",ft,[r("div",mt,[r("div",gt,[r("img",{class:"user__avatar",src:t.userImg,alt:""},null,8,wt)]),r("span",bt,[H(x(t.userName)+" ",1),n[0]||(n[0]=r("span",{style:{"font-size":"20px","font-style":"italic"}},"указал ссылку ",-1)),r("a",{href:e.wish.link,target:"_blank",class:"card__preview--link"},[E(o,{icon:["fas","up-right-from-square"]})],8,vt)])]),r("h1",yt,x(e.wish.name),1),r("div",Rt,[r("img",{class:"preview__img",src:e.wish.img,alt:""},null,8,kt)])]),r("div",Ut,[r("div",Tt,[r("div",Ct,[r("a",{href:"https://www.ozon.ru/search/?from_global=true&text="+encodeURIComponent(e.wish.name),target:"_blank",class:"preview__details-link details-link--ozon"},n[1]||(n[1]=[r("img",{class:"icon",src:dt,alt:""},null,-1)]),8,At)]),n[2]||(n[2]=r("div",{class:"icon-wrapper"},[r("img",{class:"icon",src:ht,alt:""})],-1)),n[3]||(n[3]=r("div",{class:"icon-wrapper"},[r("img",{class:"icon",src:_t,alt:""})],-1))]),r("div",It,[r("a",{href:"https://www.ozon.ru/search/?from_global=true&text="+encodeURIComponent(e.wish.name),target:"_blank",class:"preview__details-link details-link--ozon"},[n[4]||(n[4]=H("найти на OZON")),E(o,{icon:["fas","up-right-from-square"]})],8,Nt),r("a",{href:"https://www.wildberries.ru/catalog/0/search.aspx?search="+encodeURIComponent(e.wish.name),target:"_blank",class:"preview__details-link details-link--wildberries"},[n[5]||(n[5]=H(" найти на WILDBERRIES")),E(o,{icon:["fas","up-right-from-square"]})],8,Et),r("a",{href:"https://market.yandex.ru/search?text="+encodeURIComponent(e.wish.name),target:"_blank",class:"preview__details-link details-link--yandex"},[n[6]||(n[6]=H("найти на YANDEX MARKET")),E(o,{icon:["fas","up-right-from-square"]})],8,xt)]),r("div",Ot,[E(o,{class:"actions__icon actions__icon--add",icon:["fas","square-plus"]}),E(o,{class:"actions__icon actions__icon--like",icon:["fas","heart"]})])])])}}},Pt=L(Dt,[["__scopeId","data-v-3d9e6dcf"]]),Bt=["data-id"],St=["src"],$t={card__title:""},Lt={class:"card__price"},Mt={class:"card__user__info"},Ft={class:"user__info--info"},Wt=["src"],Vt=["textContent"],Ht={class:"user__info--date"},jt={__name:"WishCardCreate",props:{wish:{type:Object},userImg:{type:String},userName:{type:String}},setup(e){const t=w(null),s=()=>{t.value.openModal()},n=e,o=l=>l?new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:0}).format(l):"",a=l=>{l.target.classList.add("card__hover"),console.log(l.target.dataset.id)},i=l=>{l.target.classList.remove("card__hover")};return(l,d)=>(k(),C(K,null,[E(se,{ref_key:"modal",ref:t},{default:te(()=>[E(Pt,{wish:e.wish,userImg:n.userImg,userName:n.userName},null,8,["wish","userImg","userName"])]),_:1},512),r("div",{class:"card",onMouseenter:d[0]||(d[0]=h=>a(h)),onMouseleave:d[1]||(d[1]=h=>i(h)),"data-id":e.wish.id,onClick:s},[r("img",{src:e.wish.img,alt:"",class:"card__image"},null,8,St),r("h3",$t,x(e.wish.name),1),r("p",Lt,x(o(e.wish.price))+" руб",1),r("div",Mt,[r("div",Ft,[r("img",{src:n.userImg,alt:"User Avatar",class:"card__img user__info--avatarImg"},null,8,Wt),r("span",{textContent:x(n.userName)},null,8,Vt)]),r("span",Ht,x(new Date().toLocaleDateString()),1)])],40,Bt)],64))}},zt=L(jt,[["__scopeId","data-v-e9172a03"]]),qt=[{name:"Аниме",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Рыбалка",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Танцы",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Хоббихорсинг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Квадробинг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Футбол",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Рисование",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Вышивание",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Фитнес",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Лего",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Паркур",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Кулинария",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Фотография",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Йога",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Плавание",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Велоспорт",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Программирование",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Чтение",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Гейминг",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Музыка",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Бег",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"},{name:"Садоводство",BgColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)"}],Kt={class:"user-edit-list"},Xt={class:"badge-wrapper"},Gt=["onClick"],Yt={__name:"EditUserPage",props:{user:{type:Object,default:()=>({name:"Unknown",about:"Empty"})},pickedBadges:{type:Array,default:()=>[]}},emits:["close","updateProfile"],setup(e,{emit:t}){const s=w(""),n=w(""),o=re(),a=G(),i=t,l=e,d=w(l.user.displayName),h=w(l.user.about),m=w([...l.pickedBadges]);he(()=>l.user,g=>{d.value=g.displayName,h.value=g.about},{immediate:!0}),he(()=>l.pickedBadges,g=>{m.value=[...g]},{immediate:!0});function U(g){return m.value.some(p=>p.name===g.name)}function R(g){const p=m.value.findIndex(_=>_.name===g.name);p!==-1?m.value.splice(p,1):m.value.push(g),console.log(m.value)}async function A(){const g=o.currentUser;if(!g){console.error("Пользователь не авторизован");return}const p=Y(a,"users",g.uid),_=await ke(p),I=_.exists()?_.data():{},f={};f.displayName=n.value!==""?n.value:I.displayName||g.displayName,f.about=s.value!==""?s.value:I.about||"",f.badges=m.value.length>0?m.value:I.badges||[];try{await ae(p,f),console.log("Профиль успешно обновлен"),i("updateProfile",{userName:f.displayName,userAbout:f.about,pickedBadges:f.badges})}catch(u){console.error("Ошибка при обновлении профиля:",u)}}return(g,p)=>(k(),C("form",{method:"dialog",onSubmit:A,class:"form"},[p[5]||(p[5]=r("h1",null,"Редактировать профиль",-1)),r("ul",Kt,[r("li",null,[p[2]||(p[2]=r("label",{for:"name"},"Имя:",-1)),B(r("input",{type:"text",id:"name","onUpdate:modelValue":p[0]||(p[0]=_=>n.value=_)},null,512),[[M,n.value]])]),r("li",null,[p[3]||(p[3]=r("label",{for:"about"},"Краткая информация:",-1)),B(r("textarea",{name:"",id:"about","onUpdate:modelValue":p[1]||(p[1]=_=>s.value=_)},null,512),[[M,s.value]])]),r("li",null,[p[4]||(p[4]=r("label",{for:""},"Выберите интересы:",-1)),r("div",Xt,[(k(!0),C(K,null,ne(He(qt),(_,I)=>(k(),C("div",{key:I,class:"badge",style:Re({backgroundColor:U(_)?"green":_.BgColor,color:U(_)?"white":_.color}),onClick:f=>R(_)},x(_.name),13,Gt))),128))])])]),p[6]||(p[6]=r("button",{class:"btn-modal-save"},"сохранить изменения",-1))],32))}},Zt=L(Yt,[["__scopeId","data-v-91fb060c"]]),fe=G();async function Jt(e){const t=await ke(Y(fe,"users",e)),s=t.exists()?t.data():null;if(!s)return console.error("Пользователь не найден!"),{user:null,wishes:[]};const o=(await je(ze(fe,"users",e,"wishes"))).docs.map(a=>({id:a.id,...a.data()}));return{user:s,wishes:o}}/**
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
 */const Te="firebasestorage.googleapis.com",Ce="storageBucket",Qt=2*60*1e3,en=10*60*1e3;/**
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
 */class y extends Qe{constructor(t,s,n=0){super(Q(t),`Firebase Storage: ${s} (${Q(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,y.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Q(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var v;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(v||(v={}));function Q(e){return"storage/"+e}function ie(){const e="An unknown error occurred, please check the error payload for server response.";return new y(v.UNKNOWN,e)}function tn(e){return new y(v.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function nn(e){return new y(v.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function sn(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new y(v.UNAUTHENTICATED,e)}function on(){return new y(v.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function rn(e){return new y(v.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function an(){return new y(v.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ln(){return new y(v.CANCELED,"User canceled the upload/download.")}function un(e){return new y(v.INVALID_URL,"Invalid URL '"+e+"'.")}function cn(e){return new y(v.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function dn(){return new y(v.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ce+"' property when initializing the app?")}function hn(){return new y(v.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function _n(){return new y(v.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function pn(e){return new y(v.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function oe(e){return new y(v.INVALID_ARGUMENT,e)}function Ae(){return new y(v.APP_DELETED,"The Firebase app was deleted.")}function fn(e){return new y(v.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function j(e,t){return new y(v.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function V(e){throw new y(v.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class O{constructor(t,s){this.bucket=t,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,s){let n;try{n=O.makeFromUrl(t,s)}catch{return new O(t,"")}if(n.path==="")return n;throw cn(t)}static makeFromUrl(t,s){let n=null;const o="([A-Za-z0-9.\\-_]+)";function a(c){c.path.charAt(c.path.length-1)==="/"&&(c.path_=c.path_.slice(0,-1))}const i="(/(.*))?$",l=new RegExp("^gs://"+o+i,"i"),d={bucket:1,path:3};function h(c){c.path_=decodeURIComponent(c.path)}const m="v[A-Za-z0-9_]+",U=s.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",A=new RegExp(`^https?://${U}/${m}/b/${o}/o${R}`,"i"),g={bucket:1,path:3},p=s===Te?"(?:storage.googleapis.com|storage.cloud.google.com)":s,_="([^?#]*)",I=new RegExp(`^https?://${p}/${o}/${_}`,"i"),u=[{regex:l,indices:d,postModify:a},{regex:A,indices:g,postModify:h},{regex:I,indices:{bucket:1,path:2},postModify:h}];for(let c=0;c<u.length;c++){const b=u[c],T=b.regex.exec(t);if(T){const W=T[b.indices.bucket];let J=T[b.indices.path];J||(J=""),n=new O(W,J),b.postModify(n);break}}if(n==null)throw un(t);return n}}class mn{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function gn(e,t,s){let n=1,o=null,a=null,i=!1,l=0;function d(){return l===2}let h=!1;function m(..._){h||(h=!0,t.apply(null,_))}function U(_){o=setTimeout(()=>{o=null,e(A,d())},_)}function R(){a&&clearTimeout(a)}function A(_,...I){if(h){R();return}if(_){R(),m.call(null,_,...I);return}if(d()||i){R(),m.call(null,_,...I);return}n<64&&(n*=2);let u;l===1?(l=2,u=0):u=(n+Math.random())*1e3,U(u)}let g=!1;function p(_){g||(g=!0,R(),!h&&(o!==null?(_||(l=2),clearTimeout(o),U(0)):_||(l=1)))}return U(0),a=setTimeout(()=>{i=!0,p(!0)},s),p}function wn(e){e(!1)}/**
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
 */function bn(e){return e!==void 0}function vn(e){return typeof e=="object"&&!Array.isArray(e)}function le(e){return typeof e=="string"||e instanceof String}function me(e){return ue()&&e instanceof Blob}function ue(){return typeof Blob<"u"}function ge(e,t,s,n){if(n<t)throw oe(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>s)throw oe(`Invalid value for '${e}'. Expected ${s} or less.`)}/**
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
 */function ce(e,t,s){let n=t;return s==null&&(n=`https://${t}`),`${s}://${n}/v0${e}`}function Ie(e){const t=encodeURIComponent;let s="?";for(const n in e)if(e.hasOwnProperty(n)){const o=t(n)+"="+t(e[n]);s=s+o+"&"}return s=s.slice(0,-1),s}var S;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(S||(S={}));/**
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
 */function yn(e,t){const s=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,a=t.indexOf(e)!==-1;return s||o||a}/**
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
 */class Rn{constructor(t,s,n,o,a,i,l,d,h,m,U,R=!0){this.url_=t,this.method_=s,this.headers_=n,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=i,this.callback_=l,this.errorCallback_=d,this.timeout_=h,this.progressCallback_=m,this.connectionFactory_=U,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,g)=>{this.resolve_=A,this.reject_=g,this.start_()})}start_(){const t=(n,o)=>{if(o){n(!1,new z(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const i=l=>{const d=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,h)};this.progressCallback_!==null&&a.addUploadProgressListener(i),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(i),this.pendingConnection_=null;const l=a.getErrorCode()===S.NO_ERROR,d=a.getStatus();if(!l||yn(d,this.additionalRetryCodes_)&&this.retry){const m=a.getErrorCode()===S.ABORT;n(!1,new z(!1,null,m));return}const h=this.successCodes_.indexOf(d)!==-1;n(!0,new z(h,a))})},s=(n,o)=>{const a=this.resolve_,i=this.reject_,l=o.connection;if(o.wasSuccessCode)try{const d=this.callback_(l,l.getResponse());bn(d)?a(d):a()}catch(d){i(d)}else if(l!==null){const d=ie();d.serverResponse=l.getErrorText(),this.errorCallback_?i(this.errorCallback_(l,d)):i(d)}else if(o.canceled){const d=this.appDelete_?Ae():ln();i(d)}else{const d=an();i(d)}};this.canceled_?s(!1,new z(!1,null,!0)):this.backoffId_=gn(t,s,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&wn(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class z{constructor(t,s,n){this.wasSuccessCode=t,this.connection=s,this.canceled=!!n}}function kn(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Un(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Tn(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Cn(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function An(e,t,s,n,o,a,i=!0){const l=Ie(e.urlParams),d=e.url+l,h=Object.assign({},e.headers);return Tn(h,t),kn(h,s),Un(h,a),Cn(h,n),new Rn(d,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,i)}/**
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
 */function In(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Nn(...e){const t=In();if(t!==void 0){const s=new t;for(let n=0;n<e.length;n++)s.append(e[n]);return s.getBlob()}else{if(ue())return new Blob(e);throw new y(v.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function En(e,t,s){return e.webkitSlice?e.webkitSlice(t,s):e.mozSlice?e.mozSlice(t,s):e.slice?e.slice(t,s):null}/**
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
 */function xn(e){if(typeof atob>"u")throw pn("base-64");return atob(e)}/**
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
 */const D={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ee{constructor(t,s){this.data=t,this.contentType=s||null}}function On(e,t){switch(e){case D.RAW:return new ee(Ne(t));case D.BASE64:case D.BASE64URL:return new ee(Ee(e,t));case D.DATA_URL:return new ee(Pn(t),Bn(t))}throw ie()}function Ne(e){const t=[];for(let s=0;s<e.length;s++){let n=e.charCodeAt(s);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(s<e.length-1&&(e.charCodeAt(s+1)&64512)===56320))t.push(239,191,189);else{const a=n,i=e.charCodeAt(++s);n=65536|(a&1023)<<10|i&1023,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(t)}function Dn(e){let t;try{t=decodeURIComponent(e)}catch{throw j(D.DATA_URL,"Malformed data URL.")}return Ne(t)}function Ee(e,t){switch(e){case D.BASE64:{const o=t.indexOf("-")!==-1,a=t.indexOf("_")!==-1;if(o||a)throw j(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case D.BASE64URL:{const o=t.indexOf("+")!==-1,a=t.indexOf("/")!==-1;if(o||a)throw j(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=xn(t)}catch(o){throw o.message.includes("polyfill")?o:j(e,"Invalid character found")}const n=new Uint8Array(s.length);for(let o=0;o<s.length;o++)n[o]=s.charCodeAt(o);return n}class xe{constructor(t){this.base64=!1,this.contentType=null;const s=t.match(/^data:([^,]+)?,/);if(s===null)throw j(D.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=s[1]||null;n!=null&&(this.base64=Sn(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function Pn(e){const t=new xe(e);return t.base64?Ee(D.BASE64,t.rest):Dn(t.rest)}function Bn(e){return new xe(e).contentType}function Sn(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class P{constructor(t,s){let n=0,o="";me(t)?(this.data_=t,n=t.size,o=t.type):t instanceof ArrayBuffer?(s?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(s?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,s){if(me(this.data_)){const n=this.data_,o=En(n,t,s);return o===null?null:new P(o)}else{const n=new Uint8Array(this.data_.buffer,t,s-t);return new P(n,!0)}}static getBlob(...t){if(ue()){const s=t.map(n=>n instanceof P?n.data_:n);return new P(Nn.apply(null,s))}else{const s=t.map(i=>le(i)?On(D.RAW,i).data:i.data_);let n=0;s.forEach(i=>{n+=i.byteLength});const o=new Uint8Array(n);let a=0;return s.forEach(i=>{for(let l=0;l<i.length;l++)o[a++]=i[l]}),new P(o,!0)}}uploadData(){return this.data_}}/**
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
 */function Oe(e){let t;try{t=JSON.parse(e)}catch{return null}return vn(t)?t:null}/**
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
 */function $n(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Ln(e,t){const s=t.split("/").filter(n=>n.length>0).join("/");return e.length===0?s:e+"/"+s}function De(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Mn(e,t){return t}class N{constructor(t,s,n,o){this.server=t,this.local=s||t,this.writable=!!n,this.xform=o||Mn}}let q=null;function Fn(e){return!le(e)||e.length<2?e:De(e)}function Pe(){if(q)return q;const e=[];e.push(new N("bucket")),e.push(new N("generation")),e.push(new N("metageneration")),e.push(new N("name","fullPath",!0));function t(a,i){return Fn(i)}const s=new N("name");s.xform=t,e.push(s);function n(a,i){return i!==void 0?Number(i):i}const o=new N("size");return o.xform=n,e.push(o),e.push(new N("timeCreated")),e.push(new N("updated")),e.push(new N("md5Hash",null,!0)),e.push(new N("cacheControl",null,!0)),e.push(new N("contentDisposition",null,!0)),e.push(new N("contentEncoding",null,!0)),e.push(new N("contentLanguage",null,!0)),e.push(new N("contentType",null,!0)),e.push(new N("metadata","customMetadata",!0)),q=e,q}function Wn(e,t){function s(){const n=e.bucket,o=e.fullPath,a=new O(n,o);return t._makeStorageReference(a)}Object.defineProperty(e,"ref",{get:s})}function Vn(e,t,s){const n={};n.type="file";const o=s.length;for(let a=0;a<o;a++){const i=s[a];n[i.local]=i.xform(n,t[i.server])}return Wn(n,e),n}function Be(e,t,s){const n=Oe(t);return n===null?null:Vn(e,n,s)}function Hn(e,t,s,n){const o=Oe(t);if(o===null||!le(o.downloadTokens))return null;const a=o.downloadTokens;if(a.length===0)return null;const i=encodeURIComponent;return a.split(",").map(h=>{const m=e.bucket,U=e.fullPath,R="/b/"+i(m)+"/o/"+i(U),A=ce(R,s,n),g=Ie({alt:"media",token:h});return A+g})[0]}function jn(e,t){const s={},n=t.length;for(let o=0;o<n;o++){const a=t[o];a.writable&&(s[a.server]=e[a.local])}return JSON.stringify(s)}class Se{constructor(t,s,n,o){this.url=t,this.method=s,this.handler=n,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function $e(e){if(!e)throw ie()}function zn(e,t){function s(n,o){const a=Be(e,o,t);return $e(a!==null),a}return s}function qn(e,t){function s(n,o){const a=Be(e,o,t);return $e(a!==null),Hn(a,o,e.host,e._protocol)}return s}function Le(e){function t(s,n){let o;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?o=on():o=sn():s.getStatus()===402?o=nn(e.bucket):s.getStatus()===403?o=rn(e.path):o=n,o.status=s.getStatus(),o.serverResponse=n.serverResponse,o}return t}function Kn(e){const t=Le(e);function s(n,o){let a=t(n,o);return n.getStatus()===404&&(a=tn(e.path)),a.serverResponse=o.serverResponse,a}return s}function Xn(e,t,s){const n=t.fullServerUrl(),o=ce(n,e.host,e._protocol),a="GET",i=e.maxOperationRetryTime,l=new Se(o,a,qn(e,s),i);return l.errorHandler=Kn(t),l}function Gn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Yn(e,t,s){const n=Object.assign({},s);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=Gn(null,t)),n}function Zn(e,t,s,n,o){const a=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function l(){let u="";for(let c=0;c<2;c++)u=u+Math.random().toString().slice(2);return u}const d=l();i["Content-Type"]="multipart/related; boundary="+d;const h=Yn(t,n,o),m=jn(h,s),U="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+d+`\r
Content-Type: `+h.contentType+`\r
\r
`,R=`\r
--`+d+"--",A=P.getBlob(U,n,R);if(A===null)throw hn();const g={name:h.fullPath},p=ce(a,e.host,e._protocol),_="POST",I=e.maxUploadRetryTime,f=new Se(p,_,zn(e,s),I);return f.urlParams=g,f.headers=i,f.body=A.uploadData(),f.errorHandler=Le(t),f}class Jn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=S.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=S.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=S.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,s,n,o){if(this.sent_)throw V("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(s,t,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw V("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw V("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw V("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw V("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Qn extends Jn{initXhr(){this.xhr_.responseType="text"}}function Me(){return new Qn}/**
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
 */class ${constructor(t,s){this._service=t,s instanceof O?this._location=s:this._location=O.makeFromUrl(s,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,s){return new $(t,s)}get root(){const t=new O(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return De(this._location.path)}get storage(){return this._service}get parent(){const t=$n(this._location.path);if(t===null)return null;const s=new O(this._location.bucket,t);return new $(this._service,s)}_throwIfRoot(t){if(this._location.path==="")throw fn(t)}}function es(e,t,s){e._throwIfRoot("uploadBytes");const n=Zn(e.storage,e._location,Pe(),new P(t,!0),s);return e.storage.makeRequestWithTokens(n,Me).then(o=>({metadata:o,ref:e}))}function ts(e){e._throwIfRoot("getDownloadURL");const t=Xn(e.storage,e._location,Pe());return e.storage.makeRequestWithTokens(t,Me).then(s=>{if(s===null)throw _n();return s})}function ns(e,t){const s=Ln(e._location.path,t),n=new O(e._location.bucket,s);return new $(e.storage,n)}/**
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
 */function ss(e){return/^[A-Za-z]+:\/\//.test(e)}function os(e,t){return new $(e,t)}function Fe(e,t){if(e instanceof de){const s=e;if(s._bucket==null)throw dn();const n=new $(s,s._bucket);return t!=null?Fe(n,t):n}else return t!==void 0?ns(e,t):e}function rs(e,t){if(t&&ss(t)){if(e instanceof de)return os(e,t);throw oe("To use ref(service, url), the first argument must be a Storage instance.")}else return Fe(e,t)}function we(e,t){const s=t==null?void 0:t[Ce];return s==null?null:O.makeFromBucketSpec(s,e)}function as(e,t,s,n={}){e.host=`${t}:${s}`,e._protocol="http";const{mockUserToken:o}=n;o&&(e._overrideAuthToken=typeof o=="string"?o:Ze(o,e.app.options.projectId))}class de{constructor(t,s,n,o,a){this.app=t,this._authProvider=s,this._appCheckProvider=n,this._url=o,this._firebaseVersion=a,this._bucket=null,this._host=Te,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qt,this._maxUploadRetryTime=en,this._requests=new Set,o!=null?this._bucket=O.makeFromBucketSpec(o,this._host):this._bucket=we(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=O.makeFromBucketSpec(this._url,t):this._bucket=we(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ge("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ge("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const s=await t.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new $(this,t)}_makeRequest(t,s,n,o,a=!0){if(this._deleted)return new mn(Ae());{const i=An(t,this._appId,n,o,s,this._firebaseVersion,a);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,s){const[n,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,s,n,o).getPromise()}}const be="@firebase/storage",ve="0.13.2";/**
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
 */const We="storage";function is(e,t,s){return e=Z(e),es(e,t,s)}function ls(e){return e=Z(e),ts(e)}function us(e,t){return e=Z(e),rs(e,t)}function cs(e=Xe(),t){e=Z(e);const n=qe(e,We).getImmediate({identifier:t}),o=Ke("storage");return o&&ds(n,...o),n}function ds(e,t,s,n={}){as(e,t,s,n)}function hs(e,{instanceIdentifier:t}){const s=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new de(s,n,o,t,Je)}function _s(){Ge(new Ye(We,hs,"PUBLIC").setMultipleInstances(!0)),_e(be,ve,""),_e(be,ve,"esm2017")}_s();const ps=G(),fs=cs(),ms=re();async function ye(e,t){const s=us(fs,t);return await is(s,e),await ls(s)}async function gs(e,t,s,n){n.value=!0;const o=ms.currentUser,a=Y(ps,"users",o.uid),i={};try{if(s.value){const l=await ye(s.value,`avatars/${o.uid}`);i.photoUrl=l,e.value.photoUrl=l}if(t.value){const l=await ye(t.value,`wallpapers/${o.uid}`);i.wallpaperUrl=l,e.value.wallpaperUrl=l}await ae(a,i),console.log("Профиль успешно обновлен")}catch(l){console.log("ошибка при загрузке профиля,",l)}finally{n.value=!1}}const ws={class:"form__wrapper"},bs={class:"form__list"},vs={class:"form__preview__card"},ys={class:"card__label card__label--file",for:"file-input"},Rs=["src"],ks={card__title:""},Us={class:"card__price"},Ts={class:"card__user__info"},Cs={class:"user__info--info"},As=["src"],Is=["textContent"],Ns={class:"user__info--date"},Es={__name:"WishCardsAdd",props:{userImg:{type:String},userName:{type:String},usersWhises:{type:Array}},setup(e,{emit:t}){const s=t,n=G(),o=re(),a=w(""),i=w(""),l=w(""),d=w(""),h=w(new Date().toLocaleDateString()),m=w(""),U=e,R=f=>f?new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:0}).format(f):"",A=()=>{i.value="",l.value="",d.value="",m.value="",a.value=""},g=(f,u,c,b,T,W)=>({id:crypto.randomUUID(),img:f||"https://media.istockphoto.com/id/1308342088/vector/surprise-gift-box-gift-box-with-red-ribbon-bow-flat-style-element-design-for-giveaway.jpg?s=612x612&w=0&k=20&c=FUOJS2CFbYIqm4R7zfyKUdeS-gMyc3bGlRr1rL7rjQ0=",name:u,hover:!1,description:c||"Описание отсутствует. ",price:b||0,date:T,link:W});async function p(f,u){try{const c=Y(n,"users",f);await ae(c,{wishes:et(u)}),s("addWish",u),console.log("Card successfully added to wishes!")}catch(c){console.error("Error adding card to wishes:",c)}}const _=()=>{const f=o.currentUser,u=g(a.value,i.value,l.value,d.value,h.value,m.value);p(f.uid,u),A()},I=f=>{const u=f.target.files[0];if(u){const c=new FileReader;c.onload=b=>{a.value=b.target.result},c.readAsDataURL(u)}};return(f,u)=>{const c=X("font-awesome-icon");return k(),C("form",{method:"dialog",class:"form",onSubmit:_},[u[9]||(u[9]=r("h1",{class:"form__title"},"Добавить желание",-1)),r("div",ws,[r("ul",bs,[r("li",null,[u[5]||(u[5]=r("label",{for:"name"},"Название:",-1)),B(r("input",{type:"text",id:"name","onUpdate:modelValue":u[0]||(u[0]=b=>i.value=b),required:""},null,512),[[M,i.value]])]),r("li",null,[u[6]||(u[6]=r("label",{for:"description"},"Описание",-1)),B(r("textarea",{type:"text",id:"description","onUpdate:modelValue":u[1]||(u[1]=b=>l.value=b)}," ",512),[[M,l.value]])]),r("li",null,[u[7]||(u[7]=r("label",{for:"price"},"Цена",-1)),B(r("input",{type:"number",id:"price","onUpdate:modelValue":u[2]||(u[2]=b=>d.value=b)},null,512),[[M,d.value]])]),r("li",null,[u[8]||(u[8]=r("label",{for:"link"},"Ссылка на товар",-1)),B(r("input",{type:"text",id:"link","onUpdate:modelValue":u[3]||(u[3]=b=>m.value=b)},null,512),[[M,m.value]])])]),r("div",vs,[r("label",ys,[a.value?(k(),C("img",{key:0,src:a.value,alt:"",class:"card__image"},null,8,Rs)):F("",!0),a.value?F("",!0):(k(),Ue(c,{key:1,class:"card__icon--file",icon:["fas","file-image"]})),r("input",{class:"card__input card__input--file",type:"file",id:"file-input",onChange:u[4]||(u[4]=b=>I(b))},null,32)]),r("h3",ks,x(i.value),1),r("p",Us,x(R(d.value)),1),r("div",Ts,[r("div",Cs,[r("img",{src:U.userImg,alt:"User Avatar",class:"card__img user__info--avatarImg"},null,8,As),r("span",{textContent:x(U.userName)},null,8,Is)]),r("span",Ns,x(h.value),1)])])]),u[10]||(u[10]=r("button",{class:"form__btn form__btn--add"},"добавить",-1))],32)}}},xs=L(Es,[["__scopeId","data-v-32cff9ac"]]),Os={class:"user"},Ds={class:"skeleton-loader user__info"},Ps={class:"user__info"},Bs={key:0,class:"profile"},Ss=["src"],$s={key:0,for:"input-wallaper",class:"profile__wallaper-edit"},Ls={key:0,class:"profile__spinner"},Ms=["src"],Fs={key:1,for:"input-avatar",class:"profile__photo profile__photo--edit"},Ws={class:"profile__settings"},Vs={class:"profile__name"},Hs={class:"profile__about"},js={class:"profile__badges"},zs={class:"wishes"},qs={key:0,class:"wishes__list"},Ks={class:"whishes__cards"},Xs={key:1,class:"wishes__empty"},Gs={__name:"UserPage",setup(e){const t=w({}),s=w([]),n=w([]),o=nt(),a=w(!1),i=w(!1),l=w(null),d=w(null),h=w(!1),m=w(null),U=w(null),R=w(!0),A=w(!1),g=()=>{m.value.openModal()},p=()=>{U.value.openModal()};function _(u,c){const b=c.target.files[0];u==="avatar"?d.value=b:u==="wallpaper"&&(l.value=b),gs(t,l,d,h)}function I(u){t.value.displayName=u.userName,t.value.about=u.userAbout,s.value=u.pickedBadges,console.log("Профиль обновлен в родительском компоненте:",u)}const f=u=>{n.value.push(u)};return tt(async()=>{R.value=!0;const u=o.params.uid,{user:c,wishes:b}=await Jt(u);c?(t.value=c,s.value=c.badges||[],n.value=c.wishes):console.error("Не удалось загрузить данные пользователя"),R.value=!1}),(u,c)=>{const b=X("font-awesome-icon");return k(),C("div",null,[r("div",null,[E(ct)]),r("main",Os,[B(r("div",Ds,null,512),[[pe,R.value]]),r("section",Ps,[t.value?B((k(),C("div",Bs,[r("div",{class:"profile__wallapper",onMouseenter:c[2]||(c[2]=T=>a.value=!0),onMouseleave:c[3]||(c[3]=T=>a.value=!1)},[r("img",{src:t.value.wallpaperUrl,alt:"user-wallapper",loading:"lazy",class:"profile__wallapper-img",style:Re({opacity:A.value?1:0}),onLoad:c[0]||(c[0]=T=>A.value=!0)},null,44,Ss),a.value?(k(),C("label",$s,[r("input",{class:"profile__input profile__input--wallpaper",id:"input-wallaper",type:"file",onChange:c[1]||(c[1]=T=>_("wallpaper",T))},null,32),c[7]||(c[7]=H(" изменить обложку "))])):F("",!0)],32),r("div",{class:"profile__photo-wrapper",onMouseenter:c[5]||(c[5]=T=>i.value=!0),onMouseleave:c[6]||(c[6]=T=>i.value=!1)},[h.value?(k(),C("div",Ls)):F("",!0),r("img",{class:"profile__photo",src:t.value.photoUrl,alt:"user-photo",loading:"lazy"},null,8,Ms),i.value?(k(),C("label",Fs,[r("input",{class:"profile__input profile__input--avatar",type:"file",id:"input-avatar",onChange:c[4]||(c[4]=T=>_("avatar",T))},null,32),E(b,{class:"profile__icon profile__icon-edit",icon:["fas","edit"]})])):F("",!0)],32),r("div",Ws,[r("button",{class:"profile__button profile__button--edit",onClick:g},"Редактировать профиль"),E(se,{ref_key:"modal",ref:m},{default:te(()=>[E(Zt,{user:t.value,"picked-badges":s.value,onUpdateProfile:I},null,8,["user","picked-badges"])]),_:1},512)]),r("h2",Vs,x(t.value.displayName),1),r("p",Hs,x(t.value.about||"Информация о пользователе отсутствует"),1),r("div",js,[(k(!0),C(K,null,ne(s.value,(T,W)=>(k(),C("div",{key:W,class:"badge"},x(T.name),1))),128))])],512)),[[pe,!R.value]]):F("",!0)]),r("div",zs,[c[9]||(c[9]=r("h2",null,"Список желаний",-1)),r("button",{class:"profile__button profile__button--addWish",onClick:p},"Добавить"),E(se,{ref_key:"modalAddCard",ref:U},{default:te(()=>[E(xs,{userImg:t.value.photoUrl,userName:t.value.displayName,onAddWish:f},null,8,["userImg","userName"])]),_:1},512),n.value.length?(k(),C("section",qs,[r("div",Ks,[(k(!0),C(K,null,ne(n.value,T=>(k(),Ue(zt,{key:T.id,wish:T,userImg:t.value.photoUrl,userName:t.value.displayName},null,8,["wish","userImg","userName"]))),128))])])):(k(),C("div",Xs,c[8]||(c[8]=[r("img",{src:st,alt:"empty-box",loading:"lazy"},null,-1),r("p",null,"У пользователя пока нет желаний.",-1)])))])])])}}},Zs=L(Gs,[["__scopeId","data-v-ff944935"]]);export{Zs as default};
