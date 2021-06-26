function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function i(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}const l="undefined"!=typeof window;let u=l?()=>window.performance.now():()=>Date.now(),d=l?t=>requestAnimationFrame(t):t;const f=new Set;function p(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&d(p)}function h(t,e){t.appendChild(e)}function m(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function y(){return t=" ",document.createTextNode(t);var t}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let w;function v(t){w=t}const $=[],j=[],_=[],E=[],k=Promise.resolve();let A=!1;function S(t){_.push(t)}let C=!1;const q=new Set;function T(){if(!C){C=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];v(e),M(e.$$)}for(v(null),$.length=0;j.length;)j.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];q.has(e)||(q.add(e),e())}_.length=0}while($.length);for(;E.length;)E.pop()();A=!1,C=!1,q.clear()}}function M(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const O=new Set;function z(t,e){-1===t.$$.dirty[0]&&($.push(t),A||(A=!0,k.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(e,n,c,a,l,u,d=[-1]){const f=w;v(e);const p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:r(),dirty:d,skip_bound:!1};let h=!1;if(p.ctx=c?c(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&z(e,t)),n})):[],p.update(),h=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(m)}else p.fragment&&p.fragment.c();n.intro&&((b=e.$$.fragment)&&b.i&&(O.delete(b),b.i(y))),function(t,e,n,r){const{fragment:c,on_mount:a,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,n),r||S((()=>{const e=a.map(o).filter(i);l?l.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(S)}(e,n.target,n.anchor,n.customElement),T()}var b,y;v(f)}const P=[];function L(e,n=t){let o;const r=[];function s(t){if(c(e,t)&&(e=t,o)){const t=!P.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),P.push(n,e)}if(t){for(let t=0;t<P.length;t+=2)P[t][0](P[t+1]);P.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const a=[i,c];return r.push(a),1===r.length&&(o=n(s)||t),i(e),()=>{const t=r.indexOf(a);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function R(t){return"[object Date]"===Object.prototype.toString.call(t)}function N(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const n=e.map(((e,n)=>N(t[n],e)));return t=>n.map((e=>e(t)))}if("object"===n){if(!t||!e)throw new Error("Object cannot be null");if(R(t)&&R(e)){t=t.getTime();const n=(e=e.getTime())-t;return e=>new Date(t+e*n)}const n=Object.keys(e),o={};return n.forEach((n=>{o[n]=N(t[n],e[n])})),t=>{const e={};return n.forEach((n=>{e[n]=o[n](t)})),e}}if("number"===n){const n=e-t;return e=>t+e*n}throw new Error(`Cannot interpolate ${n} values`)}const I=function(t,o={}){const r=L(t);let s,i=t;function c(c,a){if(null==t)return r.set(t=c),Promise.resolve();i=c;let l=s,h=!1,{delay:m=0,duration:b=400,easing:y=e,interpolate:g=N}=n(n({},o),a);if(0===b)return l&&(l.abort(),l=null),r.set(t=i),Promise.resolve();const x=u()+m;let w;return s=function(t){let e;return 0===f.size&&d(p),{promise:new Promise((n=>{f.add(e={c:t,f:n})})),abort(){f.delete(e)}}}((e=>{if(e<x)return!0;h||(w=g(t,c),"function"==typeof b&&(b=b(t,c)),h=!0),l&&(l.abort(),l=null);const n=e-x;return n>b?(r.set(t=c),!1):(r.set(t=w(y(n/b))),!0)})),s.promise}return{set:c,update:(e,n)=>c(e(i,t),n),subscribe:r.subscribe}}(0),D=L(0);var J=function(t){var e=/(%?)(%([jds]))/g,n=Array.prototype.slice.call(arguments,1);return n.length&&(t=t.replace(e,(function(t,e,o,r){var s=n.shift();switch(r){case"s":s=""+s;break;case"d":s=Number(s);break;case"j":s=JSON.stringify(s)}return e?(n.unshift(s),t):s}))),n.length&&(t+=" "+n.join(" ")),""+(t=t.replace(/%{2,2}/g,"%"))};const F="מוריד את קובץ %s...",U="דוחס את קובץ %s...",G="הקובץ מוכן להורדה!",H="מקובץ %s ירדו %s מתוך %s";async function K(){await async function(t){const e=document.createElement("script");e.type="text/javascript",e.src=t,document.head.appendChild(e),await new Promise((t=>e.onload=t))}("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.6.0/jszip.min.js");const t=document.querySelectorAll("audio > source");let e=new window.JSZip;D.set(t.length);let n=0;for(const o of t){let t=o.src.replace("http://","https://");const r=t.split("/").pop();V(J(F,r));const s=await Z(t);V(J(U,r)),e.file(r,s,{binary:!0}),n++,I.set(n)}V(J(G)),await async function(t){const e=document.querySelector(".album-title").innerText,n=document.querySelector(".arts_name").innerText,o=`${e} - ${n}`;!async function(t,e){var n=URL.createObjectURL(t),o=document.createElement("a");o.href=n,o.download=e||"download",document.body.appendChild(o),o.click(),o.remove()}(await t.generateAsync({type:"blob"}),o)}(e)}function Z(t,e=0){let n;const o=new Promise((async(o,r)=>{const s=t.split("/").pop();n=fetch(t,{headers:{Range:"bytes=0-"}});const i=await n;if(i.status<200||i.status>=400){if(!(e<5))throw r(),i;e++,V("!!!"),await new Promise((t=>setTimeout(t,1e3))),o(Z(t,e))}const c=i.body.getReader(),a=i.headers.get("Content-Length");let l=0;const u=new Response(new ReadableStream({async start(t){const e=setInterval((()=>{V(J(H,s,Q(l),Q(a)))}),1e3);for(;;){const{done:n,value:o}=await c.read();if(n){clearInterval(e);break}l+=o.length,t.enqueue(o)}t.close()}}));o(await u.blob())}));return o.res=n,o}function Q(t){if(0==t)return"0 Byte";var e=parseInt(Math.floor(Math.log(t)/Math.log(1024)));return Math.round(t/Math.pow(1024,e),2)+" "+["Bytes","KB","MB","GB","TB"][e]}function V(t){console.log(t);const e=document.querySelector("#text");e.innerText+=t+"\n",e.scrollTo({top:e.scrollHeight,behavior:"smooth"})}const W=document.createElement("div");function X(e){let n,o,r,s,i,c,a,l,u,d,f,p;return{c(){n=b("div"),o=b("div"),r=b("div"),r.textContent="הורדה מאתר Jewish-music.Fm",s=y(),i=b("div"),c=y(),a=b("div"),l=b("progress"),u=y(),d=b("div"),g(r,"id","window-text"),g(r,"class","svelte-1s2xd4u"),g(i,"id","close"),g(i,"class","svelte-1s2xd4u"),g(o,"id","bar"),g(o,"class","svelte-1s2xd4u"),l.value=e[2],g(l,"max",e[3]),g(l,"class","svelte-1s2xd4u"),g(d,"id","text"),g(d,"class","svelte-1s2xd4u"),g(a,"id","window-content"),g(a,"class","svelte-1s2xd4u"),g(n,"id","window"),x(n,"visibility",e[1]),x(n,"opacity",e[0]),g(n,"class","svelte-1s2xd4u")},m(t,m){var b,y,g,x;!function(t,e,n){t.insertBefore(e,n||null)}(t,n,m),h(n,o),h(o,r),h(o,s),h(o,i),h(n,c),h(n,a),h(a,l),h(a,u),h(a,d),f||(b=i,y="click",g=e[4],b.addEventListener(y,g,x),p=()=>b.removeEventListener(y,g,x),f=!0)},p(t,[e]){4&e&&(l.value=t[2]),8&e&&g(l,"max",t[3]),2&e&&x(n,"visibility",t[1]),1&e&&x(n,"opacity",t[0])},i:t,o:t,d(t){t&&m(n),f=!1,p()}}}function Y(t,e,n){let o,r;a(t,I,(t=>n(2,o=t))),a(t,D,(t=>n(3,r=t)));let s=1,i="visible";return[s,i,o,r,function(){n(0,s=0),n(1,i="hidden")}]}W.classList.add("app"),document.body.appendChild(W);class tt extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){var e;super(),document.getElementById("svelte-1s2xd4u-style")||((e=b("style")).id="svelte-1s2xd4u-style",e.textContent="#window.svelte-1s2xd4u{position:fixed;left:10%;right:10%;top:20%;bottom:20%;max-width:660px;margin:auto;backdrop-filter:blur(8px);border-radius:30px;background:rgba(255, 255, 255, 0.73);box-shadow:0px 0px 13px 1px;transition:all 3s ease-out;z-index:20}#bar.svelte-1s2xd4u{position:absolute;height:50px;left:0;right:0;background:#7c7c7c;border-radius:30px 30px 0px 0px}#window-text.svelte-1s2xd4u{height:100%;display:flex;align-items:center;justify-content:space-around;font-size:24px;line-height:28px;color:#ececec;font-family:system-ui}#close.svelte-1s2xd4u{position:absolute;width:20px;height:20px;left:40px;top:15px;background:#de4f4f;border-radius:50%}#close.svelte-1s2xd4u:hover{background:#f87878}#window-content.svelte-1s2xd4u{position:relative;top:50px;padding:2em;height:calc(100% - 50px);box-sizing:border-box}progress.svelte-1s2xd4u{width:100%;height:50px}#text.svelte-1s2xd4u{font-size:20px;font-family:system-ui;overflow-y:scroll;height:calc(100% - 50px);direction:rtl}",h(document.head,e)),B(this,t,Y,X,c,{})}}window.app=async()=>{try{console.log("Musicode7"),console.log("https://gist.github.com/MusiCode1/c50432ad3f413a958e6f3aea7c214cfc"),function(){const t=document.querySelectorAll("audio > source");if("jewishmusic.fm"!=window.location.hostname)throw new Error("זה איננו jewishmusic.fm!");if(t.length<1)throw new Error("אין בדף זה קבצי מוזיקה!")}(),new tt({target:W}),K().finally((()=>{document.querySelector("#window").style.opacity=0,document.querySelector("#window").style.visibility="hidden",setTimeout((()=>{W.remove()}),3e3)}))}catch(t){throw alert(t),t}};
