import{_ as V,f as C,g as U,r as f,y as B,l as h,c as r,d as F,a as t,z as b,n as p,b as M,w as g,v,F as y,m as R,G as z,o as l,E,t as I,u as W,h as A,N as G,x as L}from"./index-B2m54ijR.js";import{W as T}from"./WiNavbar-qMcUzFTC.js";import{b as $}from"./UserBadgesStore-jHlPkzW9.js";import{u as j}from"./WiProfileStore--A81iFL3.js";import"./GetUserData-jCM42mLR.js";const q={class:"form__wrapper"},H={key:0,class:"profile__spinner"},J={class:"form__list"},K={class:"form__list__item"},O={class:"form__list__item"},Q={class:"form__list__item"},X={class:"form__badge__wrapper"},Y=["onClick"],Z={__name:"UserPageSettingsView",setup(ss){const k=C(),x=z(),m=W(),i=j(),w=U(),u=f(!1),n=f(null),{getProfileData:D}=i,a=B({name:"",about:"",badges:[]}),c=o=>a.badges.some(s=>s.name===o.name),N=o=>{const s=a.badges.findIndex(e=>e.name===o.name);s!==-1?a.badges.splice(s,1):a.badges.push(o)},S=()=>{m.back()},P=async()=>{u.value=!0,n.value=k.currentUser;const o=A(w,"users",n.value.uid),s=await G(o),e=s.exists()?s.data():{},_={displayName:a.name!==""?a.name:n.value.displayName||e.displayName,about:a.about!==""?a.about:n.value.about||e.about,badges:a.badges};try{await L(o,_),console.log("Профиль успешно обновлен")}catch(d){console.error("Ошибка при обновлении профиля:",d)}finally{u.value=!1}m.back()};return h(async()=>{await D(x.params.uid),a.badges=[...i.badges]}),(o,s)=>(l(),r(y,null,[F(T),t("div",q,[u.value?(l(),r("div",H)):b("",!0),p(i).badges?(l(),r("form",{key:1,class:"form",onSubmit:M(P,["prevent"])},[s[6]||(s[6]=t("h1",null,"Редактировать профиль",-1)),t("ul",J,[t("li",K,[s[2]||(s[2]=t("label",{class:"form__list__label",for:"name"},"Имя:",-1)),g(t("input",{id:"name","onUpdate:modelValue":s[0]||(s[0]=e=>a.name=e),class:"form__list__input",type:"text"},null,512),[[v,a.name]])]),t("li",O,[s[3]||(s[3]=t("label",{class:"form__list__label",for:"about"},"Краткая информация:",-1)),g(t("textarea",{id:"about","onUpdate:modelValue":s[1]||(s[1]=e=>a.about=e),class:"form__list__textarea",name:""},null,512),[[v,a.about]])]),t("li",Q,[s[4]||(s[4]=t("label",{class:"form__list__label",for:""},"Выберите интересы:",-1)),t("div",X,[(l(!0),r(y,null,R(p($),(e,_)=>(l(),r("div",{key:_,class:"form__badge",style:E({backgroundColor:c(e)?"#ffd859":e.BgColor,color:c(e)?"black":e.color}),onClick:d=>N(e)},I(e.name),13,Y))),128))])])]),t("div",{class:"form__buttons"},[t("button",{class:"form__button form__button--decline",type:"button",onClick:S}," отмена "),s[5]||(s[5]=t("button",{class:"form__button form__button--save"}," сохранить изменения ",-1))])],32)):b("",!0)])],64))}},ls=V(Z,[["__scopeId","data-v-8f702e6a"]]);export{ls as default};