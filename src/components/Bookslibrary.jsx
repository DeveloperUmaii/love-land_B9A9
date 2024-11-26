import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

const Bookslibrary = () => {


const blogs = useLoaderData()
console.log(blogs)
    return (
<div>
<section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
    <div className="flex  items-center justify-center h-28"><h1 className=" border-[#23BE0A] border-y w-48 text-6xl  font-black bg-[#ffffff] flex  items-center justify-center">Books</h1>
    </div>

    <div className="d">
            {blogs.map(blog=>(<BlogCard key={blog.id}></BlogCard>))}
        </div>
	</div>
</section>          
</div>
    );
};

export default Bookslibrary;