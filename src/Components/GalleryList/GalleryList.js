import React from "react";

export default function GalleryList({images}){
    return(
        <ul className="ImageGallery">
             {images.map(({id,webformatURL,largeImageURL}) => (
                  <li className="ImageItem" key={id}>
                  <img className="ImageItem-image" src={webformatURL} 
                  data-largeurl={largeImageURL} 
                  alt="" 
                  />
              </li>
             ))}
        </ul>
    )
}