import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {routes} from './routes';
import MMORPG from "./components/game_genres/mmorpg/MMORPG";
import Shooters from "./components/game_genres/shooters/Shooters";
import HackAndSlash from "./components/game_genres/hack_and_slash/HackAndSlash";
import ContactForm from "./components/contact_form/ContactForm";
import Login from "./components/login/Login";
import HomePage from "./components/home/HomePage";
import ResponsiveNavbar from "./components/navbar/navbar/ResponsiveNavbar";
import MainPage from "./components/main/MainPage";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={routes.home} element={<MainPage/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={routes.mmorpg} element={<MMORPG/>}/>
                    <Route path={routes.shooters} element={<Shooters/>}/>
                    <Route path={routes.hack_and_slash} element={<HackAndSlash/>}/>
                    <Route path={routes.contact_form} element={<ContactForm/>}/>
                    <Route path={routes.login} element={<Login/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;