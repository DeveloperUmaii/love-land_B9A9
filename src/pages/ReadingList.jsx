import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getreadSttorage } from "../forStoraeg/storage";

const ReadingBlogs = () => {
    const blogs = useLoaderData(); 
    const [blogsReaded, setBlogsReaded] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const handleBlogsFilter = (filter) => {
        let sortedBlogs = [...blogsReaded];
        if (filter === "Rating") {
            sortedBlogs.sort((a, b) => b.books_rating - a.books_rating); 
        } else if (filter === "Number of Pages") {
            sortedBlogs.sort((a, b) => b.number_of_pages - a.number_of_pages); 
        } else if (filter === "Publisher Year") {
            sortedBlogs.sort((a, b) => b.year_of_publishing - a.year_of_publishing); 
        }
        setFilteredBlogs(sortedBlogs);
    };

    useEffect(() => {
        const storedBlogIds = getreadSttorage(); 
        if (blogs.length > 0) {
            const readedBlogs = blogs.filter((blog) => storedBlogIds.includes(blog.id)); 
            setBlogsReaded(readedBlogs);
            setFilteredBlogs(readedBlogs); 
        }
    }, [blogs]);

    return (
        <div>


           
            <div className=" my-4 flex justify-center mt-8">
                {/* <label htmlFor="filter" className="font-bold mr-2">Sort By:</label> */}
                <select
                    id="filter"
                    onChange={(e) => handleBlogsFilter(e.target.value)}
                    className="text-center px-4 py-2   rounded-t-md  border-none bg-[#23BE0A] font-semibold text-white"
                > 
                    <option value="" className="underline underline-offset-2  border-none bg-[#ffffff] font-bold text-[#23BE0A] font-serif">Short by</option>
                    <option value="Rating" className="font-bold bg-[#ffffff] text-[#23BE0A]">Rating</option>
                    <option value="Number of Pages"  className="font-bold bg-[#ffffff] text-[#23BE0A]">Number of Pages</option>
                    <option value="Publisher Year"   className=" font-bold bg-[#ffffff] text-[#23BE0A]">Publisher Year</option>
                </select>
            </div>


            {filteredBlogs.length === 0 ? (
                <p>No blogs have been read yet!</p>
            ) : (
                filteredBlogs.map((blog) => (
                    <div key={blog.id} className="my-12">
                        <div className="border border-[#0c0c0c56] rounded-xl flex w-auto px-7 py-10 mx-10 my-6">
                            <div className="w-3/12 px-4">
                                <img
                                    src={blog?.cover}
                                    className="rounded-lg"
                                    alt={blog?.title}
                                />
                            </div>
                            <div className="w-9/12 px-4">
                                <h1 className="text-4xl font-bold">{blog?.title}</h1>
                                <h1 className="text-xl font-semibold my-4">
                                    By: {blog?.writers_name}
                                </h1>

                                <div className="my-4">
                                    <span className="pr-6 font-extrabold">Tags:</span>
                                    {blog?.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-0.5 rounded-2xl font-semibold bg-[#22be0a3b] text-[#23BE0A] mr-3"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="my-4">
                                    <h1 className="font-semibold text-[#141414ab]">
                                        Year of Publishing: {blog?.year_of_publishing}
                                    </h1>
                                </div>
                                <div className="my-4">
                                    <h1 className="font-semibold text-[#1b1b1b9f]">
                                        Publisher: {blog?.publisher}, Pages:{" "}
                                        {blog?.number_of_pages}
                                    </h1>
                                </div>

                                <hr className="my-4" />

                                <div className="flex gap-5 my-4">
                                    <div>
                                        <h1 className="bg-[#328eff46] text-[#328EFF] rounded-badge px-4 py-3 font-bold">
                                            Category: {blog?.books_category}
                                        </h1>
                                    </div>
                                    <div>
                                        <h1 className="rounded-badge bg-[#ffad333b] text-[#FFAC33] font-bold px-4 py-3">
                                            Rating: {blog?.books_rating}
                                        </h1>
                                    </div>
                                    <Link
                                        to={`/Booksdetails/${blog?.id}`}
                                        className="btn rounded-badge bg-[#32ff32] text-white font-bold"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ReadingBlogs;
