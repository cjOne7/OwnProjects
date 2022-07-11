import React from 'react';
import ImageContent from "./ImageContent";
import PseudoBorder from "./pseudo_borders/PseudoBorder";

const ImageBox = ({image}) => {
    return (
        <div className={'image-box'} style={{backgroundImage: `url(${image.imageLocation})`}}>
            <PseudoBorder clazz={'border-top-bottom'}/>
            <PseudoBorder clazz={'border-left-right'}/>
            <ImageContent imageTitle={image.title} imageText={image.text}/>
        </div>
    );
};

export default ImageBox;