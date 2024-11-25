import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
<div>
    <div className="navbar bg-base-100 shadow-lg fixed z-10 ">
            <div className="navbar-start">

                <h1 className='font-bold text-3xl'>Book Vibe</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                               <Link to='/' className='btn-sm mx-5 btn btn-outline bg-[#daf7d648] border-[#23BE0A] hover'>Home</Link>
                    <Link to='/ListedBooks' className='btn-sm mx-5 btn btn-outline bg-[#daf7d648]   border-[#23BE0A] hover'>listed Books</Link>
                    <Link to='/PagestoRead' className='btn-sm mx-5 btn btn-outline bg-[#daf7d648]   border-[#23BE0A] hover'>Pages to Read</Link>
                </ul>
            </div>  
        <div className="navbar-end gap-x-6">
            <a className="btn bg-[#23BE0A] text-white">Sign In</a>
            <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
        </div>
    </div>
</div>
    );
};

export default Nav;