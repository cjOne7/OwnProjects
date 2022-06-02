import React from 'react';
import './image.css';
import ImageBox from "./ImageBox";
import {imageGenres} from "./image";

const ImageContainer = () => {
    return (
        <div className={'image-container'}>
            <div className={'image-box-wrapper'}>
                {
                    imageGenres[0].mmorpg.map((image, i) =>
                        <ImageBox image={image} key={i}/>
                    )
                }
            </div>
        </div>
    );
};

export default ImageContainer;