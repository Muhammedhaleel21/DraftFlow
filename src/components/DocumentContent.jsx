import React from 'react'

const DocumentContent = () => {
  return (
    <>
        <div className='max-w-4xl mx-auto mt-7 h-[80vh] shrink-0'>


           <div
            contentEditable
            className="min-h-full rounded-lg border border-editor-border bg-editor p-12 shadow-lg outline-none focus:ring-2 focus:ring-primary/20"
            style={{
              lineHeight: "1.8",
              fontSize: "16px",
            }}
            suppressContentEditableWarning
          >

            <h1 className='text-4xl font-bold text-blue-600 text-center'>qwerty</h1>
            <hr className='border-blue-400 my-3' />

            <h2 className="text-2xl font-semibold text-blue-700 mt-6">Subheading</h2>

            <p className="mt-2 text-gray-700">qwertyuiopjhgfdsasdfghnbvcxzxcvbnmhgfdssdrtyuitrewnmnbvcxzasdfghjklpoiuytrewqqqqqqwertyuioplkjhgfdsazxcvbnm,</p>
          </div>
        </div>
    </>
  )
}

export default DocumentContent
