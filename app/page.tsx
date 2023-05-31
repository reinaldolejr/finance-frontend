'use client';
import React from 'react';
import 'antd/dist/reset.css';

import LoginPage from './pages/LoginPage';
import  { Router } from 'next/router';

const App: React.FC = () => {
    
    return (
        <LoginPage />
    );
};

export default App;
