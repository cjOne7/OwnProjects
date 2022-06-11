import React from 'react';
import ImageContainer from "./components/image_container/ImageContainer";
import NavigationBar from "./components/navbar/navbar_fail/NavigationBar";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <>
            <NavigationBar/>
            <ImageContainer/>
            <Footer/>
        </>
    );
};

export default App;