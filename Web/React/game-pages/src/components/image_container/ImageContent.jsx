import React from 'react';

const ImageContent = ({clazz, imageTitle}) => {
    return (
        <div className={clazz}>
            <h2>{imageTitle}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aliquid consectetur cumque cupiditate
                debitis dolor, fuga molestiae nobis pariatur placeat porro, provident ratione repellendus reprehenderit
                temporibus totam voluptatem. At, molestias!</p>
        </div>
    );
};

export default ImageContent;