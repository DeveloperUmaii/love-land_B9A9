// import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = blog => {


    const { id, cover, title, tags, writers_name, books_genre, books_rating } = blog;

    // console.log(blog?.blog?.id);


    // {`/blog/${id}`}
    return (

        <div className='card bg-base-100 w-96 shadow-xl p-5 '>

            <figure className=''>
                <img className='rounded-lg'
                    src={blog?.blog?.image} />
            </figure>
            <div className="card-actions justify-start py-5">
                <div className="  flex justify-center items-center w-9 h-9 pb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 90">
                        <ellipse cx="45" cy="86.5" rx="33" ry="4.5" fill="#04DB78" />
                        <path d="M45 0C29.9 0 17.6 12.3 17.6 27.4 17.6 46.6 43.9 66.6 45 90c1.1-23.4 27.4-43.4 27.4-62.6C72.4 12.3 60.1 0 45 0z" fill="#23BE0A" />
                        <circle cx="45.01" cy="26.57" r="12.5" fill="#FFF" />
                    </svg>
                </div>
                <div className="badge badge-outline border-none font-bold bg-[#22be0a3b] text-[#23BE0A]">{blog?.blog?.location[0]}</div>
                <div className="badge badge-outline border-none font-bold bg-[#22be0a3b] text-[#23BE0A]"> {blog?.blog?.location[1]}</div>
            </div>
            <h1 className='text-2xl font-semibold text-[#fff] bg-[#23BE0A] pl-3 pb-1 rounded underline underline-offset-4'>{blog?.blog?.estate_title}</h1>
            <div className="flex justify-between">
                <p className='text-lg font-semibold border-b border-dashed  pb-6 pt-2 text-[#252525ce]'>#Segment : <span className='border border-[#23BE0A] rounded text-[#23BE0A] px-2 text-sm font-bold'>{blog?.blog?.segment_name}</span></p>
                <p className='text-[#f00a0a] text-lg font-bold border-b border-dashed  pb-6 pt-2  '>For : <span className='text-[#fff] text-base bg-[#f00a0a] px-3 py-0.5 rounded font-bold '>{blog?.blog?.price}</span></p>
            </div>


            <div className="flex justify-between mb-5">
                <div className="">
                    <p className='font-semibold '>For : <span className='text-[#fff] bg-[#23BE0A] px-3 pb-1 rounded font-bold '>{blog?.blog?.status}</span></p>
                </div>
                <div className=" flex gap-1 border border-[#f00a0a] rounded text-[#f00a0a] px-2 ">
                    <p className='font-semibold'><span>Area : </span>{blog?.blog?.area}</p>

                    <img src="" alt="" />
                </div>

            </div>


            <Link to={`/Booksdetails/${blog?.blog?.id}`}>
                <div className="hover:shadow-lg my-3 hover:bg-[#fafafa6b] flex justify-center ">
                    <button className='text-2xl font-semibold  absolute bottom-5  bg-[#f00a0a] text-[#fff] rounded-lg w-10/12'>View Property</button>
                </div>
            </Link>

        </div>


    );
};
// BlogCard.PropTypes = {
// blog: PropTypes.object.isRequired   }
export default BlogCard;