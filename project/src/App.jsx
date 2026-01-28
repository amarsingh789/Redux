import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {

  async function getPhoto(){
    const data = await fetchPhotos('cat')
    console.log(data.results);
    
  }
  async function getVideo(){
    const data = await fetchVideos('cat')
    console.log(data.videos);
    
  }

  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
      <h1>Hello</h1>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-full m-5' onClick={getPhoto}>Get Photo</button>
       <button className='bg-blue-500 text-white px-3 py-2 rounded-full m-5' onClick={getVideo}>Get video</button>
    </div>
  )
}

export default App
App