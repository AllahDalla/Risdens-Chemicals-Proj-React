import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./app"
import Admin from './components/admin'



const doc = document.getElementById("root")
const root = ReactDOM.createRoot(doc)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='dashboard' element={<Admin />}>
            </Route>
        </Routes>
    </BrowserRouter>
)