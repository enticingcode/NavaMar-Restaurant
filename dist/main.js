(()=>{"use strict";function e(){const e=document.querySelector("#videoContainer"),t=document.querySelector("#header"),n=document.querySelector("#info"),o=document.querySelector("#navBar"),r=(document.querySelector("#content"),document.querySelector("#imgContain")),c=document.querySelector("#contactContainer");function u(e){null!=e&&e.remove()}u(e),u(t),u(n),u(o),u(r),u(c),console.log("never makes it here"),a()}function t(){let e=document.querySelector("#imgContain"),t=document.querySelector("#info"),n=document.querySelector("#contactContainer"),o=document.querySelector("#content");document.querySelector("#navBar").classList.add("dissapearMenu"),null!=e?e.remove():null!=t?(console.log(t),console.log(n),t.remove()):null!=n&&n.remove();let r=document.createElement("div");r.setAttribute("id","info");let c=document.createElement("p");c.setAttribute("id","aboutInfo"),c.innerText="At NavaMar we pride ourselves in preparing and serving up the freshest ingredients into your Poke Bowls. New Locations opening soon! ",r.append(c),o.append(r)}function n(){document.querySelector("#navBar").classList.add("dissapearMenu");let e=document.querySelector("#content"),t=document.querySelector("#info"),n=document.querySelector("#contactContainer");null!=t?t.remove():null!=n&&n.remove();let o=document.querySelector("#imgContain");null!=o&&o.remove();let r=["/images/index.jpeg","/images/pokepoke.jpg","/images/Pokebowl.jpg"],c=document.createElement("div");c.setAttribute("id","imgContain");let a=["Raw Aficionado","Es-da-Mama's Greens","The NavaMar Special"];for(let e=0;e<3;e++){let t=document.createElement("figure"),n=document.createElement("figcaption"),o=document.createElement("img");o.src=`${r[e]}`,n.innerText=`${a[e]}`,o.classList.add("images"),t.append(o),t.append(n),c.append(t)}e.append(c)}function o(){let e=document.querySelector("#content"),t=document.querySelector("#info"),n=document.querySelector("#imgContain");const o=document.querySelector("#navBar");null!=t?t.remove():null!=n&&n.remove();let r=document.createElement("div");r.setAttribute("id","contactContainer");let c=document.querySelector("#contactContainer");null!=c&&c.remove();let a=document.createElement("p"),u=document.createElement("p"),d=document.createElement("img");a.innerText="(626) 534-2012",u.innerText="423 N College Ave, Fayetteville, AR 72701",d.src="/images/map.png",r.append(a),r.append(u),r.append(d),e.append(r),o.classList.add("dissapearMenu")}const r=document.querySelector("#content");function c(e,t,n){let o=document.createElement("button");return o.className=e,o.textContent=t,o.setAttribute("id",n),o}function a(){let a=function(e,t){const n=document.createElement("header");n.setAttribute("id","header");let o=document.createElement("h1");return o.textContent="Bienvenidos a NavaMar",n.append(o),n}(),u=function(){let e=document.createElement("div");e.setAttribute("id","videoContainer");let t=document.createElement("video");return t.src="/video/POKEVID.mp4",t.autoplay=!0,t.muted=!0,t.playsInline=!0,t.loop=!0,t.setAttribute("id","videoBanner"),e.append(t),e}(),d=document.querySelector("#menu"),i=function(e){let t=document.createElement("nav");t.setAttribute("id","navBar");let n=c("navBtn","Home","home"),o=c("navBtn","About","about"),r=c("navBtn","Food","food"),a=c("navBtn","Contact","contact");return t.classList.add("dissapearMenu"),t.append(n),t.append(o),t.append(r),t.append(a),t}();r.append(u),r.append(a),d.append(i),function(){let e=function(e,t){let n=document.createElement("div");return n.setAttribute("id","info"),n.textContent="Welcome to Northwest Arkansas's best Poke Experience!",n}();r.append(e)}();const l=document.querySelector("#home"),m=document.querySelector("#about"),s=document.querySelector("#food"),p=document.querySelector("#contact");l.addEventListener("click",e),m.addEventListener("click",t),s.addEventListener("click",n),p.addEventListener("click",o),document.querySelector("#arrowBtn").addEventListener("click",(function(){"dissapearMenu"==i.classList?i.classList.remove("dissapearMenu"):i.classList.add("dissapearMenu")}))}a()})();