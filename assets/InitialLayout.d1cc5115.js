var W=Object.defineProperty;var T=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var G=(e,s,o)=>s in e?W(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,N=(e,s)=>{for(var o in s||(s={}))j.call(s,o)&&G(e,o,s[o]);if(T)for(var o of T(s))q.call(s,o)&&G(e,o,s[o]);return e};import{d as z,_ as x,u as Q,r as u,o as f,c as $,a as t,b as a,w as b,n as A,e as S,f as p,g as L,h as y,i as M,p as C,j as U,k as V,t as X,l as I,m as J,T as Y,q as Z,s as ee,v as E,x as B}from"./index.b76111c9.js";import{u as D}from"./index.b97b139f.js";import{u as te}from"./Createx.e2a20987.js";const F=z("storeAccount",{state:()=>({userId:null,userName:null,userEmail:null,userPassword:null}),getters:{isSignedIn:e=>!!e.userId},actions:{signUp({userEmail:e,userName:s,userPassword:o,userConfirmPassword:l,shouldKeepSignedIn:r}){if(!e||!s||!o||!l)throw new Error("fill all the field to sign up");if(this._isAccountExists(e))throw new Error("There is already an account under this email");const n=Date.now(),i=JSON.parse(localStorage.getItem("userAccounts"))||[];i.push({userId:n,userEmail:e,userPassword:o,userName:s}),localStorage.setItem("userAccounts",JSON.stringify(i)),this.signIn({userEmail:e,userPassword:o})},_isAccountExists(e){const s=JSON.parse(localStorage.getItem("userAccounts"));return s==null?void 0:s.find(o=>o.userEmail===e)},signIn({userEmail:e,userPassword:s,shouldRemember:o}){if(!e||!s)throw new Error("fill all the field to sign in");const l=JSON.parse(localStorage.getItem("userAccounts")),r=l==null?void 0:l.find(n=>n.userEmail===e&&n.userPassword===s);if(!r)throw new Error("Such a user haven't found");localStorage.setItem("prevUserAccount",JSON.stringify(r)),this.$patch(N({},r))},signInPrevAccount(){const e=JSON.parse(localStorage.getItem("prevUserAccount"));if(!e)throw new Error("There isn't any saved account");this.$patch(N({},e))},signOut(){this.userId=this.userEmail=this.userPassword=null},deleteAccount(){if(!this.isSignedIn)throw new Error("sign in to recieve rules of account deletion");localStorage.removeItem("prevUserAccount");let e=JSON.parse(localStorage.getItem("userAccounts"));e=e.filter(s=>s.userId!=this.userId),localStorage.setItem("userAccounts",JSON.stringify(e)),this.signOut()}}});const se={class:"menu"},oe={class:"menu__links"},ne={class:"menu__links-item"},ae=S("About us"),ie={class:"menu__links-item"},le=S("Courses"),re={class:"menu__links-item"},_e=S("Events"),ce={class:"menu__links-item"},de=S("blog"),ue={class:"menu__links-item"},me=S("Contacts"),pe={name:"Menu",props:{colorInitial:String},setup(e){return Q(s=>({"04ab499f":e.colorInitial})),(s,o)=>{const l=u("AppLink");return f(),$("nav",se,[t("ul",oe,[t("li",ne,[a(l,{class:A(["menu__links-link link",e.colorInitial?"_menu-color":""]),to:{name:"about"}},{default:b(()=>[ae]),_:1},8,["class"])]),t("li",ie,[a(l,{class:A(["menu__links-link link",e.colorInitial?"_menu-color":""]),to:{name:"courses"}},{default:b(()=>[le]),_:1},8,["class"])]),t("li",re,[a(l,{class:A(["menu__links-link link",e.colorInitial?"_menu-color":""]),to:{name:"events"}},{default:b(()=>[_e]),_:1},8,["class"])]),t("li",ce,[a(l,{class:A(["menu__links-link link",e.colorInitial?"_menu-color":""]),to:{name:"blogPosts"}},{default:b(()=>[de]),_:1},8,["class"])]),t("li",ue,[a(l,{class:A(["menu__links-link link",e.colorInitial?"_menu-color":""]),to:{name:"contacts"}},{default:b(()=>[me]),_:1},8,["class"])])])])}}};var ve=x(pe,[["__scopeId","data-v-44d9d612"]]);const O=e=>(C("data-v-37c560de"),e=e(),U(),e),fe={class:"sign-up"},ge={class:"sign-up__body"},he=O(()=>t("div",{class:"sign-up__title"},"Sign up",-1)),be=O(()=>t("div",{class:"sign-up__text"},"Registration takes less than a minute but gives you full control over your studying.",-1)),Se=["onSubmit"],ke=S(" Remember me "),Ie=O(()=>t("button",{class:"sign-up__form-item btn",tabindex:"6"},"Sign up",-1)),$e={class:"sign-up__form-item"},ye=S(" Already have an account? "),we={class:"red"},xe={class:"sign-up__footer"},Ae=O(()=>t("div",{class:"sign-up__footer-text"},"Or sign in with",-1)),Ve={name:"SignUp",emits:["redirect-sign-in"],setup(e,{emit:s}){const o=F(),l=["https://facebook.com","https://instagram.com","https://twitter.com","https://linkedin.com"],r=p(""),n=p(""),i=p(""),m=p(""),g=p(!1),c=()=>o.signUp({userEmail:r.value,userPassword:n.value,userConfirmPassword:i.value,userName:m.value,shouldRemember:g.value});return(d,_)=>{const v=u("InputGroup"),k=u("CheckboxGroup"),w=u("Socials"),K=L("focus");return f(),$("section",fe,[t("div",ge,[he,be,t("form",{action:"",class:"sign-up__form",onSubmit:y(c,["prevent"])},[M(a(v,{class:"sign-up__form-item",label:"Full Name",placeholder:"Your full name",tabindex:"1",modelValue:m.value,"onUpdate:modelValue":_[0]||(_[0]=h=>m.value=h)},null,8,["modelValue"]),[[K]]),a(v,{class:"sign-up__form-item",label:"Email",placeholder:"Your working email",tabindex:"2",modelValue:r.value,"onUpdate:modelValue":_[1]||(_[1]=h=>r.value=h)},null,8,["modelValue"]),a(v,{class:"sign-up__form-item",label:"Password",placeholder:"Your Password",type:"password",tabindex:"3",modelValue:n.value,"onUpdate:modelValue":_[2]||(_[2]=h=>n.value=h)},null,8,["modelValue"]),a(v,{class:"sign-up__form-item",label:"Confirm Password",placeholder:"Your Password",type:"password",tabindex:"4",modelValue:i.value,"onUpdate:modelValue":_[3]||(_[3]=h=>i.value=h)},null,8,["modelValue"]),a(k,{class:"sign-up__form-item",tabindex:"5",modelValue:g.value,"onUpdate:modelValue":_[4]||(_[4]=h=>g.value=h)},{default:b(()=>[ke]),_:1},8,["modelValue"]),Ie,t("div",$e,[ye,t("span",we,[t("a",{onClick:_[5]||(_[5]=y(h=>d.$emit("redirect-sign-in"),["prevent"]))},"Sign in")])])],40,Se)]),t("div",xe,[Ae,a(w,{class:"sign-up__footer-socials",links:l,colorInitial:"#787A80"})])])}}};var Ce=x(Ve,[["__scopeId","data-v-37c560de"]]);const P=e=>(C("data-v-4323ea7a"),e=e(),U(),e),Ue={class:"sign-in"},Ee={class:"sign-in__body"},Oe=P(()=>t("div",{class:"sign-in__title"},"Sign in",-1)),Pe=P(()=>t("div",{class:"sign-in__text"},"Sign in to your account usign email and password provided during registration.",-1)),Ne=["onSubmit"],De={class:"sign-in__form-item _row"},Fe=S(" Keep me signed in "),Re={class:"red"},Te=P(()=>t("button",{class:"sign-in__form-item btn",tabindex:"4"},"Sign in",-1)),Ge={class:"sign-in__form-item"},Le=S(" Don't have an account? "),Me={class:"red"},Je={class:"sign-in__footer"},Ye=P(()=>t("div",{class:"sign-in__footer-text"},"Or sign in with",-1)),Be={name:"SignIn",props:{},emits:["closed","redirect-sign-up"],setup(e,{emit:s}){const o=F(),l=["https://facebook.com","https://instagram.com","https://twitter.com","https://linkedin.com"],r=p(""),n=p(""),i=p(!1),m=()=>{o.signIn({userEmail:r.value,userPassword:n.value,shouldKeepSignedIn:i.value})};return(g,c)=>{const d=u("InputGroup"),_=u("CheckboxGroup"),v=u("Socials"),k=L("focus");return f(),$("section",Ue,[t("div",Ee,[Oe,Pe,t("form",{action:"",class:"sign-in__form",onSubmit:y(m,["prevent"])},[M(a(d,{class:"sign-in__form-item",label:"Email",placeholder:"Your full name",tabindex:"1",modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=w=>r.value=w)},null,8,["modelValue"]),[[k]]),a(d,{class:"sign-in__form-item",label:"Password",placeholder:"Your Password",type:"password",tabindex:"2",modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=w=>n.value=w)},null,8,["modelValue"]),t("div",De,[a(_,{class:"sign-in__form-item",tabindex:"3",modelValue:i.value,"onUpdate:modelValue":c[2]||(c[2]=w=>i.value=w)},{default:b(()=>[Fe]),_:1},8,["modelValue"]),t("span",Re,[t("a",{onClick:c[3]||(c[3]=y(()=>{},["prevent"]))},"Forgot password?")])]),Te,t("div",Ge,[Le,t("span",Me,[t("a",{onClick:c[4]||(c[4]=y(w=>g.$emit("redirect-sign-up"),["prevent"]))},"Sign up")])])],40,Ne)]),t("div",Je,[Ye,a(v,{class:"sign-in__footer-socials",links:l,colorInitial:"#787A80"})])])}}};var He=x(Be,[["__scopeId","data-v-4323ea7a"]]);const Ke=e=>(C("data-v-543f08f8"),e=e(),U(),e),We={class:"send-data-form"},je=Ke(()=>t("div",{class:"send-data-form__title"},"Send data:",-1)),qe={class:"send-data-form__message"},ze={name:"SendFormData",setup(e){const s=D(),o=V(()=>s.data);return(l,r)=>(f(),$("div",We,[je,t("div",qe,X(I(o)),1)]))}};var Qe=x(ze,[["__scopeId","data-v-543f08f8"]]);const Xe={name:"SendFormDataPopup",setup(e){const s=D(),o=V(()=>s.isActive);return(l,r)=>{const n=u("Popup");return f(),J(Y,{to:"body"},[a(n,{class:"send-form-data-popup",isActive:I(o),isTransparent:"",isNoCross:"",onClosed:r[0]||(r[0]=i=>I(s).isActive=!1)},{default:b(()=>[a(Qe)]),_:1},8,["isActive"])])}}};var Ze=x(Xe,[["__scopeId","data-v-6f4af39d"]]);const H=e=>(C("data-v-c8916a48"),e=e(),U(),e),et={class:"header__container container"},tt={class:"header"},st={class:"burgered"},ot=H(()=>t("div",{class:"burger"},[t("span")],-1)),nt={class:"header__toolbar"},at=H(()=>t("button",{class:"btn _l header__toolbar-btn"},"get consultation",-1)),it={class:"header__toolbar-account"},lt=S(" / "),rt={name:"Header",props:{},setup(e){const s=F();let o=p(null),l=V(()=>window.getComputedStyle(o.value||document.createElement("div")).height);Z(()=>{document.documentElement.style.setProperty("--header-height",l.value)});let r=V(()=>s.isSignedIn);ee(r,c=>c?n.value=i.value=!1:null);let n=p(!1),i=p(!1);function m(){n.value=!1,i.value=!0}function g(){i.value=!1,n.value=!0}return(c,d)=>{const _=u("Logo"),v=u("Popup");return f(),$("header",{class:"header__section",ref_key:"header",ref:o},[t("div",et,[t("div",tt,[a(_,{class:"header__logo"}),t("div",st,[a(ve)]),ot,t("div",nt,[at,t("div",it,[I(r)?(f(),$("a",{key:1,class:"link",onClick:d[1]||(d[1]=y((...k)=>I(s).signOut&&I(s).signOut(...k),["prevent"]))},"log out")):(f(),$("a",{key:0,class:"link",onClick:d[0]||(d[0]=y(k=>E(n)?n.value=!0:n=!0,["prevent"]))},"log in")),lt,t("a",{class:"link",onClick:d[2]||(d[2]=y(k=>E(i)?i.value=!0:i=!0,["prevent"]))},"Register")])])])]),(f(),J(Y,{to:"body"},[a(v,{isActive:I(n),onClosed:d[3]||(d[3]=k=>E(n)?n.value=!1:n=!1)},{default:b(()=>[a(He,{onRedirectSignUp:m})]),_:1},8,["isActive"]),a(v,{isActive:I(i),onClosed:d[4]||(d[4]=k=>E(i)?i.value=!1:i=!1)},{default:b(()=>[a(Ce,{onRedirectSignIn:g})]),_:1},8,["isActive"]),a(Ze)]))],512)}}};var _t=x(rt,[["__scopeId","data-v-c8916a48"]]);const R=e=>(C("data-v-3fe8e72b"),e=e(),U(),e),ct={class:"footer"},dt={class:"footer__body-section"},ut={class:"footer__body-container container"},mt={class:"footer__body"},pt={class:"footer__body-col _col-1"},vt=R(()=>t("div",{class:"footer__text"},"Createx Online School is\xA0a\xA0leader in\xA0online studying. We\xA0have lots of\xA0courses and programs from the main market experts. We\xA0provide relevant approaches to\xA0online learning, internships and employment in\xA0the largest companies in\xA0the country. ",-1)),ft=B('<div class="footer__body-col _col-2" data-v-3fe8e72b><ul class="footer__link-cols" data-v-3fe8e72b><li class="footer__link-col" data-v-3fe8e72b><ul class="footer__links" data-v-3fe8e72b><li class="footer__links-item _white" data-v-3fe8e72b>SITE MAP</li><li class="footer__links-item" data-v-3fe8e72b>About Us</li><li class="footer__links-item" data-v-3fe8e72b>Courses</li><li class="footer__links-item" data-v-3fe8e72b>Events</li><li class="footer__links-item" data-v-3fe8e72b>Blog</li><li class="footer__links-item" data-v-3fe8e72b>Contacts</li></ul></li><li class="footer__link-col" data-v-3fe8e72b><ul class="footer__links" data-v-3fe8e72b><li class="footer__links-item _white" data-v-3fe8e72b>COURSES</li><li class="footer__links-item" data-v-3fe8e72b>Marketing Us</li><li class="footer__links-item" data-v-3fe8e72b>Management</li><li class="footer__links-item" data-v-3fe8e72b>HR &amp; Recruting</li><li class="footer__links-item" data-v-3fe8e72b>Design</li><li class="footer__links-item" data-v-3fe8e72b>Development</li></ul></li><li class="footer__link-col _col-3" data-v-3fe8e72b><ul class="footer__links" data-v-3fe8e72b><li class="footer__links-item _white" data-v-3fe8e72b>CONTACT US</li><li class="footer__links-item" data-v-3fe8e72b>(405) 555-0128</li><li class="footer__links-item" data-v-3fe8e72b>hello@createx.com</li></ul></li></ul></div>',1),gt={class:"footer__body-col footer__emailing"},ht=R(()=>t("div",{class:"footer__emailing-title _white"},"SIGN UP TO OUR NEWSLETTER",-1)),bt=["onSubmit"],St=R(()=>t("div",{class:"footer__emailing-text"},"*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.",-1)),kt=B('<div class="footer__footer-section" data-v-3fe8e72b><div class="footer__footer-container container" data-v-3fe8e72b><div class="footer__footer" data-v-3fe8e72b><div class="footer__footer-copy" data-v-3fe8e72b>\xA9 All rights reserved. Made with by Createx Studio </div><a class="footer__footer-go-top-link" data-v-3fe8e72b>GO TO TOP</a></div></div></div>',1),It={name:"Footer",setup(e){const s=te(),o=D(),l=V(()=>{var m;return(m=s==null?void 0:s.createx)==null?void 0:m.socials}),r=p(null),n=p("");function i(){const m=JSON.stringify({form:r.value.id,email:n.value});o.sendFormData(m),n.value=""}return(m,g)=>{const c=u("Logo"),d=u("Socials"),_=u("Input");return f(),$("footer",ct,[t("div",dt,[t("div",ut,[t("div",mt,[t("div",pt,[a(c,{class:"footer__logo",colorInitial:"#fff"}),vt,a(d,{class:"footer__socials",colorInitial:"rgba(255, 255, 255, .6)",links:I(l)},null,8,["links"])]),ft,t("div",gt,[ht,t("form",{class:"footer__emailing-form",action:"",ref_key:"form",ref:r,id:"createx-emailing-footer",onSubmit:y(i,["prevent"])},[a(_,{placeholder:"Email address",modelValue:n.value,"onUpdate:modelValue":g[0]||(g[0]=v=>n.value=v)},null,8,["modelValue"])],40,bt),St])])])]),kt])}}};var $t=x(It,[["__scopeId","data-v-3fe8e72b"]]);const yt={class:"page"},wt={name:"InitialLayout",setup(e){return(s,o)=>{const l=u("RouterView");return f(),$("div",yt,[a(_t,{class:"page__header"}),a(l,{class:"page__body"}),a($t,{class:"page__footer"})])}}};var Ut=x(wt,[["__scopeId","data-v-63641552"]]);export{Ut as default};
