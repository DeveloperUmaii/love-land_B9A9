import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getreadSttorage } from "../forStoraeg/storage";
//import ListedBlogCard from "../components/ListedBlogCard";

const ListedBooks = () => {
    const blogs = useLoaderData();
    const [tabIndex, setTabIndex] = useState (0)
    const [readedBlogs, setReadedeBlogs] = useState([]);
    useEffect ( () => {
        const storedReadIds = getreadSttorage();
        if(blogs.length > 0 ){
            // const blogsReaded = blogs.filter(blog => storedReadIds.includes(blog.id))
            const blogsReaded = [];
            for ( const id of storedReadIds) {
                const blog = blogs.find(blog => blog.id === id );
                if(blog){
                    blogsReaded.push(blog)
                }
            }
            setReadedeBlogs(blogsReaded);
            //console.log(blogs,storedReadIds, blogsReaded,);
            console.log(blogsReaded);
        }

    }, [])
    return (
        
<div>
            <h1>Listed Books:{readedBlogs.length}</h1>
 <div role="tablist" className="tabs tabs-lifted flex">

  <Link onClick={() => setTabIndex(1)} className={`tab ${tabIndex === 1 ? 'w-3/12 tab-active':'w-9/12' }`}>Read Books


  </Link>


  <Link onClick={() => tabIndex(0)} className={`tab ${tabIndex === 0 ? 'w-3/12 tab-active':'w-9/12' }`}>WishList Books</Link>
</div>


    {/* <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
         <Link to=''   
        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 ' : 'border-b'  }rounded-t-lg dark:border-gray-600 dark:text-gray-900`}> 

            <span></span>
        </Link>
        <Linkto={`WishList`}  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'  } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
            <span></span>
        </Link>
    </div>*/}

   
{ readedBlogs.map(blog =>
            <div>       <h1>{blog.title}</h1>       </div>)
      }
       
</div>);};

export default ListedBooks;