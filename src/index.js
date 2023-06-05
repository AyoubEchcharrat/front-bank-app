import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages/homepage/Index'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layouts/Layout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={< Layout />} >
      <Route path='/' element={<Index />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);