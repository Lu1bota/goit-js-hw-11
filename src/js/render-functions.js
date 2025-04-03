// У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:

// createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
import { list } from '../main';

export function createGallery(images) {
  return images
    .map(item => {
      return `
    <li class="list-item">
    <div class="image-container">
    <a href="${item.largeImageURL}">
    <img
      class="gallery-image"
      src="${item.webformatURL}"
      alt="${item.tags}"
    />
  </a>
  </div>
  <div class="container-item">
  <div class="container-follow">
  <strong>Likes</strong>
  <span>${item.likes}</span>
  </div>
  <div class="container-follow">
  <strong>Views</strong>
  <span>${item.views}</span>
  </div>
  <div class="container-follow">
  <strong>Comments</strong>
  <span>${item.comments}</span>
  </div>
  <div class="container-follow">
  <strong>Downloads</strong>
  <span>${item.downloads}</span>
  </div>
  </div>
  </li>
    `;
    })
    .join('');
}

export function clearGallery() {
  list.innerHTML = '';
}
