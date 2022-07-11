import React from 'react';

const ImageContent = ({imageTitle, imageText}) => {
    return (
        <div className={'image-content'}>
            <h2>{imageTitle}</h2>
            <p>{imageText}</p>
        </div>
    );
};

export default ImageContent;