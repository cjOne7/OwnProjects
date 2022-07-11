import React from 'react';
import './image.css';
import './other.css'
import ImageBox from "./ImageBox";
import {gamesList} from "./image";
import About from "../About";
import ButtonReadMore from "../ButtonReadMore";
import VideoBackground from "../VideoBackground";

const ImageContainer = ({genre}) => {
    return (
        <div>
            <section className={'showcase'}>
                <ButtonReadMore/>
                <VideoBackground genre={genre}/>
                <div className={'image-container'}>
                    <div className={'image-box-wrapper'}>
                        {
                            Object.values(gamesList[genre]).map((game, i) =>
                                <ImageBox image={game} key={i}/>
                            )
                        }
                    </div>
                </div>
            </section>
            <About/>
        </div>
    );
};

export default ImageContainer;