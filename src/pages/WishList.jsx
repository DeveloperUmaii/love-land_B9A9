import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getWishSttorage } from "../forStoraeg/wishstore";

const WishingBlogs = () => {
    const blogs = useLoaderData();
    const [blogsWished, setBlogsWished] = useState([]);
    const [sortCriteria, setSortCriteria] = useState(""); 

    useEffect(() => {
        const storedBlogIds = getWishSttorage();

        if (blogs.length > 0) {
            const wishedBlogs = blogs?.filter((blog) =>
                storedBlogIds.includes(blog.id)
            );
            setBlogsWished(wishedBlogs);
        }
    }, [blogs]);

    const handleSort = (criteria) => {
        let sortedBlogs = [...blogsWished]; 
        if (criteria === "rating") {
            sortedBlogs.sort((a, b) => b.books_rating - a.books_rating);
        } else if (criteria === "pages") {
            sortedBlogs.sort((a, b) => b.number_of_pages - a.number_of_pages);
        } else if (criteria === "year") {
            sortedBlogs.sort((a, b) => b.year_of_publishing - a.year_of_publishing);
        }
        setSortCriteria(criteria);
        setBlogsWished(sortedBlogs);
    };

    return (
        <div>


        
            <div className="my-4 flex justify-center mt-8 ">
                {/* <label htmlFor="sort" className="mr-2 text-lg font-semibold">
                    Sort By:
                </label> */}
                <select
                    id="sort"
                    className="text-center px-4 py-2   rounded-t-md  border-none bg-[#23BE0A] font-semibold text-white"
                    onChange={(e) => handleSort(e.target.value)}
                >
                    <option value="" className="underline underline-offset-2  border-none bg-[#ffffff] font-bold text-[#23BE0A] font-serif">Short by</option>
                    <option value="rating" className="font-bold bg-[#ffffff] text-[#23BE0A]">Rating</option>
                    <option value="pages">Number of Pages</option>
                    <option value="year" className=" font-bold bg-[#ffffff] text-[#23BE0A]">Publisher Year</option>
                </select>
            </div>

          
            {blogsWished.length === 0 ? (
                <p>No blogs have been Wished yet!</p>
            ) : (
                blogsWished.map((blog) => (
                    <div key={blog.id} className="my-12">
                        <div className="border border-gray-300 rounded-xl flex w-auto px-7 py-10 mx-10 my-6">
                            <div to={`/Booksdetails/${blog.id}`} className="w-3/12 px-4">
                                <img
                                    src={blog?.cover}
                                    alt="Blog Cover"
                                    className="rounded-lg"
                                />
                            </div>

                            <div className="w-9/12 px-4">
                                <h1 className="text-4xl font-bold">{blog?.title}</h1>
                                <h1 className="text-xl font-semibold my-4">
                                    By : {blog?.writers_name}
                                </h1>

                                <div className="my-4 flex gap-2">
                                    <h1>
                                        <span className="pr-6 font-extrabold">Tag</span>
                                        {blog?.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-0.5 rounded-2xl font-semibold bg-[#22be0a3b] text-[#23BE0A] mr-3"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </h1>
                                    <h1 className="ml-4 font-semibold text-[#141414ab]">
                                        Year of Publishing: {blog?.year_of_publishing}
                                    </h1>
                                </div>
                                <div className="my-4 flex gap-2">
                                    <h1 className="font-semibold text-[#1b1b1b9f]">
                                        Publisher : {blog?.publisher}
                                    </h1>
                                    <h1 className="font-semibold text-[#1b1b1b9f]">
                                        Pages: {blog?.number_of_pages}
                                    </h1>
                                </div>

                                <hr className="my-4" />

                                <div className="flex gap-5 my-4">
                                    <div>
                                        <h1 className="bg-[#328eff46] text-[#328EFF] rounded-badge px-4 py-3 font-bold">
                                            Category : {blog?.books_category}
                                        </h1>
                                    </div>
                                    <div>
                                        <h1 className="rounded-badge bg-[#ffad333b] text-[#FFAC33] font-bold px-4 py-3">
                                            Rating : {blog?.books_rating}
                                        </h1>
                                    </div>
                                    <Link to={`/Booksdetails/${blog?.id}`}>
                                        <button className="btn rounded-badge bg-[#50B1C9] text-white font-bold">
                                            View Details
                                        </button>
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

export default WishingBlogs;
