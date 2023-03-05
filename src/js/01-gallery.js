import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

export const gallery = document.querySelector('.gallery');

export const markupGallery = galleryItems.reduce(
    (acc, { preview, original, description }) =>
        acc +=`<div class="gallery__item"> 
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}"/>
                </a>
            </div>`
    , ''
);
    
gallery.insertAdjacentHTML('afterbegin', markupGallery);

export const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);
