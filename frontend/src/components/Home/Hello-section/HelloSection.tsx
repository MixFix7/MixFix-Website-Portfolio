import React, { FC } from 'react'
import TextHello from './UI/TextHello'
import SocialLinks from './UI/SocialLinks'

const HelloSection: FC = () => {
  return (
    <div className='flex items-center justify-center m-10 w-full'>
      <TextHello/>
    </div>
  )
}

export default HelloSection
