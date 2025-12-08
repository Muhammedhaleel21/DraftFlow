import React, { useEffect, useRef, useState } from 'react'

const UserMenu = () => {

    const [open, setOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if(menuRef.current && !menuRef.current.contains(e.target)){
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);



  return (
    <>
        <div className='relative' ref={menuRef}>

            <button
                onClick={() => setOpen(!open)} 
                className='w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center font-semibold text-white hover:bg-purple-600 transition cursor-pointer'
            >
                LU
            </button>

            {open && (
                <div className='absolute right-0 mt-3 w-44 bg-[#121528] text-white rounded-xl shadow-lg border border-white/10 p-3 animate-fade z-50'>
                    <ul className='space-y-2'>
                        <li className='cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg'>
                            Profile
                        </li>
                        <li className='cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg'>
                            Settings
                        </li>
                        <li className='cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg'>
                            Help & Support
                        </li>
                        <li className='cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg'>
                            About
                        </li>
                        <li className='cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg'>
                            Privacy
                        </li>
                        <li className='cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg text-red-400'>
                            Logout
                        </li>
                    </ul>
                </div>
            )}
        </div>
    </>
  )
}

export default UserMenu
