import{d as g,_ as m,y as b,z as h,k as u,r as l,l as o,o as f,c as P,a as t,b as d,t as r,n as y,w as n,e as i,C as B}from"./index.816269b6.js";import{d as v,p as k}from"./index.f140d08c.js";const w=g("storeBlogPosts",{state:()=>({blogPosts:[]}),getters:{tags:e=>e.blogPosts.reduce((a,c)=>(c.tags.forEach(s=>a.add(s)),a),new Set),findBlogPost:e=>(a,c)=>(c!=null||(c=e.blogPosts),c.find(s=>s.id==a))},actions:{async fetchBlogPosts(){const e=await v.get("/blogPosts").then(a=>JSON.parse(a,k));if(!e)throw new Error("api failed (no answer) on: storeTeacher.fetchblogPost()");this.blogPosts=e}},async onRegister(e){await e.fetchBlogPosts()}});const C={key:0,class:"blog-post-card"},x={class:"blog-post-card__img"},N={class:"blog-post-card__img-labels"},S={class:"blog-post-card__img-label"},I={class:"post-type"},R={class:"category"},T={class:"blog-post-card__body"},V={class:"blog-post-card__top"},E={class:"blog-post-card__category"},L={class:"blog-post-card__date"},z={class:"blog-post-card__time-to-read"},A={class:"blog-post-card__description"},D=i("Read"),H={name:"BlogPostCard",props:{id:[Number,String]},setup(e){const a=e;b(),h();const c=w(),s=u(()=>c.findBlogPost(a.id));return(J,O)=>{const p=l("Img"),_=l("AppLink");return o(s)?(f(),P("article",C,[t("div",x,[d(p,{src:o(s).img},null,8,["src"]),t("div",N,[t("div",S,[t("span",I,r(o(s).postType),1)]),t("div",{class:y(["blog-post-card__img-label blog-post-card__img-category","_"+o(s).category.toLowerCase()])},[t("span",R,r(o(s).category),1)],2)])]),t("div",T,[t("div",V,[t("span",E,r(o(s).category),1),t("span",L,r(o(s).date.date)+" "+r(o(s).date.month),1),t("span",z,r(o(s).timeToRead)+" min",1)]),d(_,{class:"blog-post-card__title link",to:{name:"blogPost",params:{blogPostId:o(s).id}}},{default:n(()=>[i(r(o(s).title),1)]),_:1},8,["to"]),t("div",A,r(o(s).description),1),d(_,{class:"blog-post-card__read-link link",to:{name:"blogPost",params:{blogPostId:o(s).id}}},{default:n(()=>[D]),_:1},8,["to"])])])):B("",!0)}}};var F=m(H,[["__scopeId","data-v-1e9b1492"]]);export{F as B,w as u};
