import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./components/Sign-in-comp/landing"
import FrameWork from './components/main-frame-work'





const doc = document.getElementById("root")
const root = ReactDOM.createRoot(doc)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='dashboard' element={<FrameWork />}></Route>
            <Route path='manageorder' element={<FrameWork />}></Route>
            <Route path='settings' element={<FrameWork />}></Route>
            <Route path='logout' element={<FrameWork />}></Route>
        </Routes>
    </BrowserRouter>
)

