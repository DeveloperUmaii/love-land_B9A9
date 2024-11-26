import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import PagestoRead from './pages/PagestoRead.jsx'
import MainLayout from './layout/MainLayout.jsx'
import Booksdetails from './pages/Booksdetails.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
                  {
                    path:'/',
                    element:<Home></Home>,
                    loader: () => fetch('blogs.json'),
                  },
                  
                  {
                    path:'/ListedBooks',
                    element:<ListedBooks></ListedBooks>
                  },

                  {
                      path:'/PagestoRead',
                      element:<PagestoRead></PagestoRead>
                  },

                  {
                      path:'/Booksdetails',
                      element:<Booksdetails></Booksdetails>
                  }
             ]
    
  },
  
    

])
createRoot(document.getElementById('root')).render(
  <StrictMode>  
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
