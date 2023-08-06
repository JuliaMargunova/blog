import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "pages/MainPage/MainPage.async";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading.....</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
                <Route path={'/'} element={<MainPageAsync/>}/>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
