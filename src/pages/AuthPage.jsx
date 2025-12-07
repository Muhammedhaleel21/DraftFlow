import React from 'react'
import { useNavigate } from 'react-router-dom'

function AuthPage() {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/home");
    }

  return (
    <>
        <div className='w-full min-h-screen bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center px-4'>
            <div className='bg-white rounded-2xl shadow-xl flex w-full max-w-5xl'>

            
                <div className='w-1/2 px-12 py-16'>
                    <h1 className='text-3xl font-bold mb-2 text-gray-900 text-center'>Welcome Back!</h1>
                    <p className='text-gray-500 mb-8 text-center'>Sign in to your account</p>

                    <button className='w-full border rounded-full py-2 flex items-center justify-center gap-2 text-gray-700 shadow-sm cursor-pointer'>
                        <img
                            src="https://www.svgrepo.com/show/355037/google.svg"
                            alt="google"
                            className="w-5"
                        />
                        Continue with Google
                    </button>

                    <div className='flex items-center my-6'>
                        <div className='flex-1 h-px bg-gray-300'></div>
                        <span className='text-gray-400 px-4'>or</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    <input
                        type='email'
                        placeholder='Email'
                        className='w-full bg-gray-100 px-4 py-3 rounded-full mb-4 outline-none'
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        className='w-full bg-gray-100 px-4 py-3 rounded-full mb-6 outline-none'
                    />

                    <button 
                        className='w-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white py-3 rounded-full font-semibold cursor-pointer'
                        onClick={handleLogin}
                    >
                        SIGN IN
                    </button>

                    <p className='text-gray-500 text-sm mt-6 text-center'>
                        Don’t have an account?{" "}
                        <a href="#" className='font-semibold underline text-purple-600'>
                            Sign up here
                        </a>
                    </p>
                </div>

                <div className='w-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-r-2xl px-12 py-20 flex flex-col items-center justify-center'>
                    <h1 className='text-4xl font-bold mb-4'>Hello, Friends!</h1>
                    <p className='mb-6 text-center px-8 leading-relaxed'>
                        Enter your personal details and start your journey with us
                    </p>

                    <button className='border border-white px-8 py-2 rounded-full font-semibold cursor-pointer'>
                        SIGN UP
                    </button>
                </div>

            </div>
        </div>
    </>
  )
}

export default AuthPage
