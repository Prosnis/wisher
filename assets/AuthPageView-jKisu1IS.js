import{_ as g,r as o,c as r,a,t as _,k as p,b as f,p as c,o as l,u as m,f as v,y as b}from"./index-V7uydbbR.js";const k={class:"auth"},w={key:0},y={__name:"AuthPageView",setup(A){o(""),o("");const t=o(""),n=m();function i(){n.push(c.register).catch(s=>{console.error("Failed to navigate:",s)})}function d(){const s=v();b(s,"123@123.sd","adgadfgad").then(e=>{const u=e.user;console.log("Successfully logged in:",u),n.push(`${c.user}/${u.uid}`).catch(h=>{console.error("Failed to navigate:",h)})}).catch(e=>{switch(console.log(e.code),console.log(e.message),e.code){case"auth/invalid-email":t.value="Неправильный адрес электронной почты";break;case"auth/user-not-found":t.value="Аккаунт с таким адресом электронной почты не найден";break;case"auth/wrong-password":t.value="Неправильный пароль";break;default:t.value="Адрес электронной почты или пароль введены неверно"}})}return(s,e)=>(l(),r("div",k,[a("form",{class:"auth__form",onSubmit:f(d,["prevent"])},[e[0]||(e[0]=a("h1",null,"Log in",-1)),t.value?(l(),r("p",w,_(t.value),1)):p("",!0),e[1]||(e[1]=a("button",{class:"auth__btn auth__btn--login",type:"submit"}," Войти ",-1)),a("p",{class:"auth__question",onClick:i}," новый пользователь? ")],32)]))}},V=g(y,[["__scopeId","data-v-5dd51153"]]);export{V as default};
