import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { Login } from './components/Login/Login';
import { Layout } from './components/Layout/Layout';
import { Profile } from './components/Profile/Profile';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/profile/:id",
        element: <Profile />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
