import{w as t}from"./index-3744fd42.js";import{T as i}from"./index-6e32065f.js";const p=t(!1),l=t("");function c(s,r){try{let e=s in localStorage?JSON.parse(localStorage[s]):r;const o=t(e),n=a=>{o.set(e=a),localStorage[s]=JSON.stringify(e)};return{subscribe:o.subscribe,set:n,update:a=>n(a(e))}}catch{return t(r)}}const d=c("recent_searches",[]),g=()=>{const s=i("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session,updated:s.updated}},v={subscribe(s){return g().page.subscribe(s)}};export{v as p,l as q,d as r,p as s};