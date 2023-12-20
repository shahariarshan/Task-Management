import { createBrowserRouter } from "react-router-dom";
import Main from '../MainLayout/Main'
import Login from "../Page/Login";
import Home from "../Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
       {
        path:'/',
        element:<Home></Home>
       }
      ],

    },
    
      {
        path:'login',
        element:<Login></Login>
      }
    
  ]);
  export default router