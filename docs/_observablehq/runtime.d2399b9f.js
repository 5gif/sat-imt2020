var Ft=Object.defineProperty;var r=(e,t)=>Ft(e,"name",{value:t,configurable:!0});var B,H;import{FileAttachments as Rt,Library as Ut}from"./stdlib.c0fd7a63.js";var zt=Object.defineProperty,Bt=r((e,t)=>zt(e,"name",{value:t,configurable:!0}),"c$7");function A(e,t,n){n=n||{};var i=e.ownerDocument,l=i.defaultView.CustomEvent;typeof l=="function"?l=new l(t,{detail:n}):(l=i.createEvent("Event"),l.initEvent(t,!1,!1),l.detail=n),e.dispatchEvent(l)}r(A,"o$c"),Bt(A,"dispatch");var Ht=Object.defineProperty,be=r((e,t)=>Ht(e,"name",{value:t,configurable:!0}),"r$7");function ee(e){return Array.isArray(e)||e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array}r(ee,"o$b"),be(ee,"isarray");function te(e){return e===(e|0)+""}r(te,"s$4"),be(te,"isindex");var Vt=Object.defineProperty,Yt=r((e,t)=>Vt(e,"name",{value:t,configurable:!0}),"n$8");function g(e){const t=document.createElement("span");return t.className="observablehq--cellname",t.textContent=`${e} = `,t}r(g,"c$6"),Yt(g,"inspectName");var Gt=Object.defineProperty,Jt=r((e,t)=>Gt(e,"name",{value:t,configurable:!0}),"t$8");const Kt=Symbol.prototype.toString;function j(e){return Kt.call(e)}r(j,"e$6"),Jt(j,"formatSymbol");var Zt=Object.defineProperty,ne=r((e,t)=>Zt(e,"name",{value:t,configurable:!0}),"n$6");const{getOwnPropertySymbols:Xt,prototype:{hasOwnProperty:Qt}}=Object,{toStringTag:Wt}=Symbol,ve={},k=Xt;function L(e,t){return Qt.call(e,t)}r(L,"i$5"),ne(L,"isown");function V(e){return e[Wt]||e.constructor&&e.constructor.name||"Object"}r(V,"l$1"),ne(V,"tagof");function _(e,t){try{const n=e[t];return n&&n.constructor,n}catch{return ve}}r(_,"y$2"),ne(_,"valueof");var en=Object.defineProperty,tn=r((e,t)=>en(e,"name",{value:t,configurable:!0}),"i$4");const nn=[{symbol:"@@__IMMUTABLE_INDEXED__@@",name:"Indexed",modifier:!0},{symbol:"@@__IMMUTABLE_KEYED__@@",name:"Keyed",modifier:!0},{symbol:"@@__IMMUTABLE_LIST__@@",name:"List",arrayish:!0},{symbol:"@@__IMMUTABLE_MAP__@@",name:"Map"},{symbol:"@@__IMMUTABLE_ORDERED__@@",name:"Ordered",modifier:!0,prefix:!0},{symbol:"@@__IMMUTABLE_RECORD__@@",name:"Record"},{symbol:"@@__IMMUTABLE_SET__@@",name:"Set",arrayish:!0,setish:!0},{symbol:"@@__IMMUTABLE_STACK__@@",name:"Stack",arrayish:!0}];function re(e){try{let t=nn.filter(({symbol:o})=>e[o]===!0);if(!t.length)return;const n=t.find(o=>!o.modifier),i=n.name==="Map"&&t.find(o=>o.modifier&&o.prefix),l=t.some(o=>o.arrayish),a=t.some(o=>o.setish);return{name:`${i?i.name:""}${n.name}`,symbols:t,arrayish:l&&!a,setish:a}}catch{return null}}r(re,"y$1"),tn(re,"immutableName");var rn=Object.defineProperty,b=r((e,t)=>rn(e,"name",{value:t,configurable:!0}),"i$3");const{getPrototypeOf:ie,getOwnPropertyDescriptors:on}=Object,ye=ie({});function oe(e,t,n,i){let l=ee(e),a,o,s,u;e instanceof Map?e instanceof e.constructor?(a=`Map(${e.size})`,o=ge):(a="Map()",o=P):e instanceof Set?e instanceof e.constructor?(a=`Set(${e.size})`,o=$e):(a="Set()",o=P):l?(a=`${e.constructor.name}(${e.length})`,o=Ce):(u=re(e))?(a=`Immutable.${u.name}${u.name==="Record"?"":`(${e.size})`}`,l=u.arrayish,o=u.arrayish?Ee:u.setish?we:Se):i?(a=V(e),o=xe):(a=V(e),o=P);const c=document.createElement("span");c.className="observablehq--expanded",n&&c.appendChild(g(n));const p=c.appendChild(document.createElement("a"));p.innerHTML=`<svg width=8 height=8 class='observablehq--caret'>
    <path d='M4 7L0 1h8z' fill='currentColor' />
  </svg>`,p.appendChild(document.createTextNode(`${a}${l?" [":" {"}`)),p.addEventListener("mouseup",function(d){d.stopPropagation(),D(c,Y(e,null,n,i))}),o=o(e);for(let d=0;!(s=o.next()).done&&d<20;++d)c.appendChild(s.value);if(!s.done){const d=c.appendChild(document.createElement("a"));d.className="observablehq--field",d.style.display="block",d.appendChild(document.createTextNode("  \u2026 more")),d.addEventListener("mouseup",function(S){S.stopPropagation(),c.insertBefore(s.value,c.lastChild.previousSibling);for(let O=0;!(s=o.next()).done&&O<19;++O)c.insertBefore(s.value,c.lastChild.previousSibling);s.done&&c.removeChild(c.lastChild.previousSibling),A(c,"load")})}return c.appendChild(document.createTextNode(l?"]":"}")),c}r(oe,"F$2"),b(oe,"inspectExpanded");function*ge(e){for(const[t,n]of e)yield Ne(t,n);yield*P(e)}r(ge,"A$3"),b(ge,"iterateMap");function*$e(e){for(const t of e)yield se(t);yield*P(e)}r($e,"B$1"),b($e,"iterateSet");function*we(e){for(const t of e)yield se(t)}r(we,"D$5"),b(we,"iterateImSet");function*Ce(e){for(let t=0,n=e.length;t<n;++t)t in e&&(yield $(t,_(e,t),"observablehq--index"));for(const t in e)!te(t)&&L(e,t)&&(yield $(t,_(e,t),"observablehq--key"));for(const t of k(e))yield $(j(t),_(e,t),"observablehq--symbol")}r(Ce,"H$1"),b(Ce,"iterateArray");function*Ee(e){let t=0;for(const n=e.size;t<n;++t)yield $(t,e.get(t),!0)}r(Ee,"R$2"),b(Ee,"iterateImArray");function*xe(e){for(const n in on(e))yield $(n,_(e,n),"observablehq--key");for(const n of k(e))yield $(j(n),_(e,n),"observablehq--symbol");const t=ie(e);t&&t!==ye&&(yield ae(t))}r(xe,"_"),b(xe,"iterateProto");function*P(e){for(const n in e)L(e,n)&&(yield $(n,_(e,n),"observablehq--key"));for(const n of k(e))yield $(j(n),_(e,n),"observablehq--symbol");const t=ie(e);t&&t!==ye&&(yield ae(t))}r(P,"h$4"),b(P,"iterateObject");function*Se(e){for(const[t,n]of e)yield $(t,n,"observablehq--key")}r(Se,"G$1"),b(Se,"iterateImObject");function ae(e){const t=document.createElement("div"),n=t.appendChild(document.createElement("span"));return t.className="observablehq--field",n.className="observablehq--prototype-key",n.textContent="  <prototype>",t.appendChild(document.createTextNode(": ")),t.appendChild(h(e,void 0,void 0,void 0,!0)),t}r(ae,"E$1"),b(ae,"formatPrototype");function $(e,t,n){const i=document.createElement("div"),l=i.appendChild(document.createElement("span"));return i.className="observablehq--field",l.className=n,l.textContent=`  ${e}`,i.appendChild(document.createTextNode(": ")),i.appendChild(h(t)),i}r($,"s$2"),b($,"formatField");function Ne(e,t){const n=document.createElement("div");return n.className="observablehq--field",n.appendChild(document.createTextNode("  ")),n.appendChild(h(e)),n.appendChild(document.createTextNode(" => ")),n.appendChild(h(t)),n}r(Ne,"J$1"),b(Ne,"formatMapField");function se(e){const t=document.createElement("div");return t.className="observablehq--field",t.appendChild(document.createTextNode("  ")),t.appendChild(h(e)),t}r(se,"k$2"),b(se,"formatSetField");var an=Object.defineProperty,v=r((e,t)=>an(e,"name",{value:t,configurable:!0}),"a$3");function le(e){const t=window.getSelection();return t.type==="Range"&&(t.containsNode(e,!0)||e.contains(t.anchorNode)||e.contains(t.focusNode))}r(le,"q$1"),v(le,"hasSelection");function Y(e,t,n,i){let l=ee(e),a,o,s,u;if(e instanceof Map?e instanceof e.constructor?(a=`Map(${e.size})`,o=Oe):(a="Map()",o=q):e instanceof Set?e instanceof e.constructor?(a=`Set(${e.size})`,o=je):(a="Set()",o=q):l?(a=`${e.constructor.name}(${e.length})`,o=Me):(u=re(e))?(a=`Immutable.${u.name}${u.name==="Record"?"":`(${e.size})`}`,l=u.arrayish,o=u.arrayish?qe:u.setish?Pe:Te):(a=V(e),o=q),t){const d=document.createElement("span");return d.className="observablehq--shallow",n&&d.appendChild(g(n)),d.appendChild(document.createTextNode(a)),d.addEventListener("mouseup",function(S){le(d)||(S.stopPropagation(),D(d,Y(e)))}),d}const c=document.createElement("span");c.className="observablehq--collapsed",n&&c.appendChild(g(n));const p=c.appendChild(document.createElement("a"));p.innerHTML=`<svg width=8 height=8 class='observablehq--caret'>
    <path d='M7 4L1 8V0z' fill='currentColor' />
  </svg>`,p.appendChild(document.createTextNode(`${a}${l?" [":" {"}`)),c.addEventListener("mouseup",function(d){le(c)||(d.stopPropagation(),D(c,oe(e,null,n,i)))},!0),o=o(e);for(let d=0;!(s=o.next()).done&&d<20;++d)d>0&&c.appendChild(document.createTextNode(", ")),c.appendChild(s.value);return s.done||c.appendChild(document.createTextNode(", \u2026")),c.appendChild(document.createTextNode(l?"]":"}")),c}r(Y,"E"),v(Y,"inspectCollapsed");function*Oe(e){for(const[t,n]of e)yield Ae(t,n);yield*q(e)}r(Oe,"F$1"),v(Oe,"iterateMap");function*je(e){for(const t of e)yield h(t,!0);yield*q(e)}r(je,"I$2"),v(je,"iterateSet");function*Pe(e){for(const t of e)yield h(t,!0)}r(Pe,"L$3"),v(Pe,"iterateImSet");function*qe(e){let t=-1,n=0;for(const i=e.size;n<i;++n)n>t+1&&(yield I(n-t-1)),yield h(e.get(n),!0),t=n;n>t+1&&(yield I(n-t-1))}r(qe,"A$2"),v(qe,"iterateImArray");function*Me(e){let t=-1,n=0;for(const i=e.length;n<i;++n)n in e&&(n>t+1&&(yield I(n-t-1)),yield h(_(e,n),!0),t=n);n>t+1&&(yield I(n-t-1));for(const i in e)!te(i)&&L(e,i)&&(yield M(i,_(e,i),"observablehq--key"));for(const i of k(e))yield M(j(i),_(e,i),"observablehq--symbol")}r(Me,"D$4"),v(Me,"iterateArray");function*q(e){for(const t in e)L(e,t)&&(yield M(t,_(e,t),"observablehq--key"));for(const t of k(e))yield M(j(t),_(e,t),"observablehq--symbol")}r(q,"u$2"),v(q,"iterateObject");function*Te(e){for(const[t,n]of e)yield M(t,n,"observablehq--key")}r(Te,"O$3"),v(Te,"iterateImObject");function I(e){const t=document.createElement("span");return t.className="observablehq--empty",t.textContent=e===1?"empty":`empty \xD7 ${e}`,t}r(I,"h$3"),v(I,"formatEmpty");function M(e,t,n){const i=document.createDocumentFragment(),l=i.appendChild(document.createElement("span"));return l.className=n,l.textContent=e,i.appendChild(document.createTextNode(": ")),i.appendChild(h(t,!0)),i}r(M,"m$1"),v(M,"formatField");function Ae(e,t){const n=document.createDocumentFragment();return n.appendChild(h(e,!0)),n.appendChild(document.createTextNode(" => ")),n.appendChild(h(t,!0)),n}r(Ae,"P$2"),v(Ae,"formatMapField");var sn=Object.defineProperty,ce=r((e,t)=>sn(e,"name",{value:t,configurable:!0}),"i$2");function ke(e,t){if(e instanceof Date||(e=new Date(+e)),isNaN(e))return typeof t=="function"?t(e):t;const n=e.getUTCHours(),i=e.getUTCMinutes(),l=e.getUTCSeconds(),a=e.getUTCMilliseconds();return`${Le(e.getUTCFullYear())}-${w(e.getUTCMonth()+1,2)}-${w(e.getUTCDate(),2)}${n||i||l||a?`T${w(n,2)}:${w(i,2)}${l||a?`:${w(l,2)}${a?`.${w(a,3)}`:""}`:""}Z`:""}`}r(ke,"c$4"),ce(ke,"format");function Le(e){return e<0?`-${w(-e,6)}`:e>9999?`+${w(e,6)}`:w(e,4)}r(Le,"f$6"),ce(Le,"formatYear");function w(e,t){return`${e}`.padStart(t,"0")}r(w,"t$7"),ce(w,"pad");var ln=Object.defineProperty,cn=r((e,t)=>ln(e,"name",{value:t,configurable:!0}),"t$6");const un=/^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;function dn(e,t){return un.test(e+="")?new Date(e):typeof t=="function"?t(e):t}r(dn,"r$5"),cn(dn,"parse");var fn=Object.defineProperty,pn=r((e,t)=>fn(e,"name",{value:t,configurable:!0}),"r$4");function Ie(e){return ke(e,"Invalid Date")}r(Ie,"f$5"),pn(Ie,"formatDate");var mn=Object.defineProperty,hn=r((e,t)=>mn(e,"name",{value:t,configurable:!0}),"t$5"),_n=Error.prototype.toString;function De(e){return e.stack||_n.call(e)}r(De,"e$4"),hn(De,"formatError");var bn=Object.defineProperty,vn=r((e,t)=>bn(e,"name",{value:t,configurable:!0}),"r$3"),yn=RegExp.prototype.toString;function Fe(e){return yn.call(e)}r(Fe,"g$1"),vn(Fe,"formatRegExp");var gn=Object.defineProperty,G=r((e,t)=>gn(e,"name",{value:t,configurable:!0}),"s$1");const ue=20;function Re(e,t,n,i){if(t===!1){if(fe(e,/["\n]/g)<=fe(e,/`|\${/g)){const c=document.createElement("span");i&&c.appendChild(g(i));const p=c.appendChild(document.createElement("span"));return p.className="observablehq--string",p.textContent=JSON.stringify(e),c}const o=e.split(`
`);if(o.length>ue&&!n){const c=document.createElement("div");i&&c.appendChild(g(i));const p=c.appendChild(document.createElement("span"));p.className="observablehq--string",p.textContent="`"+de(o.slice(0,ue).join(`
`));const d=c.appendChild(document.createElement("span")),S=o.length-ue;return d.textContent=`Show ${S} truncated line${S>1?"s":""}`,d.className="observablehq--string-expand",d.addEventListener("mouseup",function(O){O.stopPropagation(),D(c,h(e,t,!0,i))}),c}const s=document.createElement("span");i&&s.appendChild(g(i));const u=s.appendChild(document.createElement("span"));return u.className=`observablehq--string${n?" observablehq--expanded":""}`,u.textContent="`"+de(e)+"`",s}const l=document.createElement("span");i&&l.appendChild(g(i));const a=l.appendChild(document.createElement("span"));return a.className="observablehq--string",a.textContent=JSON.stringify(e.length>100?`${e.slice(0,50)}\u2026${e.slice(-49)}`:e),l}r(Re,"g"),G(Re,"formatString");function de(e){return e.replace(/[\\`\x00-\x09\x0b-\x19]|\${/g,Ue)}r(de,"h$2"),G(de,"templatify");function Ue(e){var t=e.charCodeAt(0);switch(t){case 8:return"\\b";case 9:return"\\t";case 11:return"\\v";case 12:return"\\f";case 13:return"\\r"}return t<16?"\\x0"+t.toString(16):t<32?"\\x"+t.toString(16):"\\"+e}r(Ue,"$$2"),G(Ue,"templatifyChar");function fe(e,t){for(var n=0;t.exec(e);)++n;return n}r(fe,"C$2"),G(fe,"count");var $n=Object.defineProperty,ze=r((e,t)=>$n(e,"name",{value:t,configurable:!0}),"a$1"),wn=Function.prototype.toString,Cn={prefix:"async \u0192"},En={prefix:"async \u0192*"},Be={prefix:"class"},xn={prefix:"\u0192"},Sn={prefix:"\u0192*"};function He(e,t){var n,i,l=wn.call(e);switch(e.constructor&&e.constructor.name){case"AsyncFunction":n=Cn;break;case"AsyncGeneratorFunction":n=En;break;case"GeneratorFunction":n=Sn;break;default:n=/^class\b/.test(l)?Be:xn;break}return n===Be?T(n,"",t):(i=/^(?:async\s*)?(\w+)\s*=>/.exec(l))?T(n,"("+i[1]+")",t):(i=/^(?:async\s*)?\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(l))?T(n,i[1]?"("+i[1].replace(/\s*,\s*/g,", ")+")":"()",t):(i=/^(?:async\s*)?function(?:\s*\*)?(?:\s*\w+)?\s*\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(l))?T(n,i[1]?"("+i[1].replace(/\s*,\s*/g,", ")+")":"()",t):T(n,"(\u2026)",t)}r(He,"y"),ze(He,"inspectFunction");function T(e,t,n){var i=document.createElement("span");i.className="observablehq--function",n&&i.appendChild(g(n));var l=i.appendChild(document.createElement("span"));return l.className="observablehq--keyword",l.textContent=e.prefix,i.appendChild(document.createTextNode(t)),i}r(T,"c$3"),ze(T,"formatFunction");var Nn=Object.defineProperty,Ve=r((e,t)=>Nn(e,"name",{value:t,configurable:!0}),"c$2");const{prototype:{toString:On}}=Object;function h(e,t,n,i,l){let a=typeof e;switch(a){case"boolean":case"undefined":{e+="";break}case"number":{e=e===0&&1/e<0?"-0":e+"";break}case"bigint":{e=e+"n";break}case"symbol":{e=j(e);break}case"function":return He(e,i);case"string":return Re(e,t,n,i);default:{if(e===null){a=null,e="null";break}if(e instanceof Date){a="date",e=Ie(e);break}if(e===ve){a="forbidden",e="[forbidden]";break}switch(On.call(e)){case"[object RegExp]":{a="regexp",e=Fe(e);break}case"[object Error]":case"[object DOMException]":{a="error",e=De(e);break}default:return(n?oe:Y)(e,t,i,l)}break}}const o=document.createElement("span");i&&o.appendChild(g(i));const s=o.appendChild(document.createElement("span"));return s.className=`observablehq--${a}`,s.textContent=e,o}r(h,"$$1"),Ve(h,"inspect");function D(e,t){e.classList.contains("observablehq--inspect")&&t.classList.add("observablehq--inspect"),e.parentNode.replaceChild(t,e),A(t,"load")}r(D,"z$2"),Ve(D,"replace");var jn=Object.defineProperty,Ye=r((e,t)=>jn(e,"name",{value:t,configurable:!0}),"n$2");const Pn=/\s+\(\d+:\d+\)$/m,Ge=(B=class{constructor(t){if(!t)throw new Error("invalid node");this._node=t,t.classList.add("observablehq")}pending(){const{_node:t}=this;t.classList.remove("observablehq--error"),t.classList.add("observablehq--running")}fulfilled(t,n){const{_node:i}=this;if((!Je(t)||t.parentNode&&t.parentNode!==i)&&(t=h(t,!1,i.firstChild&&i.firstChild.classList&&i.firstChild.classList.contains("observablehq--expanded"),n),t.classList.add("observablehq--inspect")),i.classList.remove("observablehq--running","observablehq--error"),i.firstChild!==t)if(i.firstChild){for(;i.lastChild!==i.firstChild;)i.removeChild(i.lastChild);i.replaceChild(t,i.firstChild)}else i.appendChild(t);A(i,"update")}rejected(t,n){const{_node:i}=this;for(i.classList.remove("observablehq--running"),i.classList.add("observablehq--error");i.lastChild;)i.removeChild(i.lastChild);var l=document.createElement("div");l.className="observablehq--inspect",n&&l.appendChild(g(n)),l.appendChild(document.createTextNode((t+"").replace(Pn,""))),i.appendChild(l),A(i,"error",{error:t})}},r(B,"o"),B);Ye(Ge,"Inspector");let pe=Ge;pe.into=function(e){if(typeof e=="string"&&(e=document.querySelector(e),e==null))throw new Error("container not found");return function(){return new pe(e.appendChild(document.createElement("div")))}};function Je(e){return(e instanceof Element||e instanceof Text)&&e instanceof e.constructor}r(Je,"p$2"),Ye(Je,"isnode");var qn=Object.defineProperty,Mn=r((e,t)=>qn(e,"name",{value:t,configurable:!0}),"o$4");const Ke=(H=class extends Error{constructor(t,n){super(t),this.input=n}},r(H,"e"),H);Mn(Ke,"RuntimeError");let C=Ke;C.prototype.name="RuntimeError";var Tn=Object.defineProperty,An=r((e,t)=>Tn(e,"name",{value:t,configurable:!0}),"t$4");function Ze(e){return e&&typeof e.next=="function"&&typeof e.return=="function"}r(Ze,"f$1"),An(Ze,"generatorish");var kn=Object.defineProperty,Ln=r((e,t)=>kn(e,"name",{value:t,configurable:!0}),"t$3");function J(e){return()=>e}r(J,"e$2"),Ln(J,"constant");var In=Object.defineProperty,Dn=r((e,t)=>In(e,"name",{value:t,configurable:!0}),"n$1");function F(e){return e}r(F,"o$3"),Dn(F,"identity");var Fn=Object.defineProperty,Rn=r((e,t)=>Fn(e,"name",{value:t,configurable:!0}),"t$2");function Xe(e){return()=>{throw e}}r(Xe,"h$1"),Rn(Xe,"rethrow");const Un=Array.prototype,zn=Un.map;var Bn=Object.defineProperty,Hn=r((e,t)=>Bn(e,"name",{value:t,configurable:!0}),"o$1");function E(){}r(E,"e"),Hn(E,"noop");var Vn=Object.defineProperty,m=r((e,t)=>Vn(e,"name",{value:t,configurable:!0}),"r");const me=1,R=2,K=3,U=Symbol("no-observer");function N(e,t,n,i){n||(n=U),Object.defineProperties(this,{_observer:{value:n,writable:!0},_definition:{value:Z,writable:!0},_duplicate:{value:void 0,writable:!0},_duplicates:{value:void 0,writable:!0},_indegree:{value:NaN,writable:!0},_inputs:{value:[],writable:!0},_invalidate:{value:E,writable:!0},_module:{value:t},_name:{value:null,writable:!0},_outputs:{value:new Set,writable:!0},_promise:{value:Promise.resolve(void 0),writable:!0},_reachable:{value:n!==U,writable:!0},_rejector:{value:tt(this)},_shadow:{value:Qe(t,i)},_type:{value:e},_value:{value:void 0,writable:!0},_version:{value:0,writable:!0}})}r(N,"h"),m(N,"Variable"),Object.defineProperties(N.prototype,{_pending:{value:at,writable:!0,configurable:!0},_fulfilled:{value:st,writable:!0,configurable:!0},_rejected:{value:lt,writable:!0,configurable:!0},_resolve:{value:rt,writable:!0,configurable:!0},define:{value:nt,writable:!0,configurable:!0},delete:{value:ot,writable:!0,configurable:!0},import:{value:it,writable:!0,configurable:!0}});function Qe(e,t){return t?.shadow?new Map(Object.entries(t.shadow).map(([n,i])=>[n,new N(R,e).define([],i)])):null}r(Qe,"x$2"),m(Qe,"initShadow");function We(e){e._module._runtime._dirty.add(e),e._outputs.add(this)}r(We,"S$1"),m(We,"variable_attach");function et(e){e._module._runtime._dirty.add(e),e._outputs.delete(this)}r(et,"j"),m(et,"variable_detach");function Z(){throw Z}r(Z,"f"),m(Z,"variable_undefined");function x(){throw x}r(x,"b"),m(x,"variable_stale");function tt(e){return t=>{throw t===x?t:t===Z?new C(`${e._name} is not defined`,e._name):t instanceof Error&&t.message?new C(t.message,e._name):new C(`${e._name} could not be resolved`,e._name)}}r(tt,"O$2"),m(tt,"variable_rejector");function he(e){return()=>{throw new C(`${e} is defined more than once`)}}r(he,"w$1"),m(he,"variable_duplicate");function nt(e,t,n){switch(arguments.length){case 1:{n=e,e=t=null;break}case 2:{n=t,typeof e=="string"?t=null:(t=e,e=null);break}}return X.call(this,e==null?null:String(e),t==null?[]:zn.call(t,this._resolve,this),typeof n=="function"?n:J(n))}r(nt,"P$1"),m(nt,"variable_define");function rt(e){return this._shadow?.get(e)??this._module._resolve(e)}r(rt,"I$1"),m(rt,"variable_resolve");function X(e,t,n){const i=this._module._scope,l=this._module._runtime;if(this._inputs.forEach(et,this),t.forEach(We,this),this._inputs=t,this._definition=n,this._value=void 0,n===E?l._variables.delete(this):l._variables.add(this),e!==this._name||i.get(e)!==this){let a,o;if(this._name)if(this._outputs.size)i.delete(this._name),o=this._module._resolve(this._name),o._outputs=this._outputs,this._outputs=new Set,o._outputs.forEach(function(s){s._inputs[s._inputs.indexOf(this)]=o},this),o._outputs.forEach(l._updates.add,l._updates),l._dirty.add(o).add(this),i.set(this._name,o);else if((o=i.get(this._name))===this)i.delete(this._name);else if(o._type===K)o._duplicates.delete(this),this._duplicate=void 0,o._duplicates.size===1&&(o=o._duplicates.keys().next().value,a=i.get(this._name),o._outputs=a._outputs,a._outputs=new Set,o._outputs.forEach(function(s){s._inputs[s._inputs.indexOf(a)]=o}),o._definition=o._duplicate,o._duplicate=void 0,l._dirty.add(a).add(o),l._updates.add(o),i.set(this._name,o));else throw new Error;if(this._outputs.size)throw new Error;e&&((o=i.get(e))?o._type===K?(this._definition=he(e),this._duplicate=n,o._duplicates.add(this)):o._type===R?(this._outputs=o._outputs,o._outputs=new Set,this._outputs.forEach(function(s){s._inputs[s._inputs.indexOf(o)]=this},this),l._dirty.add(o).add(this),i.set(e,this)):(o._duplicate=o._definition,this._duplicate=n,a=new N(K,this._module),a._name=e,a._definition=this._definition=o._definition=he(e),a._outputs=o._outputs,o._outputs=new Set,a._outputs.forEach(function(s){s._inputs[s._inputs.indexOf(o)]=a}),a._duplicates=new Set([this,o]),l._dirty.add(o).add(a),l._updates.add(o).add(a),i.set(e,a)):i.set(e,this)),this._name=e}return this._version>0&&++this._version,l._updates.add(this),l._compute(),this}r(X,"c"),m(X,"variable_defineImpl");function it(e,t,n){return arguments.length<3&&(n=t,t=e),X.call(this,String(t),[n._resolve(String(e))],F)}r(it,"T$1"),m(it,"variable_import");function ot(){return X.call(this,null,[],E)}r(ot,"k$1"),m(ot,"variable_delete");function at(){this._observer.pending&&this._observer.pending()}r(at,"z$1"),m(at,"variable_pending");function st(e){this._observer.fulfilled&&this._observer.fulfilled(e,this._name)}r(st,"L$2"),m(st,"variable_fulfilled");function lt(e){this._observer.rejected&&this._observer.rejected(e,this._name)}r(lt,"M$2"),m(lt,"variable_rejected");var Yn=Object.defineProperty,y=r((e,t)=>Yn(e,"name",{value:t,configurable:!0}),"n");const ct=Symbol("variable"),ut=Symbol("invalidation"),dt=Symbol("visibility");function z(e,t=[]){Object.defineProperties(this,{_runtime:{value:e},_scope:{value:new Map},_builtins:{value:new Map([["@variable",ct],["invalidation",ut],["visibility",dt],...t])},_source:{value:null,writable:!0}})}r(z,"M$1"),y(z,"Module"),Object.defineProperties(z.prototype,{_resolve:{value:vt,writable:!0,configurable:!0},redefine:{value:ft,writable:!0,configurable:!0},define:{value:pt,writable:!0,configurable:!0},derive:{value:bt,writable:!0,configurable:!0},import:{value:mt,writable:!0,configurable:!0},value:{value:_t,writable:!0,configurable:!0},variable:{value:ht,writable:!0,configurable:!0},builtin:{value:yt,writable:!0,configurable:!0}});function ft(e){const t=this._scope.get(e);if(!t)throw new C(`${e} is not defined`);if(t._type===K)throw new C(`${e} is defined more than once`);return t.define.apply(t,arguments)}r(ft,"O$1"),y(ft,"module_redefine");function pt(){const e=new N(me,this);return e.define.apply(e,arguments)}r(pt,"V$1"),y(pt,"module_define");function mt(){const e=new N(me,this);return e.import.apply(e,arguments)}r(mt,"Y$1"),y(mt,"module_import");function ht(e,t){return new N(me,this,e,t)}r(ht,"$"),y(ht,"module_variable");async function _t(e){let t=this._scope.get(e);if(!t)throw new C(`${e} is not defined`);if(t._observer===U){t=this.variable(!0).define([e],F);try{return await Q(this._runtime,t)}finally{t.delete()}}else return Q(this._runtime,t)}r(_t,"A$1"),y(_t,"module_value");async function Q(e,t){await e._compute();try{return await t._promise}catch(n){if(n===x)return Q(e,t);throw n}}r(Q,"p"),y(Q,"module_revalue");function bt(e,t){const n=new Map,i=new Set,l=[];function a(s){let u=n.get(s);return u||(u=new z(s._runtime,s._builtins),u._source=s,n.set(s,u),l.push([u,s]),i.add(s),u)}r(a,"v"),y(a,"alias");const o=a(this);for(const s of e){const{alias:u,name:c}=typeof s=="object"?s:{name:s};o.import(c,u??c,t)}for(const s of i)for(const[u,c]of s._scope)if(c._definition===F){if(s===this&&o._scope.has(u))continue;const p=c._inputs[0]._module;p._source&&a(p)}for(const[s,u]of l)for(const[c,p]of u._scope){const d=s._scope.get(c);if(!(d&&d._type!==R))if(p._definition===F){const S=p._inputs[0],O=S._module;s.import(S._name,c,n.get(O)||O)}else s.define(c,p._inputs.map(gt),p._definition)}return o}r(bt,"C$1"),y(bt,"module_derive");function vt(e){let t=this._scope.get(e),n;if(!t)if(t=new N(R,this),this._builtins.has(e))t.define(e,J(this._builtins.get(e)));else if(this._runtime._builtin._scope.has(e))t.import(e,this._runtime._builtin);else{try{n=this._runtime._global(e)}catch(i){return t.define(e,Xe(i))}n===void 0?this._scope.set(t._name=e,t):t.define(e,J(n))}return t}r(vt,"R$1"),y(vt,"module_resolve");function yt(e,t){this._builtins.set(e,t)}r(yt,"D$1"),y(yt,"module_builtin");function gt(e){return e._name}r(gt,"N"),y(gt,"variable_name");var Gn=Object.defineProperty,f=r((e,t)=>Gn(e,"name",{value:t,configurable:!0}),"o");const Jn=typeof requestAnimationFrame=="function"?requestAnimationFrame:typeof setImmediate=="function"?setImmediate:e=>setTimeout(e,0);function _e(e=new Ut,t=Dt){const n=this.module();if(Object.defineProperties(this,{_dirty:{value:new Set},_updates:{value:new Set},_precomputes:{value:[],writable:!0},_computing:{value:null,writable:!0},_init:{value:null,writable:!0},_modules:{value:new Map},_variables:{value:new Set},_disposed:{value:!1,writable:!0},_builtin:{value:n},_global:{value:t}}),e)for(const i in e)new N(R,n).define(i,[],e[i])}r(_e,"k"),f(_e,"Runtime"),Object.defineProperties(_e.prototype,{_precompute:{value:Ct,writable:!0,configurable:!0},_compute:{value:Et,writable:!0,configurable:!0},_computeSoon:{value:xt,writable:!0,configurable:!0},_computeNow:{value:St,writable:!0,configurable:!0},dispose:{value:$t,writable:!0,configurable:!0},module:{value:wt,writable:!0,configurable:!0},fileAttachments:{value:Rt,writable:!0,configurable:!0}});function $t(){this._computing=Promise.resolve(),this._disposed=!0,this._variables.forEach(e=>{e._invalidate(),e._version=NaN})}r($t,"q"),f($t,"runtime_dispose");function wt(e,t=E){let n;if(e===void 0)return(n=this._init)?(this._init=null,n):new z(this);if(n=this._modules.get(e),n)return n;this._init=n=new z(this),this._modules.set(e,n);try{e(this,t)}finally{this._init=null}return n}r(wt,"A"),f(wt,"runtime_module");function Ct(e){this._precomputes.push(e),this._compute()}r(Ct,"O"),f(Ct,"runtime_precompute");function Et(){return this._computing||(this._computing=this._computeSoon())}r(Et,"T"),f(Et,"runtime_compute");function xt(){return new Promise(Jn).then(()=>this._disposed?void 0:this._computeNow())}r(xt,"F"),f(xt,"runtime_computeSoon");async function St(){let e=[],t,n,i=this._precomputes;if(i.length){this._precomputes=[];for(const a of i)a();await Nt(3)}t=new Set(this._dirty),t.forEach(function(a){a._inputs.forEach(t.add,t);const o=It(a);o>a._reachable?this._updates.add(a):o<a._reachable&&a._invalidate(),a._reachable=o},this),t=new Set(this._updates),t.forEach(function(a){a._reachable?(a._indegree=0,a._outputs.forEach(t.add,t)):(a._indegree=NaN,t.delete(a))}),this._computing=null,this._updates.clear(),this._dirty.clear(),t.forEach(function(a){a._outputs.forEach(jt)});do{for(t.forEach(function(a){a._indegree===0&&e.push(a)});n=e.pop();)Tt(n),n._outputs.forEach(l),t.delete(n);t.forEach(function(a){Ot(a)&&(kt(a,new C("circular definition")),a._outputs.forEach(Pt),t.delete(a))})}while(t.size);function l(a){--a._indegree===0&&e.push(a)}r(l,"f"),f(l,"postqueue")}r(St,"M"),f(St,"runtime_computeNow");function Nt(e=0){let t=Promise.resolve();for(let n=0;n<e;++n)t=t.then(()=>{});return t}r(Nt,"x"),f(Nt,"runtime_defer");function Ot(e){const t=new Set(e._inputs);for(const n of t){if(n===e)return!0;n._inputs.forEach(t.add,t)}return!1}r(Ot,"L"),f(Ot,"variable_circular");function jt(e){++e._indegree}r(jt,"R"),f(jt,"variable_increment");function Pt(e){--e._indegree}r(Pt,"V"),f(Pt,"variable_decrement");function qt(e){return e._promise.catch(e._rejector)}r(qt,"z"),f(qt,"variable_value");function W(e){return new Promise(function(t){e._invalidate=t})}r(W,"d"),f(W,"variable_invalidator");function Mt(e,t){let n=typeof IntersectionObserver=="function"&&t._observer&&t._observer._node,i=!n,l=E,a=E,o,s;return n&&(s=new IntersectionObserver(([u])=>(i=u.isIntersecting)&&(o=null,l())),s.observe(n),e.then(()=>(s.disconnect(),s=null,a()))),function(u){return i?Promise.resolve(u):s?(o||(o=new Promise((c,p)=>(l=c,a=p))),o.then(()=>u)):Promise.reject()}}r(Mt,"C"),f(Mt,"variable_intersector");function Tt(e){e._invalidate(),e._invalidate=E,e._pending();const t=e._value,n=++e._version;let i=null;const l=e._promise=(e._inputs.length?Promise.all(e._inputs.map(qt)).then(a):new Promise(s=>s(e._definition.call(t)))).then(o);function a(s){if(e._version!==n)throw x;for(let u=0,c=s.length;u<c;++u)switch(s[u]){case ut:{s[u]=i=W(e);break}case dt:{i||(i=W(e)),s[u]=Mt(i,e);break}case ct:{s[u]=e;break}}return e._definition.apply(t,s)}r(a,"r"),f(a,"define");function o(s){if(e._version!==n)throw x;return Ze(s)?((i||W(e)).then(Lt(s)),At(e,n,s)):s}r(o,"_"),f(o,"generate"),l.then(s=>{e._value=s,e._fulfilled(s)},s=>{s===x||e._version!==n||(e._value=void 0,e._rejected(s))})}r(Tt,"Y"),f(Tt,"variable_compute");function At(e,t,n){const i=e._module._runtime;let l;function a(u){return new Promise(c=>c(n.next(l))).then(({done:c,value:p})=>c?void 0:Promise.resolve(p).then(u))}r(a,"r"),f(a,"compute");function o(){const u=a(c=>{if(e._version!==t)throw x;return l=c,s(c,u).then(()=>i._precompute(o)),e._fulfilled(c),c});u.catch(c=>{c===x||e._version!==t||(s(void 0,u),e._rejected(c))})}r(o,"_"),f(o,"recompute");function s(u,c){return e._value=u,e._promise=c,e._outputs.forEach(i._updates.add,i._updates),i._compute()}return r(s,"i"),f(s,"postcompute"),a(u=>{if(e._version!==t)throw x;return l=u,i._precompute(o),u})}r(At,"B"),f(At,"variable_generate");function kt(e,t){e._invalidate(),e._invalidate=E,e._pending(),++e._version,e._indegree=NaN,(e._promise=Promise.reject(t)).catch(E),e._value=void 0,e._rejected(t)}r(kt,"D"),f(kt,"variable_error");function Lt(e){return function(){e.return()}}r(Lt,"G"),f(Lt,"variable_return");function It(e){if(e._observer!==U)return!0;const t=new Set(e._outputs);for(const n of t){if(n._observer!==U)return!0;n._outputs.forEach(t.add,t)}return!1}r(It,"H"),f(It,"variable_reachable");function Dt(e){return globalThis[e]}r(Dt,"J"),f(Dt,"window_global");export{pe as Inspector,_e as Runtime,C as RuntimeError};