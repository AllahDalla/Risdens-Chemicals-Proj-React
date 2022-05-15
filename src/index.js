import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app"
import Admin from './components/admin'


const doc = document.getElementById("root")
const root = ReactDOM.createRoot(doc)

root.render(<App />)
root.render(<Admin />)
// ReactDOM.render(<App />, document.getElementById("root"))