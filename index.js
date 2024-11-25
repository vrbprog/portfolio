import{a as q,i as D,S as M,N as _,K as T,c as E}from"./assets/vendor-D5dh7xdJ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=document.querySelector(".toggle"),d=document.body;f.addEventListener("click",()=>{d.classList.contains("bg-dark")?(d.classList.remove("bg-dark"),d.classList.add("bg-light"),f.classList.remove("dark")):(d.classList.remove("bg-light"),d.classList.add("bg-dark"),f.classList.add("dark"))});const x="/portfolio/assets/projects-desk-03-min-bAztutHK.png",P="/portfolio/assets/projects-desk-03@2x-min-D7O6BJsL.png",B="/portfolio/assets/projects-mob-03-min-BsXsyoM6.png",$="/portfolio/assets/projects-mob-03@2x-min-tmcSzpo2.png",C="/portfolio/assets/projects-tabl-03-min-ZgDTbOh9.png",N="/portfolio/assets/projects-tabl-03@2x-min-Dqd8dn0C.png",j="/portfolio/assets/projects-desk-04-min-yxZx66BP.png",O="/portfolio/assets/projects-desk-04@2x-min-DHJNdR6B.png",z="/portfolio/assets/projects-mob-04-min-5yr3aGDi.png",A="/portfolio/assets/projects-mob-04@2x-min-BeXemoj4.png",F="/portfolio/assets/projects-tabl-04-min-Dt9XScdK.png",X="/portfolio/assets/projects-tabl-04@2x-min-B8Ml2TOY.png",v="/portfolio/assets/projects-desk-05-min-CfD1cLSZ.png",I="/portfolio/assets/projects-desk-05@2x-min-BRPn2X1J.png",K="/portfolio/assets/projects-mob-05-min-Db3py1Xm.png",R="/portfolio/assets/projects-mob-05@2x-min-B8zvmCB6.png",H="/portfolio/assets/projects-tabl-05-min-F3tbbktz.png",J="/portfolio/assets/projects-tabl-05@2x-min-BRqBFzgK.png",h="/portfolio/assets/projects-desk-06-min-X_gqtJm5.png",W="/portfolio/assets/projects-desk-06@2x-min-Dj8eCfdF.png",Z="/portfolio/assets/projects-mob-06-min-C9QNW9Tj.png",Q="/portfolio/assets/projects-mob-06@2x-min-DEtw7lg5.png",V="/portfolio/assets/projects-tabl-06-min-ugbcXMlD.png",U="/portfolio/assets/projects-tabl-06@2x-min-CmmfjQzn.png",y="/portfolio/assets/projects-desk-07-min--lZv1p8n.png",G="/portfolio/assets/projects-desk-07@2x-min-DmSkXiQs.png",Y="/portfolio/assets/projects-mob-07-min-BSVWNsA-.png",ee="/portfolio/assets/projects-mob-07@2x-min-Dd3dUvIN.png",te="/portfolio/assets/projects-tabl-07-min-CPlUFmPk.png",oe="/portfolio/assets/projects-tabl-07@2x-min-BDIDMcu4.png",k="/portfolio/assets/projects-desk-08-min-xocuOah2.png",se="/portfolio/assets/projects-desk-08@2x-min-BIWP6k6v.png",re="/portfolio/assets/projects-mob-08-min-DBYeKoNQ.png",ce="/portfolio/assets/projects-mob-08@2x-min-Ws78KLoX.png",ne="/portfolio/assets/projects-tabl-08-min-C_fZqAdW.png",ie="/portfolio/assets/projects-tabl-08@2x-min-DRzjhCHA.png",w="/portfolio/assets/projects-desk-09-min-DsvIyQeP.png",ae="/portfolio/assets/projects-desk-09@2x-min-BvUdwZmo.png",le="/portfolio/assets/projects-mob-09-min-DX2Z5Nr9.png",pe="/portfolio/assets/projects-mob-09@2x-min-Cc_85EFK.png",de="/portfolio/assets/projects-tabl-09-min-DT00A0X5.png",me="/portfolio/assets/projects-tabl-09@2x-min-BOveHSsW.png",m=[{alt:"Mimino website",img:x,sources:{mobile:{"1x":B,"2x":$},tablet:{"1x":C,"2x":N},desktop:{"1x":x,"2x":P}}},{alt:"Vyshyvanka vibes Landing Page",img:j,sources:{mobile:{"1x":z,"2x":A},tablet:{"1x":F,"2x":X},desktop:{"1x":j,"2x":O}}},{alt:"Power pulse webservice",img:v,sources:{mobile:{"1x":K,"2x":R},tablet:{"1x":H,"2x":J},desktop:{"1x":v,"2x":I}}},{alt:"Chego jewelry website",img:h,sources:{mobile:{"1x":Z,"2x":Q},tablet:{"1x":V,"2x":U},desktop:{"1x":h,"2x":W}}},{alt:"Energy flow webservice ",img:y,sources:{mobile:{"1x":Y,"2x":ee},tablet:{"1x":te,"2x":oe},desktop:{"1x":y,"2x":G}}},{alt:"Starlight studio landing page",img:k,sources:{mobile:{"1x":re,"2x":ce},tablet:{"1x":ne,"2x":ie},desktop:{"1x":k,"2x":se}}},{alt:"Fruitbox online store",img:w,sources:{mobile:{"1x":le,"2x":pe},tablet:{"1x":de,"2x":me},desktop:{"1x":w,"2x":ae}}}],ue=document.querySelector(".project-list"),L=document.querySelector(".more-projects");let fe=document.querySelector("li.project_card");L.addEventListener("click",ge);let p=0;function ge(){const o=fe.getBoundingClientRect().height,r=m.slice(p,p+3);ue.insertAdjacentHTML("beforeend",be(r));let c=3;m.length-p<3&&(c=m.length-p),window.scrollBy({top:o*c,left:0,behavior:"smooth"}),p+=r.length,p>=m.length&&L.classList.add("hidden")}function be(o){return o.map(({alt:s,img:r,sources:{mobile:c,tablet:e,desktop:t}})=>`
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
          <a href="https://github.com/VH-str/project-JS-TeamWork-FullStalkers" target="_blanc">
            <button class="visit-button">
              VISIT

              <svg width="24" height="24">
                <use
                  href="../img/my_projects/icon-icon_visit.svg#icon-icon_visit"
                ></use>
              </svg>
            </button>
          </a>
        </div>
      </li>`).join("")}const g=document.querySelector(".ham-menu"),b=document.querySelector(".off-screen-menu");g.addEventListener("click",()=>{g.classList.toggle("active"),b.classList.toggle("active")});b.addEventListener("click",()=>{g.classList.toggle("active"),b.classList.toggle("active")});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll(".faq-item"),s=o[0],r=o[0].querySelector(".faq-answer"),c=o[0].querySelector(".faq-arrow"),e=s.querySelector(".faq-question");s.classList.add("open"),r.classList.add("show"),c.classList.add("open"),e.classList.add("active"),o.forEach(t=>{const n=t.querySelector(".faq-question"),i=t.querySelector(".faq-answer"),u=t.querySelector(".faq-arrow");n.addEventListener("click",()=>{const a=i.classList.contains("open");o.forEach(l=>{l.classList.remove("open"),l.querySelector(".faq-answer").classList.remove("show"),l.querySelector(".faq-arrow").classList.remove("open"),l.querySelector(".faq-question").classList.remove("active")}),a||(t.classList.add("open"),i.classList.add("show"),u.classList.add("open"),n.classList.add("active"))})})});const S=document.querySelector(".swiper-wrapper"),xe=document.querySelector(".button-wrapper");function je(o){const s=o.map(({author:r,avatar_url:c,review:e,_id:t})=>t===5?`<li class="swiper-slide">
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
				</li>`).join("");S.innerHTML=s,xe.classList.remove("visually-hidden")}function ve(){const o=`<li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li><li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li>`;S.innerHTML=o}async function he(o){try{const{data:s}=await q.get("https://portfolio-js.b.goit.study/api/reviews");je(s)}catch(s){ve(),D.error({position:"topRight",message:s.message})}}he();new M(".swiper",{modules:[_,T],direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}}});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".wt-form"),s=document.querySelector(".backdrop");document.querySelector(".modal");const r=document.querySelector(".close-button-modal"),c="https://portfolio-js.b.goit.study/api/requests";function e(){s.classList.add("is-open")}function t(){s.classList.remove("is-open")}function n(i){i.key==="Escape"&&t()}s.addEventListener("click",i=>{i.target===s&&t()}),r.addEventListener("click",t),o.addEventListener("submit",async i=>{i.preventDefault();const u=o.querySelector("#user-email").value.trim();o.querySelector("#user-message").value.trim();try{const a=await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u,comment:E})});if(!a.ok)throw new Error("Failed to send the request. Please try again.");const l=await a.json();console.log("Success:",l),e(),o.reset()}catch(a){alert(`Error: ${a.message}`)}}),document.addEventListener("keydown",n)});
//# sourceMappingURL=index.js.map
