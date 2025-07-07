import React from 'react'
import PlayVideo from '../Components/PlayVideo'
import Recommanded from '../Components/Recommanded'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {videoId, categoryId} = useParams();
  
  return (
    <div className='bg-gray-100 px-2 py-5 flex justify-between gap-5'>
      <PlayVideo videoId={videoId}/>
      <Recommanded />
    </div>
  )
}

export default Video
