import React from 'react'
import { fetchPhotos } from './api/mediaApi'

const App = () => {

  async function getPhoto(){
    const data = await fetchPhotos('cat')
    console.log(data.results);
    
  }

  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
      <h1>Hello</h1>
      <button onClick={getPhoto}>Get Photo</button>
    </div>
  )
}

export default App
App