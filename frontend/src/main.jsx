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
import LogInDev from './pages/LogInDev'
import LogInAdmin from './pages/LogInAdmin'
import SignUpDev from './pages/SignUpDev'
import SignUpAdmin from './pages/SignUpAdmin'
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
    {
        path: '/logindev',
        element: <LogInDev />,
    },
    {
        path: '/loginadmin',
        element: <LogInAdmin />,
    },
    {
        path: '/signupdev',
        element: <SignUpDev />,
    },
    {
        path: '/signupAdmin',
        element: <SignUpAdmin />,
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthContextProvider>
            <RouterProvider router={router} />
        </AuthContextProvider>
    </StrictMode>
)
