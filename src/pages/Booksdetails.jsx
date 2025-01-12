import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savereaddata } from '../forStoraeg/storage';
import { saveWISHdata } from '../forStoraeg/wishstore';
import Footer from '../components/Footer';
//import ReadingList from './ReadingList';


const Booksdetails = () => {
    const blogs = useLoaderData();
    const { id } = useParams()
    const idIn = parseInt(id);

    const blog = blogs.find(blog => blog.id === idIn);
    // console.blog(blogs)

    const addReadingList = () => { savereaddata(idIn); toast("Save to Read list!"); }

    const addwishList = () => { saveWISHdata(idIn); toast("Save to wish list!"); }





    return (
        <div className="">

            <div className=' lg:flex w-full px-4 py-10 pt-4 '>  {/* border-4 border-solid border-blue-500 */}
                <div to={`/Booksdetails/${blog.id}`} className="1/2 px-4">
                    <img
                        src={blog?.image || ''}
                        className=" rounded-lg " />


                </div>

                <div className="w-1/2   px-4">{/* border-4 border-solid border-red-500  */}
                    <h1 className='text-4xl font-bold '>#Segment : <span className='text-[#23BE0A] '>{blog?.segment_name}</span></h1>
                    <h1 className='text-3xl font-semibold my-4'>Price : <span className='text-[#fff] text-  bg-[#f00a0a] px-3 py-0.5 rounded font-bold  '>{blog?.price}</span></h1>
                    <hr className='my-3' />
                    <hr className='my-2' />
                    <p className='font-extralight text-sm leading-6'><span className='text-[#23BE0A] text-sm font-bold '>About : </span>{blog?.description}</p>
                    <div className="card-actions justify-start py-5">
                        <span className="text-[#23BE0A] pr-6 font-extrabold ">LOCATION :</span>
                        <div className="  flex justify-center items-center w-9 h-9 pb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 90">
                                <ellipse cx="45" cy="86.5" rx="33" ry="4.5" fill="#04DB78" />
                                <path d="M45 0C29.9 0 17.6 12.3 17.6 27.4 17.6 46.6 43.9 66.6 45 90c1.1-23.4 27.4-43.4 27.4-62.6C72.4 12.3 60.1 0 45 0z" fill="#23BE0A" />
                                <circle cx="45.01" cy="26.57" r="12.5" fill="#FFF" />
                            </svg>
                        </div>
                        <div className="badge badge-outline border-none font-bold bg-[#22be0a3b] text-[#23BE0A]">{blog?.location[0]}</div>
                        <div className="badge badge-outline border-none font-bold bg-[#22be0a3b] text-[#23BE0A]"> {blog?.location[1]}</div>
                    </div>

                    <hr className='my-4' />

                    <div className=" flex gap-4">
                        <div className="">{/*Left div */}
                            <h1 className=" text-[#2b2b2bb4] font-medium h-10">Status :</h1>
                            <h1 className=" text-[#2b2b2bb4] font-medium h-10">Area :</h1>
                            <h1 className=" text-[#2b2b2bb4] font-medium h-10">Facilities :</h1>
                        </div>
                        <div className="">{/*right div */}
                            <h1 className="text-base font-extrabold h-10">{blog?.status}</h1>
                            <h1 className="text-base font-extrabold h-10">{blog?.area}</h1>
                            <h1 className="text-base font-extrabold h-10">
                                <span className='border border-[#23BE0A] rounded text-[#23BE0A] px-2 text-sm font-bold mr-2'>{blog?.facilities[0] || ''},  </span>
                                <span className='border border-[#23BE0A] rounded text-[#23BE0A] px-2 text-sm font-bold mr-2'>{blog?.facilities[1] || ''},  </span>
                                <span className='border border-[#23BE0A] rounded text-[#23BE0A] px-2 text-sm font-bold mr-2'>{blog?.facilities[2] || ''},  </span>
                                <span className='border border-[#23BE0A] rounded text-[#23BE0A] px-2 text-sm font-bold mr-2'>{blog?.facilities[3] || ''}  </span>
                            </h1>
                        </div>
                    </div>

                    {/* <div className="flex gap-5 my-4">
                        <div className=""><button onClick={addReadingList} className='btn border border-[#50B1C9] rounded px-5 font-bold'>Read</button></div>
                        <div className=""><button onClick={addwishList} className='btn  rounded bg-[#50B1C9] text-white font-bold'>Wishlis</button></div>
                    </div> */}
                    <ToastContainer />
                </div>

            </div>
            {/* <ReadingList></ReadingList> */}
            <Footer></Footer>

        </div>



    );
};

export default Booksdetails;