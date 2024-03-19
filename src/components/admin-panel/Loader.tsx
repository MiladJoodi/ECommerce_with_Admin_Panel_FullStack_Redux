import React from 'react'

function Loader() {
  return (
    <div className='fixed w-full h-screen top-0 left-0 bg-[#0000006d] grid place-items-center'>
        <span className="loader"></span>
    </div>
  )
}

export default Loader