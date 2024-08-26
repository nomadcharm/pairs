!function(){"use strict";var e={889:function(e,t,n){function s(e,t){const{tag:n,id:s,className:i}=function(e){const t=e.split(/([.#])/);let n="",s="";for(let e=1;e<t.length;e+=2)switch(t[e]){case".":n+=` ${t[e+1]}`;break;case"#":s=t[e+1]}return{className:n.trim(),tag:t[0]||"div",id:s}}(e),o=t?document.createElementNS(t,n):document.createElement(n);return s&&(o.id=s),i&&(t?o.setAttribute("class",i):o.className=i),o}function i(e,t){const n=y(e),s=y(t);return t===s&&s.__redom_view&&(t=s.__redom_view),s.parentNode&&(o(0,s,n),n.removeChild(s)),t}function o(e,t,n){const s=t.__redom_lifecycle;if(r(s))return void(t.__redom_lifecycle={});let i=n;for(t.__redom_mounted&&a(t,"onunmount");i;){const e=i.__redom_lifecycle||{};for(const t in s)e[t]&&(e[t]-=s[t]);r(e)&&(i.__redom_lifecycle=null),i=i.parentNode}}function r(e){if(null==e)return!0;for(const t in e)if(e[t])return!1;return!0}n.r(t),n.d(t,{List:function(){return A},ListPool:function(){return $},Place:function(){return I},Router:function(){return M},el:function(){return k},h:function(){return L},html:function(){return N},list:function(){return j},listPool:function(){return T},mount:function(){return u},place:function(){return C},router:function(){return B},s:function(){return P},setAttr:function(){return p},setChildren:function(){return x},setData:function(){return g},setStyle:function(){return d},setXlink:function(){return _},svg:function(){return V},text:function(){return w},unmount:function(){return i},viewFactory:function(){return O}});const c=["onmount","onremount","onunmount"],l="undefined"!=typeof window&&"ShadowRoot"in window;function u(e,t,n,s){const i=y(e),r=y(t);t===r&&r.__redom_view&&(t=r.__redom_view),t!==r&&(r.__redom_view=t);const u=r.__redom_mounted,d=r.parentNode;if(u&&d!==i&&o(0,r,d),null!=n)if(s){const e=y(n);e.__redom_mounted&&a(e,"onunmount"),i.replaceChild(r,e)}else i.insertBefore(r,y(n));else i.appendChild(r);return function(e,t,n,s){const i=t.__redom_lifecycle||(t.__redom_lifecycle={}),o=n===s;let r=!1;for(const n of c)o||e!==t&&n in e&&(i[n]=(i[n]||0)+1),i[n]&&(r=!0);if(!r)return void(t.__redom_lifecycle={});let u=n,d=!1;for((o||u&&u.__redom_mounted)&&(a(t,o?"onremount":"onmount"),d=!0);u;){const e=u.parentNode,t=u.__redom_lifecycle||(u.__redom_lifecycle={});for(const e in i)t[e]=(t[e]||0)+i[e];if(d)break;(u.nodeType===Node.DOCUMENT_NODE||l&&u instanceof ShadowRoot||e&&e.__redom_mounted)&&(a(u,o?"onremount":"onmount"),d=!0),u=e}}(t,r,i,d),t}function a(e,t){"onmount"===t||"onremount"===t?e.__redom_mounted=!0:"onunmount"===t&&(e.__redom_mounted=!1);const n=e.__redom_lifecycle;if(!n)return;const s=e.__redom_view;let i=0;s&&s[t]&&s[t]();for(const e in n)e&&i++;if(i){let n=e.firstChild;for(;n;){const e=n.nextSibling;a(n,t),n=e}}}function d(e,t,n){const s=y(e);if("object"==typeof t)for(const e in t)f(s,e,t[e]);else f(s,t,n)}function f(e,t,n){e.style[t]=null==n?"":n}const m="http://www.w3.org/1999/xlink";function p(e,t,n){h(e,t,n)}function h(e,t,n,s){const i=y(e);if("object"==typeof t)for(const e in t)h(i,e,t[e],s);else{const e=i instanceof SVGElement,o="function"==typeof n;if("style"===t&&"object"==typeof n)d(i,n);else if(e&&o)i[t]=n;else if("dataset"===t)g(i,n);else if(e||!(t in i)&&!o||"list"===t){if(e&&"xlink"===t)return void _(i,n);s&&"class"===t&&(n=i.className+" "+n),null==n?i.removeAttribute(t):i.setAttribute(t,n)}else i[t]=n}}function _(e,t,n){if("object"==typeof t)for(const n in t)_(e,n,t[n]);else null!=n?e.setAttributeNS(m,t,n):e.removeAttributeNS(m,t,n)}function g(e,t,n){if("object"==typeof t)for(const n in t)g(e,n,t[n]);else null!=n?e.dataset[t]=n:delete e.dataset[t]}function w(e){return document.createTextNode(null!=e?e:"")}function v(e,t,n){for(const s of t){if(0!==s&&!s)continue;const t=typeof s;"function"===t?s(e):"string"===t||"number"===t?e.appendChild(w(s)):E(y(s))?u(e,s):s.length?v(e,s,n):"object"===t&&h(e,s,null,n)}}function b(e){return"string"==typeof e?N(e):y(e)}function y(e){return e.nodeType&&e||!e.el&&e||y(e.el)}function E(e){return e&&e.nodeType}function N(e,...t){let n;const i=typeof e;if("string"===i)n=s(e);else{if("function"!==i)throw new Error("At least one argument required");n=new e(...t)}return v(y(n),t,!0),n}const k=N,L=N;function x(e,...t){let n=S(e,t,y(e).firstChild);for(;n;){const t=n.nextSibling;i(e,n),n=t}}function S(e,t,n){let s=n;const i=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]&&y(t[e]);for(let n=0;n<t.length;n++){const o=t[n];if(!o)continue;const r=i[n];if(r!==s)if(E(r)){const t=s&&s.nextSibling,r=null!=o.__redom_index&&t===i[n+1];u(e,o,s,r),r&&(s=t)}else null!=o.length&&(s=S(e,o,s));else s=s.nextSibling}return s}function T(e,t,n){return new $(e,t,n)}N.extend=function(...e){return N.bind(this,...e)};class ${constructor(e,t,n){this.View=e,this.initData=n,this.oldLookup={},this.lookup={},this.oldViews=[],this.views=[],null!=t&&(this.key="function"==typeof t?t:function(e){return function(t){return t[e]}}(t))}update(e,t){const{View:n,key:s,initData:i}=this,o=null!=s,r=this.lookup,c={},l=Array(e.length),u=this.views;for(let a=0;a<e.length;a++){const d=e[a];let f;if(o){const t=s(d);f=r[t]||new n(i,d,a,e),c[t]=f,f.__redom_id=t}else f=u[a]||new n(i,d,a,e);f.update&&f.update(d,a,e,t),y(f.el).__redom_view=f,l[a]=f}this.oldViews=u,this.views=l,this.oldLookup=r,this.lookup=c}}function j(e,t,n,s){return new A(e,t,n,s)}class A{constructor(e,t,n,s){this.View=t,this.initData=s,this.views=[],this.pool=new $(t,n,s),this.el=b(e),this.keySet=null!=n}update(e=[],t){const{keySet:n}=this,s=this.views;this.pool.update(e,t);const{views:o,lookup:r}=this.pool;if(n)for(let e=0;e<s.length;e++){const t=s[e];null==r[t.__redom_id]&&(t.__redom_index=null,i(this,t))}for(let e=0;e<o.length;e++)o[e].__redom_index=e;x(this,o),n&&(this.lookup=r),this.views=o}}function C(e,t){return new I(e,t)}A.extend=function(e,t,n,s){return A.bind(A,e,t,n,s)},j.extend=A.extend;class I{constructor(e,t){this.el=w(""),this.visible=!1,this.view=null,this._placeholder=this.el,e instanceof Node?this._el=e:e.el instanceof Node?(this._el=e,this.view=e):this._View=e,this._initData=t}update(e,t){const n=this._placeholder,s=this.el.parentNode;if(e){if(!this.visible)if(this._el)u(s,this._el,n),i(s,n),this.el=y(this._el),this.visible=e;else{const e=new(0,this._View)(this._initData);this.el=y(e),this.view=e,u(s,e,n),i(s,n)}this.view&&this.view.update&&this.view.update(t)}else if(this.visible){if(this._el)return u(s,n,this._el),i(s,this._el),this.el=n,void(this.visible=e);u(s,n,this.view),i(s,this.view),this.el=n,this.view=null}this.visible=e}}function B(e,t,n){return new M(e,t,n)}class M{constructor(e,t,n){this.el=b(e),this.views=t,this.Views=t,this.initData=n}update(e,t){if(e!==this.route){const n=this.views[e];this.route=e,n&&(n instanceof Node||n.el instanceof Node)?this.view=n:this.view=n&&new n(this.initData,t),x(this.el,[this.view])}this.view&&this.view.update&&this.view.update(t,e)}}const D="http://www.w3.org/2000/svg";function V(e,...t){let n;const i=typeof e;if("string"===i)n=s(e,D);else{if("function"!==i)throw new Error("At least one argument required");n=new e(...t)}return v(y(n),t,!0),n}const P=V;function O(e,t){if(!e||"object"!=typeof e)throw new Error("views must be an object");if(!t||"string"!=typeof t)throw new Error("key must be a string");return function(n,s,i,o){const r=s[t],c=e[r];if(c)return new c(n,s,i,o);throw new Error(`view ${r} not found`)}}V.extend=function(...e){return V.bind(this,...e)},V.ns=D}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");if(s.length)for(var i=s.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=s[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"}(),function(){const{el:e}=n(889);var t=e("div",{class:"screen screen-one"},[e("div",{class:"controls screen-one__controls"},[e("h2",{class:"controls__title"},"Игра в пары"),e("p",{class:"controls__descr"},"Выбрать количество карточек по вертикали/горизонтали: "),e("select",{class:"input",id:"card-input",name:"cards"},[e("option",{value:"2"},"2"),e("option",{value:"4",selected:"true"},"4"),e("option",{value:"6"},"6")]),e("p",{class:"controls__descr"},"Выбрать время (в секундах): "),e("select",{class:"input",id:"time-input",name:"cards"},[e("option",{value:"10"},"10"),e("option",{value:"30",selected:"true"},"30"),e("option",{value:"60"},"60"),e("option",{value:"90"},"90")]),e("div",{class:"input-group"},[e("p",{class:"controls__descr"},"Выбрать тип игры:"),e("label",[e("input",{class:"radio-input",id:"number-cards",type:"radio",name:"radio",checked:"true"}),e("span",{class:"input-custom"},"Цифры")]),e("label",[e("input",{class:"radio-input",id:"img-cards",type:"radio",name:"radio"}),e("span",{class:"input-custom"},"Картинки")])]),e("button",{class:"button-reset button",id:"game-start"},"Начать игру")])]);const{el:s}=n(889);var i=s("div",{class:"screen screen-two"},[s("div",{class:"screen-two__controls"},[s("p",{class:"time"},"Осталось: ",[s("span",{id:"time"})]),s("div",{class:"button-set hidden"},[s("button",{class:"button button-hidden",id:"game-replay"},"Сыграть ещё раз"),s("button",{class:"button button-hidden",id:"new-game-settings"},"Сбросить настройки игры")])]),s("div",{class:"container"},[s("div",{class:"game",id:"game"})])]);const{setChildren:o}=n(889);o(window.document.body,[t,i]);const r=document.querySelectorAll(".screen"),c=document.getElementById("time"),l=document.getElementById("game"),u=document.getElementById("card-input"),a=document.getElementById("time-input"),d=document.querySelector(".button-set"),f=document.getElementById("game-start"),m=document.getElementById("game-replay"),p=document.getElementById("new-game-settings"),h=document.getElementById("number-cards"),_=document.getElementById("img-cards");let g,w;const v=e=>{let t=Math.floor(e/60),n=e%60,s=t<10?`0${t}`:`${t}`,i=n<10?`0${n}`:`${n}`;c.innerHTML=`${s}:${i}`},b=()=>{clearInterval(w),g=Number(a.value),w=setInterval((()=>(()=>{if(0===g)Y("Время вышло!"),clearInterval(w);else{let e=--g;e<10&&(e=`0${e}`),v(e)}})()),1e3),v(g)};n.p;var y=n.p+"assets/img/1.c3543958.png",E=n.p+"assets/img/2.371d4e02.png",N=n.p+"assets/img/3.5831cfc7.png",k=n.p+"assets/img/4.447e6b38.png",L=n.p+"assets/img/5.8996ea8d.png",x=n.p+"assets/img/6.1b044bf7.png",S=n.p+"assets/img/7.ee7a77cf.png",T=n.p+"assets/img/8.ff2cfb4b.png",$=n.p+"assets/img/9.66e0a365.png",j=n.p+"assets/img/10.aa4570bb.png",A=n.p+"assets/img/11.c1f89cdf.png",C=n.p+"assets/img/12.3146b36b.png",I=n.p+"assets/img/13.b262caf8.png",B=n.p+"assets/img/14.a75cd8c7.png",M=n.p+"assets/img/15.d393be27.png",D=n.p+"assets/img/16.be8a650a.png",V=n.p+"assets/img/17.cc7c1db1.png",P=n.p+"assets/img/18.dfc7b58b.png";class O{_open=!1;_success=!1;constructor(e,t,n){this.createElement(e),this.cardNumber=t,this.flip=n,this.handleClick()}createElement(e){this.cardElement=document.createElement("div"),this.cardElement.classList.add("card"),this.cardElement.textContent=this.cardNumber,e.append(this.cardElement)}handleClick(){this.cardElement.addEventListener("click",(()=>{this.open||this.success||(this.open=!0,this.flip(this))}))}set cardNumber(e){this._cardNumber=e,this.cardElement&&(this.cardElement.textContent=e)}get cardNumber(){return this._cardNumber}set open(e){this._open=e,e?this.cardElement.classList.add("flipped"):this.cardElement.classList.remove("flipped")}get open(){return this._open}set success(e){this._success=e,e?this.cardElement.classList.add("matched"):this.cardElement.classList.remove("matched")}get success(){return this._success}}class q extends O{constructor(e,t,n){super(e,t,n)}set cardNumber(e){let t=[y,E,N,k,L,x,S,T,$,j,A,C,I,B,M,D,V,P];const n=document.createElement("img");n.classList.add("card__img"),n.src=t[e-1],this.cardElement&&(this.cardElement.innerHTML="",this.cardElement.append(n)),n.onerror=()=>{throw n.src="./img/default.png",new Error("Не удалось загрузить изображение")},this._cardNumber=e}get cardNumber(){return this._cardNumber}}let H=!1;const R=()=>{H=!1,l.innerHTML="",c.parentNode.classList.remove("hidden"),d.classList.add("hidden"),b()};m.addEventListener("click",(()=>{R(),z()})),p.addEventListener("click",(()=>{R(),r[1].classList.add("up"),r[0].classList.remove("down")})),f.addEventListener("click",(()=>{R(),r[0].classList.add("down"),r[1].classList.remove("up"),z()}));let F=!1,G=null,U=null,X=[];const z=e=>{let t=Number(u.value);e=Math.pow(t,2),X=(e=>{const t=[];for(let n=1;n<=e/2;++n)t.push(n,n);return(e=>{for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e})(t)})(e);let n=t;l.style=`grid-template-columns: repeat(${n}, 1fr); grid-template-rows: repeat(${n}, 1fr)`,J(e)},J=e=>{for(let t=0;t<e;t++)h.checked?new O(l,X[t],K):_.checked&&new q(l,X[t],K)},K=e=>{null!==G&&null!==U&&(G.open=!1,U.open=!1,G=null,U=null),null===G?G=e:U=e,Q()},Q=()=>{null!==G&&null!==U&&G.cardNumber===U.cardNumber&&(G.success=!0,U.success=!0,G=null,U=null),W()},W=()=>{document.querySelectorAll(".matched").length===X.length&&setTimeout((()=>{Y("Победа!")}),500)},Y=e=>{F=!0,l.style="grid-template-columns: repeat(1, 1fr)",l.innerHTML=`<p class="text">${e}</p>`,c.parentNode.classList.add("hidden"),d.classList.remove("hidden"),b()}}()}();