import { createBrowserRouter } from "react-router-dom";
import Main from '../MainLayout/Main'
import Login from "../Page/Login";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import SignUp from "../Page/Sign Up";
import CreateTask from "../Dashboard/Create";

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
      },
      {
        path:'signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:
        [
          {
            path:'create',
            element:<CreateTask></CreateTask>
          }
        ]
      }
    
  ]);
  export default router