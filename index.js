import{a as d,i as a}from"./assets/vendor-DVYWgmjP.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function u(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=u(r);fetch(r.href,t)}})();function f(o){return o.map(e=>`
    <li class="list-item">
    <div class="image-container">
    <a href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
  </a>
  </div>
  <div class="container-item">
  <div class="container-follow">
  <strong>Likes</strong>
  <span>${e.likes}</span>
  </div>
  <div class="container-follow">
  <strong>Views</strong>
  <span>${e.views}</span>
  </div>
  <div class="container-follow">
  <strong>Comments</strong>
  <span>${e.comments}</span>
  </div>
  <div class="container-follow">
  <strong>Downloads</strong>
  <span>${e.downloads}</span>
  </div>
  </div>
  </li>
    `).join("")}function g(){c.innerHTML=""}const m="49643579-021fb679616bd716ef3622271";function p(o){return d("https://pixabay.com/api/",{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}}).then(e=>{if(e.data.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}return c.insertAdjacentHTML("beforeend",f(e.data.hits)),e.data}).catch(()=>{a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}const l=document.querySelector(".form"),i=l.querySelector("input"),c=document.querySelector(".gallery");l.addEventListener("submit",y);function y(o){o.preventDefault(),g(),i.value.trim().length!==0&&p(i.value)}
//# sourceMappingURL=index.js.map
