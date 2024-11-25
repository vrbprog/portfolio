import{a as D,i as M,S as _,N as E,K as T,c as P}from"./assets/vendor-D5dh7xdJ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g=document.querySelector(".toggle"),m=document.body;g.addEventListener("click",()=>{m.classList.contains("bg-dark")?(m.classList.remove("bg-dark"),m.classList.add("bg-light"),g.classList.remove("dark")):(m.classList.remove("bg-light"),m.classList.add("bg-dark"),g.classList.add("dark"))});const j="/portfolio/assets/projects-desk-03-min-bAztutHK.png",B="/portfolio/assets/projects-desk-03@2x-min-D7O6BJsL.png",$="/portfolio/assets/projects-mob-03-min-BsXsyoM6.png",C="/portfolio/assets/projects-mob-03@2x-min-tmcSzpo2.png",N="/portfolio/assets/projects-tabl-03-min-ZgDTbOh9.png",O="/portfolio/assets/projects-tabl-03@2x-min-Dqd8dn0C.png",v="/portfolio/assets/projects-desk-04-min-yxZx66BP.png",z="/portfolio/assets/projects-desk-04@2x-min-DHJNdR6B.png",A="/portfolio/assets/projects-mob-04-min-5yr3aGDi.png",F="/portfolio/assets/projects-mob-04@2x-min-BeXemoj4.png",I="/portfolio/assets/projects-tabl-04-min-Dt9XScdK.png",X="/portfolio/assets/projects-tabl-04@2x-min-B8Ml2TOY.png",h="/portfolio/assets/projects-desk-05-min-CfD1cLSZ.png",K="/portfolio/assets/projects-desk-05@2x-min-BRPn2X1J.png",R="/portfolio/assets/projects-mob-05-min-Db3py1Xm.png",H="/portfolio/assets/projects-mob-05@2x-min-B8zvmCB6.png",J="/portfolio/assets/projects-tabl-05-min-F3tbbktz.png",W="/portfolio/assets/projects-tabl-05@2x-min-BRqBFzgK.png",k="/portfolio/assets/projects-desk-06-min-X_gqtJm5.png",Z="/portfolio/assets/projects-desk-06@2x-min-Dj8eCfdF.png",Q="/portfolio/assets/projects-mob-06-min-C9QNW9Tj.png",V="/portfolio/assets/projects-mob-06@2x-min-DEtw7lg5.png",U="/portfolio/assets/projects-tabl-06-min-ugbcXMlD.png",G="/portfolio/assets/projects-tabl-06@2x-min-CmmfjQzn.png",y="/portfolio/assets/projects-desk-07-min--lZv1p8n.png",Y="/portfolio/assets/projects-desk-07@2x-min-DmSkXiQs.png",ee="/portfolio/assets/projects-mob-07-min-BSVWNsA-.png",te="/portfolio/assets/projects-mob-07@2x-min-Dd3dUvIN.png",oe="/portfolio/assets/projects-tabl-07-min-CPlUFmPk.png",se="/portfolio/assets/projects-tabl-07@2x-min-BDIDMcu4.png",w="/portfolio/assets/projects-desk-08-min-xocuOah2.png",re="/portfolio/assets/projects-desk-08@2x-min-BIWP6k6v.png",ce="/portfolio/assets/projects-mob-08-min-DBYeKoNQ.png",ne="/portfolio/assets/projects-mob-08@2x-min-Ws78KLoX.png",ie="/portfolio/assets/projects-tabl-08-min-C_fZqAdW.png",ae="/portfolio/assets/projects-tabl-08@2x-min-DRzjhCHA.png",L="/portfolio/assets/projects-desk-09-min-DsvIyQeP.png",le="/portfolio/assets/projects-desk-09@2x-min-BvUdwZmo.png",pe="/portfolio/assets/projects-mob-09-min-DX2Z5Nr9.png",de="/portfolio/assets/projects-mob-09@2x-min-Cc_85EFK.png",me="/portfolio/assets/projects-tabl-09-min-DT00A0X5.png",ue="/portfolio/assets/projects-tabl-09@2x-min-BOveHSsW.png",f=[{alt:"Mimino website",img:j,sources:{mobile:{"1x":$,"2x":C},tablet:{"1x":N,"2x":O},desktop:{"1x":j,"2x":B}}},{alt:"Vyshyvanka vibes Landing Page",img:v,sources:{mobile:{"1x":A,"2x":F},tablet:{"1x":I,"2x":X},desktop:{"1x":v,"2x":z}}},{alt:"Power pulse webservice",img:h,sources:{mobile:{"1x":R,"2x":H},tablet:{"1x":J,"2x":W},desktop:{"1x":h,"2x":K}}},{alt:"Chego jewelry website",img:k,sources:{mobile:{"1x":Q,"2x":V},tablet:{"1x":U,"2x":G},desktop:{"1x":k,"2x":Z}}},{alt:"Energy flow webservice ",img:y,sources:{mobile:{"1x":ee,"2x":te},tablet:{"1x":oe,"2x":se},desktop:{"1x":y,"2x":Y}}},{alt:"Starlight studio landing page",img:w,sources:{mobile:{"1x":ce,"2x":ne},tablet:{"1x":ie,"2x":ae},desktop:{"1x":w,"2x":re}}},{alt:"Fruitbox online store",img:L,sources:{mobile:{"1x":pe,"2x":de},tablet:{"1x":me,"2x":ue},desktop:{"1x":L,"2x":le}}}],fe=document.querySelector(".project-list"),S=document.querySelector(".more-projects");let ge=document.querySelector("li.project_card");S.addEventListener("click",be);let p=0;function be(){const o=ge.getBoundingClientRect().height,r=f.slice(p,p+3);fe.insertAdjacentHTML("beforeend",xe(r));let c=3;f.length-p<3&&(c=f.length-p),window.scrollBy({top:o*c,left:0,behavior:"smooth"}),p+=r.length,p>=f.length&&S.classList.add("hidden")}function xe(o){return o.map(({alt:s,img:r,sources:{mobile:c,tablet:e,desktop:t}})=>`
      <li class="project_card">
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="${c["1x"]} 1x, ${c["2x"]} 2x"
          />
          <source
            media="(max-width: 1279px)"
            srcset="${e["1x"]} 1x, ${e["2x"]} 2x"
          />
          <source
            media="(min-width: 1280px)"
            srcset="${t["1x"]} 1x, ${t["2x"]} 2x"
          />
          <img
            class="project-img-card"
            src="${r}"
            alt="${s}"
            loading="lazy"
          />
        </picture>

        <p class="project-skills">React, JavaScript, Node JS, Git</p>
        <div class="bottom-box">
          <h3 class="project-name">${s}</h3>
          <a class="visit-button"
            href="https://github.com/VH-str/project-JS-TeamWork-FullStalkers"
            target="blanc"
          >
            VISIT
            <svg width="24" height="24">
              <use href="../img/my_projects/icon-icon_visit.svg#icon-icon_visit"></use>
            </svg>
          </a>
        </div>
      </li>`).join("")}const b=document.querySelector(".ham-menu"),x=document.querySelector(".off-screen-menu");b.addEventListener("click",()=>{b.classList.toggle("active"),x.classList.toggle("active")});x.addEventListener("click",()=>{b.classList.toggle("active"),x.classList.toggle("active")});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll(".faq-item"),s=o[0],r=o[0].querySelector(".faq-answer"),c=o[0].querySelector(".faq-arrow"),e=s.querySelector(".faq-question");s.classList.add("open"),r.classList.add("show"),c.classList.add("open"),e.classList.add("active"),o.forEach(n=>{const i=n.querySelector(".faq-question"),l=n.querySelector(".faq-answer"),a=n.querySelector(".faq-arrow");i.addEventListener("click",()=>{t(n,l,a,i)}),a.addEventListener("click",d=>{d.stopPropagation(),t(n,l,a,i)})});function t(n,i,l,a){const d=i.classList.contains("show");o.forEach(u=>{u.classList.remove("open"),u.querySelector(".faq-answer").classList.remove("show"),u.querySelector(".faq-arrow").classList.remove("open"),u.querySelector(".faq-question").classList.remove("active")}),d||(n.classList.add("open"),i.classList.add("show"),l.classList.add("open"),a.classList.add("active"))}});const q=document.querySelector(".swiper-wrapper"),je=document.querySelector(".button-wrapper");function ve(o){const s=o.map(({author:r,avatar_url:c,review:e,_id:t})=>t===5?`<li class="swiper-slide">
					<p class="reviews-text">${e.slice(0,-31)}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${c}" alt="${r}">
						<h2 class="reviews-author">${r}</h2>
					</div>
				</li>`:`<li class="swiper-slide">
					<p class="reviews-text">${e}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${c}" alt="${r}">
						<h2 class="reviews-author">${r}</h2>
					</div>
				</li>`).join("");q.innerHTML=s,je.classList.remove("visually-hidden")}function he(){const o=`<li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li><li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li>`;q.innerHTML=o}async function ke(o){try{const{data:s}=await D.get("https://portfolio-js.b.goit.study/api/reviews");ve(s)}catch(s){he(),M.error({position:"topRight",message:s.message})}}ke();new _(".swiper",{modules:[E,T],direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}}});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".wt-form"),s=document.querySelector(".backdrop");document.querySelector(".modal");const r=document.querySelector(".close-button-modal"),c="https://portfolio-js.b.goit.study/api/requests";function e(){s.classList.add("is-open")}function t(){s.classList.remove("is-open")}function n(i){i.key==="Escape"&&t()}s.addEventListener("click",i=>{i.target===s&&t()}),r.addEventListener("click",t),o.addEventListener("submit",async i=>{i.preventDefault();const l=o.querySelector("#user-email").value.trim();o.querySelector("#user-message").value.trim();try{const a=await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,comment:P})});if(!a.ok)throw new Error("Failed to send the request. Please try again.");const d=await a.json();console.log("Success:",d),e(),o.reset()}catch(a){alert(`Error: ${a.message}`)}}),document.addEventListener("keydown",n)});
//# sourceMappingURL=index.js.map
