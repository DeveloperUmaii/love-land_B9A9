import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

const Bookslibrary = () => {
    // useLoaderData থেকে blogs ডেটা নিচ্ছে
    const blogs = useLoaderData();

    // blogs অ্যারে কিনা তা চেক করা এবং ডিফল্ট ভ্যালু সেট করা
    const safeBlogs = Array.isArray(blogs) ? blogs : []; 

    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="flex items-center justify-center h-28">
                        <h1 className="border-[#23BE0A] text-[#3b3b3b65] border-y   text-center text-6xl font-black bg-[#ffffff] flex items-center justify-center">
                        Choos your  <span className='text-[#23BE0A]'>.land</span>
                        </h1>
                    </div>
                        <p className='text-center bg-[#ffef0d] font-medium text-[#000] font-mono'>LoVE .Land* offers secure, reliable land sales for all needs."</p>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                        {
                            safeBlogs.map(blog => (<BlogCard blog={blog} key={blog.id} />))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bookslibrary;
