import React from 'react'

const DocumentContent = ({ answer, loading }) => {
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

            
            {loading && (
              <p className='text-gray-400'>Generating documentation...</p>
            )}

            {!loading && answer && (
              <div className='bg-[#1e1e1e] p-4 rounded-lg text-white whitespace-pre-wrap'>
                {answer}
              </div>
            )}

            {!loading && !answer && (
              <p className='text-gray-500'>
                Ask something to generate documentation.
              </p>
            )}

          </div>
        </div>
    </>
  )
}

export default DocumentContent
