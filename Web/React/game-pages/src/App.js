import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {routes} from './routes';
import ContactForm from "./components/contact_form/ContactForm";
import Login from "./components/login/Login";
import HomePage from "./components/home/HomePage";
import MainPage from "./components/main/MainPage";
import Content from "./components/content/Content";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={routes.home} element={<MainPage/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={routes.mmorpg} element={<Content/>}/>
                    <Route path={routes.shooters} element={<Content/>}/>
                    <Route path={routes.hack_and_slash} element={<Content/>}/>
                    <Route path={routes.contact_form} element={<ContactForm/>}/>
                    <Route path={routes.login} element={<Login/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;