import React from 'react';
import ImageContainer from "../image_container/ImageContainer";
import {useLocation} from "react-router-dom";

const Content = () => {
    const location = useLocation()
    return (
        <div>
            <ImageContainer genre={Array.from(location.pathname).splice(1).join('')}/>
        </div>
    );
};

export default Content;