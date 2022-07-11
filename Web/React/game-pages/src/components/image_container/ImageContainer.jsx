import React from 'react';
import './image.css';
import ImageBox from "./ImageBox";
import {gamesList} from "./image";

const ImageContainer = ({genre}) => {
    return (
        <div className={'image-container'}>
            <div className={'image-box-wrapper'}>
                {
                    Object.values(gamesList[genre]).map((game, i) =>
                        <ImageBox image={game} key={i}/>
                    )
                }
            </div>
        </div>
    );
};

export default ImageContainer;