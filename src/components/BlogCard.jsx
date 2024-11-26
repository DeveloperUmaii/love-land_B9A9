

const BlogCard = () => {
    return (
        <a href="/Booksdetails"  className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        <article className="flex flex-col dark:bg-gray-50">
            <a rel="noopener noreferrer" href="/Booksdetails" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
            </a>
            <div className="flex flex-col flex-1 p-6">
                <a rel="noopener noreferrer" href="/Booksdetails" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" href="/Booksdetails" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">{blogs.books_genre}</a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{blogs[0].title}</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                    <span>{blogs.published_date}</span>
                    <span>{blogs.books_rating}</span>
                </div>
            </div>
        </article> {/* Grid_Box-01  */}


    </a> 
    );
};

export default BlogCard;