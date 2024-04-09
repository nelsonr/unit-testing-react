import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import ErrorPage from './error-page.jsx'
import Example01 from './routes/example-01.jsx'
import Example02 from './routes/example-02.jsx'

import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        loader: () => redirect("/example01"),
    },
    {
        path: "/example01",
        element: <Example01 />
    },
    {
        path: "/example02",
        element: <Example02 />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
