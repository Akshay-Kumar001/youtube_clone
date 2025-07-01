import React from 'react'
import PlayVideo from '../Components/PlayVideo'
import Recommanded from '../Components/Recommanded'

const Video = () => {
  return (
    <div className='bg-gray-100 px-2 py-5 flex justify-between gap-5'>
      <PlayVideo />
      <Recommanded />
    </div>
  )
}

export default Video
