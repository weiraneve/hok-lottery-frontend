import React from 'react';
import './styles/App.css';
import KeyInput from './components/Input';
import {Route, Routes} from 'react-router-dom';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={
                <div className="selector-container">
                    <KeyInput/>
                </div>}
            />
        </Routes>
    );
}

