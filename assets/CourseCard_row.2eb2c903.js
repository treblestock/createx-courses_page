import{_ as m,y as C,z as h,k as a,r as c,l as e,o as v,c as f,a as o,b as _,n as g,t as r,w as y,e as k,C as w}from"./index.816269b6.js";import{u as x}from"./Courses.beaf8411.js";import{u as b}from"./Teachers.54849ed6.js";const I={key:0,class:"course-card"},N={class:"course-card__img"},S={class:"course-card__body"},T={class:"course-card__bottom"},V={class:"course-card__price price"},B={class:"course-card__teacher"},L={name:"CourseCard_row",props:{id:[Number,String]},setup(n){const d=n;C(),h();const u=b(),i=x(),s=a(()=>i.findCourse(d.id)),t=a(()=>u.findTeacher(s.value.teacherId));return(z,A)=>{const p=c("Img"),l=c("AppLink");return e(t)?(v(),f("article",I,[o("div",N,[_(p,{src:e(t).imgCourse},null,8,["src"])]),o("div",S,[o("div",{class:g(["course-card__category","_"+e(s).category.split(" ")[0].toLowerCase()])},r(e(s).category),3),_(l,{class:"course-card__title link",to:{name:"course",params:{courseId:e(s).id}}},{default:y(()=>[k(r(e(s).title),1)]),_:1},8,["to"]),o("div",T,[o("span",V,r(e(s).price),1),o("span",B,"by "+r(e(t).name),1)])])])):w("",!0)}}};var j=m(L,[["__scopeId","data-v-cf9e2a0e"]]);export{j as C};
