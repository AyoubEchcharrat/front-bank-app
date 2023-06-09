import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages/homepage/Index'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layouts/Layout';
import SignIn from './pages/signin/Signin';
import { Provider } from 'react-redux';
import { store } from './store';
import User from './pages/user/User';
import { ProtectedRoute } from './pages/protectedRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={< Layout />} >
      <Route path='/' element={<Index />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route element={<ProtectedRoute />} >
        <Route path='/user' element={<User />} />
      </Route>
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);