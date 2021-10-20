import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export const SignupModal = (props) => {
    if (!props.show)
        return null;
    return(
        <>
            <div onClick={props.onClose} className="fixed flex items-center justify-center left-0 top-0 right-0 bottom-0 bg-black bg-opacity-60 z-20 text-gray-600 backdrop-filter backdrop-blur-sm">
                <div onClick={e => e.stopPropagation()} className="bg-white w-2/5 rounded-lg p-6">
                    <div className="flex justify-between text-3xl">
                        <h3 className="">Sign Up</h3>
                        <button onClick={props.onClose} className="text-black">
                            <AiOutlineClose />
                        </button>
                    </div>
                    <div className="flex flex-col gap-6 mt-6">
                        <input type="text" className="w-full h-12 border-2 rounded p-3 outline-none focus:border-zomato-200" placeholder="Full Name" />
                        <input type="email" className="w-full h-12 border-2 rounded p-3 outline-none focus:border-zomato-200" placeholder="Email" />
                        <div className="flex">
                            <span>
                            <input type="checkbox" className="mt-2 mr-2 appearance-none form-tick border-2 checked:bg-zomato-400 checked:border-transparent w-5 h-5"/>
                            </span>
                            <p>I agree to Zomato's <span className="text-zomato-300">Terms of Service, Privacy Policy</span> and <span className="text-zomato-300">Content Policies</span></p>
                        </div>
                        <div>
                            <button className="w-full bg-zomato-400 text-white rounded-lg p-2">Create account</button>
                        </div>
                        <div className="flex items-center">
                            <hr className="w-1/2"/><span className="px-2">OR</span><hr className="w-1/2"/>
                        </div>
                        <div>
                        <button className="w-full rounded-lg p-2 flex items-center justify-center text-xl border-2"><FcGoogle className="mr-2 text-3xl" /> Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const  SigninModal = (props) => {
    if (!props.show)
        return null;
    return(
        <>
            <div onClick={props.onClose} className="fixed flex items-center justify-center left-0 top-0 right-0 bottom-0 bg-black bg-opacity-60 z-20 text-gray-600 backdrop-filter backdrop-blur-sm">
                <div onClick={e => e.stopPropagation()} className="bg-white w-2/5 rounded-lg p-6">
                    <div className="flex justify-between text-3xl">
                        <h3 className="">Sign In</h3>
                        <button onClick={props.onClose} className="text-black">
                            <AiOutlineClose />
                        </button>
                    </div>
                    <div className="flex flex-col gap-6 mt-6">
                        <input type="text" className="w-full h-12 border-2 rounded p-3 outline-none focus:border-zomato-200" placeholder="Email" />
                        <input type="password" className="w-full h-12 border-2 rounded p-3 outline-none focus:border-zomato-200" placeholder="Password" />
                        <div>
                            <button className="w-full bg-zomato-400 text-white rounded-lg p-2">Sign In</button>
                        </div>
                        <div className="flex items-center">
                            <hr className="w-1/2"/><span className="px-2">OR</span><hr className="w-1/2"/>
                        </div>
                        <div>
                        <button className="w-full rounded-lg p-2 flex items-center justify-center text-xl border-2"><FcGoogle className="mr-2 text-3xl" /> Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};