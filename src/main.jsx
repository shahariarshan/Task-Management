import ReactDOM from 'react-dom/client'
import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import router from './router/Router';
import AuthProvider from './Provider/AuthProvider';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  
  
     <DndProvider backend={HTML5Backend}>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <div className='max-h-screen'>
      <RouterProvider router={router} />
     </div>
     </QueryClientProvider>
     </AuthProvider>
   </DndProvider>
  
  
)
