import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './About.jsx'
import Contact from './Contact'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
// import "almond.css/dist/almond.min.js";
const map = createBrowserRouter([
    {
        path:"",
        element:<App />,
        children:[
            {
                path:"about",
                element:<About />
            },
            {
                path:"contact",
                element:<Contact />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={map} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
