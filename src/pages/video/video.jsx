import React from 'react'
import './video.css'
import Playvideo from '../../components/playvideo/playvideo.jsx'
import Recommended from '../../components/recommended/recommended.jsx'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {videoId,categoryId} = useParams();

  return (
    <div className='play-container'>
      <Playvideo videoId={videoId} />
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video
