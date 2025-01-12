import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ListedBooks from './pages/ListedBooks.jsx';
import PagestoRead from './pages/PagestoRead.jsx';
import MainLayout from './layout/MainLayout.jsx';
import Booksdetails from './pages/Booksdetails.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';

import Errorpage from './pages/Errorpage.jsx';


import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import Updateprofile from './pages/Updateprofile.jsx';
//import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement : <Errorpage></Errorpage>,
    children:    [
                {
                  path: '/',
                  element: <Home></Home>,
                  loader: () => fetch('/blogs.json'),
                },
                {
                  path: '/Updateprofile',
                  element: <PrivateRoute>
                              <Updateprofile></Updateprofile>,
                          </PrivateRoute>,
                  
                  // children: [
                  //   {
                  //     index: true,
                  //     element: <ReadingList></ReadingList>,
                  //     loader: () => fetch('/blogs.json'),
                  //   },
                  //   {
                  //     path: 'wishlist',
                  //     element: <WishList></WishList>,
                  //     loader: () => fetch('/blogs.json'),
                  //   },
                  // ],
                },
                {
                  path: '/Userprofile',
                  element:<PrivateRoute>
                      <ListedBooks></ListedBooks>
                  </PrivateRoute>,
                  // children: [
                  //   {
                  //     index: true,
                  //     element: <ReadingList></ReadingList>,
                  //     loader: () => fetch('/blogs.json'),
                  //   },
                  //   {
                  //     path: 'wishlist',
                  //     element: <WishList></WishList>,
                  //     loader: () => fetch('/blogs.json'),
                  //   },
                  // ],
                },
                {
                  path: '/PagestoRead',
                  element: <PrivateRoute>
                              <PagestoRead></PagestoRead>
                            </PrivateRoute>,
                  loader: () => fetch('/blogs.json'),
                },
                {
                  path: '/Booksdetails/:id',
                  element: <PrivateRoute>
                                <Booksdetails></Booksdetails>,
                          </PrivateRoute> ,
                  loader: async () => {
                    try {
                      const response = await fetch('/blogs.json');
                      if (!response.ok) {
                        throw new Error('Failed to fetch blogs data');
                      }
                      const blogs = await response.json();
                      return blogs; // সম্পূর্ণ ডেটা রিটার্ন করা হচ্ছে
                    } catch (error) {
                      console.error('Error loading data:', error);
                      return [];
                    }
                  },
                },
                {
                  path: '/Register',
                  element:<Register></Register>,
                  
                },
                {
                  path: '/Login',
                  element:<Login></Login>,
                  
                },

         ],
     },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <FirebaseProvider>
        <RouterProvider router={router}></RouterProvider>
      </FirebaseProvider>
  </StrictMode>
);
