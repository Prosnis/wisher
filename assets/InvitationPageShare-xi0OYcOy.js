import{W as m}from"./WiNavbar-nKao627v.js";import{f as v,g as _,h as f,I as w,r as a,_ as C,l as I,c as u,d as x,a as e,t as b,F as U,o as d}from"./index-CIa3Xx9T.js";import{g as k,r as $,a as y}from"./index.esm2017-XUYcyQWm.js";const L="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3cpath%20fill='%231976d2'%20d='M24%204A20%2020%200%201%200%2024%2044A20%2020%200%201%200%2024%204Z'/%3e%3cpath%20fill='%23fff'%20d='M35.937,18.041c0.046-0.151,0.068-0.291,0.062-0.416C35.984,17.263,35.735,17,35.149,17h-2.618%20c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.632,3.359-3.513,5.574c-0.61,0.641-0.92,0.625-1.25,0.625C26.447,24,26,23.786,26,23.199%20v-5.185C26,17.32,25.827,17,25.268,17h-4.649C20.212,17,20,17.32,20,17.641c0,0.667,0.898,0.827,1,2.696v3.623%20C21,24.84,20.847,25,20.517,25c-0.89,0-2.642-3-3.815-6.932C16.448,17.294,16.194,17,15.533,17h-2.643%20C12.127,17,12,17.374,12,17.774c0,0.721,0.6,4.619,3.875,9.101C18.25,30.125,21.379,32,24.149,32c1.678,0,1.85-0.427,1.85-1.094%20v-2.972C26,27.133,26.183,27,26.717,27c0.381,0,1.158,0.25,2.658,2c1.73,2.018,2.044,3,3.036,3h2.618%20c0.608,0,0.957-0.255,0.971-0.75c0.003-0.126-0.015-0.267-0.056-0.424c-0.194-0.576-1.084-1.984-2.194-3.326%20c-0.615-0.743-1.222-1.479-1.501-1.879C32.062,25.36,31.991,25.176,32,25c0.009-0.185,0.105-0.361,0.249-0.607%20C32.223,24.393,35.607,19.642,35.937,18.041z'/%3e%3c/svg%3e",M="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3cpath%20fill='%2329b6f6'%20d='M24%204A20%2020%200%201%200%2024%2044A20%2020%200%201%200%2024%204Z'/%3e%3cpath%20fill='%23fff'%20d='M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733%20l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468%20c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z'/%3e%3cpath%20fill='%23b0bec5'%20d='M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043%20l0.964-5.965L23,30.505z'/%3e%3cpath%20fill='%23cfd8dc'%20d='M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912%20c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z'/%3e%3c/svg%3e",R=v(),D=_(),z=k();async function A(){try{const n=R.currentUser,t=f(D,"users",n.uid),s=(await w(t)).data().invitationImage,r=$(z,s);return await y(r)}catch(n){return console.error("Ошибка при получении изображения приглашения:",n),null}}const B=v(),g=a(null);async function S(){return g.value=B.currentUser.uid,`https://prosnis.github.io/wisher/user/${g.value}`}const T={key:0,class:"invitation__container skeleton-loader"},F={key:1,class:"invitation__container"},N=["src"],P={class:"invitation__links"},V=["href"],W=["href"],Z={__name:"InvitationPageShare",setup(n){const t=a(null),o=a(null),s=a(null),r=v(),l=a("Скопировать ссылку");async function h(){const i=`${t.value}
${s.value}`;await navigator.clipboard.writeText(i),l.value="Скопировано!"}function p(i){i.target.classList.add("loaded")}return I(async()=>{t.value=await A(),o.value=r.currentUser.uid,s.value=`Посмотреть и зарезервировать подарок можно тут: ${await S()}`}),(i,c)=>(d(),u(U,null,[x(m),e("div",null,[t.value?(d(),u("div",F,[e("img",{src:t.value,alt:"Invitation Image",class:"invitation__image",loading:"lazy",onLoad:p},null,40,N),e("div",P,[e("a",{target:"_blank",href:`https://vk.com/share.php?url=${encodeURIComponent(t.value)}&title=${encodeURIComponent(`Посмотреть и зарезервировать подарок можно тут: https://prosnis.github.io/wisher/user/${o.value}`)}`},c[0]||(c[0]=[e("img",{src:L,alt:""},null,-1)]),8,V),e("a",{target:"_blank",href:`https://t.me/share/url?url=${encodeURIComponent(t.value)}&text=${encodeURIComponent(`Посмотреть и зарезервировать подарок можно тут: https://prosnis.github.io/wisher/user/${o.value}`)}`},c[1]||(c[1]=[e("img",{src:M,alt:""},null,-1)]),8,W),e("button",{class:"invitation__btn",onClick:h},b(l.value),1)])])):(d(),u("div",T))])],64))}},G=C(Z,[["__scopeId","data-v-5f544559"]]);export{G as default};
