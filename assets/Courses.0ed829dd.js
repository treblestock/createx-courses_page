import{d as F,_ as C,k as l,r as v,l as o,o as d,c as h,a as e,b as u,n as R,t as m,w as f,e as w,C as N,F as k,A as S,m as V,v as $,B as T,D as G,p as L,j}from"./index.4bf08954.js";import{u as b}from"./Courses.7ff87e93.js";import{a as A}from"./index.71aee973.js";import{u as E}from"./Teachers.dc467ece.js";import{R as W}from"./Reviews.0865de10.js";import{C as D}from"./Certificate.aa15191a.js";import{C as O}from"./CreatexEmailingSubscribeForm.0553bb76.js";const U=F("storeCoursesFilters",{state:()=>({categoryQuery:null,searchQuery:null}),getters:{filterRules:s=>({categoryQuery:r=>r.category===s.categoryQuery,searchQuery:r=>A(r.title,s.searchQuery)}),coursesFiltered(){return Object.values(this.filterRules).reduce((s,r)=>this[r.name]!==null?s.filter(r):s,b().courses)}},actions:{}});const z={key:0,class:"course-card"},P={class:"course-card__img"},q={class:"course-card__body"},H={class:"course-card__bottom"},J={class:"course-card__price price"},K={class:"course-card__teacher"},M={name:"CourseCard",props:{id:[Number,String]},setup(s){const r=s,a=E(),g=b(),i=l(()=>g.findCourse(r.id)),_=l(()=>a.findTeacher(i.value.teacherId));return(p,c)=>{const n=v("Img"),y=v("AppLink");return o(_)?(d(),h("article",z,[e("div",P,[u(n,{src:o(_).imgCourse},null,8,["src"])]),e("div",q,[e("div",{class:R(["course-card__category","_"+o(i).category.split(" ")[0].toLowerCase()])},m(o(i).category),3),u(y,{class:"course-card__title link",to:{name:"course",params:{courseId:o(i).id}}},{default:f(()=>[w(m(o(i).title),1)]),_:1},8,["to"]),e("div",H,[e("span",J,m(o(i).price),1),e("span",K,"by "+m(o(_).name),1)])])])):N("",!0)}}};var X=C(M,[["__scopeId","data-v-7e72e52d"]]);const Y={class:"courses-grid"},Z={class:"courses-grid__toolbar"},ee={class:"courses-grid__toolbar-radios"},se={class:"courses-grid__items"},oe={name:"CoursesGrid",props:{},setup(s){const r=b(),a=U(),g=l(()=>a.coursesFiltered||[]);let i=l(()=>[...r.courses.reduce((c,n)=>c.add(n.category),new Set([null]))]),_=l({get:()=>a.categoryQuery,set:c=>a.categoryQuery=c=="on"?null:c}),p=l({get:()=>a.searchQuery,set:c=>a.searchQuery=c=="on"?null:c});return(c,n)=>{const y=v("RadioBtned"),B=v("InputWithBtn");return d(),h("section",Y,[e("header",Z,[e("div",ee,[(d(!0),h(k,null,S(o(i),(t,I)=>(d(),V(y,{class:"courses-grid__toolbar-radio",key:t,checked:I===0,value:t,modelValue:o(_),"onUpdate:modelValue":n[0]||(n[0]=Q=>$(_)?_.value=Q:_=Q),name:"categoryQuery"},{default:f(()=>[w(m(t||"all"),1)]),_:2},1032,["checked","value","modelValue"]))),128))]),u(B,{class:"courses-grid__toolbar-input",placeholder:"Search course...",icon:"",modelValue:o(p),"onUpdate:modelValue":n[1]||(n[1]=t=>$(p)?p.value=t:p=t)},null,8,["modelValue"])]),e("section",se,[u(G,{name:"fade-shift"},{default:f(()=>[(d(!0),h(k,null,S(o(g),(t,I)=>(d(),V(X,T({class:"courses-grid__item",key:t.id},t),null,16))),128))]),_:1})])])}}};var re=C(oe,[["__scopeId","data-v-f86931fa"]]);const x=s=>(L("data-v-2ad2f044"),s=s(),j(),s),te={class:"courses"},ce=x(()=>e("div",{class:"courses__label title_label"},"Enjoy your studying!",-1)),ae=x(()=>e("div",{class:"courses__title title"},"Our online courses",-1)),ie={class:"courses__courses-grid-section section"},_e={class:"courses__courses-grid-container container"},ne={class:"courses__reviews-section section"},ue={class:"courses__reviews-container container"},de={class:"courses__certificate-section section"},le={class:"courses__certificate-container container"},pe={class:"courses__createx-emailing-subscribe-form-section section"},me={class:"courses__createx-emailing-subscribe-form-container container"},he=x(()=>e("div",{class:"section__decor"},null,-1)),ve={name:"Courses",props:{},setup(s){return(r,a)=>(d(),h("main",te,[ce,ae,e("div",ie,[e("div",_e,[u(re,{class:"courses__courses-grid"})])]),e("div",ne,[e("div",ue,[u(W,{class:"courses__reviews"})])]),e("div",de,[e("div",le,[u(D,{class:"courses__certificate"})])]),e("div",pe,[e("div",me,[u(O,{class:"courses__createx-emailing-subscribe-form"})]),he])]))}};var Qe=C(ve,[["__scopeId","data-v-2ad2f044"]]);export{Qe as default};
