import{_ as p,y as $,z as x,r as m,o as a,c,a as e,b as t,w as l,p as u,j as h,x as P,e as b,k as y,F as C,A as k,m as I,B as E,l as _,t as d,C as S}from"./index.d7a498e8.js";import{u as T}from"./Courses.60ba8e00.js";import{C as V}from"./CourseCard_row.f908a5bd.js";import{u as q}from"./Createx.e03622e7.js";import{u as A}from"./EventCard.vue_vue_type_style_index_0_scoped_true_lang.0aa01436.js";import{C as G}from"./Certificate.feb03bdb.js";import{T as F,B as N}from"./BlogPostsGridPreview.ceaa79df.js";import{R}from"./Reviews.d48f6d4a.js";import{C as W}from"./CreatexEmailingSubscribeForm.5153bc3b.js";import"./index.0eb7d62f.js";import"./Teachers.d7d0015a.js";import"./BlogPostCard.80f364d2.js";/* empty css                                                                       */var M="/assets/why.97ab4811.jpg";const j=s=>(u("data-v-a7c4ac90"),s=s(),h(),s),D={class:"why"},O=j(()=>e("div",{class:"why__img"},[e("img",{src:M,alt:""})],-1)),z={class:"why__body"},U=P('<div class="why__label title_label" data-v-a7c4ac90>Who we are</div><h2 class="why__title title" data-v-a7c4ac90>Why Createx?</h2><ul class="why__list" data-v-a7c4ac90><li class="why__list-item" data-v-a7c4ac90>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li><li class="why__list-item" data-v-a7c4ac90>Vulputate placerat amet pulvinar lorem nisl.</li><li class="why__list-item" data-v-a7c4ac90>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li><li class="why__list-item" data-v-a7c4ac90>Etiam duis lobortis in fames ultrices commodo nibh.</li><li class="why__list-item" data-v-a7c4ac90>Tincidunt sagittis neque sem ac eget.</li><li class="why__list-item" data-v-a7c4ac90>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</li></ul>',3),H=b("More about us"),J={name:"WhyCreatex",props:{},setup(s){return $(),x(),(r,o)=>{const i=m("AppLink");return a(),c("section",D,[O,e("div",z,[U,t(i,{class:"why__btn btn",to:{name:"about"}},{default:l(()=>[H]),_:1})])])}}};var K=p(J,[["__scopeId","data-v-a7c4ac90"]]);const Q=s=>(u("data-v-05ae48ee"),s=s(),h(),s),X={class:"courses"},Y={class:"courses__header"},Z=Q(()=>e("div",{class:"courses__text"},[e("div",{class:"courses__label label"},"Ready to learn?"),e("h2",{class:"courses__title title"},"Featured Courses")],-1)),ee=b("View all courses"),se={class:"courses__items"},te={name:"CoursesGridPreview",props:{},setup(s){$(),x();const r=T(),o=y(()=>r.courses.slice(0,6));return(i,g)=>{const v=m("AppLink");return a(),c("section",X,[e("div",Y,[Z,t(v,{class:"courses__btn btn-outl",to:{name:"courses"}},{default:l(()=>[ee]),_:1})]),e("div",se,[(a(!0),c(C,null,k(_(o),n=>(a(),I(V,E({key:n.id},n),null,16))),128))])])}}};var ie=p(te,[["__scopeId","data-v-05ae48ee"]]);const w=s=>(u("data-v-47d28348"),s=s(),h(),s),ae={class:"benefits"},_e=w(()=>e("div",{class:"benefits__header"},[e("div",{class:"benefits__label title_label"},"Our benefits"),e("div",{class:"benefits__title title"},"That\u2019s how we do it")],-1)),oe=w(()=>e("div",{class:"benefits__tabs-inset"}," Experienced Tutors ",-1)),ne=w(()=>e("div",{class:"benefits__tabs-inset"}," Feedback & Support ",-1)),ce=w(()=>e("div",{class:"benefits__tabs-inset"}," 24/7 Online Library ",-1)),re=w(()=>e("div",{class:"benefits__tabs-inset"}," Community ",-1)),de={class:"benefits__tabs-body-item-body"},le={class:"benefits__tabs-body-item-title"},ve={class:"benefits__tabs-body-item-text"},me={class:"benefits__tabs-body-item-img"},pe={name:"Benefits",setup(s){const r=q(),o=y(()=>r.benefits);return(i,g)=>{const v=m("Img"),n=m("Tabs");return a(),c("section",ae,[_e,_(o)?(a(),I(n,{key:0,class:"benefits__tabs",insetsClass:"benefits__tabs-insets",bodyClass:"benefits__tabs-body"},{insets:l(()=>[oe,ne,ce,re]),body:l(()=>[(a(!0),c(C,null,k(_(o),(f,L)=>(a(),c("div",E({class:"benefits__tabs-body-item",key:f.id},f),[e("div",de,[e("div",le,d(f.title),1),e("div",ve,d(f.text),1)]),e("div",me,[t(v,{src:`createx-courses_page/src/assets/img/decor/illustrations/0${L+1}.webp`},null,8,["src"])])],16))),128))]),_:1})):S("",!0)])}}};var ue=p(pe,[["__scopeId","data-v-47d28348"]]);const he={key:0,class:"event-preview-card"},be={class:"event-preview-card__body"},we={class:"event-preview-card__date-date"},fe={class:"event-preview-card__when"},ye={class:"event-preview-card__date-month"},ge={class:"event-preview-card__time"},$e={class:"event-preview-card__when"},xe={class:"event-preview-card__event-type"},Ce=b("View more"),ke={name:"EventCard_row",props:{id:[Number,String]},setup(s){const r=s;$(),x();const o=A(),i=y(()=>o.findEvent(r.id));return(g,v)=>{const n=m("AppLink");return _(i)?(a(),c("article",he,[e("div",be,[e("div",we,d(_(i).date.date),1),e("div",fe,[e("div",ye,d(_(i).date.month),1),e("div",ge,d(_(i).time),1)]),e("div",$e,[t(n,{class:"event-preview-card__title",to:{course:"event",parmas:{eventId:_(i).id}}},{default:l(()=>[b(d(_(i).title),1)]),_:1},8,["to"]),e("div",xe,d(_(i).eventType),1)])]),t(n,{class:"event-preview-card__btn btn",to:{name:"event",params:{eventId:_(i).id}}},{default:l(()=>[Ce]),_:1},8,["to"])])):S("",!0)}}};var Ie=p(ke,[["__scopeId","data-v-6731ecb7"]]);const B=s=>(u("data-v-0e2db54c"),s=s(),h(),s),Ee={class:"events-grid"},Se=B(()=>e("header",{class:"events-grid__header"},[e("div",{class:"events-grid__label label"},"Ready to learn?"),e("h2",{class:"events-grid__title title"},"Featured Events")],-1)),Ae={class:"events-grid__items"},Be={class:"events-grid__footer"},Le=B(()=>e("div",{class:"events-grid__want-more"}," Do you want more? ",-1)),Pe=b("explore all events"),Te={name:"EventsGridPreview",setup(s){const r=A(),o=y(()=>r.events.slice(0,3));return(i,g)=>{const v=m("AppLink");return a(),c("section",Ee,[Se,e("section",Ae,[(a(!0),c(C,null,k(_(o),n=>(a(),I(Ie,E({key:n.id},n),null,16))),128))]),e("footer",Be,[Le,t(v,{class:"events-grid__btn btn",to:{name:"events"}},{default:l(()=>[Pe]),_:1})])])}}};var Ve=p(Te,[["__scopeId","data-v-0e2db54c"]]);const qe=s=>(u("data-v-f3d5d0da"),s=s(),h(),s),Ge={class:"main"},Fe={class:"main__why-createx-section section"},Ne={class:"main__why-createx-container container"},Re={class:"main__courses-grid-preview-section section"},We={class:"main__courses-grid-preview-container container"},Me={class:"main__benefits-section section"},je={class:"main__benefits-container container"},De={class:"main__events-grid-preview-section section"},Oe={class:"main__events-grid-preview-container container"},ze={class:"main__certificate-section section"},Ue={class:"main__certificate-container container"},He={class:"main__team-section section"},Je={class:"main__team-container container"},Ke={class:"main__reviews-section section"},Qe={class:"main__reviews-container container"},Xe={class:"main__blog-post-grid-preview-section section"},Ye={class:"main__blog-post-grid-preview-container container"},Ze={class:"main__createx-emailing-subscribe-form-section section"},es={class:"main__createx-emailing-subscribe-form-container container"},ss=qe(()=>e("div",{class:"section__decor"},null,-1)),ts={name:"Main",setup(s){return(r,o)=>(a(),c("main",Ge,[e("div",Fe,[e("div",Ne,[t(K,{class:"main__why-createx"})])]),e("div",Re,[e("div",We,[t(ie,{class:"main__courses-grid-preview"})])]),e("div",Me,[e("div",je,[t(ue,{class:"main__benefits"})])]),e("div",De,[e("div",Oe,[t(Ve,{class:"main__events-grid-preview"})])]),e("div",ze,[e("div",Ue,[t(G,{class:"main__certificate"})])]),e("div",He,[e("div",Je,[t(F,{class:"main__team"})])]),e("div",Ke,[e("div",Qe,[t(R,{class:"main__reviews"})])]),e("div",Xe,[e("div",Ye,[t(N,{class:"main__blog-post-grid-preview"})])]),e("div",Ze,[e("div",es,[t(W,{class:"main__createx-emailing-subscribe-form"})]),ss])]))}};var hs=p(ts,[["__scopeId","data-v-f3d5d0da"]]);export{hs as default};
