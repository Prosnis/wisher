import{g as W,f as R,h as N,i as z,_ as k,r as $,o as r,c as m,a as e,z as j,l as O,k as b,d as I,F as D,A,u as L,t as w,x as q,p as E,B as K,w as U,v as x,q as P,b as G,s as H,C as F,D as V,j as B,n as d,m as M,E as J}from"./index-V7uydbbR.js";import{W as Q}from"./WiNavbar-Cgchtth3.js";import{g as X,r as Y,u as Z,a as ee}from"./index.esm2017-BiBvC5WX.js";import{u as T}from"./WiProfileStore-D3irHd0P.js";import"./GetUserData-X1U3o9ZM.js";const te=W(),se=X(),ae=R();async function S(c,l){const u=Y(se,l);return await Z(u,c),await ee(u)}async function oe(c,l,u,p){p.value=!0;const i=ae.currentUser,v=N(te,"users",i.uid),t={};try{if(u.value){const s=await S(u.value,`avatars/${i.uid}`);t.photoUrl=s,c.photoUrl=s}if(l.value){const s=await S(l.value,`wallpapers/${i.uid}`);t.wallpaperUrl=s,c.wallpaperUrl=s}return await z(v,t),console.log("Профиль успешно обновлен"),{avatarUrl:t.photoUrl,wallpaperUrl:t.wallpaperUrl}}catch(s){console.log("ошибка при загрузке профиля,",s)}finally{p.value=!1}}const re=["src"],ie={key:0,for:"input-wallaper",class:"profile__wallaper-edit"},ne={key:0,class:"profile__spinner"},le=["src"],ue={key:1,for:"input-avatar",class:"profile__photo profile__photo--edit"},de={__name:"WiUserPagePicturesEdit",props:{user:{type:Object,default:()=>({})},hasEditPermission:{type:Boolean}},setup(c){const l=c,u=$(!1),p=$(!1),i=$(null),v=$(null),t=$(!1),s=$(!1);function _(g,o){const h=o.target.files[0];g==="avatar"?v.value=h:g==="wallpaper"&&(i.value=h),oe(l.user,i,v,t)}return(g,o)=>{const h=A("font-awesome-icon");return r(),m(D,null,[e("div",{class:"profile__wallapper",onMouseenter:o[2]||(o[2]=f=>u.value=!0),onMouseleave:o[3]||(o[3]=f=>u.value=!1)},[e("img",{src:l.user.wallpaperUrl,alt:"user-wallpaper",loading:"lazy",class:"profile__wallapper-img",style:j({opacity:s.value?1:0}),onLoad:o[0]||(o[0]=f=>s.value=!0)},null,44,re),u.value&&c.hasEditPermission?(r(),m("label",ie,[e("input",{id:"input-wallaper",class:"profile__input profile__input--wallpaper",type:"file",onChange:o[1]||(o[1]=f=>_("wallpaper",f))},null,32),o[7]||(o[7]=O(" изменить обложку "))])):b("",!0)],32),e("div",{class:"profile__photo-wrapper",onMouseenter:o[5]||(o[5]=f=>p.value=!0),onMouseleave:o[6]||(o[6]=f=>p.value=!1)},[t.value?(r(),m("div",ne)):b("",!0),e("img",{class:"profile__photo",src:l.user.photoUrl,alt:"user-photo",loading:"lazy"},null,8,le),p.value&&l.hasEditPermission?(r(),m("label",ue,[e("input",{id:"input-avatar",class:"profile__input profile__input--avatar",type:"file",onChange:o[4]||(o[4]=f=>_("avatar",f))},null,32),I(h,{class:"profile__icon profile__icon-edit",icon:["fas","edit"]})])):b("",!0)],32)],64)}}},ce=k(de,[["__scopeId","data-v-4ee59857"]]),pe="/wisher/assets/empty-box-D7umrX5t.png",_e=["data-id"],me=["src"],fe={class:"card__title"},ge={class:"card__price"},ve={class:"card__user__info"},he={class:"user__info--info"},we=["src"],ye=["textContent"],be={class:"user__info--date"},$e={__name:"WiCardCreate",props:{wish:{type:Object},userImg:{type:String},userName:{type:String}},setup(c){const l=c,u=L();function p(s){u.push(`${E.card}/${s}`).catch(_=>{console.log("Card not allowed",_)})}function i(s){return s?new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:0}).format(s):""}function v(s){s.target.classList.add("card__hover")}function t(s){s.target.classList.remove("card__hover")}return(s,_)=>(r(),m("div",{class:q({card:!l.wish.reserve,card__reserve:l.wish.reserve}),"data-id":c.wish.id,onMouseenter:_[0]||(_[0]=g=>v(g)),onMouseleave:_[1]||(_[1]=g=>t(g)),onClick:_[2]||(_[2]=g=>p(c.wish.id))},[e("img",{src:c.wish.img,alt:"",class:"card__image"},null,8,me),e("h3",fe,w(c.wish.name),1),e("p",ge,w(i(c.wish.price))+" руб ",1),e("div",ve,[e("div",he,[e("img",{src:l.userImg,alt:"User Avatar",class:"card__img user__info--avatarImg"},null,8,we),e("span",{textContent:w(l.userName)},null,8,ye)]),e("span",be,w(new Date().toLocaleDateString()),1)])],42,_e))}},Ue=k($e,[["__scopeId","data-v-33e38546"]]),ke="https://media.istockphoto.com/id/1308342088/vector/surprise-gift-box-gift-box-with-red-ribbon-bow-flat-style-element-design-for-giveaway.jpg?s=612x612&w=0&k=20&c=FUOJS2CFbYIqm4R7zfyKUdeS-gMyc3bGlRr1rL7rjQ0=",Ce={class:"form__wrapper"},xe={class:"form__list"},De={class:"form__preview__card"},Pe={class:"card__label card__label--file",for:"file-input"},Ie=["src"],Se={class:"card__title"},We={class:"card__price"},Re={class:"card__user__info"},Ne={class:"user__info--info"},Ae=["src"],Le=["textContent"],Ee={class:"user__info--date"},Fe={__name:"WiCardsAdd",props:{userImg:{type:String},userName:{type:String}},emits:["handleAddWish",{}],setup(c,{emit:l}){const u=c,p=l,i=W(),v=R(),t=K({img:"",name:"",description:"",price:"",date:s(),link:""});function s(){return new Date().toLocaleDateString()}function _(n){return n?new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:0}).format(n):""}function g(){Object.assign(t,{img:"",name:"",description:"",price:"",date:new Date().toLocaleDateString(),link:""})}function o(n){return{id:crypto.randomUUID(),userId:v.currentUser.uid,img:n.img||ke,name:n.name,hover:!1,description:n.description||"Описание отсутствует. ",price:n.price||0,date:n.date,link:n.link,reserve:""}}async function h(){const n=o(t);try{await H(N(i,"wishes",n.id),n),p("handleAddWish",n),g()}catch(a){console.log(a,"Ошибка при создании карточки")}}function f(n){const a=n.target.files[0];if(a){const C=new FileReader;C.onload=y=>{t.img=y.target.result},C.readAsDataURL(a)}}return(n,a)=>{const C=A("font-awesome-icon");return r(),m("form",{class:"form",onSubmit:G(h,["prevent"])},[a[9]||(a[9]=e("h1",{class:"form__title"}," Добавить желание ",-1)),e("div",Ce,[e("ul",xe,[e("li",null,[a[5]||(a[5]=e("label",{for:"name"},"Название:",-1)),U(e("input",{id:"name","onUpdate:modelValue":a[0]||(a[0]=y=>t.name=y),type:"text",required:"",maxlength:"30"},null,512),[[x,t.name]])]),e("li",null,[a[6]||(a[6]=e("label",{for:"description"},"Описание",-1)),U(e("textarea",{id:"description","onUpdate:modelValue":a[1]||(a[1]=y=>t.description=y),type:"text",maxlength:"100"},null,512),[[x,t.description]])]),e("li",null,[a[7]||(a[7]=e("label",{for:"price"},"Цена",-1)),U(e("input",{id:"price","onUpdate:modelValue":a[2]||(a[2]=y=>t.price=y),type:"number",maxlength:"100",oninput:"this.value = this.value.slice(0, 10)"},null,512),[[x,t.price]])]),e("li",null,[a[8]||(a[8]=e("label",{for:"link"},"Ссылка на товар",-1)),U(e("input",{id:"link","onUpdate:modelValue":a[3]||(a[3]=y=>t.link=y),type:"text",maxlength:"200"},null,512),[[x,t.link]])])]),e("div",De,[e("label",Pe,[t.img?(r(),m("img",{key:0,src:t.img,alt:"",class:"card__image"},null,8,Ie)):b("",!0),t.img?b("",!0):(r(),P(C,{key:1,class:"card__icon--file",icon:["fas","file-image"]})),e("input",{id:"file-input",class:"card__input card__input--file",type:"file",onChange:a[4]||(a[4]=y=>f(y))},null,32)]),e("h3",Se,w(t.name),1),e("p",We,w(_(t.price)),1),e("div",Re,[e("div",Ne,[e("img",{src:u.userImg,alt:"User Avatar",class:"card__img user__info--avatarImg"},null,8,Ae),e("span",{textContent:w(u.userName)},null,8,Le)]),e("span",Ee,w(t.date),1)])])]),a[10]||(a[10]=e("button",{class:"form__btn form__btn--add"}," добавить ",-1))],32)}}},Ve=k(Fe,[["__scopeId","data-v-5f4fe84e"]]),Be={key:2,class:"wishes__list"},Me={class:"whishes__cards"},Te={key:3,class:"wishes__empty"},ze={__name:"WiUserWishes",setup(c){const l=F(),u=T(),{user:p,wishes:i,hasEditPermission:v}=V(u),{getProfileData:t}=u,s=$(!1),_=$("Добавить");function g(){s.value=!s.value,s.value===!1?_.value="Добавить":_.value="Отменить"}function o(h){i.value.push(h),g()}return B(()=>{t(l.params.uid)}),(h,f)=>(r(),m(D,null,[f[1]||(f[1]=e("h2",{class:"whishes__title"}," Список желаний ",-1)),d(v)?(r(),m("button",{key:0,class:"profile__button profile__button--addWish",onClick:g},w(_.value),1)):b("",!0),s.value?(r(),P(Ve,{key:1,"user-img":d(p).photoUrl,"user-name":d(p).displayName,onHandleAddWish:o},null,8,["user-img","user-name"])):b("",!0),d(i).length?(r(),m("section",Be,[e("div",Me,[(r(!0),m(D,null,M(d(i),n=>(r(),P(Ue,{key:n.id,wish:n,"user-img":d(p).photoUrl,"user-name":d(p).displayName},null,8,["wish","user-img","user-name"]))),128))])])):(r(),m("div",Te,f[0]||(f[0]=[e("img",{src:pe,alt:"empty-box",loading:"lazy"},null,-1),e("p",null,"У пользователя пока нет желаний.",-1)])))],64))}},je=k(ze,[["__scopeId","data-v-bb8fa9ac"]]),Oe={class:"user"},qe={class:"skeleton-loader user__info"},Ke={class:"user__info"},Ge={key:0,class:"profile"},He={class:"profile__settings"},Je={key:1,style:{height:"55px"}},Qe={class:"profile__name"},Xe={class:"profile__about"},Ye={class:"profile__badges"},Ze={class:"wishes"},et={__name:"UserPageView",setup(c){const l=L(),u=F(),p=T(),{user:i,badges:v,hasEditPermission:t,skeletonLoad:s,profileUID:_}=V(p),{getProfileData:g}=p;function o(){const h=u.params.uid;l.push({path:`${E.settings}/${h}`})}return B(()=>{g(u.params.uid)}),(h,f)=>(r(),m("div",null,[e("div",null,[I(Q)]),e("main",Oe,[U(e("div",qe,null,512),[[J,d(s)]]),e("section",Ke,[!d(s)&&d(i)&&d(i).displayName?(r(),m("div",Ge,[I(ce,{user:d(i),"has-edit-permission":d(t)},null,8,["user","has-edit-permission"]),e("div",He,[d(t)?(r(),m("button",{key:0,class:"profile__button profile__button--edit",onClick:o}," Редактировать профиль ")):b("",!0),d(t)?b("",!0):(r(),m("div",Je))]),e("h2",Qe,w(d(i).displayName),1),e("p",Xe,w(d(i).about||"Информация о пользователе отсутствует"),1),e("div",Ye,[(r(!0),m(D,null,M(d(v),(n,a)=>(r(),m("div",{key:a,class:"badge"},w(n.name),1))),128))])])):b("",!0)]),e("div",Ze,[d(i)?(r(),P(je,{key:0})):b("",!0)])])]))}},it=k(et,[["__scopeId","data-v-462c29ce"]]);export{it as default};
