import React, {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {Counter} from "./components/Counter";
import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

export const App = () => {
    return <>
        <div className={'app dark'}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading.....</div>}><Routes>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
                <Route path={'/'} element={<MainPageAsync/>}/>
            </Routes> </Suspense>
            hello
        </div>
        <Counter/>
    </>
}
