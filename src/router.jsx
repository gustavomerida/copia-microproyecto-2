/* eslint-disable no-unused-vars */
import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/user/profile',
        element:<div>Perfil de ususario</div>
    },

])