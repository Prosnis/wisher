import{_ as g,r as n,c as r,a as s,w as c,v as p,t as f,h as w,b,p as d,o as h,u as k,e as y,i as V}from"./index-D03g55Ss.js";const x={class:"auth"},A={key:0},B={__name:"AuthView",setup(E){const u=n(""),l=n(""),t=n(""),i=k();function _(){i.push(d.register).catch(o=>{console.error("Failed to navigate:",o)})}function v(){const o=y();V(o,u.value,l.value).then(e=>{const a=e.user;console.log("Successfully logged in:",a),i.push(`${d.user}/${a.uid}`).catch(m=>{console.error("Failed to navigate:",m)})}).catch(e=>{switch(console.log(e.code),console.log(e.message),e.code){case"auth/invalid-email":t.value="Неправильный адрес электронной почты";break;case"auth/user-not-found":t.value="Аккаунт с таким адресом электронной почты не найден";break;case"auth/wrong-password":t.value="Неправильный пароль";break;default:t.value="Адрес электронной почты или пароль введены неверно"}})}return(o,e)=>(h(),r("div",x,[s("form",{class:"auth__form",onSubmit:b(v,["prevent"])},[e[2]||(e[2]=s("h1",null,"Log in",-1)),c(s("input",{class:"auth__input auth__input--email",type:"text",placeholder:"Email","onUpdate:modelValue":e[0]||(e[0]=a=>u.value=a)},null,512),[[p,u.value]]),c(s("input",{class:"auth__input auth__input--password",type:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=a=>l.value=a)},null,512),[[p,l.value]]),t.value?(h(),r("p",A,f(t.value),1)):w("",!0),e[3]||(e[3]=s("button",{class:"auth__btn auth__btn--login",type:"submit"},"Войти",-1)),s("p",{class:"auth__question",onClick:_},"новый пользователь?")],32)]))}},P=g(B,[["__scopeId","data-v-ba6f6048"]]);export{P as default};
