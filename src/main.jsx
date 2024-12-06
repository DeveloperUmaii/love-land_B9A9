import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ListedBooks from './pages/ListedBooks.jsx';
import PagestoRead from './pages/PagestoRead.jsx';
import MainLayout from './layout/MainLayout.jsx';
import Booksdetails from './pages/Booksdetails.jsx';
import ReadingList from './pages/ReadingList.jsx';
import WishList from './pages/WishList.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/blogs.json'),
      },
      {
        path: '/ListedBooks',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadingList></ReadingList>,
            loader: () => fetch('/blogs.json'),
          },
          {
            path: 'wishlist',
            element: <WishList></WishList>,
            loader: () => fetch('/blogs.json'),
          },
        ],
      },
      {
        path: '/PagestoRead',
        element: <PagestoRead></PagestoRead>,
      },
      {
        path: '/Booksdetails/:id',
        element: <Booksdetails></Booksdetails>,
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
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
