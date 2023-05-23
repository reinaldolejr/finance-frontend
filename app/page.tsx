'use client';
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import 'antd/dist/reset.css';

import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
