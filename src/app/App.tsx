import React from "react";
import {useTheme} from "app/providers/ThemeProvider";
import "./styles/index.scss"
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {classNames} from "shared/lib/classNames/classNames";


export const App = () => {
    const {theme, toggleTheme} = useTheme()
    return <>
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>toggle theme</button>
        </div>
    </>
}
