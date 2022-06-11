import React from 'react';
import ImageContainer from "./components/image_container/ImageContainer";
import Footer from "./components/footer/Footer";
// import NavigationBar from "./components/navbar/navbar_fail/NavigationBar";
// import NavigationResponsiveBar from "./components/navbar/navbar_responsive/NavigationResponsiveBar";
import NavigationResponsiveBar1 from "./components/navbar/navbar_responsive1/NavigationResponsiveBar1";
import {Routes, Route} from 'react-router-dom';
import MMORPG from "./components/game_genres/mmorpg/MMORPG";
import Shooters from "./components/game_genres/shooters/Shooters";
import HackAndSlash from "./components/game_genres/hack_and_slash/HackAndSlash";
import ContactForm from "./components/contact_form/ContactForm";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<NavigationResponsiveBar1/>}/>
                <Route path={'/mmorpg'} element={<MMORPG/>}/>
                <Route path={'/shooters'} element={<Shooters/>}/>
                <Route path={'/hack_and_slash'} element={<HackAndSlash/>}/>
                <Route path={'/contact_form'} element={<ContactForm/>}/>
            </Routes>
            {/*<NavigationBar/>*/}
            {/*<NavigationResponsiveBar/>*/}
            {/*<NavigationResponsiveBar1/>*/}
            {/*<ImageContainer/>*/}
            {/*<Footer/>*/}
        </>
    );
};

export default App;