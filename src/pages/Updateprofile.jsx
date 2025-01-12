import React from 'react';
import useeAuth from '../hoook/useeAuth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Updateprofile = () => {

    const { updateUserProfile, user} = useeAuth ();
    const navigate = useNavigate()
    const { 
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        
        // console.log(data)
        //// const {email, password} = data
        const { email, password, name, photourl } = data;

        updateUserProfile(name, photourl)
        .then(() => {
            navigate('/Userprofile');
            console.log("Profile updated successfully!");
            // success handling GTPPPP
        })
        .catch(error => {
            console.error("Error updating profile: ", error);
            // error handling
        });
        
    
    ;

    }
    return (
        <div className='bg-[#4b4b4b15]'>
            {/* <h1 className="text-4xl">Update PROFILE</h1> */}
            <div className="">
                <div className='flex justify-center py-7 '>
                    <div className="card shrink-0 w-full max-w-lg p-6 px-11 shadow-2xl bg-base-100 h-4/6">
                        <h1 className="text-5xl text-center font-bold pt-10 text-[#ff00009a]">EDIT your<br />Profile Now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            

                            {/* <form onSubmit={handleSubmit(onSubmit)} className="card-body"> */}
                            <div className="form-control">
                                <label className="label flex justify-end ">
                                    <span className="label-text">Email</span>
                                </label>
                                <h1 className="text-[#36c421] rounded-md  pb-1.5 bg-[#8888882a] text-2xl font-medium text-center ">{user?.email ||'??@gmail.com'}</h1>

                                {/* {errors.name && <span className="text-xs text-red-500">Name is required !</span>} */}
                                {/* {errors.name && toast.success('Name')} */}
                            </div>

                            <div className="form-control">
                                <label className="label flex justify-end ">
                                    <span className="label ">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name" placeholder="Enter Your Name"
                                    className="input input-bordered"
                                {...register("name", { required: true })}
                                />

                                {errors.name && <span className="text-xs text-red-500">Name is required !</span>}
                                {/* {errors.name && toast.success('Name')} */}
                            </div>

                            <div className="form-control ">
                                <label className="label flex justify-end ">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="url"
                                    name="photourl"
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                {...register("photourl")}
                                />
                                {/* {errors.photourl && toast.success('Photo Url')} */}
                                {errors.photourl && <span className="text-xs text-red-500">Insert Photo !</span>}
                            </div>
 
                            <div className="form-control my-6">
                                <button type="submit" className="btn  bg-[#32ad1f] hover:bg-[#4b4b4bd2] text-white text-3xl font-bold pb-1.5">Update Now</button>
                            </div>
                        </form>
                        {/* <h3 className="text-black text-center -mt-7">Have an account? <NavLink to="/login" className="text-[#007AFF] font-bold ">Sing In</NavLink></h3> */}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Updateprofile;