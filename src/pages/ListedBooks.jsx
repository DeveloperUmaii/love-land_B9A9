import { useState } from "react";
import useeAuth from "../hoook/useeAuth";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
//import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
   

    
    //     setTabIndex(index);  // ট্যাব ইনডেক্স সেট
    // };
    const { user } = useeAuth();
    console.log(user); //DONT COMMENT THiS Console
    return (
<div className="">
         <div className="flex flex-col justify-center items-center bg-[#8d8d8d18]">


            <div className="w-1/3 bg-[#1b1b1b17] rounded-2xl mx-16 my-4 mb-12 flex justify-center shadow-xl">
                <h1 className="text-6xl font-bold py-5 text-[#269c14] text-center ">P R O F I L E</h1>
            </div>

            <div className="  w-5/12 py-8 bg-[#1b1b1b17] rounded-2xl mx-16 my-4 mb-12 flex flex-col   items-center  shadow-xl">
                <div className="mb-4  avatar flex justify-center ">
                    <div className=" p-0.5 border-2 border-[#ffffffd5]  w-24 rounded-xl ">
                        <img className="rounded-lg shadow-md" src={user?.photoURL ||"https://i.ibb.co.com/8cH4DVR/images-avatar.png" } />
                    </div>
                </div>

                <h className="text-center px-2 my-3 border   mx-32 w-7/12 rounded-lg bg-[#f8f8f8b2] text-[#505050] text-3xl font-bold ">{user?.displayName ||'User Name Not Found'}</h> 
                <h className="px-3 my-1 border   mx-32 w-auto pb-1 rounded-lg bg-[#f8f8f8b2] text-[#288819] text-xl">{user?.email ||'User Email Not Found'}</h>
            </div>
            <div className="   w-4/12 py-2 bg-[#3ff822] hover:bg-[#39ac27] rounded-2xl mx-16 my-4 mb-12 flex flex-col   items-center  shadow-xl">
                    <NavLink to='/Updateprofile' className="   text-white text-3xl font-bold pb-1.5" >Update Profile</NavLink>
            </div>

            
         
           
        </div>  
         <Footer></Footer>
</div>

        
    );
    
};

export default ListedBooks;
