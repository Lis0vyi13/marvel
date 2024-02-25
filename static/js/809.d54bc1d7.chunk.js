"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[809],{5424:(e,s,a)=>{a.r(s),a.d(s,{default:()=>m});var i=a(2791),n=a(7689),c=a(1087),l=a(5763),t=a(4270),r=a(6916),g=a(8948),x=a(2908),d=a(5647),o=a(184);const h=new d.Z,j=()=>(0,o.jsxs)("svg",{fill:"#f0141e",height:"30px",width:"30px",style:{paddingRight:10,marginTop:"-5px"},version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26.676 26.676",children:[(0,o.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,o.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("g",{id:"SVGRepo_iconCarrier",children:(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{d:"M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59 c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815 C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029 c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562 C26.18,21.891,26.141,21.891,26.105,21.891z"}),(0,o.jsx)("g",{}),(0,o.jsx)("g",{}),(0,o.jsx)("g",{}),(0,o.jsx)("g",{}),(0,o.jsx)("g",{}),(0,o.jsx)("g",{}),(0,o.jsx)("g",{}),(0,o.jsx)("g",{}),(0,o.jsx)("g",{}),(0,o.jsx)("g",{}),(0,o.jsx)("g",{}),(0,o.jsx)("g",{}),(0,o.jsx)("g",{}),(0,o.jsx)("g",{}),(0,o.jsx)("g",{}),(0,o.jsx)("g",{})]})})]}),p=e=>{let{data:s,type:a}=e;const i=(0,n.s0)();let l=null;switch(a){case"comics":l=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.q,{children:[(0,o.jsx)("title",{children:s.title}),(0,o.jsx)("meta",{name:"description",content:"".concat(s.title," page")})]}),(0,o.jsx)("div",{className:"single-page__image",children:(0,o.jsx)("img",{className:"single-page__img",src:s.thumbnail,alt:s.title})}),(0,o.jsxs)("div",{className:"single-page__content",children:[(0,o.jsx)("h2",{className:"single-page__title",children:s.title}),(0,o.jsx)("h4",{className:"single-page__description",children:s.description}),(0,o.jsx)("h6",{className:"single-page__pages",children:s.pageCount}),(0,o.jsxs)("h6",{className:"single-page__language",children:["Language: ",s.language]}),(0,o.jsx)("h3",{className:"single-page__price",children:s.price})]})]});break;case"char":l=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.q,{children:[(0,o.jsx)("title",{children:s[0].name}),(0,o.jsx)("meta",{name:"description",content:"".concat(s[0].name," page")})]}),(0,o.jsx)("div",{className:"single-page__image",children:(0,o.jsx)("img",{className:"single-page__img",src:s[0].thumbnail,alt:s[0].name})}),(0,o.jsxs)("div",{className:"single-page__content",children:[(0,o.jsx)("h2",{className:"single-page__title",children:s[0].name}),(0,o.jsx)("h4",{className:"single-page__description",children:s[0].description})]})]})}return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c.rU,{className:"single-page__back",onClick:()=>i(-1),children:[(0,o.jsx)(j,{}),"Back to all"]}),l]})},m=e=>{let{type:s}=e;const[a,c]=(0,i.useState)(null),[t,d]=(0,i.useState)(!1),[j,m]=(0,i.useState)(!1),_=(0,i.useRef)(),{comicId:u,charId:v}=(0,n.UO)(),N=u||v;(0,i.useEffect)((()=>{(async()=>{try{m(!0);const e="comics"===s?await h.getComic(N):await h.getCharInfo(N,!1);c(e),d(!1)}catch(w){d(!0),console.error("Error fetching character information:",w)}finally{m(!1)}})()}),[]);const w=!j&&t?(0,o.jsx)(g.Z,{}):null,f=j&&(0,o.jsx)(r.Z,{}),k=!j&&a?(0,o.jsx)(p,{data:a,type:s}):null;return k&&(_.current.style.backgroundColor="rgba(255, 0, 0, 0.2)"),(0,o.jsx)(l.E.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:x.UD,custom:2,className:"single-page",children:(0,o.jsx)("div",{className:"container single-page-container",children:(0,o.jsxs)("div",{ref:_,className:"single-page__block",children:[k,w,f]})})})}}}]);
//# sourceMappingURL=809.d54bc1d7.chunk.js.map