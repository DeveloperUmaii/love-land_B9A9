import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import Bookslibrary from './components/Bookslibrary';
import Booksdetails from './components/Booksdetails';
import ListedBooks from './components/ListedBooks';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Hero />} />
                    <Route path="ListedBooks" element={<ListedBooks />} />
                    <Route path="Booksdetails/:id" element={<Booksdetails />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
