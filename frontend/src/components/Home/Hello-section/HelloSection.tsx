import React, { FC } from 'react'
import TextHello from './UI/TextHello'
import SocialLinks from './UI/SocialLinks'
import DeveloperPhoto from './DeveloperPhoto'

const HelloSection: FC = () => {
  return (
    <div className='flex items-center justify-center w-full m-10'>
      <TextHello/>
      <DeveloperPhoto/>
    </div>
  )
}

export default HelloSection
