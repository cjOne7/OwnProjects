import React from 'react';
import './image.css';

const ImageBox = ({image}) => {
    return (
        <div className={'image-box'}
             style={{backgroundImage: `url(${image.imageLocation})`}}>
        </div>
    );
};

export default ImageBox;