import { createBrowserRouter } from "react-router-dom";
import Main from '../MainLayout/Main'
import Login from "../Page/Login";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import SignUp from "../Page/Sign Up";
import CreateTask from "../Dashboard/Create";
import Contact from "../Page/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
       {
        path:'/',
        element:<Home></Home>
       },
       {
        path:'/contact',
        element:<Contact></Contact>
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
            element:<CreateTask></CreateTask>,
            loader:  ()=>fetch('http://localhost:5000/tasks')
          }
        ]
      }
    
  ]);
  export default router