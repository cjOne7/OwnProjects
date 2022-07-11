import React from 'react';
import ImageContainer from "./image_container/ImageContainer";
import {useLocation} from "react-router-dom";

const Content = () => {
    const location = useLocation()
    const genre = Array.from(location.pathname).splice(1).join('')
    return (
        <div>
            {/*TODO вынести содержимое с этого компонента (↓) сюда*/}
            <ImageContainer genre={genre}/>
        </div>
    );
};

export default Content;