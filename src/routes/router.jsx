import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [{
            path: '/',
            element: <Home/>
        },
        {
            path: 'about',
            element: <About/>
        },
        {
            path: 'contact',
            element: <Contact/>
        },
        {
            path: 'signup',
            element: <Signup/>
        },
        {
            path: 'login',
            element: <Login/>
        }
    ],
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);

export default router;