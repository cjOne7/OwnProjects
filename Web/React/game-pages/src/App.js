import React from 'react';
import NavigationResponsiveBar1 from "./components/navbar/navbar_responsive1/NavigationResponsiveBar1";
import {Routes, Route} from 'react-router-dom';
import MMORPG from "./components/game_genres/mmorpg/MMORPG";
import Shooters from "./components/game_genres/shooters/Shooters";
import HackAndSlash from "./components/game_genres/hack_and_slash/HackAndSlash";
import ContactForm from "./components/contact_form/ContactForm";
import Login from "./components/login/Login";
import {routes} from './routes';

const App = () => {
    return (
        <>
            <Routes>
                <Route path={routes.home} element={<NavigationResponsiveBar1/>}/>
                <Route path={routes.mmorpg} element={<MMORPG/>}/>
                <Route path={routes.shooters} element={<Shooters/>}/>
                <Route path={routes.hack_and_slash} element={<HackAndSlash/>}/>
                <Route path={routes.contact_form} element={<ContactForm/>}/>
                <Route path={routes.login} element={<Login/>}/>
            </Routes>
        </>
    );
};

export default App;