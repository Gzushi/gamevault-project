import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './pages/App'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import AddGames from './pages/AddGames'
import GameProfile from './pages/GameProfile'
import UserProfile from './pages/UserProfile'
import DevProfile from './pages/DevProfile'
import { AuthContextProvider } from './context/AuthContext.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/login',
        element: <LogIn />,
    },
    {
        path: '/signup',
        element: <SignUp />,
    },
    {
        path: '/addgames',
        element: <AddGames />,
    },
    {
        path: '/gameprofile',
        element: <GameProfile />,
    },
    {
        path: '/gameprofile/:id',
        element: <GameProfile />,
    },
    {
        path: '/userprofile',
        element: <UserProfile />,
    },
    {
        path: '/devprofile',
        element: <DevProfile />,
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthContextProvider>
            <RouterProvider router={router} />
        </AuthContextProvider>
    </StrictMode>
)
