import{u as V}from"./EventCard.vue_vue_type_style_index_0_scoped_true_lang.bb47b710.js";import{g as P,u as F}from"./index.b97b139f.js";import{_ as E,k as x,r as u,o as d,c as p,a as e,F as A,A as C,b as o,w as S,t as h,e as g,p as y,j as k,f as b,h as N,m as L,B as R,l,C as T}from"./index.b76111c9.js";import{A as Y,F as B}from"./ForWhom.6ac06500.js";import{E as U}from"./EventCard.a732e9ac.js";import"./Teachers.a388a30e.js";const f=t=>(y("data-v-3a83670d"),t=t(),k(),t),W={class:"about-event"},G={class:"about-event__body"},J=f(()=>e("div",{class:"about-event__title title"},"We will talk about:",-1)),O={class:"about-event__event-program event-program"},q={class:"event-program__item-title"},M={class:"red fw400"},j={class:"about-event__info-card"},z={class:"about-event__info-card-group"},H=f(()=>e("div",{class:"about-event__info-card-label"},"Time",-1)),K={class:"about-event__info-card-value"},Q=f(()=>e("div",{class:"about-event__info-card-text"},"Metus turpis sit lorem lacus, in elit tellus lacus.",-1)),X={class:"about-event__info-card-group"},Z=f(()=>e("div",{class:"about-event__info-card-label"},"Price",-1)),ee={class:"about-event__info-card-value"},te={class:"price big-price"},se=g(" per month "),oe=f(()=>e("div",{class:"about-event__info-card-text"},"Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",-1)),ne=f(()=>e("a",{class:"about-event__info-card-btn btn",href:"#register-form"},"Join the event",-1)),ae={name:"AboutEvent",props:{price:Number,date:Object,time:String,eventProgram:Array,eventLink:String},setup(t){const i=t;return x(()=>Math.round(P(i.dateStart,i.dateEnd))),(r,s)=>{const n=u("Spoiler");return d(),p("section",W,[e("div",G,[J,e("ul",O,[(d(!0),p(A,null,C(t.eventProgram,(a,v)=>(d(),p("li",{class:"event-program__item",key:a},[o(n,null,{title:S(()=>[e("div",q,[e("span",M,"Theme "+h(v+1)+".",1),g(" "+h(a.title),1)])]),body:S(()=>[e("div",null,h(a.body),1)]),_:2},1024)]))),128))])]),e("div",j,[e("div",z,[H,e("div",K,h(t.date.month)+" "+h(t.date.date)+", "+h(t.time),1),Q]),e("div",X,[Z,e("div",ee,[e("span",te,h(t.price),1),se]),oe]),ne])])}}};var ie=E(ae,[["__scopeId","data-v-3a83670d"]]);const D=t=>(y("data-v-6cd9a3d0"),t=t(),k(),t),re={class:"events-emailing"},_e={class:"events-emailing__img"},ce={class:"events-emailing__body"},le=D(()=>e("h2",{class:"events-emailing__title title _32"},[g(" Don\u2019t want to miss the best events? "),e("br"),g("Subscribe to our newsletter! ")],-1)),de=["onSubmit"],ve={class:"events-emailing__form-row"},me=D(()=>e("button",{class:"events-emailing__form-btn btn"},"send message",-1)),ue=g(" I agree to receive communications from Createx Online School "),pe={name:"EventsEmailingSubscribeForm",setup(t){const i=F(),r=b(null),s=b(""),n=b(!1);function a(){const v=JSON.stringify({form:r.value.id,email:s.value,isAgreeToRecieveEmails:n.value});i.sendFormData(v),s.value="",n.value=!1}return(v,_)=>{const m=u("Img"),w=u("Input"),$=u("CheckboxGroup");return d(),p("section",re,[e("div",_e,[o(m,{src:"/img/decor/illustrations/10.webp"})]),e("div",ce,[le,e("form",{class:"events-emailing__form",action:"",ref_key:"form",ref:r,id:"events-emailing",onSubmit:N(a,["prevent"])},[e("div",ve,[o(w,{placeholder:"Your working email",modelValue:s.value,"onUpdate:modelValue":_[0]||(_[0]=c=>s.value=c)},null,8,["modelValue"]),me]),o($,{class:"events-emailing__form-item _col-2",modelValue:n.value,"onUpdate:modelValue":_[1]||(_[1]=c=>n.value=c)},{default:S(()=>[ue]),_:1},8,["modelValue"])],40,de)])])}}};var he=E(pe,[["__scopeId","data-v-6cd9a3d0"]]);const I=t=>(y("data-v-7b3d6c1b"),t=t(),k(),t),be={class:"events-register"},ge={class:"events-register__img"},fe={class:"events-register__body"},$e=I(()=>e("div",{class:"events-register__label title_label"},"Don\u2019t miss the event",-1)),Se=I(()=>e("h2",{class:"events-register__title title"},"Leave a request",-1)),Ee=["onSubmit"],ye=I(()=>e("button",{class:"events-register__form-btn btn"},"Join the event",-1)),ke=I(()=>e("div",{class:"events-register__form-explication"},"* You will receive a link to the online lecture in an email after registration.",-1)),Ie={name:"EventRegisterForm",setup(t){const i=F(),r=b(null),s=b(""),n=b(""),a=b("");function v(){const _=JSON.stringify({form:r.value.id,name:s.value,email:n.value,phone:a.value});i.sendFormData(_),s.value=n.value=a.value=""}return(_,m)=>{const w=u("Img"),$=u("InputGroup");return d(),p("section",be,[e("div",ge,[o(w,{src:"/img/decor/illustrations/04.webp"})]),e("div",fe,[$e,Se,e("form",{class:"events-register__form",action:"",ref_key:"form",ref:r,id:"event-register",onSubmit:N(v,["prevent"])},[o($,{class:"events-register__form-item",label:"Full Name",placeholder:"Your Full Name",modelValue:s.value,"onUpdate:modelValue":m[0]||(m[0]=c=>s.value=c)},null,8,["modelValue"]),o($,{class:"events-register__form-item",label:"Email",placeholder:"Your working number",modelValue:n.value,"onUpdate:modelValue":m[1]||(m[1]=c=>n.value=c)},null,8,["modelValue"]),o($,{class:"events-register__form-item",label:"Phone",placeholder:"Your Phone number",modelValue:a.value,"onUpdate:modelValue":m[2]||(m[2]=c=>a.value=c)},null,8,["modelValue"]),ye,ke],40,Ee)])])}}};var we=E(Ie,[["__scopeId","data-v-7b3d6c1b"]]);const xe=t=>(y("data-v-80265cea"),t=t(),k(),t),Ve={class:"event-recommendation"},Fe={class:"event-recommendation__footer"},Ae=xe(()=>e("div",{class:"event-recommendation__footer-label"},"Do you want more Events?",-1)),Ce=g("View all events"),Ne={name:"EventRecommendations",props:{},setup(t){const i=V(),r=x(()=>i.events);return(s,n)=>{const a=u("SliderCustom"),v=u("AppLink");return d(),p("section",Ve,[o(a,{class:"event-recommendation__slider",title:"Check other Events",label:"You may also like"},{default:S(()=>[(d(!0),p(A,null,C(l(r),_=>(d(),L(U,R({class:"event-recommendation__slider-item",key:_.id},_),null,16))),128))]),_:1}),e("div",Fe,[Ae,o(v,{class:"event-recommendation__footer-btn btn",to:{name:"events"}},{default:S(()=>[Ce]),_:1})])])}}};var De=E(Ne,[["__scopeId","data-v-80265cea"]]);const Pe={key:0,class:"event"},Le={class:"event__about-event-section section"},Re={class:"event__about-event-container container"},Te={class:"event__about-teacher-section section"},Ye={class:"event__about-teacher-container container"},Be={class:"event__for-whom-section section"},Ue={class:"event__for-whom-container container"},We={class:"event__emailing-subscribe-form-section section"},Ge={class:"event__emailing-subscribe-form-container container"},Je={class:"event__event-register-section section",id:"register-form"},Oe={class:"event__event-register-container container"},qe={class:"event__event-recomendation-section section"},Me={class:"event__event-recomendation-container container"},je={name:"Event",props:{eventId:[Number,String]},setup(t){const i=t,r=V(),s=x(()=>r.findEvent(i.eventId));return(n,a)=>l(s)?(d(),p("main",Pe,[e("div",Le,[e("div",Re,[o(ie,{class:"event__about-event",price:l(s).price,date:l(s).date,time:l(s).time,eventProgram:l(s).eventProgram,eventLink:l(s).eventLink},null,8,["price","date","time","eventProgram","eventLink"])])]),e("div",Te,[e("div",Ye,[o(Y,{class:"event__about-teacher",id:l(s).teacherId,label:"speaker"},null,8,["id"])])]),e("div",Be,[e("div",Ue,[o(B,{class:"event__emailing-subscribe-form",forWhom:l(s).forWhom},null,8,["forWhom"])])]),e("div",We,[e("div",Ge,[o(he,{class:"event__emailing-subscribe-form"})])]),e("div",Je,[e("div",Oe,[o(we,{class:"event__event-register"})])]),e("div",qe,[e("div",Me,[o(De,{class:"event__event-recomendation"})])])])):T("",!0)}};var et=E(je,[["__scopeId","data-v-d038664c"]]);export{et as default};
