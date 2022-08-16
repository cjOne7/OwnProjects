import React from 'react';
import Navbar from "./components/Navbar";
import TodosPage from "./components/todo/TodosPage";
import {Routes, Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import About from "./components/About";
import ContactForm from "./components/contact_form/ContactForm";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Navbar/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/todos'} element={<TodosPage/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/contact_form'} element={<ContactForm/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;