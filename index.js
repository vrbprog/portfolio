(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const p of t.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&e(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();const l=document.querySelector(".toggle"),r=document.body;l.addEventListener("click",()=>{r.classList.contains("bg-dark")?(r.classList.remove("bg-dark"),r.classList.add("bg-light"),l.classList.remove("dark")):(r.classList.remove("bg-light"),r.classList.add("bg-dark"),l.classList.add("dark"))});const k="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-icon_visit'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%2300b068'%20style='stroke:%20var(--color1,%20%2300b068)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.6667'%20d='M6.333%2025.667l19.333-19.333M25.667%206.333h-18M25.667%206.333v18'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",a="/portfolio/assets/projects-desk-03-min-bAztutHK.png",h="/portfolio/assets/projects-desk-03@2x-min-D7O6BJsL.png",v="/portfolio/assets/projects-mob-03-min-BsXsyoM6.png",D="/portfolio/assets/projects-mob-03@2x-min-tmcSzpo2.png",y="/portfolio/assets/projects-tabl-03-min-ZgDTbOh9.png",_="/portfolio/assets/projects-tabl-03@2x-min-Dqd8dn0C.png",m="/portfolio/assets/projects-desk-04-min-yxZx66BP.png",w="/portfolio/assets/projects-desk-04@2x-min-DHJNdR6B.png",M="/portfolio/assets/projects-mob-04-min-5yr3aGDi.png",B="/portfolio/assets/projects-mob-04@2x-min-BeXemoj4.png",T="/portfolio/assets/projects-tabl-04-min-Dt9XScdK.png",L="/portfolio/assets/projects-tabl-04@2x-min-B8Ml2TOY.png",d="/portfolio/assets/projects-desk-05-min-CfD1cLSZ.png",P="/portfolio/assets/projects-desk-05@2x-min-BRPn2X1J.png",S="/portfolio/assets/projects-mob-05-min-Db3py1Xm.png",C="/portfolio/assets/projects-mob-05@2x-min-B8zvmCB6.png",O="/portfolio/assets/projects-tabl-05-min-F3tbbktz.png",X="/portfolio/assets/projects-tabl-05@2x-min-BRqBFzgK.png",x="/portfolio/assets/projects-desk-06-min-X_gqtJm5.png",z="/portfolio/assets/projects-desk-06@2x-min-Dj8eCfdF.png",N="/portfolio/assets/projects-mob-06-min-C9QNW9Tj.png",$="/portfolio/assets/projects-mob-06@2x-min-DEtw7lg5.png",q="/portfolio/assets/projects-tabl-06-min-ugbcXMlD.png",F="/portfolio/assets/projects-tabl-06@2x-min-CmmfjQzn.png",j="/portfolio/assets/projects-desk-07-min--lZv1p8n.png",A="/portfolio/assets/projects-desk-07@2x-min-DmSkXiQs.png",E="/portfolio/assets/projects-mob-07-min-BSVWNsA-.png",I="/portfolio/assets/projects-mob-07@2x-min-Dd3dUvIN.png",J="/portfolio/assets/projects-tabl-07-min-CPlUFmPk.png",K="/portfolio/assets/projects-tabl-07@2x-min-BDIDMcu4.png",b="/portfolio/assets/projects-desk-08-min-xocuOah2.png",W="/portfolio/assets/projects-desk-08@2x-min-BIWP6k6v.png",Z="/portfolio/assets/projects-mob-08-min-DBYeKoNQ.png",H="/portfolio/assets/projects-mob-08@2x-min-Ws78KLoX.png",R="/portfolio/assets/projects-tabl-08-min-C_fZqAdW.png",Q="/portfolio/assets/projects-tabl-08@2x-min-DRzjhCHA.png",g="/portfolio/assets/projects-desk-09-min-DsvIyQeP.png",V="/portfolio/assets/projects-desk-09@2x-min-BvUdwZmo.png",U="/portfolio/assets/projects-mob-09-min-DX2Z5Nr9.png",G="/portfolio/assets/projects-mob-09@2x-min-Cc_85EFK.png",Y="/portfolio/assets/projects-tabl-09-min-DT00A0X5.png",oo="/portfolio/assets/projects-tabl-09@2x-min-BOveHSsW.png",f=[{alt:"Mimino website",img:a,sources:{mobile:{"1x":v,"2x":D},tablet:{"1x":y,"2x":_},desktop:{"1x":a,"2x":h}}},{alt:"Vyshyvanka vibes Landing Page",img:m,sources:{mobile:{"1x":M,"2x":B},tablet:{"1x":T,"2x":L},desktop:{"1x":m,"2x":w}}},{alt:"Power pulse webservice",img:d,sources:{mobile:{"1x":S,"2x":C},tablet:{"1x":O,"2x":X},desktop:{"1x":d,"2x":P}}},{alt:"Chego jewelry website",img:x,sources:{mobile:{"1x":N,"2x":$},tablet:{"1x":q,"2x":F},desktop:{"1x":x,"2x":z}}},{alt:"Energy flow webservice ",img:j,sources:{mobile:{"1x":E,"2x":I},tablet:{"1x":J,"2x":K},desktop:{"1x":j,"2x":A}}},{alt:"Starlight studio landing page",img:b,sources:{mobile:{"1x":Z,"2x":H},tablet:{"1x":R,"2x":Q},desktop:{"1x":b,"2x":W}}},{alt:"Fruitbox online store",img:g,sources:{mobile:{"1x":U,"2x":G},tablet:{"1x":Y,"2x":oo},desktop:{"1x":g,"2x":V}}}],to=document.querySelector(".project-list"),u=document.querySelector(".more-projects");let so=document.querySelector("li.project_card"),eo=so.getBoundingClientRect().height;u.addEventListener("click",ro);let i=0;function ro(){const s=f.slice(i,i+3);to.insertAdjacentHTML("beforeend",co(s)),window.scrollBy({top:eo*3,left:0,behavior:"smooth"}),i+=s.length,i>=f.length&&u.classList.add("hidden")}function co(c){return c.map(({alt:s,img:n,sources:{mobile:e,tablet:o,desktop:t}})=>`
      <li class="project_card">
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="${e["1x"]} 1x, ${e["2x"]} 2x"
          />
          <source
            media="(max-width: 1279px)"
            srcset="${o["1x"]} 1x, ${o["2x"]} 2x"
          />
          <source
            media="(min-width: 1280px)"
            srcset="${t["1x"]} 1x, ${t["2x"]} 2x"
          />
          <img
            class="project-img-card"
            src="${n}"
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
                  href="${k}#icon-icon_visit"
                ></use>
              </svg>
            </button>
          </a>
        </div>
      </li>`).join("")}
//# sourceMappingURL=index.js.map
