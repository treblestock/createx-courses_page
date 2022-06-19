import{_ as p,y as $,z as x,r as m,o as _,c,a as e,b as t,w as l,p as u,j as h,x as P,e as b,k as y,F as C,A as k,m as I,B as E,l as a,t as d,C as S}from"./index.b76111c9.js";import{u as T}from"./Courses.83cc0180.js";import{C as V}from"./CourseCard_row.808dc0cf.js";import{u as q}from"./Createx.e2a20987.js";import{u as A}from"./EventCard.vue_vue_type_style_index_0_scoped_true_lang.bb47b710.js";import{C as G}from"./Certificate.7d20af52.js";import{T as F,B as N}from"./BlogPostsGridPreview.4bf090ab.js";import{R}from"./Reviews.8a95d47f.js";import{C as W}from"./CreatexEmailingSubscribeForm.20a131f3.js";import"./index.b97b139f.js";import"./Teachers.a388a30e.js";import"./BlogPostCard.0a26de3a.js";/* empty css                                                                       */var M="/createx-courses_page/img/content/why.jpg";const j=s=>(u("data-v-76d2ce6b"),s=s(),h(),s),D={class:"why"},O=j(()=>e("div",{class:"why__img"},[e("img",{src:M,alt:""})],-1)),z={class:"why__body"},U=P('<div class="why__label title_label" data-v-76d2ce6b>Who we are</div><h2 class="why__title title" data-v-76d2ce6b>Why Createx?</h2><ul class="why__list" data-v-76d2ce6b><li class="why__list-item" data-v-76d2ce6b>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li><li class="why__list-item" data-v-76d2ce6b>Vulputate placerat amet pulvinar lorem nisl.</li><li class="why__list-item" data-v-76d2ce6b>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li><li class="why__list-item" data-v-76d2ce6b>Etiam duis lobortis in fames ultrices commodo nibh.</li><li class="why__list-item" data-v-76d2ce6b>Tincidunt sagittis neque sem ac eget.</li><li class="why__list-item" data-v-76d2ce6b>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</li></ul>',3),H=b("More about us"),J={name:"WhyCreatex",props:{},setup(s){return $(),x(),(r,o)=>{const i=m("AppLink");return _(),c("section",D,[O,e("div",z,[U,t(i,{class:"why__btn btn",to:{name:"about"}},{default:l(()=>[H]),_:1})])])}}};var K=p(J,[["__scopeId","data-v-76d2ce6b"]]);const Q=s=>(u("data-v-05ae48ee"),s=s(),h(),s),X={class:"courses"},Y={class:"courses__header"},Z=Q(()=>e("div",{class:"courses__text"},[e("div",{class:"courses__label label"},"Ready to learn?"),e("h2",{class:"courses__title title"},"Featured Courses")],-1)),ee=b("View all courses"),se={class:"courses__items"},te={name:"CoursesGridPreview",props:{},setup(s){$(),x();const r=T(),o=y(()=>r.courses.slice(0,6));return(i,g)=>{const v=m("AppLink");return _(),c("section",X,[e("div",Y,[Z,t(v,{class:"courses__btn btn-outl",to:{name:"courses"}},{default:l(()=>[ee]),_:1})]),e("div",se,[(_(!0),c(C,null,k(a(o),n=>(_(),I(V,E({key:n.id},n),null,16))),128))])])}}};var ie=p(te,[["__scopeId","data-v-05ae48ee"]]);const w=s=>(u("data-v-2bceb10e"),s=s(),h(),s),_e={class:"benefits"},ae=w(()=>e("div",{class:"benefits__header"},[e("div",{class:"benefits__label title_label"},"Our benefits"),e("div",{class:"benefits__title title"},"That\u2019s how we do it")],-1)),oe=w(()=>e("div",{class:"benefits__tabs-inset"}," Experienced Tutors ",-1)),ne=w(()=>e("div",{class:"benefits__tabs-inset"}," Feedback & Support ",-1)),ce=w(()=>e("div",{class:"benefits__tabs-inset"}," 24/7 Online Library ",-1)),re=w(()=>e("div",{class:"benefits__tabs-inset"}," Community ",-1)),de={class:"benefits__tabs-body-item-body"},le={class:"benefits__tabs-body-item-title"},ve={class:"benefits__tabs-body-item-text"},me={class:"benefits__tabs-body-item-img"},pe={name:"Benefits",setup(s){const r=q(),o=y(()=>r.benefits);return(i,g)=>{const v=m("Img"),n=m("Tabs");return _(),c("section",_e,[ae,a(o)?(_(),I(n,{key:0,class:"benefits__tabs",insetsClass:"benefits__tabs-insets",bodyClass:"benefits__tabs-body"},{insets:l(()=>[oe,ne,ce,re]),body:l(()=>[(_(!0),c(C,null,k(a(o),(f,L)=>(_(),c("div",E({class:"benefits__tabs-body-item",key:f.id},f),[e("div",de,[e("div",le,d(f.title),1),e("div",ve,d(f.text),1)]),e("div",me,[t(v,{src:`/img/decor/illustrations/0${L+1}.webp`},null,8,["src"])])],16))),128))]),_:1})):S("",!0)])}}};var ue=p(pe,[["__scopeId","data-v-2bceb10e"]]);const he={key:0,class:"event-preview-card"},be={class:"event-preview-card__body"},we={class:"event-preview-card__date-date"},fe={class:"event-preview-card__when"},ye={class:"event-preview-card__date-month"},ge={class:"event-preview-card__time"},$e={class:"event-preview-card__when"},xe={class:"event-preview-card__event-type"},Ce=b("View more"),ke={name:"EventCard_row",props:{id:[Number,String]},setup(s){const r=s;$(),x();const o=A(),i=y(()=>o.findEvent(r.id));return(g,v)=>{const n=m("AppLink");return a(i)?(_(),c("article",he,[e("div",be,[e("div",we,d(a(i).date.date),1),e("div",fe,[e("div",ye,d(a(i).date.month),1),e("div",ge,d(a(i).time),1)]),e("div",$e,[t(n,{class:"event-preview-card__title",to:{course:"event",parmas:{eventId:a(i).id}}},{default:l(()=>[b(d(a(i).title),1)]),_:1},8,["to"]),e("div",xe,d(a(i).eventType),1)])]),t(n,{class:"event-preview-card__btn btn",to:{name:"event",params:{eventId:a(i).id}}},{default:l(()=>[Ce]),_:1},8,["to"])])):S("",!0)}}};var Ie=p(ke,[["__scopeId","data-v-6731ecb7"]]);const B=s=>(u("data-v-0e2db54c"),s=s(),h(),s),Ee={class:"events-grid"},Se=B(()=>e("header",{class:"events-grid__header"},[e("div",{class:"events-grid__label label"},"Ready to learn?"),e("h2",{class:"events-grid__title title"},"Featured Events")],-1)),Ae={class:"events-grid__items"},Be={class:"events-grid__footer"},Le=B(()=>e("div",{class:"events-grid__want-more"}," Do you want more? ",-1)),Pe=b("explore all events"),Te={name:"EventsGridPreview",setup(s){const r=A(),o=y(()=>r.events.slice(0,3));return(i,g)=>{const v=m("AppLink");return _(),c("section",Ee,[Se,e("section",Ae,[(_(!0),c(C,null,k(a(o),n=>(_(),I(Ie,E({key:n.id},n),null,16))),128))]),e("footer",Be,[Le,t(v,{class:"events-grid__btn btn",to:{name:"events"}},{default:l(()=>[Pe]),_:1})])])}}};var Ve=p(Te,[["__scopeId","data-v-0e2db54c"]]);const qe=s=>(u("data-v-f3d5d0da"),s=s(),h(),s),Ge={class:"main"},Fe={class:"main__why-createx-section section"},Ne={class:"main__why-createx-container container"},Re={class:"main__courses-grid-preview-section section"},We={class:"main__courses-grid-preview-container container"},Me={class:"main__benefits-section section"},je={class:"main__benefits-container container"},De={class:"main__events-grid-preview-section section"},Oe={class:"main__events-grid-preview-container container"},ze={class:"main__certificate-section section"},Ue={class:"main__certificate-container container"},He={class:"main__team-section section"},Je={class:"main__team-container container"},Ke={class:"main__reviews-section section"},Qe={class:"main__reviews-container container"},Xe={class:"main__blog-post-grid-preview-section section"},Ye={class:"main__blog-post-grid-preview-container container"},Ze={class:"main__createx-emailing-subscribe-form-section section"},es={class:"main__createx-emailing-subscribe-form-container container"},ss=qe(()=>e("div",{class:"section__decor"},null,-1)),ts={name:"Main",setup(s){return(r,o)=>(_(),c("main",Ge,[e("div",Fe,[e("div",Ne,[t(K,{class:"main__why-createx"})])]),e("div",Re,[e("div",We,[t(ie,{class:"main__courses-grid-preview"})])]),e("div",Me,[e("div",je,[t(ue,{class:"main__benefits"})])]),e("div",De,[e("div",Oe,[t(Ve,{class:"main__events-grid-preview"})])]),e("div",ze,[e("div",Ue,[t(G,{class:"main__certificate"})])]),e("div",He,[e("div",Je,[t(F,{class:"main__team"})])]),e("div",Ke,[e("div",Qe,[t(R,{class:"main__reviews"})])]),e("div",Xe,[e("div",Ye,[t(N,{class:"main__blog-post-grid-preview"})])]),e("div",Ze,[e("div",es,[t(W,{class:"main__createx-emailing-subscribe-form"})]),ss])]))}};var hs=p(ts,[["__scopeId","data-v-f3d5d0da"]]);export{hs as default};
