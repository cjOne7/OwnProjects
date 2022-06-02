import React from 'react';
import './image.css';

const ImageBox = ({image}) => {
    return (
        <div className={'img-box'}
             style={{backgroundImage: `url(${image.imageLocation})`}}>
        </div>
    );
};

export default ImageBox;