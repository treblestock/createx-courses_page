import{d as a}from"./index.4bf08954.js";import{d as o,p as n}from"./index.71aee973.js";const f=a("storeCourses",{state:()=>({courses:[]}),getters:{findCourse:e=>(r,s)=>(s!=null||(s=e.courses),s.find(t=>t.id==r))},actions:{async fetchCourses(){const e=await o.get("/courses").then(r=>JSON.parse(r,n));if(!e)throw new Error("api failed (no answer) on: storeTeacher.fetchcourses()");this.courses=e}},async onRegister(e){await e.fetchCourses()}});export{f as u};
