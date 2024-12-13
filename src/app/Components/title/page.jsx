import React from 'react'

const Title = ({title}) => {
  return (
    <div className="bg-gradient-to-b from-blue-300 to-[#ffffff] flex items-center justify-center h-60 md:h-80 w-full">
    <div>
      <h1 className="text-3xl text-center md:text-5xl text-primary font-extrabold">
        {title}
      </h1>
      <p className="mt-2 md:mt-5 text-center text-sm md:text-lg font-semibold">Pages / {title}</p>
    </div>
  </div>
  
  )
}

export default Title