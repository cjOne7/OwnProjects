import React from 'react';
import ImageContainer from "../../image_container/ImageContainer";

const Shooters = () => {
    return (
        <div>
            {/* TODO get genre from URL*/}
            <ImageContainer genre={"shooters"}/>
        </div>
    );
};

export default Shooters;