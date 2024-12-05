// import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = blog => {

    
    const { id,cover,title, tags, writers_name, books_genre, books_rating } = blog;
    
    // console.log(blog?.blog?.id);

    
    // {`/blog/${id}`}
    return (

        <Link to={`/Booksdetails/${blog?.blog?.id}`} className='card bg-base-100 w-96 shadow-xl p-5 hover:scale-105'>
            
                <figure className=''>
                    <img className='rounded-lg'
                         src={blog?.blog?.cover} />
                </figure>
                <div className="card-actions justify-start py-5">
                        <div className="badge badge-outline border-none font-bold bg-[#22be0a3b] text-[#23BE0A]">{blog?.blog?.tags[0]}</div>
                        <div className="badge badge-outline border-none font-bold bg-[#22be0a3b] text-[#23BE0A]">{blog?.blog?.tags[1]}</div>
                </div>
                <h1 className='text-2xl font-semibold'>{blog?.blog?.title}</h1>
                <p className='text-lg font-semibold border-b border-dashed   pb-6 pt-2'>{blog?.blog?.writers_name}</p>
                
                    <div className="flex justify-between">
                        <div className="">
                            <p className='font-semibold'>{blog?.blog?.books_genre}</p>
                        </div>
                        <div className=" flex gap-1">
                            <p className='font-semibold'>{blog?.blog?.books_rating}</p>
                            <p>⭐</p>
                            <img src="" alt="" />
                        </div>
                    </div>
            
        </Link>


    );
};
        // BlogCard.PropTypes = {
        // blog: PropTypes.object.isRequired   }
export default BlogCard;