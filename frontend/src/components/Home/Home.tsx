import React from 'react'
import { useLoaderData } from 'react-router-dom'
import HelloSection from './Hello-section/HelloSection'


export const Home: React.FC = () => {

  return (
    <div className='flex flex-col items-center h-screen justify-center text-white'>
      <HelloSection/>
    </div>
  )
}
