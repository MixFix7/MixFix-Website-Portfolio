import React from 'react'
import LabelFullStackDeveloper from './LabelFullStackDeveloper'
import SocialLinks from './SocialLinks'
import ButtonDownloadCV from './ButtonDownloadCV'


const TextHello = () => {
  return (
    <div className='flex flex-col justify-start items-start w-2/5 font-semibold'>
      <div>
        <h1 className='text-5xl'>Hello, it's me</h1>
        <div>
          <h1 className='text-7xl my-2'>Lubomyr Mashtaliar</h1>  
        </div>

        <div className='flex items-center justify-start text-5xl my-4'>
          <h1 className='mr-2'>
            And i'm a
          </h1>
          <div className='animate-pulse'>
            <h1>
              Full-Stack
            </h1>
          </div>
        </div>
        
        <h1 className='text-lg w-4/6'>
          I'm a great specialist in web development.
          My goal is to create websites, applications, and algorithms necessary for business
        </h1>

        <SocialLinks/>

        <ButtonDownloadCV/>
      </div>
    </div>
  )
}

export default TextHello
