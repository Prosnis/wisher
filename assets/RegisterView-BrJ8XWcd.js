import{_ as m,r as n,g as w,c as b,a as s,w as l,v as u,b as f,p as c,o as v,u as h,d as y,e as A,s as B,f as E}from"./index-BvJB92vO.js";const M={class:"register"},V={__name:"RegisterView",setup(x){const a=n(""),o=n(""),i=h(),d=w();function p(){i.push(c.auth).catch(t=>{console.error("Failed to navigate:",t)})}async function g(){try{const e=(await y(A(),a.value,o.value)).user;console.log(e,"successfully registered");const r={uid:e.uid,email:e.email,createdAt:new Date,wallpaperUrl:"https://t4.ftcdn.net/jpg/08/11/25/41/360_F_811254149_AV6WMNTKdLZgMmyTDizY43EIMb8RgOul.jpg",displayName:e.email,about:"",photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&s",badges:[{name:"Аниме",BgColor:"rgba(204, 34, 238, 0.45)",color:"rgba(204, 34, 238, 1)"}],wishes:[]};await B(E(d,"users",e.uid),r),await i.push(`${c.user}/${e.uid}`).catch(_=>{console.error("Failed to navigate:",_)})}catch(t){console.error("Error during registration:",t.code,t.message)}}return(t,e)=>(v(),b("div",M,[s("form",{class:"register__form",onSubmit:f(g,["prevent"])},[e[2]||(e[2]=s("h1",null,"Sign in",-1)),l(s("input",{class:"register__input register__input--email",type:"text",placeholder:"Email","onUpdate:modelValue":e[0]||(e[0]=r=>a.value=r)},null,512),[[u,a.value]]),l(s("input",{class:"register__input register__input--password",type:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=r=>o.value=r)},null,512),[[u,o.value]]),e[3]||(e[3]=s("button",{class:"register__button register__button--login",type:"submit"},"Зарегистрироваться",-1)),s("p",{class:"register__question",onClick:p}," есть аккаунт?")],32)]))}},N=m(V,[["__scopeId","data-v-ba3d5e7c"]]);export{N as default};