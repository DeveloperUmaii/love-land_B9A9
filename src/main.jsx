import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import PagestoRead from './pages/PagestoRead.jsx'
import MainLayout from './layout/MainLayout.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
                  {
                    path:'/',
                    element:<Home></Home>
                  },
                  
                  {
                    path:'/ListedBooks',
                    element:<ListedBooks></ListedBooks>
                  },

                  {
                      path:'/PagestoRead',
                      element:<PagestoRead></PagestoRead>
                  }
             ]
    
  },
  
    

])
createRoot(document.getElementById('root')).render(
  <StrictMode>  
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
