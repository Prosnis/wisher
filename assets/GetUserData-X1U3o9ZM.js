import{g as i,K as c,h as u,X as h,Y as w,Z as l,$ as d}from"./index-V7uydbbR.js";const r=i();async function D(s){const e=await c(u(r,"users",s)),t=e.exists()?e.data():null;if(!t)return console.error("Пользователь не найден!"),{user:null,wishes:[]};const o=h(l(r,"wishes"),w("userId","==",s)),n=(await d(o)).docs.map(a=>({id:a.id,...a.data()}));return{user:t,wishes:n}}export{D as g};