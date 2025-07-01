import Home from "./Home"
import { Error } from "./Error";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import About from "./About";
import Register from "./Register";
import Login from "./Login";
import Service from "./Service";
import  {Logout}  from "./logout";
const router=createBrowserRouter([
    {
     path:"/",
     element:<Home/>,
     errorElement:<Error/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/service",
        element:<Service/>
    },{
        path:"/logout",
        element:<Logout/>
    }
])

export const Setup = () => {
  return <RouterProvider router={router} />;
};