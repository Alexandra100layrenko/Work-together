import"./assets/vendor-38c1183f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=d(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("cooperation-form"),r=document.getElementById("modal"),d=document.querySelector(".close-button"),s=document.getElementById("reviews-container");async function e(){try{const t=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!t.ok)throw new Error("Failed to fetch reviews");const n=await t.json();o(n)}catch(t){console.error("Error:",t)}}function o(t){s.innerHTML="",t.forEach(n=>{const c=document.createElement("div");c.className="review",c.innerHTML=`
        <img src="${n.avatar_url}" alt="${n.author}" class="avatar">
        <p><strong>${n.author}</strong></p>
        <p>${n.review}</p>
      `,s.appendChild(c)})}e(),a.addEventListener("submit",async t=>{t.preventDefault();const n=new FormData(a),c=Object.fromEntries(n.entries());try{(await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})).ok?(a.reset(),i()):u("Failed to send the message. Please try again.")}catch(f){console.error("Error:",f),u("An error occurred. Please try again.")}}),d.addEventListener("click",l),r.addEventListener("click",t=>{t.target===r&&l()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&l()});function i(){r.style.display="block"}function l(){r.style.display="none"}function u(t){alert(t)}});
//# sourceMappingURL=commonHelpers.js.map
