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
                    element:<ListedBooks></ListedBooks>,
                    loader: () => fetch('blogs.json')
                  },

                  {
                      path:'/PagestoRead',
                      element:<PagestoRead></PagestoRead>,
                  },

                  {
                    path:'/Booksdetails/:id',
                    element:<Booksdetails></Booksdetails>,
                    loader: () => fetch('blogs.json'),
                  },
             ]
    
  },
  
    

])
createRoot(document.getElementById('root')).render(
  <StrictMode>  
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
