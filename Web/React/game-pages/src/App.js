import React from 'react';
import ImageContainer from "./components/image_container/ImageContainer";
import NavigationBar from "./components/navbar/navbar_fail/NavigationBar";
import Footer from "./components/footer/Footer";
import NavigationResponsiveBar1 from "./components/navbar/navbar_responsive1/NavigationResponsiveBar1";

const App = () => {
    return (
        <>
            {/*<NavigationBar/>*/}
            <NavigationResponsiveBar1/>
            <ImageContainer/>
            <Footer/>
        </>
    );
};

export default App;