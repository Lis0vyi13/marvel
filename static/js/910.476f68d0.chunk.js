"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[910],{834:(e,t,s)=>{s.d(t,{Z:()=>i});var a=s(184);const i=()=>(0,a.jsx)("div",{className:"loadingio-spinner-ellipsis-6iszfz84awk list-loader",children:(0,a.jsxs)("div",{className:"ldio-xlbd2dzlxer",children:[(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{})]})})},214:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var a=s(763);const i=s.p+"static/media/comics-hulk.68bb4cb92fca5bb1c878.png",c=s.p+"static/media/marvel-squad.ee2bad89abcc27e7685f.png";var n=s(184);const r=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{style:{height:130},src:i,alt:"hulk"}),(0,n.jsx)("img",{src:c,alt:"marvel squad"}),(0,n.jsx)("h2",{className:"comics-header__title",children:"New comics every week! Stay tuned!"})]});var o=s(791),l=s(87);const m=e=>{let{id:t,thumbnail:s,title:a,price:i}=e;return(0,n.jsx)(l.rU,{to:"./".concat(t),children:(0,n.jsxs)("div",{className:"comics-item",children:[(0,n.jsx)("img",{className:"comic-img",src:s,alt:"sef"}),(0,n.jsx)("h2",{className:"comic-title",children:a}),(0,n.jsx)("h4",{className:"comic-price",children:i})]})})};var h=s(647),d=s(834),u=s(908),p=s(916);const v=new h.Z,f=()=>{const[e,t]=(0,o.useState)([]),[s,i]=(0,o.useState)([]),[c,r]=(0,o.useState)(2),[l,h]=(0,o.useState)(!0);(0,o.useEffect)((()=>{(async()=>{const e=await v.getComics(c);t((t=>[...t,...e])),h(!1)})()}),[c]),(0,o.useEffect)((()=>{const e=f();i(e)}),[e]),(0,o.useEffect)((()=>{let e;const t=()=>{clearTimeout(e),e=setTimeout((()=>{window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight-50&&r((e=>e+20))}),20)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}}),[]);const f=()=>e.map(((e,t)=>{const s=v._transformComics(e);return(0,n.jsx)(m,{...s},t)}));return(0,n.jsx)(a.E.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},custom:2,variants:u.oO,className:"comics-list",children:l?(0,n.jsx)(p.Z,{}):(0,n.jsx)(n.Fragment,{children:e.length>0?(0,n.jsxs)(n.Fragment,{children:[s,(0,n.jsx)(d.Z,{})]}):(0,n.jsx)("p",{children:"No comics found."})})})},g=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("section",{className:"comics",children:(0,n.jsxs)("div",{className:"container comics-container",children:[(0,n.jsx)(a.E.header,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:u.oO,custom:2,className:"comics-header",children:(0,n.jsx)(r,{})}),(0,n.jsx)("main",{style:{display:"flex",flexDirection:"column"},className:"comics-main",children:(0,n.jsx)(f,{})})]})})})},647:(e,t,s)=>{s.d(t,{Z:()=>a});const a=class{constructor(){var e=this;this.key="333d74a765f835dd4bccc16126e65eaa",this._baseOffset=1253,this.getAllCharacters=async e=>{const t=await fetch("https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=".concat(e,"&apikey=").concat(this.key));return t.ok||console.error("Fetch error"),await t.json()},this.getCharactersList=async e=>(await this.getAllCharacters(e)).data.results.map(this._transformCharacter),this.getCharacter=async e=>{const t=await fetch("https://gateway.marvel.com:443/v1/public/characters/".concat(e,"?apikey=").concat(this.key));if(!t.ok)throw new Error("Failed to fetch character");return await t.json()},this.getCharInfo=async e=>(await this.getCharacter(e)).data.results.map(this._transformCharacter),this.getComics=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;const s=await fetch("https://gateway.marvel.com:443/v1/public/comics?offset=".concat(t,"&apikey=").concat(e.key));return(await s.json()).data.results},this.getComic=async e=>{const t=await fetch("https://gateway.marvel.com:443/v1/public/comics/".concat(e,"?apikey=").concat(this.key));return(await t.json()).data.results.map(this._transformComics)[0]},this._transformCharacter=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items.slice(0,9)}),this._transformComics=e=>{var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"Not available"}}}}}}]);
//# sourceMappingURL=910.476f68d0.chunk.js.map