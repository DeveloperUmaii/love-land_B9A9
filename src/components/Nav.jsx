import React from 'react';
import { data, Link, NavLink } from 'react-router-dom';
import useeAuth from '../hoook/useeAuth';
//npm run dev
const Nav = () => {
const {Logout ,user } = useeAuth();
console.log(user); //DONT COMMENT THiS Console

    return (
<div className=''>
    
    <div className="navbar bg-base-100 shadow-lg fixed z-10 px-10 ">
            <NavLink to='/' className="navbar-start flex">

                <h1 className=' font-bold text-3xl hover:shadow-lg'>
                    <span className='text-[#5b5c5b7e] '>L</span>
                    <span className='text-[#22be0a] '>o</span>
                    <span className='text-[#5b5c5b7e] '>VE </span>
                    <span className='text-[#ff3e3e] text-4xl font-black'>.</span>
                    <span className='text-[#5b5c5b7e] '>L</span>
                    <span className='text-[#5b5c5b7e] '>and </span>
                     </h1>
            </NavLink>
            <div className="navbar-center  flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to='/' className={({isActive})=>isActive?' hover:bg-[#22be0a]  hover:shadow-lg transition btn-sm mx-5 btn btn-outline bg-[#ffffff] border-[#23BE0A] border-2 border-x-0 border-t-0 text-[#23BE0A] font-medium':'mx-5 text-[#00000080] font-semibold pt-2'}>Home</NavLink>

                    <NavLink to='/Updateprofile' className={({isActive})=>isActive?'hover:bg-[#22be0a] hover:shadow-lg transition btn-sm mx-5 btn btn-outline bg-[#ffffff] border-[#23BE0A] border-2 border-x-0 border-t-0  hover text-[#23BE0A] font-medium':'mx-5 text-[#00000080] font-semibold pt-2'}>Update Profile</NavLink>
                    <NavLink to='/Userprofile' className={({isActive})=>isActive?'hover:bg-[#22be0a] hover:shadow-lg transition btn-sm mx-5 btn btn-outline bg-[#ffffff] border-[#23BE0A] border-2 border-x-0 border-t-0  hover text-[#23BE0A] font-medium':'mx-5 text-[#00000080] font-semibold pt-2'}>User Profile</NavLink>

                    <NavLink to='/PagestoRead' className={({isActive})=>isActive?'hover:bg-[#22be0a] hover:shadow-lg transition btn-sm mx-5 btn btn-outline bg-[#ffffff] border-[#23BE0A] border-2 border-x-0 border-t-0  hover text-[#23BE0A] font-medium':'mx-5 text-[#00000080] font-semibold pt-2'}>About Us</NavLink>

                </ul>
            </div>  
        <div className="navbar-end gap-x-6">
            {/* <a className="btn bg-[#23BE0A] text-white">Sign In</a> */}
            {
                user? <div className="flex ">
                        <h1 className='flex items-center border-[#ff1919] border rounded-xl px-2 text-sm 
                         text-[#32ad1f] font-bold'>{user?.displayName || 'Name Notfound'}</h1>

                            <div className="avatar mx-2 border rounded-full border-[#f00] tooltip  tooltip-bottom" data-tip="Profile">
                                <div className=" w-8 m-0.5 rounded-full tooltip" data-tip="Profile"  >
                                    <NavLink to='Userprofile'  >
                                        <img src={user?.photoURL ||"https://i.ibb.co.com/8cH4DVR/images-avatar.png" } />
                                    </NavLink>
                                </div>
                          </div>  
                        <button onClick={Logout} className="border-[#ff1919] border-2 bg-[#ff1919] hover:bg-[#cc0f0f] hover:shadow-lg transition btn-sm  btn   hover text-[#ffffff] font-medium rounded-xl">Log Out</button>
                    </div> : 
                        <div className="">
                            
                            <NavLink to='/Register' className={({isActive})=>isActive?'hover:bg-[#22be0a] hover:shadow-lg transition btn-sm mx-5 btn  bg-[#23BE0A] hover text-[#ffffff] font-medium':'mx-5 text-[#23BE0A] font-bold hover:bg-[#23BE0A] hover:shadow-lg transition btn-sm  btn btn-outline bg-[#ffffff] border-[#23BE0A] border-2  hover items-center '}>Register</NavLink>

                            <NavLink to='/login' className={({isActive})=>isActive?'hover:bg-[#22be0a] hover:shadow-lg transition btn-sm mx-5 btn  bg-[#23BE0A] hover text-[#ffffff] font-medium':'mx-5 text-[#23BE0A] font-bold hover:bg-[#23BE0A] hover:shadow-lg transition btn-sm  btn btn-outline bg-[#ffffff] border-[#23BE0A] border-2  hover items-center '}>Log In</NavLink>

                        </div>
                        
                        
            }
            
        </div>
    </div>
</div>
    );
};

export default Nav;