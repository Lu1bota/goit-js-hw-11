import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery } from './js/render-functions';

const form = document.querySelector('.form');
const input = form.querySelector('input');
export const list = document.querySelector('.gallery');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  clearGallery();

  if (input.value.trim().length === 0) return;

  getImagesByQuery(input.value);
}
