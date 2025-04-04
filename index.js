import{a as m,i,S as g}from"./assets/vendor-BH9GyP-n.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const p="49643579-021fb679616bd716ef3622271";function y(o){return m("https://pixabay.com/api/",{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}}).then(e=>{if(e.data.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}return e.data}).catch(()=>{i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}const d=document.querySelector("#loader"),l=document.createDocumentFragment(),u=document.querySelector(".gallery");function h(o){o.forEach(e=>{const n=document.createElement("li");n.classList.add("list-item"),n.innerHTML=`
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
  </div>`,l.append(n)}),u.append(l)}let v=new g(".item-link",{captionsData:"alt",captionDelay:250});function L(){u.innerHTML=""}function w(){d.classList.add("loader")}function b(){d.classList.remove("loader")}const f=document.querySelector(".form"),c=f.querySelector("input");f.addEventListener("submit",S);function S(o){o.preventDefault(),L(),c.value.trim().length&&(w(),y(c.value).then(e=>{document.querySelector(".gallery"),h(e.hits),v.refresh()}).catch(e=>{}).finally(()=>{b()}))}
//# sourceMappingURL=index.js.map
