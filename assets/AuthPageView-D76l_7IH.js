import{_ as g,r as o,c,a,t as _,m as p,b as m,p as r,o as l,u as f,e as v,y as b}from"./index-DztK99nE.js";const k={class:"auth"},w={key:0},y={__name:"AuthPageView",setup(A){o(""),o("");const t=o(""),n=f();function i(){n.push(r.register).catch(s=>{console.error("Failed to navigate:",s)})}function d(){const s=v();b(s,"123@123.sd","adgadfgad").then(e=>{const u=e.user;console.log("Successfully logged in:",u),n.push(`${r.user}/${u.uid}`).catch(h=>{console.error("Failed to navigate:",h)})}).catch(e=>{switch(console.log(e.code),console.log(e.message),e.code){case"auth/invalid-email":t.value="Неправильный адрес электронной почты";break;case"auth/user-not-found":t.value="Аккаунт с таким адресом электронной почты не найден";break;case"auth/wrong-password":t.value="Неправильный пароль";break;default:t.value="Адрес электронной почты или пароль введены неверно"}})}return(s,e)=>(l(),c("div",k,[a("form",{class:"auth__form",onSubmit:m(d,["prevent"])},[e[0]||(e[0]=a("h1",null,"Log in",-1)),t.value?(l(),c("p",w,_(t.value),1)):p("",!0),e[1]||(e[1]=a("button",{class:"auth__btn auth__btn--login",type:"submit"}," Войти ",-1)),a("p",{class:"auth__question",onClick:i}," новый пользователь? ")],32)]))}},V=g(y,[["__scopeId","data-v-217d61c8"]]);export{V as default};
