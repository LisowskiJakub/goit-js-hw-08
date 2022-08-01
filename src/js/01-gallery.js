// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
galleryItems.forEach(item => {
    const markup = `<a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.original}" data-source="${item.original}" alt="${item.description}" title="${item.description}"/>
      </a> `
  
  
    gallery.insertAdjacentHTML('beforeend', markup);
  
  })
  new SimpleLightbox(".gallery a", { 
    captionDelay: 250,
    overlayOpacity:0.97
  
  });