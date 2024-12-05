import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savereaddata } from '../forStoraeg/storage';

const Booksdetails = () => {
const blogs = useLoaderData ();
const {id} = useParams()
const idIn = parseInt(id);

const blog = blogs.find(blog => blog.id === idIn);

    const addReadingList = () =>{ 
        savereaddata (idIn);
        toast  ("Save read data !");  
             }
    const addwishList = () => toast ("Wow so easy !");
    return (

        
<div className='   flex w-full px-4 py-10 pt-4'>  {/* border-4 border-solid border-blue-500 */}
    <div to={`/Booksdetails/${blog.id}`} className="1/2 px-4">
    <img
        src={blog.cover}
        className=" rounded-lg " />
                      
                        
     </div>

     <div className="w-1/2   px-4">{/* border-4 border-solid border-red-500  */}
        <h1 className='text-4xl font-bold '>{blog.title}</h1>
        <h1 className='text-xl font-semibold my-4'>By  : {blog.writers_name}</h1>
        <hr className='my-3' />
        <h1 className="font-semibold">{blog.books_genre}</h1>
        <hr className='my-2' />
        <p className='font-extralight text-sm leading-6'><span className='text-sm font-bold '>Review :</span>{blog.books_review}</p>
        <div className="my-4 flex gap-">
            <h1 className=''><span className="pr-6 font-extrabold ">Tag</span><span className="px-2 py-0.5 rounded-2xl font-semibold bg-[#00000012] text-[#23BE0A] mr-3 ">#{blog.tags[0]}</span><span className="px-2 py-0.5 rounded-2xl font-semibold bg-[#00000012] text-[#23BE0A] ">#{blog.tags[1]}</span></h1>
        </div>
        
        <hr className='my-4' />

        <div className=" flex gap-4">
                <div className="">{/*Left div */}
                    <h1 className=" text-[#2b2b2bb4] font-medium h-10">Number of Pages :</h1>
                    <h1 className=" text-[#2b2b2bb4] font-medium h-10">Publisher :</h1>
                    <h1 className=" text-[#2b2b2bb4] font-medium h-10">Year of Publishing :</h1>
                    <h1 className=" text-[#2b2b2bb4] font-medium h-10">Rating :</h1>
                </div>
                <div className="">{/*right div */}
                    <h1 className="text-base font-extrabold h-10">{blog.number_of_pages}</h1>
                    <h1 className="text-base font-extrabold h-10">{blog.publisher}</h1>
                    <h1 className="text-base font-extrabold h-10">{blog.year_of_publishing}</h1>
                    <h1 className="text-base font-extrabold h-10">{blog.books_rating}</h1>
                </div>
        </div>

                <div className="flex gap-5 my-4">
                    <div className=""><button onClick={addReadingList} className='btn border border-[#50B1C9] rounded px-5 font-bold'>Read</button></div>
                    <div className=""><button onClick={addwishList} className='btn  rounded bg-[#50B1C9] text-white font-bold'>Wishlis</button></div>
                </div>
                <ToastContainer />
    </div>
</div>


    );
};

export default Booksdetails;