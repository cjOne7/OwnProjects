import React from 'react';
import './image.css';
import ImageBox from "./ImageBox";

const images = [
    {
        title: 'tera',
        imageLocation: '../../assets/tera.jpg'
    },
    {
        title: 'revelation',
        imageLocation: '../../assets/revelation.jpg'
    },
    {
        title: 'blade and soul',
        imageLocation: '../../assets/bladeAndSoul.jpg'
    }
]

// const styles = {
//     imageBox: {
//         backgroundImage: `url(../../assets/bladeAndSoul.jpg)`
//     }
// }

const ImageContainer = () => {
    return (
        <div className={'image-container'}>
            <div className={'image-box-wrapper'}>
                {
                    images.map(image => <ImageBox image={image}></ImageBox>)
                }
            </div>
        </div>
    );
};

export default ImageContainer;