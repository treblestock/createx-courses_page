import{d as n}from"./index.d7a498e8.js";import{d as a,p as s}from"./index.0eb7d62f.js";const i=n("storeCreatex",{state:()=>({socials:[],contacts:null,benefits:null}),getters:{},actions:{async fetchContacts(){const t=await a.get("/contacts").then(e=>JSON.parse(e,s));if(!t)throw new Error("api failed (no answer) on: storeTeacher.fetchContacts()");this.contacts=t},async fetchSocials(){const t=await a.get("/socials").then(e=>JSON.parse(e,s));if(!t)throw new Error("api failed (no answer) on: storeTeacher.fetchSocials()");this.socials=t},async fetchBenefits(){const t=await a.get("/benefits").then(e=>JSON.parse(e,s));if(!t)throw new Error("api failed (no answer) on: storeTeacher.fetchBenefits()");this.benefits=t}},async onRegister(t){await t.fetchContacts(),await t.fetchSocials(),await t.fetchBenefits()}});export{i as u};
