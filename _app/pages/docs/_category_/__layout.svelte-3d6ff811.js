import{S as V,i as z,s as D,e as d,k as w,c as m,a as v,d as g,m as q,b as _,U as E,g as L,F as p,K as M,G as C,n as A,L as N,M as F,w as G,O as K,x as O,y as P,z as Q,P as J,Q as W,R as X,r as H,p as T,C as Y}from"../../../chunks/index-a86ccbc9.js";import{c as k}from"../../../chunks/singletons-d1fb5791.js";import{p as Z}from"../../../chunks/stores-839f72ad.js";k.disable_scroll_handling;k.goto;k.invalidate;k.prefetch;k.prefetch_routes;k.before_navigate;const x=k.after_navigate;function $(r,e,t){const o=r.slice();return o[8]=e[t],o}function I(r,e,t){const o=r.slice();return o[11]=e[t],o}function j(r,e,t){const o=r.slice();return o[11]=e[t],o}function B(r){let e,t=r[11].sections,o=[];for(let c=0;c<t.length;c+=1)o[c]=R(j(r,t,c));return{c(){e=d("ul");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=m(c,"UL",{class:!0});var h=v(e);for(let l=0;l<o.length;l+=1)o[l].l(h);h.forEach(g),this.h()},h(){_(e,"class","svelte-d0gm4q")},m(c,h){L(c,e,h);for(let l=0;l<o.length;l+=1)o[l].m(e,null)},p(c,h){if(h&3){t=c[11].sections;let l;for(l=0;l<t.length;l+=1){const a=j(c,t,l);o[l]?o[l].p(a,h):(o[l]=R(a),o[l].c(),o[l].m(e,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=t.length}},d(c){c&&g(e),M(o,c)}}}function R(r){let e,t,o=r[11].title+"",c,h;return{c(){e=d("li"),t=d("a"),h=w(),this.h()},l(l){e=m(l,"LI",{class:!0});var a=v(e);t=m(a,"A",{class:!0,href:!0,"sveltekit:prefetch":!0});var n=v(t);n.forEach(g),h=q(a),a.forEach(g),this.h()},h(){_(t,"class","nested subsection svelte-d0gm4q"),_(t,"href",c=r[11].path),_(t,"sveltekit:prefetch",""),E(t,"active",r[11].path===r[1]),_(e,"class","svelte-d0gm4q")},m(l,a){L(l,e,a),p(e,t),t.innerHTML=o,p(e,h)},p(l,a){a&1&&o!==(o=l[11].title+"")&&(t.innerHTML=o),a&1&&c!==(c=l[11].path)&&_(t,"href",c),a&3&&E(t,"active",l[11].path===l[1])},d(l){l&&g(e)}}}function S(r){let e,t,o,c=r[11].title+"",h,l,a,n=r[8].path===r[2].url.pathname&&B(r);return{c(){e=d("li"),t=d("a"),o=d("b"),l=w(),n&&n.c(),a=w(),this.h()},l(s){e=m(s,"LI",{class:!0});var i=v(e);t=m(i,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var u=v(t);o=m(u,"B",{});var f=v(o);f.forEach(g),u.forEach(g),l=q(i),n&&n.l(i),a=q(i),i.forEach(g),this.h()},h(){_(t,"class","subsection svelte-d0gm4q"),_(t,"sveltekit:prefetch",""),_(t,"href",h=r[11].path),E(t,"active",r[11].path===r[1]),_(e,"class","svelte-d0gm4q")},m(s,i){L(s,e,i),p(e,t),p(t,o),o.innerHTML=c,p(e,l),n&&n.m(e,null),p(e,a)},p(s,i){i&1&&c!==(c=s[11].title+"")&&(o.innerHTML=c),i&1&&h!==(h=s[11].path)&&_(t,"href",h),i&3&&E(t,"active",s[11].path===s[1]),s[8].path===s[2].url.pathname?n?n.p(s,i):(n=B(s),n.c(),n.m(e,a)):n&&(n.d(1),n=null)},d(s){s&&g(e),n&&n.d()}}}function U(r){let e,t,o=r[8].title+"",c,h,l,a,n=r[8].sections,s=[];for(let i=0;i<n.length;i+=1)s[i]=S(I(r,n,i));return{c(){e=d("li"),t=d("a"),h=w(),l=d("ul");for(let i=0;i<s.length;i+=1)s[i].c();a=w(),this.h()},l(i){e=m(i,"LI",{class:!0});var u=v(e);t=m(u,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var f=v(t);f.forEach(g),h=q(u),l=m(u,"UL",{class:!0});var b=v(l);for(let y=0;y<s.length;y+=1)s[y].l(b);b.forEach(g),a=q(u),u.forEach(g),this.h()},h(){_(t,"class","section svelte-d0gm4q"),_(t,"sveltekit:prefetch",""),_(t,"href",c=r[8].path),E(t,"active",r[8].path===r[1]),_(l,"class","svelte-d0gm4q"),_(e,"class","svelte-d0gm4q")},m(i,u){L(i,e,u),p(e,t),t.innerHTML=o,p(e,h),p(e,l);for(let f=0;f<s.length;f+=1)s[f].m(l,null);p(e,a)},p(i,u){if(u&1&&o!==(o=i[8].title+"")&&(t.innerHTML=o),u&1&&c!==(c=i[8].path)&&_(t,"href",c),u&3&&E(t,"active",i[8].path===i[1]),u&7){n=i[8].sections;let f;for(f=0;f<n.length;f+=1){const b=I(i,n,f);s[f]?s[f].p(b,u):(s[f]=S(b),s[f].c(),s[f].m(l,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=n.length}},d(i){i&&g(e),M(s,i)}}}function ee(r){let e,t,o,c,h=r[0],l=[];for(let a=0;a<h.length;a+=1)l[a]=U($(r,h,a));return{c(){e=d("nav"),t=d("ul");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=m(a,"NAV",{class:!0});var n=v(e);t=m(n,"UL",{class:!0});var s=v(t);for(let i=0;i<l.length;i+=1)l[i].l(s);s.forEach(g),n.forEach(g),this.h()},h(){_(t,"class","sidebar svelte-d0gm4q"),_(e,"class","svelte-d0gm4q")},m(a,n){L(a,e,n),p(e,t);for(let s=0;s<l.length;s+=1)l[s].m(t,null);o||(c=[C(window,"scroll",r[4]),C(window,"resize",r[3])],o=!0)},p(a,[n]){if(n&7){h=a[0];let s;for(s=0;s<h.length;s+=1){const i=$(a,h,s);l[s]?l[s].p(i,n):(l[s]=U(i),l[s].c(),l[s].m(t,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=h.length}},i:A,o:A,d(a){a&&g(e),M(l,a),o=!1,N(c)}}}function te(r,e,t){let o;F(r,Z,u=>t(2,o=u));let{contents:c=[]}=e,h=null,l,a,n=[];G(async()=>{await document.fonts.ready,s(),i()}),x(()=>{s(),i()});function s(){l=document.querySelector(".content");const{top:u}=l.getBoundingClientRect();a=l.querySelectorAll("[id]:not([data-scrollignore])"),n=Array.from(a).map(f=>f.getBoundingClientRect().top-u)}function i(){const{top:u}=l.getBoundingClientRect();let f=a.length;for(;f--;)if(n[f]+u<120){const b=a[f];t(1,h=`${o.url.pathname}#${b.id}`);return}t(1,h=o.url.pathname)}return r.$$set=u=>{"contents"in u&&t(0,c=u.contents)},[c,h,o,s,i]}class le extends V{constructor(e){super(),z(this,e,te,ee,D,{contents:0})}}function se(r){let e,t,o,c,h;const l=r[4].default,a=K(l,r,r[3],null);return c=new le({props:{contents:r[0]}}),{c(){e=d("div"),a&&a.c(),t=w(),o=d("div"),O(c.$$.fragment),this.h()},l(n){e=m(n,"DIV",{class:!0});var s=v(e);a&&a.l(s),t=q(s),o=m(s,"DIV",{class:!0});var i=v(o);P(c.$$.fragment,i),i.forEach(g),s.forEach(g),this.h()},h(){_(o,"class","toc-container svelte-1g8am1f"),_(e,"class","grid svelte-1g8am1f")},m(n,s){L(n,e,s),a&&a.m(e,null),p(e,t),p(e,o),Q(c,o,null),h=!0},p(n,[s]){a&&a.p&&(!h||s&8)&&J(a,l,n,n[3],h?X(l,n[3],s,null):W(n[3]),null);const i={};s&1&&(i.contents=n[0]),c.$set(i)},i(n){h||(H(a,n),H(c.$$.fragment,n),h=!0)},o(n){T(a,n),T(c.$$.fragment,n),h=!1},d(n){n&&g(e),a&&a.d(n),Y(c)}}}const re=!0;async function ce({params:r,fetch:e}){const t=await e(`/docs/${r.category}.json`),o=await e(`/docs/${r.category}/content.json`);return{props:{sections:await t.json(),content:await o.json(),params:r}}}function ne(r,e,t){let o,{$$slots:c={},$$scope:h}=e,{sections:l}=e,{params:a}=e;return r.$$set=n=>{"sections"in n&&t(1,l=n.sections),"params"in n&&t(2,a=n.params),"$$scope"in n&&t(3,h=n.$$scope)},r.$$.update=()=>{r.$$.dirty&6&&t(0,o=l.map(n=>({path:`/docs/${a.category}/${n.slug}`,title:n.title,sections:n.sections.map(s=>({path:`/docs/${a.category}/${n.slug}#${s.slug}`,title:s.title,sections:s.sections.map(i=>({path:`/docs/${a.category}/${n.slug}#${i.slug}`,title:i.title}))}))})))},[o,l,a,h,c]}class he extends V{constructor(e){super(),z(this,e,ne,se,D,{sections:1,params:2})}}export{he as default,ce as load,re as prerender};
