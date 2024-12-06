import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getWishSttorage } from "../forStoraeg/wishstore";
//import { getWishSttorage } from "../forStoraeg/storage";



const WishingBlogs = () => {
                                                                                                       
    const blogs = useLoaderData(); 
                           const [blogsWished, setBlogsWished] = useState([]);                                                 
    useEffect(() => {
//        const storedBlogIds = getWishSttorage();               
          const storedBlogIds = getWishSttorage();               

        console.log(blogs);
        if (blogs.length > 0) {
                                 const WishedBlogs = blogs?.filter(blog => storedBlogIds.includes(blog.id));                        
            setBlogsWished(WishedBlogs);                                                                           
            console.log(WishedBlogs, blogs, storedBlogIds);                                                             
        }
    }, [blogs]);                                                                                        

    return (
        <div>
            
            {blogsWished.length === 0 ? (
                <p>No blogs have been Wish yet!</p>
            ) : (
                blogsWished.map(blog => (
                    <div key={blog.id} className="my-12">
                        
                        








                        <div className=' border border-[#0c0c0c56] rounded-xl  flex w-auto px-7 py-10 mx-10 my-6'>  {/* border-4 border-solid border-blue-500 */}
                        <div to={`/Booksdetails/${blog.id}`} className="w-3/12 px-4">
                            <img
                                src={blog?.cover}
                                className=" rounded-lg " />


                        </div>

                        <div className="w-9/12   px-4">{/* border-4 border-solid border-red-500  */}
                            <h1 className='text-4xl font-bold '>{blog?.title}</h1>
                            <h1 className='text-xl font-semibold my-4'>By  : {blog?.writers_name}</h1>


                            <div className="my-4 flex gap-">
                                <h1 className=''><span className="pr-6 font-extrabold ">Tag</span><span className="px-2 py-0.5 rounded-2xl font-semibold bg-[#22be0a3b] text-[#23BE0A] mr-3 ">#{blog?.tags[0]}</span><span className="px-2 py-0.5 rounded-2xl font-semibold bg-[#22be0a3b] text-[#23BE0A] ">#{blog?.tags[1]}</span></h1>
                                <h1  className="ml-4 font-semibold  text-[#141414ab]">Year of Publishing:  {blog?.year_of_publishing}</h1>
                            </div>
                            <div className="my-4 flex gap-">
                                <h1 className=''><span className=" font-semibold  text-[#1b1b1b9f] mr-3 ">Publisher :  {blog?.publisher}</span><span className=" font-semibold  text-[#1b1b1b9f]">Page {blog?.number_of_pages}</span></h1>
                            </div>

                            <hr className='my-4' />



                            <div className="flex gap-5 my-4">
                                <div className=""><h1  className='bg-[#328eff46] text-[#328EFF]  rounded-badge px-4 py-3 font-bold'>Category : {blog?.books_category}</h1></div>
                                <div className=""><h1  className='  rounded-badge bg-[#ffad333b] text-[#FFAC33] font-bold px-4 py-3 '>Rating : {blog?.books_rating}</h1></div>
                                <Link to={`/Booksdetails/${blog?.id}`} className=""><button  className='btn  rounded-badge bg-[#50B1C9] text-white font-bold'>View Details</button></Link>
                            </div>
                        
                        </div>

                    </div>






                        
                    </div>
                ))
            )}
        </div>
    );
};

export default WishingBlogs;
