import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCollection, removeToast } from '../redux/features/collectionSlice';

const CollectionCard = ({item}) => {

    const dispatch = useDispatch()

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }

  return (
    <div className='w-[18vw] relative h-105 bg-white rounded-xl overflow-hidden '>
       <a href={item.url} target="_blank" className='h-full'>
            {item.type == 'photo'? <img className='h-full w-full object-cover object-center' src={item.src} alt="" />: ''}
            {item.type == 'video'? <video className='h-full w-full object-cover object-center' autoPlay muted loop src={item.src}></video>: ''}
       </a>
      <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
        <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
        <button onClick={()=>{
          removeFromCollection(item)
        }} className='bg-red-500 active:scale-95 text-white px-3 py-1 rounded-lg cursor-pointer font-medium'>Remove</button>
      </div>
    </div>
  )
}

export default CollectionCard
