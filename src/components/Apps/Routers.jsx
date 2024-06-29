import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "./Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Updates from "../Pages/Updates";
import Profile from "../Pages/Profile";
import PrivateRouters from "./PrivateRouters";
import Estate from "../Pages/Estate";
import EstateDetails from "../Pages/EstateDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() =>fetch('/estates.json'),
                
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
            {
                path:'/estate',
                element:<Estate></Estate>,
                
            },
            {
                path:'/estatedetails',
                element:<PrivateRouters><EstateDetails></EstateDetails></PrivateRouters>
            },
        ]
    }
])
export default router;