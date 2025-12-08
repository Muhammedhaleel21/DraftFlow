import React from 'react'
import ChatInterface from '../components/ChatInterface'
import ToolBar from '../components/ToolBar'
import DocumentContent from '../components/DocumentContent'

function EditorPage() {
  return (
    <>
        <div className='flex h-full bg-gray-100'>
            <ChatInterface />

            <div className="w-px border-r border-gray-800/90"></div>

            <div className='flex-1 bg-white overflow-y-auto'>
    
                <ToolBar />

                <DocumentContent />
                
            </div>
        </div>
    </>
  )
}

export default EditorPage