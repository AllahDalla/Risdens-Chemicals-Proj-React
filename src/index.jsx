import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./components/Sign-in-comp/landing"
import Admin from './components/admin'





const doc = document.getElementById("root")
const root = ReactDOM.createRoot(doc)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='dashboard' element={<Admin />}></Route>
        </Routes>
    </BrowserRouter>
)

