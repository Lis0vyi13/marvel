"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[406],{9834:(e,a,s)=>{s.d(a,{Z:()=>c});var t=s(184);const c=()=>(0,t.jsx)("div",{className:"loadingio-spinner-ellipsis-6iszfz84awk list-loader",children:(0,t.jsxs)("div",{className:"ldio-xlbd2dzlxer",children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{})]})})},5494:(e,a,s)=>{s.r(a),s.d(a,{default:()=>H});var t=s(2791),c=s(4270),i=s(5763);const n=s.p+"static/media/Spider-man.340a442c875a3eec7c81.png";var r=s(2908),l=s(184);const o=e=>(0,l.jsx)(i.E.main,{initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"main",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("section",{className:"main__container",children:[(0,l.jsx)(i.E.img,{variants:r.HN,custom:1,className:"main__bg-img",src:n,alt:"Spider man"}),(0,l.jsxs)("div",{className:"main__content",children:[(0,l.jsx)(i.E.h1,{custom:1,variants:r.vo,className:"main-title",children:"UNLEASH YOUR INNER HERO"}),(0,l.jsx)(i.E.h3,{custom:1.5,variants:r.vo,className:"main-description",children:"Empower yourself with our platform and delve into the vast world of characters and comics through the Marvel API. Discover the tales that have forged legendary icons."}),(0,l.jsx)(i.E.button,{custom:2.5,variants:r.vo,onClick:()=>{const a=e.randomCharBlock.current;window.scrollTo({behavior:"smooth",top:a.offsetTop-50})},className:"btn red-btn",children:"Get Started"})]})]})})});var h=s(5647);const d=e=>{let{title:a}=e;return(0,l.jsxs)(i.E.section,{className:"block-name",initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[(0,l.jsx)(i.E.h4,{variants:r.kc,className:"block-title",children:a}),(0,l.jsx)(i.E.div,{variants:r.ZF,className:"divider"})]})};var m=s(6916),x=s(8948);const u=s.p+"static/media/spiddy.d38e0fe771fb1a3d0dd4.png",j=e=>{let{state:a}=e;const{thumbnail:s,name:t,description:c,homepage:i,wiki:n}=a;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"random-char__character-thumb",children:(0,l.jsx)("img",{src:s,alt:"",className:"random-char__thumb"})}),(0,l.jsxs)("div",{className:"random-char__character-text",children:[(0,l.jsx)("div",{className:"random-char__character-name",children:(0,l.jsx)("p",{className:"random-char__character-name-title",children:t})}),(0,l.jsx)("div",{className:"random-char__character-description",children:(0,l.jsx)("p",{className:"random-char__character-description-text",children:c})}),(0,l.jsxs)("div",{className:"random-char__character-buttons",children:[(0,l.jsx)("a",{className:"btn random red-btn random-char__character-button",href:i,children:"Homepage"}),(0,l.jsx)("a",{className:"btn random-char__character-button gray-btn",href:n,children:"Wiki"})]})]})]})},_=e=>{const[a,s]=(0,t.useState)(!0),[c,n]=(0,t.useState)(!1),[o,_]=(0,t.useState)(!0),[f,v]=(0,t.useState)({name:"Not found",description:"Empty details, no description found here",thumbnail:"",homepage:"",wiki:""}),b=(0,t.useRef)(null),{setRandomChar:N,title:g}=e,p=new h.Z;(0,t.useEffect)((()=>(N(b),w(),()=>{_(!1)})),[]);const w=async()=>{s(!0),n(!1);try{const a=Math.floor(400*Math.random()+1011e3),s=(await p.getCharInfo(a))[0];v({name:s.name||"Not found",description:(e=s.description,(e.length>118?e.slice(0,115)+"...":e)||"Empty details, no description found here"),thumbnail:s.thumbnail,homepage:s.homepage,wiki:s.wiki})}catch{o&&(C(),y())}finally{y()}var e},y=()=>{s(!1)},C=()=>{n(!0)},E=a&&(0,l.jsx)(m.Z,{}),k=c&&(0,l.jsx)(x.Z,{}),S=!(E||k)&&(0,l.jsx)(j,{state:f});return(0,l.jsx)("section",{ref:b,className:"random-char",children:(0,l.jsxs)("div",{className:"container random-char__container",children:[(0,l.jsx)(d,{title:g}),(0,l.jsxs)(i.E.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"random-char__content",children:[(0,l.jsx)(i.E.div,{variants:r.UD,custom:1,className:"random-char__character",children:(0,l.jsxs)("div",{className:"random-char__character-content",children:[E,k,S]})}),(0,l.jsxs)(i.E.div,{variants:r.UD,custom:3,className:"random-char__try-it",children:[(0,l.jsx)("img",{className:"random-char__try-it-image",src:u,alt:"mini spider man"}),(0,l.jsxs)("div",{className:"random-char__try-it-content",children:[(0,l.jsx)("div",{className:"random-char__try-it-text",children:(0,l.jsxs)("p",{className:"random-char__try-it-text-content",children:["Random character for today! ",(0,l.jsx)("br",{})," Do you want to get to know him better?"]})}),(0,l.jsxs)("div",{className:"random-char__try-it-cta",children:[(0,l.jsx)("p",{className:"random-char__try-it-text-content",children:"Or choose another one"}),(0,l.jsx)("button",{onClick:w,className:"btn red-btn random-char__try-it-button",children:"Try it"})]})]})]})]})]})})},f=e=>{let{children:a}=e;return(0,l.jsx)("div",{className:"main__list",children:(0,l.jsxs)("div",{className:"container main__list-container",children:[(0,l.jsx)(d,{title:"Characters list"}),(0,l.jsx)("div",{className:"main__list-content",children:a})]})})};var v=s(5667),b=s(8290),N=(s(5862),s(9834));const g=e=>{let{img:a,name:s,onCardFocus:t,onCardClick:c}=e;return(0,l.jsxs)("div",{tabIndex:"0",onFocus:t,onClick:c,className:"char-list__item",children:[(0,l.jsx)("div",{className:"char-list__img",children:(0,l.jsx)("img",{src:a,alt:s})}),(0,l.jsx)("div",{className:"char-list__name",children:(0,l.jsx)("h2",{children:s})})]})},p=()=>{const e=[];for(let a=1;a<10;a++)e.push((0,l.jsx)(b.y,{baseColor:"#202020",highlightColor:"#444",children:(0,l.jsxs)("div",{className:"char-list__item",children:[(0,l.jsx)("div",{className:"char-list__img",children:(0,l.jsx)(b.Z,{height:190,width:"100%"})}),(0,l.jsx)("div",{className:"char-list__name",children:(0,l.jsx)(b.Z,{count:2,height:30,width:"100%"})})]})},a));return(0,l.jsx)(l.Fragment,{children:e})},w=e=>{const[a,s]=(0,t.useState)([]),[c,n]=(0,t.useState)(!1),[o,d]=(0,t.useState)(null),[m,x]=(0,t.useState)(!1),[u,j]=(0,t.useState)(!1),[_,f]=(0,t.useState)(null),b=new h.Z,{getActiveChar:w,charInfoBlock:y,total:C}=e;(0,t.useEffect)((()=>(d(b._baseOffset),window.addEventListener("scroll",k),()=>{window.removeEventListener("scroll",k)})),[]),(0,t.useEffect)((()=>{if(o&&!u&&(S(),j(!0)),u&&m){(async()=>await b.getCharactersList(o))().then((e=>{s((a=>[...a,...e])),x(!1)}))}}),[o]);let E;const k=()=>{clearTimeout(E),E=setTimeout((()=>{(async()=>{const e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),a=window.innerHeight,s=window.scrollY;!m&&s>=e-a-50&&(await d((e=>e+9)),x(!0))})()}),20)},S=async()=>{n(!0);try{const e=await b.getCharactersList(o);s(e)}catch(e){throw n(!1),new Error(e)}finally{n(!1)}};(0,t.useEffect)((()=>{null===_||void 0===_||_.classList.add("active-card")}),[_]);const Z=()=>{const e=y.current;v.NY.scrollTo(e.offsetTop-50,{duration:400,smooth:"easeInOutQuad"})},I=a.map((e=>(0,l.jsx)(g,{name:e.name,onCardFocus:a=>((e,a)=>{const s=e.target.closest(".char-list__item");null===_||void 0===_||_.classList.remove("active-card"),f(s),w(a)})(a,e.id),img:e.thumbnail,onCardClick:Z},e.id)));return(0,l.jsxs)(i.E.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"char-list",variants:r.UD,custom:2,children:[c?(0,l.jsx)(p,{}):I,C>o&&(0,l.jsx)(N.Z,{})]})};var y=s(1087);const C=new h.Z,E=e=>{let{data:a,value:s,color:t}=e;const c=s.charAt(0).toUpperCase()+s.slice(1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h3",{style:{color:t},children:[" There is! Visit ",c,"'s page?"]}),(0,l.jsx)(y.rU,{to:"/characters/".concat(a.id),className:"btn gray-btn search-form__gray-btn",children:"To Page"})]})},k=()=>{const[e,a]=(0,t.useState)(""),[s,c]=(0,t.useState)(null),[i,n]=(0,t.useState)(!1);return(0,l.jsx)("section",{className:"search-form",children:(0,l.jsxs)("div",{className:"search-form__content",children:[(0,l.jsx)("h2",{className:"search-form__title",children:"Or find a character by name:"}),(0,l.jsxs)("form",{onSubmit:async a=>{a.preventDefault();try{c(""),n(!0);const a=await C.getCharInfoByName(e);c((0,l.jsx)(E,{data:a,value:e,color:"#03710E"}))}catch(s){c("The character was not found. Check the name and try again")}finally{n(!1)}},className:"search-form__form",action:"#",children:[(0,l.jsxs)("div",{className:"search-form__form-content",children:[(0,l.jsx)("input",{className:"search-form__input",type:"text",placeholder:"Enter name",value:e,onChange:e=>a(e.target.value)}),(0,l.jsx)("button",{className:"btn red-btn search-form__button",type:"submit",children:"Find"})]}),(0,l.jsx)("div",{className:"search-form__result",children:s})]}),i&&(0,l.jsx)(m.Z,{})]})})},S=e=>{let{comics:a}=e;return a.length>0?a.map(((e,a)=>{const s=e.resourceURI.split("/"),t=s[s.length-1];return(0,l.jsx)(y.rU,{to:"/comics/".concat(t),children:(0,l.jsx)("li",{className:"char-info__comics-list-item",children:e.name})},a)})):"Comics not found"},Z=e=>{let{state:a}=e;if(!a)return(0,l.jsxs)("div",{className:"char-info__content",children:[(0,l.jsxs)("div",{className:"char-info__character",children:[(0,l.jsx)(b.y,{baseColor:"#b0b0b0",highlightColor:"#c0c0c0",children:(0,l.jsx)(b.Z,{height:190,width:190})}),(0,l.jsxs)("div",{className:"char-info__text",children:[(0,l.jsxs)(b.y,{baseColor:"#b0b0b0",highlightColor:"#c0c0c0",children:[(0,l.jsx)("p",{style:{fontWeight:"bold"},children:"Choose a character"}),(0,l.jsx)(b.Z,{width:150})]}),(0,l.jsx)("div",{className:"char-info__buttons",children:(0,l.jsxs)(b.y,{baseColor:"#b0b0b0",highlightColor:"#c0c0c0",children:[(0,l.jsx)(b.Z,{width:100,height:40}),(0,l.jsx)(b.Z,{width:100,height:40})]})})]}),(0,l.jsx)("div",{className:"char-info__description",children:(0,l.jsx)(b.y,{baseColor:"#b0b0b0",highlightColor:"#c0c0c0",children:(0,l.jsx)(b.Z,{count:3})})})]}),(0,l.jsxs)("div",{className:"char-info__comics",children:[(0,l.jsx)("h4",{className:"char-info__comics-title",children:(0,l.jsx)(b.y,{baseColor:"#b0b0b0",highlightColor:"#c0c0c0",children:(0,l.jsx)(b.Z,{width:100})})}),(0,l.jsx)("ul",{className:"char-info__comics-list",children:(0,l.jsx)(b.y,{baseColor:"#b0b0b0",highlightColor:"#c0c0c0",children:(0,l.jsx)(b.Z,{count:5})})})]})]});const{name:s,thumbnail:t,homepage:c,wiki:i,description:n,comics:r,id:o}=a[0];return(0,l.jsxs)("div",{className:"char-info__content",children:[(0,l.jsxs)("div",{className:"char-info__character",children:[(0,l.jsx)("img",{className:"char-info__img",src:t,alt:s}),(0,l.jsxs)("div",{className:"char-info__text",children:[(0,l.jsx)("h2",{className:"char-info__title",children:s}),(0,l.jsxs)("div",{className:"char-info__buttons",children:[(0,l.jsx)("a",{className:"btn red-btn char-info__btn",href:c,children:"Homepage"}),(0,l.jsx)("a",{className:"btn gray-btn char-info__btn",href:i,children:"Wiki"})]})]}),(0,l.jsx)("div",{className:"char-info__description",children:n})]},o),(0,l.jsxs)("div",{className:"char-info__comics",children:[(0,l.jsx)("h4",{className:"char-info__comics-title",children:"Comics:"}),(0,l.jsx)("ul",{className:"char-info__comics-list",children:(0,l.jsx)(S,{comics:r})})]})]})},I=e=>{const[a,s]=(0,t.useState)(null),c=(0,t.useRef)(null);return(0,t.useEffect)((()=>{e.getCharInfoBlock(c)}),[]),(0,t.useEffect)((()=>{const a=new h.Z;(async()=>{const{activeChar:t}=e;if(t)try{const e=await a.getCharInfo(t);s(e)}catch(c){console.error("Error fetching character information:",c)}})()}),[e.activeChar]),(0,l.jsxs)(i.E.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0},ref:c,id:"char-info",className:"char-info",variants:r.UD,custom:4,children:[(0,l.jsx)(Z,{state:a}),(0,l.jsx)(k,{})]})},H=()=>{const[e,a]=(0,t.useState)(null),[s,i]=(0,t.useState)(null),[n,r]=(0,t.useState)(null),[d,m]=(0,t.useState)(null),x=new h.Z;(0,t.useEffect)((()=>{(async()=>{await u()})()}),[]);const u=async()=>{const e=(await x.getAllCharacters(1)).data.total;i(e)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(c.q,{children:[(0,l.jsx)("title",{children:"Characters"}),(0,l.jsx)("meta",{name:"description",content:"Characters Page"})]}),(0,l.jsx)(o,{randomCharBlock:n}),(0,l.jsx)(_,{setRandomChar:e=>{r(e)},title:"Random character"}),(0,l.jsxs)(f,{children:[(0,l.jsx)(w,{charInfoBlock:d,total:s,getActiveChar:e=>{a(e)}}),(0,l.jsx)(I,{getCharInfoBlock:e=>{m(e)},activeChar:e})]})]})}}}]);
//# sourceMappingURL=406.bd559ea7.chunk.js.map