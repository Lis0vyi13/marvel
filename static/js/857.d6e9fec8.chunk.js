"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[857],{834:(e,s,a)=>{a.d(s,{Z:()=>c});var t=a(184);const c=()=>(0,t.jsx)("div",{className:"loadingio-spinner-ellipsis-6iszfz84awk list-loader",children:(0,t.jsxs)("div",{className:"ldio-xlbd2dzlxer",children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{})]})})},52:(e,s,a)=>{a.r(s),a.d(s,{default:()=>k});var t=a(791),c=a(763);const i=a.p+"static/media/Spider-man.340a442c875a3eec7c81.png";var n=a(908),r=a(184);const l=e=>(0,r.jsx)(c.E.main,{initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"main",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("section",{className:"main__container",children:[(0,r.jsx)(c.E.img,{variants:n.HN,custom:1,className:"main__bg-img",src:i,alt:"Spider man"}),(0,r.jsxs)("div",{className:"main__content",children:[(0,r.jsx)(c.E.h1,{custom:1,variants:n.vo,className:"main-title",children:"UNLEASH YOUR INNER HERO"}),(0,r.jsx)(c.E.h3,{custom:1.5,variants:n.vo,className:"main-description",children:"Empower yourself with our platform and delve into the vast world of characters and comics through the Marvel API. Discover the tales that have forged legendary icons."}),(0,r.jsx)(c.E.button,{custom:2.5,variants:n.vo,onClick:()=>{const s=e.randomCharBlock.current;window.scrollTo({behavior:"smooth",top:s.offsetTop-50})},className:"btn red-btn",children:"Get Started"})]})]})})});var o=a(647);const h=e=>{let{title:s}=e;return(0,r.jsxs)(c.E.section,{className:"block-name",initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[(0,r.jsx)(c.E.h4,{variants:n.kc,className:"block-title",children:s}),(0,r.jsx)(c.E.div,{variants:n.ZF,className:"divider"})]})};var d=a(916),m=a(948);const x=a.p+"static/media/spiddy.d38e0fe771fb1a3d0dd4.png",_=e=>{let{state:s}=e;const{thumbnail:a,name:t,description:c,homepage:i,wiki:n}=s;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"random-char__character-thumb",children:(0,r.jsx)("img",{src:a,alt:"",className:"random-char__thumb"})}),(0,r.jsxs)("div",{className:"random-char__character-text",children:[(0,r.jsx)("div",{className:"random-char__character-name",children:(0,r.jsx)("p",{className:"random-char__character-name-title",children:t})}),(0,r.jsx)("div",{className:"random-char__character-description",children:(0,r.jsx)("p",{className:"random-char__character-description-text",children:c})}),(0,r.jsxs)("div",{className:"random-char__character-buttons",children:[(0,r.jsx)("a",{className:"btn random red-btn random-char__character-button",href:i,children:"Homepage"}),(0,r.jsx)("a",{className:"btn random-char__character-button gray-btn",href:n,children:"Wiki"})]})]})]})},j=e=>{const[s,a]=(0,t.useState)(!0),[i,l]=(0,t.useState)(!1),[j,u]=(0,t.useState)(!0),[v,f]=(0,t.useState)({name:"Not found",description:"Empty details, no description found here",thumbnail:"",homepage:"",wiki:""}),b=(0,t.useRef)(null),{setRandomChar:N,title:g}=e,w=new o.Z;(0,t.useEffect)((()=>(N(b),p(),()=>{u(!1)})),[]);const p=async()=>{a(!0),l(!1);try{const s=Math.floor(400*Math.random()+1011e3),a=(await w.getCharInfo(s))[0];f({name:a.name||"Not found",description:(e=a.description,(e.length>118?e.slice(0,115)+"...":e)||"Empty details, no description found here"),thumbnail:a.thumbnail,homepage:a.homepage,wiki:a.wiki})}catch{j&&(y(),C())}finally{C()}var e},C=()=>{a(!1)},y=()=>{l(!0)},E=s&&(0,r.jsx)(d.Z,{}),k=i&&(0,r.jsx)(m.Z,{}),S=!(E||k)&&(0,r.jsx)(_,{state:v});return(0,r.jsx)("section",{ref:b,className:"random-char",children:(0,r.jsxs)("div",{className:"container random-char__container",children:[(0,r.jsx)(h,{title:g}),(0,r.jsxs)(c.E.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"random-char__content",children:[(0,r.jsx)(c.E.div,{variants:n.UD,custom:1,className:"random-char__character",children:(0,r.jsxs)("div",{className:"random-char__character-content",children:[E,k,S]})}),(0,r.jsxs)(c.E.div,{variants:n.UD,custom:3,className:"random-char__try-it",children:[(0,r.jsx)("img",{className:"random-char__try-it-image",src:x,alt:"mini spider man"}),(0,r.jsxs)("div",{className:"random-char__try-it-content",children:[(0,r.jsx)("div",{className:"random-char__try-it-text",children:(0,r.jsxs)("p",{className:"random-char__try-it-text-content",children:["Random character for today! ",(0,r.jsx)("br",{})," Do you want to get to know him better?"]})}),(0,r.jsxs)("div",{className:"random-char__try-it-cta",children:[(0,r.jsx)("p",{className:"random-char__try-it-text-content",children:"Or choose another one"}),(0,r.jsx)("button",{onClick:p,className:"btn red-btn random-char__try-it-button",children:"Try it"})]})]})]})]})]})})},u=e=>{let{children:s}=e;return(0,r.jsx)("div",{className:"main__list",children:(0,r.jsxs)("div",{className:"container main__list-container",children:[(0,r.jsx)(h,{title:"Characters list"}),(0,r.jsx)("div",{className:"main__list-content",children:s})]})})};var v=a(667),f=a(290),b=(a(862),a(834));const N=e=>{let{img:s,name:a,onCardFocus:t,onCardClick:c}=e;return(0,r.jsxs)("div",{tabIndex:"0",onFocus:t,onClick:c,className:"char-list__item",children:[(0,r.jsx)("div",{className:"char-list__img",children:(0,r.jsx)("img",{src:s,alt:a})}),(0,r.jsx)("div",{className:"char-list__name",children:(0,r.jsx)("h2",{children:a})})]})},g=()=>{const e=[];for(let s=1;s<10;s++)e.push((0,r.jsx)(f.y,{baseColor:"#202020",highlightColor:"#444",children:(0,r.jsxs)("div",{className:"char-list__item",children:[(0,r.jsx)("div",{className:"char-list__img",children:(0,r.jsx)(f.Z,{height:190,width:"100%"})}),(0,r.jsx)("div",{className:"char-list__name",children:(0,r.jsx)(f.Z,{count:2,height:30,width:"100%"})})]})},s));return(0,r.jsx)(r.Fragment,{children:e})},w=e=>{const[s,a]=(0,t.useState)([]),[i,l]=(0,t.useState)(!1),[h,d]=(0,t.useState)(null),[m,x]=(0,t.useState)(!1),[_,j]=(0,t.useState)(!1),[u,f]=(0,t.useState)(null),w=new o.Z,{getActiveChar:p,charInfoBlock:C,total:y}=e;(0,t.useEffect)((()=>(d(w._baseOffset),window.addEventListener("scroll",k),()=>{window.removeEventListener("scroll",k)})),[]),(0,t.useEffect)((()=>{if(h&&!_&&(S(),j(!0)),_&&m){(async()=>await w.getCharactersList(h))().then((e=>{a((s=>[...s,...e])),x(!1)}))}}),[h]);let E;const k=()=>{clearTimeout(E),E=setTimeout((()=>{(async()=>{const e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),s=window.innerHeight,a=window.scrollY;!m&&a>=e-s-50&&(await d((e=>e+9)),x(!0))})()}),20)},S=async()=>{l(!0);try{const e=await w.getCharactersList(h);a(e)}catch(e){throw l(!1),new Error(e)}finally{l(!1)}};(0,t.useEffect)((()=>{null===u||void 0===u||u.classList.add("active-card")}),[u]);const Z=()=>{const e=C.current;v.NY.scrollTo(e.offsetTop-50,{duration:400,smooth:"easeInOutQuad"})},I=s.map((e=>(0,r.jsx)(N,{name:e.name,onCardFocus:s=>((e,s)=>{const a=e.target.closest(".char-list__item");null===u||void 0===u||u.classList.remove("active-card"),f(a),p(s)})(s,e.id),img:e.thumbnail,onCardClick:Z},e.id)));return(0,r.jsxs)(c.E.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"char-list",variants:n.UD,custom:2,children:[i?(0,r.jsx)(g,{}):I,y>h&&(0,r.jsx)(b.Z,{})]})};var p=a(87);const C=e=>{let{comics:s}=e;return s.length>0?s.map(((e,s)=>{const a=e.resourceURI.split("/"),t=a[a.length-1];return(0,r.jsx)(p.rU,{to:"/comics/".concat(t),children:(0,r.jsx)("li",{className:"char-info__comics-list-item",children:e.name})},s)})):"Comics not found"},y=e=>{let{state:s}=e;if(!s)return(0,r.jsxs)("div",{className:"char-info__content",children:[(0,r.jsxs)("div",{className:"char-info__character",children:[(0,r.jsx)(f.y,{baseColor:"#b0b0b0",highlightColor:"#c0c0c0",children:(0,r.jsx)(f.Z,{height:190,width:190})}),(0,r.jsxs)("div",{className:"char-info__text",children:[(0,r.jsxs)(f.y,{baseColor:"#b0b0b0",highlightColor:"#c0c0c0",children:[(0,r.jsx)("p",{style:{fontWeight:"bold"},children:"Choose a character"}),(0,r.jsx)(f.Z,{width:150})]}),(0,r.jsx)("div",{className:"char-info__buttons",children:(0,r.jsxs)(f.y,{baseColor:"#b0b0b0",highlightColor:"#c0c0c0",children:[(0,r.jsx)(f.Z,{width:100,height:40}),(0,r.jsx)(f.Z,{width:100,height:40})]})})]}),(0,r.jsx)("div",{className:"char-info__description",children:(0,r.jsx)(f.y,{baseColor:"#b0b0b0",highlightColor:"#c0c0c0",children:(0,r.jsx)(f.Z,{count:3})})})]}),(0,r.jsxs)("div",{className:"char-info__comics",children:[(0,r.jsx)("h4",{className:"char-info__comics-title",children:(0,r.jsx)(f.y,{baseColor:"#b0b0b0",highlightColor:"#c0c0c0",children:(0,r.jsx)(f.Z,{width:100})})}),(0,r.jsx)("ul",{className:"char-info__comics-list",children:(0,r.jsx)(f.y,{baseColor:"#b0b0b0",highlightColor:"#c0c0c0",children:(0,r.jsx)(f.Z,{count:5})})})]})]});const{name:a,thumbnail:t,homepage:c,wiki:i,description:n,comics:l,id:o}=s[0];return(0,r.jsxs)("div",{className:"char-info__content",children:[(0,r.jsxs)("div",{className:"char-info__character",children:[(0,r.jsx)("img",{className:"char-info__img",src:t,alt:a}),(0,r.jsxs)("div",{className:"char-info__text",children:[(0,r.jsx)("h2",{className:"char-info__title",children:a}),(0,r.jsxs)("div",{className:"char-info__buttons",children:[(0,r.jsx)("a",{className:"btn red-btn char-info__btn",href:c,children:"Homepage"}),(0,r.jsx)("a",{className:"btn gray-btn char-info__btn",href:i,children:"Wiki"})]})]}),(0,r.jsx)("div",{className:"char-info__description",children:n})]},o),(0,r.jsxs)("div",{className:"char-info__comics",children:[(0,r.jsx)("h4",{className:"char-info__comics-title",children:"Comics:"}),(0,r.jsx)("ul",{className:"char-info__comics-list",children:(0,r.jsx)(C,{comics:l})})]})]})},E=e=>{const[s,a]=(0,t.useState)(null),i=(0,t.useRef)(null);return(0,t.useEffect)((()=>{e.getCharInfoBlock(i)}),[]),(0,t.useEffect)((()=>{const s=new o.Z;(async()=>{const{activeChar:t}=e;if(t)try{const e=await s.getCharInfo(t);a(e)}catch(c){console.error("Error fetching character information:",c)}})()}),[e.activeChar]),(0,r.jsx)(c.E.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0},ref:i,id:"char-info",className:"char-info",variants:n.UD,custom:4,children:(0,r.jsx)(y,{state:s})})},k=()=>{const[e,s]=(0,t.useState)(null),[a,c]=(0,t.useState)(null),[i,n]=(0,t.useState)(null),[h,d]=(0,t.useState)(null),m=new o.Z;(0,t.useEffect)((()=>{(async()=>{await x()})()}),[]);const x=async()=>{const e=(await m.getAllCharacters(1)).data.total;c(e)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{randomCharBlock:i}),(0,r.jsx)(j,{setRandomChar:e=>{n(e)},title:"Random character"}),(0,r.jsxs)(u,{children:[(0,r.jsx)(w,{charInfoBlock:h,total:a,getActiveChar:e=>{s(e)}}),(0,r.jsx)(E,{getCharInfoBlock:e=>{d(e)},activeChar:e})]})]})}}}]);
//# sourceMappingURL=857.d6e9fec8.chunk.js.map