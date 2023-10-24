import React from 'react'
import {BsInstagram} from 'react-icons/bs'


const SocialButton = () => {
  return (
    <div className='text-2xl rounded-xl p-2 mr-4 hover:animate-pulse cursor-pointer' style={{backgroundColor: '#8b48c5'}}>
      <BsInstagram size={25}/>
    </div>
  )
}

export default SocialButton
