import ReactDOM from 'react-dom/client'
import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import router from './router/Router';
import AuthProvider from './Provider/AuthProvider';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'


ReactDOM.createRoot(document.getElementById('root')).render(
  
     
     <DndProvider backend={HTML5Backend}>
    <AuthProvider>
      <div className='max-h-screen'>
      <RouterProvider router={router} />
     </div>
     </AuthProvider>
   </DndProvider>
  
)
