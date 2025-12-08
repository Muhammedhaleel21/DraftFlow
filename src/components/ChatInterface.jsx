import React from 'react'
import logo from '../assets/logo1_bg.png'
import { AiOutlineStar } from 'react-icons/ai'
import { FiMic, FiSend } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'


const ChatInterface = () => {

    const navigate = useNavigate();
    

  return (
    <>
      <div className='w-1/3 max-w-lg bg-[#1a1a24] text-white pt-3 flex flex-col min-h-screen'>

        <div className="flex items-center gap-1 group">
            <div className="
                w-[clamp(40px,8vw,48px)]
                h-[clamp(40px,8vw,48px)]
                rounded-full flex items-center justify-center
                bg-transparent overflow-hidden
                transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]
                group-hover:-translate-y-[2px]
                group-hover:rotate-[5deg]
                group-hover:scale-110
                group-hover:drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]
                group-hover:drop-shadow-[0_8px_25px_rgba(99,102,241,0.3)]
                cursor-pointer                
            ">
                <img
                    src={logo}
                    alt="logo"
                    className="w-[80%] h-[80%] object-contain animate-sparkle"
                    onClick={() => navigate('/home')}   
                />
            </div>
            <h1 className="
                font-bold
                text-[clamp(1.125rem,3vw,1.5rem)]
                bg-gradient-to-br from-[#6366f1] to-[#8b5cf6]
                bg-clip-text text-transparent
                transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]
                group-hover:bg-gradient-to-br
                group-hover:from-[#6366f1]
                group-hover:via-[#a855f7]
                group-hover:to-[#ec4899]
                cursor-pointer"
                
                onClick={() => navigate("/home")}
            >
                DraftFlow
            </h1>
        </div>

        <div className='w-full h-px bg-white/10 mt-2'></div>

        
        <div className="w-full max-w-[800px] flex flex-col flex-1 px-0 pb-2 mt-4">

            <div className="flex flex-col flex-1 overflow-hidden ml-4">

                <div className="
                    flex-1 overflow-y-auto min-h-0 p-2 
                    scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent 
                    hover:scrollbar-thumb-gray-400
                ">

                    <div className="pr-3 flex flex-col gap-4 pb-6">

                        {/* Received Message */}
                        <div className="flex justify-start">
                          <div className="bg-gray-700/60 p-4 rounded-xl text-sm">
                            Hi there! How can I help you today?
                          </div>
                        </div>

                        {/* Sent Message */}
                        <div className="flex justify-end ">
                          <div className="bg-purple-500 p-3 rounded-xl text-sm w-fit">
                            hvjv
                          </div>
                        </div>

                        {/* Received Message */}
                        <div className="flex justify-start">
                          <div className="bg-gray-700/60 p-4 rounded-xl text-sm">
                            The requested change could not be applied because the agent failed
                            to process the instruction. Please provide a clearer instruction.
                          </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* Input box */}
        <div className="flex items-center bg-[#1b1c2c] border border-white/10 rounded-xl px-4 py-3 mx-3 mb-4 mt-auto">

            <input
                type="text"
                placeholder="Ask anything..."
                className="flex-1 bg-transparent outline-none text-gray-200"
            />

            <AiOutlineStar className="text-gray-400 text-xl mx-3 cursor-pointer" />
            <FiMic className="text-gray-400 text-xl mx-3 cursor-pointer" />

            <button className="w-10 h-10 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center">
                <FiSend className="text-white text-xl" />
            </button>

        </div>

      </div>  
    </>
  )
}

export default ChatInterface



//bg-[#1a1a24]
//bg-[#0E0F1A]