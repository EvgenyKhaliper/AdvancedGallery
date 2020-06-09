import React, { useState } from 'react';

function Gallery({images = []}) {

    return (
        <div className="gallery">
            {images.map( (image) => {
                return <img key={image} src={image} />
            })}
        </div>
    );
}

export default Gallery;