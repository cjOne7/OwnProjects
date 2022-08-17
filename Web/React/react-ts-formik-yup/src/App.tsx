import React from 'react';
import {Routes, Route} from "react-router-dom";
import RNavbar from "./components/navbar/RNavbar";
import TodoPage from "./components/todo/TodoPage";
import ContactForm from "./components/contact_form/ContactForm";
import HomePage from "./components/home/HomePage";
import Paths from "./routes";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={Paths.HOME} element={<RNavbar/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={Paths.TODOS} element={<TodoPage/>}/>
                    <Route path={Paths.CONTACT_FORM} element={<ContactForm/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;