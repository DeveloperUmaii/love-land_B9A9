import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
<div className=''>
    <div className="navbar bg-base-100 shadow-lg fixed z-10 px-10 ">
            <div className="navbar-start">

                <h1 className='font-bold text-3xl'>Book Vibe</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to='/' className={({isActive})=>isActive?'btn-sm mx-5 btn btn-outline bg-[#ffffff] border-[#23BE0A] hover text-[#23BE0A] font-medium':'mx-5 text-[#00000080] font-semibold pt-2'}>Home</NavLink>
                    <NavLink to='/ListedBooks' className={({isActive})=>isActive?'btn-sm mx-5 btn btn-outline bg-[#ffffff] border-[#23BE0A] hover text-[#23BE0A] font-medium':'mx-5 text-[#00000080] font-semibold pt-2'}>listed Books</NavLink>
                    <NavLink to='/PagestoRead' className={({isActive})=>isActive?'btn-sm mx-5 btn btn-outline bg-[#ffffff] border-[#23BE0A] hover text-[#23BE0A] font-medium':'mx-5 text-[#00000080] font-semibold pt-2'}>Pages to Read</NavLink>
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