// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const {log} = console;
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const markup = galleryItems.map((item)=>`
<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} title=${item.description} />
</a>
`)
.join('')

gallery.insertAdjacentHTML('beforeend', markup)
let lightbox= new SimpleLightbox('.gallery a',{
    captionDelay: 250,
});
