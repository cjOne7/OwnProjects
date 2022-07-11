import React from 'react';
import './image.css';
import './other.css'
import ImageBox from "./ImageBox";
import {gamesList} from "./image";

const ImageContainer = ({genre}) => {
    return (
        <div>
            <section className={'showcase'}>
                <div className={"btn"}>
                    <div className={"link-about"}>
                        <a href="#about">Read More</a>
                    </div>
                </div>
                <div className="video-container">
                    <video autoPlay muted loop
                           // poster={require(`../../assets/background_videos/start_${genre}_bg_video.jpg`)}
                           src={require(`../../assets/background_videos/${genre}_bg_video.mp4`)}/>
                </div>
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
            <section id="about">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda atque culpa dicta doloribus
                    enim est, eum
                    fugit illo laboriosam maiores nihil numquam perferendis quasi sapiente, sint tempora tempore
                    voluptatem?</p>
            </section>
        </div>
    );
};

export default ImageContainer;