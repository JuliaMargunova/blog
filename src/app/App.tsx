import React, {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "helpers/classNames/classNames";
import {AboutPageAsync} from "pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "pages/MainPage/MainPage.async";
import "./styles/index.scss"


export const App = () => {
    const {theme, toggleTheme} = useTheme()
    return <>
        <button onClick={toggleTheme}>toggle theme</button>
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            hello
        </div>
    </>
}
