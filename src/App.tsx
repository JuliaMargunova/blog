import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {Counter} from "./components/Counter";
import './index.scss'
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";

export const App = () => {
    return <>
        <div className={'app'}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Routes>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/'} element={<MainPage/>}/>
            </Routes>
            hello
        </div>
        <Counter/>
    </>
}
