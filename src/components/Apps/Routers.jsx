import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "./Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Updates from "../Pages/Updates";
import Profile from "../Pages/Profile";
import PrivateRouters from "./PrivateRouters";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/updates',
                element:<PrivateRouters><Updates></Updates></PrivateRouters>
            },
            {
                path:'/profile',
                element:<PrivateRouters><Profile></Profile></PrivateRouters>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }
])
export default router;