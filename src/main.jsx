import ReactDOM from 'react-dom/client'
import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import router from './router/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  
     <div className='max-h-screen'>
      <RouterProvider router={router} />
     </div>
  
)
