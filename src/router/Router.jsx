import { createBrowserRouter } from "react-router-dom";
import Main from '../MainLayout/Main'
import Login from "../Page/Login";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import SignUp from "../Page/Sign Up";
import CreateTask from "../Dashboard/Create";
import Contact from "../Page/Contact";
import Update from "../Dashboard/Upadate";
import PrivateRoute from "./PrivateRoute";


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
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:
        [
          {
            path:'create',
            element:<PrivateRoute><CreateTask></CreateTask></PrivateRoute>,
            loader:  ()=>fetch('http://localhost:5000/tasks')
          },
          {
            path:'/dashboard/tasks/:id',
            element:<Update></Update>,
            loader: ({params})=>fetch(`http://localhost:5000/tasks/${params.id}`)
            
          },
        ]
      }
    
  ]);
  export default router