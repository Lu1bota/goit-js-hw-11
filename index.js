import{S as u,a as d,i as a}from"./assets/vendor-BH9GyP-n.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function f(o){return o.map(e=>`
    <li class="list-item">
    <div class="image-container">
    <a class="item-link" href="${e.largeImageURL}">
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
    `).join("")}let g=new u(".item-link",{captionsData:"alt",captionDelay:250});function m(){const o=document.querySelector(".gallery");o.innerHTML=""}const p="49643579-021fb679616bd716ef3622271";function y(o){return d("https://pixabay.com/api/",{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}}).then(e=>{if(e.data.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}return e.data}).catch(()=>{a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}const c=document.querySelector(".form"),l=c.querySelector("input");c.addEventListener("submit",h);function h(o){o.preventDefault(),m(),l.value.trim().length!==0&&y(l.value).then(e=>{document.querySelector(".gallery").insertAdjacentHTML("beforeend",f(e.hits)),g.refresh()})}
//# sourceMappingURL=index.js.map
