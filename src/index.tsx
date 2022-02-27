import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import BridgePage from './js/pages/bridge';
import './sass/index.scss';
import Header from "./js/components/header";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/bridge' element={<BridgePage/>}/>
                <Route path='/minting' element={<div className="empty">MINTING PAGE</div>}/>
                <Route path="*" element={<Navigate to="/bridge" replace />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
