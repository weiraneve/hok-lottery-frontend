import React from 'react';
import './styles/App.css';
import KeyInput from './components/Input';
import {Navigate, Route, Routes} from 'react-router-dom';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<KeyInput/>} />

            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
}

