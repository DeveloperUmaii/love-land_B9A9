import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0); // ট্যাবের ইনডেক্স স্টেট

    const handleTabClick = (index) => {
        setTabIndex(index);  // ট্যাব ইনডেক্স সেট
    };

    return (
        <div>


            <div className="bg-[#1b1b1b17] rounded-2xl mx-16 my-4 mb-12 flex justify-center shadow-xl">
                <h1 className="text-6xl font-bold py-5 ">B  o  o  k  s</h1>
            </div>


            {/* ট্যাব সিলেক্টরের জন্য */}
            <div role="tablist" className="tabs tabs-lifted flex  ">
                {/* "Read Books" ট্যাব */}
                <Link
                    to=''
                    onClick={() => handleTabClick(0)} // ট্যাব ইনডেক্স ০ সেট
                    className={`tab ${tabIndex === 0 ? ' w-9/12 tab-active ' : 'w-3/12'}`}
                >
                    <h1 className={`${tabIndex === 0 ? 'text-3xl font-bold text-[#328EFF]  px-32 my-2 border-x-2 border-[#328EFF] ' : 'text-xl font-medium text-[#191a19af]'}`}>R e a d  B O O K s</h1>
                </Link>

                {/* "WishList Books" ট্যাব */}
                <Link
                    to='wishlist'
                    onClick={() => handleTabClick(1)} // ট্যাব ইনডেক্স ১ সেট
                    className={`tab ${tabIndex === 1 ? 'w-9/12 tab-active' : 'w-3/12'}`}
                >   <h1 className={`${tabIndex === 1 ? 'text-3xl font-bold text-[#32ff32] border-x-2 px-32 my-2 border-[#32ff32] ' : 'text-xl font-medium text-[#191a19af]'}`}>W i s h L i s t  B O O K s</h1>

                </Link>
            </div>

            {/* নেস্টেড রাউট রেন্ডার */}
            <Outlet />
        </div>
    );
};

export default ListedBooks;
