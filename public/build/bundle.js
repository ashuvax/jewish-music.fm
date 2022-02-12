!function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function i(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}const l="undefined"!=typeof window;let u=l?()=>window.performance.now():()=>Date.now(),f=l?t=>requestAnimationFrame(t):t;const d=new Set;function h(t){d.forEach((e=>{e.c(t)||(d.delete(e),e.f())})),0!==d.size&&f(h)}function p(t,e){t.appendChild(e)}function m(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function b(){return t=" ",document.createTextNode(t);var t}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let y;function v(t){y=t}const j=[],$=[],_=[],E=[],k=Promise.resolve();let A=!1;function C(t){_.push(t)}let M=!1;const S=new Set;function T(){if(!M){M=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];v(e),q(e.$$)}for(v(null),j.length=0;$.length;)$.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];S.has(e)||(S.add(e),e())}_.length=0}while(j.length);for(;E.length;)E.pop()();A=!1,M=!1,S.clear()}}function q(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const O=new Set;function z(t,e){-1===t.$$.dirty[0]&&(j.push(t),A||(A=!0,k.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(e,n,c,a,l,u,f=[-1]){const d=y;v(e);const h=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:r(),dirty:f,skip_bound:!1};let p=!1;if(h.ctx=c?c(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&l(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&z(e,t)),n})):[],h.update(),p=!0,s(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();n.intro&&((g=e.$$.fragment)&&g.i&&(O.delete(g),g.i(b))),function(t,e,n,r){const{fragment:c,on_mount:a,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,n),r||C((()=>{const e=a.map(o).filter(i);l?l.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(C)}(e,n.target,n.anchor,n.customElement),T()}var g,b;v(d)}const P=[];function L(e,n=t){let o;const r=[];function s(t){if(c(e,t)&&(e=t,o)){const t=!P.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),P.push(n,e)}if(t){for(let t=0;t<P.length;t+=2)P[t][0](P[t+1]);P.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const a=[i,c];return r.push(a),1===r.length&&(o=n(s)||t),i(e),()=>{const t=r.indexOf(a);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function R(t){return"[object Date]"===Object.prototype.toString.call(t)}function N(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const n=e.map(((e,n)=>N(t[n],e)));return t=>n.map((e=>e(t)))}if("object"===n){if(!t||!e)throw new Error("Object cannot be null");if(R(t)&&R(e)){t=t.getTime();const n=(e=e.getTime())-t;return e=>new Date(t+e*n)}const n=Object.keys(e),o={};return n.forEach((n=>{o[n]=N(t[n],e[n])})),t=>{const e={};return n.forEach((n=>{e[n]=o[n](t)})),e}}if("number"===n){const n=e-t;return e=>t+e*n}throw new Error(`Cannot interpolate ${n} values`)}const I=function(t,o={}){const r=L(t);let s,i=t;function c(c,a){if(null==t)return r.set(t=c),Promise.resolve();i=c;let l=s,p=!1,{delay:m=0,duration:g=400,easing:b=e,interpolate:w=N}=n(n({},o),a);if(0===g)return l&&(l.abort(),l=null),r.set(t=i),Promise.resolve();const x=u()+m;let y;return s=function(t){let e;return 0===d.size&&f(h),{promise:new Promise((n=>{d.add(e={c:t,f:n})})),abort(){d.delete(e)}}}((e=>{if(e<x)return!0;p||(y=w(t,c),"function"==typeof g&&(g=g(t,c)),p=!0),l&&(l.abort(),l=null);const n=e-x;return n>g?(r.set(t=c),!1):(r.set(t=y(b(n/g))),!0)})),s.promise}return{set:c,update:(e,n)=>c(e(i,t),n),subscribe:r.subscribe}}(0),D=L(0),J=L(1),F=L("visible");let H={v:!1};function U(t){console.log(t);const e=document.querySelector("#text");e.innerText+=t+"\n",e.scrollTo({top:e.scrollHeight,behavior:"smooth"})}function G(t){if(0==t)return"0 Byte";var e=Math.trunc(Math.floor(Math.log(t)/Math.log(1024)));return Math.round(t/Math.pow(1024,e))+" "+["Bytes","KB","MB","GB","TB"][e]}window.s=H;var K=function(t){var e=/(%?)(%([jds]))/g,n=Array.prototype.slice.call(arguments,1);return n.length&&(t=t.replace(e,(function(t,e,o,r){var s=n.shift();switch(r){case"s":s=""+s;break;case"d":s=Number(s);break;case"j":s=JSON.stringify(s)}return e?(n.unshift(s),t):s}))),n.length&&(t+=" "+n.join(" ")),""+(t=t.replace(/%{2,2}/g,"%"))};const Z="מוריד את קובץ %s...",Q="דוחס את קובץ %s...",V="הקובץ מוכן להורדה!",W="מקובץ %s ירדו %s מתוך %s",X="אתר זה, איננו jewishmusic.fm!",Y="בדף זה, אין קבצי אודיו!";function tt(t,e=0){let n;return new Promise((async(o,r)=>{n=fetch(t.url,{headers:{Range:"bytes=0-"}});const s=await n;if(s.status<200||s.status>=400){if(!(e<5))throw r(),s;e++,U("!!!"),await new Promise((t=>setTimeout(t,1e3))),o(tt(t,e))}const i=s.body.getReader(),c=s.headers.get("Content-Length");let a=0;const l=new Response(new ReadableStream({async start(e){const n=setInterval((()=>{U(K(W,t.file_name,G(a),G(c)))}),1e3);for(;;){if(H.v)throw clearInterval(n),e.close(),new Error("window closed!");const{done:t,value:o}=await i.read();if(t){clearInterval(n);break}a+=o.length,e.enqueue(o)}e.close()}}));o(await l.blob())}))}async function et(){const t=function(){const t=document.querySelectorAll("audio > source");let e=Array.from(t);const n=Array();return e.forEach((t=>{n.push({url:t.src.replace("http://","https://"),file_name:t.parentElement.parentElement.querySelector("h3").innerText})})),n}();let e=new window.JSZip;D.set(t.length);let n=0;for(const o of t){if(H.v)throw new Error("window closed!");U(K(Z,o.file_name));const t=await tt(o);U(K(Q,o.file_name));const r=o.url.split(".").pop();e.file(o.file_name+"."+r,t,{binary:!0}),n++,I.set(n)}U(K(V)),await async function(t){const e=document.querySelector(".album-title").innerText,n=document.querySelector(".arts_name").innerText,o=`${e} - ${n}`;!async function(t,e){var n=URL.createObjectURL(t),o=document.createElement("a");o.href=n,o.download=e||"download",document.body.appendChild(o),o.click(),o.remove()}(await t.generateAsync({type:"blob"}),o)}(e)}const nt=document.createElement("div");function ot(){H.v=!0,J.set(0),F.set("hidden"),setTimeout((()=>{nt.remove()}),3e3)}function rt(e){let n,o,r,s,i,c,a,l,u,f,d,h,y,v;return{c(){n=g("div"),o=g("div"),r=g("div"),r.textContent="הורדה מאתר Jewish-music.Fm",s=b(),i=g("div"),c=b(),a=g("div"),l=g("progress"),u=b(),f=g("div"),d=b(),h=g("div"),h.innerHTML='<a href="https://github.com/MusiCode1/jewish-music.fm" target="_"><em>MusiCode</em></a>',w(r,"id","window-text"),w(r,"class","svelte-rmhjxh"),w(i,"id","close"),w(i,"class","svelte-rmhjxh"),w(o,"id","bar"),w(o,"class","svelte-rmhjxh"),l.value=e[2],w(l,"max",e[3]),w(l,"class","svelte-rmhjxh"),w(f,"id","text"),w(f,"class","svelte-rmhjxh"),w(h,"id","credit"),w(h,"class","svelte-rmhjxh"),w(a,"id","window-content"),w(a,"class","svelte-rmhjxh"),w(n,"id","window"),x(n,"visibility",e[0]),x(n,"opacity",e[1]),w(n,"class","svelte-rmhjxh")},m(t,e){var m,g,b,w;!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),p(n,o),p(o,r),p(o,s),p(o,i),p(n,c),p(n,a),p(a,l),p(a,u),p(a,f),p(a,d),p(a,h),y||(g="click",b=ot,(m=i).addEventListener(g,b,w),v=()=>m.removeEventListener(g,b,w),y=!0)},p(t,[e]){4&e&&(l.value=t[2]),8&e&&w(l,"max",t[3]),1&e&&x(n,"visibility",t[0]),2&e&&x(n,"opacity",t[1])},i:t,o:t,d(t){t&&m(n),y=!1,v()}}}function st(t,e,n){let o,r,s,i;return a(t,F,(t=>n(0,o=t))),a(t,J,(t=>n(1,r=t))),a(t,I,(t=>n(2,s=t))),a(t,D,(t=>n(3,i=t))),[o,r,s,i]}nt.classList.add("app"),document.body.appendChild(nt);class it extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){var e;super(),document.getElementById("svelte-rmhjxh-style")||((e=g("style")).id="svelte-rmhjxh-style",e.textContent="#window.svelte-rmhjxh{position:fixed;left:10%;right:10%;top:20%;bottom:20%;max-width:660px;margin:auto;backdrop-filter:blur(8px);border-radius:30px;background:rgba(255, 255, 255, 0.73);box-shadow:0px 0px 13px 1px;transition:all 3s ease-out;z-index:20}#bar.svelte-rmhjxh{position:absolute;height:50px;left:0;right:0;background:#7c7c7c;border-radius:30px 30px 0px 0px}#window-text.svelte-rmhjxh{height:100%;display:flex;align-items:center;justify-content:space-around;text-align:center;font-size:24px;line-height:28px;color:#ececec;font-family:system-ui;position:relative;width:calc(100% - 60px)}#close.svelte-rmhjxh{position:absolute;width:20px;height:20px;left:40px;top:15px;background:#de4f4f;border-radius:50%}#close.svelte-rmhjxh:hover{background:#f87878}#window-content.svelte-rmhjxh{position:relative;top:50px;padding:2em;height:calc(100% - 50px);box-sizing:border-box}progress.svelte-rmhjxh{width:100%;height:50px}#text.svelte-rmhjxh{font-size:20px;font-family:system-ui;overflow-y:scroll;height:calc(100% - 50px);direction:rtl}#credit.svelte-rmhjxh{text-align:left;color:#b6abab}",p(document.head,e)),B(this,t,st,rt,c,{})}}(async()=>{try{console.log("Musicode7"),console.log("https://github.com/MusiCode1/jewish-music.fm"),function(){const t=document.querySelectorAll("audio > source");if("jewishmusic.fm"!==window.location.hostname)throw new Error(X);if(t.length<1)throw new Error(Y)}(),await async function(t){const e=document.createElement("script");e.type="text/javascript",e.src=t,document.head.appendChild(e),await new Promise((t=>e.onload=t))}("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.6.0/jszip.min.js"),new it({target:nt}),et().finally((()=>{ot()}))}catch(t){throw"window closed!"===t.massage?(console.log(t.massage),t):(alert(t),t)}})()}();
