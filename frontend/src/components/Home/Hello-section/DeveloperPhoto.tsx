import React from 'react'
import { SERVER_URL } from '../../Routing/Routing'

const DeveloperPhoto = () => {
  return (
    <div className='w-1/3'>
      <div className='w-2/3 h-2/3'>
        <img src={SERVER_URL + '/media/images/DSC_0545.png'} alt="" />
      </div>
    </div>
  )
}

export default DeveloperPhoto
