import{d as h,_ as v,k as u,r as l,o as n,c as _,l as a,a as o,t as c,b as w,C as f,w as R,F as g,A as y,m as C,B as x}from"./index.b76111c9.js";import{d as S,p as b}from"./index.b97b139f.js";const p=h("storeReviews",{state:()=>({reviews:[]}),getters:{findReview:e=>(r,s)=>(s!=null||(s=e.reviews),s.find(t=>t.id==r))},actions:{async fetchReviews(){const e=await S.get("/reviews").then(r=>JSON.parse(r,b));if(!e)throw new Error("api failed (no answer) on: storeTeacher.fetchreviews()");this.reviews=e}},async onRegister(e){await e.fetchReviews()}});const k={class:"review-card"},I={key:0,class:"review-card__body"},N={class:"review-card__text"},B={class:"review-card__student"},E={class:"review-card__student-img"},T={class:"review-card__student-body"},V={class:"review-card__student-name"},A={class:"review-card__student-pos"},D={name:"ReviewCard",props:{id:Number},setup(e){const r=e,s=p(),t=u(()=>s.findReview(r.id));return(m,d)=>{const i=l("Img");return n(),_("article",k,[a(t)?(n(),_("div",I,[o("div",N,c(a(t).body),1),o("div",B,[o("div",E,[w(i,{src:a(t).student.img},null,8,["src"])]),o("div",T,[o("div",V,c(a(t).student.name||"name"),1),o("div",A,c(a(t).student.pos)+", "+c(a(t).student.course),1)])])])):f("",!0)])}}};var F=v(D,[["__scopeId","data-v-41a82e63"]]);const L={class:"reviews"},O={name:"Reviews",setup(e){const r=p(),s=u(()=>r.reviews);return(t,m)=>{const d=l("SliderCasual");return n(),_("section",L,[w(d,{label:"TESTIMONIALS",title:"What our students say",itemsCount:a(s).length},{default:R(()=>[(n(!0),_(g,null,y(a(s),i=>(n(),C(F,x({key:i.id},i),null,16))),128))]),_:1},8,["itemsCount"])])}}};var J=v(O,[["__scopeId","data-v-cf5d7514"]]);export{J as R};
