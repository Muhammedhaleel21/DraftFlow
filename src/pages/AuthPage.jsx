import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthPage() {


  const [isSignIn, setIsSignIn] = useState(true);

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/home");
  }

  const handleSignUp = () => {
    setIsSignIn(!isSignIn);
  }

  const toggleMode = () => setIsSignIn(!isSignIn);
  

  return (
    <>
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2] p-6">

            <div className={`auth-container relative bg-white w-full max-w-5xl min-h-[620px] h-[620px] rounded-2xl shadow-xl overflow-hidden ${isSignIn ? '' : 'signup-mode'}`}>

                <div
                  className={`
                    form-container login-container absolute top-0 h-full w-1/2
                    transition-all duration-700 ease-in-out
                    ${isSignIn ? "translate-x-0 opacity-100 z-20" : "translate-x-full opacity-0 z-10"}
                  `}
                >
                    <div className="w-full h-full px-12 flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold mb-3 text-gray-900">Welcome Back!</h2>
                        <p className="text-gray-500 mb-6 text-center">Sign in to continue</p>

                        <button className="google-btn bg-white border-2 border-gray-300 w-full max-w-sm py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5" />
                            Continue with Google
                        </button>

                        <div className="my-6 w-full max-w-sm flex items-center">
                            <div className="h-px bg-gray-300 flex-1"></div>
                            <span className="px-3 text-gray-400">or</span>
                            <div className="h-px bg-gray-300 flex-1"></div>
                        </div>

                        <input
                            type="email"
                            placeholder="Email"
                            className="input-field w-full max-w-sm bg-gray-100 px-4 py-3 rounded-full mb-4 outline-none focus:bg-gray-200 transition-all duration-200"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="input-field w-full max-w-sm bg-gray-100 px-4 py-3 rounded-full mb-6 outline-none focus:bg-gray-200 transition-all duration-200"
                        />

                        <button
                            onClick={handleSignIn}
                            className="btn w-full max-w-sm bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-3 rounded-full font-semibold hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-[0_7px_14px_rgba(118,75,162,0.4)] cursor-pointer"
                        >
                            SIGN IN
                        </button>

                        <p className="text-gray-500 mt-6">
                            Don't have an account?{" "}
                            <span onClick={toggleMode} className="text-[#764ba2] font-semibold underline cursor-pointer hover:text-[#667eea] transition-colors">
                                Sign up here
                            </span>
                        </p>
                    </div>
                </div>


                <div
                    className={`
                        form-container signup-container absolute top-0 h-full w-1/2 left-0
                        transition-all duration-700 ease-in-out
                        ${isSignIn ? "opacity-0 z-10" : "opacity-100 z-20 translate-x-full"}
                    `}
                >

                    <div className="w-full h-full px-12 flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold mb-2 text-gray-900">Create Account</h2>
                        <p className="text-gray-500 mb-6 text-center">Join us today!</p>

                        <button className="google-btn bg-white border-2 border-gray-300 w-full max-w-sm py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5" />
                            Sign up with Google
                        </button>

                        <div className="my-4 w-full max-w-sm flex items-center">
                            <div className="h-px bg-gray-300 flex-1"></div>
                            <span className="px-3 text-gray-400">or</span>
                            <div className="h-px bg-gray-300 flex-1"></div>
                        </div>

                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            className="input-field w-full max-w-sm bg-gray-100 px-4 py-3 rounded-full mb-3 outline-none focus:bg-gray-200 transition-all duration-200" 
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="input-field w-full max-w-sm bg-gray-100 px-4 py-3 rounded-full mb-3 outline-none focus:bg-gray-200 transition-all duration-200" 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="input-field w-full max-w-sm bg-gray-100 px-4 py-3 rounded-full mb-3 outline-none focus:bg-gray-200 transition-all duration-200" 
                        />
                        <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            className="input-field w-full max-w-sm bg-gray-100 px-4 py-3 rounded-full mb-6 outline-none focus:bg-gray-200 transition-all duration-200" 
                        />

                        <button
                            onClick={handleSignUp}
                            className="btn w-full max-w-sm bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-3 rounded-full font-semibold hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-[0_7px_14px_rgba(118,75,162,0.4)] cursor-pointer"
                        >
                            SIGN UP
                        </button>

                        <p className="text-gray-500 mt-6">
                            Already have an account?{" "}
                            <span onClick={toggleMode} className="text-[#764ba2] font-semibold underline cursor-pointer hover:text-[#667eea] transition-colors">
                                Sign in here
                            </span>
                        </p>
                    </div>
                </div>

           
                <div
                    className={`
                        overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden
                        transition-transform duration-700 ease-in-out z-30
                        ${isSignIn ? "translate-x-0" : "-translate-x-full"}
                    `}
                >
                    <div
                        className={`
                            overlay relative left-[-100%] w-[200%] h-full bg-gradient-to-br from-[#667eea] to-[#764ba2]
                            transition-transform duration-700 ease-in-out
                            ${isSignIn ? "translate-x-0" : "translate-x-1/2"}
                        `}
                    >
                
                        <div
                            className={`
                                overlay-panel overlay-left absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center text-center text-white px-12
                                transition-transform duration-700 ease-in-out
                                ${isSignIn ? "-translate-x-1/5" : "translate-x-0"}
                            `}
                        >
                            <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
                            <p className="mb-6 px-8">
                                To keep connected with us please login with your personal info
                            </p>
                            <button
                                onClick={toggleMode}
                                className="ghost-btn border-2 border-white px-8 py-2 rounded-full font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                            >
                                Sign In
                            </button>
                        </div>

                
                        <div
                            className={`
                                overlay-panel overlay-right absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-center text-center text-white px-12
                                transition-transform duration-700 ease-in-out
                                ${isSignIn ? "translate-x-0" : "translate-x-1/5"}
                            `}
                        >
                            <h2 className="text-4xl font-bold mb-4">Hello, Friends!</h2>
                            <p className="mb-6 px-8">
                                Enter your personal details and start your journey with us
                            </p>
                            <button
                                onClick={toggleMode}
                                className="ghost-btn border-2 border-white px-8 py-2 rounded-full font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  );    
}

export default AuthPage;