import{g as $,i as x,j as F,_ as y,r as h,u as C,k as U,l as L,o as c,c as d,F as b,m as w,a as s,t as N,p as g,d as v,n as _,q as V}from"./index-CIa3Xx9T.js";import{W}from"./WiNavbar-nKao627v.js";const B=$();async function S(){try{const u=x(B,"users");return(await F(u)).docs.map(i=>({id:i.id,...i.data()}))}catch(u){return console.error("Ошибка при получении пользователей:",u),[]}}const A={key:0},D=["onClick"],E={class:"mini__profile__wallpaper"},I=["src"],j={class:"mini__profile__avatar"},q=["src"],R={class:"mini__profile__info"},z={class:"mini__profile--title"},G={class:"pagination__controls"},H=["disabled"],J=["disabled"],m=3,K={__name:"WiMiniProfileCard",setup(u){const o=h([]),t=h(0),i=C(),n=h(!1),e=[1,2,3],p=U(()=>{const a=t.value*m,r=a+m;return o.value.slice(a,r)});function f(){(t.value+1)*m<o.value.length&&t.value++}function M(){t.value>0&&t.value--}async function P(a){try{await i.push(`${g.user}/${a}`)}catch(r){console.log(r)}}return L(async()=>{try{n.value=!0,o.value=await S()}catch(a){console.log(a,"err")}finally{n.value=!1}}),(a,r)=>(c(),d("div",null,[n.value?(c(),d("div",A,[(c(),d(b,null,w(e,(l,k)=>s("div",{key:k,class:"mini__profile hover"})),64))])):(c(!0),d(b,{key:1},w(p.value,l=>(c(),d("div",{key:l.uid,class:"mini__profile",onClick:k=>P(l.uid)},[s("div",E,[s("img",{class:"profile__img profile__img--wallpaper",src:l.wallpaperUrl,alt:""},null,8,I)]),s("div",j,[s("img",{class:"profile__img profile__img--avatar",src:l.photoUrl,alt:""},null,8,q)]),s("div",R,[s("h3",z,N(l.displayName),1),r[0]||(r[0]=s("span",{class:"mini__profile--description"},"открыть профиль",-1))])],8,D))),128)),s("div",G,[s("button",{class:"pagination__button",disabled:t.value===0,onClick:M}," Предыдущие ",8,H),s("button",{class:"pagination__button",disabled:(t.value+1)*m>=o.value.length,onClick:f}," Следующие ",8,J)])]))}},O=y(K,[["__scopeId","data-v-28990739"]]),Q={class:"feed__container"},T={class:"feed__wrapper"},X={class:"feed__item feed__item--users"},Y={__name:"FeedPageView",setup(u){const o=C();function t(n){n.target.classList.add("hover")}function i(n){n.target.classList.remove("hover")}return(n,e)=>{const p=V("font-awesome-icon");return c(),d(b,null,[v(W),s("div",Q,[s("div",T,[s("div",{class:"feed__item feed__item--login",onMouseenter:t,onMouseleave:i,onClick:e[0]||(e[0]=()=>_(o).push(_(g).register))},[e[5]||(e[5]=s("h2",{class:"item__title"}," Присоедениться ",-1)),e[6]||(e[6]=s("span",{class:"item__subtitle"},"Зарегистрируйтесь, чтобы создать свой список желаний.",-1)),v(p,{class:"feed__icon feed__icon-arrow",icon:["fas","angles-right"]})],32),s("div",{class:"feed__item feed__item--search",onMouseenter:t,onMouseleave:i,onClick:e[1]||(e[1]=()=>_(o).push(_(g).cards))},[e[7]||(e[7]=s("h2",{class:"item__title"}," Идеи подарков ",-1)),e[8]||(e[8]=s("span",{class:"item__subtitle"},"Откройте для себя желания пользователей, которые разделяют ваши интересы!",-1)),v(p,{class:"feed__icon feed__icon-arrow",icon:["fas","angles-right"]})],32),s("div",{class:"feed__item feed__item--invitation",onMouseenter:e[2]||(e[2]=f=>t(f)),onMouseleave:e[3]||(e[3]=f=>i(f)),onClick:e[4]||(e[4]=()=>_(o).push(_(g).invitationCard))},[e[9]||(e[9]=s("h2",{class:"item__title"}," Cоздать приглашение ",-1)),e[10]||(e[10]=s("span",{class:"item__subtitle"},"Удобная онлайн-открытка для ваших друзей!",-1)),v(p,{class:"feed__icon feed__icon-arrow",icon:["fas","angles-right"]})],32),s("div",X,[v(O)])])])],64)}}},se=y(Y,[["__scopeId","data-v-9d49ebb7"]]);export{se as default};
