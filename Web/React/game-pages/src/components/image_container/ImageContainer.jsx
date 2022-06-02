import React from 'react';
import './image.css';

// const images = [{
//     title: 'tera',
//     imagePath: '../../assets/tera.jpg'
// }]

const styles = {
    imageBox: {
        backgroundImage: `url(https://i.imgur.com/u1UDFdy.jpeg)`
    }
}

const ImageContainer = () => {
    return (
        <div className={'image-container'}>
            <div className={'image-box-wrapper'}>
                <div className={'img-box'}
                     style={{backgroundImage: `url(${window.location.origin}/assets/tera.jpg)`}}>

                </div>
                {/*<div className={'img-box'}>*/}
                {/*</div>*/}
                {/*<div className={'img-box'}>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default ImageContainer;